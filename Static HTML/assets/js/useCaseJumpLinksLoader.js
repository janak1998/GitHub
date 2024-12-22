document.addEventListener("DOMContentLoaded", () => {
  const blogId = document.body.getAttribute("data-blog-id");

  if (!blogId) {
    console.error("data-blog-id attribute not found on the body element.");
    return;
  }

  fetch("/data/blogs.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch blogs.json: ${response.status}`);
      }
      return response.json();
    })
    .then((blogs) => {
      if (!Array.isArray(blogs)) {
        throw new Error("Invalid blogs.json format: expected an array.");
      }

      const blog = blogs.find((b) => b.id === blogId);

      if (blog && Array.isArray(blog.content)) {
        renderJumpLinks(blog.content);
      } else {
        console.error(
          `Blog with ID ${blogId} not found or invalid content in blogs.json.`
        );
      }
    })
    .catch((error) => {
      console.error("Error loading blog content:", error);
    });

  const currentHash = window.location.hash;

  const matchingLinks = document.querySelectorAll(`a[href="${currentHash}"]`);

  matchingLinks.forEach((link) => {
    link.classList.add("active-hash-link");
  });

  window.addEventListener("hashchange", () => {
    document.querySelectorAll(".active-hash-link").forEach((link) => {
      link.classList.remove("active-hash-link");
    });

    const newHash = window.location.hash;
    document.querySelectorAll(`a[href="${newHash}"]`).forEach((link) => {
      link.classList.add("active-hash-link");
    });
  });
});

function renderJumpLinks(content) {
  const detailLeftInner = document.querySelector(".detail-left-inner");
  if (!detailLeftInner) {
    console.error(".detail-left-inner not found.");
    return;
  }

  detailLeftInner.innerHTML = "";

  const sectionHeader = document.createElement("div");
  detailLeftInner.appendChild(sectionHeader);

  const headings = content.filter((item) => /^(h3|h4)$/.test(item.type));

  let h3Count = 0; // Counter for unique identification of h3 elements

  headings.forEach((heading) => {
    const link = document.createElement("a");

    let sanitizedHref = heading.text
      .replace(/<\/?strong>/g, "")
      .replace(/[0-9]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .toLowerCase();

    sanitizedHref = sanitizedHref.replace(/^[^a-z]+/, "");

    link.href = `#${sanitizedHref}`;
    link.textContent = heading.text.replace(/<\/?strong>/g, "");
    link.className = "jump-link";

    if (heading.type === "h3") {
      h3Count += 1;

      const currentH3 = document.createElement("div");
      currentH3.className = `jump-link-h3 h3-${h3Count}`;

      const sublist = document.createElement("div");
      sublist.className = `jump-link-sublist sublist-${h3Count}`;
      sublist.style.display = "none";

      currentH3.appendChild(link);
      currentH3.appendChild(sublist);
      detailLeftInner.appendChild(currentH3);

      addAccordionLogic(currentH3, sublist);

      link.removeAttribute("href");
    } else if (heading.type === "h4") {
      const sublink = document.createElement("a");
      sublink.href = link.href;
      sublink.textContent = link.textContent;
      sublink.className = "jump-link-h4";

      // Append to the last created sublist
      const lastSublist = detailLeftInner.querySelector(`.sublist-${h3Count}`);
      if (lastSublist) {
        lastSublist.appendChild(sublink);
      }
    }
  });
}
function addAccordionLogic(currentH3, sublist) {
  // Add accordion class to parent if sublist is not empty

  currentH3.addEventListener("click", (event) => {
    // Prevent event bubbling
    event.stopPropagation();

    // Close all other sublists
    

    // Toggle the current sublist
    if (sublist.style.display === "block") {
      sublist.style.display = "none"; // Hide this sublist if open
      currentH3.classList.remove("accordion-open"); // Remove accordion class
    } else {
      sublist.style.display = "block"; // Show this sublist
      currentH3.classList.add("accordion-open"); // Add accordion class
    }
  });

  document.querySelectorAll(".jump-link-sublist").forEach((otherSublist) => {
      if (otherSublist !== sublist) {
        otherSublist.style.display = "none";
        const otherParent = otherSublist.parentElement;
        if (otherParent) {
          otherParent.classList.remove("accordion-open"); // Remove accordion class for non-active sublists
        }
      }
    });

  if (sublist && sublist.hasChildNodes()) {
    currentH3.classList.add("accordion");
  }
}

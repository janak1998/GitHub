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
        const structuredContent = buildStructure(blog.content);
        renderJumpLinks(structuredContent);
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

function buildStructure(content) {
  const structure = [];
  let currentH3 = null;

  content.forEach((item) => {
    if (item.type === "h3") {
      currentH3 = { title: item.text, children: [] };
      structure.push(currentH3);
    } else if (item.type === "h4" && currentH3) {
      currentH3.children.push({ title: item.text });
    }
  });

  return structure;
}

function renderJumpLinks(structure) {
  const detailLeftInner = document.querySelector(".detail-left-inner");
  if (!detailLeftInner) {
    console.error(".detail-left-inner not found.");
    return;
  }

  detailLeftInner.innerHTML = "";

  structure.forEach((h3, index) => {
    const currentH3 = document.createElement("div");
    currentH3.className = `jump-link-h3 h3-${index + 1}`;

    const link = document.createElement("a");
    link.textContent = h3.title;
    link.className = "jump-link";
    link.href = `#${generateSanitizedHref(h3.title)}`; // Generate href for h3
    currentH3.appendChild(link);

    const sublist = document.createElement("div");
    sublist.className = `jump-link-sublist sublist-${index + 1}`;
    sublist.style.display = "none";

    h3.children.forEach((h4) => {
      const sublink = document.createElement("a");
      sublink.textContent = h4.title;
      sublink.className = "jump-link-h4";
      sublink.href = `#${generateSanitizedHref(h4.title)}`; // Generate href for h4
      sublist.appendChild(sublink);
    });

    if (h3.children.length > 0) {
      currentH3.appendChild(sublist);
      addAccordionLogic(currentH3, sublist);
      currentH3.classList.add("accordion");
    }

    detailLeftInner.appendChild(currentH3);
  });
}

function generateSanitizedHref(text) {
  return text
    .replace(/<\/?strong>/g, "") // Remove <strong> tags
    .replace(/[0-9]/g, "") // Remove numbers
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Remove consecutive hyphens
    .toLowerCase() // Convert to lowercase
    .replace(/^[^a-z]+/, ""); // Remove leading non-alphabetic characters
}

function addAccordionLogic(currentH3, sublist) {
  currentH3.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "a") {
      return; // Allow default behavior for child links
    }

    const isOpen = currentH3.classList.contains("accordion-open");

    document.querySelectorAll(".jump-link-h3.accordion").forEach((otherH3) => {
      const otherSublist = otherH3.querySelector(".jump-link-sublist");
      otherH3.classList.remove("accordion-open");
      if (otherSublist) {
        otherSublist.style.display = "none";
      }
    });

    if (!isOpen) {
      currentH3.classList.add("accordion-open");
      sublist.style.display = "block";
    } else {
      currentH3.classList.remove("accordion-open");
      sublist.style.display = "none";
    }
  });
}

function addAccordionLogic(currentH3, sublist) {
  currentH3.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "a") {
      return; // Allow default behavior for child links
    }

    const isOpen = currentH3.classList.contains("accordion-open");

    document.querySelectorAll(".jump-link-h3.accordion").forEach((otherH3) => {
      const otherSublist = otherH3.querySelector(".jump-link-sublist");
      otherH3.classList.remove("accordion-open");
      if (otherSublist) {
        otherSublist.style.display = "none";
      }
    });

    if (!isOpen) {
      currentH3.classList.add("accordion-open");
      sublist.style.display = "block";
    } else {
      currentH3.classList.remove("accordion-open");
      sublist.style.display = "none";
    }
  });
}

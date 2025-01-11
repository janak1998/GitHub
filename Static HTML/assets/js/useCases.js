document.addEventListener("DOMContentLoaded", () => {
  // Preloader Logic
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    const sectionsToHide = [
      document.getElementById("detail-top"),
      document.getElementById("detail-main"),
      document.getElementById("related-blogs"),
      ...document.getElementsByTagName("header"),
    ];

    setTimeout(() => {
      preloader.style.display = "none";
      document.body.style.visibility = "visible";
      document.body.style.opacity = "1";

      sectionsToHide.forEach((section) => {
        if (section) {
          section.style.visibility = "visible";
          section.style.opacity = "1";
        }
      });
    }, 500);
  });

  // Fetch and Update Meta Tags
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

      if (blog) {
        updateMetaTags(blog.metadata);
        const structuredContent = buildStructure(blog.content);
        renderJumpLinks(structuredContent);

        const container = document.querySelector(".detail-mid");
        if (container) {
          setTimeout(() => {
            addIDsToHeadings(blog.content, container);
          }, 3000);
        } else {
          console.error("Container .detail-mid not found.");
        }
      } else {
        console.error(`Blog with ID ${blogId} not found in blogs.json.`);
      }
    })
    .catch((error) => {
      console.error("Error loading blog content:", error);
    });

  // Hash Change Listener for Active Links
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

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-menu");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.style.height = `${nav.scrollHeight}px`;
});
closeBtn.addEventListener("click", () => {
  nav.style.height = 0;
});

// Function to Update Meta Tags
function updateMetaTags(metadata) {
  document.title = metadata.title || "Untitled Blog";

  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }
  metaDescription.content =
    metadata.metaDescription || "No description available.";

  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.content = metadata.keywords || "";
}

// Function to Build Structure for Jump Links
function buildStructure(content) {
  const structure = [];
  let currentH3 = null;

  content.forEach((item) => {
    if (item.type === "h3") {
      currentH3 = {
        title: item.text,
        children: [],
      };
      structure.push(currentH3);
    } else if (item.type === "h4" && currentH3) {
      currentH3.children.push({
        title: item.text,
      });
    }
  });

  return structure;
}

// Function to Render Jump Links
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
    link.textContent = h3.title.replace(/<\/?strong>/g, "");
    link.className = "jump-link";
    link.href = `#${generateSanitizedHref(h3.title)}`;
    currentH3.appendChild(link);

    const sublist = document.createElement("div");
    sublist.className = `jump-link-sublist sublist-${index + 1}`;
    sublist.style.display = "none";

    h3.children.forEach((h4) => {
      const sublink = document.createElement("a");
      sublink.textContent = h4.title.replace(/<\/?strong>/g, "");
      sublink.className = "jump-link-h4";
      sublink.href = `#${generateSanitizedHref(h4.title)}`;
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

// Generate Sanitized Href for Links
function generateSanitizedHref(text) {
  return text
    .replace(/<\/?strong>/g, "")
    .replace(/^\d+/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase()
    .replace(/^[^a-z]+/, "");
}

// Add Accordion Logic to Jump Links
function addAccordionLogic(currentH3, sublist) {
  currentH3.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "a") {
      return;
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

// Add IDs to Headings
function addIDsToHeadings(content, container) {
  content.forEach((item) => {
    if (item.type.startsWith("h")) {
      const headings = Array.from(container.querySelectorAll(item.type));
      const targetHeading = headings.find(
        (h) => h.textContent.trim() === item.text.trim()
      );
      if (targetHeading) {
        let sanitizedId = targetHeading.textContent
          .replace(/<\/?strong>/g, "")
          .replace(/^\d+/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
          .toLowerCase()
          .replace(/^[^a-z0-9]+/, "")
          .replace(/[^a-z0-9]+$/g, "");
        targetHeading.id = sanitizedId;
      } else {
        console.warn(`No ${item.type} found matching "${item.text}"`);
      }
    }
  });
}

//add hyperlink class to only links
document.addEventListener("DOMContentLoaded", () => {
  // Find all anchors on the page
  const anchors = document.querySelectorAll("a");

  anchors.forEach((anchor) => {
    const prevSibling = anchor.previousElementSibling;
    const nextSibling = anchor.nextElementSibling;

    // Check if the previous sibling is a <span>
    const hasPrevSpan = prevSibling?.tagName?.toLowerCase() === "span";

    // Check if the next sibling is a <span>
    const hasNextSpan = nextSibling?.tagName?.toLowerCase() === "span";

    // Add the 'hyperlink' class if at least one <span> is found
    if (hasPrevSpan || hasNextSpan) {
      anchor.classList.add("hyperlink");
    }
  });
});

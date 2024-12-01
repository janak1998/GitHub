document.addEventListener("DOMContentLoaded", () => {
  // Get the blog ID from the <body> element
  const blogId = document.body.getAttribute("data-blog-id");

  // Fetch blogs.json and render jump links
  fetch("/data/blogs.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch blogs.json: ${response.status}`);
      }
      return response.json();
    })
    .then((blogs) => {
      // Find the blog matching the data-blog-id
      const blog = blogs.find((b) => b.id === blogId);

      if (blog) {
        renderJumpLinks(blog.content);
      } else {
        console.error(`Blog with ID ${blogId} not found in blogs.json.`);
      }
    })
    .catch((error) => {
      console.error("Error loading blog content:", error);
    });

  // Get the current hash from the URL
  const currentHash = window.location.hash;

  // Find all <a> tags with an href that matches the current hash
  const matchingLinks = document.querySelectorAll(`a[href="${currentHash}"]`);

  // Add the CSS class to the matching <a> tags
  matchingLinks.forEach((link) => {
    link.classList.add("active-hash-link");
  });

  // Optional: Add an event listener for hash changes
  window.addEventListener("hashchange", () => {
    // Remove the class from all previously active links
    document.querySelectorAll(".active-hash-link").forEach((link) => {
      link.classList.remove("active-hash-link");
    });

    // Add the class to the links matching the new hash
    const newHash = window.location.hash;
    document.querySelectorAll(`a[href="${newHash}"]`).forEach((link) => {
      link.classList.add("active-hash-link");
    });
  });
});

// Function to render "In this article" jump links
function renderJumpLinks(content) {
  const detailLeftInner = document.querySelector(".detail-left-inner");
  if (!detailLeftInner) {
    console.error(".detail-left-inner not found.");
    return;
  }

  // Clear any existing content
  detailLeftInner.innerHTML = "";

  // Add a header for the section
  const sectionHeader = document.createElement("div");
  sectionHeader.textContent = "In this article";
  detailLeftInner.appendChild(sectionHeader);

  // Find all h2 elements in the blog content
  const headings = content.filter((item) => item.type === "h2");

  headings.forEach((heading, index) => {
    const link = document.createElement("a");

    // Remove HTML tags, numbers, and replace spaces with hyphens for href only
    let sanitizedHref = heading.text
      .replace(/<\/?strong>/g, "") // Remove <strong> tags
      .replace(/[0-9]/g, "") // Remove numbers
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Remove consecutive hyphens
      .toLowerCase(); // Convert to lowercase

    // Remove leading non-alphabetic characters
    sanitizedHref = sanitizedHref.replace(/^[^a-z]+/, "");

    link.href = `#${sanitizedHref}`;
    link.textContent = heading.text.replace(/<\/?strong>/g, ""); // Keep original textContent
    link.className = "jump-link";
    detailLeftInner.appendChild(link);
  });
}

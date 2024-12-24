document.addEventListener("DOMContentLoaded", () => {
  // Get the blog ID from the <body> element
  const blogId = document.body.getAttribute("data-blog-id");

  // Fetch blogs.json and render the blog content
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
        const container = document.querySelector(".detail-mid");
        if (container) {
          addIDsToHeadings(blog.content, container);
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
});

// Function to render blog content in .detail-mid
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
          .replace(/^[^a-z]+/, "");
        targetHeading.id = sanitizedId;
      } else {
        console.warn(`No ${item.type} found matching "${item.text}"`);
      }
    }
  });
}

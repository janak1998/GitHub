document.addEventListener("DOMContentLoaded", () => {
  // Get the blog ID from the <body> element
  const blogId = document.body.getAttribute("data-blog-id");

  // Fetch blogs.json and render the hero section
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

      if (blog && blog.metadata) {
        renderHeroSection(blog.metadata);
      } else {
        console.error(`Blog with ID ${blogId} not found in blogs.json.`);
      }
    })
    .catch((error) => {
      console.error("Error loading blog hero content:", error);
    });
});

// Function to render the hero section
function renderHeroSection(metadata) {
  const detailTop = document.getElementById("detail-top");
  if (!detailTop) {
    console.error("Element #detail-top not found.");
    return;
  }

  // Handle image visibility
  const detailTopContainer = document.querySelector(
    ".blog-detail-top-container"
  );
  if (metadata.heroImage) {
    if (detailTopContainer) {
      detailTopContainer.style.backgroundImage = `url(${metadata.heroImage})`;
    }
  } else {
    if (detailTopContainer) {
      detailTopContainer.removeAttribute("style");
    }
  }

  // Populate title
  const titleElement = detailTop.querySelector(".title");
  if (titleElement) {
    titleElement.textContent = metadata.title || "Untitled Blog";
  }

  // Populate description
  const descriptionElement = detailTop.querySelector(".description");
  if (descriptionElement) {
    descriptionElement.textContent =
      metadata.description || "No description available.";
  }
}

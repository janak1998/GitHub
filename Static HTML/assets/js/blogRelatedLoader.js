document.addEventListener("DOMContentLoaded", () => {
  const blogId = getBlogIdFromBody();

  if (!blogId) {
    console.error("Blog ID not found in the <body> element.");
    return;
  }

  fetchBlogsData("/data/blogs.json")
    .then((blogs) => {
      const currentBlog = findBlogById(blogs, blogId);
      if (currentBlog) {
        const relatedBlogs = getRelatedBlogs(blogs, currentBlog);
        renderRelatedBlogs(relatedBlogs);
      } else {
        console.error(`Blog with ID ${blogId} not found in blogs.json.`);
      }
    })
    .catch((error) => {
      console.error("Error fetching blog data:", error);
    });
});

// Helper to get blog ID from the <body> element
function getBlogIdFromBody() {
  return document.body.getAttribute("data-blog-id");
}

// Helper to fetch blogs data from the JSON file
function fetchBlogsData(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status}`);
    }
    return response.json();
  });
}

// Helper to find a blog by its ID
function findBlogById(blogs, blogId) {
  return blogs.find((blog) => blog.id === blogId);
}

// Helper to get related blogs based on categories
function getRelatedBlogs(blogs, currentBlog) {
  const currentCategories = currentBlog.metadata.categories || [];

  return blogs.filter((blog) => {
    if (blog.id === currentBlog.id) return false; // Exclude the current blog

    // Check if any category matches
    const blogCategories = blog.metadata.categories || [];

    return blogCategories.some((category) =>
      currentCategories.includes(category)
    );
  });
}

// Function to render related blogs

function renderRelatedBlogs(relatedBlogs) {
  const relatedBlogsSection = document.querySelector("#related-blogs");
  const relatedBlogsContainer = document.querySelector(
    "#related-blogs .related-blogs-inner"
  );

  if (!relatedBlogsSection || !relatedBlogsContainer) {
    console.error("Related blogs section or container not found.");
    return;
  }

  // Hide the related blogs section if no related blogs are found
  if (!relatedBlogs.length) {
    relatedBlogsSection.style.display = "none";
    return;
  }

  // Clear existing content
  relatedBlogsContainer.innerHTML = "";

  // Generate related blogs dynamically
  relatedBlogs.forEach((blog) => {
    const blogLink = document.createElement("a");
    blogLink.className = "blog-listing";

    // Add categories as class names
    if (Array.isArray(blog.metadata.categories)) {
      blog.metadata.categories.forEach((category) => {
        blogLink.classList.add(category.toLowerCase().replace(/\s+/g, "-"));
      });
    }

    // Add the blog hero image
    const imageWrapper = document.createElement("span");
    const img = document.createElement("img");
    img.src = blog.metadata.heroImage || "../assets/img/blog-listing-img.png"; // Default image if none provided
    img.alt = blog.metadata.title || "Blog Image";
    imageWrapper.appendChild(img);

    // Add the blog title
    const blogTitle = document.createElement("div");
    blogTitle.className = "blog-title";
    blogTitle.textContent = blog.metadata.title || "Untitled Blog";

    // Add the blog description
    const description = document.createElement("p");
    description.textContent =
      blog.metadata.metaDescription || "No description available.";

    // Add the categories
    const categoriesDiv = document.createElement("div");
    categoriesDiv.className = "categories";
    if (Array.isArray(blog.metadata.categories)) {
      blog.metadata.categories.forEach((category) => {
        const categoryDiv = document.createElement("div");
        categoryDiv.textContent = `#${category}`;
        categoriesDiv.appendChild(categoryDiv);
      });
    }

    // Append all elements to the blog link
    blogLink.appendChild(imageWrapper);
    blogLink.appendChild(blogTitle);
    blogLink.appendChild(description);
    blogLink.appendChild(categoriesDiv);

    // Append the blog link to the container
    relatedBlogsContainer.appendChild(blogLink);
  });
}

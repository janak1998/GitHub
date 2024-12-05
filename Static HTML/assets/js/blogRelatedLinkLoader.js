document.addEventListener("DOMContentLoaded", () => {
  // Fetch blogs.json
  fetch("/data/blogs.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch blogs.json: ${response.status}`);
      }
      return response.json();
    })
    .then((blogs) => {
      // Update the hrefs of related blog links
      updateRelatedBlogLinks(blogs);
    })
    .catch((error) => {
      console.error("Error fetching blogs data:", error);
    });
});

// Function to update related blog links
function updateRelatedBlogLinks(blogs) {
  const relatedLinks = document.querySelectorAll(
    "#related-blogs .related-blogs-inner a[data-id]"
  );

  if (!relatedLinks.length) {
    console.warn("No related blog links found with data-id attribute.");
    return;
  }

  relatedLinks.forEach((link) => {
    const blogId = link.getAttribute("data-id");
    const blog = blogs.find((b) => b.id === blogId);

    if (blog && blog.metadata && blog.metadata.urlSlug) {
      // Construct the full URL using the current domain
      const newHref = `${window.location.origin}/blogs/${blog.metadata.urlSlug}`;
      link.setAttribute("href", newHref);
    } else {
      console.warn(`No matching blog found for ID ${blogId}.`);
    }
  });
}

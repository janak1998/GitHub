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
          renderBlogContent(blog.content, container);
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
function renderBlogContent(content, container) {
  content.forEach((item) => {
    let element;

    if (item.type === "paragraph") {
      element = document.createElement("p");
      if (Array.isArray(item.content)) {
        item.content.forEach((child) => {
          if (child.type === "text") {
            const span = document.createElement("span");
            span.innerHTML = child.text; // Render text with <strong> tags
            element.appendChild(span);
          } else if (child.type === "customLink") {
            const link = document.createElement("a");
            link.href = child.href;
            link.target = child.target || "_self";
            link.rel = child.rel || "noopener";
            link.textContent = child.text || "Link";
            element.appendChild(link);
          }
        });
      }
    } else if (item.type.startsWith("h")) {
      element = document.createElement(item.type);
      element.innerHTML = item.text; // Render headings with <strong> tags
    } else if (item.type === "list") {
      element = document.createElement(
        item.listType === "unordered" ? "ul" : "ol"
      );
      item.items.forEach((listItem) => {
        const li = document.createElement("li");
        li.innerHTML = listItem.text; // Render list items with <strong> tags
        element.appendChild(li);
      });
    } else if (item.type === "table") {
      element = document.createElement("table");
      element.className = "table-auto border-collapse w-full";
      const tbody = document.createElement("tbody");

      item.rows.forEach((row) => {
        const tr = document.createElement("tr");
        row.cells.forEach((cell) => {
          const td = document.createElement("td");
          td.colSpan = cell.colSpan || 1;
          td.rowSpan = cell.rowSpan || 1;
          td.className = "border px-4 py-2";

          // Render main cell text
          if (cell.text) {
            const p = document.createElement("p");
            p.innerHTML = cell.text; // Render cell text with <strong> tags
            td.appendChild(p);
          }

          // Render nested content in cells
          if (Array.isArray(cell.nested)) {
            cell.nested.forEach((nestedItem) => {
              if (nestedItem.type === "paragraph") {
                const p = document.createElement("p");
                nestedItem.content.forEach((nestedChild) => {
                  if (nestedChild.type === "text") {
                    const span = document.createElement("span");
                    span.innerHTML = nestedChild.text;
                    p.appendChild(span);
                  }
                });
                td.appendChild(p);
              } else if (nestedItem.type === "list") {
                const NestedListTag =
                  nestedItem.listType === "unordered" ? "ul" : "ol";
                const nestedList = document.createElement(NestedListTag);

                nestedItem.items.forEach((nestedListItem) => {
                  const li = document.createElement("li");
                  li.innerHTML = nestedListItem.text; // Render nested list items
                  nestedList.appendChild(li);
                });

                td.appendChild(nestedList);
              }
            });
          }

          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });

      element.appendChild(tbody);
    } else if (item.type === "image") {
      element = document.createElement("img");
      element.src = item.url;
      element.alt = item.alt || "";
      element.title = item.title || "";
      element.className = "my-4";
    }

    // Select all <h2> elements within the container
    const h2Elements = container.querySelectorAll("h2");

    h2Elements.forEach((h2) => {
      // Sanitize text content to generate a valid ID
      let sanitizedId = h2.textContent
        .replace(/<\/?strong>/g, "") // Remove <strong> tags
        .replace(/[0-9]/g, "") // Remove numbers
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/-+/g, "-") // Remove consecutive hyphens
        .toLowerCase(); // Convert to lowercase

      // Remove leading non-alphabetic characters
      sanitizedId = sanitizedId.replace(/^[^a-z]+/, "");

      // Assign the sanitized ID to the <h2>
      h2.id = `${sanitizedId}`;
    });
    if (element) {
      container.appendChild(element);
    }
  });
}

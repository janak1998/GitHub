document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
      let e = document.getElementById("preloader"),
          t = [document.getElementById("detail-top"), document.getElementById("detail-main"), document.getElementById("related-blogs"), ...document.getElementsByTagName("header"), ];
      setTimeout(() => {
          e.style.display = "none", document.body.style.visibility = "visible", document.body.style.opacity = "1", t.forEach(e => {
              e && (e.style.visibility = "visible", e.style.opacity = "1")
          })
      }, 500)
  });
  let e = document.body.getAttribute("data-blog-id");
  if (!e) {
      console.error("data-blog-id attribute not found on the body element.");
      return
  }
  fetch("/data/blogs.json").then(e => {
      if (!e.ok) throw Error(`Failed to fetch blogs.json: ${e.status}`);
      return e.json()
  }).then(t => {
      if (!Array.isArray(t)) throw Error("Invalid blogs.json format: expected an array.");
      let n = t.find(t => t.id === e);
      if (n) {
          updateMetaTags(n.metadata);
          let a = buildStructure(n.content);
          renderJumpLinks(a);
          let l = document.querySelector(".detail-mid");
          l ? setTimeout(() => {
              addIDsToHeadings(n.content, l)
          }, 3e3) : console.error("Container .detail-mid not found.")
      } else console.error(`Blog with ID ${e} not found in blogs.json.`)
  }).catch(e => {
      console.error("Error loading blog content:", e)
  });
  let t = window.location.hash,
      n = document.querySelectorAll(`a[href="${t}"]`);
  n.forEach(e => {
      e.classList.add("active-hash-link")
  }), window.addEventListener("hashchange", () => {
      document.querySelectorAll(".active-hash-link").forEach(e => {
          e.classList.remove("active-hash-link")
      });
      let e = window.location.hash;
      document.querySelectorAll(`a[href="${e}"]`).forEach(e => {
          e.classList.add("active-hash-link")
      })
  })
});
const menuBtn = document.querySelector(".menu-btn"),
  closeBtn = document.querySelector(".close-menu"),
  nav = document.querySelector("nav");

function updateMetaTags(e) {
  document.title = e.title || "Untitled Blog";
  let t = document.querySelector('meta[name="description"]');
  t || ((t = document.createElement("meta")).name = "description", document.head.appendChild(t)), t.content = e.metaDescription || "No description available.";
  let n = document.querySelector('meta[name="keywords"]');
  n || ((n = document.createElement("meta")).name = "keywords", document.head.appendChild(n)), n.content = e.keywords || ""
}

function buildStructure(e) {
  let t = [],
      n = null;
  return e.forEach(e => {
      "h3" === e.type ? (n = {
          title: e.text,
          children: []
      }, t.push(n)) : "h4" === e.type && n && n.children.push({
          title: e.text
      })
  }), t
}

function renderJumpLinks(e) {
  let t = document.querySelector(".detail-left-inner");
  if (!t) {
      console.error(".detail-left-inner not found.");
      return
  }
  t.innerHTML = "", e.forEach((e, n) => {
      let a = document.createElement("div");
      a.className = `jump-link-h3 h3-${n+1}`;
      let l = document.createElement("a");
      l.textContent = e.title.replace(/<\/?strong>/g, ""), l.className = "jump-link", l.href = `#${generateSanitizedHref(e.title)}`, a.appendChild(l);
      let r = document.createElement("div");
      r.className = `jump-link-sublist sublist-${n+1}`, r.style.display = "none", e.children.forEach(e => {
          let t = document.createElement("a");
          t.textContent = e.title.replace(/<\/?strong>/g, ""), t.className = "jump-link-h4", t.href = `#${generateSanitizedHref(e.title)}`, r.appendChild(t)
      }), e.children.length > 0 && (a.appendChild(r), addAccordionLogic(a, r), a.classList.add("accordion")), t.appendChild(a)
  })
}

function generateSanitizedHref(e) {
  return e.replace(/<\/?strong>/g, "").replace(/^\d+/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").toLowerCase().replace(/^[^a-z]+/, "")
}

function addAccordionLogic(e, t) {
  e.addEventListener("click", n => {
      if ("a" === n.target.tagName.toLowerCase()) return;
      let a = e.classList.contains("accordion-open");
      document.querySelectorAll(".jump-link-h3.accordion").forEach(e => {
          let t = e.querySelector(".jump-link-sublist");
          e.classList.remove("accordion-open"), t && (t.style.display = "none")
      }), a ? (e.classList.remove("accordion-open"), t.style.display = "none") : (e.classList.add("accordion-open"), t.style.display = "block")
  })
}

function addIDsToHeadings(e, t) {
  e.forEach(e => {
      if (e.type.startsWith("h")) {
          let n = Array.from(t.querySelectorAll(e.type)),
              a = n.find(t => t.textContent.trim() === e.text.trim());
          if (a) {
              let l = a.textContent
                  .replace(/<\/?strong>/g, "") // Remove <strong> tags
                  .replace(/^\d+/, "") // Remove numbers at the start
                  .replace(/\d+$/, "") // Remove numbers at the end
                  .replace(/\s+/g, "-") // Replace spaces with hyphens
                  .replace(/-+/g, "-") // Merge consecutive hyphens
                  .toLowerCase()
                  .replace(/^[^a-z]+/, ""); // Remove leading non-alphabetic characters
              a.id = l
              console.log(l);
          } else console.warn(`No ${e.type} found matching "${e.text}"`)
      }
  })
}
menuBtn.addEventListener("click", () => {
  nav.style.height = `${nav.scrollHeight}px`
}), closeBtn.addEventListener("click", () => {
  nav.style.height = 0
});
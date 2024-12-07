document.addEventListener("DOMContentLoaded", () => {
  // Display the loader
  const preloader = document.getElementById("preloader");
  const sectionsToHide = [
    document.getElementById("detail-top"),
    document.getElementById("detail-main"),
    document.getElementById("related-blogs"),
  ];

  // Hide sections initially
  sectionsToHide.forEach((section) => {
    if (section) {
      section.style.visibility = "hidden";
      section.style.opacity = "0";
    }
  });

  // Show loader and hide sections
  preloader.style.display = "flex";

  // Hide loader and show sections after 2-3 seconds
  setTimeout(() => {
    preloader.style.display = "none";

    // Show the hidden sections
    sectionsToHide.forEach((section) => {
      if (section) {
        section.style.visibility = "visible";
        section.style.opacity = "1";
        section.style.transition = "opacity 0.5s ease-in-out"; // Smooth fade-in effect
      }
    });

    document.body.style.visibility = "visible";
    document.body.style.opacity = "1"; // Ensure the body content is visible
  }, 2000); // Adjust the delay as needed (e.g., 2000ms = 2 seconds)
});

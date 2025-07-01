(function () {
  console.log('222',window.location.pathname);
  function load() { 
    console.log('222',window.location.pathname);
    if (window.location.pathname === "/") {
    function run() {
      // Create and append the main loader div
      var loader = document.createElement("div");
      loader.className = "loader";
      document.body.appendChild(loader);

      // Create and append the custom loader overlay div
      var loader1 = document.createElement("div");
      loader1.className = "custom-loader-overlay";
      document.body.appendChild(loader1);

      // Select the navigation bar and hero slide-down button elements
      const navbarElement = document.querySelector(".vp-navbar");
      const navbarBTN = document.querySelector(".vp-hero-slide-down-button");
      console.log(777);
      // Add the 'slowdown' class to the navbar elements after 1000ms (1 second)
      setTimeout(() => {
        if (navbarElement) {
          /* The `navbarElement` variable is selecting an HTML element with the class name 'vp-navbar'. It
        is using the `document.querySelector` method to find and store a reference to this element in
        the variable. */
          navbarElement.classList.add("slowdown");
        }
        if (navbarBTN) {
          navbarBTN.classList.add("slowdown");
        }
      }, 750);

      // Set a timeout to fade out the loaders after 1200ms
      setTimeout(function () {
        loader.classList.add("fade-out");
        loader1.classList.add("fade-out");

        // After the fade-out animation completes (400ms), remove the loaders from the DOM
        setTimeout(function () {
          if (loader && loader.parentNode) {
            loader.parentNode.removeChild(loader);
          }
          if (loader1 && loader1.parentNode) {
            loader1.parentNode.removeChild(loader1);
          }
        }, 400); // Wait for the transition animation to end
      }, 1200);
    }

    // Check if the document is still loading
    if (document.readyState === "loading") {
      // If loading, wait for DOMContentLoaded before running the loader logic
      document.addEventListener("DOMContentLoaded", run);
    } else {
      // If already loaded, run the loader logic immediately
      run();
    }

    // Disable scrolling
    function preventScroll(e) {
      e.preventDefault(); // Prevent default scroll behavior
    }

    // Add event listeners to prevent scrolling for different input methods
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("scroll", preventScroll, { passive: false });

    // Re-enable scrolling after 1500ms
    setTimeout(function () {
      window.removeEventListener("wheel", preventScroll, { passive: false });
      window.removeEventListener("touchmove", preventScroll, {
        passive: false,
      });
      window.removeEventListener("scroll", preventScroll, { passive: false });
    }, 1500);
  }
  }
  setTimeout(() => {
    load()
  }, 0);
})();

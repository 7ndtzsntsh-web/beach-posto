document.addEventListener("DOMContentLoaded", function () {
  // Mobile Navigation Menu Drawer
  var mobileMenuBtn = document.getElementById("mobile-menu-btn");
  var mobileMenuCloseBtn = document.getElementById("mobile-menu-close-btn");
  var mobileDrawer = document.getElementById("mobile-drawer");
  var mobileBackdrop = document.getElementById("mobile-backdrop");
  var mobileLinks = document.querySelectorAll(".mobile-nav-link");

  function openMobileMenu() {
    if (mobileDrawer && mobileBackdrop) {
      mobileDrawer.classList.remove("translate-x-full");
      mobileBackdrop.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    }
  }

  function closeMobileMenu() {
    if (mobileDrawer && mobileBackdrop) {
      mobileDrawer.classList.add("translate-x-full");
      mobileBackdrop.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", openMobileMenu);
  }
  if (mobileMenuCloseBtn) {
    mobileMenuCloseBtn.addEventListener("click", closeMobileMenu);
  }
  if (mobileBackdrop) {
    mobileBackdrop.addEventListener("click", closeMobileMenu);
  }
  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });

  // FAQ Accordion
  var faqToggles = document.querySelectorAll(".faq-toggle");

  faqToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      var content = this.nextElementSibling;
      var icon = this.querySelector(".fa-chevron-down");
      var isOpen = content && !content.classList.contains("hidden");

      // Close all other items
      document.querySelectorAll(".faq-content").forEach(function (item) {
        item.classList.add("hidden");
      });
      document.querySelectorAll(".faq-toggle .fa-chevron-down").forEach(function (ic) {
        ic.classList.remove("rotate-180");
      });

      // Toggle current
      if (!isOpen && content) {
        content.classList.remove("hidden");
        if (icon) {
          icon.classList.add("rotate-180");
        }
      }
    });
  });
});

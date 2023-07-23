'use strict';

// Function to toggle the "active" class on an element
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
}

// Controller variables
const controllerSidebar = document.querySelector("[data-sidebar]");
const controllerSidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
controllerSidebarBtn.addEventListener("click", function () {
  elementToggleFunc(controllerSidebar);
});

// Controller testimonials variables
const controllerTestimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const controllerModalContainer = document.querySelector("[data-modal-container]");
const controllerModalCloseBtn = document.querySelector("[data-modal-close-btn]");
const controllerOverlay = document.querySelector("[data-overlay]");

// Modal variables
const controllerModalImg = document.querySelector("[data-modal-img]");
const controllerModalTitle = document.querySelector("[data-modal-title]");
const controllerModalText = document.querySelector("[data-modal-text]");

// Modal toggle function
const controllerModalFunc = function () {
  controllerModalContainer.classList.toggle("active");
  controllerOverlay.classList.toggle("active");
}

// Add click event to all modal items
for (let i = 0; i < controllerTestimonialsItem.length; i++) {
  controllerTestimonialsItem[i].addEventListener("click", function () {
    controllerModalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    controllerModalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    controllerModalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    controllerModalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    controllerModalFunc();
  });
}

// Add click event to modal close button
controllerModalCloseBtn.addEventListener("click", controllerModalFunc);
controllerOverlay.addEventListener("click", controllerModalFunc);

// Controller custom select variables
const controllerSelect = document.querySelector("[data-select]");
const controllerSelectItems = document.querySelectorAll("[data-select-item]");
const controllerSelectValue = document.querySelector("[data-selecct-value]");
const controllerFilterBtn = document.querySelectorAll("[data-filter-btn]");

controllerSelect.addEventListener("click", function () {
  elementToggleFunc(controllerSelect);
});

// Add event in all select items
for (let i = 0; i < controllerSelectItems.length; i++) {
  controllerSelectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    controllerSelectValue.innerText = this.innerText;
    elementToggleFunc(controllerSelect);
    controllerFilterFunc(selectedValue);
  });
}

// Filter variables
const controllerFilterItems = document.querySelectorAll("[data-filter-item]");

const controllerFilterFunc = function (selectedValue) {
  for (let i = 0; i < controllerFilterItems.length; i++) {
    if (selectedValue === "all") {
      controllerFilterItems[i].classList.add("active");
    } else if (selectedValue === controllerFilterItems[i].dataset.category) {
      controllerFilterItems[i].classList.add("active");
    } else {
      controllerFilterItems[i].classList.remove("active");
    }
  }
}

// Add event in all filter button items for large screen
let lastClickedBtn = controllerFilterBtn[0];

for (let i = 0; i < controllerFilterBtn.length; i++) {
  controllerFilterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    controllerSelectValue.innerText = this.innerText;
    controllerFilterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// Controller contact form variables
const controllerForm = document.querySelector("[data-form]");
const controllerFormInputs = document.querySelectorAll("[data-form-input]");
const controllerFormBtn = document.querySelector("[data-form-btn]");

// Add event to all form input fields
for (let i = 0; i < controllerFormInputs.length; i++) {
  controllerFormInputs[i].addEventListener("input", function () {
    // Check form validation
    if (controllerForm.checkValidity()) {
      controllerFormBtn.removeAttribute("disabled");
    } else {
      controllerFormBtn.setAttribute("disabled", "");
    }
  });
}

// Page navigation variables
const controllerNavigationLinks = document.querySelectorAll("[data-nav-link]");
const controllerPages = document.querySelectorAll("[data-page]");

// Add event to all nav links
for (let i = 0; i < controllerNavigationLinks.length; i++) {
  controllerNavigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < controllerPages.length; i++) {
      if (this.innerHTML.toLowerCase() === controllerPages[i].dataset.page) {
        controllerPages[i].classList.add("active");
        controllerNavigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        controllerPages[i].classList.remove("active");
        controllerNavigationLinks[i].classList.remove("active");
      }
    }
  });
}

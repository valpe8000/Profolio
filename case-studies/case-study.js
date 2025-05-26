const virtualRefTechStackToolsButtons = [
  {
    name: "Flutter",
    icon: "../assets/images/svg/flutter.svg",
  },
  {
    name: "Dart",
    icon: "../assets/images/svg/dart.svg",
  },
  {
    name: "TensorFlow",
    icon: "../assets/images/svg/tensorflow.png",
  },
  {
    name: "Google ML Kit",
    icon: "../assets/images/svg/google-ml-kit.png",
  },
  {
    name: "Figma",
    icon: "../assets/images/svg/figma.svg",
  },
  {
    name: "Whimsical",
    icon: "../assets/images/svg/whimsical.jpg",
  },
];
const tulagramTechStackToolsButtons = [
  {
    name: "Figma",
    icon: "../assets/images/svg/figma.svg",
  },
  {
    name: "Flutter",
    icon: "../assets/images/svg/flutter.svg",
  },
  {
    name: "Dart",
    icon: "../assets/images/svg/dart.svg",
  },
  {
    name: "Provider",
    icon: "../assets/images/svg/provider.png",
  },
  {
    name: "REST API",
    icon: "../assets/images/svg/api.svg",
  },
  {
    name: "Social Login",
    icon: "../assets/images/svg/social-login.png",
  },
  {
    name: "In App Purchase",
    icon: "../assets/images/svg/iap.svg",
  },
];
// function populateButtons(list, containerId) {
//   const container = document.getElementById(containerId);

//   container.innerHTML = "";

//   list.forEach((item) => {
//     const button = document.createElement("button");
//     const icon = document.createElement("img"); // Use img instead of span
//     icon.className = "icon";
//     icon.src = item.icon;
//     icon.alt = `${item.name} icon`;

//     button.className = "toolBtn";
//     button.textContent = item.name;
//     button.appendChild(icon);
//     container.appendChild(button);
//   });
// }

// populateButtons(virtualRefTechStackToolsButtons, "virtualRefTechStackTools");
/**
 * Populates a container with tech stack buttons
 * @param {Array} list - Array of button data objects
 * @param {string} containerId - ID of the container element
 */
function populateButtons(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Use document fragment for better performance
  const fragment = document.createDocumentFragment();

  list.forEach((item) => {
    const button = document.createElement("button");
    button.className = "toolBtn";
    button.setAttribute("aria-label", `${item.name} technology`);
    button.textContent = item.name;

    const icon = document.createElement("img");
    icon.className = "icon";
    icon.src = item.icon;
    icon.alt = `${item.name} icon`;
    icon.loading = "lazy"; // Lazy load images

    button.appendChild(icon);
    fragment.appendChild(button);
  });

  // Clear and append in a single DOM operation
  container.innerHTML = "";
  container.appendChild(fragment);
}

// Wait for DOM to be fully loaded - Single event listener that handles both containers
document.addEventListener("DOMContentLoaded", () => {
  // Populate Virtual Ref tech stack
  populateButtons(virtualRefTechStackToolsButtons, "virtualRefTechStackTools");

  // Populate Tulagram tech stack
  populateButtons(tulagramTechStackToolsButtons, "tulagramTechStackTools");
});

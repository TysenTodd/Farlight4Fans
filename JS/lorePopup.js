document.addEventListener("DOMContentLoaded", (event) => {
  // Gets logos from all heroes
  const logos = document.querySelectorAll(
    ".maggie-logo,.mkr-logo,.sunil-logo,.ceanna-logo,.momoi-logo,.captain-logo,.beau-logo,.watchman-logo,.yong-logo,.lucinda-logo,.syfer-logo,.ducksyde-logo,.ember-logo,.phantom-logo,.maychelle-logo,.freddie-logo"
  );
  // Event Listeners for Each Hero's Image
  logos.forEach(function (image) {
    image.addEventListener("click", function () {
      showPopup(image);
    });
  });
  // Function to Display Lore Popup
  function showPopup(image) {
    const popupBox = document.querySelector(".popup-box");
    const closeBtn = document.querySelector(".close-btn");
    const heroTitle = document.getElementById("popup-hero-name");
    const popupContent = document.getElementById("popup-content");
    let lore = document.getElementById("popup-lore");
    let stats = document.getElementById("popup-stats");
    let skills = document.getElementById("popup-skills");
    const heroImage = document.getElementById("popup-image"); // Assuming you have an element with this ID to hold the hero's image
    const heroName = image.previousElementSibling.textContent; // Gets the character's name from the previous sibling element
    const skillsHeader = document.getElementById("popup-skills-header");
    const skillsText = image.dataset.skills;
    const loreText = image.dataset.lore;
    const statsText = image.dataset.stats;

    // Lore Popup Content (Name, Skills, Stats, & Lore)
    heroTitle.innerHTML = `
            <p>${heroName}</p>
        `;
    skillsHeader.innerHTML = `
            <p>Skills: </p>
        `;
    skills.innerHTML = `
            <p>${skillsText}</p>
        `;
    lore.innerHTML = `
            <p>${loreText}</p>
        `;
    stats.innerHTML = `
            <p>${statsText}</p>
        `;
    heroImage.innerHTML = `
            <img src="${image.dataset.src}"/>`;

    // Displays popup from none to block
    popupBox.style.display = "block";

    // Closes Popup
    closeBtn.onclick = function () {
      popupBox.style.display = "none";
    };
  }
});

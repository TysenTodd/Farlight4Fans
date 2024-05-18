document.addEventListener("DOMContentLoaded", (event) => {
  //Form Submission
  const quizForm = document.getElementById("quiz-form");
  const submitButton = document.getElementById("quizSubmit");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    //User Selections
    hours = document.getElementById("hours").value;
    gun = document.getElementById("gun").value;
    playstyle = document.getElementById("playstyle").value;
    teamPlayer = document.getElementById("teamPlayer").value;
    kdaValue = document.getElementById("slider").value;
    role = document.getElementById("role").value;
    landing = document.getElementById("landing").value;

    //Makes sure all answers are selected
    if (
      hours === "Select" ||
      gun === "Select" ||
      playstyle === "Select" ||
      teamPlayer === "Select" ||
      role === "Select" ||
      landing === "Select"
    ) {
      alert("Please answer all questions before submitting your quiz!");
      return;
    }

    //Character Calculation

    recommendedHeroes = calculateRecommendedHeroes(
      hours,
      gun,
      playstyle,
      teamPlayer,
      kdaValue,
      role,
      landing
    );
    displayResults(recommendedHeroes);
  });
  const calculateRecommendedHeroes = (
    hours,
    gun,
    playstyle,
    teamPlayer,
    kdaValue,
    role,
    landing
  ) => {
    if (
      hours === "100-200" ||
      (hours === "200" && gun === "Assault Rifle") ||
      (gun === "SMG" &&
        playstyle === "Aggressive" &&
        teamPlayer === "yes" &&
        kdaValue >= 5.0 &&
        role === "shotcaller" &&
        landing === "busy")
    ) {
      recommendedHeroes = "Maggie";
    } else if (
      (hours === "0-24" && gun === "Sniper") ||
      (gun === "Assault Rifle" &&
        playstyle === "Smart" &&
        teamPlayer === "yes" &&
        kdaValue <= 2.0 &&
        role === "support" &&
        landing === "highground")
    ) {
      recommendedHeroes = "MKR";
    } else if (
      (hours === "0-24" && gun === "Assault Rifle") ||
      (gun === "Shotgun" &&
        playstyle === "Smart" &&
        teamPlayer === "no" &&
        kdaValue <= 2.0 &&
        role === "support") ||
      (role === "aggressive" && landing === "highground")
    ) {
      recommendedHeroes = "Sunil";
    } else if (
      hours === "25-50" &&
      gun === "SMG" &&
      playstyle === "Passive" &&
      teamPlayer === "yes" &&
      kdaValue >= 1.5 &&
      role === "medic" &&
      landing === "support"
    ) {
      recommendedHeroes = "Ceanna";
    } else if (
      hours === "51-100" ||
      (hours === "100-200" && gun === "SMG" && playstyle === "Aggressive") ||
      (playstyle =
        "Smart" &&
        teamPlayer === "yes" &&
        kdaValue >= 1.5 &&
        role === "medic" &&
        landing === "support")
    ) {
      recommendedHeroes = "Momoi";
    } else if (
      (hours === "0-24" && gun === "LMG") ||
      (gun =
        "whatever, im goated" &&
        playstyle === "Aggressive" &&
        teamPlayer === "yes") ||
      (teamPlayer === "no" &&
        kdaValue <= 1.5 &&
        role === "assault" &&
        landing === "busy")
    ) {
      recommendedHeroes = "Captain";
    } else if (
      hours === "51-100" ||
      (hours === "100-200" && gun === "SMG") ||
      ((gun = "whatever, im goated" && playstyle === "Aggresive") &&
        teamPlayer === "yes" &&
        kdaValue >= 1.5 &&
        role === "assault" &&
        landing === "busy")
    ) {
      recommendedHeroes = "Beau";
    } else if (
      hours === "100-200" &&
      gun === "Assault Rifle" &&
      playstyle === "Camper" &&
      teamPlayer === "yes" &&
      kdaValue > 0.1 &&
      role === "support" &&
      landing === "support"
    ) {
      recommendedHeroes = "Watchman";
    } else if (
      (hours === "200" && gun === "SMG") ||
      (gun === "Shotgun" && playstyle === "Smart") ||
      (playstyle === "Aggressive" &&
        teamPlayer === "yes" &&
        kdaValue > 5.0 &&
        role === "shotcaller" &&
        landing === "support")
    ) {
      recommendedHeroes = "Yong";
    } else if (
      (hours === "100-200" && gun === "Sniper") ||
      (gun === "whatever, im goated" && playstyle === "Smart") ||
      (playstyle === "Passive" &&
        teamPlayer === "yes" &&
        kdaValue > 3.0 &&
        role === "support" &&
        landing === "highground")
    ) {
      recommendedHeroes = "Lucinda";
    } else if (
      hours === "25-50" ||
      (hours === "51-100" &&
        gun === "SMG" &&
        playstyle === "Smart" &&
        teamPlayer === "yes" &&
        kdaValue > 1.5 &&
        role === "support") ||
      (role === "shotcaller" && landing === "balanced")
    ) {
      recommendedHeroes = "Syfer";
    } else if (
      (hours === "0-24" && gun === "Shotgun") ||
      (gun === "LMG" &&
        playstyle === "Camper" &&
        teamPlayer === "no" &&
        kdaValue < 1.0 &&
        role === "assault" &&
        landing === "busy")
    ) {
      recommendedHeroes = "Ducksyde";
    } else if (
      (hours === "51-100" && gun === "Sniper") ||
      (gun === "whatever, im goated" &&
        playstyle === "Smart" &&
        teamPlayer === "yes" &&
        kdaValue > 2.0 &&
        role === "assault" &&
        landing === "busy")
    ) {
      recommendedHeroes = "Ember";
    } else if (
      hours === "100-200" ||
      (hours === "200" && gun === "Assault Rifle") ||
      (gun === "whatever, im goated" &&
        playstyle === "Aggressive" &&
        teamPlayer === "yes" &&
        kdaValue > 3.5 &&
        role === "support") ||
      (role === "assault" && landing === "support")
    ) {
      recommendedHeroes = "Phantom";
    } else if (
      (hours === "200" &&
        gun === "whatever, im goated" &&
        playstyle === "Smart") ||
      (playstyle === "Passive" &&
        teamPlayer === "yes" &&
        kdaValue > 4.0 &&
        role === "shotcaller" &&
        landing === "busy") ||
      landing === "highground"
    ) {
      recommendedHeroes = "Maychelle";
    } else {
      recommendedHeroes = "Freddie";
    }
    return recommendedHeroes;
  };

  //Result Popup
  const displayResults = (recommendedHeroes) => {
    const userHeroElement = document.getElementById("best-user-hero");
    const userAnswerElement = document.getElementById("user-answers");
    const heroImageElement = document.getElementById("result-image");
    const resultContainer = document.getElementById("result-container");

    userHeroElement.textContent = `${recommendedHeroes}`;

    userAnswerElement.textContent = `${hours} hours, ${playstyle} playstyle, ${teamPlayer} being a team player`;

    //Displays user hero image in popup
    switch (recommendedHeroes.toLowerCase()) {
      case "beau":
        heroImageElement.src = "beau.webp";
        break;
      case "captain":
        heroImageElement.src = "captain.webp";
        break;
      case "ceanna":
        heroImageElement.src = "ceanna.webp";
        break;
      case "ducksyde":
        heroImageElement.src = "ducksyde.webp";
        break;
      case "ember":
        heroImageElement.src = "ember.webp";
        break;
      case "freddie":
        heroImageElement.src = "freddie.webp";
        break;
      case "lucinda":
        heroImageElement.src = "lucinda.webp";
        break;
      case "maggie":
        heroImageElement.src = "maggie.webp";
        break;
      case "maychelle":
        heroImageElement.src = "maychelle.webp";
        break;
      case "mkr":
        heroImageElement.src = "mkr.webp";
        break;
      case "momoi":
        heroImageElement.src = "momoi.webp";
        break;
      case "phantom":
        heroImageElement.src = "phantom.webp";
        break;
      case "sunil":
        heroImageElement.src = "sunil.webp";
        break;
      case "syfer":
        heroImageElement.src = "syfer.webp";
        break;
      case "watchman":
        heroImageElement.src = "watchman.webp";
        break;
      case "yong":
        heroImageElement.src = "yong.webp";
        break;
    }
    resultContainer.style.display = "flex";
  };
});

const aside = document.querySelector("aside");
const asideBtn = document.querySelector(".show-contacts");

asideBtn.addEventListener("click", () => {
  aside.classList.toggle("height");
});

// headerBtn
const headerBtn = document.querySelectorAll(".headerBtn");
const aboutSection = document.querySelector(".About-section");
const resumeSection = document.querySelector(".resume-section");
const portfolioSection = document.querySelector(".portfolio-section");
const contactsSection = document.querySelector(".contact-section");

headerBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target);

    if (e.target.innerHTML == "About") {
      aboutSection.style.display = "block";
      resumeSection.style.display =
        portfolioSection.style.display =
        contactsSection.style.display =
          "none";
    }
    if (e.target.innerHTML == "Resume") {
      resumeSection.style.display = "block";
      aboutSection.style.display =
        portfolioSection.style.display =
        contactsSection.style.display =
          "none";
    }
    if (e.target.innerHTML == "Portfolio") {
      portfolioSection.style.display = "block";
      aboutSection.style.display =
        resumeSection.style.display =
        contactsSection.style.display =
          "none";
    }
    if (e.target.innerHTML == "Contact") {
      aboutSection.style.display =
        resumeSection.style.display =
        portfolioSection.style.display =
          "none";
      contactsSection.style.display = "block";
    }
  });
});

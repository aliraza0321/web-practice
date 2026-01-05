
    // ===== Typewriter Effect for Hero Name =====
    const heroName = document.querySelector(".hero h1");
    const nameText = heroName.textContent;
    heroName.textContent = "";
    let i = 0;

    function typeWriter() {
      if (i < nameText.length) {
        heroName.textContent += nameText.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
      }
    }
    typeWriter();

    // ===== Skills Highlight on Click =====
    const skills = document.querySelectorAll("#skills ul li");
    skills.forEach(skill => {
      skill.addEventListener("click", () => {
        skill.classList.toggle("active-skill");
      });
    });

    // ===== Back to Top Button =====
    const backToTop = document.createElement("button");
    backToTop.innerText = "⬆ Back to Top";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
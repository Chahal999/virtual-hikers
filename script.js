// Text-to-Speech for multiple trail sections, needs to be updated.
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 1; i <= 3; i++) {
    const button = document.getElementById(`speakButton${i}`);
    const text = document.getElementById(`hikeText${i}`).innerText;
    button.addEventListener("click", () => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 1;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    });
  }
});


// ---------- dark mode toggle ----------
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;

  // Loads saved theme presets kek
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light Mode";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️ Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      toggleBtn.textContent = "🌙 Dark Mode";
      localStorage.setItem("theme", "light");
    }
  });
});


// style for the  contact form submission//

    const form = document.getElementById("form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status.innerHTML = "Thank you! Your message has been sent successfully.";
        status.style.color = "#ffb84d";
        form.reset();
        setTimeout(() => (status.innerHTML = ""), 4000);
      } else {
        status.innerHTML = " Sorry, something went wrong. Please try again later.";
        status.style.color = "red";
      }
    });
  
// Handle password save functionality
document.addEventListener("DOMContentLoaded", function () {
    const savedPasswordsList = document.getElementById("saved-passwords-list");
    const savePasswordForm = document.getElementById("save-password-form");
    const passwordNameInput = document.getElementById("password-name");
    const passwordValueInput = document.getElementById("password-value");

    // Sample saved passwords in localStorage (could be replaced with backend logic)
    const savedPasswords = JSON.parse(localStorage.getItem("savedPasswords") || "[]");

    // Render saved passwords
    function renderSavedPasswords() {
      savedPasswordsList.innerHTML = "";
      savedPasswords.forEach((password, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${password.name}</strong>: ${password.password} <button onclick="deletePassword(${index})">Delete</button>`;
        savedPasswordsList.appendChild(li);
      });
    }

    // Save password
    savePasswordForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const passwordName = passwordNameInput.value.trim();
      const passwordValue = passwordValueInput.value.trim();

      if (passwordName && passwordValue) {
        savedPasswords.push({ name: passwordName, password: passwordValue });
        localStorage.setItem("savedPasswords", JSON.stringify(savedPasswords));

        // Reset form and render the updated list
        passwordNameInput.value = "";
        renderSavedPasswords();
      }
    });

    // Delete password from saved list
    window.deletePassword = function (index) {
      savedPasswords.splice(index, 1);
      localStorage.setItem("savedPasswords", JSON.stringify(savedPasswords));
      renderSavedPasswords();
    };

    // Load the saved passwords list when the page loads
    renderSavedPasswords();
  });

  // Update the saved password value on page load from the generated password
  document.getElementById("generate-btn").addEventListener("click", function () {
    const generatedPassword = document.getElementById("generated-password").innerText;
    document.getElementById("password-value").value = generatedPassword;
  });

// Function to generate a random password
function generatePassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }
  
  // Display generated password
  document.getElementById('generate-btn').addEventListener('click', () => {
    const password = generatePassword();
    document.getElementById('generated-password').textContent = password;
    document.getElementById('save-btn').classList.remove('hidden'); // Show save button
  });
  
  // Save password function
  document.getElementById('save-btn').addEventListener('click', () => {
    const password = document.getElementById('generated-password').textContent;
    if (password) {
      savePassword(password);
      document.getElementById('generated-password').textContent = ''; // Clear generated password
      document.getElementById('save-btn').classList.add('hidden'); // Hide save button
    }
  });
  
  // Save password to list
  function savePassword(password) {
    const passwordList = document.getElementById('password-list');
  
    // Create a new list item for the password
    const listItem = document.createElement('li');
    listItem.textContent = password;
  
    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener('click', () => {
      passwordList.removeChild(listItem); // Remove item on delete
    });
  
    listItem.appendChild(deleteBtn);
    passwordList.appendChild(listItem);
  }
  
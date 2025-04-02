// Generate a random 8-digit Player ID in #### #### format
function generatePlayerID() {
  const digits = Math.floor(10000000 + Math.random() * 90000000).toString();
  return digits.slice(0, 4) + " " + digits.slice(4);
}

// Auto-generate ID on page load
window.addEventListener('load', () => {
  const playerIdInput = document.getElementById('player-id');
  if (playerIdInput) {
    playerIdInput.value = generatePlayerID();
  }
});

// Sign Up Function
document.querySelector('.sign-up-htm .button').addEventListener('click', function (e) {
  e.preventDefault();

  const email = document.getElementById('email-signup').value.trim();
  const password = document.getElementById('pass-signup').value.trim();
  const confirmPass = document.getElementById('repass-signup').value.trim();
  const ign = document.getElementById('ign-signup')?.value.trim(); // optional if added
  const playerId = document.getElementById('player-id')?.value;

  if (!email || !password || !confirmPass) {
    alert("All fields are required.");
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  if (password !== confirmPass) {
    alert("Passwords do not match.");
    return;
  }

  // Save to localStorage
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  if (ign) localStorage.setItem('ign', ign);
  if (playerId) localStorage.setItem('playerId', playerId);

  alert("Account created successfully!");
  document.getElementById('tab-1').checked = true; // Switch to Sign In tab
});

// Sign In Function
document.querySelector('.sign-in-htm .button').addEventListener('click', function (e) {
  e.preventDefault();

  const username = document.getElementById('user-login').value.trim();
  const password = document.getElementById('pass-login').value.trim();

  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');

  if ((username === storedEmail || username === localStorage.getItem('username')) && password === storedPassword) {
    alert("Login successful! Welcome back, " + (localStorage.getItem('ign') || username) + "!");
    // Optional redirect:
    // window.location.href = "welcome.html";
  } else {
    alert("Incorrect username or password.");
  }
});
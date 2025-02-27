function changeTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });

    // Deactivate all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show the selected tab content and activate its button
    document.getElementById(`${tabName}-content`).style.display = 'flex';
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

function register() {
    var fullName = document.getElementById("full-name").value;
    var phoneNumber = document.getElementById("phone-number").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("register-username").value;
    var password = document.getElementById("register-password").value;

    // Add your registration logic here (e.g., sending data to a server)
    alert(`Registered!\nFull Name: ${fullName}\nPhone Number: ${phoneNumber}\nEmail: ${email}\nUsername: ${username}\nPassword: ${password}`);
}

function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    // Add your login logic here (e.g., checking credentials)
    alert(`Login!\nUsername: ${username}\nPassword: ${password}`);
}

// Initially, show the login tab
changeTab('login');

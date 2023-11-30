
        function attemptLogin() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Example user credentials for testing
            const exampleUsers = {
                'Lucky1': '0816',
                'freetrial': '0811',
                'user3': '5246'
            };

            if (exampleUsers.hasOwnProperty(username) && exampleUsers[username] === password) {
                // Set login status to true in localStorage
                localStorage.setItem('isLoggedIn', 'true');
                // Redirect to the main page with a query parameter
                window.location.href = `sigma.html?loginSuccess=true`;
            } else {
                alert('Invalid credentials. Please try again.');
            }
        }

        function attemptSignup() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            // Example: Send user data to an email address
            const subject = 'New Signup';
            const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`;
            const mailtoLink = `mailto:sigmainvestmentacademy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Open the user's default email client to send the email
            window.location.href = mailtoLink;

            // Additional logic for storing the user in your system/database
            alert('Sign-up successful! Check your email for confirmation.');
        }

        function toggleSignupForm() {
            const loginForm = document.getElementById('loginForm');
            const signupForm = document.getElementById('signupForm');

            // Toggle display property
            loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
            signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
        }
    

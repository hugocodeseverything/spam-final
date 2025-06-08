function login() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            }).then(res => res.json()).then(data => {
                if (data.message) {
                    localStorage.setItem("user", username);
                    window.location.href = "MainMenu.html";
                } else {
                    document.getElementById("status").innerText = data.error;
                }
            });
        }

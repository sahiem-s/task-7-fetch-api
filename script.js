const container = document.getElementById("usersContainer");
const reloadBtn = document.getElementById("reloadBtn");

function fetchUsers() {
    container.innerHTML = "<p>Loading...</p>";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            container.innerHTML = ""; // Clear

            data.forEach(user => {
                const card = document.createElement("div");
                card.className = "user-card";

                card.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => {
            container.innerHTML = `<p style="color:red;">Failed to load data. Check your internet.</p>`;
            console.error("Error:", error);
        });
}

reloadBtn.addEventListener("click", fetchUsers);

// Fetch on page load
fetchUsers();

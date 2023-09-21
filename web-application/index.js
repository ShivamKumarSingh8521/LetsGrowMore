document.addEventListener("DOMContentLoaded", function () {
    const getUsersButton = document.getElementById("get-users");
    const userGrid = document.getElementById("user-grid");
    const loader = document.getElementById("loader");

    getUsersButton.addEventListener("click", async () => {
        getUsersButton.disabled = true;
        loader.classList.remove("hidden");

        try {
            const response = await fetch("https://reqres.in/api/users?page=1");
            const data = await response.json();
            const users = data.data;

            userGrid.innerHTML = "";
            users.forEach((user) => {
                const userCard = document.createElement("div");
                userCard.classList.add("user-card");
                userCard.innerHTML = `
                    <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
                    <h2>${user.first_name} ${user.last_name}</h2>
                    <p>Email: ${user.email}</p>
                `;
                userGrid.appendChild(userCard);
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            getUsersButton.disabled = false;
            loader.classList.add("hidden");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");
  const displayData = document.getElementById("displayData");
  const userDataList = [];

  registrationForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const userData = {
          firstName,
          lastName,
          email,
          password,
      };

      userDataList.push(userData);

      displayData.innerHTML = generateUserList(userDataList);
      registrationForm.reset();
  });

  function generateUserList(users) {
      let userListHTML = "<h2>Registration Data:</h2>";

      users.forEach((user, index) => {
          userListHTML += `
              <div class="user-card">
                  <h3>User ${index + 1}</h3>
                  <p><strong>First Name:</strong> ${user.firstName}</p>
                  <p><strong>Last Name:</strong> ${user.lastName}</p>
                  <p><strong>Email:</strong> ${user.email}</p>
                  <p><strong>Password:</strong> ${user.password}</p>
              </div>
          `;
      });

      return userListHTML;
  }
});

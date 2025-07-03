const userList = document.getElementById('userList');
const errorMsg = document.getElementById('errorMsg');
const reloadBtn = document.getElementById('reloadBtn');

function displayUsers(users) {
    userList.innerHTML = '';
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user-card';
        userDiv.innerHTML = `
            <strong>Name:</strong> ${user.name}<br>
            <strong>Email:</strong> ${user.email}<br>
            <strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}
        `;
        userList.appendChild(userDiv);
    });
}

function fetchUsers() {
    userList.innerHTML = '';
    errorMsg.textContent = '';
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(users => displayUsers(users))
        .catch(error => {
            errorMsg.textContent = 'Failed to fetch users. Please check your connection and try again.';
        });
}

reloadBtn.addEventListener('click', fetchUsers);

// Fetch users on page load
fetchUsers();
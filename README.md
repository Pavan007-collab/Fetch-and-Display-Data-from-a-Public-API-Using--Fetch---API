# Fetch-and-Display-Data-from-a-Public-API-Using-Fetch-API:
# Fetch and Display User Data from Public API:

## Overview:

This project demonstrates how to fetch user data from a public API using JavaScript's Fetch API and display it on a web page. It includes error handling, a reload button, and basic styling.

## Features:

- Fetches user data from: https://jsonplaceholder.typicode.com/users
- Displays each user's name, email, and address
- Handles network errors gracefully
- Includes a "Reload Users" button to refetch data
- Responsive and styled with CSS

## Files:

- `user-list.html` — Main HTML file
- `fetch-users.js` — JavaScript for fetching and displaying users
- `user-list.css` — CSS for styling the page

## How to Run:

1. **Download or clone this repository.**:
2. Make sure all three files (`user-list.html`, `fetch-users.js`, `user-list.css`) are in the same folder.
3. Open `user-list.html` in your web browser (double-click or use "Open with Live Server" in VS Code).
4. The user list will load automatically. Click "Reload Users" to refresh the data.
5. To test error handling, disconnect your internet and click "Reload Users"—an error message will appear.

## What I Did:

- Created an HTML structure with containers for user data and error messages.
- Wrote JavaScript to fetch user data from the API, parse the response, and display each user's name, email, and address.
- Implemented error handling to show a message if the fetch fails.
- Added a reload button to allow users to refetch the data.
- Styled the page using CSS for better readability.

## Criteria Met:

- Used HTML to create a container for user data
- Used JS fetch to request data from the public API
- Parsed the JSON response
- Looped through users and displayed their name, email, and address
- Handled errors with a catch block
- Styled displayed data with CSS
- Tested network error handling
- Added a reload button to refetch.
------------

# Denis-Riungu-Resume

## Summary of Changes

### 1. Removed the Hero Section
- The "Hello friend! I’m available for freelance work" section was removed to start the website from the "My Story" section.
- The navigation bar was retained.

### 2. Made the Navigation Bar Persistent
- Ensured the navigation bar remains visible at all times, including when scrolling to the top of the website.
- Added the `fixed-top` class to the navbar for consistent behavior.

### 3. Adjusted Navbar Styling
- Added a semi-transparent black background to the navbar for better visibility.
- Ensured smooth transitions with `transition: background-color 0.3s ease`.
- Highlighted active links and hover states with custom colors.

### 4. Fixed Navbar Behavior on Scroll
- Added JavaScript to dynamically highlight the active section in the navbar as the user scrolls through the page.

### 5. Debugging and Bug Fixes
- Resolved issues with disappearing navigation by ensuring proper `z-index` and background styling.
- Verified file paths for all resources (CSS, JS, images) to avoid 404 errors.
- Addressed potential source map warnings and ensured compatibility between Bootstrap and jQuery versions.

### 6. General Improvements
- Added smooth scrolling behavior for better user experience.
- Adjusted padding for the body to prevent content overlap with the fixed navbar.

### 7. Resolved JavaScript Errors
- Fixed `Uncaught TypeError` issues in the JavaScript files by:
  - Ensuring all targeted elements exist in the DOM before accessing their properties.
  - Adding checks for undefined elements in the `click-scroll.js` file.
  - Verifying that jQuery is loaded before other scripts.
- Optimized the scroll event listener to avoid multiple event bindings.
- Improved error handling and debugging with `console.log` statements.

### 8. Improved Smooth Scrolling
- Enhanced the smooth scrolling functionality to handle edge cases where sections might not exist.
- Adjusted the offset calculation to ensure proper alignment with the fixed navbar.

### 9. General Code Optimization
- Refactored the `click-scroll.js` file for better readability and maintainability.
- Added comments to explain key parts of the JavaScript code.

---

## How to Run the Project
1. Open the project folder in your preferred code editor (e.g., Visual Studio Code).
2. Open `index.html` in a browser to view the website.
3. Ensure all dependencies (CSS, JS, images) are correctly linked and available in the project directory.

---

## Technologies Used
- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **jQuery**

---

## Future Improvements
- Optimize images for faster loading.
- Add more interactive elements to the website.
- Improve responsiveness for smaller devices.

---

Feel free to reach out for further assistance or suggestions!


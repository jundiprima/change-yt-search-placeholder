// content.js

// Function to modify the search bar placeholder
function modifySearchBar() {
    // Find the search bar element
    const searchBar = document.querySelector('input#search');

    // Check if the search bar exists
    if (searchBar) {
        // Set your name as the placeholder text
        searchBar.placeholder = "Jundi Khaalish";

        // Add event listener to detect changes in the search bar
        searchBar.addEventListener('input', function() {
            // If the search bar is empty, re-insert your name as the placeholder
            if (searchBar.value.trim() === "") {
                searchBar.placeholder = "Jundi Khaalish";
            } else {
                // If the search bar has text, clear the placeholder
                searchBar.placeholder = "";
            }
        });
    }
}

// Call the function when the page is fully loaded
window.addEventListener('load', modifySearchBar);

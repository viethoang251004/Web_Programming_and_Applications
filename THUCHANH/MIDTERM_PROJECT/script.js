// Add an event listener to the 'show-more-btn' button
document.getElementById('show-more-btn').addEventListener('click', function () {
    // When the button is clicked, display the 'more-info' element
    document.getElementById('more-info').style.display = 'block';
});
// Function to confirm if the user really wants to leave the page
function confirmExit() {
    return "Do you really want to leave this page?";
}

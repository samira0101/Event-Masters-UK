// Targeting html elements by id and class
const locationInputEl = document.getElementById("locationInput");
const button = document.getElementById("submit");
// Storing Api Keys in const
const ticketMasterAPIKey = "1BjUoXQCNeA20BPARaQHG2ezCoamZAwe";
const openWeatherAPIKey = "1ca21b13300483dc1e57d37215dcac93";

// Function to get events from ticket masters API, and then dynamically displaying data using cards.
function searchHandler(e) {
// Search button event listener to run the function searchHnadler
button.addEventListener("click", searchHandler)
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const resolution = document.getElementById('resolution').value;

    // Basic Validation
    if (name === "" || resolution === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Prepare resolution data
    const resolutionData = {
        name: name,
        resolution: resolution
    };

    // Store data in JSON (simulating saving to a file or database)
    saveResolutionData(resolutionData);

    // Show popup with the congratulatory message and resolution
    showPopup(name, resolution);
}

// Save the resolution data (simulating storage in JSON)
function saveResolutionData(data) {
    // Store data in localStorage for demo purposes
    let resolutions = JSON.parse(localStorage.getItem('resolutions')) || [];
    resolutions.push(data);
    localStorage.setItem('resolutions', JSON.stringify(resolutions));
}

// Display the popup with resolution and congratulatory message
function showPopup(name, resolution) {
    const popupMessage = document.getElementById('popupMessage');
    popupMessage.innerHTML = `Congratulations, ${name}!<br><br>Your resolution is: "${resolution}"`;

    // Show the popup
    document.getElementById('popup').style.display = 'flex';
}

// Close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.resForm.reset();
}

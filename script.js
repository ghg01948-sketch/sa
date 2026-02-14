document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    const cookiesElement = document.getElementById('cookies');
    
    // Function to format cookie data
    function getCookieData() {
        try {
            return document.cookie;
        } catch(e) {
            return "Error retrieving cookies";
        }
    }
    
    // Display current cookies when page loads and regularly update every second
    function updateCookies() {
        const cookieData = getCookieData();
        cookiesElement.textContent = "Current Cookies:\n" + cookieData;
        
        // Update every second for demonstration purposes
        setTimeout(updateCookies, 1000);
    }
    
    // Initial call to display current cookies
    updateCookies();
});

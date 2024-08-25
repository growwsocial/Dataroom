   let timeout;
let countdownInterval;

function showCountdownPopup() {
    document.getElementById('countdown-popup').style.display = 'flex';
    let countdown = 9;
    document.getElementById('countdown-timer').textContent = countdown;

    countdownInterval = setInterval(() => {
        countdown--;
        document.getElementById('countdown-timer').textContent = countdown;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            lockScreen(); // Lock the screen
        }
    }, 1000);
}

function resetTimer() {
    clearTimeout(timeout);
    clearInterval(countdownInterval);
    document.getElementById('countdown-popup').style.display = 'none';
}

function startTimer() {
    clearTimeout(timeout); // Clear any existing timer
    timeout = setTimeout(showCountdownPopup, 30000); // 30 seconds
}

function lockScreen() {
    document.getElementById('countdown-popup').style.display = 'none';
    document.getElementById('hidden-content').style.display = 'none';
    document.getElementById('locked-overlay').style.display = 'flex';
    setTimeout(() => {
        location.reload(); // Refresh the page after the lock screen is shown
    }, 100); // Small delay to ensure the overlay is displayed before refresh
}

document.addEventListener('mousemove', startTimer);
document.addEventListener('keydown', startTimer);
document.addEventListener('click', startTimer);
document.addEventListener('touchstart', startTimer); // For touch devices

document.getElementById('countdown-popup').addEventListener('click', resetTimer);
document.getElementById('logout-btn').addEventListener('click', lockScreen);

// Initialize the timer when the page loads
startTimer();

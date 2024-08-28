let progressIndicator = document.getElementById('speed-progress-indicator');
let animationDuration = 5000; // adjust the duration in milliseconds

function loopAnimation() {
  progressIndicator.classList.add('in-progress');
  setTimeout(() => {
    progressIndicator.classList.remove('in-progress');
    requestAnimationFrame(loopAnimation); // recursive call
  }, animationDuration);
}

loopAnimation(); // initial call

// Refresh the site after 20 seconds
setTimeout(() => {
  location.reload();
}, 20000); // 20000 milliseconds = 20 seconds

function loopAnimation() {
  progressIndicator.classList.add('in-progress');
  setTimeout(() => {
    progressIndicator.classList.remove('in-progress');
    requestAnimationFrame(loopAnimation); // recursive call
    if (animationDuration >= 20000) { // check if 20 seconds have passed
      location.reload();
    }
  }, animationDuration);
}

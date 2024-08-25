// Function to fetch and include button HTML
        function loadButtons() {
            fetch('https://growwsocial.github.io/Dataroom/buttons.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('buttons-container').innerHTML = data;
                })
                .catch(error => console.error('Error loading buttons:', error));
        }

        // Load buttons on page load
        document.addEventListener('DOMContentLoaded', loadButtons);

const correctPin = '   '; // Set the correct PIN here

        function verifyPin() {
            const inputPin = document.getElementById('pin-input').value;
            if (inputPin.length === 3) {
                if (inputPin === correctPin) {
                    document.getElementById('pin-status').textContent = 'ACCESS GRANTED';
                    document.getElementById('pin-status').className = 'access-granted';
                    document.getElementById('pin-animation').textContent = '';
                    setTimeout(() => {
                        document.getElementById('pin-popup').style.display = 'none';
                        document.getElementById('hidden-content').style.display = 'block';
                    }, 2000); // Wait 2 seconds before hiding the popup
                } else {
                    document.getElementById('pin-status').textContent = 'ACCESS DENIED';
                    document.getElementById('pin-status').className = 'access-denied';
                    document.getElementById('pin-animation').textContent = '';
                    setTimeout(() => {
                        document.getElementById('pin-message').textContent = '';
                        document.getElementById('pin-input').value = ''; // Reset the input box
                        document.getElementById('pin-input').focus(); // Focus on the input box
                        document.getElementById('pin-status').textContent = 'ACCESS DENIED';
                        document.getElementById('pin-status').className = '';
                        document.getElementById('pin-animation').textContent = '';
                    }, 2000); // Wait 2 seconds before clearing the input box
                }
            }
        }

        document.getElementById('pin-input').addEventListener('input', verifyPin);

        // Hide content initially and only show after PIN is verified
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('hidden-content').style.display = 'none';
        });

        // Handle "Log Out" button click
        document.getElementById('logout-btn').addEventListener('click', () => {
            document.getElementById('pin-popup').style.display = 'flex';
            document.getElementById('hidden-content').style.display = 'none';
            document.getElementById('pin-input').value = ''; // Clear the PIN input field
            document.getElementById('pin-status').textContent = 'ACCESS DENIED'; // Reset the status text
            document.getElementById('pin-status').className = ''; // Remove any previous status classes
        });

        function searchEntry() {
            const query = document.getElementById('search-input').value.toLowerCase().trim();
            const entries = document.querySelectorAll('.data-card');
            const messageElement = document.getElementById('search-message');
            let found = false;
            let resultCount = 0;

            if (query === '') {
                entries.forEach(entry => {
                    entry.style.display = 'none';
                });
                messageElement.textContent = 'Please enter a search term';
                return;
            }

            entries.forEach(entry => {
                const name = entry.querySelector('.name').textContent.toLowerCase();
                if (name.includes(query)) {
                    entry.style.display = 'block';
                    found = true;
                    resultCount++;
                } else {
                    entry.style.display = 'none';
                }
            });

            if (found) {
                messageElement.textContent = `${resultCount} result${resultCount > 1 ? 's' : ''} found`;
            } else {
                messageElement.textContent = 'No results found';
            }
        }

        document.getElementById('search-button').addEventListener('click', searchEntry);

        function loadHTMLContent(url, elementId) {
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    document.getElementById(elementId).innerHTML = data;
                })
                .catch(error => console.error('Error loading HTML content:', error));
        }

        const hiddenLink = document.getElementById('error');
        loadHTMLContent(hiddenLink.href, 'content-placeholder');

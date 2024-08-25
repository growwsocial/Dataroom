function nextStep(step) {
            // Hide all steps
            document.querySelectorAll('.container > div').forEach(element => {
                element.classList.add('hidden');
                element.classList.remove('show');
            });

            // Show the selected step
            document.getElementById('step' + step).classList.remove('hidden');
            document.getElementById('step' + step).classList.add('show');
        }

        function validateForm() {
            let isValid = true;
            const fields = [
                { id: 'name', errorId: 'nameError' },
                { id: 'father', errorId: 'fatherError' },
                { id: 'dob', errorId: 'dobError' },
                { id: 'countryCode', errorId: 'mobileError' },
                { id: 'mobile', errorId: 'mobileError' },
                { id: 'email', errorId: 'emailError' },
                { id: 'branch', errorId: 'branchError' },
                { id: 'address', errorId: 'addressError' },
                { id: 'registrationNo', errorId: 'registrationNoError' },
                { id: 'imgSrc', errorId: 'imgSrcError' },
                { id: 'instagramLink', errorId: 'instagramLinkError' },
                { id: 'whatsappCountryCode', errorId: 'whatsappNumberError' },
                { id: 'whatsappNumber', errorId: 'whatsappNumberError' }
            ];

            fields.forEach(field => {
                const input = document.getElementById(field.id);
                const error = document.getElementById(field.errorId);
                if (!input.value) {
                    input.style.borderColor = 'red';
                    error.style.display = 'block';
                    isValid = false;
                } else {
                    input.style.borderColor = '#00ff00';
                    error.style.display = 'none';
                }
            });

            return isValid;
        }

        function submitForm() {
            if (validateForm()) {
                // Gather the input values
                var name = document.getElementById('name').value;
                var father = document.getElementById('father').value;
                var dob = document.getElementById('dob').value;
                var countryCode = document.getElementById('countryCode').value;
                var mobile = document.getElementById('mobile').value;
                var email = document.getElementById('email').value;
                var branch = document.getElementById('branch').value;
                var address = document.getElementById('address').value;
                var registrationNo = document.getElementById('registrationNo').value;
                var imgSrc = document.getElementById('imgSrc').value;
                var instagramLink = document.getElementById('instagramLink').value;
                var whatsappCountryCode = document.getElementById('whatsappCountryCode').value;
                var whatsappNumber = document.getElementById('whatsappNumber').value;

                // Prepare WhatsApp link
                var whatsappLink = `https://wa.me/${whatsappCountryCode}${whatsappNumber}`;

                // Prepare the output HTML matching your structure
                var output = `
                    <div class="data-card" id="1">
                        <div class="crime-picture">
                            <img src="${imgSrc}" alt="Image">
                        </div>
                        <div class="crime-details">
                            <div class="name">${name}</div>
                            <div class="father">Father: ${father}</div>
                            <div class="dob">D.O.B: ${dob}</div>
                            <div class="mobile">Mobile: ${countryCode}${mobile}</div>
                            <div class="email">Email: ${email}</div>
                            <div class="data1">Branch: ${branch}</div>
                            <div class="address">Address: ${address}</div>
                            <div class="reward-banner">Registration No: ${registrationNo}</div>
                            <button class="instagram-button" onclick="window.location.href='${instagramLink}';">Instagram</button>
                            <button class="whatsapp-button" onclick="window.location.href='${whatsappLink}';">Whatsapp</button>
                        </div>
                    </div>
                `;

                // Temporarily hide the copy button
                const copyButton = document.getElementById('copyButton');
                if (copyButton) {
                    copyButton.style.display = 'none';
                }

                // Display the output in the result div
                document.getElementById('result').innerHTML = output;

                // Add a copy button dynamically
                const resultContainer = document.getElementById('result');
                const copyBtn = document.createElement('button');
                copyBtn.id = 'copyButton';
                copyBtn.innerText = 'Copy HTML';
                copyBtn.onclick = copyToClipboard;
                resultContainer.appendChild(copyBtn);

                // Show the result
                document.getElementById('result').classList.remove('hidden');
                document.getElementById('step3').classList.add('hidden');
            }
        }

        function copyToClipboard() {
            // Get the result HTML
            const result = document.getElementById('result');
            const tempInput = document.createElement('textarea');
            tempInput.value = result.innerHTML.replace(/<button[^>]*>Copy HTML<\/button>/, ''); // Remove copy button
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            // Show notification
            const notification = document.getElementById('notification');
            notification.style.display = 'block';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 2000);
        }

        // Add event listeners to update input colors in real time
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', () => {
                if (input.validity.valid) {
                    input.style.borderColor = '#00ff00';
                    input.style.backgroundColor = '#222';
                } else {
                    input.style.borderColor = 'red';
                    input.style.backgroundColor = '#222';
                }
            });
        });

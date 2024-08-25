body {
            background-color: #000;
            color: #00ff00;
            font-family: "Courier New", Courier, monospace;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            overflow: hidden;
        }
        .container {
            width: 100%;
            max-width: 600px;
            border: 2px solid #00ff00;
            padding: 20px;
            box-shadow: 0px 0px 10px #00ff00;
            position: relative;
            animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        input, select, button {
            background-color: #111;
            border: 1px solid #00ff00;
            color: #00ff00;
            padding: 10px;
            margin: 10px 0;
            width: 100%;
            font-family: inherit;
            font-size: 16px;
        }
        input:focus, select:focus, button:focus {
            outline: none;
            box-shadow: 0 0 10px #00ff00;
        }
        input:valid {
            border-color: #00ff00;
            background-color: #222;
        }
        input:invalid {
            border-color: red;
            background-color: #222;
        }
        input[type="text"]::placeholder {
            color: #555;
        }
        input[type="text"].country-code {
            width: 50px;
            display: inline-block;
        }
        input[type="text"].mobile-number {
            width: calc(100% - 60px);
            display: inline-block;
        }
        .hidden {
            display: none;
        }
        .show {
            display: block;
            animation: fadeIn 1s ease-in-out;
        }
        .container:before {
            content: "DATABASE ENTRY";
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            background: #000;
            padding: 5px 10px;
            color: #00ff00;
            font-family: inherit;
            box-shadow: 0px 0px 10px #00ff00;
            animation: glitch 1.5s infinite;
        }
        @keyframes glitch {
            0% { transform: translate(2px, 2px); }
            20% { transform: translate(-2px, -2px); }
            40% { transform: translate(2px, -2px); }
            60% { transform: translate(-2px, 2px); }
            80% { transform: translate(2px, 2px); }
            100% { transform: translate(0, 0); }
        }
        .calendar-style {
            border: 1px solid #00ff00;
            background-color: #000;
            color: #00ff00;
        }
        .calendar-style::-webkit-calendar-picker-indicator {
            filter: invert(1);
        }
        .notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #000;
            color: #00ff00;
            border: 2px solid #00ff00;
            padding: 10px;
            box-shadow: 0px 0px 10px #00ff00;
            display: none;
            z-index: 1000;
            animation: slideIn 0.5s ease-in-out;
        }
        @keyframes slideIn {
            from { transform: translateX(-50%) translateY(50px); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        .error-message {
            color: red;
            font-size: 12px;
            margin: 0;
            display: none;
        }

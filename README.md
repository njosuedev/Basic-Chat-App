<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat App - Installation</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
        pre { background: #f4f4f4; padding: 10px; border-radius: 5px; text-align: left; display: inline-block; }
        button { margin-top: 10px; padding: 5px 10px; cursor: pointer; }
    </style>
</head>
<body>

    <h1>🚀 Chat App</h1>
    <p>A real-time chat app using <b>Node.js</b> and <b>Socket.io</b>.</p>

    <h2>📥 Installation</h2>

    <h3>1️⃣ Clone the repository</h3>
    <pre><code id="code1">git clone https://github.com/njosuedev/chat-app.git && cd chat-app</code></pre>
    <button onclick="copyCode('code1')">📋 Copy</button>

    <h3>2️⃣ Install dependencies</h3>
    <pre><code id="code2">npm install</code></pre>
    <button onclick="copyCode('code2')">📋 Copy</button>

    <h3>3️⃣ Start the server</h3>
    <pre><code id="code3">node server.js</code></pre>
    <button onclick="copyCode('code3')">📋 Copy</button>

    <script>
        function copyCode(id) {
            const code = document.getElementById(id).innerText;
            navigator.clipboard.writeText(code);
            alert("Copied to clipboard!");
        }
    </script>

</body>
</html>

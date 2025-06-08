if (!localStorage.getItem("user")) {
        window.location.href = "login.html";
    }
    function toggleMode() {
        const root = document.documentElement;
        const currentBg = getComputedStyle(root).getPropertyValue('--bg-color');
        const dark = currentBg.includes('#000');
        root.style.setProperty('--bg-color', dark ? 'linear-gradient(to right, #ffffff, #cccccc)' : 'linear-gradient(to right, #000000, #3c096c)');
        root.style.setProperty('--text-color', dark ? 'black' : 'white');
    }
    async function checkSpam() {
        const text = document.getElementById("textInput").value;
        showLoading(true);
        const response = await fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ text, username: "anonymous" })
        });
        const data = await response.json();
        showLoading(false);
        displayResult(data);
        addToHistory(data);
        loadHistoryFromServer();
    }
    async function uploadFile() {
        const input = document.getElementById("fileInput");
        const file = input.files[0];
        if (!file) return;
        const formData = new FormData();
        formData.append("file", file);
        showLoading(true);
        const response = await fetch("http://localhost:5000/predict-file", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        showLoading(false);
        displayResult(data);
    }
    function displayResult(data) {
        const resultDiv = document.getElementById("result");
        if (data.error) {
            resultDiv.innerHTML = "<b>Error:</b> " + data.error;
        } else {
            const highlighted = highlightSpamWords(data.input);
            resultDiv.innerHTML = `
                <div><b>Classification of Ensemble Learning:</b> <span class="${data.naive_bayes.includes('Spam') ? 'spam' : 'not-spam'}">${data.naive_bayes}</span></div>
                <div><b>Ensemble Learning Confidence:</b> ${data.rf_confidence}%</div>
                <div><b>Teks Yang anda input:</b><br/>${highlighted}</div>
            `;
        }
    }
    function highlightSpamWords(text) {
        const spamWords = ["free", "win", "money", "urgent", "claim", "offer", "click", "buy", "cheap", "congratulation", "Earn", "$", "Click here"];
        const pattern = new RegExp("\\b(" + spamWords.join("|") + ")\\b", "gi");
        return text.replace(pattern, match => `<mark>${match}</mark>`);
    }
    function showLoading(show) {
        document.getElementById("loading").style.display = show ? "block" : "none";
    }
    function addToHistory(data) {
        const logs = JSON.parse(localStorage.getItem("history") || "[]");
        logs.unshift({
            time: new Date().toLocaleString(),
            nb: data.naive_bayes,
            rf: data.random_forest,
            text: data.input
        });
        localStorage.setItem("history", JSON.stringify(logs.slice(0, 5)));
    }
    async function loadHistoryFromServer() {
        const response = await fetch("http://localhost:5000/history?username=anonymous");
        const data = await response.json();
        const div = document.getElementById("history");
        div.innerHTML = "<b>Histori Deteksi Dari Server (Spam/Non Spam):</b><ul>" +
            data.map(log => `<li>[${log.timestamp}] ${log.result} (${log.confidence}%)<br/><small>${log.text}</small></li>`).join("") +
            "</ul>";
    }
    loadHistoryFromServer();

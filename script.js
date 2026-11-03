function calculateLove() {

    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();

    let resultBox = document.getElementById("resultBox");
    let resultText = document.getElementById("resultText");
    let percentage = document.getElementById("percentage");
    let message = document.getElementById("message");

    if (name1 === "" || name2 === "") {
        alert("Please enter both names! ❤️");
        return;
    }

    if (name1.toLowerCase() === name2.toLowerCase()) {
        alert("Please enter two different names!");
        return;
    }

    let love = Math.floor(Math.random() * 101);

    resultBox.style.display = "block";

    resultText.innerHTML = name1 + " ❤️ " + name2;

    percentage.innerHTML = love + "%";

    if (love >= 80) {
        message.innerHTML = "💕 Perfect Match! You two are made for each other!";
    }
    else if (love >= 60) {
        message.innerHTML = "😍 Amazing Connection! There is something special!";
    }
    else if (love >= 40) {
        message.innerHTML = "💗 Good Friendship! Love might be blooming!";
    }
    else {
        message.innerHTML = "😊 Keep smiling! Every relationship has its own story!";
    }

}
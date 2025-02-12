const noButton = document.getElementById("noButton");
let messages = ["No", "Are you sure?", "Really sure?", "Come on chunky, say yes!", "Last chance!", "You know you want to! 😭❤️"];
let clickCount = 0;

noButton.addEventListener("click", function() {
    if (clickCount < messages.length - 1) {
        noButton.innerText = messages[clickCount];
        clickCount++;
    } else {
        noButton.innerText = "Too late! 👺";
        noButton.disabled = true;
    }
});
// ===============================
// SELECT HTML ELEMENTS
// ===============================

const chatContainer = document.querySelector(".chat-box");
const textarea = document.querySelector("textarea");
const sendBtn = document.querySelector(".send-btn");

// ===============================
// AUTO RESIZE TEXTAREA
// ===============================

textarea.addEventListener("input", () => {

    textarea.style.height = "auto";

    textarea.style.height = textarea.scrollHeight + "px";

});

// ===============================
// SEND MESSAGE FUNCTION
// ===============================

function sendMessage() {

    const message = textarea.value.trim();

    if (message === "") return;

    console.log(message);

    textarea.value = "";

    textarea.style.height = "auto";

}

// ===============================
// SEND BUTTON
// ===============================

sendBtn.addEventListener("click", sendMessage);

// ===============================
// ENTER TO SEND
// SHIFT + ENTER = NEW LINE
// ===============================

textarea.addEventListener("keydown", (event) => {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendMessage();

    }

});

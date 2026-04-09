const editor = document.getElementById("editor");

// Load saved text
editor.value = localStorage.getItem("doc") || "";

// Save and sync text
editor.addEventListener("input", () => {
  localStorage.setItem("doc", editor.value);
});

// Real-time sync across tabs
window.addEventListener("storage", () => {
  editor.value = localStorage.getItem("doc");
});
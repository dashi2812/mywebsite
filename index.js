/* MOBILE MENU */
function toggleMenu() {
    document.querySelector("nav").classList.toggle("show");
}




function sendForm(formData) {
  return fetch("https://api.mysqft.in/submit", {
    method: "POST",
    body: formData,
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Server returned " + response.status);
    }
    return response.json();
  });
}

// Usage
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const button = document.getElementById("submitBtn");

  // Change button states
  button.innerText = "Sending...";
  button.disabled = true;

  sendForm(formData)
    .then(data => {
      console.log("Server response:", data);
      alert("✅ " + data.message);
      button.innerText = "Sent!";
    })
    .catch(err => {
      console.error("Error:", err);
      alert("❌ Failed: Server Error!, please try later");
      button.innerText = "Try Again";
    })
    .finally(() => {
      // Restore button after a short delay
      setTimeout(() => {
        button.innerText = "Send";
        button.disabled = false;
      }, 1500);
    });
});





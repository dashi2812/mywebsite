/* MOBILE MENU */
function toggleMenu() {
    document.querySelector("nav").classList.toggle("show");
}




function sendForm(formData) {
  return fetch("https://server-supabase-abvw.onrender.com/submit", {
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

  // Change button state
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


// Ping function
function pingRender() {
  fetch("https://https://server-supabase-abvw.onrender.com/submit")
    .then(res => console.log("Time:", res.status))
    .catch(err => console.error("Time:", err));
}

// Run immediately once
pingRender();

// Then run every 10 minutes (300000 ms)
setInterval(pingRender, 700000);


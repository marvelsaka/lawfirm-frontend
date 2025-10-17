 document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // stop form from refreshing page

  // get values from inputs
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    const response = await fetch("https://lawfirm-backend-1.onrender.com/contact", {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    const data = await response.json();

    document.getElementById("responseMessage").textContent =
      data.success
        ? "✅ Message sent successfully!"
        : "❌ Something went wrong.";

    // optional: clear the form
    document.getElementById("contactForm").reset();
  } catch (error) {
    console.error("Error sending message:", error);
    document.getElementById("responseMessage").textContent =
      "❌ Could not connect to the server.";
  }
});

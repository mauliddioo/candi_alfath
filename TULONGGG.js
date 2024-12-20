let totalTickets = 0; // Track the total number of tickets booked

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the page from reloading

  // Get values from the form
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const ticketCount = parseInt(document.getElementById("ticketCount").value);

  // Validate input
  if (
    !name ||
    !email.includes("@") ||
    !phone ||
    isNaN(ticketCount) ||
    ticketCount <= 0 ||
    ticketCount > 10
  ) {
    displayError("Invalid data or ticket count exceeds the limit.");
    return;
  }

  // Check ticket limit
  if (totalTickets + ticketCount > 10) {
    displayError("The total number of tickets exceeds the available limit (10 tickets).");
    return;
  }

  // Add the number of tickets to the total
  totalTickets += ticketCount;

  // Confirm successful booking
  alert(
    `Booking successful! Thank you, ${name}. You have booked ${ticketCount} ticket(s).`
  );

  // Reset the form after booking
  document.getElementById("bookingForm").reset();
  hideError();
});

function displayError(message) {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

function hideError() {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.style.display = "none";
}

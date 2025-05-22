const table = document.querySelector("table");

if (table) {
  // Clone the table to preserve it
  const preservedTable = table.cloneNode(true);

  // Clear the entire body
  document.body.innerHTML = "";

  // Optionally remove all head content (e.g., styles/scripts)
  document.head.innerHTML = "";

  // Add the preserved table back to the page
  document.body.appendChild(preservedTable);

  console.log("Preserved <table> only.");
} else {
  console.warn("No <table> found to preserve.");
}

document.getElementById("apply").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Inject CSS
  await chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ["style.css"] // Fixed filename
  });

  // Inject JS
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  });

  window.close(); // Optional: close popup after applying
});

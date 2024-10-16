const butInstall = document.getElementById('buttonInstall');

// Store the deferred prompt event
let deferredPrompt;

// Event handler for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing
  event.preventDefault();

  // Save the event so it can be triggered later
  deferredPrompt = event;

  // Make the install button visible
  butInstall.style.display = 'block';

  console.log('beforeinstallprompt event was fired');
});

// Click event handler for the install button
butInstall.addEventListener('click', async () => {
  if (!deferredPrompt) {
    return;
  }

  // Show the install prompt
  deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;

  console.log(`User response to the install prompt: ${outcome}`);

  // Reset the deferred prompt variable, since it can only be used once
  deferredPrompt = null;

  // Hide the install button
  butInstall.style.display = 'none';
});

// Event handler for the appinstalled event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed successfully!', event);
});


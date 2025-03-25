function showTab(tabId) {
  // Remove active class from all tab contents
  document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
  });

  // Remove active class from all buttons
  document.querySelectorAll('.bk-tab-control').forEach(button => {
      button.classList.remove('active');
  });

  // Add active class to the selected tab content
  document.getElementById(tabId).classList.add('active');

  // Add active class to the clicked button
  const activeButton = document.querySelector(`.bk-tab-control[data-tab="${tabId}"]`);
  if (activeButton) {
      activeButton.classList.add('active');
  }
}


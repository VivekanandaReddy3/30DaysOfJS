// Generate a random color in hex format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Show the popup
  function showPopup(message) {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const popupText = document.getElementById('popupText');
  
    popupText.textContent = message;
    popup.style.display = 'block';
    overlay.style.display = 'block';
  }
  
  // Hide the popup
  function hidePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
  
    popup.style.display = 'none';
    overlay.style.display = 'none';
  }
  
  // Populate the grid with random colors
  function populateGrid() {
    const grid = document.getElementById('colorGrid');
    grid.innerHTML = ''; // Clear existing blocks
    for (let i = 0; i < 16; i++) {
      const color = getRandomColor();
      const block = document.createElement('div');
      block.className = 'color-block';
      block.style.backgroundColor = color;
      block.textContent = color;
      block.addEventListener('click', () => {
        navigator.clipboard.writeText(color).then(() => {
          showPopup(`Copied ${color} to clipboard!`);
        });
      });
      grid.appendChild(block);
    }
  }
  
  // Add event listener to the refresh button
  document.getElementById('refreshBtn').addEventListener('click', populateGrid);
  
  // Add event listener to the close button of the popup
  document.getElementById('closePopup').addEventListener('click', hidePopup);
  
  // Add event listener to the overlay to hide popup
  document.getElementById('overlay').addEventListener('click', hidePopup);
  
  // Initial population of the grid
  populateGrid();
  
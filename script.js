const imageUpload = document.getElementById('imageUpload');
const clearGalleryBtn = document.getElementById('clearGallery');
const gallery = document.getElementById('gallery');

const STORAGE_KEY = 'savedMemes';

// Load saved images from localStorage on page load
window.addEventListener('load', () => {
  const savedMemes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  savedMemes.forEach(dataUrl => addImageToGallery(dataUrl));
});

// Add new images and save them
imageUpload.addEventListener('change', () => {
  const files = imageUpload.files;
  const savedMemes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      const dataUrl = e.target.result;
      addImageToGallery(dataUrl);
      savedMemes.push(dataUrl);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedMemes));
    };
    reader.readAsDataURL(file);
  });

  imageUpload.value = ''; // Reset input so same files can be selected again
});

// Clear gallery and localStorage
clearGalleryBtn.addEventListener('click', () => {
  gallery.innerHTML = '';
  localStorage.removeItem(STORAGE_KEY);
});

// Helper function to add image element to gallery
function addImageToGallery(dataUrl) {
  const img = document.createElement('img');
  img.src = dataUrl;
  img.alt = 'Meme';
  img.style.width = '250px';
  img.style.height = 'auto';
  img.style.borderRadius = '10px';
  img.style.margin = '10px';
  gallery.appendChild(img);
}

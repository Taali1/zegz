const galleryItems = document.querySelectorAll('.gallery-item');

galleryItem.addEventListener('mouseleave', function() {
    console.log("Mouse left");
    galleryItem.classList.remove('gallery-item');
    galleryItem.classList.add('gallery-item-invert');
});
  
  galleryItem.addEventListener('mouseenter', function() {
    console.log("Mouse entered");
    galleryItem.classList.remove('gallery-item-invert');
    galleryItem.classList.add('gallery-item');
});
  

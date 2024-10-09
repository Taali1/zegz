console.log("start")

// gallery
if (document.getElementById('gallery-block')) {
  console.log('gallery')
  const galleryItems = document.querySelectorAll('.gallery-item');
  console.log(galleryItems)

  galleryItems.forEach(function(galleryItem) {
      galleryItem.addEventListener('mouseleave', function() {
          galleryItem.classList.remove('gallery-item');
          galleryItem.classList.add('gallery-item-invert');
      });

      galleryItem.addEventListener('mouseenter', function() {
          galleryItem.classList.remove('gallery-item-invert');
          galleryItem.classList.add('gallery-item');
      });
  });
}

// index
if (document.getElementById('main-scroll')) {
  console.log("main")
  const sections = document.querySelectorAll('.section');
  console.log(sections)

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
          } else {
              entry.target.classList.remove('in-view');
          }
      });
  }, { threshold: 0.5 });

  sections.forEach(slide => {
      observer.observe(slide);
  });
}

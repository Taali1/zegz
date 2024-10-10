
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

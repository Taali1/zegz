// Wybierz element
const element = document.getElementById('myElement');

// Funkcja zmieniająca klasę na "changed-class" po opuszczeniu kursora
element.addEventListener('mouseleave', function() {
  element.classList.remove('original-class');
  element.classList.add('changed-class');
});

// Funkcja przywracająca oryginalną klasę po ponownym najechaniu kursorem
element.addEventListener('mouseenter', function() {
  element.classList.remove('changed-class');
  element.classList.add('original-class');
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// Search function to filter cards based on search input
function searchTopics() {
  var input = document.getElementById('search-bar').value.toLowerCase();
  var cards = document.getElementsByClassName('card');

  for (var i = 0; i < cards.length; i++) {
    var header = cards[i].getElementsByClassName('card-header')[0];
    var description = cards[i].getElementsByClassName('card-description')[0];

    if (header || description) {
      var headerText = header.textContent || header.innerText;
      var descriptionText = description.textContent || description.innerText;

      if (headerText.toLowerCase().includes(input) || descriptionText.toLowerCase().includes(input)) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
}

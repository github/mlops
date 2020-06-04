function toggle_menu() {
  var t = document.getElementsByClassName("toggle_icon");
  var nav = document.getElementById("navigation");

  if (t[0].classList.contains('hidden')) {
    t[0].classList.remove('hidden');
    t[1].classList.add('hidden');
    t[1].classList.add('hidden');
    nav.classList.add('hidden');
  }
  else {
    t[0].classList.add('hidden');
    t[1].classList.remove('hidden');
    t[1].classList.remove('hidden');
    nav.classList.remove('hidden');
  }
}
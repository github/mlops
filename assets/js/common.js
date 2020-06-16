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

$(".tag_filter").click(function () {
  const filter = '.' + $(this).attr('data-tag');
  if (filter == '.all') {
    $(".content_item").show();
  }
  else {
  $(".content_item").hide();
  $(filter).show();
  };
  $(".tag_filter").removeClass("active");
  $(this).addClass('active');
});

$(".toggle_sub").click(function () {
  $(this).toggleClass('rot45');
  $(this).next('ul').toggleClass('hidden');
});

$(document).ready(function () {
  var sidebar = $(".aside_nav_link");
  var title = $('.doc_title').text();
 console.log(sidebar);
l=sidebar.length;
console.log("leng=" + l);
  for (i=0; i<l; i++) {
    if (sidebar[i].text == title) {
      var parent = sidebar[i].parentElement.parentElement;
      if (parent.classList.contains('sub_menu')) {
        parent.classList.remove("hidden");
        var grandparent = parent.parentElement.parentElement;
        if (grandparent.classList.contains('sub_menu')) {
          grandparent.classList.remove("hidden");
        }
        console.log(sidebar[i].text);
      }
    }
  }
});


function show_toc() {
  $("#content").before('<div id="toc"></div>');
  $("h2,h3,h4,h5,h6").each(function (i, item) {
    var tag = $(item).get(0).localName;
    $(item).attr("id", "wow" + i);
    $("#toc").append('<a class="new' + tag + '" href="#wow' + i + '" style="" title=" '+ $(this).text() +''">' + $(this).text() + '</a>');
    $(".newh2").css("margin-left", 0);
    $(".newh3").css("margin-left", 20);
    $(".newh4").css("margin-left", 40);
    $(".newh5").css("margin-left", 60);
    $(".newh6").css("margin-left", 80);
  });
}

setTimeout('addLoadEvent(show_toc())',3000)
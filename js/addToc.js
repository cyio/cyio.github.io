function show_toc() {
  $("#content").before('<div id="toc" style="background-color: #FFF;border: 1px solid #D8D8D8;border-radius: 3px;padding-left: 0;width: 200px;"></div>');
  $("h2,h3,h4,h5,h6").each(function (i, item) {
    var tag = $(item).get(0).localName;
    $(item).attr("id", "wow" + i);
    $("#toc").append('<a class="new' + tag + '" href="#wow' + i + '" style="position: relative;display: block;padding: 8px 10px 8px 0;text-shadow: 0 1px 0 #FFF;border-bottom: 1px solid #EEE;font-size: 13px;">' + $(this).text() + '</a>');
    $(".newh2").css("margin-left", 0);
    $(".newh3").css("margin-left", 20);
    $(".newh4").css("margin-left", 40);
    $(".newh5").css("margin-left", 60);
    $(".newh6").css("margin-left", 80);
  });
}

setTimeout('addLoadEvent(show_toc())',3000)
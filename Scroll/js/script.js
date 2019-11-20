//$(document).height() if i type this in a document it will give me the height of the document

//$(window).height() height of my window and same thing if typed in a console

//$(window).scrollTop()

$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height(0) >= $(document).height(0)) {
      console.log("i am at the top ")
    }
  });

  //https://nouvelle-techno.fr/ same bar
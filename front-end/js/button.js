$(() => {
  let button_1 = $('.moreless-buton:first');
  let button_2 = $('.moreless-buton:eq(1)');
  let button_3 = $('.moreless-buton:eq(2)');
  let button_4 = $('.moreless-buton:eq(3)');

  let text_1 = $('.moretext:first');
  let text_2 = $('.moretext:eq(1)');
  let text_3 = $('.moretext:eq(2)');
  let text_4 = $('.moretext:eq(3)');

  //These eventhandlers toggles more (hidden) text when they click on 'Read more' button
  $(button_1).click(function (e) { 
    e.preventDefault();
    $(text_1).slideToggle();
    changeText(button_1);
  });

  $(button_2).click(function (e) { 
    e.preventDefault();
    $(text_2).slideToggle();
    changeText(button_2);
  });

  $(button_3).click(function (e) { 
    e.preventDefault();
    $(text_3).slideToggle();
    changeText(button_3);
  });

  $(button_4).click(function (e) { 
    e.preventDefault();
    $(text_4).slideToggle();
    changeText(button_4);
  });

  //This IF ELSE statement ensures that the text of the '.moreless-button' changes interchangeably when clicked on
  let changeText = (button) => {
    if ($(button).text() == "Read more") {
      $(button).html('Read less<span class="read-arrow active"></span>');
    } else {
      $(button).html('Read more<span class="read-arrow"></span>');
    }
  }
})
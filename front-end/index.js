
$(function() {
  const form = $('#contact-form');
  let s_name = $('#name');
  let s_email = $('#email');
  let s_message = $('#message');
  let m_email = 'aylin.ozcan@student.ehb.be';
  let windowWidth = $(window).width();
  let htmlHeight = Math.max($(document).height(), $(window).height());

  //backgroundgradient following mouse position
  $(document).mousemove((e) => {
    mouseXpercentage = Math.round(e.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(e.pageY / htmlHeight * 100);
    
    $('#background').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3560FF, #180022, #180022, #180022)');
  });

  //This function toggles more (hidden) text when the user clicks on "Read more".
  $('.moreless-button:first').click(function (e) { 
    e.preventDefault();
    $('.moretext:first').slideToggle();
    changeText('.moreless-button:first');
  });

  $('.moreless-button:eq(1)').click(function (e) { 
    e.preventDefault();
    $('.moretext:eq(1)').slideToggle();
    changeText('.moreless-button:eq(1)');
  });

  $('.moreless-button:eq(2)').click(function (e) { 
    e.preventDefault();
    $('.moretext:eq(2)').slideToggle();
    changeText('.moreless-button:eq(2)');
  });

  $('.moreless-button:eq(3)').click(function (e) { 
    e.preventDefault();
    $('.moretext:eq(3)').slideToggle();
    changeText('.moreless-button:eq(3)');
  });

  //This IF ELSE statement ensures that the text of the '.moreless-button' changes interchangeably when clicked on.
  let changeText = (button) => {
    if ($(button).text() == "Read more") {
      $(button).html('Read less<span class="read-arrow active"></span>');
    } else {
      $(button).html('Read more<span class="read-arrow"></span>');
    }
  }


  //Form
  $(form).submit((e) => { 
    e.preventDefault();
    Email.send({
      SecureToken: '0fa1f96e-fb0b-4072-a9b1-84a50dcdd163',
      To: `${m_email}`,
      From: `${s_email.val()}`,
      Subject: `${s_name.val()} sended you a message from Visionixa website`,
      Body: `${s_message.val()}`,
    })
    .then(function (message) {
      alert("message sent successfully!");
      s_name.val('');
      s_email.val('');
      s_message.val('');
    });
  });
});
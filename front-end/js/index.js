"use strict";
$(() => {
  const form = $('#contact-form');
  let s_name = $('#name').val(); //Senders name
  let s_email = $('#email').val();  //Senders email
  let s_message = $('#message').val(); //Senders message

  //Form
  $(form).submit((e) => {
    e.preventDefault();

    //Gather information from the contact form into an object
    let formData = {
      s_name,
      s_email,
      s_message
    }

    //Send object to the backend
    postData(formData);
  })
  .then(() => {
    alert("message sent successfully!");
    s_name.val('');
    s_email.val('');
    s_message.val('');
  });

  let postData = (data) => {
    fetch('/send', {
      method: 'POST',
      body: data
    })
    .then((response) => {
      return response.json();
    });
  };
});
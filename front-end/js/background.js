//Background animation; gradient following the mouse position
$(() => {
  let windowWidth = $(window).width();
  let htmlHeight = Math.max($(document).height(), $(window).height());

  $(document).mousemove((e) => {
    mouseXpercentage = Math.round(e.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(e.pageY / htmlHeight * 100);
    
    //Adding the radial-gradient that will follow the mouse
    $('#background').css('background', 'radial-gradient(circle at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3560FF -5%, transparent 400px), radial-gradient(farthest-corner at bottom left, #3560FF -20%, transparent 600px), radial-gradient(farthest-corner at top right, #AE00FB -20%, transparent 600px)');
  });
});
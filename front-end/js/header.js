//Header animation; hide when scrolled down and show when scrolled up
$(() => {
  let scrolled;
  let lastScrollTop = 0;
  let delta = 5;
  let headerHeight = $('header').outerHeight();

  $(window).scroll(() => { 
    scrolled = true;
  });

  setInterval(() => {
    if(scrolled){
      hasScrolled();
      scrolled = false;
    }
  }, 250);

  let hasScrolled = () => {
    let st = $(this).scrollTop();

    //Make sure they scroll more than the value 'delta'
    if(Math.abs(lastScrollTop - st) <= delta){
      return;
    }
    
    //If they scrolled down and are past the headers height, add class .nav-up -> it is necessary so that they never see what's "behind" the header
    if (st > lastScrollTop && st > headerHeight) {
      //Scroll down
      $('header').removeClass('header-down').addClass('header-up');
      } else {
        //Scroll up
        if(st + $(window).height() < $(document).height()){
        $('header').removeClass('header-up').addClass('header-down');
        }
      }
      lastScrollTop = st;
  }
});

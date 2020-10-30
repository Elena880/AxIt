$(function(){
const tabParent = $ ('.tabs-block');
 tabParent.on('click', '.tabs > div', function(){
     if(!$(this).hasClass('--active')) {
        tabParent
        .find('.tabs > .--active, .content_tabs .--active')
        .removeClass('--active');
        
      $(this)
        .addClass('--active');
      
      tabParent
        .find('.content_tabs > div')
        .eq($(this).index())
        .addClass('--active');
     }});
    $('.header__btn-menu').on('click', function(){
      $('.menu ul').slideToggle();
    });

  });
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


$(function(){
	
  $('body').running();
 
 $(window).bind("scroll",function(){ 
   var top=$(window).scrollTop();
   
   $('.content-4').each(function(){
     if ($(this).offset().top -top< $(window).height() - 400){
       $('.content-4').removeClass('selected');
       $(this).addClass('selected');
     };							   
   })
 });  
})

// $(window).scroll(function() {
//   $( ".layout__footer" ).css( "display", "block" );
//   // $( ".layout__footer" ).css( "display", "block" ).fadeOut( "slow" );
// });

// function scroll( fn ) {
//   var beforeScrollTop = document.body.scrollTop,
//       fn = fn || function() {};
//   window.addEventListener("scroll", function() {
//       var afterScrollTop = document.body.scrollTop,
//           delta = afterScrollTop - beforeScrollTop;
//       if( delta === 0 ) return false;
//       fn( delta > 0 ? "down" : "up" );
//       beforeScrollTop = afterScrollTop;
//   }, false);
// }
$(function() {
  //使用on监听滚轮事件
  $('body').on('mousewheel', function(event) {
      //输出滚轮事件响应结果
      // console.log(event.deltaX, event.deltaY, event.deltaFactor);
      //上下滚动时让鼠标垂直移动
      var newTop = $(this).position().top - event.deltaY;
      var newLeft = $(this).position().left + event.deltaX;

      doSomething({
        vertical: newTop, 
        horizon: newLeft
      })
  });

  function doSomething(result) {
    console.log(result)
    if (result.vertical < 10) {
      $(".layout__footer").removeClass('active');
      
    }
    if (result.vertical > 0){
      $(".layout__footer").addClass('active');
    }
  }

});


$(function(){
	// 幫 a.abgne_gotoheader 加上 click 事件
	$('.gotoheader').click(function(){
		// 讓捲軸移動到 0 的位置
		$('html, body').scrollTop(0);
 
		return false;
	});
});


window.onload = function() { 
  $(".load").fadeOut(3000);
};
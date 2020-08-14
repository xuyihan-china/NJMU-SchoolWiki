$(function(){
    zoom = $('.feature').css('background-size') 
    zoom = parseFloat(zoom)/100
    size = zoom * $('.feature').width()*2.5;
    
    $(window).on('scroll', function(){
      var fromTop = $(window).scrollTop();
      console.log(fromTop)
     
      newSize = size - (fromTop/6);
      
      if (newSize > $('.feature').width() && fromTop !== 0) {
          $('.feature').css({
              'transition':1.2+'s',
              '-webkit-background-size': newSize,
              '-moz-background-size': newSize,
              '-o-background-size': newSize,
              'background-size': newSize,
              '-webkit-filter':'blur('+ 0 + (fromTop/400) + 'px)',
              'opacity': 1 - ((fromTop / $('html').height()) * 1.3)
          });
      }
      if(fromTop == 0){
        $('.feature').css({
            'transition':1.2+'s',
            '-webkit-background-size': '100%',
            '-moz-background-size':    '100%',
            '-o-background-size':      '100%',
            'background-size':         '100%',
        });
        console.log('11')
      }
    });
});

$(function (){
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

    if (isChrome || isSafari) {
    } else {
        $('.feature').append('<div class="opaque"></div>');
        $(window).on('scroll', function(){
            var opacity = 0 + ($(window).scrollTop()/5000);
            $('.opaque').css('opacity', opacity);
        });
    }
});
let observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('animate')
            observer.unobserve(entry.target)
        }
    })
})
document.querySelectorAll('mark').forEach((mark)=>{
    observer.observe(mark)
})
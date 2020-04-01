$("#data>tbody>tr:odd").attr('class','odd')

$(function () {
    var index = 0;
    var $contents = $('.tanb>div');
    $(".min>div").click(function () {
    var btnText =$(this).html();
    var clickIndex = $(this).index()
   if (clickIndex != index) {
        $contents[index].style.display = 'none';
        $contents[clickIndex].style.display = 'block';
        //$(this).style.color = '#10346a';
        $('.min>div')[clickIndex].style.background='#10346a';
        $('.min>div')[clickIndex].style.color='white';
        $('.min>div')[index].style.color='#10346a';
        $('.min>div')[index].style.background='white';
        index = clickIndex;
        $('#p').empty();
        $('#p').append(btnText);
        $('title').empty();
        $('title').append(btnText);			
    }
  })
})
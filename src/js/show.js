$(function(){
    $('.carousel-item').eq(0).addClass('active');//对第一个元素加active
    //获取总共有多少个元素1并且设置第一个元素为开始
    var total = $('.carousel-item').length;
    var current = 0;
    // 对按钮的鼠标点击事件
    $('#moveRight').on('click', function(){
    var next=current;
    current= current+1;
    setSlide(next, current);
    });

    $('#moveLeft').on('click', function(){
    var prev=current;
    current = current - 1;
    setSlide(prev, current);
    });

    $(document).on('keydown',function(e){
        var key = e.which;
        if(key == 39)
        {
            var next=current;
            current= current+1;
            setSlide(next, current);
        }
    })

    $(document).on('keydown',function(e){
        var key = e.which;
        if(key == 37)
        {
            var prev=current;
            current = current - 1;
            setSlide(prev, current);
        }
    })

    function setSlide(Lasttime, CurrentAfterTranslate){
    var slide= current; 
    if(CurrentAfterTranslate>total-1){
        slide=0;
        current=0;
    }
    if(CurrentAfterTranslate<0){
        slide=total - 1;
        current=total - 1;
    }
    //这里的Lasttime记录上一次的状态 CurrentAfterTranslate 记录点击以后的current状态
    $('.carousel-item').eq(Lasttime).removeClass('active');
    $('.carousel-item').eq(slide).addClass('active');
        setTimeout(function(){
        },800);
    }
});
window.onload = function(){
    let bgLayer = document.getElementsByClassName('move_container'),
        container = document.querySelector('.movingBg');

//    Прошлись по элементам-слоям и вынесли из атрибута data их фон с css
    for (i = 0; i < bgLayer.length; i++) {
        bgLayer[i].style.cssText = "background:url(" + bgLayer[i].getAttribute('data-img') + ") no-repeat ;";
    };
    
    container.addEventListener('mousemove',function(e){
        let pageX = e.clientX,
            pageY = e.clientY;
        
        
        bgLayer[0].style.wabkitTransform = 'translateX(' + pageX/100 + '%) translateY(' + pageY/100 + '%)';
        bgLayer[0].style.transform = 'translateX(' + pageX/100 + '%) translateY(' + pageY/100 + '%)';
        
        bgLayer[1].style.wabkitTransform = 'translateX(' + pageX/150 + '%) translateY(' + pageY/250 + '%)';
        bgLayer[1].style.transform = 'translateX(' + pageX/150 + '%) translateY(' + pageY/250 + '%)';
        
        slowEnd();
    });
    
    function slowEnd(){
       
    }
    
}



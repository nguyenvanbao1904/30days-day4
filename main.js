var images = document.querySelectorAll('.image')
var close = document.querySelector('.close-icon')
var controlRight = document.querySelector('.control-right')
var controlLeft = document.querySelector('.control-left')
var view = document.querySelector('.view')
var imgSrc = document.querySelector('.view-body img')

var imgIndex = 0

images.forEach(function(img,index){
    img.addEventListener('click',function(){
        imgIndex=index+1;
        show()
    })
})
if(imgIndex===8){
    controlRight.className='hiden'
}
var check = function(){
    
}
var show = function(){
    view.className='view show'
    imgSrc.src = 'img'+imgIndex+'.jpeg'
    if(imgIndex===8){
        controlRight.classList.add('hiden')
    } else{
        controlRight.classList.remove('hiden')
    }
    if(imgIndex===1){
        controlLeft.classList.add('hiden')
    } else{
        controlLeft.classList.remove('hiden')
    }
}
close.addEventListener('click',function(){
    view.classList.remove('show')
})
controlRight.addEventListener('click',function(){
    imgIndex++
    show()
})
controlLeft.addEventListener('click',function(){
    imgIndex--
    show()
})
document.addEventListener('keydown',function(e){
    switch(e.which){
        case 27:
            view.classList.remove('show')
            break
    }
})
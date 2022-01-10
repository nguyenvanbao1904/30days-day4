var images = document.querySelectorAll('.image')
var close = document.querySelector('.close-icon')
var controlRight = document.querySelector('.control-right')
var controlLeft = document.querySelector('.control-left')
var view = document.querySelector('.view')
var imgSrc = document.querySelector('.view-body img')
var input = document.querySelector('.hello')

var imgIndex = 0

images.forEach(function(img,index){
    img.addEventListener('click',function(){
        imgIndex=index+1;
        show()
    })
})

var imgLoop = function(){
    if(imgIndex===images.length){
        imgIndex=1
        imgSrc.src = 'img'+imgIndex+'.jpeg'
    } else if(imgIndex===1){
        imgIndex=images.length
        imgSrc.src = 'img'+imgIndex+'.jpeg'
    }
}

var nextByKeyBoard = function(){
    input.addEventListener('keydown',function(e){
        switch(e.which){
            case 39:
                if(imgIndex === images.length){
                    imgLoop()
                } else{
                    imgIndex++
                    imgSrc.src = 'img'+imgIndex+'.jpeg'
                }
                break;
            case 37:
                if(imgIndex ===1){
                    imgLoop()
                } else{
                    imgIndex--
                    imgSrc.src = 'img'+imgIndex+'.jpeg'
                }
                break;
            case 27:
                view.classList.remove('show')
                break;
        }
    })
}

var show = function(){
    view.className='view show'
    imgSrc.src = 'img'+imgIndex+'.jpeg'
    input.focus()
}
nextByKeyBoard()

close.addEventListener('click',function(){
    view.classList.remove('show')
})

controlRight.addEventListener('click',function(){
    if(imgIndex === images.length){
        imgLoop()
    } else{ 
        imgIndex++
        show()
    }
})
controlLeft.addEventListener('click',function(){
    if(imgIndex === 1){
        imgLoop()
    } else{ 
        imgIndex--
        show()
    }
})

view.addEventListener('click',function(e){
    if(e.currentTarget==e.target){
        view.classList.remove('show')
    }
})

imgSrc.addEventListener('click',function(){
    input.focus()
})
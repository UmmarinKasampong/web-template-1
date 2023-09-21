let slideindex = 1;

changeslide(slideindex);


function SlideImg(n){
    changeslide(slideindex += n)
}

function changeslide(n) {
    let slideImg = document.getElementsByClassName("banner-slides");
    // console.log(slideImg)
    if(n < 1) {
        slideindex = slideImg.length;
    }
    else if(n > slideImg.length){
        slideindex = 1;
    }
    for(let i = 0 ; i < slideImg.length ; i++) {
        slideImg[i].style.display = "none";
    } 

    slideImg[slideindex-1].style.display = "block";
}
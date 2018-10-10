
let aH3=document.querySelectorAll("#main .supermarket-left-list h3"),
    aLi=document.querySelectorAll("#main .supermarket-left-list li");
let aImgLis = document.querySelectorAll("#main .imageslist li"),
    aBtnLis = document.querySelectorAll("#main .btnlist li"),
    oBg=document.getElementsByClassName("main-nav-bg")
    ;
let len = aImgLis.length,
    aBgCol=[
        "#e8e8e8",
        "#43a2f8",
        "#d0fcff",
        "#ee4123",
        "#4468ce",
        "#000"
    ];
let index = 0;
/*****#main .supermarket-left-list h3 ******/
aH3[0].onmouseenter=function(){
    aH3[1].className="";
    aH3[0].className="active";
    aLi[1].className="";
    aLi[0].className="show";
}
aH3[1].onmouseenter=function(){
    aH3[0].className="";
    aH3[1].className="active";
    aLi[0].className="";
    aLi[1].className="show";
}
/*****#main .imageslist li ******/


function f(x) {
    aBtnLis[index].className = "";
    aImgLis[index].className = "";
    oBg[0].style.backgroundColor=aBgCol[index];
    index = x;
    aBtnLis[index].className = "active";
    aImgLis[index].className = "show";
    oBg[0].style.backgroundColor=aBgCol[index];
}

for (let i = 0; i < len; i++) {
    aBtnLis[i].onmouseover = function () {
        if (i === index) return;
        f(i)
    }
}



















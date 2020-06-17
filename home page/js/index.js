/*
******顶部搜索框显示
*/

function stopPropagation(e) {
    var ev = e || window.event;
    if (ev.stopPropagation) {
       ev.stopPropagation();
    }else if (window.event) {
        window.event.cancelBubble = true;//兼容IE
     }
}
//第一部分搜索
$(".nav-logo-sou").click(function (e) {
    $(".nav-sousuo").show();
    stopPropagation(e);
});
$(document).bind('click', function () {
     $(".nav-sousuo").hide();
});
$(".nav-sousuo").click(function (e) {
    stopPropagation(e);
});

//第二部分搜索
$("#sou2-show").click(function (e) {
        $(".sou2").show();
        $(this).css("color","black");
        stopPropagation(e);
    });
    $(document).bind('click', function () {
         $("#sou2-show").css("color","white");
         $(".sou2").hide();
    });
    $("#sou2-show").click(function (e) {
        stopPropagation(e);
    });

/*
*******第二部分微信显示隐藏
*/
$("#weixin2-show").on("mouseover",function(){
     $(".weixin2").show();
});
$("#weixin2-show").on("mouseout",function(){
    $(".weixin2").hide();
});

/*
******顶部导航栏
*/ 
var topNav = document.querySelector(".nav");

//滚动条的监听事件
window.addEventListener('scroll', function(){

    let hei = document.documentElement.scrollTop;
    let winWidth = $(window).width();
    let barHide  = $(".bar-hide");
    let Y= $(topNav).offset().top - $(window).scrollTop();

    if(hei>100){
        topNav.classList.add("nav1");

        //当窗口小于1200时 隐藏的导航布局
        if(winWidth < 1200 && winWidth> 768){
            
            //barHide.style.top = "60px";
            barHide.css("top","50px");

        }

    }else{
        topNav.classList.remove("nav1");
        
        if(winWidth < 1200 && winWidth> 768){
            
            barHide.css("top",Y+50);

        }
    }

});
// 刷新页面的导航



/*
****导航显示和隐藏添加效果
*/


/*
****数字增长 //conter-two
*/

jQuery(function($) {   

   var timer;
   timer = false;

   function time(){

    $(".time").countTo({
        lastSymbol: "", //显示在最后的字符
        from: 0, // 开始时的数字
        speed: 2000, // 总时间
        refreshInterval: 100, // 刷新一次的时间
        beforeSize: 0, //小数点前最小显示位数，不足的话用0代替 
        decimals: 2, // 小数点后的位数，小数做四舍五入
        onUpdate: function() {}, // 更新时回调函数
        onComplete: function() {
            for (i in arguments) {
                //console.log(arguments[i]);
            }
        }
    });  

    $(".time2").countTo({
        lastSymbol: "", //显示在最后的字符
        from: 0, // 开始时的数字
        speed: 2000, // 总时间
        refreshInterval: 100, // 刷新一次的时间
        beforeSize: 0, //小数点前最小显示位数，不足的话用0代替 
        decimals: 0, // 小数点后的位数，小数做四舍五入
        onUpdate: function() {}, // 更新时回调函数
        onComplete: function() {
            for (i in arguments) {
                //console.log(arguments[i]);
            }
        }
    });

    $(".time3").countTo({
        lastSymbol: "", //显示在最后的字符
        from: 0, // 开始时的数字
        speed: 2000, // 总时间
        refreshInterval: 100, // 刷新一次的时间
        beforeSize: 0, //小数点前最小显示位数，不足的话用0代替 
        decimals: 1, // 小数点后的位数，小数做四舍五入
        onUpdate: function() {}, // 更新时回调函数
        onComplete: function() {
            for (i in arguments) {
                //console.log(arguments[i]);
            }
        }
    });

}

/*滚动事件 加载数字*/ 
$(document).ready(function () {
     
    var a = $("#ee").offset().top;
    if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) {
        time();
        timer = true;
    }else{
        $(window).scroll(function () {
            if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) {

                if( timer == false){
                    time();
                   return timer =true;
                }

            }
        });
    }

});

});
////////////////////////////


/**
 *  窗口小于768  点击菜单显示 ，点击差 隐藏菜单栏
 *  */ 
//显示
$("#nav2-show").on("click",function(){
     $(".nav2").show();
});
//隐藏
$("#nav2-hide").on("click",function(){
    $(".nav2").hide();
});
//////////////////////////

/*第一个轮播图*/ 
    
    var imgBox = document.querySelectorAll(".lunbo-warp"); //每个图片盒子
    var pageBtns = document.querySelectorAll(".page li"); //下面按钮
    var loopbox = document.querySelector(".conter-one");//最大盒子
    var box = document.querySelector(".lunbo-box");//装所有图片盒子的盒子

    var boxWidth = loopbox.offsetWidth;  //最大盒子宽度
    var boxCount = imgBox.length   //图片盒子数量
    box.style.width = boxWidth * boxCount + "px"; // 所有图片盒子相加的宽度
    
    //初始化每个图片盒子的宽
   for(let i = 0; i < boxCount; i++ ){
       imgBox[i].style.width = boxWidth + "px";
   }
   
    //初始化
     var index = 0;
     pageBtns[index].classList.add("index");
    
   //下面按钮点击
   for (let i = 0; i <  pageBtns.length; i++) {
       pageBtns[i].onclick = function(){
           goIndex(i);
       }
       
   }
        function goIndex(index) {
            
           box.style.marginLeft = -1 * boxWidth * index + "px";
           for (let i = 0; i < imgBox.length; i++) {
               pageBtns[i].classList.remove("index");
           }
           pageBtns[index].classList.add("index");
}

/*
******  遮罩层
*/

$(function(){
    $('.black').click(function(){
        $('.bg').css({'display':'block'});
        $('.content').css({'display':'block'});
    });
    $('.x').click(function(){
        $('.bg').css({'display':'none'});
        $('.content').css({'display':'none'});
    });
});


/*
******* 内容第三部分轮播图
*/
var imgBox1 = document.querySelectorAll(".lunbo1-warp"); //每个图片盒子
var btnLeft = document.querySelector(".btn-left"); //左按钮
var btnRight = document.querySelector(".btn-right"); //右按钮

var loopbox1 = document.querySelector(".conter-three-lunbo");//最大盒子
var box1 = document.querySelector(".lunbo1-box");//装所有图片盒子的盒子

var boxWidth1 = loopbox1.offsetWidth;  //最大盒子宽度
var boxCount1 = imgBox1.length   //图片盒子数量
box1.style.width = boxWidth1 * boxCount1 + "px"; // 所有图片盒子相加的宽度


//初始化每个图片盒子的宽
for(let i = 0; i < boxCount1; i++ ){
   imgBox1[i].style.width = boxWidth1 + "px";
   
}

//初始化
//imgBox[0].style.display = "block";
 var index1 = 0;

//设置点击事件
// 右按钮绑定点击事件
btnRight.onclick = function () {

   // 把索引指到下一张图
   index1++;

   // 处理下标越界
   if (index1 >= boxCount1) {
       index1 = 0;
   }

   // 操作视图
   goIndex1(index1);

}
btnLeft.onclick = function () {

   // 把索引指到下一张图
   index1--;

   // 处理下标越界
   if (index1 < 0) {
       index1 = boxCount1-1;
   }

   // 操作视图
   goIndex1(index1);

}
    function goIndex1(index1) {

       box1.style.marginLeft = -1 * boxWidth1 * index1 + "px";
}

/*
****** 动画
*/
/*滚动事件 加载动画*/ ///////////////

$(document).ready(function () {
    var b;
    b= false;
     
    var a = $("#title").offset().top;
    if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) {
        
        if(b == false){
            
            $("#title").css({
                "top":"400px"
            });
            $("#title").animate({
                "position":"absolute",
                "top":"0",
            },"slow") ;
        }
        b= true;

    }else{
        $(window).scroll(function () {
            if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) {

                if(b == false){
                   
                   
                    $("#title").css({
                        "top":"400px"
                    });
                    $("#title").animate({
                        "position":"absolute",
                        "top":"0",
                    },"slow") ;

                }
                return b = true;

            }
        });
    }

});

/*
****** 动画 只对图片////////////////////
*/
$(function () { 

    var b1;
    b1= false;
     
    var a1 = $("#ooo").offset().top;
    if (a1 >= $(window).scrollTop() && a1 < ($(window).scrollTop() + $(window).height())) {
        
        if(b1 == false){
            
            $("#ooo").css({
                "top":"400px"
            });
            $("#ooo").animate({
                "position":"absolute",
                "top":"0",
            },"slow") ;
        }
        b1= true;

    }else{
        $(window).scroll(function () {
            if (a1 >= $(window).scrollTop() && a1 < ($(window).scrollTop() + $(window).height())) {

                if(b1 == false){
                   
                   
                    $("#ooo").css({
                        "top":"400px"
                    });
                    $("#ooo").animate({
                        "position":"absolute",
                        "top":"0",
                    },"slow") ;

                }
                return b1 = true;

            }
        });
    }

});

/*内容第五部分效果*/ /////////////
$(function () { 

    function oal(box){

    var b2;
    b2= false;
     
    var a2 = $(box).parent().offset().top;
    if (a2 >= $(window).scrollTop() && a2 < ($(window).scrollTop() + $(window).height())) {
        
        if(b2 == false){
            
            $(box).css({
                "top":"400px"
            });
            $(box).animate({
                "position":"absolute",
                "top":"0",
            },"slow") ;
        }
        b2= true;

    }else{
        $(window).scroll(function () {
            if (a2 >= $(window).scrollTop() && a2 < ($(window).scrollTop() + $(window).height())) {

                if(b2 == false){
                   
                   
                    $(box).css({
                        "top":"400px"
                    });
                    $(box).animate({
                        "position":"absolute",
                        "top":"0",
                    },"slow") ;

                }
                return b2 = true;

            }
        });
    }
    
}
oal(".conter-five-right3");
oal(".conter-five-right2");
oal(".conter-five-right1");

});

///////////////////////
$(function () { 

    function ord(box){

   
    var b3;
    b3= false;
     
    var a3 = $(box).parent().offset().top;
    if (a3 >= $(window).scrollTop() && a3 < ($(window).scrollTop() + $(window).height())) {
        
        if(b3 == false){
            
            $(box).css({
                "left":"-30%"
            });
            $(box).animate({
                "position":"absolute",
                "left":"5%",
            },"slow") ;
        }
        b3= true;

    }else{
        $(window).scroll(function () {
            if (a3 >= $(window).scrollTop() && a3 < ($(window).scrollTop() + $(window).height())) {

                if(b3 == false){
                   
                   
                    $(box).css({
                        "left":"-30%"
                    });
                    $(box).animate({
                        "position":"absolute",
                        "left":"5%",
                    },"slow") ;

                }
                return b3 = true;

            }
        });
    }
    
}


ord(".conter-five-left1");
ord(".conter-five-left2");
ord(".conter-five-left3");
});

////////////

$(function () { 

    function ol(box,box1){
  
    var b3;
    b3= false;
     
    var a3 = $(box).parent().offset().top;
    if (a3 >= $(window).scrollTop() && a3 < ($(window).scrollTop() + $(window).height())) {
        
        if(b3 == false){
            
            $(box).css({
                "top":"100%"
            });
            $(box).animate({
                "position":"absolute",
                "top":"0",
            },"slow") ;

            $(box1).css({
                "right":"50%"
            });
            $(box1).animate({
                "position":"absolute",
                "right":"5%",
            },"slow") ;

        }
        b3= true;

    }else{
        $(window).scroll(function () {
            if (a3 >= $(window).scrollTop() && a3 < ($(window).scrollTop() + $(window).height())) {

                if(b3 == false){
                   
                   
                    $(box).css({
                        "top":"100%"
                    });
                    $(box).animate({
                        "position":"absolute",
                        "top":"0",
                    },"slow") ;

                    $(box1).css({
                        "right":"50%"
                    });
                    $(box1).animate({
                        "position":"absolute",
                        "right":"5%",
                    },"slow") ;

                }
                return b3 = true;

            }
        });
    }
    
}

ol(".footer-one-left",".footer-one-right");
});


///////////////////////
$(function () { 

    function lunbos(box){

   
    var b3;
    b3= false;
     
    var a3 = $(box).parent().offset().top;
    if (a3 >= $(window).scrollTop() && a3 < ($(window).scrollTop() + $(window).height())) {
        
        if(b3 == false){
            
            $(box).css({
                "top":"570px"
            });
            $(box).animate({
                "position" : "relative",
                "top":"0",
            },"slow") ;

        }
        b3= true;

    }else{
        $(window).scroll(function () {
            if (a3 >= $(window).scrollTop() && a3 < ($(window).scrollTop() + $(window).height())) {

                if(b3 == false){
                   
                   
                   $(box).css({
                       "top":"570px"
                   });
                   $(box).animate({
                       "position" : "relative",
                       "top":"0",
                   },"slow") ;
  
              }
                return b3 = true;

            }
        });
    }
    
}

lunbos(".lunbo1-box");

});

///////////////////////
$(function () { 

    function lunbos1(box,box1){

   
    var b3;
    b3= false;
     
    var a3 = $(box).parent().offset().top;
    if (a3 >= $(window).scrollTop() && a3 < ($(window).scrollTop() + $(window).height())) {
        
        if(b3 == false){
            
            $(box).css({
                "top":"570px"
            });
            $(box).animate({
                "position" : "absolute",
                "top":"0",
            },"fast") ;

            $(box1).css({
                "top":"570px"
            });
            $(box1).animate({
                "position" : "absolute",
                "top":"0",
            },"fast") ;

        }
        b3= true;

    }else{
        $(window).scroll(function () {
            if (a3 >= $(window).scrollTop() && a3 < ($(window).scrollTop() + $(window).height())) {

                if(b3 == false){
                   
                   
                   $(box).css({
                       "top":"570px"
                   });
                   $(box).animate({
                       "position" : "absolute",
                       "top":"0",
                   },"fast") ;

                   $(box1).css({
                    "top":"570px"
                });
                $(box1).animate({
                    "position" : "absolute",
                    "top":"0",
                },"fast") ;
  
              }
                return b3 = true;

            }
        });
    }
    
}

lunbos1(".btn-left",".btn-right");

});


///////////////////////
$(function () { 

    function lis(box){

   
    var b3;
    b3= false;
     
    var a3 = $(box).parent().offset().top;
    if (a3 >= $(window).scrollTop() && a3 < ($(window).scrollTop() + $(window).height())) {
        
        if(b3 == false){
            
            $(box).css({
                "left":"-100%"
            });
            $(box).animate({
                "position" : "relative",
                "left":"0",
            },1000) ;

        }
        b3= true;

    }else{
        $(window).scroll(function () {
            if (a3 >= $(window).scrollTop() && a3 < ($(window).scrollTop() + $(window).height())) {

                if(b3 == false){
                   
                   
                   $(box).css({
                       "left":"-100%"
                   });
                   $(box).animate({
                       "position" : "relative",
                       "left":"0",
                   },1000) ;
  
              }
                return b3 = true;

            }
        });
    }
    
}

lis(".lis1");
lis(".lis2");
lis(".lis3");
lis(".lis4");
});
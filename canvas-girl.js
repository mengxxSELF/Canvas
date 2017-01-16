/* girl */

// 角色跑步 1 原地跑 2 加入横向跑


~function () {
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');

    var index=0;

    var img =new Image();
    img.src='girl.png';

    img.onload = function () {
        timer =setInterval(run,160);
    };

    ctx.x=0;
    var canvasWidth= canvas.width;

    // 开启定时器 角色原地跑
    function run() {
        ++index;
        ctx.x+=30;
        ctx.clearRect(0,0,canvas.width,canvas.height); // 清除画布
        //ctx.drawImage(img,96*(index%4),96*2,96,96,10,10,96*2,96*2); //角色原地跑
        ctx.drawImage(img,96*(index%4),96*2,96,96,ctx.x,50,96*2,96*2); //加入横向跑


        // 判断是否达到边缘
        if(ctx.x>= canvasWidth-150){
            ctx.x=10;
        };
    };

}();

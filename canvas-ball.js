/* ball 球 */
// 鼠标划过 泡泡出现 随机消失

~function (){
    var can = document.querySelector('#canvas');
    var ctx= can.getContext('2d');

    ctx.ary=[];// 保存数组 存入实例
    function Ball(opt){
        this.r=30;
        this.x=opt.x;
        this.y=opt.y;
        this.cX= this.cY= Math.random()*10-5; // -5  5
        ctx.ary.push(this);
    };
    Ball.prototype={
        update:function(){
            this.r--;
            this.x+=this.cX;
            this.y+=this.cY;
            return this;
        },
        render: function () {
            if(this.r<=0) {

                return;
            }; //半径变小于0时  不再变化

            ctx.beginPath();
            ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
            ctx.fillStyle='#f1f1f1';
            ctx.fill();
        }
    };


    //var ball = new Ball({x:60,y:200});
    // 开启定时器 小球变小
    timer=setInterval( balling ,30);
    function balling(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for(var i=0;i<ctx.ary.length;i++){
            ctx.ary[i].update().render();
        }
    };

    // 鼠标划过 产生新实例
    canvas.onmousemove= function (e) {
        new Ball({x:e.clientX,y:e.clientY});
    };

}();





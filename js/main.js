(function(){   //or $(window).load(function(){
	var $canvas = $('#canvas')
	,	ctx  = document.getElementById('canvas').getContext('2d')
    ,   $tally = document.getElementById("score")
    ,   $winner = $('#winner')
	,   img  = new Image()
	,	img2 = new Image() // Create new img element
    ,   img3 = new Image() // goose sprite
    ,   crosshair = new Image()
    ,   shell = new Image()
	,	xHair  	//crosshair position
	,	yHair
	,	xGPos	//gun position
	,	yGPos
	,	difx
	,	dify
	,	rotation //gun rotation 
    ,   canvasWidth = 600
    ,   offset      = 50
    ,   count       = 0
    ;       
   




	    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame|| 
        window.webkitRequestAnimationFrame  || 
        window.mozRequestAnimationFrame     || 
        window.oRequestAnimationFrame       || 
        window.msRequestAnimationFrame      || 
        function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
        };
    })();


	img.src  = 'img/Duck-Hunt.jpg'; // Set source path
	img2.src = 'img/rifle.png';
    img3.src = 'img/gooseSprite.png';
    shell.src = 'img/ammunition2.png';
    crosshair.src = 'img/crosshair.png';


	$canvas.mousemove(function(e){
		xHair=e.pageX;
		yHair=e.pageY;

		//gun position
		xGPos    = xHair/4+280;
		yGPos    = yHair/4+200;
		difx     = xHair-(235+xGPos);
		dify     = yHair -(230+ yGPos); 
		radians  = Math.atan2(dify,difx);
		//rotation = radians+2.36; //rotation in radians
        rotation = (((radians*180)/Math.PI)+135); //rotation in degrees
        //console.log(rotation);
	});

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<    ||     //=\\   //=\\    //=\\     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<    ||    ||   || ||   ||  ||   ||    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<    ||    ||   || ||   ||  ||==//     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     ====  \\=//   \\=//   ||         >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//


            //loop that call the request animFrame and all the loop functions
            (function duckHunt() {
                ctx.clearRect(0,0,600,360);
                draw(ctx, xGPos, yGPos, difx, dify, rotation);
                crosshairs(ctx, xHair, yHair);
                //drawGeese(ctx);
                //audioTrigger();
                requestAnimFrame(duckHunt);       //<<<<<recursive - calls itself
            })();                               //<<<<<self initialising loop
        

    


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


           ///////////       //////////       ////////    //                  ///
           ///     /////     ///     ///     ///    ///    ///                ///  
           ///        ///    ///     ///     ///    ///     ///             ///
           ///        ///    /////////       //////////      ///     //    ///
           ///        ///    ///    ///      ///    ///       ///  ////  ///
           ////////////      ///     ///     ///    ///        ///// /////
           /////////         ///      ///    ///    ///         ///  ///

    function draw(ctx, xGPos, yGPos, difx, dify, rotation) {
        

                // gun/Linked File
        ctx.save();
        ctx.translate( 235+xGPos, 230+yGPos);
        //console.log(rotation);
        ctx.rotate(rotation);
        ctx.translate( -235-xGPos, -230-yGPos);
        ctx.drawImage(img2, xGPos, yGPos);
        ctx.restore();
    };

  	function crosshairs(ctx, xHair, yHair){
        ctx.save();
        ctx.drawImage(crosshair, xHair-45, yHair-35);
        ctx.restore();
    }

   



})();
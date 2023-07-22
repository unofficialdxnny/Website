function changeIframeContent() {
    const iframeContainer = document.getElementById("iframeContainer");
    const newIframe = document.createElement("iframe");
    newIframe.srcdoc = `
      <html>
      <head>
        
        <style>
        /*BEGIN PS4 Controller Styling*/
        .controller.ds4 {
            background: url(miles_morales_base_white.png);
            height: 700px;
            width: 1200px;
            /*    margin-left: -403px;
                margin-top: -280px;*/
        }
        
        .ds4.disconnected div {
            /* display: none; */
            background: url(disconnected.gif);
        }
        
        .ds4 .triggers {
            width: 598px;
            height: 90px;
            position: absolute;
            left: 299px;
            top: 38px;
        }
        
        .ds4 .trigger {
            width: 99px;
            height: 100%;
            background: url(Trigger_Pressed.png);
            opacity: 0;
        }
        
        .ds4 .trigger.left {
            float: left;
        }
        
        .ds4 .trigger.right {
            float: right;
            background-position-x: 99px;
        }
        
        .ds4 .bumper {
            width: 200px;
            height: 45px;
            background: url(Bumper.png) no-repeat;
            opacity: 0;
        }
        
        .ds4 .bumpers {
            position: absolute;
            width: 672px;
            height: 23px;
            left: 263px;
            top: 132px;
        }
        
        .ds4 .bumper.pressed {
            opacity: 0.8;
        }
        
        .ds4 .bumper.left {
            /* -webkit-transform: rotateY(180deg); */
            /* transform: rotateY(180deg); */
            float: left;
        }
        
        .ds4 .bumper.right {
            float: right;
            transform: rotateY(180deg);
        }
        
        .ds4 .touchpad {
            width: 350px;
            height: 300px;
            position: absolute;
            left: 422px;
            top: 74px;
        }
        
        .ds4 .touchpad.pressed {
            background: url(Touchpad_light.png) no-repeat center;
        }
        
        .ds4 .meta {
            width: 100px;
            height: 100px;
            position: absolute;
            left: 546px;
            bottom: 264px;
        }
        
        .ds4 .meta.pressed {
            background: url(Home.png) no-repeat center;
        }
        
        .ds4 .p0{
        background-position: 0 -6px;
        }
        .ds4 .p1{
        background-position: 0 -28px;
        }
        .ds4 .p2{
        background-position: 0 -49px;
        }
        .ds4 .p3{
        background-position: 0 -70px;
        }*/
        .ds4 .arrows {
            position: absolute;
            width: 352px;
            height: 46px;
            top: 142px;
            left: 227px;
        }
        
        .ds4 .back, .ds4 .start {
            background: url(Select.png);
            width: 26px;
            height: 43px;
            opacity: 0;
        }
        .ds4 .start {
            position: absolute;
            left: 546px;
            bottom: -30px;
        }
        .ds4 .back {
            position: absolute;
            left: 170px;
            bottom: -30px;
        }
        
        
        .ds4 .back.pressed, .ds4 .start.pressed {
            /* background-position-y: -21px; */
            /* margin-top: 2px; */
            opacity: 1;
        }
        
        .ds4 .back {
            float: left;
            /* width: 28px; */
        }
        
        .ds4 .start {
            float: right;
            /* width: 28px; */
            background-position: 0px 0;
        }
        
        .ds4 .abxy {
            position: absolute;
            width: 170px;
            height: 171px;
            top: 200px;
            left: 762px;
        }
        
        .ds4 .button {
            position: absolute;
            width: 55px;
            height: 55px;
            background: url(FaceButtons.png);
        }
        
        .ds4 .button.pressed {
            background-position-y: 55px;
            /* margin-top: 5px; */
        }
        
        .ds4 .a {
            background-position: 0 0;
            bottom: 0px;
            left: 58px;
        }
        
        .ds4 .b {
            background-position: -57px 0;
            top: 57px;
            right: -3px;
        }
        
        .ds4 .x {
            background-position: -113px 0;
            top: 57px;
        }
        
        .ds4 .y {
            background-position: 55px 0;
            left: 58px;
            bottom: 119px;
        }
        
        .ds4 .sticks {
            position: absolute;
            width: 364px;
            height: 105px;
            top: 348px;
            left: 422px;
        }
        
        .ds4 .stick {
            position: absolute;
            background: url(Sticks.png);
            height: 94px;
            width: 94px;
        }
        
        .ds4 .stick.pressed.left {
            background-position-x: -96px;
        }
        
        .ds4 .stick.pressed.right {
            background-position-x: -192px;
        }
        
        .ds4 .stick.left {
            top: 0;
            left: 0;
        }
        
        .ds4 .stick.right {
            top: calc(100% - 105px);
            left: calc(100% - 105px);
        }
        
        .ds4 .dpad {
            position: absolute;
            width: 125px;
            height: 126px;
            top: 220px;
            left: 286px;
        }
        
        .ds4 .face {
            background: url(DpadW.png);
            position: absolute;
        }
        
        .ds4 .face.up, .ds4 .face.down {
            width: 37px;
            height: 52px;
        }
        
        .ds4 .face.left, .ds4 .face.right {
            width: 52px;
            height: 40px;
        }
        
        .ds4 .face.up {
            left: 44px;
            top: 0;
            background-position: -37px 0px;
        }
        
        .ds4 .face.down {
            left: 44px;
            bottom: 0;
            background-position: 0px 0;
        }
        
        .ds4 .face.left {
            top: 45px;
            left: 0;
            background-position: 104px 0;
        }
        
        .ds4 .face.right {
            top: 45px;
            right: 0px;
            background-position: 52px 0;
        }
        
        .ds4 .face.pressed {
            /* margin-top: 5px; */
            background-position-y: 52px;
        }
        
        .ds4.half {
            margin-top: -300px;
        }
        
        /*END PS4 Controller Styling*/
        
        .ds4.white .back, .ds4 .start {
            background-image: url(Start.png);
            width: 26px;
            height: 43px;
        }
        
        /*END PS4 White Controller Styling*/
        </style>
      </head>
     <body>
     <div class="container" id="gamepads">
        <div class="template">
            
            <div class="triggers">
                <span class="trigger left" data-name="button-left-shoulder-bottom"></span>
                <span class="trigger right" data-name="button-right-shoulder-bottom"></span>
                <span class="trigger-button left" data-name="button-left-shoulder-bottom-digital"></span>
                <span class="trigger-button right" data-name="button-right-shoulder-bottom-digital"></span>
                <span class="clear"></span>
            </div>
            <div class="bumpers">
                <span class="bumper left" data-name="button-left-shoulder-top"></span>
                <span class="bumper right" data-name="button-right-shoulder-top"></span>
                <span class="clear"></span>
            </div>
            <div class="touchpad" data-name="touch-pad"></div>
            <div class="quadrant"></div>
            <div class="meta" data-name="button-meta"></div>
            <div class="arrows">
                <span class="back" data-name="button-select"></span>
                <span class="start" data-name="button-start"></span>
                <span class="clear"></span>
            </div>
            <div class="abxy">
                <span class="button a" data-name="button-1"></span>
                <span class="button b" data-name="button-2"></span>
                <span class="button x" data-name="button-3"></span>
                <span class="button y" data-name="button-4"></span>
            </div>
            <div class="sticks">
                <span class="stick left" data-name="stick-1"></span>
                <span class="stick right" data-name="stick-2"></span>
            </div>
            <div class="wheels">
                <span class="wheel left" data-name="stick-1-wheel"></span>
                <span class="wheel right" data-name="stick-2-wheel"></span>
            </div>
            <div class="dpad">
                <span class="face up" data-name="button-dpad-top"></span>
                <span class="face down" data-name="button-dpad-bottom"></span>
                <span class="face left" data-name="button-dpad-left"></span>
                <span class="face right" data-name="button-dpad-right"></span>
            </div>
            <div class="fstick" data-name="arcade-stick"></div>
        </div>
        <div class="controller active ds4 half edit" id="gamepad-0" style="transform-origin: 0px 0px;">
            
            <div class="triggers">
                <span class="trigger left" data-name="button-left-shoulder-bottom" style="opacity: 0;"></span>
                <span class="trigger right" data-name="button-right-shoulder-bottom" style="opacity: 0;"></span>
                <span class="trigger-button left" data-name="button-left-shoulder-bottom-digital"></span>
                <span class="trigger-button right" data-name="button-right-shoulder-bottom-digital"></span>
                <span class="clear"></span>
            </div>
            <div class="bumpers">
                <span class="bumper left" data-name="button-left-shoulder-top"></span>
                <span class="bumper right" data-name="button-right-shoulder-top"></span>
                <span class="clear"></span>
            </div>
            <div class="touchpad" data-name="touch-pad"></div>
            <div class="quadrant p0"></div>
            <div class="meta" data-name="button-meta"></div>
            <div class="arrows">
                <span class="back" data-name="button-select"></span>
                <span class="start" data-name="button-start"></span>
                <span class="clear"></span>
            </div>
            <div class="abxy">
                <span class="button a" data-name="button-1"></span>
                <span class="button b" data-name="button-2"></span>
                <span class="button x" data-name="button-3"></span>
                <span class="button y" data-name="button-4"></span>
            </div>
            <div class="sticks">
                <span class="stick left" data-name="stick-1" style="margin-left: 0px; margin-top: 0px; transform: rotateX(0deg) rotateY(0deg);"></span>
                <span class="stick right" data-name="stick-2" style="margin-left: 0px; margin-top: 0px; transform: rotateX(0deg) rotateY(0deg);"></span>
            </div>
            <div class="wheels">
                <span class="wheel left" data-name="stick-1-wheel" style="transform: rotate(0deg);"></span>
                <span class="wheel right" data-name="stick-2-wheel" style="transform: rotate(0deg);"></span>
            </div>
            <div class="dpad">
                <span class="face up" data-name="button-dpad-top"></span>
                <span class="face down" data-name="button-dpad-bottom"></span>
                <span class="face left" data-name="button-dpad-left"></span>
                <span class="face right" data-name="button-dpad-right"></span>
            </div>
            <div class="fstick" data-name="arcade-stick"></div>
        </div>
        <div class="controller ds4 half edit disconnected" id="gamepad-1" style="transform-origin: 0px 0px;">
            
            <div class="triggers">
                <span class="trigger left" data-name="button-left-shoulder-bottom"></span>
                <span class="trigger right" data-name="button-right-shoulder-bottom"></span>
                <span class="trigger-button left" data-name="button-left-shoulder-bottom-digital"></span>
                <span class="trigger-button right" data-name="button-right-shoulder-bottom-digital"></span>
                <span class="clear"></span>
            </div>
            <div class="bumpers">
                <span class="bumper left" data-name="button-left-shoulder-top"></span>
                <span class="bumper right" data-name="button-right-shoulder-top"></span>
                <span class="clear"></span>
            </div>
            <div class="touchpad" data-name="touch-pad"></div>
            <div class="quadrant"></div>
            <div class="meta" data-name="button-meta"></div>
            <div class="arrows">
                <span class="back" data-name="button-select"></span>
                <span class="start" data-name="button-start"></span>
                <span class="clear"></span>
            </div>
            <div class="abxy">
                <span class="button a" data-name="button-1"></span>
                <span class="button b" data-name="button-2"></span>
                <span class="button x" data-name="button-3"></span>
                <span class="button y" data-name="button-4"></span>
            </div>
            <div class="sticks">
                <span class="stick left" data-name="stick-1"></span>
                <span class="stick right" data-name="stick-2"></span>
            </div>
            <div class="wheels">
                <span class="wheel left" data-name="stick-1-wheel"></span>
                <span class="wheel right" data-name="stick-2-wheel"></span>
            </div>
            <div class="dpad">
                <span class="face up" data-name="button-dpad-top"></span>
                <span class="face down" data-name="button-dpad-bottom"></span>
                <span class="face left" data-name="button-dpad-left"></span>
                <span class="face right" data-name="button-dpad-right"></span>
            </div>
            <div class="fstick" data-name="arcade-stick"></div>
        </div>
        <div class="controller ds4 half edit disconnected" id="gamepad-2" style="transform-origin: 0px 0px;">
            
            <div class="triggers">
                <span class="trigger left" data-name="button-left-shoulder-bottom"></span>
                <span class="trigger right" data-name="button-right-shoulder-bottom"></span>
                <span class="trigger-button left" data-name="button-left-shoulder-bottom-digital"></span>
                <span class="trigger-button right" data-name="button-right-shoulder-bottom-digital"></span>
                <span class="clear"></span>
            </div>
            <div class="bumpers">
                <span class="bumper left" data-name="button-left-shoulder-top"></span>
                <span class="bumper right" data-name="button-right-shoulder-top"></span>
                <span class="clear"></span>
            </div>
            <div class="touchpad" data-name="touch-pad"></div>
            <div class="quadrant"></div>
            <div class="meta" data-name="button-meta"></div>
            <div class="arrows">
                <span class="back" data-name="button-select"></span>
                <span class="start" data-name="button-start"></span>
                <span class="clear"></span>
            </div>
            <div class="abxy">
                <span class="button a" data-name="button-1"></span>
                <span class="button b" data-name="button-2"></span>
                <span class="button x" data-name="button-3"></span>
                <span class="button y" data-name="button-4"></span>
            </div>
            <div class="sticks">
                <span class="stick left" data-name="stick-1"></span>
                <span class="stick right" data-name="stick-2"></span>
            </div>
            <div class="wheels">
                <span class="wheel left" data-name="stick-1-wheel"></span>
                <span class="wheel right" data-name="stick-2-wheel"></span>
            </div>
            <div class="dpad">
                <span class="face up" data-name="button-dpad-top"></span>
                <span class="face down" data-name="button-dpad-bottom"></span>
                <span class="face left" data-name="button-dpad-left"></span>
                <span class="face right" data-name="button-dpad-right"></span>
            </div>
            <div class="fstick" data-name="arcade-stick"></div>
        </div>
        <div class="controller ds4 half edit disconnected" id="gamepad-3" style="transform-origin: 0px 0px;">
            
            <div class="triggers">
                <span class="trigger left" data-name="button-left-shoulder-bottom"></span>
                <span class="trigger right" data-name="button-right-shoulder-bottom"></span>
                <span class="trigger-button left" data-name="button-left-shoulder-bottom-digital"></span>
                <span class="trigger-button right" data-name="button-right-shoulder-bottom-digital"></span>
                <span class="clear"></span>
            </div>
            <div class="bumpers">
                <span class="bumper left" data-name="button-left-shoulder-top"></span>
                <span class="bumper right" data-name="button-right-shoulder-top"></span>
                <span class="clear"></span>
            </div>
            <div class="touchpad" data-name="touch-pad"></div>
            <div class="quadrant"></div>
            <div class="meta" data-name="button-meta"></div>
            <div class="arrows">
                <span class="back" data-name="button-select"></span>
                <span class="start" data-name="button-start"></span>
                <span class="clear"></span>
            </div>
            <div class="abxy">
                <span class="button a" data-name="button-1"></span>
                <span class="button b" data-name="button-2"></span>
                <span class="button x" data-name="button-3"></span>
                <span class="button y" data-name="button-4"></span>
            </div>
            <div class="sticks">
                <span class="stick left" data-name="stick-1"></span>
                <span class="stick right" data-name="stick-2"></span>
            </div>
            <div class="wheels">
                <span class="wheel left" data-name="stick-1-wheel"></span>
                <span class="wheel right" data-name="stick-2-wheel"></span>
            </div>
            <div class="dpad">
                <span class="face up" data-name="button-dpad-top"></span>
                <span class="face down" data-name="button-dpad-bottom"></span>
                <span class="face left" data-name="button-dpad-left"></span>
                <span class="face right" data-name="button-dpad-right"></span>
            </div>
            <div class="fstick" data-name="arcade-stick"></div>
        </div>
    </div>
    </body>
      </html>
    `;
    newIframe.width = "400";
    newIframe.height = "300";
    newIframe.id = "myIframe";
  
    // Replace the old iframe with the new one
    iframeContainer.removeChild(document.getElementById("myIframe"));
    iframeContainer.appendChild(newIframe);
  }
  
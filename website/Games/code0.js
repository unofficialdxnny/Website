gdjs.Loading_32SceneCode = {};
gdjs.Loading_32SceneCode.GDIntroObjects1= [];
gdjs.Loading_32SceneCode.GDIntroObjects2= [];
gdjs.Loading_32SceneCode.GDArrowObjects1= [];
gdjs.Loading_32SceneCode.GDArrowObjects2= [];
gdjs.Loading_32SceneCode.GDtypewriterintroObjects1= [];
gdjs.Loading_32SceneCode.GDtypewriterintroObjects2= [];
gdjs.Loading_32SceneCode.GDNewSpriteObjects1= [];
gdjs.Loading_32SceneCode.GDNewSpriteObjects2= [];
gdjs.Loading_32SceneCode.GDRetroIntroObjects1= [];
gdjs.Loading_32SceneCode.GDRetroIntroObjects2= [];
gdjs.Loading_32SceneCode.GDRetroIntro120fpsObjects1= [];
gdjs.Loading_32SceneCode.GDRetroIntro120fpsObjects2= [];

gdjs.Loading_32SceneCode.conditionTrue_0 = {val:false};
gdjs.Loading_32SceneCode.condition0IsTrue_0 = {val:false};
gdjs.Loading_32SceneCode.condition1IsTrue_0 = {val:false};
gdjs.Loading_32SceneCode.condition2IsTrue_0 = {val:false};
gdjs.Loading_32SceneCode.conditionTrue_1 = {val:false};
gdjs.Loading_32SceneCode.condition0IsTrue_1 = {val:false};
gdjs.Loading_32SceneCode.condition1IsTrue_1 = {val:false};
gdjs.Loading_32SceneCode.condition2IsTrue_1 = {val:false};


gdjs.Loading_32SceneCode.mapOfGDgdjs_46Loading_9532SceneCode_46GDRetroIntro120fpsObjects1Objects = Hashtable.newFrom({"RetroIntro120fps": gdjs.Loading_32SceneCode.GDRetroIntro120fpsObjects1});
gdjs.Loading_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RetroIntro120fps"), gdjs.Loading_32SceneCode.GDRetroIntro120fpsObjects1);

gdjs.Loading_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Loading_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Loading_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Loading_32SceneCode.mapOfGDgdjs_46Loading_9532SceneCode_46GDRetroIntro120fpsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Loading_32SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Loading_32SceneCode.conditionTrue_1 = gdjs.Loading_32SceneCode.condition1IsTrue_0;
gdjs.Loading_32SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8204804);
}
}}
if (gdjs.Loading_32SceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Loading_32SceneCode.GDRetroIntro120fpsObjects1 */
{for(var i = 0, len = gdjs.Loading_32SceneCode.GDRetroIntro120fpsObjects1.length ;i < len;++i) {
    gdjs.Loading_32SceneCode.GDRetroIntro120fpsObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RetroIntro120fps"), gdjs.Loading_32SceneCode.GDRetroIntro120fpsObjects1);

gdjs.Loading_32SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Loading_32SceneCode.GDRetroIntro120fpsObjects1.length;i<l;++i) {
    if ( gdjs.Loading_32SceneCode.GDRetroIntro120fpsObjects1[i].isEnded() ) {
        gdjs.Loading_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.Loading_32SceneCode.GDRetroIntro120fpsObjects1[k] = gdjs.Loading_32SceneCode.GDRetroIntro120fpsObjects1[i];
        ++k;
    }
}
gdjs.Loading_32SceneCode.GDRetroIntro120fpsObjects1.length = k;}if (gdjs.Loading_32SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu Scene", false);
}}

}


{


gdjs.Loading_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Loading_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Loading_32SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.advancedWindow.setMaximizable(false, runtimeScene);
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1300, 500);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}{gdjs.evtTools.window.setWindowSize(runtimeScene, 1300, 500, true);
}{gdjs.evtTools.advancedWindow.setResizable(false, runtimeScene);
}}

}


};

gdjs.Loading_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Loading_32SceneCode.GDIntroObjects1.length = 0;
gdjs.Loading_32SceneCode.GDIntroObjects2.length = 0;
gdjs.Loading_32SceneCode.GDArrowObjects1.length = 0;
gdjs.Loading_32SceneCode.GDArrowObjects2.length = 0;
gdjs.Loading_32SceneCode.GDtypewriterintroObjects1.length = 0;
gdjs.Loading_32SceneCode.GDtypewriterintroObjects2.length = 0;
gdjs.Loading_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Loading_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Loading_32SceneCode.GDRetroIntroObjects1.length = 0;
gdjs.Loading_32SceneCode.GDRetroIntroObjects2.length = 0;
gdjs.Loading_32SceneCode.GDRetroIntro120fpsObjects1.length = 0;
gdjs.Loading_32SceneCode.GDRetroIntro120fpsObjects2.length = 0;

gdjs.Loading_32SceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Loading_32SceneCode'] = gdjs.Loading_32SceneCode;

gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDBackgroundObjects2= [];
gdjs.Main_32MenuCode.GDStickManObjects1= [];
gdjs.Main_32MenuCode.GDStickManObjects2= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects1= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects2= [];
gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1= [];
gdjs.Main_32MenuCode.GDPlay_95ButtonObjects2= [];
gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1= [];
gdjs.Main_32MenuCode.GDSettings_95ButtonObjects2= [];
gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1= [];
gdjs.Main_32MenuCode.GDQuit_95ButtonObjects2= [];
gdjs.Main_32MenuCode.GDMain_95Menu_95BGObjects1= [];
gdjs.Main_32MenuCode.GDMain_95Menu_95BGObjects2= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_0 = {val:false};


gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlay_9595ButtonObjects1Objects = Hashtable.newFrom({"Play_Button": gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlay_9595ButtonObjects1Objects = Hashtable.newFrom({"Play_Button": gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDSettings_9595ButtonObjects1Objects = Hashtable.newFrom({"Settings_Button": gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDSettings_9595ButtonObjects1Objects = Hashtable.newFrom({"Settings_Button": gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuit_9595ButtonObjects1Objects = Hashtable.newFrom({"Quit_Button": gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuit_9595ButtonObjects1Objects = Hashtable.newFrom({"Quit_Button": gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuit_9595ButtonObjects1Objects = Hashtable.newFrom({"Quit_Button": gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlay_9595ButtonObjects1Objects = Hashtable.newFrom({"Play_Button": gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1});
gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Main Menu");
}{gdjs.evtTools.advancedWindow.setFullScreenable(false, runtimeScene);
}{gdjs.evtTools.advancedWindow.setMinimizable(false, runtimeScene);
}{gdjs.evtTools.advancedWindow.setResizable(false, runtimeScene);
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, "StickFight");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlay_9595ButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1[i].setAnimationName("Play_Pressed");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlay_9595ButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1[i].setAnimationName("Play_Button");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings_Button"), gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDSettings_9595ButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1[i].setAnimationName("Settings_Pressed");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings_Button"), gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDSettings_9595ButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1[i].setAnimationName("Settings");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit_Button"), gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuit_9595ButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1[i].setAnimationName("Quit_Pressed");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit_Button"), gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuit_9595ButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1[i].setAnimationName("Quit");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit_Button"), gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuit_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlay_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map Select", false);
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDStickManObjects1.length = 0;
gdjs.Main_32MenuCode.GDStickManObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlay_95ButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlay_95ButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDSettings_95ButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDSettings_95ButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDQuit_95ButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDQuit_95ButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDMain_95Menu_95BGObjects1.length = 0;
gdjs.Main_32MenuCode.GDMain_95Menu_95BGObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;

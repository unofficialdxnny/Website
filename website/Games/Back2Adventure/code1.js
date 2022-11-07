gdjs.Main_32Menu_32SceneCode = {};
gdjs.Main_32Menu_32SceneCode.GDbgObjects1= [];
gdjs.Main_32Menu_32SceneCode.GDbgObjects2= [];
gdjs.Main_32Menu_32SceneCode.GDPlayObjects1= [];
gdjs.Main_32Menu_32SceneCode.GDPlayObjects2= [];
gdjs.Main_32Menu_32SceneCode.GDNewSpriteObjects1= [];
gdjs.Main_32Menu_32SceneCode.GDNewSpriteObjects2= [];
gdjs.Main_32Menu_32SceneCode.GDNewSprite2Objects1= [];
gdjs.Main_32Menu_32SceneCode.GDNewSprite2Objects2= [];
gdjs.Main_32Menu_32SceneCode.GDSettingsObjects1= [];
gdjs.Main_32Menu_32SceneCode.GDSettingsObjects2= [];
gdjs.Main_32Menu_32SceneCode.GDCreditsObjects1= [];
gdjs.Main_32Menu_32SceneCode.GDCreditsObjects2= [];
gdjs.Main_32Menu_32SceneCode.GDQuitObjects1= [];
gdjs.Main_32Menu_32SceneCode.GDQuitObjects2= [];
gdjs.Main_32Menu_32SceneCode.GDRetroBGObjects1= [];
gdjs.Main_32Menu_32SceneCode.GDRetroBGObjects2= [];
gdjs.Main_32Menu_32SceneCode.GDRetroIntro120fpsObjects1= [];
gdjs.Main_32Menu_32SceneCode.GDRetroIntro120fpsObjects2= [];
gdjs.Main_32Menu_32SceneCode.GDGithubObjects1= [];
gdjs.Main_32Menu_32SceneCode.GDGithubObjects2= [];
gdjs.Main_32Menu_32SceneCode.GDNewSprite3Objects1= [];
gdjs.Main_32Menu_32SceneCode.GDNewSprite3Objects2= [];

gdjs.Main_32Menu_32SceneCode.conditionTrue_0 = {val:false};
gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32Menu_32SceneCode.condition2IsTrue_0 = {val:false};
gdjs.Main_32Menu_32SceneCode.conditionTrue_1 = {val:false};
gdjs.Main_32Menu_32SceneCode.condition0IsTrue_1 = {val:false};
gdjs.Main_32Menu_32SceneCode.condition1IsTrue_1 = {val:false};
gdjs.Main_32Menu_32SceneCode.condition2IsTrue_1 = {val:false};


gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.Main_32Menu_32SceneCode.GDPlayObjects1});
gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.Main_32Menu_32SceneCode.GDPlayObjects1});
gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDSettingsObjects1Objects = Hashtable.newFrom({"Settings": gdjs.Main_32Menu_32SceneCode.GDSettingsObjects1});
gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDSettingsObjects1Objects = Hashtable.newFrom({"Settings": gdjs.Main_32Menu_32SceneCode.GDSettingsObjects1});
gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDCreditsObjects1Objects = Hashtable.newFrom({"Credits": gdjs.Main_32Menu_32SceneCode.GDCreditsObjects1});
gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDCreditsObjects1Objects = Hashtable.newFrom({"Credits": gdjs.Main_32Menu_32SceneCode.GDCreditsObjects1});
gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.Main_32Menu_32SceneCode.GDQuitObjects1});
gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.Main_32Menu_32SceneCode.GDQuitObjects1});
gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDRetroIntro120fpsObjects1Objects = Hashtable.newFrom({"RetroIntro120fps": gdjs.Main_32Menu_32SceneCode.GDRetroIntro120fpsObjects1});
gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.Main_32Menu_32SceneCode.GDPlayObjects1});
gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.Main_32Menu_32SceneCode.GDPlayObjects1});
gdjs.Main_32Menu_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Main_32Menu_32SceneCode.GDPlayObjects1);

gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32Menu_32SceneCode.conditionTrue_1 = gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0;
gdjs.Main_32Menu_32SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8196860);
}
}}
if (gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32Menu_32SceneCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.Main_32Menu_32SceneCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.Main_32Menu_32SceneCode.GDPlayObjects1[i].setAnimationName("Play_Pressed");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sounds\\button_down_audacity_sound_reduction.mp3", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Main_32Menu_32SceneCode.GDPlayObjects1);

gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDPlayObjects1Objects, runtimeScene, true, true);
}if ( gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32Menu_32SceneCode.conditionTrue_1 = gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0;
gdjs.Main_32Menu_32SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8198148);
}
}}
if (gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32Menu_32SceneCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.Main_32Menu_32SceneCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.Main_32Menu_32SceneCode.GDPlayObjects1[i].setAnimationName("Play");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.Main_32Menu_32SceneCode.GDSettingsObjects1);

gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDSettingsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32Menu_32SceneCode.conditionTrue_1 = gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0;
gdjs.Main_32Menu_32SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8199004);
}
}}
if (gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32Menu_32SceneCode.GDSettingsObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sounds\\button_down_audacity_sound_reduction.mp3", false, 50, 1);
}{for(var i = 0, len = gdjs.Main_32Menu_32SceneCode.GDSettingsObjects1.length ;i < len;++i) {
    gdjs.Main_32Menu_32SceneCode.GDSettingsObjects1[i].setAnimationName("Settings_Pressed");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.Main_32Menu_32SceneCode.GDSettingsObjects1);

gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDSettingsObjects1Objects, runtimeScene, true, true);
}if ( gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32Menu_32SceneCode.conditionTrue_1 = gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0;
gdjs.Main_32Menu_32SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8201044);
}
}}
if (gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32Menu_32SceneCode.GDSettingsObjects1 */
{for(var i = 0, len = gdjs.Main_32Menu_32SceneCode.GDSettingsObjects1.length ;i < len;++i) {
    gdjs.Main_32Menu_32SceneCode.GDSettingsObjects1[i].setAnimationName("Settings");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.Main_32Menu_32SceneCode.GDCreditsObjects1);

gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDCreditsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32Menu_32SceneCode.conditionTrue_1 = gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0;
gdjs.Main_32Menu_32SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8201820);
}
}}
if (gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32Menu_32SceneCode.GDCreditsObjects1 */
{for(var i = 0, len = gdjs.Main_32Menu_32SceneCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.Main_32Menu_32SceneCode.GDCreditsObjects1[i].setAnimationName("Credits_Pressed");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sounds\\button_down_audacity_sound_reduction.mp3", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.Main_32Menu_32SceneCode.GDCreditsObjects1);

gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDCreditsObjects1Objects, runtimeScene, true, true);
}if ( gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32Menu_32SceneCode.conditionTrue_1 = gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0;
gdjs.Main_32Menu_32SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8203900);
}
}}
if (gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32Menu_32SceneCode.GDCreditsObjects1 */
{for(var i = 0, len = gdjs.Main_32Menu_32SceneCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.Main_32Menu_32SceneCode.GDCreditsObjects1[i].setAnimationName("Credits");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32Menu_32SceneCode.GDQuitObjects1);

gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDQuitObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32Menu_32SceneCode.conditionTrue_1 = gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0;
gdjs.Main_32Menu_32SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8204644);
}
}}
if (gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32Menu_32SceneCode.GDQuitObjects1 */
{for(var i = 0, len = gdjs.Main_32Menu_32SceneCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.Main_32Menu_32SceneCode.GDQuitObjects1[i].setAnimationName("Quit_Pressed");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sounds\\button_down_audacity_sound_reduction.mp3", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32Menu_32SceneCode.GDQuitObjects1);

gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDQuitObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32Menu_32SceneCode.GDQuitObjects1 */
{for(var i = 0, len = gdjs.Main_32Menu_32SceneCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.Main_32Menu_32SceneCode.GDQuitObjects1[i].setAnimationName("Quit");
}
}}

}


{


gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RetroIntro120fps"), gdjs.Main_32Menu_32SceneCode.GDRetroIntro120fpsObjects1);

gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDRetroIntro120fpsObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32Menu_32SceneCode.GDRetroIntro120fpsObjects1 */
{for(var i = 0, len = gdjs.Main_32Menu_32SceneCode.GDRetroIntro120fpsObjects1.length ;i < len;++i) {
    gdjs.Main_32Menu_32SceneCode.GDRetroIntro120fpsObjects1[i].play();
}
}{for(var i = 0, len = gdjs.Main_32Menu_32SceneCode.GDRetroIntro120fpsObjects1.length ;i < len;++i) {
    gdjs.Main_32Menu_32SceneCode.GDRetroIntro120fpsObjects1[i].setLoop(true);
}
}{for(var i = 0, len = gdjs.Main_32Menu_32SceneCode.GDRetroIntro120fpsObjects1.length ;i < len;++i) {
    gdjs.Main_32Menu_32SceneCode.GDRetroIntro120fpsObjects1[i].mute(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Main_32Menu_32SceneCode.GDPlayObjects1);

gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Levels", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Main_32Menu_32SceneCode.GDPlayObjects1);

gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32Menu_32SceneCode.mapOfGDgdjs_46Main_9532Menu_9532SceneCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32Menu_32SceneCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_32Menu_32SceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level One", false);
}}

}


};

gdjs.Main_32Menu_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32Menu_32SceneCode.GDbgObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDbgObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDPlayObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDPlayObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDSettingsObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDSettingsObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDCreditsObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDCreditsObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDQuitObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDQuitObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDRetroBGObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDRetroBGObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDRetroIntro120fpsObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDRetroIntro120fpsObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDGithubObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDGithubObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDNewSprite3Objects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDNewSprite3Objects2.length = 0;

gdjs.Main_32Menu_32SceneCode.eventsList0(runtimeScene);
return;

}

gdjs['Main_32Menu_32SceneCode'] = gdjs.Main_32Menu_32SceneCode;

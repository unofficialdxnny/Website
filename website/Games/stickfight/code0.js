gdjs.Loading_32ScreenCode = {};
gdjs.Loading_32ScreenCode.GDFPSObjects1= [];
gdjs.Loading_32ScreenCode.GDFPSObjects2= [];
gdjs.Loading_32ScreenCode.GDLoading_95BackgroundObjects1= [];
gdjs.Loading_32ScreenCode.GDLoading_95BackgroundObjects2= [];
gdjs.Loading_32ScreenCode.GDLoading_95Background_95VideoObjects1= [];
gdjs.Loading_32ScreenCode.GDLoading_95Background_95VideoObjects2= [];
gdjs.Loading_32ScreenCode.GDLoading_95fade_95in_95outObjects1= [];
gdjs.Loading_32ScreenCode.GDLoading_95fade_95in_95outObjects2= [];
gdjs.Loading_32ScreenCode.GDLoading_95scroll_95up_95with_95ninjaObjects1= [];
gdjs.Loading_32ScreenCode.GDLoading_95scroll_95up_95with_95ninjaObjects2= [];
gdjs.Loading_32ScreenCode.GDLoading_95fade_95in_95out_95colly_95pcObjects1= [];
gdjs.Loading_32ScreenCode.GDLoading_95fade_95in_95out_95colly_95pcObjects2= [];
gdjs.Loading_32ScreenCode.GDLoading_95Animation_95for_95StickFightObjects1= [];
gdjs.Loading_32ScreenCode.GDLoading_95Animation_95for_95StickFightObjects2= [];
gdjs.Loading_32ScreenCode.GDunder_95developmentObjects1= [];
gdjs.Loading_32ScreenCode.GDunder_95developmentObjects2= [];
gdjs.Loading_32ScreenCode.GDGitHubObjects1= [];
gdjs.Loading_32ScreenCode.GDGitHubObjects2= [];

gdjs.Loading_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Loading_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Loading_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Loading_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Loading_32ScreenCode.condition3IsTrue_0 = {val:false};
gdjs.Loading_32ScreenCode.conditionTrue_1 = {val:false};
gdjs.Loading_32ScreenCode.condition0IsTrue_1 = {val:false};
gdjs.Loading_32ScreenCode.condition1IsTrue_1 = {val:false};
gdjs.Loading_32ScreenCode.condition2IsTrue_1 = {val:false};
gdjs.Loading_32ScreenCode.condition3IsTrue_1 = {val:false};


gdjs.Loading_32ScreenCode.mapOfGDgdjs_46Loading_9532ScreenCode_46GDGitHubObjects1Objects = Hashtable.newFrom({"GitHub": gdjs.Loading_32ScreenCode.GDGitHubObjects1});
gdjs.Loading_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Loading_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Loading_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Loading_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Loading_Animation_for_StickFight"), gdjs.Loading_32ScreenCode.GDLoading_95Animation_95for_95StickFightObjects1);
{gdjs.evtTools.advancedWindow.setResizable(false, runtimeScene);
}{gdjs.evtTools.advancedWindow.setMinimizable(false, runtimeScene);
}{for(var i = 0, len = gdjs.Loading_32ScreenCode.GDLoading_95Animation_95for_95StickFightObjects1.length ;i < len;++i) {
    gdjs.Loading_32ScreenCode.GDLoading_95Animation_95for_95StickFightObjects1[i].play();
}
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, "StickFight");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GitHub"), gdjs.Loading_32ScreenCode.GDGitHubObjects1);

gdjs.Loading_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Loading_32ScreenCode.condition1IsTrue_0.val = false;
gdjs.Loading_32ScreenCode.condition2IsTrue_0.val = false;
{
gdjs.Loading_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Loading_32ScreenCode.mapOfGDgdjs_46Loading_9532ScreenCode_46GDGitHubObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Loading_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Loading_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Loading_32ScreenCode.condition1IsTrue_0.val ) {
{
{gdjs.Loading_32ScreenCode.conditionTrue_1 = gdjs.Loading_32ScreenCode.condition2IsTrue_0;
gdjs.Loading_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8358580);
}
}}
}
if (gdjs.Loading_32ScreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://github.com/unofficialdxnny/StickFight", runtimeScene);
}}

}


};

gdjs.Loading_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Loading_32ScreenCode.GDFPSObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDFPSObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95BackgroundObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95BackgroundObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95Background_95VideoObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95Background_95VideoObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95fade_95in_95outObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95fade_95in_95outObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95scroll_95up_95with_95ninjaObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95scroll_95up_95with_95ninjaObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95fade_95in_95out_95colly_95pcObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95fade_95in_95out_95colly_95pcObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95Animation_95for_95StickFightObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDLoading_95Animation_95for_95StickFightObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDunder_95developmentObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDunder_95developmentObjects2.length = 0;
gdjs.Loading_32ScreenCode.GDGitHubObjects1.length = 0;
gdjs.Loading_32ScreenCode.GDGitHubObjects2.length = 0;

gdjs.Loading_32ScreenCode.eventsList0(runtimeScene);

return;

}

gdjs['Loading_32ScreenCode'] = gdjs.Loading_32ScreenCode;

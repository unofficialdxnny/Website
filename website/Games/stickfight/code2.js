gdjs.SettingsCode = {};
gdjs.SettingsCode.GDNewSpriteObjects1= [];
gdjs.SettingsCode.GDNewSpriteObjects2= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.SettingsCode.condition1IsTrue_0 = {val:false};


gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.advancedWindow.setFullScreenable(false, runtimeScene);
}{gdjs.evtTools.advancedWindow.setResizable(false, runtimeScene);
}{gdjs.evtTools.advancedWindow.setMinimizable(false, runtimeScene);
}}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDNewSpriteObjects1.length = 0;
gdjs.SettingsCode.GDNewSpriteObjects2.length = 0;

gdjs.SettingsCode.eventsList0(runtimeScene);

return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;

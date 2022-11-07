gdjs.Level_32OneCode = {};
gdjs.Level_32OneCode.GDPlayerDefaultObjects1= [];
gdjs.Level_32OneCode.GDPlayerDefaultObjects2= [];
gdjs.Level_32OneCode.GDScoreSystemObjects1= [];
gdjs.Level_32OneCode.GDScoreSystemObjects2= [];
gdjs.Level_32OneCode.GDNewSpriteObjects1= [];
gdjs.Level_32OneCode.GDNewSpriteObjects2= [];
gdjs.Level_32OneCode.GDNewSprite2Objects1= [];
gdjs.Level_32OneCode.GDNewSprite2Objects2= [];

gdjs.Level_32OneCode.conditionTrue_0 = {val:false};
gdjs.Level_32OneCode.condition0IsTrue_0 = {val:false};
gdjs.Level_32OneCode.condition1IsTrue_0 = {val:false};
gdjs.Level_32OneCode.condition2IsTrue_0 = {val:false};
gdjs.Level_32OneCode.conditionTrue_1 = {val:false};
gdjs.Level_32OneCode.condition0IsTrue_1 = {val:false};
gdjs.Level_32OneCode.condition1IsTrue_1 = {val:false};
gdjs.Level_32OneCode.condition2IsTrue_1 = {val:false};


gdjs.Level_32OneCode.mapOfGDgdjs_46Level_9532OneCode_46GDPlayerDefaultObjects1Objects = Hashtable.newFrom({"PlayerDefault": gdjs.Level_32OneCode.GDPlayerDefaultObjects1});
gdjs.Level_32OneCode.mapOfGDgdjs_46Level_9532OneCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Level_32OneCode.GDNewSpriteObjects1});
gdjs.Level_32OneCode.mapOfGDgdjs_46Level_9532OneCode_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Level_32OneCode.GDNewSprite2Objects1});
gdjs.Level_32OneCode.mapOfGDgdjs_46Level_9532OneCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Level_32OneCode.GDNewSpriteObjects1});
gdjs.Level_32OneCode.mapOfGDgdjs_46Level_9532OneCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Level_32OneCode.GDNewSpriteObjects1});
gdjs.Level_32OneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Level_32OneCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32OneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Level_32OneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerDefault"), gdjs.Level_32OneCode.GDPlayerDefaultObjects1);
{for(var i = 0, len = gdjs.Level_32OneCode.GDPlayerDefaultObjects1.length ;i < len;++i) {
    gdjs.Level_32OneCode.GDPlayerDefaultObjects1[i].addForce(200, 0, 0);
}
}}

}


{


gdjs.Level_32OneCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32OneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.Level_32OneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerDefault"), gdjs.Level_32OneCode.GDPlayerDefaultObjects1);
{for(var i = 0, len = gdjs.Level_32OneCode.GDPlayerDefaultObjects1.length ;i < len;++i) {
    gdjs.Level_32OneCode.GDPlayerDefaultObjects1[i].addForce(0, -(200), 0);
}
}}

}


{


gdjs.Level_32OneCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32OneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Level_32OneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerDefault"), gdjs.Level_32OneCode.GDPlayerDefaultObjects1);
{for(var i = 0, len = gdjs.Level_32OneCode.GDPlayerDefaultObjects1.length ;i < len;++i) {
    gdjs.Level_32OneCode.GDPlayerDefaultObjects1[i].addForce(-(200), 0, 0);
}
}}

}


{


gdjs.Level_32OneCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32OneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.Level_32OneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerDefault"), gdjs.Level_32OneCode.GDPlayerDefaultObjects1);
{for(var i = 0, len = gdjs.Level_32OneCode.GDPlayerDefaultObjects1.length ;i < len;++i) {
    gdjs.Level_32OneCode.GDPlayerDefaultObjects1[i].addForce(0, 200, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Level_32OneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerDefault"), gdjs.Level_32OneCode.GDPlayerDefaultObjects1);

gdjs.Level_32OneCode.condition0IsTrue_0.val = false;
gdjs.Level_32OneCode.condition1IsTrue_0.val = false;
{
gdjs.Level_32OneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32OneCode.mapOfGDgdjs_46Level_9532OneCode_46GDPlayerDefaultObjects1Objects, gdjs.Level_32OneCode.mapOfGDgdjs_46Level_9532OneCode_46GDNewSpriteObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level_32OneCode.condition0IsTrue_0.val ) {
{
{gdjs.Level_32OneCode.conditionTrue_1 = gdjs.Level_32OneCode.condition1IsTrue_0;
gdjs.Level_32OneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8219948);
}
}}
if (gdjs.Level_32OneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_32OneCode.GDNewSpriteObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreSystem"), gdjs.Level_32OneCode.GDScoreSystemObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Level_32OneCode.GDScoreSystemObjects1.length ;i < len;++i) {
    gdjs.Level_32OneCode.GDScoreSystemObjects1[i].setString("Score :" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Level_32OneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Level_32OneCode.GDNewSpriteObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Level_32OneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_32OneCode.GDNewSprite2Objects1);

gdjs.Level_32OneCode.condition0IsTrue_0.val = false;
gdjs.Level_32OneCode.condition1IsTrue_0.val = false;
{
gdjs.Level_32OneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_32OneCode.mapOfGDgdjs_46Level_9532OneCode_46GDNewSprite2Objects1Objects, gdjs.Level_32OneCode.mapOfGDgdjs_46Level_9532OneCode_46GDNewSpriteObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level_32OneCode.condition0IsTrue_0.val ) {
{
{gdjs.Level_32OneCode.conditionTrue_1 = gdjs.Level_32OneCode.condition1IsTrue_0;
gdjs.Level_32OneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8064412);
}
}}
if (gdjs.Level_32OneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_32OneCode.GDNewSpriteObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreSystem"), gdjs.Level_32OneCode.GDScoreSystemObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Level_32OneCode.GDScoreSystemObjects1.length ;i < len;++i) {
    gdjs.Level_32OneCode.GDScoreSystemObjects1[i].setString("Score :" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Level_32OneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Level_32OneCode.GDNewSpriteObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_32OneCode.mapOfGDgdjs_46Level_9532OneCode_46GDNewSpriteObjects1Objects, 100, 300, "");
}}

}


{


gdjs.Level_32OneCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32OneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Level_32OneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_32OneCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Level_32OneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_32OneCode.GDNewSprite2Objects1[i].addForce(0, -(200), 0);
}
}}

}


{


gdjs.Level_32OneCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32OneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level_32OneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_32OneCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Level_32OneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_32OneCode.GDNewSprite2Objects1[i].addForce(200, 0, 0);
}
}}

}


{


gdjs.Level_32OneCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32OneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level_32OneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_32OneCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Level_32OneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_32OneCode.GDNewSprite2Objects1[i].addForce(-(200), 0, 0);
}
}}

}


{


gdjs.Level_32OneCode.condition0IsTrue_0.val = false;
{
gdjs.Level_32OneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.Level_32OneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Level_32OneCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Level_32OneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Level_32OneCode.GDNewSprite2Objects1[i].addForce(0, 200, 0);
}
}}

}


{


{
}

}


};

gdjs.Level_32OneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_32OneCode.GDPlayerDefaultObjects1.length = 0;
gdjs.Level_32OneCode.GDPlayerDefaultObjects2.length = 0;
gdjs.Level_32OneCode.GDScoreSystemObjects1.length = 0;
gdjs.Level_32OneCode.GDScoreSystemObjects2.length = 0;
gdjs.Level_32OneCode.GDNewSpriteObjects1.length = 0;
gdjs.Level_32OneCode.GDNewSpriteObjects2.length = 0;
gdjs.Level_32OneCode.GDNewSprite2Objects1.length = 0;
gdjs.Level_32OneCode.GDNewSprite2Objects2.length = 0;

gdjs.Level_32OneCode.eventsList0(runtimeScene);
return;

}

gdjs['Level_32OneCode'] = gdjs.Level_32OneCode;

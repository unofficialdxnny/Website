// Get a reference to the source and destination documents
var srcDoc = app.activeDocument;
var destDoc = app.documents[1]; // Change the index to match your destination document

// Loop through the layers to copy and clip
var layersToCopy = 5; // Specify the number of layers to copy
for (var i = 0; i < layersToCopy; i++) {
    // Select the layer in the source document
    srcDoc.activeLayer = srcDoc.layers[i];
    
    // Duplicate the selected layer
    var layerCopy = srcDoc.activeLayer.duplicate(destDoc);
    
    // Clip the duplicated layer to the selection in the destination document
    destDoc.activeLayer = layerCopy;
    destDoc.selection.load(srcDoc.channels[0]);
    destDoc.selection.invert();
    destDoc.activeLayer = destDoc.artLayers.add();
    destDoc.selection.fill(app.foregroundColor);
    destDoc.activeLayer = layerCopy;
    destDoc.activeLayer.clipped = true;
}

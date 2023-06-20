var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_DeteccionsCornell_1 = new ol.format.GeoJSON();
var features_DeteccionsCornell_1 = format_DeteccionsCornell_1.readFeatures(json_DeteccionsCornell_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeteccionsCornell_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeteccionsCornell_1.addFeatures(features_DeteccionsCornell_1);
var lyr_DeteccionsCornell_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeteccionsCornell_1, 
                style: style_DeteccionsCornell_1,
                interactive: true,
                title: '<img src="styles/legend/DeteccionsCornell_1.png" /> Deteccions Cornellà'
            });
var format_DeteccionselPrat_2 = new ol.format.GeoJSON();
var features_DeteccionselPrat_2 = format_DeteccionselPrat_2.readFeatures(json_DeteccionselPrat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeteccionselPrat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeteccionselPrat_2.addFeatures(features_DeteccionselPrat_2);
var lyr_DeteccionselPrat_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeteccionselPrat_2, 
                style: style_DeteccionselPrat_2,
                interactive: true,
                title: '<img src="styles/legend/DeteccionselPrat_2.png" /> Deteccions el Prat'
            });
var format_DeteccionsMolins_3 = new ol.format.GeoJSON();
var features_DeteccionsMolins_3 = format_DeteccionsMolins_3.readFeatures(json_DeteccionsMolins_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeteccionsMolins_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeteccionsMolins_3.addFeatures(features_DeteccionsMolins_3);
var lyr_DeteccionsMolins_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeteccionsMolins_3, 
                style: style_DeteccionsMolins_3,
                interactive: true,
                title: '<img src="styles/legend/DeteccionsMolins_3.png" /> Deteccions Molins'
            });
var format_DeteccionsSantFeliu_4 = new ol.format.GeoJSON();
var features_DeteccionsSantFeliu_4 = format_DeteccionsSantFeliu_4.readFeatures(json_DeteccionsSantFeliu_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeteccionsSantFeliu_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeteccionsSantFeliu_4.addFeatures(features_DeteccionsSantFeliu_4);
var lyr_DeteccionsSantFeliu_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeteccionsSantFeliu_4, 
                style: style_DeteccionsSantFeliu_4,
                interactive: true,
                title: '<img src="styles/legend/DeteccionsSantFeliu_4.png" /> Deteccions Sant Feliu'
            });
var format_DeteccionsStJoanDesp_5 = new ol.format.GeoJSON();
var features_DeteccionsStJoanDesp_5 = format_DeteccionsStJoanDesp_5.readFeatures(json_DeteccionsStJoanDesp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeteccionsStJoanDesp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeteccionsStJoanDesp_5.addFeatures(features_DeteccionsStJoanDesp_5);
var lyr_DeteccionsStJoanDesp_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeteccionsStJoanDesp_5, 
                style: style_DeteccionsStJoanDesp_5,
                interactive: true,
                title: '<img src="styles/legend/DeteccionsStJoanDesp_5.png" /> Deteccions St Joan Despí'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_DeteccionsCornell_1.setVisible(true);lyr_DeteccionselPrat_2.setVisible(true);lyr_DeteccionsMolins_3.setVisible(true);lyr_DeteccionsSantFeliu_4.setVisible(true);lyr_DeteccionsStJoanDesp_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_DeteccionsCornell_1,lyr_DeteccionselPrat_2,lyr_DeteccionsMolins_3,lyr_DeteccionsSantFeliu_4,lyr_DeteccionsStJoanDesp_5];
lyr_DeteccionsCornell_1.set('fieldAliases', {'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_DeteccionselPrat_2.set('fieldAliases', {'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_DeteccionsMolins_3.set('fieldAliases', {'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_DeteccionsSantFeliu_4.set('fieldAliases', {'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_DeteccionsStJoanDesp_5.set('fieldAliases', {'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_DeteccionsCornell_1.set('fieldImages', {'gml_id': '', 'beginLifespanVersion': '', 'conditionOfConstruction': '', 'beginning': '', 'end': '', 'endLifespanVersion': '', 'informationSystem': '', 'reference': '', 'localId': '', 'namespace': '', 'horizontalGeometryEstimatedAccuracy': '', 'horizontalGeometryEstimatedAccuracy_uom': '', 'horizontalGeometryReference': '', 'referenceGeometry': '', 'currentUse': '', 'numberOfBuildingUnits': '', 'numberOfDwellings': '', 'numberOfFloorsAboveGround': '', 'documentLink': '', 'format': '', 'sourceStatus': '', 'officialAreaReference': '', 'value': '', 'value_uom': '', });
lyr_DeteccionselPrat_2.set('fieldImages', {'gml_id': '', 'beginLifespanVersion': '', 'conditionOfConstruction': '', 'beginning': '', 'end': '', 'endLifespanVersion': '', 'informationSystem': '', 'reference': '', 'localId': '', 'namespace': '', 'horizontalGeometryEstimatedAccuracy': '', 'horizontalGeometryEstimatedAccuracy_uom': '', 'horizontalGeometryReference': '', 'referenceGeometry': '', 'currentUse': '', 'numberOfBuildingUnits': '', 'numberOfDwellings': '', 'numberOfFloorsAboveGround': '', 'documentLink': '', 'format': '', 'sourceStatus': '', 'officialAreaReference': '', 'value': '', 'value_uom': '', });
lyr_DeteccionsMolins_3.set('fieldImages', {'gml_id': '', 'beginLifespanVersion': '', 'conditionOfConstruction': '', 'beginning': '', 'end': '', 'endLifespanVersion': '', 'informationSystem': '', 'reference': '', 'localId': '', 'namespace': '', 'horizontalGeometryEstimatedAccuracy': '', 'horizontalGeometryEstimatedAccuracy_uom': '', 'horizontalGeometryReference': '', 'referenceGeometry': '', 'currentUse': '', 'numberOfBuildingUnits': '', 'numberOfDwellings': '', 'numberOfFloorsAboveGround': '', 'documentLink': '', 'format': '', 'sourceStatus': '', 'officialAreaReference': '', 'value': '', 'value_uom': '', });
lyr_DeteccionsSantFeliu_4.set('fieldImages', {'gml_id': '', 'beginLifespanVersion': '', 'conditionOfConstruction': '', 'beginning': '', 'end': '', 'endLifespanVersion': '', 'informationSystem': '', 'reference': '', 'localId': '', 'namespace': '', 'horizontalGeometryEstimatedAccuracy': '', 'horizontalGeometryEstimatedAccuracy_uom': '', 'horizontalGeometryReference': '', 'referenceGeometry': '', 'currentUse': '', 'numberOfBuildingUnits': '', 'numberOfDwellings': '', 'numberOfFloorsAboveGround': '', 'documentLink': '', 'format': '', 'sourceStatus': '', 'officialAreaReference': '', 'value': '', 'value_uom': '', });
lyr_DeteccionsStJoanDesp_5.set('fieldImages', {'gml_id': '', 'beginLifespanVersion': '', 'conditionOfConstruction': '', 'beginning': '', 'end': '', 'endLifespanVersion': '', 'informationSystem': '', 'reference': '', 'localId': '', 'namespace': '', 'horizontalGeometryEstimatedAccuracy': '', 'horizontalGeometryEstimatedAccuracy_uom': '', 'horizontalGeometryReference': '', 'referenceGeometry': '', 'currentUse': '', 'numberOfBuildingUnits': '', 'numberOfDwellings': '', 'numberOfFloorsAboveGround': '', 'documentLink': '', 'format': '', 'sourceStatus': '', 'officialAreaReference': '', 'value': '', 'value_uom': '', });
lyr_DeteccionsCornell_1.set('fieldLabels', {'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_DeteccionselPrat_2.set('fieldLabels', {'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_DeteccionsMolins_3.set('fieldLabels', {'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_DeteccionsSantFeliu_4.set('fieldLabels', {'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_DeteccionsStJoanDesp_5.set('fieldLabels', {'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_DeteccionsStJoanDesp_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_VeryLikely_2 = new ol.format.GeoJSON();
var features_VeryLikely_2 = format_VeryLikely_2.readFeatures(json_VeryLikely_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VeryLikely_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VeryLikely_2.addFeatures(features_VeryLikely_2);
var lyr_VeryLikely_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VeryLikely_2, 
                style: style_VeryLikely_2,
                popuplayertitle: 'Very Likely',
                interactive: true,
                title: '<img src="styles/legend/VeryLikely_2.png" /> Very Likely'
            });
var format_Likely_3 = new ol.format.GeoJSON();
var features_Likely_3 = format_Likely_3.readFeatures(json_Likely_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Likely_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Likely_3.addFeatures(features_Likely_3);
var lyr_Likely_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Likely_3, 
                style: style_Likely_3,
                popuplayertitle: 'Likely',
                interactive: true,
                title: '<img src="styles/legend/Likely_3.png" /> Likely'
            });
var format_ModerateLikely_4 = new ol.format.GeoJSON();
var features_ModerateLikely_4 = format_ModerateLikely_4.readFeatures(json_ModerateLikely_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ModerateLikely_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ModerateLikely_4.addFeatures(features_ModerateLikely_4);
var lyr_ModerateLikely_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ModerateLikely_4, 
                style: style_ModerateLikely_4,
                popuplayertitle: 'Moderate Likely',
                interactive: true,
                title: '<img src="styles/legend/ModerateLikely_4.png" /> Moderate Likely'
            });
var format_Unlikely_5 = new ol.format.GeoJSON();
var features_Unlikely_5 = format_Unlikely_5.readFeatures(json_Unlikely_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unlikely_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unlikely_5.addFeatures(features_Unlikely_5);
var lyr_Unlikely_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unlikely_5, 
                style: style_Unlikely_5,
                popuplayertitle: 'Unlikely',
                interactive: true,
                title: '<img src="styles/legend/Unlikely_5.png" /> Unlikely'
            });
var format_VeryUnlikely_6 = new ol.format.GeoJSON();
var features_VeryUnlikely_6 = format_VeryUnlikely_6.readFeatures(json_VeryUnlikely_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VeryUnlikely_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VeryUnlikely_6.addFeatures(features_VeryUnlikely_6);
var lyr_VeryUnlikely_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VeryUnlikely_6, 
                style: style_VeryUnlikely_6,
                popuplayertitle: 'Very Unlikely',
                interactive: true,
                title: '<img src="styles/legend/VeryUnlikely_6.png" /> Very Unlikely'
            });
var format_Ward_7 = new ol.format.GeoJSON();
var features_Ward_7 = format_Ward_7.readFeatures(json_Ward_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ward_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ward_7.addFeatures(features_Ward_7);
var lyr_Ward_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ward_7, 
                style: style_Ward_7,
                popuplayertitle: 'Ward',
                interactive: true,
                title: '<img src="styles/legend/Ward_7.png" /> Ward'
            });
var format_Road_8 = new ol.format.GeoJSON();
var features_Road_8 = format_Road_8.readFeatures(json_Road_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_8.addFeatures(features_Road_8);
var lyr_Road_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_8, 
                style: style_Road_8,
                popuplayertitle: 'Road',
                interactive: true,
                title: '<img src="styles/legend/Road_8.png" /> Road'
            });
var format_HealthcareServices_9 = new ol.format.GeoJSON();
var features_HealthcareServices_9 = format_HealthcareServices_9.readFeatures(json_HealthcareServices_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HealthcareServices_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthcareServices_9.addFeatures(features_HealthcareServices_9);
var lyr_HealthcareServices_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HealthcareServices_9, 
                style: style_HealthcareServices_9,
                popuplayertitle: 'Healthcare Services',
                interactive: true,
                title: '<img src="styles/legend/HealthcareServices_9.png" /> Healthcare Services'
            });
var format_Pharmacy_10 = new ol.format.GeoJSON();
var features_Pharmacy_10 = format_Pharmacy_10.readFeatures(json_Pharmacy_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pharmacy_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pharmacy_10.addFeatures(features_Pharmacy_10);
var lyr_Pharmacy_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pharmacy_10, 
                style: style_Pharmacy_10,
                popuplayertitle: 'Pharmacy',
                interactive: true,
                title: '<img src="styles/legend/Pharmacy_10.png" /> Pharmacy'
            });
var format_BusStop_11 = new ol.format.GeoJSON();
var features_BusStop_11 = format_BusStop_11.readFeatures(json_BusStop_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusStop_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusStop_11.addFeatures(features_BusStop_11);
var lyr_BusStop_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BusStop_11, 
                style: style_BusStop_11,
                popuplayertitle: 'Bus Stop',
                interactive: true,
                title: '<img src="styles/legend/BusStop_11.png" /> Bus Stop'
            });
var format_VetClinic_12 = new ol.format.GeoJSON();
var features_VetClinic_12 = format_VetClinic_12.readFeatures(json_VetClinic_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VetClinic_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VetClinic_12.addFeatures(features_VetClinic_12);
var lyr_VetClinic_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VetClinic_12, 
                style: style_VetClinic_12,
                popuplayertitle: 'Vet Clinic',
                interactive: true,
                title: '<img src="styles/legend/VetClinic_12.png" /> Vet Clinic'
            });
var format_Market_13 = new ol.format.GeoJSON();
var features_Market_13 = format_Market_13.readFeatures(json_Market_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Market_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Market_13.addFeatures(features_Market_13);
var lyr_Market_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Market_13, 
                style: style_Market_13,
                popuplayertitle: 'Market',
                interactive: true,
                title: '<img src="styles/legend/Market_13.png" /> Market'
            });
var group_VetClinicNeeded = new ol.layer.Group({
                                layers: [lyr_VeryLikely_2,lyr_Likely_3,lyr_ModerateLikely_4,lyr_Unlikely_5,lyr_VeryUnlikely_6,],
                                fold: 'open',
                                title: 'Vet Clinic Needed'});

lyr_GoogleSatellite_0.setVisible(false);lyr_GoogleRoad_1.setVisible(true);lyr_VeryLikely_2.setVisible(true);lyr_Likely_3.setVisible(true);lyr_ModerateLikely_4.setVisible(true);lyr_Unlikely_5.setVisible(true);lyr_VeryUnlikely_6.setVisible(true);lyr_Ward_7.setVisible(true);lyr_Road_8.setVisible(true);lyr_HealthcareServices_9.setVisible(false);lyr_Pharmacy_10.setVisible(false);lyr_BusStop_11.setVisible(false);lyr_VetClinic_12.setVisible(true);lyr_Market_13.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleRoad_1,group_VetClinicNeeded,lyr_Ward_7,lyr_Road_8,lyr_HealthcareServices_9,lyr_Pharmacy_10,lyr_BusStop_11,lyr_VetClinic_12,lyr_Market_13];
lyr_VeryLikely_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Level': 'Level', });
lyr_Likely_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Level': 'Level', });
lyr_ModerateLikely_4.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Level': 'Level', });
lyr_Unlikely_5.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Level': 'Level', });
lyr_VeryUnlikely_6.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Level': 'Level', });
lyr_Ward_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ST': 'ST', 'ST_PCODE': 'ST_PCODE', 'DT': 'DT', 'DT_PCODE': 'DT_PCODE', 'TS': 'TS', 'TS_PCODE': 'TS_PCODE', 'TOWN': 'TOWN', 'TOWN_PCODE': 'TOWN_PCODE', 'WARD': 'WARD', 'WARD_PCODE': 'WARD_PCODE', 'WARD_MMR': 'Ward', 'SOURCE': 'SOURCE', 'REMARK': 'REMARK', 'PCode_V': 'PCode_V', });
lyr_Road_8.set('fieldAliases', {'highway': 'Road Type', 'name': 'Name', });
lyr_HealthcareServices_9.set('fieldAliases', {'amenity': 'Type', 'name': 'Name', });
lyr_Pharmacy_10.set('fieldAliases', {'amenity': 'amenity', 'name': 'Name', });
lyr_BusStop_11.set('fieldAliases', {'highway': 'highway', 'name_en': 'Name', });
lyr_VetClinic_12.set('fieldAliases', {'name': 'Name', 'lat': 'lat', 'lon': 'lon', 'photo': 'photo', });
lyr_Market_13.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'Feature Class', 'name': 'Name', });
lyr_VeryLikely_2.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Level': 'TextEdit', });
lyr_Likely_3.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Level': 'TextEdit', });
lyr_ModerateLikely_4.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Level': 'TextEdit', });
lyr_Unlikely_5.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Level': 'TextEdit', });
lyr_VeryUnlikely_6.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Level': 'TextEdit', });
lyr_Ward_7.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ST': 'TextEdit', 'ST_PCODE': 'TextEdit', 'DT': 'TextEdit', 'DT_PCODE': 'TextEdit', 'TS': 'TextEdit', 'TS_PCODE': 'TextEdit', 'TOWN': 'TextEdit', 'TOWN_PCODE': 'TextEdit', 'WARD': 'TextEdit', 'WARD_PCODE': 'TextEdit', 'WARD_MMR': 'TextEdit', 'SOURCE': 'TextEdit', 'REMARK': 'TextEdit', 'PCode_V': 'TextEdit', });
lyr_Road_8.set('fieldImages', {'highway': 'TextEdit', 'name': 'TextEdit', });
lyr_HealthcareServices_9.set('fieldImages', {'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_Pharmacy_10.set('fieldImages', {'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_BusStop_11.set('fieldImages', {'highway': 'TextEdit', 'name_en': 'TextEdit', });
lyr_VetClinic_12.set('fieldImages', {'name': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'photo': 'ExternalResource', });
lyr_Market_13.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_VeryLikely_2.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Level': 'inline label - always visible', });
lyr_Likely_3.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Level': 'inline label - always visible', });
lyr_ModerateLikely_4.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Level': 'inline label - always visible', });
lyr_Unlikely_5.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Level': 'inline label - always visible', });
lyr_VeryUnlikely_6.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Level': 'inline label - visible with data', });
lyr_Ward_7.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'ST': 'hidden field', 'ST_PCODE': 'hidden field', 'DT': 'hidden field', 'DT_PCODE': 'hidden field', 'TS': 'hidden field', 'TS_PCODE': 'hidden field', 'TOWN': 'hidden field', 'TOWN_PCODE': 'hidden field', 'WARD': 'hidden field', 'WARD_PCODE': 'hidden field', 'WARD_MMR': 'inline label - always visible', 'SOURCE': 'hidden field', 'REMARK': 'hidden field', 'PCode_V': 'hidden field', });
lyr_Road_8.set('fieldLabels', {'highway': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_HealthcareServices_9.set('fieldLabels', {'amenity': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_Pharmacy_10.set('fieldLabels', {'amenity': 'hidden field', 'name': 'inline label - always visible', });
lyr_BusStop_11.set('fieldLabels', {'highway': 'hidden field', 'name_en': 'inline label - always visible', });
lyr_VetClinic_12.set('fieldLabels', {'name': 'inline label - always visible', 'lat': 'hidden field', 'lon': 'hidden field', 'photo': 'no label', });
lyr_Market_13.set('fieldLabels', {'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_Market_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
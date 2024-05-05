var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GISPROJECTGROUP7ClosetoPLNPLTA_1 = new ol.format.GeoJSON();
var features_GISPROJECTGROUP7ClosetoPLNPLTA_1 = format_GISPROJECTGROUP7ClosetoPLNPLTA_1.readFeatures(json_GISPROJECTGROUP7ClosetoPLNPLTA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GISPROJECTGROUP7ClosetoPLNPLTA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GISPROJECTGROUP7ClosetoPLNPLTA_1.addFeatures(features_GISPROJECTGROUP7ClosetoPLNPLTA_1);
var lyr_GISPROJECTGROUP7ClosetoPLNPLTA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GISPROJECTGROUP7ClosetoPLNPLTA_1, 
                style: style_GISPROJECTGROUP7ClosetoPLNPLTA_1,
                popuplayertitle: "GIS PROJECT GROUP 7 - Close to PLN & PLTA",
                interactive: true,
                title: '<img src="styles/legend/GISPROJECTGROUP7ClosetoPLNPLTA_1.png" /> GIS PROJECT GROUP 7 - Close to PLN & PLTA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GISPROJECTGROUP7ClosetoPLNPLTA_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GISPROJECTGROUP7ClosetoPLNPLTA_1];
lyr_GISPROJECTGROUP7ClosetoPLNPLTA_1.set('fieldAliases', {'City (Kota)': 'City (Kota)', 'Name': 'Name', 'Address': 'Address', 'Phone Number': 'Phone Number', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_GISPROJECTGROUP7ClosetoPLNPLTA_1.set('fieldImages', {'City (Kota)': '', 'Name': '', 'Address': '', 'Phone Number': '', 'Latitude': '', 'Longitude': '', });
lyr_GISPROJECTGROUP7ClosetoPLNPLTA_1.set('fieldLabels', {'City (Kota)': 'no label', 'Name': 'no label', 'Address': 'no label', 'Phone Number': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_GISPROJECTGROUP7ClosetoPLNPLTA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
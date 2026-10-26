var wms_layers = [];


var lyr_GoogleSatellite_0 = new ol.layer.Tile({
    'title': 'Google Satellite',
    'opacity': 0.700000,
    source: new ol.source.XYZ({
    attributions: ' ',
        url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
    })
});

var lyr_Ortoimagen_1 = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
      url: "http://www.ign.es/wms-inspire/pnoa-ma?",
      attributions: ' ',
      params: {
        "LAYERS": "OI.OrthoimageCoverage",
        "TILED": "true",
        "VERSION": "1.3.0"},
    })),
    title: 'Ortoimagen',
    popuplayertitle: 'Ortoimagen',
    type: '',
    opacity: 0.700000,
});
wms_layers.push([lyr_Ortoimagen_1, 0]);

var lyr_Catastro_2 = new ol.layer.Image({
    source: new ol.source.ImageWMS(({
      url: "https://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx",
      attributions: ' ',
      params: {
        "LAYERS": "Catastro",
        "TILED": "true",
        "VERSION": "1.1.1"},
    })),
    title: 'Catastro',
    popuplayertitle: 'Catastro',
    type: '',
    opacity: 1.000000,
});
wms_layers.push([lyr_Catastro_2, 0]);


var lyr_ConcellosConcellosConcellosConcellosConcellos_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ideg.xunta.es/servizos/services/LimitesAdministrativos/LimitesAdministrativos/MapServer/WMSServer",
                              attributions: ' ',
                              params: {
                                "LAYERS": "7",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Límite Concellos',
                            popuplayertitle: 'Límite Concellos',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ConcellosConcellosConcellosConcellosConcellos_0, 0]);
              
              






var format_TA_61_0 = new ol.format.GeoJSON();
var features_TA_61_0 = format_TA_61_0.readFeatures(json_TA_61_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TA_61_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TA_61_0.addFeatures(features_TA_61_0);
var lyr_TA_61_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TA_61_0, 
                style: style_TA_61_0,
                popuplayertitle: 'Tierras arables 36061-Vilanova de Arousa',
                interactive: true,
                title: '<img src="styles/legend/TA_61_0.png" /> 36061-Vilanova de Arous'
            });
var format_TA_51_1 = new ol.format.GeoJSON();
var features_TA_51_1 = format_TA_51_1.readFeatures(json_TA_51_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TA_51_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TA_51_1.addFeatures(features_TA_51_1);
var lyr_TA_51_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TA_51_1, 
                style: style_TA_51_1,
                popuplayertitle: 'Tierras arables 36051-Sanxenxo',
                interactive: true,
                title: '<img src="styles/legend/TA_51_1.png" /> 36051-Sanxenxo'
            });
var format_TA_46_2 = new ol.format.GeoJSON();
var features_TA_46_2 = format_TA_46_2.readFeatures(json_TA_46_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TA_46_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TA_46_2.addFeatures(features_TA_46_2);
var lyr_TA_46_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TA_46_2, 
                style: style_TA_46_2,
                popuplayertitle: 'Tierras arables 36046-Ribadumia',
                interactive: true,
                title: '<img src="styles/legend/TA_46_2.png" /> 36046-Ribadumia'
            });
var format_TA_28_3 = new ol.format.GeoJSON();
var features_TA_28_3 = format_TA_28_3.readFeatures(json_TA_28_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TA_28_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TA_28_3.addFeatures(features_TA_28_3);
var lyr_TA_28_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TA_28_3, 
                style: style_TA_28_3,
                popuplayertitle: 'Tierras arables 36028-Meis',
                interactive: true,
                title: '<img src="styles/legend/TA_28_3.png" /> 36028-Meis'
            });
var format_TA_27_4 = new ol.format.GeoJSON();
var features_TA_27_4 = format_TA_27_4.readFeatures(json_TA_27_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TA_27_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TA_27_4.addFeatures(features_TA_27_4);
var lyr_TA_27_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TA_27_4, 
                style: style_TA_27_4,
                popuplayertitle: 'Tierras arables 36027-Meaño',
                interactive: true,
                title: '<img src="styles/legend/TA_27_4.png" /> 36027-Meaño'
            });
var format_TA_06_5 = new ol.format.GeoJSON();
var features_TA_06_5 = format_TA_06_5.readFeatures(json_TA_06_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TA_06_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TA_06_5.addFeatures(features_TA_06_5);
var lyr_TA_06_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TA_06_5, 
                style: style_TA_06_5,
                popuplayertitle: 'Tierras arables 36006-Cambados',
                interactive: true,
                title: '<img src="styles/legend/TA_06_5.png" /> 36006-Cambados'
            });

lyr_TA_61_0.setVisible(true);lyr_TA_51_1.setVisible(true);lyr_TA_46_2.setVisible(true);lyr_TA_28_3.setVisible(true);lyr_TA_27_4.setVisible(true);lyr_TA_06_5.setVisible(true);
var layersList = [lyr_TA_61_0,lyr_TA_51_1,lyr_TA_46_2,lyr_TA_28_3,lyr_TA_27_4,lyr_TA_06_5];











              


// Visibilidades iniciales de arranque (Por defecto arrancamos mostrando Estado de Conservación)
lyr_GoogleSatellite_0.setVisible(true);
lyr_Ortoimagen_1.setVisible(false);
lyr_Catastro_2.setVisible(false);

lyr_ConcellosConcellosConcellosConcellosConcellos_0.setVisible(true);
var layersList = [lyr_GoogleSatellite_0, lyr_Ortoimagen_1, lyr_Catastro_2, lyr_ConcellosConcellosConcellosConcellosConcellos_0,lyr_TA_61_0,lyr_TA_51_1,lyr_TA_46_2,lyr_TA_28_3,lyr_TA_27_4,lyr_TA_06_5];

lyr_TA_61_0.set('fieldAliases', {'dn_oid': 'dn_oid', 'provincia': 'provincia', 'municipio': 'municipio', 'agregado': 'agregado', 'zona': 'zona', 'poligono': 'poligono', 'parcela': 'parcela', 'recinto': 'recinto', 'dn_surface': 'Superficie', 'pend_media': 'pend_media', 'altitud': 'altitud', 'csp': 'csp', 'coef_rega': 'coef_rega', 'uso_sigpac': 'uso_sigpac', 'incidencia': 'incidencia', 'region': 'region', 'layer': 'layer', 'path': 'path', 'REFCAT': 'REFCAT', });
lyr_TA_51_1.set('fieldAliases', {'dn_oid': 'dn_oid', 'provincia': 'provincia', 'municipio': 'municipio', 'agregado': 'agregado', 'zona': 'zona', 'poligono': 'poligono', 'parcela': 'parcela', 'recinto': 'recinto', 'dn_surface': 'Superficie', 'pend_media': 'pend_media', 'altitud': 'altitud', 'csp': 'csp', 'coef_rega': 'coef_rega', 'uso_sigpac': 'uso_sigpac', 'incidencia': 'incidencia', 'region': 'region', 'layer': 'layer', 'path': 'path', 'REFCAT': 'REFCAT', });
lyr_TA_46_2.set('fieldAliases', {'dn_oid': 'dn_oid', 'provincia': 'provincia', 'municipio': 'municipio', 'agregado': 'agregado', 'zona': 'zona', 'poligono': 'poligono', 'parcela': 'parcela', 'recinto': 'recinto', 'dn_surface': 'Superficie', 'pend_media': 'pend_media', 'altitud': 'altitud', 'csp': 'csp', 'coef_rega': 'coef_rega', 'uso_sigpac': 'uso_sigpac', 'incidencia': 'incidencia', 'region': 'region', 'layer': 'layer', 'path': 'path', 'REFCAT': 'REFCAT', });
lyr_TA_28_3.set('fieldAliases', {'dn_oid': 'dn_oid', 'provincia': 'provincia', 'municipio': 'municipio', 'agregado': 'agregado', 'zona': 'zona', 'poligono': 'poligono', 'parcela': 'parcela', 'recinto': 'recinto', 'dn_surface': 'Superficie', 'pend_media': 'pend_media', 'altitud': 'altitud', 'csp': 'csp', 'coef_rega': 'coef_rega', 'uso_sigpac': 'uso_sigpac', 'incidencia': 'incidencia', 'region': 'region', 'layer': 'layer', 'path': 'path', 'REFCAT': 'REFCAT', });
lyr_TA_27_4.set('fieldAliases', {'dn_oid': 'dn_oid', 'provincia': 'provincia', 'municipio': 'municipio', 'agregado': 'agregado', 'zona': 'zona', 'poligono': 'poligono', 'parcela': 'parcela', 'recinto': 'recinto', 'dn_surface': 'Superficie', 'pend_media': 'pend_media', 'altitud': 'altitud', 'csp': 'csp', 'coef_rega': 'coef_rega', 'uso_sigpac': 'uso_sigpac', 'incidencia': 'incidencia', 'region': 'region', 'layer': 'layer', 'path': 'path', 'REFCAT': 'REFCAT', });
lyr_TA_06_5.set('fieldAliases', {'dn_oid': 'dn_oid', 'provincia': 'provincia', 'municipio': 'municipio', 'agregado': 'agregado', 'zona': 'zona', 'poligono': 'poligono', 'parcela': 'parcela', 'recinto': 'recinto', 'dn_surface': 'Superficie', 'pend_media': 'pend_media', 'altitud': 'altitud', 'csp': 'csp', 'coef_rega': 'coef_rega', 'uso_sigpac': 'uso_sigpac', 'incidencia': 'incidencia', 'region': 'region', 'layer': 'layer', 'path': 'path', 'REFCAT': 'REFCAT', });
lyr_TA_61_0.set('fieldImages', {'dn_oid': '', 'provincia': '', 'municipio': '', 'agregado': '', 'zona': '', 'poligono': '', 'parcela': '', 'recinto': '', 'dn_surface': '', 'pend_media': '', 'altitud': '', 'csp': '', 'coef_rega': '', 'uso_sigpac': '', 'incidencia': '', 'region': '', 'layer': '', 'path': '', 'REFCAT': '', });
lyr_TA_51_1.set('fieldImages', {'dn_oid': '', 'provincia': '', 'municipio': '', 'agregado': '', 'zona': '', 'poligono': '', 'parcela': '', 'recinto': '', 'dn_surface': '', 'pend_media': '', 'altitud': '', 'csp': '', 'coef_rega': '', 'uso_sigpac': '', 'incidencia': '', 'region': '', 'layer': '', 'path': '', 'REFCAT': '', });
lyr_TA_46_2.set('fieldImages', {'dn_oid': '', 'provincia': '', 'municipio': '', 'agregado': '', 'zona': '', 'poligono': '', 'parcela': '', 'recinto': '', 'dn_surface': '', 'pend_media': '', 'altitud': '', 'csp': '', 'coef_rega': '', 'uso_sigpac': '', 'incidencia': '', 'region': '', 'layer': '', 'path': '', 'REFCAT': '', });
lyr_TA_28_3.set('fieldImages', {'dn_oid': '', 'provincia': '', 'municipio': '', 'agregado': '', 'zona': '', 'poligono': '', 'parcela': '', 'recinto': '', 'dn_surface': '', 'pend_media': '', 'altitud': '', 'csp': '', 'coef_rega': '', 'uso_sigpac': '', 'incidencia': '', 'region': '', 'layer': '', 'path': '', 'REFCAT': '', });
lyr_TA_27_4.set('fieldImages', {'dn_oid': '', 'provincia': '', 'municipio': '', 'agregado': '', 'zona': '', 'poligono': '', 'parcela': '', 'recinto': '', 'dn_surface': '', 'pend_media': '', 'altitud': '', 'csp': '', 'coef_rega': '', 'uso_sigpac': '', 'incidencia': '', 'region': '', 'layer': '', 'path': '', 'REFCAT': '', });
lyr_TA_06_5.set('fieldImages', {'dn_oid': '', 'provincia': '', 'municipio': '', 'agregado': '', 'zona': '', 'poligono': '', 'parcela': '', 'recinto': '', 'dn_surface': '', 'pend_media': '', 'altitud': '', 'csp': '', 'coef_rega': '', 'uso_sigpac': '', 'incidencia': '', 'region': '', 'layer': '', 'path': '', 'REFCAT': '', });
lyr_TA_61_0.set('fieldLabels', {'dn_oid': 'hidden field', 'provincia': 'inline label - always visible', 'municipio': 'inline label - always visible', 'agregado': 'hidden field', 'zona': 'hidden field', 'poligono': 'hidden field', 'parcela': 'hidden field', 'recinto': 'hidden field', 'dn_surface': 'inline label - always visible', 'pend_media': 'hidden field', 'altitud': 'inline label - always visible', 'csp': 'hidden field', 'coef_rega': 'hidden field', 'uso_sigpac': 'hidden field', 'incidencia': 'hidden field', 'region': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'REFCAT':  'inline label - always visible', });
lyr_TA_51_1.set('fieldLabels', {'dn_oid': 'hidden field', 'provincia': 'inline label - always visible', 'municipio': 'inline label - always visible', 'agregado': 'hidden field', 'zona': 'hidden field', 'poligono': 'hidden field', 'parcela': 'hidden field', 'recinto': 'hidden field', 'dn_surface': 'inline label - always visible', 'pend_media': 'hidden field', 'altitud': 'inline label - always visible', 'csp': 'hidden field', 'coef_rega': 'hidden field', 'uso_sigpac': 'hidden field', 'incidencia': 'hidden field', 'region': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'REFCAT':  'inline label - always visible', });
lyr_TA_46_2.set('fieldLabels', {'dn_oid': 'hidden field', 'provincia': 'inline label - always visible', 'municipio': 'inline label - always visible', 'agregado': 'hidden field', 'zona': 'hidden field', 'poligono': 'hidden field', 'parcela': 'hidden field', 'recinto': 'hidden field', 'dn_surface': 'inline label - always visible', 'pend_media': 'hidden field', 'altitud': 'inline label - always visible', 'csp': 'hidden field', 'coef_rega': 'hidden field', 'uso_sigpac': 'hidden field', 'incidencia': 'hidden field', 'region': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'REFCAT':  'inline label - always visible', });
lyr_TA_28_3.set('fieldLabels', {'dn_oid': 'hidden field', 'provincia': 'inline label - always visible', 'municipio': 'inline label - always visible', 'agregado': 'hidden field', 'zona': 'hidden field', 'poligono': 'hidden field', 'parcela': 'hidden field', 'recinto': 'hidden field', 'dn_surface': 'inline label - always visible', 'pend_media': 'hidden field', 'altitud': 'inline label - always visible', 'csp': 'hidden field', 'coef_rega': 'hidden field', 'uso_sigpac': 'hidden field', 'incidencia': 'hidden field', 'region': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'REFCAT':  'inline label - always visible', });
lyr_TA_27_4.set('fieldLabels', {'dn_oid': 'hidden field', 'provincia': 'inline label - always visible', 'municipio': 'inline label - always visible', 'agregado': 'hidden field', 'zona': 'hidden field', 'poligono': 'hidden field', 'parcela': 'hidden field', 'recinto': 'hidden field', 'dn_surface': 'inline label - always visible', 'pend_media': 'hidden field', 'altitud': 'inline label - always visible', 'csp': 'hidden field', 'coef_rega': 'hidden field', 'uso_sigpac': 'hidden field', 'incidencia': 'hidden field', 'region': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'REFCAT':  'inline label - always visible', });
lyr_TA_06_5.set('fieldLabels', {'dn_oid': 'hidden field', 'provincia': 'inline label - always visible', 'municipio': 'inline label - always visible', 'agregado': 'hidden field', 'zona': 'hidden field', 'poligono': 'hidden field', 'parcela': 'hidden field', 'recinto': 'hidden field', 'dn_surface': 'inline label - always visible', 'pend_media': 'hidden field', 'altitud': 'inline label - always visible', 'csp': 'hidden field', 'coef_rega': 'hidden field', 'uso_sigpac': 'hidden field', 'incidencia': 'hidden field', 'region': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'REFCAT':  'inline label - always visible', });
lyr_TA_06_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});





var wms_layers = [];

var lyr_Ortoimagen_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/pnoa-ma?Request%3DGetCapabilities%26Service%3DWMTS",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortoimagen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_0, 0]);
var format_NucleosPob_1 = new ol.format.GeoJSON();
var features_NucleosPob_1 = format_NucleosPob_1.readFeatures(json_NucleosPob_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NucleosPob_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NucleosPob_1.addFeatures(features_NucleosPob_1);
var lyr_NucleosPob_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NucleosPob_1, 
                style: style_NucleosPob_1,
                popuplayertitle: "NucleosPob",
                interactive: true,
                title: '<img src="styles/legend/NucleosPob_1.png" /> NucleosPob'
            });
var lyr_RedHidrogrficaTramos_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_red_hidrografica_tramos",
    attributions: ' ',
                              params: {
                                "LAYERS": "red_hidrog_tramos",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Red Hidrográfica (Tramos)",
                            opacity: 0.500000,
                            
                            
                          });
              wms_layers.push([lyr_RedHidrogrficaTramos_2, 0]);
var format_RedNaturaZEC_3 = new ol.format.GeoJSON();
var features_RedNaturaZEC_3 = format_RedNaturaZEC_3.readFeatures(json_RedNaturaZEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedNaturaZEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedNaturaZEC_3.addFeatures(features_RedNaturaZEC_3);
var lyr_RedNaturaZEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RedNaturaZEC_3, 
                style: style_RedNaturaZEC_3,
                popuplayertitle: "RedNaturaZEC",
                interactive: true,
                title: '<img src="styles/legend/RedNaturaZEC_3.png" /> RedNaturaZEC'
            });
var format_RedNaturaZEPA_4 = new ol.format.GeoJSON();
var features_RedNaturaZEPA_4 = format_RedNaturaZEPA_4.readFeatures(json_RedNaturaZEPA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedNaturaZEPA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedNaturaZEPA_4.addFeatures(features_RedNaturaZEPA_4);
var lyr_RedNaturaZEPA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RedNaturaZEPA_4, 
                style: style_RedNaturaZEPA_4,
                popuplayertitle: "RedNaturaZEPA",
                interactive: true,
                title: '<img src="styles/legend/RedNaturaZEPA_4.png" /> RedNaturaZEPA'
            });
var format_RedNaturalLIC_5 = new ol.format.GeoJSON();
var features_RedNaturalLIC_5 = format_RedNaturalLIC_5.readFeatures(json_RedNaturalLIC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedNaturalLIC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedNaturalLIC_5.addFeatures(features_RedNaturalLIC_5);
var lyr_RedNaturalLIC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RedNaturalLIC_5, 
                style: style_RedNaturalLIC_5,
                popuplayertitle: "RedNaturalLIC",
                interactive: true,
                title: '<img src="styles/legend/RedNaturalLIC_5.png" /> RedNaturalLIC'
            });
var lyr_11_07_Enp_FiguraProteccionEPSG25830_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ideandalucia.es/services/DERA_g11_patrimonio/wms?",
    attributions: ' ',
                              params: {
                                "LAYERS": "g11_07_Enp_FiguraProteccion",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "11_07_Enp_FiguraProteccion (EPSG:25830)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_11_07_Enp_FiguraProteccionEPSG25830_6, 0]);
var format_ACT06ArenasLimpiezaCauces_7 = new ol.format.GeoJSON();
var features_ACT06ArenasLimpiezaCauces_7 = format_ACT06ArenasLimpiezaCauces_7.readFeatures(json_ACT06ArenasLimpiezaCauces_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACT06ArenasLimpiezaCauces_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACT06ArenasLimpiezaCauces_7.addFeatures(features_ACT06ArenasLimpiezaCauces_7);
var lyr_ACT06ArenasLimpiezaCauces_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACT06ArenasLimpiezaCauces_7, 
                style: style_ACT06ArenasLimpiezaCauces_7,
                popuplayertitle: "ACT06ArenasLimpiezaCauces",
                interactive: true,
                title: '<img src="styles/legend/ACT06ArenasLimpiezaCauces_7.png" /> ACT06ArenasLimpiezaCauces'
            });
var format_ACT05CutarBadenCLeon_8 = new ol.format.GeoJSON();
var features_ACT05CutarBadenCLeon_8 = format_ACT05CutarBadenCLeon_8.readFeatures(json_ACT05CutarBadenCLeon_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACT05CutarBadenCLeon_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACT05CutarBadenCLeon_8.addFeatures(features_ACT05CutarBadenCLeon_8);
var lyr_ACT05CutarBadenCLeon_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACT05CutarBadenCLeon_8, 
                style: style_ACT05CutarBadenCLeon_8,
                popuplayertitle: "ACT05CutarBadenCLeon",
                interactive: true,
                title: '<img src="styles/legend/ACT05CutarBadenCLeon_8.png" /> ACT05CutarBadenCLeon'
            });
var format_ACT04ComaresLlanAlmendra_9 = new ol.format.GeoJSON();
var features_ACT04ComaresLlanAlmendra_9 = format_ACT04ComaresLlanAlmendra_9.readFeatures(json_ACT04ComaresLlanAlmendra_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACT04ComaresLlanAlmendra_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACT04ComaresLlanAlmendra_9.addFeatures(features_ACT04ComaresLlanAlmendra_9);
var lyr_ACT04ComaresLlanAlmendra_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACT04ComaresLlanAlmendra_9, 
                style: style_ACT04ComaresLlanAlmendra_9,
                popuplayertitle: "ACT04ComaresLlanAlmendra",
                interactive: true,
                title: '<img src="styles/legend/ACT04ComaresLlanAlmendra_9.png" /> ACT04ComaresLlanAlmendra'
            });
var format_ACT03PuenteRioBenamargosa_10 = new ol.format.GeoJSON();
var features_ACT03PuenteRioBenamargosa_10 = format_ACT03PuenteRioBenamargosa_10.readFeatures(json_ACT03PuenteRioBenamargosa_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACT03PuenteRioBenamargosa_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACT03PuenteRioBenamargosa_10.addFeatures(features_ACT03PuenteRioBenamargosa_10);
var lyr_ACT03PuenteRioBenamargosa_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACT03PuenteRioBenamargosa_10, 
                style: style_ACT03PuenteRioBenamargosa_10,
                popuplayertitle: "ACT03PuenteRioBenamargosa",
                interactive: true,
                title: '<img src="styles/legend/ACT03PuenteRioBenamargosa_10.png" /> ACT03PuenteRioBenamargosa'
            });
var format_ACT02RBenamarosaAeropuerto_11 = new ol.format.GeoJSON();
var features_ACT02RBenamarosaAeropuerto_11 = format_ACT02RBenamarosaAeropuerto_11.readFeatures(json_ACT02RBenamarosaAeropuerto_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACT02RBenamarosaAeropuerto_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACT02RBenamarosaAeropuerto_11.addFeatures(features_ACT02RBenamarosaAeropuerto_11);
var lyr_ACT02RBenamarosaAeropuerto_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACT02RBenamarosaAeropuerto_11, 
                style: style_ACT02RBenamarosaAeropuerto_11,
                popuplayertitle: "ACT02RBenamarosaAeropuerto",
                interactive: true,
                title: '<img src="styles/legend/ACT02RBenamarosaAeropuerto_11.png" /> ACT02RBenamarosaAeropuerto'
            });
var format_ACT01ComaresCutarLosGallegos_12 = new ol.format.GeoJSON();
var features_ACT01ComaresCutarLosGallegos_12 = format_ACT01ComaresCutarLosGallegos_12.readFeatures(json_ACT01ComaresCutarLosGallegos_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACT01ComaresCutarLosGallegos_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACT01ComaresCutarLosGallegos_12.addFeatures(features_ACT01ComaresCutarLosGallegos_12);
var lyr_ACT01ComaresCutarLosGallegos_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACT01ComaresCutarLosGallegos_12, 
                style: style_ACT01ComaresCutarLosGallegos_12,
                popuplayertitle: "ACT01ComaresCutarLosGallegos",
                interactive: true,
                title: '<img src="styles/legend/ACT01ComaresCutarLosGallegos_12.png" /> ACT01ComaresCutarLosGallegos'
            });

lyr_Ortoimagen_0.setVisible(true);lyr_NucleosPob_1.setVisible(true);lyr_RedHidrogrficaTramos_2.setVisible(true);lyr_RedNaturaZEC_3.setVisible(true);lyr_RedNaturaZEPA_4.setVisible(true);lyr_RedNaturalLIC_5.setVisible(true);lyr_11_07_Enp_FiguraProteccionEPSG25830_6.setVisible(true);lyr_ACT06ArenasLimpiezaCauces_7.setVisible(true);lyr_ACT05CutarBadenCLeon_8.setVisible(true);lyr_ACT04ComaresLlanAlmendra_9.setVisible(true);lyr_ACT03PuenteRioBenamargosa_10.setVisible(true);lyr_ACT02RBenamarosaAeropuerto_11.setVisible(true);lyr_ACT01ComaresCutarLosGallegos_12.setVisible(true);
var layersList = [lyr_Ortoimagen_0,lyr_NucleosPob_1,lyr_RedHidrogrficaTramos_2,lyr_RedNaturaZEC_3,lyr_RedNaturaZEPA_4,lyr_RedNaturalLIC_5,lyr_11_07_Enp_FiguraProteccionEPSG25830_6,lyr_ACT06ArenasLimpiezaCauces_7,lyr_ACT05CutarBadenCLeon_8,lyr_ACT04ComaresLlanAlmendra_9,lyr_ACT03PuenteRioBenamargosa_10,lyr_ACT02RBenamarosaAeropuerto_11,lyr_ACT01ComaresCutarLosGallegos_12];
lyr_NucleosPob_1.set('fieldAliases', {'id_dera': 'id_dera', 'cod_sipob': 'cod_sipob', 'nuc_id': 'nuc_id', 'cod_es': 'cod_es', 'nombre': 'nombre', 'nivel': 'nivel', 'cod_mun': 'cod_mun', 'municipio': 'municipio', 'provincia': 'provincia', });
lyr_RedNaturaZEC_3.set('fieldAliases', {'id_dera': 'id_dera', 'codigoespa': 'codigoespa', 'nombre': 'nombre', 'figura': 'figura', 'superf_ha': 'superf_ha', 'fecha_decl': 'fecha_decl', });
lyr_RedNaturaZEPA_4.set('fieldAliases', {'id_dera': 'id_dera', 'codigoespa': 'codigoespa', 'nombre': 'nombre', 'figura': 'figura', 'superf_ha': 'superf_ha', 'fecha_decl': 'fecha_decl', });
lyr_RedNaturalLIC_5.set('fieldAliases', {'id_dera': 'id_dera', 'codigoespa': 'codigoespa', 'nombre': 'nombre', 'figura': 'figura', 'superf_ha': 'superf_ha', 'fecha_decl': 'fecha_decl', });
lyr_ACT06ArenasLimpiezaCauces_7.set('fieldAliases', {'id': 'id', 'ACT06': 'ACT06', 'IMAGEN06': 'IMAGEN06', });
lyr_ACT05CutarBadenCLeon_8.set('fieldAliases', {'id': 'id', 'ACT05': 'ACT05', 'IMAGEN05': 'IMAGEN05', });
lyr_ACT04ComaresLlanAlmendra_9.set('fieldAliases', {'id': 'id', 'ACT04': 'ACT04', 'IMAGEN04': 'IMAGEN04', });
lyr_ACT03PuenteRioBenamargosa_10.set('fieldAliases', {'id': 'id', 'ACT03': 'ACT03', 'IMAGEN03': 'IMAGEN03', });
lyr_ACT02RBenamarosaAeropuerto_11.set('fieldAliases', {'id': 'id', 'ACT02': 'ACT02', 'IMAGEN02': 'IMAGEN02', });
lyr_ACT01ComaresCutarLosGallegos_12.set('fieldAliases', {'id': 'id', 'ACT01': 'ACT01', 'IMAGEN01': 'IMAGEN01', });
lyr_NucleosPob_1.set('fieldImages', {'id_dera': 'TextEdit', 'cod_sipob': 'TextEdit', 'nuc_id': 'TextEdit', 'cod_es': 'TextEdit', 'nombre': 'TextEdit', 'nivel': 'TextEdit', 'cod_mun': 'TextEdit', 'municipio': 'TextEdit', 'provincia': 'TextEdit', });
lyr_RedNaturaZEC_3.set('fieldImages', {'id_dera': 'TextEdit', 'codigoespa': 'TextEdit', 'nombre': 'TextEdit', 'figura': 'TextEdit', 'superf_ha': 'TextEdit', 'fecha_decl': 'TextEdit', });
lyr_RedNaturaZEPA_4.set('fieldImages', {'id_dera': 'TextEdit', 'codigoespa': 'TextEdit', 'nombre': 'TextEdit', 'figura': 'TextEdit', 'superf_ha': 'TextEdit', 'fecha_decl': 'TextEdit', });
lyr_RedNaturalLIC_5.set('fieldImages', {'id_dera': 'TextEdit', 'codigoespa': 'TextEdit', 'nombre': 'TextEdit', 'figura': 'TextEdit', 'superf_ha': 'TextEdit', 'fecha_decl': 'TextEdit', });
lyr_ACT06ArenasLimpiezaCauces_7.set('fieldImages', {'id': 'TextEdit', 'ACT06': 'TextEdit', 'IMAGEN06': 'ExternalResource', });
lyr_ACT05CutarBadenCLeon_8.set('fieldImages', {'id': 'TextEdit', 'ACT05': 'TextEdit', 'IMAGEN05': 'ExternalResource', });
lyr_ACT04ComaresLlanAlmendra_9.set('fieldImages', {'id': 'TextEdit', 'ACT04': 'TextEdit', 'IMAGEN04': 'ExternalResource', });
lyr_ACT03PuenteRioBenamargosa_10.set('fieldImages', {'id': 'TextEdit', 'ACT03': 'TextEdit', 'IMAGEN03': 'ExternalResource', });
lyr_ACT02RBenamarosaAeropuerto_11.set('fieldImages', {'id': 'TextEdit', 'ACT02': 'TextEdit', 'IMAGEN02': 'ExternalResource', });
lyr_ACT01ComaresCutarLosGallegos_12.set('fieldImages', {'id': 'TextEdit', 'ACT01': 'TextEdit', 'IMAGEN01': 'ExternalResource', });
lyr_NucleosPob_1.set('fieldLabels', {'id_dera': 'no label', 'cod_sipob': 'no label', 'nuc_id': 'no label', 'cod_es': 'no label', 'nombre': 'no label', 'nivel': 'no label', 'cod_mun': 'no label', 'municipio': 'no label', 'provincia': 'no label', });
lyr_RedNaturaZEC_3.set('fieldLabels', {'id_dera': 'no label', 'codigoespa': 'no label', 'nombre': 'no label', 'figura': 'no label', 'superf_ha': 'no label', 'fecha_decl': 'no label', });
lyr_RedNaturaZEPA_4.set('fieldLabels', {'id_dera': 'no label', 'codigoespa': 'no label', 'nombre': 'no label', 'figura': 'no label', 'superf_ha': 'no label', 'fecha_decl': 'no label', });
lyr_RedNaturalLIC_5.set('fieldLabels', {'id_dera': 'no label', 'codigoespa': 'no label', 'nombre': 'no label', 'figura': 'no label', 'superf_ha': 'no label', 'fecha_decl': 'no label', });
lyr_ACT06ArenasLimpiezaCauces_7.set('fieldLabels', {'id': 'no label', 'ACT06': 'no label', 'IMAGEN06': 'no label', });
lyr_ACT05CutarBadenCLeon_8.set('fieldLabels', {'id': 'no label', 'ACT05': 'no label', 'IMAGEN05': 'no label', });
lyr_ACT04ComaresLlanAlmendra_9.set('fieldLabels', {'id': 'no label', 'ACT04': 'no label', 'IMAGEN04': 'no label', });
lyr_ACT03PuenteRioBenamargosa_10.set('fieldLabels', {'id': 'no label', 'ACT03': 'no label', 'IMAGEN03': 'no label', });
lyr_ACT02RBenamarosaAeropuerto_11.set('fieldLabels', {'id': 'no label', 'ACT02': 'no label', 'IMAGEN02': 'no label', });
lyr_ACT01ComaresCutarLosGallegos_12.set('fieldLabels', {'id': 'no label', 'ACT01': 'no label', 'IMAGEN01': 'no label', });
lyr_ACT01ComaresCutarLosGallegos_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
export default class View{
    constructor(){        
        this.map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([143.9044, -6.9353]),
                zoom: 3
            })
        });
    }

    addLayer({arr, str}){
        const iconFeature1 = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat(arr)),
            name: 'Somewhere',
        });
        
        const iconFeature2 = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat(arr)),
            name: 'Somewhere else'
        });
        
          // specific style for that one point
        iconFeature2.setStyle(new ol.style.Style({
            image: new ol.style.Icon({
            //   anchor: [0.5, 46],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Map_marker_font_awesome.svg/50px-Map_marker_font_awesome.svg.png',
            })
        }));
        
        const iconLayerSource = new ol.source.Vector({
            features: [iconFeature1, iconFeature2]
        });
    
        const iconLayer = new ol.layer.Vector({
            source: iconLayerSource,
            // style for all elements on a layer
            style: new ol.style.Style({
                image: new ol.style.Icon({
                // anchor: [0.5, 46],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                src: 'https://openlayers.org/en/v4.6.4/examples/data/icon.png'
                })
            })
        });

        this.map.addLayer(iconLayer);
        this.map.getView().setCenter(str);
        console.log(str);
    }
}
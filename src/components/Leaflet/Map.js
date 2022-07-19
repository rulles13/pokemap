import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
//import { PokemonList } from "../PokemonList";
import L from "leaflet";

const Map = () => {
    const latitude = 51.505;
    const longitude = -0.09;

 //   console.log(PokemonList);
    let dresseurIcon = L.icon({
        iconUrl: "../../dresseurs/dresseur.png",
        iconSize: [50, 50], // size of the icon
        iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
      });

    return (
        <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]} icon={dresseurIcon}>
                <Popup>
                    C'est moi le meilleur dresseur !
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";

const Map = () => {
    const latitude = 51.505;
    const longitude = -0.09;
    const [pokes, setPokes] = useState([]);

    const pokemonsActifs = () => {
        let pokemons = [
            { name: "aspicot", icon: "aspicot.png" },
            { name: "bellsprout", icon: "bellsprout.png" },
            { name: "bulbasaur", icon: "bulbasaur.png" },
            { name: "dratini", icon: "dratini.png" },
            { name: "evoli", icon: "evoli.png" },
            { name: "mankey", icon: "mankey.png" },
            { name: "miaouss", icon: "miaouss.png" },
            { name: "miauler", icon: "miauler.png" },
            { name: "pikachu", icon: "pikachu.png" },
            { name: "rattata", icon: "rattata.png" },
            { name: "ronflex", icon: "ronflex.png" },
            { name: "squirtle", icon: "squirtle.png" }
        ]

        let pokemonList = [];
        let nbrOfPokemons = 10;

        for (let i = 0; i < nbrOfPokemons; i++) {
            let x = Math.floor(Math.random() * pokemons.length)
            pokemonList.push(pokemons[x]);
        }
        setPokes(pokemonList);
    }

    useEffect(() => pokemonsActifs(), []);
    console.log(pokes);

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
            {pokes.map((poke, index) => {
                let pokeIcon = L.icon({
                    iconUrl: `../../pokemons/${poke.icon}`,
                    iconSize: [50, 50],
                    iconAnchor: [5, 50],
                    popupAnchor: [-3, -76],
                });
                let newLatitude = (latitude + (Math.random() -0.5)*0.1);
                let newLongitude = (longitude + (Math.random() -0.5)*0.1);
            
                return (
                    <div key={index}>
                        <Marker position={[newLatitude, newLongitude]} icon={pokeIcon}>

                        </Marker>
                    </div>
                );

            })}
        </MapContainer>
    )
}

export default Map

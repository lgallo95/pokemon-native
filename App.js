import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from "react";
import PokemonCards from "../pokemon-native/Components/PokemonCards"


export default function App() {
  
  const [pokemonData, setPokemonData] = useState([]);
  const url = "https://api.pokemontcg.io/v2/cards";

  useEffect(() => {
    fetch(url, {
      method: "GET",
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:19006",
        "x-api-key": "1bcaf7f8-b735-464a-847f-cc61c3594aa3",
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(function(res) {
        setPokemonData(res.data)
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <PokemonCards pokemonData={pokemonData}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'crimson',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

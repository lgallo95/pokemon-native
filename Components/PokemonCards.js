import { StyleSheet, Text, View,ScrollView, Button } from "react-native";
import React, { useState, useEffect } from "react";
import PokemonData from "../Components/PokemonData";
import AsyncStorage from "@react-native-async-storage/async-storage"; 



export default function Dataset (props) {
  const { pokemonData } = props;
  const [pokemonList, setPokemonList] = useState(true);


  // const item = AsyncStorage.getItem("FavPokemon")

  // const [pokeFavList, setPokeFavList] = useState( ()=> {

  //   return item ? item.then(res => JSON.parse(res)).then(res => setPokeFavList(res)): [];

  // })

/////////////////////////////////////////////////////

const [pokeFavList, setPokeFavList] = useState([])

  useEffect(() => {
    AsyncStorage.getItem("FavPokemon")
        .then(res => JSON.parse(res))
        .then(res => {if(res) setPokeFavList(res);})
  }, [])
  


  // console.log(pokemonData)
// const pokeState = () => {
//   AsyncStorage.getItem("FavPokemon")
//       .then(res => JSON.parse(res))
//       .then(res => setPokeFavList(res))
//   }


    

////////////////////////////////////////////////////

  const filterFav = () => {
    setPokemonList(false);
  };

  const unFilterFav = () => {
    setPokemonList(true);
  };

  const normalData = pokemonData.map((pokemon) => {
    return (
      <PokemonData
        pokemonData={pokemon}
        key={pokemon.id}

        ///////////////////////////////
        pokeFavList = {pokeFavList}
        setPokeFavList = { setPokeFavList }


        //////////////////////////////
      />
    );
  });

  const favData = pokeFavList.map((pokemon) => {
    return (
      <PokemonData
        pokemonData={pokemon}
        key={pokemon.id}
        pokeFavList = {pokeFavList}
        setPokeFavList = { setPokeFavList }
      />
    );
  });


  
  return (
  <View>
    <View style = {{position:"absolute"}}>
    <Button title = "Favs" onPress={filterFav}/>
    <Button title = "Back" onPress={unFilterFav} />
    </View>
  <ScrollView style = {{marginTop: 100 }}>
      {pokemonList === true ? normalData : favData}
  </ScrollView>
  </View>
  );
  
}




// export default function Dataset(props) {
//   const { pokemonData } = props;
//   const [pokemonList, setPokemonList] = useState(true);


//   const filterFav = () => {
//     setPokemonList(false);
//   };

//   const unFilterFav = () => {
//     setPokemonList(true);
//   };

//   const normalData = pokemonData.map((pokemon) => {
//     return (
//       <PokemonData
//         pokemonData={pokemon}
//         key={pokemon.id}
//       />
//     );
//   });


//   return (
//   <ScrollView style = {{marginTop: 100}}>
//       {pokemonList === true ? normalData : favData}
//   </ScrollView>);
// }




  // //////////////////////////////////////////////////////////////////////////////////

  // const item = AsyncStorage.getItem("FavPokemon")

  // // console.log(item)

  // // const emptyList = AsyncStorage.setItem("FavPokemon",JSON.stringify([]))

  // const [pokeFavList, setPokeFavList] = useState( ()=> {

  //   // return item ? item.then(res => JSON.parse(res)).then(res => setPokeFavList(res)) : [] ;

  // })

  // ////////////////////////////////////////////////////////////////////////////////////////////////
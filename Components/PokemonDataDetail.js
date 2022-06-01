import React, {useState, useEffect} from "react";
import { View, Text, Image, Button, Modal, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; 




export default function PokemonDataDetail(props) {
    const { pokemonData, pokeFavList, setPokeFavList } = props;
    const pokemonDataS = JSON.stringify(pokemonData)
 

    const addToFav = async () => {
        const doesExist = pokeFavList.find((x) => x.id === pokemonData.id);

        if(!doesExist){
            const newArray = [...pokeFavList, pokemonData]
            await AsyncStorage.setItem("FavPokemon",JSON.stringify(newArray))
            .then(res => {
                setPokeFavList(newArray)
            })
        }
    }

    // const [favArray, setFavArray] =  useState(() => {
    //     return item ? JSON.parse(item) : [];
    // })

    const removeFav = () => {
        const newArray = pokeFavList.filter((x) => x.id !== pokemonData.id);
        AsyncStorage.setItem("FavPokemon", JSON.stringify(newArray));
        setPokeFavList(newArray)
    }



    return (
     <View style = {{ backgroundColor: "lightgray"}}>
         <Text> {`Name: ${pokemonData.name}`} </Text> 
         <Text> {`Pokedex Number: ${pokemonData.nationalPokedexNumbers}`} </Text> 
         <Text> {`Pokemon Type: ${pokemonData.types} `} </Text>
         <Text> {`Credited Artist: ${pokemonData.artist} `} </Text>
         <Text> {pokemonData.level ? `Level: ${pokemonData.level}` : 'Level N/A for this card.'} </Text>
         <Text> {`HP: ${pokemonData.hp} `} </Text>
         <Text> {`Rarity: ${pokemonData.rarity} `} </Text>
         <Text> {`Main Ability: ${pokemonData.attacks[0].name}`} </Text>
         <Button title = "Favorite" color="blue" onPress={addToFav}/>
         <Button title = "Delete" color="yellow" onPress={removeFav}/>
     </View>
    );
  }
  



      // const listState = () => {
    //     AsyncStorage.getItem("FavPokemon")
    //     .then(res => JSON.parse(res))
    //     .then(res => setFavArray(res))
    // }


    // const addArray = () => {
    //     // const doesExist = favArray.find((x) => x.id === pokemonDataS.id);
        
    //     // if(!doesExist){

            
    //         // const newArray = [...favArray, pokemonDataS];
    //         AsyncStorage.setItem("FavPokemon", pokemonDataS)
    //         .then(res => JSON.parse(res))
    //         .then(res => setFavArray(res))

    //         // setFavArray(newArray)
    //         alert("Added successfully")
    //     // }
    // }

    // console.log(favArray)
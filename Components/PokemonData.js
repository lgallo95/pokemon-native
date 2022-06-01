import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal, Button,} from "react-native";
import PokemonDataDetail from "./PokemonDataDetail";
import { AntDesign  } from "@expo/vector-icons";

export default function PokemonData(props) {
  const { pokemonData, pokeFavList, setPokeFavList } = props;
  const [modalOpen, setModalOpen] = useState(false);
  let pic = { uri: `${pokemonData.images.large}` };

  return (
    <View style={{ resizeMode: "contain", flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "gray", paddingTop: 25}}>
      <Modal visible={modalOpen} animationType = "slide" transparent = {true}>
        <View style = {{flex: 1, justifyContent: "center", alignItems: "center", marginTop: 22,}}>
          <View style = {{backgroundColor: "crimson", borderRadius: 20, padding: 15, alignItems: "center",}}>
          <PokemonDataDetail pokemonData = {pokemonData} pokeFavList = {pokeFavList} setPokeFavList = { setPokeFavList }/>
          <AntDesign  name="closecircle" size={25} onPress = {() => setModalOpen(false)} style = {{ marginTop: 10}}/>
          </View>
        </View>
      </Modal>

      <Text style={{ fontSize: 35, fontWeight: "bold", textAlign: "center", justifyContent: "center", alignItems: "center", borderWidth: 3, borderColor: "blue", backgroundColor: "yellow", marginLeft: 20, marginRight: 20, }} >
        {pokemonData.name}
      </Text>
      <TouchableOpacity onPress = {() => setModalOpen(true)}>
        <Image source={pic} style={{ width: 300, height: 500, resizeMode: "contain" }} />
      </TouchableOpacity>
    </View>
  );
}












// return (
//   <View style={{ resizeMode: "contain", flex: 1, justifyContent: "center", alignItems: "center", marginTop: 100, }}>
//     <Text style={{fontSize: 35,fontWeight: "bold",textAlign: "center",justifyContent: "center",alignItems: "center",borderWidth: 3,borderColor: "blue",backgroundColor: "yellow",marginLeft: 20,marginRight: 20,}}>
//       {pokemonData.name}
//     </Text>

//     <TouchableOpacity onPress={onTap}>
//       <Image source={pic} style={{ width: 300, height: 500, resizeMode: "contain" }}/>
//     </TouchableOpacity>

//       <View style = {{ backgroundColor: 'green', height: 350, position: "absolute", width: 300 ,}}>
//         <PokemonDataDetail />
//       </View>
//   </View>
// );
// }


// return (
//   <View style={{ resizeMode: "contain", flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "gray", paddingTop: 25}}>
//     <Modal visible={modalOpen} animationType = "slide" style = {{backgroundColor: "green"}}>
//       <View style = {{ backgroundColor: "blue", justifyContent: "center", alignItems: "center", marginTop: 250 }}>
//       <MaterialIcons name="close" size={24} onPress = {() => setModalOpen(false)}/>
//         <PokemonDataDetail />
//       </View>
//     </Modal>

//     <Text style={{ fontSize: 35, fontWeight: "bold", textAlign: "center", justifyContent: "center", alignItems: "center", borderWidth: 3, borderColor: "blue", backgroundColor: "yellow", marginLeft: 20, marginRight: 20, }} >
//       {pokemonData.name}
//     </Text>
//     <TouchableOpacity onPress = {() => setModalOpen(true)}>
//       <Image source={pic} style={{ width: 300, height: 500, resizeMode: "contain" }} />
//     </TouchableOpacity>
//   </View>
// );
// }
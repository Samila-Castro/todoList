import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./styles";
import React from "react";
//import Checkbox from 'expo-checkbox';
import Trash from ".././../assets/trash.svg";
import BouncyCheckbox from "react-native-bouncy-checkbox";


export function  Task(){
  return(
    <View style={style.container}>
      <BouncyCheckbox
        size={20}
        fillColor="#4EA8DE"
        unFillColor="transparent"
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked: boolean) => {console.log(isChecked)}}
      />
      <View style={style.taskDescriptionContainer}>
        <Text style={style.taskDescription}>
          Limpar casa impar casa impar casa impar  impar impar impar impar sdbhdbchjzbx
        </Text>
      </View>
      <TouchableOpacity style={style.button}>
        <Trash/>
      </TouchableOpacity>
    </View>
  );
}
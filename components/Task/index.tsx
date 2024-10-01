import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./styles";
import React from "react";
//import Checkbox from 'expo-checkbox';
import Trash from ".././../assets/trash.svg";
import BouncyCheckbox from "react-native-bouncy-checkbox";


interface TaskProps{
  description: String;
  onRemoveTask: () => void;
  onTaskcompletion: (isChecked: boolean) => void;
}

export function  Task({ description, onRemoveTask,onTaskcompletion }: TaskProps){
  return(
    <View style={style.container}>
      <BouncyCheckbox
        size={20}
        fillColor="#4EA8DE"
        unFillColor="transparent"
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked: boolean) => {onTaskcompletion(isChecked)}}
      />
      <View style={style.taskDescriptionContainer}>
        <Text style={style.taskDescription}>
          {  description }
        </Text>
      </View>
      <TouchableOpacity 
        style={style.button}
        onPress={onRemoveTask}
      >
        <Trash/>
      </TouchableOpacity>
    </View>
  );
}
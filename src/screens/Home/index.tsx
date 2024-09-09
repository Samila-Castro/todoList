import { Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import {style} from "./styles";
import Logo from "../../../assets/logo.svg";
import Plus from "../../../assets/plus.svg";
import { useState } from "react";
import { Task } from "../../../components/Task";

export function Home(){
  const [isInputFocused, setInputFocused] = useState<Boolean>(false);

  function handleFocus(){
    setInputFocused(true);
  }

  function handleBlur(){
    setInputFocused(false);
  }
  return(
    <View style={style.wrapper}>
      <View style={style.header}>
        <Logo width="111" height="32"/>
      </View>
      <View style={style.mainContent}>
        <View style={style.form}>
          <TextInput
            style={style.input }
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#F2F2F2"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <TouchableOpacity style={style.button}>
            <Text style={style.textButton}>
              <Plus/>
            </Text>
          </TouchableOpacity>
        </View>
        <View 
          style={style.infoContainer}
        >
          <View style={style.createdTasksContainer}>
            <Text style={style.createdTasksLabel}>Criadas</Text>
            <TouchableOpacity 
              style={style.createdTasksAmount}
              activeOpacity={5}
            >
              <Text style={style.content}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={style.finishedTasksContainer}>
            <Text style={style.fineshedTasksLabel}>Concluídas</Text>
            <TouchableOpacity 
              style={style.fineshedTasksAmount}
              activeOpacity={5}
            >
              <Text style={style.content}>6</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Task/>
      </View>
    </View>
  );
}

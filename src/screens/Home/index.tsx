import { Text, View, Image, TextInput, TouchableOpacity, ToastAndroid, FlatList, Alert } from "react-native";
import {style} from "./styles";
import Logo from "../../../assets/logo.svg";
import Plus from "../../../assets/plus.svg";
import Clipboard from "../../../assets/clipboard.svg";
import { useState } from "react";
import { Task } from "../../../components/Task";
import { Divider } from '@rneui/themed';

interface Tasks {
  checked?: Boolean,
  description: string,
  id: number,
}

export function Home(){
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [completedTasksAmount, setCompletedTasksAmount] = useState(0);
  const [taskDescription, setTaskDescription] = useState<string>("")
  const [inputOnFocus, setInputOnFocus] = useState<Boolean>(false);

  function handleNewTaskAdd(description: string){
    if(tasks.some(item => item.description === description) ){
      Alert.alert("Já existe uma tarefa com essa descrição!");
      return setTaskDescription("");
    }
    const newTask: Tasks = {
      description: description,
      id: Math.random(),
    };

    setTasks(prevState => [...prevState, newTask]);
    setTaskDescription("");
  }

  function handleToggleTaskCompletion(id: number, isChecked?: boolean){
    const newTasks = tasks.map(task => task.id === id ? {...task, checked: isChecked} : task)
    setTasks(newTasks);

    if(isChecked){
      setCompletedTasksAmount(completedTasksAmount + 1)
    }else{
      setCompletedTasksAmount(completedTasksAmount - 1)
    }
  }

  function handleTaskRemove(description: string){
    Alert.alert("Deletar tarefa", `Deletar a tarefa ${description}?`, [
      {
        text: "sim",
        onPress: () => setTasks(prevState => prevState.filter(task => task.description !== description))
      },
      {
        text: "não",
        style: "cancel"
      }
    ]);
  }

  function handleOnFocusInput(state : Boolean){
    setInputOnFocus(state);
  };

  function handleoutFocusInput(state : Boolean){
    setInputOnFocus(state);
  };
  return(
    <View style={style.wrapper}>
      <View style={style.header}>
        <Logo width="111" height="32"/>
      </View>
      <View style={style.mainContent}>
        <View style={style.form}>
          <TextInput
            style={inputOnFocus ? style.inputOnFocus : style.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={(text) => setTaskDescription(text)}
            defaultValue={taskDescription}
            multiline
            onFocus={()=> handleOnFocusInput(true)}
            onBlur={()=> handleoutFocusInput(false)}
            
          />
          <TouchableOpacity 
            style={style.button}
            onPress={() => handleNewTaskAdd(taskDescription)}
          >
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
              <Text style={style.content}>{tasks.length}</Text>
            </TouchableOpacity>
          </View>
          <View style={style.finishedTasksContainer}>
            <Text style={style.fineshedTasksLabel}>Concluídas</Text>
            <TouchableOpacity 
              style={style.fineshedTasksAmount}
              activeOpacity={5}
            >
              <Text style={style.content}>{completedTasksAmount}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Divider/>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.description}
          renderItem={({item}) => (
            <Task
              key={item.id}
              description={item.description}
              onRemoveTask={() => handleTaskRemove(item.description)}
              onTaskcompletion={(checked: boolean) => handleToggleTaskCompletion(item.id, checked)} 
            />
          )}
          ListEmptyComponent={() => (
            <View style={style.listEmpty}>
              <Clipboard/>
              <Text style={style.listEmptyText}>
                Você ainda não tem tarefas cadastradas.
                Crie tarefas e organize seus itens a fazer.
            </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

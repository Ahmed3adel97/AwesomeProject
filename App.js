import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
export default function App() {
  const [name, setName] = useState('ahmed');
  const [arr, setArr] = useState([
    {text:"buy a coffe", key:'1'},
    {text:"buy a book", key:'2'},
  ])

  const pressHandler = (key) => {
    setArr(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };
  const submitHandler = (input)=>{
    setArr((prevTodos) =>{
      return [
          {text: input, key:Math.random().toString() },
          ...prevTodos
      ]
    })

  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
      <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
            <FlatList
              data={arr}
              renderItem={
                ({item}) => (
                  <TodoItem  item={item} pressHandler={pressHandler}/>
                )
              } 
            />
        </View>
          <StatusBar style="auto" />
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content:{
    padding:40
  },
  list:{
    marginTop:20,
    fontSize:40
  }
  
});

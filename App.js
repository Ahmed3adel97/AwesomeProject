import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
import firebase from './firestore'
export default function App() {
  const [name, setName] = useState('ahmed');
  const [arr, setArr] = useState([
    {text:"buy a coffe", key:'1'},
    {text:"buy a book", key:'2'},
  ])
  const [blogs, setBlogs] = useState([])
  
  const fetchBlogs = async()=>{
    const list = []
    const response = firebase.firestore().collection('news')
    const data= await response.get();
    data.forEach((doc) => {
      list.push(doc.data())
    })

    setBlogs([...list])

    // for( const item of data.docs){
    //   console.log(item.data())
    //   setBlogs([...blogs,1])
    // }


  }

  useEffect(  () => {
  fetchBlogs();  
  },[]);

  const pressHandler = (key) => {
    setArr(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };
  const submitHandler =async (input)=>{
    setArr((prevTodos) =>{
      return [
          {text: input, key:Math.random().toString() },
          ...prevTodos
      ]
    })
    console.log(blogs.length)
    console.log(blogs)
  }
  return (
    <TouchableWithoutFeedback onPress={()=>
      Keyboard.dismiss() 
    }>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
              <FlatList
                data={blogs}
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
    </TouchableWithoutFeedback>
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

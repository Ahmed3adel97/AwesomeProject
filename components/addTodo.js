import React,{useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Button} from 'react-native'

export default function ({ submitHandler }) {
    const [text, setText] = useState("");
    const changeHandler = (val) => {
        setText(val);
      };
    return (
        <View>
           <TextInput
             style={styles.input}
             placeholder="add your task"
             onChangeText={changeHandler} 

           /> 
           <Button title="add task" color="coral" onPress={() => submitHandler(text)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:3,
        borderBottomColor:"#ddd"
    }
})
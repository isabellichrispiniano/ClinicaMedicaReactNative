import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Estilo from "./Estilo";

export default props=>{
    const delta = props.max - props.min + 1
    const aleatoria = parseInt (Math.random() * delta + props.min)
    console.warn(aleatoria)
    return(
       <View>
          <Text style={style.txtG}>
            Número aleatório {aleatoria}
          </Text>
       </View>
      )
}

const style = StyleSheet.create(
    {
        txtG:{
            fontSize: 30,
            textAlign:'center',
            margin:10
        }
    }
)
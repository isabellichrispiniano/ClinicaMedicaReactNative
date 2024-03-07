import React from "react";
import { StyleSheet, Text,View } from 'react-native';
import Estilo from './components/Estilo';

export default (props)=>{
    console.warn(props)
    return(
        <View style={Estilo.fundo}>
        <Text style={style.txtG}>O número {props.maior} é maior que o número {props.menor} </Text>
        </View>
    )
}

const style = StyleSheet.create(
    {
        txtG:{
            fontSize: 20,
            textAlign:'center'
            
        }
    }
)
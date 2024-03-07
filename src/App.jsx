import React from "react";
import { StyleSheet, Text,View } from 'react-native';
import Estilo from './components/Estilo';
import MinMax from "./MinMax";
import Aleatorio from "./components/Aleatorio";
import Texto from "./components/Texto";

export default ()=>{
    return(
        <View style={Estilo.fundo}>
           <Texto/>
           <Aleatorio min={1} max={60}/>
           <Aleatorio min={1} max={60}/>
           <Aleatorio min={1} max={60}/>
           <Aleatorio min={1} max={60}/>
           <Aleatorio min={1} max={60}/>
           <Aleatorio min={1} max={60}/>
        </View>
       
    )
}

const style = StyleSheet.create(
    {
        txtG:{
            fontSize: 20,
            textAlign:'center',
        }
    }
)
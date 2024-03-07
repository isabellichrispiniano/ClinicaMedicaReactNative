import React from "react";
import { StyleSheet , View, Text,} from 'react-native';
import Estilo from "./Estilo";

export default props=>{
    return(
        <View>
            <Text style={style.txtG}>Aleatório</Text>
        </View>
    )
}

const style = StyleSheet.create(
    {
        txtG:{
            fontSize: 50,
            margin: 80 ,
            textAlign:'center',
            color:"white"
        }
    }
)
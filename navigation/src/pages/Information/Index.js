import React from "react";
import { View, Text } from "react-native";

export default function Information({route}){
    return(
        <View>
            <Text>Nome: {route.params?.nome}</Text>
            <Text>Telefone: {route.params?.telefone}</Text>
            <Text>Endereco: {route.params?.endereco}</Text>
            <Text>n: {route.params?.numero}</Text>
            <Text>Profissao:{route.params?.profissao}</Text>
            <Text>email: {route.params?.email}</Text>
        </View>
    )
}
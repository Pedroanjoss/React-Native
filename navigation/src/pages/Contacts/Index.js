import React from "react";
import { View, Text } from "react-native";

export default function Contacts({navigation}){
    return(
        <View style={{marginTop:60}}>
           <View>
              <Text>Nome: Joao da Silva</Text>
              <Text>Telefone: (11) 98976-7744</Text>
              <Text onPress={() => navigation.navigate('Information', {
                nome: "Joao da Silva",
                telefone:" (11) 98976-7744",
                endereco: "Rua das Flores",
                numero: "769",
                profissao: "Carpinteiro",
                email: "joaosilva@carpinteiro.com.br",
              })}>Information...</Text>
           </View>
           <View  style={{marginTop:20}}>
              <Text>Nome: Amanda da Silva</Text>
              <Text>Telefone: (11) 94563-4477</Text>
              <Text onPress={() => navigation.navigate('Information')}>Information...</Text>
           </View>
        </View>
    )
}
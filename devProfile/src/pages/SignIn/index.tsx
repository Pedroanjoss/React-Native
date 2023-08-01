import React from "react";
import { Container, Content, Title } from "./styles";
import { Input } from "../../components/form/input";
import { ScrollView } from "react-native";

export const SignIn: React.FunctionComponent = () => {
    return (
        <ScrollView 
          keyboardShouldPersistTaps='handled'
          contentContainerStyle={{ flex:1 }}
        >
            <Container>
                <Content>
                    <Title>Faça seu login</Title>
                    <Input placeholder="Email"></Input>
                    <Input placeholder="Senha"></Input>
                </Content>
            </Container>
        </ScrollView>
    )
}
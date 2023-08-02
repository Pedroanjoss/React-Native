import React from "react";
import { Container, Content, Title } from "./styles";
import { Input } from "../../components/form/input";
import { ScrollView } from "react-native";
import { Button } from "../../components/form/Button";

export const SignUp: React.FunctionComponent = () => {
    return (
        <ScrollView 
          keyboardShouldPersistTaps='handled'
          contentContainerStyle={{ flex:1 }}
        >
            <Container>
                <Content>
                    <Title>Crie sua conta</Title>
                    <Input placeholder="Nome completo"></Input>
                    <Input placeholder="Email"></Input>
                    <Input placeholder="Senha"></Input>

                    <Button title="Criar conta"/>
                </Content>
            </Container>
        </ScrollView>
    )
}
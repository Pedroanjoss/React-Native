import React from "react";
import { Container, Content, Logo, Title } from "./styles";
import { Input } from "../../components/form/input";
import { ScrollView } from "react-native";
import { Button } from "../../components/form/Button";
import logo from "../../assets/logo.png"


export const SignIn: React.FunctionComponent = () => {
    return (
        <ScrollView 
          keyboardShouldPersistTaps='handled'
          contentContainerStyle={{ flex:1 }}
        >
            <Container>
                <Content>
                    <Logo source={logo}/>
                    <Title>Faça seu login</Title>
                    <Input placeholder="Email"></Input>
                    <Input placeholder="Senha"></Input>

                    <Button title="Entrar"/>
                </Content>
            </Container>
        </ScrollView>
    )
}
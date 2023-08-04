import React from "react";
import { BackToSignIn, BackToSignInTitle, Container, Content, Icon, Logo, Title } from "./styles";
import { Input } from "../../components/form/input";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Button } from "../../components/form/Button";
import logo from "../../assets/logo.png"

export const SignUp: React.FunctionComponent = () => {
    return (
        <KeyboardAvoidingView enabled style={{ flex: 1}} behavior={ Platform.OS === 'ios' ? 'padding': undefined }>
        <ScrollView 
          keyboardShouldPersistTaps='handled'
          contentContainerStyle={{ flex:1 }}
        >
            <Container>
                <Content>
                    <Logo source={logo}/>
                    <Title>Crie sua conta</Title>
                    <Input placeholder="Nome completo"></Input>
                    <Input placeholder="Email"></Input>
                    <Input placeholder="Senha"></Input>

                    <Button title="Criar conta"/>
                </Content>
            </Container>
        </ScrollView>
            <BackToSignIn>
                <Icon name="arrow-left"/>
                <BackToSignInTitle>Voltar para logon</BackToSignInTitle>
            </BackToSignIn>
        </KeyboardAvoidingView>
    )
}
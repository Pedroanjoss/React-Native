import React from "react";
import { Container, Content, CreateAccount, ForgotPasswordButton, ForgotPasswordTitle, Icon, Logo, Title, CreateAccountTitle } from "./styles";
import { Input } from "../../components/form/input";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { Button } from "../../components/form/Button";
import logo from "../../assets/logo.png"


export const SignIn: React.FunctionComponent = () => {
    return (
        <KeyboardAvoidingView enabled style={{ flex: 1}} behavior={ Platform.OS === 'ios' ? 'padding': undefined }>
            <ScrollView 
            keyboardShouldPersistTaps='handled'
            contentContainerStyle={{ flex:1 }}
            >
                <Container>
                    <Content>
                        <Logo source={logo}/>
                        <View>
                          <Title>Faça seu login</Title>
                        </View>
                        <Input placeholder="Email"></Input>
                        <Input placeholder="Senha"></Input>

                        <Button title="Entrar"/>

                        <ForgotPasswordButton>
                            <ForgotPasswordTitle>Esqueci minha senha </ForgotPasswordTitle>
                        </ForgotPasswordButton>
                    </Content>
                </Container>
            </ScrollView>

            <CreateAccount>
                <Icon name="log-in"/>
                <CreateAccountTitle>Criar uma conta</CreateAccountTitle>
            </CreateAccount>

        </KeyboardAvoidingView>
    )
}
import React from "react";
import { BackToSignIn, BackToSignInTitle, Container, Content, Icon, Logo, Title } from "./styles";
import { InputControl } from "../../components/form/inputControl";
import { Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Button } from "../../components/form/Button";
import logo from "../../assets/logo.png"
import { useNavigation } from "@react-navigation/native";
import { useForm, FieldValues} from "react-hook-form";
import { api } from "../../services/api";

interface ScreenNavigationProp {
    goBack: () => void
}


interface IformInputs{
    [name: string]: any
}

export const SignUp: React.FunctionComponent = () => {
    const {handleSubmit, control} = useForm<FieldValues>()

    const handleSignUp = async (form: IformInputs) => {
        const data = {
            name: form.name,
            email: form.email,
            password: form.password,
        };
    
        try{
            await api.post("users", data);
            Alert.alert("Cadastro realizado", "Você já pode fazer login na aplicação")
        }catch (error){
            Alert.alert("Erro no cadastro", "Ocorreu um erro ao fazer o cadstro. Tente novamente")
        }
    
    }

    const {goBack} = useNavigation<ScreenNavigationProp>()

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
                    <InputControl name="name" autoCapitalize="words" autoCorrect={false} control={control}  placeholder="Nome"></InputControl>
                    <InputControl name="email" autoCapitalize="none" autoCorrect={false} keyboardType="email-address" control={control}  placeholder="Email"></InputControl>
                    <InputControl name="password" autoCapitalize="none" autoCorrect={false} control={control} placeholder="Senha" secureTextEntry></InputControl>

                    <Button title="Criar conta"/>
                </Content>
            </Container>
        </ScrollView>
            <BackToSignIn onPress={() => goBack()}>
                <Icon name="arrow-left"/>
                <BackToSignInTitle>Voltar para logon</BackToSignInTitle>
            </BackToSignIn>
        </KeyboardAvoidingView>
    )
}
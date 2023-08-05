import React from "react";
import { Container, Content, CreateAccount, ForgotPasswordButton, ForgotPasswordTitle, Icon, Logo, Title, CreateAccountTitle } from "./styles";
import { Input } from "../../components/form/input";
import { ScrollView, KeyboardAvoidingView, Platform, View } from "react-native";
import { useForm, FieldValues} from "react-hook-form";
import { Button } from "../../components/form/Button";
import logo from "../../assets/logo.png"
import { useNavigation } from "@react-navigation/native";
import { InputControl } from "../../components/form/inputControl";


interface ScreenNavigationProp {
    navigate: (screen: string) => void
}

interface IformInputs{
    [name: string]: any
}

export const SignIn: React.FunctionComponent = () => {
    const {handleSubmit, control} = useForm<FieldValues>()


    const {navigate} = useNavigation<ScreenNavigationProp>()

    const handleSignIn = (form: IformInputs) => {
        const data = {
            email: form.email,
            password: form.password,
        };

        console.log(data)
    }

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
                        <InputControl name="email" autoCapitalize="none" autoCorrect={false} keyboardType="email-address" control={control}  placeholder="Email"></InputControl>
                        <InputControl name="password" autoCapitalize="none" autoCorrect={false} control={control} placeholder="Senha" secureTextEntry></InputControl>

                        <Button title="Entrar" onPress={() => handleSubmit(handleSignIn)}/>

                        <ForgotPasswordButton>
                            <ForgotPasswordTitle>Esqueci minha senha </ForgotPasswordTitle>
                        </ForgotPasswordButton>
                    </Content>
                </Container>
            </ScrollView>

            <CreateAccount onPress={() => {
                navigate("SignUp")
            }}>
                <Icon name="log-in"/>
                <CreateAccountTitle>Criar uma conta</CreateAccountTitle>
            </CreateAccount>

        </KeyboardAvoidingView>
    )
}
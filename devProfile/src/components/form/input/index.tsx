import React from "react";
import { Container } from "../../../pages/Home/styles";
import { TextInputProps } from "react-native";
import theme from "../../../global/styles/theme";



export const Input: React.FunctionComponent<TextInputProps>= ({...otherProps}) => {
    return (
        <Container placeholderTextColor={theme.colors.gray500} {...otherProps}/>
    )
}

//o otherProps passa todas as props que um input pode receber, deixando para quando ele for utilizado o componente ter esse recurso
import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

//qunado o metodo importa propriedades deve usar o parentesse ao inves do ponto

export const Container = styled(TextInput)`
    width: 100%;
    padding: 18px 16px;
    background-color: ${({theme}) => theme.colors.gray800};
    color: ${({theme}) => theme.colors.light};
    border-radius: 5px;
    margin-bottom: 16px;
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`
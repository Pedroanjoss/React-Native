import React from 'react'
import { Container, Header, UserWrapper, UserInfo, UserAvatarButton, UserAvatar, UserInfoDetail, UserGreeting, UserName } from './styles'
import avatarDefault from "../../assets/avatar1.png"




export const Home: React.FunctionComponent = () => {
    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <UserAvatarButton onPress={() => {}}>
                            <UserAvatar source={avatarDefault}/>
                        </UserAvatarButton>
                        <UserInfoDetail>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Pedro</UserName>
                        </UserInfoDetail>
                    </UserInfo>
                </UserWrapper>
            </Header>
        </Container>
    )
}

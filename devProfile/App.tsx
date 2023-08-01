
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home } from './src/pages/Home';
import { SignIn } from './src/pages/SignIn';
import theme from './src/global/styles/theme';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from "@expo-google-fonts/roboto"

 const App: React.FunctionComponent = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,Roboto_700Bold
  });
  
  if(!fontsLoaded){
    return null
  }

  return (
    
    <ThemeProvider theme={theme}>
       <SignIn></SignIn>
    </ThemeProvider>
  );
}

export default App



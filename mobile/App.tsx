import{StatusBar} from 'react-native';
import{useFonts,Inter_400Regular,Inter_600SemiBold, Inter_700Bold, Inter_900Black} from '@expo-google-fonts/inter';

import { Home } from './src/screnns';
import{Loading} from './src/components/Loading';
import {Background} from './src/components/Background'


export default function App() {
  const[fonstsLoaded] = useFonts({Inter_400Regular,Inter_600SemiBold, Inter_700Bold, Inter_900Black});




  return (
    <Background>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />

      {fonstsLoaded ? <Home/>: <Loading /> }

    </Background>
  );
}






  

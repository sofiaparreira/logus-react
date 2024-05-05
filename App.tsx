import { NativeBaseProvider, StatusBar } from 'native-base';
import { TEMAS } from './src/styles/temas';
import SingUp1 from './src/Pages/Authenticated/SingUp1';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.purple[700]}/>
      <SingUp1 />
    </NativeBaseProvider>
  );
}

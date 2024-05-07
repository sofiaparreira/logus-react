import { NativeBaseProvider, StatusBar } from 'native-base';
import { TEMAS } from './src/styles/temas';
import Rotas from './src/routes/rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.purple[700]}/>
      <Rotas />
    </NativeBaseProvider>
  );
}

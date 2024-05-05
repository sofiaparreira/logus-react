import { VStack, Image, Text, Heading } from "native-base"
import { TEMAS } from '../../styles/temas';
import Logo from '../../assets/logo.jpg'

export default function SingUp1() {
    return(
        <VStack flex={1} alignItems='center' p={5} >
            <Heading style={{ marginVertical: 32}}>Bem - Vindo ao Lógus</Heading>
            <Image 
                style={{ width: 240, height: 100 }}  
                source={Logo} alt='Logo do Lógus da tela de Cadastro' 
            />
            <Text 
                style={{alignSelf: 'center'}}
                color={TEMAS.colors.purple[400]} 
                fontSize={TEMAS.fontSizes.lg}
                
                >Cadastre - se</Text>

        </VStack>
    )
}

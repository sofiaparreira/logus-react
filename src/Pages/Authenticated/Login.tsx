
import { VStack, Image, Text, Heading, Box, FormControl, Input, Button, Link } from "native-base"
import { TouchableOpacity } from "react-native";
import { TEMAS } from '../../styles/temas';
import Logo from '../../assets/logo.jpg'
import { HeadingCadastro } from "../../components/Text/HeadingCadastro";
import { baseFontSize } from "native-base/lib/typescript/theme/tools";
import { InputDefault } from "../../components/InputDefault";


export default function Login({ navigation }) {
    return (
        <VStack flex={1} alignItems='center' p={8} bg={'white'}  >
            <HeadingCadastro children={'Entre'} />
            <Image
                style={{ width: 240, height: 100 }}
                source={Logo} alt='Logo do Lógus da tela de Login'
            />
           

            <Box style={{ marginTop: 24, marginBottom: 8 }}>
                <FormControl>
                    <FormControl.Label>E-mail</FormControl.Label>
                    <InputDefault/>

                    <FormControl.Label>Senha</FormControl.Label>
                    <InputDefault/>
                        
                </FormControl>
            </Box>
            <Link alignSelf="flex-start" style={{ marginBottom: 48 }}>Esqueci minha senha</Link>
            <Button
                onPress={() => navigation.navigate('Dashboard')}
         
                backgroundColor='purple.500'
                w='100%'
                borderRadius='lg'
                marginBottom={4}
               
            >
                Entrar
            </Button>

            <Box style={{ flex: 1, flexDirection: 'row' }}>
                <Text>Ainda não tem cadastro? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text color='purple.300' >Cadastrar</Text>
                </TouchableOpacity>
            </Box>

        </VStack>
    )


}

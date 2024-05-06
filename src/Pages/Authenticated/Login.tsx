
import { VStack, Image, Text, Heading, Box, FormControl, Input, Button, Link } from "native-base"
import { TouchableOpacity } from "react-native";
import { TEMAS } from '../../styles/temas';
import Logo from '../../assets/logo.jpg'
import { Title } from "../../components/Title";

export default function SingUp1() {
    return (
        <VStack flex={1} alignItems='center' p={5} fontSize='md' >
            <Heading style={{ marginVertical: 64 }}>Bem vindo de volta</Heading>
            <Image
                style={{ width: 240, height: 100 }}
                source={Logo} alt='Logo do Lógus da tela de Login'
            />
            <Title>Cadastre-se</Title>

            <Box style={{ marginTop: 24, marginBottom: 8 }}>
                <FormControl>
                    <FormControl.Label>E-mail</FormControl.Label>
                    <Input />

                    <FormControl.Label>Senha</FormControl.Label>
                    <Input />
                        
                </FormControl>
            </Box>
            <Link alignSelf="flex-start" style={{ marginBottom: 48 }}>Esqueci minha senha</Link>
            <Button
                backgroundColor='purple.500'
                w='100%'
                borderRadius='lg'
                marginBottom={4}
            >
                Cadastrar
            </Button>

            <Box style={{ flex: 1, flexDirection: 'row' }}>
                <Text>Já tenho cadastro? </Text>
                <TouchableOpacity>
                    <Text color='purple.300' >Login</Text>
                </TouchableOpacity>
            </Box>

        </VStack>
    )
}

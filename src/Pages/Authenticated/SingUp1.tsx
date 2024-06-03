import React, { useState } from "react";
import { VStack, Image, Text, Box, FormControl, Button, Link, Input } from "native-base";
import { TextInput, TouchableOpacity } from "react-native";

import InputDefault  from "../../components/InputDefault";//tirei as chaves{}

import { HeadingCadastro } from "../../components/Text/HeadingCadastro";
import Logo from '../../assets/logo.jpg';

import axios from "../../../src/services/api"

export default function SignUp1({ navigation }) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordInformation, setPasswordInformation] = useState({ message: "", color: "" });
    const [user, setUser] = useState('')

    // Verificação de senha forte ou fraca
    const verifyPassword = (text) => {
        if (!text) {
            setPasswordInformation({ message: '', color: '' });
            return;
        }
    
        const hasUpperCase = /[A-Z]/.test(text);
        const symbols = "!@#$%^&*()-_=+[]{}|;:',.<>?";
        if (text.length < 6 && !hasUpperCase || text.length < 6 && !symbols) {
            setPasswordInformation({ message: 'Senha fraca', color: 'green' });
        } else {
            setPasswordInformation({ message: 'Senha forte', color: 'red' });
        }
    };
    
    

    // Manipulador de evento para o campo de senha
    const handlePasswordChange = (text) => {
        setPassword(text);
        verifyPassword(text);
    };


    return (
        <VStack flex={1} alignItems='center' p={8} bg={'white'}>
            <HeadingCadastro>Cadastre-se</HeadingCadastro>
            <Image
                style={{ width: 240, height: 100 }}
                source={Logo}
                alt='Logo do Lógus da tela de Cadastro'
            />

            <Box style={{ marginTop: 24, marginBottom: 8 }}>
                <FormControl>

                    <FormControl.Label>E-mail ou matrícula</FormControl.Label>
                    <InputDefault value={user} onChangeText={setUser}/>

                    <FormControl.Label>Senha</FormControl.Label>
                    <InputDefault value={password} onChangeText={handlePasswordChange}/>

                    {/* 
                    <Input
                        size='lg'
                        w='100%'
                        h='40px'
                        borderRadius='lg'
                        bgColor='gray.300'
                        onChangeText={handlePasswordChange}
                    />
                    */}
                    <Text marginBottom={2} color={passwordInformation.color}>{passwordInformation.message}</Text>

                    <FormControl.Label>Confirmar senha</FormControl.Label>
                    <InputDefault value={confirmPassword} onChangeText={setConfirmPassword}/>

                </FormControl>
            </Box>

            <Button backgroundColor='purple.500' w='100%' borderRadius='lg' marginBottom={4}>
                Cadastrar
            </Button>

            <Box style={{ flex: 1, flexDirection: 'row' }}>
                <Text>Já tenho cadastro? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text color='purple.300'>Login</Text>
                </TouchableOpacity>
            </Box>
            
        </VStack>
    );
}

import React, { useState } from "react";
import { VStack, Image, Text, Box, FormControl, Button, Link, Input } from "native-base";
import { TextInput, TouchableOpacity, Alert } from "react-native";

import InputDefault  from "../../components/InputDefault";//tirei as chaves{}

import { HeadingCadastro } from "../../components/Text/HeadingCadastro";
import Logo from '../../assets/logo.jpg';

import axios from "../../../src/services/api"
import get from "lodash";

export default function SignUp1({ navigation }) {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');

    const [userInfo, setUserInfo] = useState({ message: "", color: "" });
    const [passwordInformation, setPasswordInformation] = useState({ message: "", color: "" });
    const [confSenhaInfo, setConfSenhaInfo] = useState({ message: "", color: "" });
    
    // Verificação de senha forte ou fraca
    const verifyPassword = (text) => {

        if (!text) {
            setPasswordInformation({ message: '', color: '' });
            return;
        }
    
        const hasUpperCase = /[A-Z]/.test(text);
        const symbols = "!@#$%^&*()-_=+[]{}|;:',.<>?";
        if (text.length < 6 && !hasUpperCase || text.length < 6 && !symbols) {
            setPasswordInformation({ message: 'Senha fraca', color: 'red' });
        } else {
            setPasswordInformation({ message: 'Senha forte', color: 'green' });
        }
    };

    // Manipulador de evento para o campo de senha
    const handlePasswordChange = (text) => {
        setPassword(text);
        verifyPassword(text);
    };
    
    
    const handleSubmit = async () => {
        let formErrors = false;

        if (user.length < 3 || user.length > 255) {
            setUserInfo({ message:'O nome deve ter entre 3 e 255 caracteres.', color: 'red' });
            formErrors = true;
        }
        if (password !== confirmPassword) {
            setConfSenhaInfo({ message: 'A senha e a confirmação de senha não coincidem.', color: 'red' });
            formErrors = true;
        }

        if (formErrors) return;

        try {
            await axios.post('/users', {
                user,
                password,
            });
            Alert.alert('Sucesso', 'Usuario registrado com sucesso', [
                {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);

            navigation.navigate('Login'); // Navigate to the login screen

        } catch (err) {
            const errors = err.response?.data?.errors || [];
            // errors.forEach((error: string) => Toast.show({ type: 'error', text1: error })); //falta consertar apenas isso
        }
    }

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
                    <Text marginBottom={2} color={userInfo.color}>{userInfo.message}</Text>

                    <FormControl.Label>Senha</FormControl.Label>
                    <InputDefault value={password} onChangeText={handlePasswordChange}/>
                    <Text marginBottom={2} color={passwordInformation.color}>{passwordInformation.message}</Text>

                    <FormControl.Label>Confirmar senha</FormControl.Label>
                    <InputDefault value={confirmPassword} onChangeText={setConfirmPassword}/>
                    <Text marginBottom={2} color={confSenhaInfo.color}>{confSenhaInfo.message}</Text>

                </FormControl>
            </Box>

            <Button backgroundColor='purple.500' w='100%' borderRadius='lg' marginBottom={4} onPress={handleSubmit}>
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

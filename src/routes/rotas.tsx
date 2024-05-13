import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from "../Pages/Authenticated/Login";
import SignUp1 from "../Pages/Authenticated/SingUp1";
import Dashboard from "../Pages/Dashboard";
import Resumos from '../Pages/Resumos'
import PomodoroMethod from '../Pages/PomodoroMethod'
const Stack = createNativeStackNavigator(); // Chame createNativeStackNavigator para criar o navegador de pilha

export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Cadastro" component={SignUp1} options={{ headerShown: false }} />
                <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
                <Stack.Screen name="Resumos" component={Resumos} options={{ headerShown: false}} />
                <Stack.Screen name="PomodoroMethod" component={PomodoroMethod} options={{ headerShown: false}} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

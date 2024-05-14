import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from "../Pages/Authenticated/Login";
import SignUp1 from "../Pages/Authenticated/SingUp1";
import Dashboard from "../Pages/Dashboard";
import Resumos from '../Pages/Resumos'
<<<<<<< HEAD
import PomodoroMethod from '../Pages/PomodoroMethod'
import Sidebar from '../components/nav/Sidebar'
import Agenda from '../Pages/Funcionalidades/Agenda'
=======
import PomodoroMethod from '../Pages/Funcionalidades/PomodoroMethod'
import Sidebar from "../components/nav/Sidebar";
>>>>>>> d0545d49b5da315d1f3bab9f6693e5e5af248075
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
<<<<<<< HEAD
                <Stack.Screen name="Agenda" component={Agenda} options={{ headerShown: false}} />
                <Stack.Screen name="Sidebar" component={Sidebar} options={{ headerShown: false}} />
=======
                <Stack.Screen name="Sidebar" component={Sidebar} options={{ headerShown: false}} />

>>>>>>> d0545d49b5da315d1f3bab9f6693e5e5af248075

            </Stack.Navigator>
        </NavigationContainer>
    )
}

import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HStack, ScrollView, VStack, View, Text } from "native-base";

//COMPONENTES
import TitleFuncionalidades from "../components/Text/TitleFuncionalidades";
import Topbar from "../components/nav/Topbar";


export default function PomodoroMethod() {
    return (
        <View bg='purple.500' flex={1}>
            <Topbar />
            <ScrollView bg='white' borderTopRadius={32}>
                <TitleFuncionalidades
                    props={'Método Pomodoro'}
                />
            </ScrollView>
        </View>
    )
}

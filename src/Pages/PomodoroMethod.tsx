import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HStack, ScrollView, VStack, View, Text, Input } from "native-base";

//COMPONENTES
import TitleFuncionalidades from "../components/Text/TitleFuncionalidades";
import Topbar from "../components/nav/Topbar";
import ButtonPurpleDefault from "../components/Buttons/ButtonPurpleDefault";


export default function PomodoroMethod() {
    return (
        <View bg='purple.500' flex={1}>
            <Topbar />
            <ScrollView bg='white' borderTopRadius={32}>
                <TitleFuncionalidades
                    props={'Método Pomodoro'}
                />
                <Input marginTop={8} bg={'gray.100'} borderColor={'coolGray.200'} borderWidth={2} width={72} margin={'auto'} borderRadius={24} h={10} placeholder="Selecione sua tarefa" fontSize={'md'} textAlign={'center'}/>
                <ButtonPurpleDefault 
                    textButton={'Start'}
                />
            </ScrollView>
        </View>
    )
}

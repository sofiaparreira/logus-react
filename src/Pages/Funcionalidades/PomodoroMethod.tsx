import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HStack, ScrollView, VStack, View, Text, Input } from "native-base";
import * as Progress from 'react-native-progress';

// COMPONENTES
import TitleFuncionalidades from "../../components/Text/TitleFuncionalidades";
import Topbar from "../../components/nav/Topbar";
import ButtonPurpleDefault from "../../components/Buttons/ButtonPurpleDefault";
import Timer from "../../components/Timer";
import { StyleSheet } from "react-native";

export default function PomodoroMethod() {
    const duration = 1500; // 1500 segundos = 25 minutos
    const [progress, setProgress] = useState(1);
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setProgress(timeLeft / duration);
    }, [timeLeft]);

    return (
        <View bg='purple.500' flex={1}>
            <Topbar />
            <ScrollView bg='white' borderTopRadius={32}>
                <TitleFuncionalidades
                    props={'Método Pomodoro'}
                />
                <Input 
                    marginTop={8} 
                    bg={'gray.100'} 
                    borderColor={'coolGray.200'} 
                    borderWidth={2} 
                    width={72} 
                    margin={'auto'} 
                    borderRadius={24} 
                    h={10} 
                    placeholder="Selecione sua tarefa" 
                    fontSize={'md'} 
                    textAlign={'center'}
                />
                <Timer />
                <View 
                
              >
                    <Progress.Circle
                        progress={progress}
                        size={150}
                        showsText={true}
                        formatText={() => `${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`}
                        color="blue"
                        thickness={8}
                    />
                    <Text style={styles.timerText}>{`${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`}</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = {
    timerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    timerText: {
        fontSize: 24,
        marginTop: 10,
    },
};

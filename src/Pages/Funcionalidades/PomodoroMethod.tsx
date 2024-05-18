import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HStack, ScrollView, VStack, View, Text, Input, Button, Box } from "native-base";
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
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(interval);
                        setIsRunning(false);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    useEffect(() => {
        setProgress(timeLeft / duration);
    }, [timeLeft]);

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    return (
        <View bg='purple.500' flex={1}>
            <Topbar />
            <ScrollView bg='white' borderTopRadius={32}>
                <TitleFuncionalidades props={'Método Pomodoro'} />
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
                
                <View style={styles.timerContainer}>
                    <Progress.Circle
                        progress={progress}
                        borderColor="none"
                        size={200}
                        showsText={true}
                        formatText={() => `${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`}
                        color="#D3D3D3"
                        unfilledColor="rgb(109, 40, 217)" 
                        thickness={10}
                        textStyle={{ color: 'black', fontSize: 32, fontWeight: '400' }}
                    />
                </View>
                <Box style={styles.boxButtons}>
                    <ButtonPurpleDefault onPress={toggleTimer} textButton={isRunning ? 'Pause' : 'Start'} />
                </Box>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    timerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 64,
        marginBottom: 32,
    },
    timerText: {
        fontSize: 24,
        marginTop: 10,
    },
    boxButtons: {
        flexDirection: 'row',
        justifyContent: 'center', // Center the button
        alignItems: 'center',
        marginTop: 20, // Add some top margin
    }
});

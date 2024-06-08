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

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(duration);
        setProgress(1);
    };

    return (
        <View bg='purple.500' flex={1}>
            <Topbar />
            <ScrollView bg='white' borderTopRadius={32}>
                <TitleFuncionalidades props={'Método Pomodoro'} />
                
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
                    <ButtonPurpleDefault onPress={toggleTimer} textButton={isRunning ? 'Pause' : 'Start'} width={56} />
                    <ButtonPurpleDefault onPress={resetTimer} textButton={'Reset'} width={24} />
                </Box>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        marginRight: 32,
    },
    timerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        marginBottom: 64,
    },
    timerText: {
        fontSize: 24,
        marginTop: 10,
    },
    boxButtons: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,

    }
});

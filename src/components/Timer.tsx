import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Box, Button, Flex } from 'native-base';
import ButtonPurpleDefault from './Buttons/ButtonPurpleDefault';
import TimerButtons from './Buttons/TimerButtons';

export default function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(25);
    const [isRunning, setIsRunning] = useState(false);
    const customInterval = 1000; // Intervalo de 1 segundo

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                if (seconds === 0 && minutes === 0) {
                    clearInterval(intervalId);
                    setIsRunning(false);
                } else if (seconds === 0) {
                    setMinutes(prevMinutes => prevMinutes - 1);
                    setSeconds(59);
                } else {
                    setSeconds(prevSeconds => prevSeconds - 1);
                }
            }, customInterval);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, minutes, seconds]);

    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setMinutes(25);
        setSeconds(0);
    };

    return (
        <View style={styles.timerView}>
            <Text style={styles.timerText}>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</Text>
            <Box style={styles.boxTimer}>
              <TimerButtons text={'Pausar'} onPress={stopTimer} />
              <TimerButtons text={'Iniciar'} onPress={startTimer} />
              
            </Box>
            <ButtonPurpleDefault textButton="Reset" onPress={resetTimer} />
        </View>
    );
}

const styles = StyleSheet.create({
    timerText: {
        fontWeight: 'normal',
        fontSize: 56,
        color: 'darkslategray',
        textAlign: 'center',
        marginTop: 64,
        marginBottom: 64,
    },
    timerView: {
      marginVertical: 32,
      marginHorizontal: 16,
    },
    boxTimer: {
      justifyContent: 'space-around',
      flexDirection: "row",
    }
});

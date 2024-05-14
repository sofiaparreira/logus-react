import React from "react";
import { View, Text, Box, Button } from "native-base";
import { StyleSheet } from "react-native";

export default function DataAtualCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.day}>24</Text>
            <Box style={styles.dataBox}>
                <Text style={styles.weekday}>Quarta</Text>
                <Text style={styles.month}>de Março</Text>
            </Box>
            <Button bg='purple.500' style={styles.buttonAddTask}>+</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        
        marginHorizontal: 32,
        width: '100%',
        gap: 32,
        marginTop: 32,
    },
    dataBox: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '40%'
    },
    day: {
        fontSize: 52,
        fontWeight: 'bold',
        lineHeight: 60, // Adicionei lineHeight
    },
    weekday: {
        fontSize: 18,
        lineHeight: 20,
    },
    month: {
        fontSize: 18,
        lineHeight: 20,
    },
    buttonAddTask: {
        width: 64,
        height: 56,
        borderRadius: 16,     
    }
});

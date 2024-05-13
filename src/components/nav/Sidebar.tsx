import React from "react";
import { Box, Column } from "native-base";
import { View, Text, Image, StyleSheet } from "react-native";
import { flexbox } from "native-base/lib/typescript/theme/styled-system";

export default function Sidebar() {
  return (
    <View style={styles.sidebar}>
        <Box>
            <Image />
            <Text style={styles.title}>Usuário</Text>
        </Box>
        <Box>
            <Image />
            <Text>teste</Text>
        </Box>
        <Box>
            <Image />
            <Text>teste</Text>
        </Box>
        <Box>
            <Image />
            <Text>teste</Text>
        </Box>
        <Box>
            <Image />
            <Text>Configurações</Text>
        </Box>
    </View>
  );
}

const styles = StyleSheet.create({
    sidebar: {
        width: '50%',
        height: '100%',
        backgroundColor: 'white',
        borderTopEndRadius: 32,
        borderBottomEndRadius: 32,
        flexDirection: 'column',  
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        marginTop: 32,
        fontWeight: 'bold',
    }
});

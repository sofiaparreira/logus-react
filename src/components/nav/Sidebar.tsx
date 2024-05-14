import React from "react";
<<<<<<< HEAD
import { VStack, View, Image, Text, Box, HStack, Input, ScrollView, Modal } from "native-base";
import { TouchableOpacity, TextInput, StyleSheet } from "react-native";

export default function Sidebar() {
  return (
    <Modal style={styles.modal}>

    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    width: '32%',
    height: 100,
    backgroundColor: 'gray',

  }
})
=======
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
>>>>>>> d0545d49b5da315d1f3bab9f6693e5e5af248075

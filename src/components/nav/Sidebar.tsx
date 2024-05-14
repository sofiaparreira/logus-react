import React from "react";
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

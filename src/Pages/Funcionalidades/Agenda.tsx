import React from "react";
import { VStack, View, ScrollView, Text, Box } from "native-base";
import { StyleSheet } from "react-native";

import Topbar from "../../components/nav/Topbar";
import DataAtualCard from "../../components/Cards/DataAtualCard";


export default function Resumos() {
    return (
        <VStack bg='purple.500' flex={1}>
            <Topbar/>

            <ScrollView bg='white' borderTopRadius={32} style={styles.scrollView}>
                <DataAtualCard />
            </ScrollView>
            
        </VStack>
    )
}


const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: 16,
    }
})
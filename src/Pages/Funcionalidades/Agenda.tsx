import React from "react";
import { VStack, View, ScrollView, Text, Box } from "native-base";
import { StyleSheet } from "react-native";

import Topbar from "../../components/nav/Topbar";
import DataAtualCard from "../../components/Cards/DataAtualCard";
import { Calendar } from "react-native-calendars";

export default function Resumos() {
    return (
        <VStack bg='purple.500' flex={1}>
            <Topbar/>

            <ScrollView bg='white' borderTopRadius={32} style={styles.scrollView}>
                <DataAtualCard />
            </ScrollView>
            <Calendar
  // Collection of dates that have to be marked. Default = {}
  markedDates={{
    '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
    '2012-05-17': {marked: true},
    '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2012-05-19': {disabled: true, disableTouchEvent: true}
  }}
/>   
        </VStack>
    )
}


const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: 16,
    }
})
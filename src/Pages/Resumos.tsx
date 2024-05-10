import React from "react";
import { VStack, View, ScrollView } from "native-base";
import Topbar from "../components/nav/Topbar";

export default function Resumos() {
    return (
        <View bg='purple.500' flex={1}>
            <Topbar />
            <ScrollView bg='white' borderTopRadius={32}>
            </ScrollView>
        </View>
    )
}

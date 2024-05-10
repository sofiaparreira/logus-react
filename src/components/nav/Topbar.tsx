import React from 'react'
import { VStack, View, Image, Text, Box } from "native-base";
import { TouchableOpacity, TextInput } from "react-native";
import MenuIcon from '../../assets/menuIcon.png';
import ProfileIcon from '../../assets/profileIcon.png'

export default function Topbar() {
    return (

        <VStack paddingTop={16} h={'138px'} justifyContent="flex-start" px={4}>
            <Box flex={1} flexDirection={'row'} justifyContent={'space-between'} marginBottom={'16px'} >
                <TouchableOpacity>
                    <Image w={12} h={12} source={MenuIcon} />
                </TouchableOpacity>
                <Image w={16} h={16} source={ProfileIcon} />
            </Box>
        </VStack>

    )
}

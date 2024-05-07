import React from "react";
import { VStack, View, Image, Text, Box, HStack, Input } from "native-base";
import { TouchableOpacity, TextInput } from "react-native";
import MenuIcon from '../assets/menuIcon.png';
import ProfileIcon from '../assets/profileIcon.png'


export default function Dashboard() {
    return (
        <View bg='purple.500' paddingTop={16}>
            <VStack paddingX={4} h={32} justifyContent="flex-start">
                <Box flex={1} flexDirection={'row'} justifyContent={'space-between'} marginBottom={'16px'}>
                    <TouchableOpacity>
                        <Image w={12} h={12} source={MenuIcon} />
                    </TouchableOpacity>

                    <Image w={16} h={16} source={ProfileIcon} />
                </Box>
                <Text marginBottom={4} fontSize="4xl" fontWeight={"black"} color={'white'}>Olá, User</Text>
            </VStack>
            <HStack w={'100%'} bg='white' borderTopRadius={32}>
                <TextInput
                    style={{ 
                        flex: 1, paddingLeft: 24, paddingVertical: 24, 
                        borderRadius: 28, borderWidth: 2, borderColor: 'gray' ,
                        fontSize: 16
                        
                    }}
                    
                    placeholder="Pesquise por resumos, atividades, slides ..."
                />

            </HStack>
        </View>
    );
}

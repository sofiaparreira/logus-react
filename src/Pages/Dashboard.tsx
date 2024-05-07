import React from "react";
import { VStack, View, Image, Text, Box, HStack, Input, ScrollView } from "native-base";
import { TouchableOpacity, TextInput } from "react-native";

//IMPORT ICONES E IMAGENS
import MenuIcon from '../assets/menuIcon.png';
import ProfileIcon from '../assets/profileIcon.png'

import PrimaryCardDashboard from "../components/Cards/PrimaryCardDashboard";
import ResumeIcon from '../assets/resumeIcon.png'
import SecundaryCardDashboard from "../components/Cards/SecundaryCardDashboard";
import TasksDashboard from "../components/Cards/TasksDashboard";

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
            <VStack w={'100%'} bg='white' borderTopRadius={32}>

                <TextInput
                    style={{
                        flex: 1, paddingLeft: 24, paddingVertical: 32,
                        borderRadius: 28, borderWidth: 2, borderColor: 'gray',
                        fontSize: 16

                    }}

                    placeholder="Pesquise por resumos, atividades, slides ..."
                />

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <HStack marginTop={4} justifyContent={'space-around'}>
                        <PrimaryCardDashboard
                            img={ResumeIcon}
                            text={'Resumos'}
                        />
                        <PrimaryCardDashboard
                            img={ResumeIcon}
                            text={'Exercícios'}

                        />
                        <PrimaryCardDashboard
                            img={ResumeIcon}
                            text={'Apresentações'}

                        />
                    </HStack>

                </ScrollView>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <SecundaryCardDashboard 
                        text={'Agenda'}
                    />
                    <SecundaryCardDashboard
                        text={'Pomodoro'}
                    />
                    <SecundaryCardDashboard 
                        text={'Ruido Branco'}
                    />
                    <SecundaryCardDashboard 
                        text={'Chat'}
                    />
                    <SecundaryCardDashboard 
                        text={'Estatísticas'}
                    />

                </ScrollView>

                <View mt={8} bg={'gray.100'} borderRadius={'3xl'} px={4} py={6}>
                    <Image></Image>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TasksDashboard
                            task={'Fazer atividade de Matemática'}
                        />
                    </ScrollView>
                    <Box>
                        <Text fontSize={'4xl'} fontWeight={'bold'} color={'purple.400'}>3</Text>
                        <Text fontSize={'4xl'} fontWeight={'bold'} color={'purple.400'}>Agenda</Text>
                    </Box>
                </View>



            </VStack>
        </View>
    );
}

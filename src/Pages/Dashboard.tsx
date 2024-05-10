import React from "react";
import { VStack, View, Image, Text, Box, HStack, Input, ScrollView } from "native-base";
import { TouchableOpacity, TextInput } from "react-native";

//COMPONENTES
import PrimaryCardDashboard from "../components/Cards/PrimaryCardDashboard";
import SecundaryCardDashboard from "../components/Cards/SecundaryCardDashboard";
import TasksDashboard from "../components/Cards/TasksDashboard";

//IMPORT ICONES E IMAGENS
import MenuIcon from '../assets/menuIcon.png';
import ProfileIcon from '../assets/profileIcon.png'
import ResumeIcon from '../assets/resumeIcon.png'
import ExerciseIcon from '../assets/exerciseIcon.png'
import ApresentacaoIcon from '../assets/apresentacaoIcon.png'
import ChatIcon from '../assets/chatIcon.png'
import PomodoroIcon from '../assets/pomodoroIcon.png'
import AgendaIcon from '../assets/agendaIcon.png'
import Sidebar from "../components/nav/Sidebar";



export default function Dashboard() {
    return (
        <ScrollView bg='purple.500' paddingTop={16}>
           
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
                        img={AgendaIcon}
                        text={'Agenda'}
             
                    />
                    <SecundaryCardDashboard 
                        img={PomodoroIcon}
                        text={'Pomodoro'}
             
                    />
                    <SecundaryCardDashboard 
                        img={AgendaIcon}
                        text={'Agenda'}
             
                    />
                    <SecundaryCardDashboard 
                        img={AgendaIcon}
                        text={'Agenda'}
             
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
           
        </ScrollView>
    );
}

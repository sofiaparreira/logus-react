import React, { useState } from "react";
import { VStack, View, Image, Text, Box, HStack, ScrollView } from "native-base";
import { TouchableOpacity, TextInput, StyleSheet } from "react-native";
import Modal from "react-native-modal";

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

export default function Dashboard({ navigation }) {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    return (
        <ScrollView bg='purple.500'>
            <VStack paddingX={4} h={32} justifyContent="flex-start" marginTop={12}>
                <Box flex={1} flexDirection={'row'} justifyContent={'space-between'} marginBottom={'16px'}>
                    <TouchableOpacity onPress={() => setSidebarVisible(true)}>
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
                        borderRadius: 32, borderWidth: 2, borderColor: 'gray',
                        fontSize: 16
                    }}
                    placeholder="Pesquise por resumos, atividades, slides ..."
                />

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <HStack marginTop={4} justifyContent={'space-around'}>
                        <TouchableOpacity onPress={() => navigation.navigate('Resumos')}>
                            <PrimaryCardDashboard
                                img={ResumeIcon}
                                text={'Resumos'}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <PrimaryCardDashboard
                                img={ExerciseIcon}
                                text={'Exercícios'}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <PrimaryCardDashboard
                                img={ApresentacaoIcon}
                                text={'Apresentações'}
                            />
                        </TouchableOpacity>
                    </HStack>
                </ScrollView>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => navigation.navigate('Agenda')}>
                        <SecundaryCardDashboard
                            img={AgendaIcon}
                            text={'Agenda'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('PomodoroMethod')}>
                        <SecundaryCardDashboard
                            img={PomodoroIcon}
                            text={'Pomodoro'}
                        />
                    </TouchableOpacity>
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

            <Modal
                isVisible={isSidebarVisible}
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
                onBackdropPress={() => setSidebarVisible(false)}
                style={styles.modal}>
                <Sidebar />
            </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    modal: {
        margin: 0,
        justifyContent: 'flex-start',
    },
});

import React from "react";
import { VStack, ScrollView, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import Topbar from "../../components/nav/Topbar";
import DataAtualCard from "../../components/Cards/DataAtualCard";
import { CalendarList } from "react-native-calendars";

export default function Agenda() {
    return (
        <VStack bg='purple.500' flex={1}>
            <Topbar />

            <ScrollView bg='white' borderTopRadius={32} style={styles.scrollView}>
                <DataAtualCard />
                <ScrollView horizontal style={styles.calendarContainer} showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row' }}>
                        <CalendarList
                            // Define a largura do calendário para caber na tela
                            style={{ width: 430 }}
                            theme={{
                                backgroundColor: 'transparent', // Define o fundo do calendário como transparente
                                calendarBackground: 'transparent', // Define o fundo do calendário como transparente
                                textSectionTitleColor: 'black', // Define a cor do texto do título
                                selectedDayBackgroundColor: 'blue', // Define a cor de fundo do dia selecionado
                                selectedDayTextColor: 'white', // Define a cor do texto do dia selecionado
                                todayTextColor: 'blue', // Define a cor do texto do dia atual
                                dayTextColor: 'black', // Define a cor do texto dos dias
                                textDisabledColor: 'gray', // Define a cor do texto dos dias desabilitados
                                dotColor: 'red', // Define a cor do ponto (marcação) nos dias
                                selectedDotColor: 'white', // Define a cor do ponto (marcação) nos dias selecionados
                                arrowColor: 'black', // Define a cor da seta de navegação
                                monthTextColor: 'black', // Define a cor do texto do mês
                                indicatorColor: 'blue', // Define a cor do indicador de rolagem
                                textDayFontFamily: 'Arial', // Define a família da fonte do texto do dia
                                textMonthFontFamily: 'Arial', // Define a família da fonte do texto do mês
                                textDayHeaderFontFamily: 'Arial', // Define a família da fonte do texto do cabeçalho do dia
                                textDayFontSize: 16, // Define o tamanho da fonte do texto do dia
                                textMonthFontSize: 16, // Define o tamanho da fonte do texto do mês
                                textDayHeaderFontSize: 16 // Define o tamanho da fonte do texto do cabeçalho do dia
                            }}
                            // Especifica a data atual
                            current={'2024-01-01'}
                            // Função de retorno que é chamada quando o usuário seleciona um dia
                            onDayPress={day => {
                                console.log('selected day', day);
                            }}
                            // Marca datas específicas
                            markedDates={{
                                '2024-03-01': { selected: true, marked: true },
                                '2024-03-02': { marked: true },
                                '2024-03-03': { selected: true, marked: true }
                            }}
                            // Propriedades para exibir todos os dias de 2024
                            pastScrollRange={0}
                            futureScrollRange={12}
                            scrollEnabled
                            showScrollIndicator
                            // Exibe os dias horizontalmente
                            horizontal={true}
                            pagingEnabled={true}
                            // Abreviação dos nomes dos dias da semana
                            dayComponent={({ date, state }) => {
                                return (
                                    <View style={{ alignItems: 'center', width: 40 }}>
                                        <Text style={{ color: state === 'disabled' ? 'gray' : 'black' }}>
                                            {date.day}
                                        </Text>
                                    </View>
                                );
                            }}
                            // Formata os nomes dos dias da semana para apenas uma letra
                            renderHeader={(date) => {
                                const header = date.toString('MMMM yyyy');
                                const [month, year] = header.split(' ');
                                return (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                        <Text>{month}</Text>
                                        <Text>{year}</Text>
                                    </View>
                                );
                            }}
                            monthFormat={'MMMM yyyy'}
                            onVisibleMonthsChange={(months) => {
                                console.log('now these months are visible', months);
                            }}
                        />
                    </View>
                </ScrollView>
            </ScrollView>
        </VStack>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: 16,
    },
    calendarContainer: {
        height: 120,
    }
});

import React from 'react';
import { VStack, Image, Box } from "native-base";
import { TouchableOpacity } from "react-native";


import ArrowLeft from '../../assets/arrowLeft.png';
import ProfileIcon from '../../assets/profileIcon.png';

import { useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Dashboard: undefined;
  // outras rotas, se houver
};

type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

export default function Topbar() {
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  return (
    <VStack paddingTop={8} height={120} justifyContent="flex-start" px={4}>
      <Box flexDirection={'row'} alignItems="center" justifyContent={'space-between'} marginBottom={16}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Image width={8} height={8} source={ArrowLeft} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image width={16} height={16} source={ProfileIcon} />
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}

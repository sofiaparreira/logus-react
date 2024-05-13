import React from "react";
import {  StyleSheet } from 'react-native';
import { Button } from 'native-base';

import { background } from "native-base/lib/typescript/theme/styled-system";


export default function TimerButtons({text, onPress}) {
  return (
    <Button style={styles.timerButton} backgroundColor={'purple.400'} onPress={onPress}>{text}</Button>
  )


}

const styles = StyleSheet.create({
    timerButton: {
        fontSize: 18,
        width: 80,
        height: 80,
        borderRadius: 50,
    }
  })

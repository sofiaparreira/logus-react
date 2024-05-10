import React from "react";
import { VStack, View, Text } from "native-base";


export default function PomodoroMethod({props}) {
  return (
     <Text fontWeight={'bold'} fontSize={'2xl'} color={'gray.400'} textAlign={'center'} marginTop={8}>{props}</Text>
  )
}

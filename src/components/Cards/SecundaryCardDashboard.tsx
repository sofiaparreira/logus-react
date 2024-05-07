import React from "react";
import { Image, Text, Box, View } from "native-base";

export default function SecundaryCardDashboard({text}) {
    return (
        <View marginTop={8} >
            <Box 
                style={{
                    shadowColor: 'gray',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                }}   

                bg={'gray.100'}
                w={'88px'} h={'88px'} borderRadius={100}
                mx={2}
            >
                <Image></Image>
            </Box>

            <Text pt={'4px'} fontWeight={'medium'} fontSize={'md'} textAlign={'center'}>{text}</Text>
        </View>
    )
}

import React from "react";
import { Image, Text, Box, View } from "native-base";

export default function SecundaryCardDashboard({text, img}) {
    return (
        <View marginTop={8} >
            <Box 
                style={{
                    shadowColor: 'gray',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden' 
                }}   
                
                bg={'gray.100'}
                w={'88px'} h={'88px'} borderRadius={100}
                mx={2}
            >
                <Image 
                    alt="Icone Buttons"
                    source={img} 
                    resizeMode="contain" 
                    style={{ flex: 1 }} 
                />
            </Box>

            <Text pt={'4px'} fontWeight={'medium'} fontSize={'md'} textAlign={'center'}>{text}</Text>
        </View>
    )
}

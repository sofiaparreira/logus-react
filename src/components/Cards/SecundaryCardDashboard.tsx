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
                    justifyContent: 'center', // Add this line
                    overflow: 'hidden' // Add this line to ensure the image doesn't overflow
                }}   
                
                bg={'gray.100'}
                w={'88px'} h={'88px'} borderRadius={100}
                mx={2}
            >
                <Image 
                    source={img} 
                    resizeMode="contain" // Add this line to ensure the image fits within the Box
                    style={{ flex: 1 }} // Add this line to make the image take up all available space
                />
            </Box>

            <Text pt={'4px'} fontWeight={'medium'} fontSize={'md'} textAlign={'center'}>{text}</Text>
        </View>
    )
}

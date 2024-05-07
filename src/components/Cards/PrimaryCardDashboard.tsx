import React from "react";
import { Image, Text, Box } from "native-base";


export default function PrimaryCardDashboard({text, img}) {
    return (
        <Box 
            mx={2} w={188} paddingX={4} paddingY={5} my={2}
            borderRadius={'xl'} bg={'gray.200'} 
            style={{
                shadowColor: 'gray',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            }} >
            <Image marginBottom={2} w={6} h={6} source={img} alt="Icone de resumos"></Image>
            <Text fontSize={'lg'} fontWeight={'medium'}>{text}</Text>
        </Box>
    )
}

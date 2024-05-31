import React from "react";
import { Input } from "native-base"
//export function
const InputDefault = ({onChangeText, value}) => {
    return(
        <Input
            size='lg'
            w='100%'
            h='40px'
            borderRadius='lg'
            bgColor='gray.300'
            onChangeText={onChangeText}
            value={value}
        />
    )
}
export default InputDefault;
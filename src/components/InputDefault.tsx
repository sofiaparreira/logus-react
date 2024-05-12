import { Input } from "native-base"
export function InputDefault(onChangeText){
    return(
        <Input
        size='lg'
        w='100%'
        h='40px'
        borderRadius='lg'
        bgColor='gray.300'
            onChangeText={onChangeText}

    />
    )
}
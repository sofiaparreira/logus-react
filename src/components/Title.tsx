import { Text, ITextProps } from "native-base"
import { TEMAS } from "../styles/temas"
import { ReactNode } from "react"

interface TitleProps extends ITextProps{
    children: ReactNode
}
export function Title({children, ...rest}: TitleProps) {
    return(
        <Text
                style={{ alignSelf: 'center' }}
                color={TEMAS.colors.purple[400]}
                fontSize="xl"
                fontWeight="bold"
                marginTop={'48px'}
                {...rest}

            >{children}
            </Text>
    )
}
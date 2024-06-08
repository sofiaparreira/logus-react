import React from 'react'
import { Button } from 'native-base'
import { TEMAS } from '../../styles/temas'

export default function ButtonPurpleDefault({ textButton, onPress, width }) {
  return (
    <Button bg={TEMAS.colors.purple[500]} width={width} margin={'auto'} borderRadius={8} onPress={onPress}> 
        {textButton}
        
        {onPress}
    </Button>
  )
}

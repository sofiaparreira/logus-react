import React from 'react'
import { Button } from 'native-base'
import { TEMAS } from '../../styles/temas'

export default function ButtonPurpleDefault({ textButton }) {
  return (
    <Button bg={TEMAS.colors.purple[300]} width={40} margin={'auto'} borderRadius={8}> 
        {textButton}
    </Button>
  )
}

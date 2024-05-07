import React from 'react'
import { Text, Box, HStack, Input } from "native-base";

export default function TasksDashboard({task}) {
  return (
    <Box>
        <Text>{task}</Text>
    </Box>
  )
}

import React, { useState } from 'react';
import { Text, Box, HStack, Input, Checkbox } from "native-base";

export default function TasksDashboard({task}) {


  return (
    <Box borderRadius={'md'} bg={'white'} w={80} alignSelf="flex-end">
      <Text fontSize={'md'} px={2} py={1}>{task}</Text>
    </Box>
  );
}

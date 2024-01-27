// TotalPartsWidget.jsx

import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const TotalPartsWidget = ({ totalParts }) => {
  return (
    <Box bg="white" p={4} boxShadow="md" borderRadius="md">
      <Text fontSize="xl" fontWeight="bold">
        Total Parts
      </Text>
      <Text mt={2}>Count: {totalParts}</Text>
    </Box>
  );
};

export default TotalPartsWidget;

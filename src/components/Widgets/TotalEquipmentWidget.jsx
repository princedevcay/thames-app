// TotalEquipmentWidget.jsx

import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const TotalEquipmentWidget = ({ totalEquipment }) => {
  return (
    <Box bg="white" p={4} boxShadow="md" borderRadius="md">
      <Text fontSize="xl" fontWeight="bold">
        Total Equipment
      </Text>
      <Text mt={2}>Count: {totalEquipment}</Text>
    </Box>
  );
};

export default TotalEquipmentWidget;

import React from 'react';
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const LowStockReplacementPartsWidget = ({ count }) => {
  const widgetBgColor = useColorModeValue('white', 'gray.800');
  const widgetBorderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box p={4} bg={widgetBgColor} boxShadow="md" borderRadius="md" border="1px" borderColor={widgetBorderColor}>
      <Heading as="h3" fontSize="lg" mb={3}>
        Low Stock Replacement Parts
      </Heading>
      {count ? (
        <Text fontSize="md">
          Total: {count}
          <br />
          Order new stock to avoid shortages.
        </Text>
      ) : (
        <Text fontSize="md">No replacement parts in low stock at the moment.</Text>
      )}
    </Box>
  );
};

export default LowStockReplacementPartsWidget;

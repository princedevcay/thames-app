import React from 'react';
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const CompletedJobSheetsWidget = ({ count }) => {
  const widgetBgColor = useColorModeValue('white', 'gray.800');
  const widgetBorderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box p={4} bg={widgetBgColor} boxShadow="md" borderRadius="md" border="1px" borderColor={widgetBorderColor}>
      <Heading as="h3" fontSize="lg" mb={3}>
        Completed Job Sheets
      </Heading>
      {count ? (
        <Text fontSize="md">
          Total: {count}
          <br />
          View details for more information.
        </Text>
      ) : (
        <Text fontSize="md">No completed job sheets at the moment.</Text>
      )}
    </Box>
  );
};

export default CompletedJobSheetsWidget;

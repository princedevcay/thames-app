import React from 'react';
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const MostActiveEngineerWidget = ({ engineerName, jobCount }) => {
  const widgetBgColor = useColorModeValue('white', 'gray.800');
  const widgetBorderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box p={4} bg={widgetBgColor} boxShadow="md" borderRadius="md" border="1px" borderColor={widgetBorderColor}>
      <Heading as="h3" fontSize="lg" mb={3}>
        Most Active Engineer
      </Heading>
      <Text fontSize="md">
        Engineer: {engineerName}
        <br />
        Jobs Completed: {jobCount}
      </Text>
    </Box>
  );
};

export default MostActiveEngineerWidget;

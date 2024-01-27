import React from 'react';
import { Box, Heading, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, useColorModeValue } from '@chakra-ui/react';

const JobSheetSummaryWidget = ({ title, value, change, isPositive }) => {
  const widgetBgColor = useColorModeValue('white', 'gray.800');
  const widgetBorderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box p={4} bg={widgetBgColor} boxShadow="md" borderRadius="md" border="1px" borderColor={widgetBorderColor}>
      <Heading as="h3" fontSize="lg" mb={3}>
        {title}
      </Heading>
      <Stat>
        <StatLabel>Total</StatLabel>
        <StatNumber fontSize="xl" fontWeight="bold">{value}</StatNumber>
        <StatHelpText fontSize="sm" color={isPositive ? 'green.500' : 'red.500'}>
          {change !== undefined && (
            <>
              {isPositive ? <StatArrow type="increase" /> : <StatArrow type="decrease" />}
              {change} from last month
            </>
          )}
        </StatHelpText>
      </Stat>
    </Box>
  );
};

export default JobSheetSummaryWidget;

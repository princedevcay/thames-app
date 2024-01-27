import React from 'react';
import { Box, Heading, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import JobSheetSummaryWidget from '../components/Widgets/JobSheetSummaryWidget';
import MostActiveEngineerWidget from '../components/Widgets/MostActiveEngineerWidget';
import FrequentlyServicedCustomerWidget from '../components/Widgets/FrequentlyServicedCustomerWidget';
import PendingJobSheetsWidget from '../components/Widgets/PendingJobSheetsWidget';
import CompletedJobSheetsWidget from '../components/Widgets/CompletedJobSheetsWidget';
import LowStockReplacementPartsWidget from '../components/Widgets/LowStockReplacementPartsWidget';
import TotalEquipmentWidget from '../components/Widgets/TotalEquipmentWidget'
import TotalPartsWidget from '../components/Widgets/TotalPartsWidget'

const Dashboard = () => {
  const gridColumnCount = useBreakpointValue({ base: 1, sm: 2, md: 3 });

  return (
    <Box>
      <Heading as="h2" size="xl" mb={10}>
        Dashboard
      </Heading>
      <Grid templateColumns={`repeat(${gridColumnCount}, 1fr)`} gap={4}>
        <GridItem>
          <JobSheetSummaryWidget title="Total Job Sheets" value={150} change={20} isPositive />
        </GridItem>
        <GridItem>
          <MostActiveEngineerWidget engineerName="John Doe" jobCount={30} />
        </GridItem>
        <GridItem>
          <FrequentlyServicedCustomerWidget customerName="ABC Bank" serviceCount={15} />
        </GridItem>
        <GridItem>
          <PendingJobSheetsWidget customerName="ABC Bank" serviceCount={15} />
        </GridItem>
        <GridItem>
          <CompletedJobSheetsWidget customerName="ABC Bank" serviceCount={15} />
        </GridItem>
        <GridItem>
          <LowStockReplacementPartsWidget customerName="ABC Bank" serviceCount={15} />
        </GridItem>
        <GridItem>
          <TotalEquipmentWidget customerName="ABC Bank" serviceCount={15} />
        </GridItem>
        <GridItem>
          <TotalPartsWidget customerName="ABC Bank" serviceCount={15} />
        </GridItem>
        {/* Add more widgets as needed */}
      </Grid>
    </Box>
  );
};

export default Dashboard;

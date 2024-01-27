import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
} from '@chakra-ui/react';

const JobSheetForm = () => {
  const [formData, setFormData] = useState({
    jobNo: '',
    callType: '',
    date: '',
    timeIn: '',
    timeOut: '',
    equipmentInfo: {
      productType: '',
      machineCode: '',
      serialNo: '',
    },
    jobCharges: {
      servicing: '',
      repairs: '',
      replacement: '',
      emergencyCallOut: '',
      transportation: '',
    },
    replacementPartDetails: {
      partNo: '',
      partDescription: '',
      quantity: '',
      unitPrice: '',
      total: '',
    },
    jobChargeSummary: {
      servicing: '',
      repairs: '',
      replacement: '',
      emergencyCallOut: '',
      transportation: '',
      subtotal: '',
      vat: '',
      totalCharge: '',
    },
    comments: '',
    customerAcceptanceSignature: '',
    engineerId: '', // Foreign Key
    customerId: '', // Foreign Key
  });

  const [jobSheetReports, setJobSheetReports] = useState([
    {
      jobNo: '1',
      status: 'Pending',
      assignedBy: 'John Doe',
    },
    {
      jobNo: '2',
      status: 'Completed',
      assignedBy: 'Jane Doe',
    },
    // Add more sample reports as needed
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEquipmentInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      equipmentInfo: { ...prevData.equipmentInfo, [name]: value },
    }));
  };

  const handleJobChargesChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      jobCharges: { ...prevData.jobCharges, [name]: value },
    }));
  };

  const handleReplacementPartDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      replacementPartDetails: { ...prevData.replacementPartDetails, [name]: value },
    }));
  };

  const handleJobChargeSummaryChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      jobChargeSummary: { ...prevData.jobChargeSummary, [name]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to the server)
    console.log('Form submitted:', formData);

    // Update job sheet reports with a new entry
    setJobSheetReports((prevReports) => [
      ...prevReports,
      {
        jobNo: formData.jobNo,
        status: 'Pending', // Assuming the status is initially set to 'Pending'
        assignedBy: 'John Doe', // Assuming the user is hardcoded for now
      },
    ]);
  };

  return (
    <Box>
      <Heading mb={4}>Job Sheet Form</Heading>
      <form onSubmit={handleSubmit}>
        {/* ... (Existing form controls) */}

        {/* Additional Fields */}
        <VStack spacing={4} align="stretch">
          {/* ... (Add more form controls) */}
        </VStack>

        <Button type="submit" colorScheme="teal" mt={4}>
          Submit
        </Button>
      </form>

      {/* Job Sheet Report Table */}
      <Box mt={8}>
        <Heading mb={4}>Job Sheet Report</Heading>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Job No</Th>
              <Th>Status</Th>
              <Th>Assigned By</Th>
            </Tr>
          </Thead>
          <Tbody>
            {jobSheetReports.map((report) => (
              <Tr key={report.jobNo}>
                <Td>{report.jobNo}</Td>
                <Td>{report.status}</Td>
                <Td>{report.assignedBy}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default JobSheetForm;

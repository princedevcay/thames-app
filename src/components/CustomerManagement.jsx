import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      headquarters: 'ABC Bank',
      branchName: 'Main Branch',
      contactNumber: '1234567890',
    },
    {
      id: 2,
      headquarters: 'XYZ Bank',
      branchName: 'City Branch',
      contactNumber: '9876543210',
    },
    // Add more sample customers as needed
  ]);

  const [formData, setFormData] = useState({
    headquarters: '',
    branchName: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to the server)
    console.log('Form submitted:', formData);

    // Update customers with a new entry
    setCustomers((prevCustomers) => [
      ...prevCustomers,
      {
        id: prevCustomers.length + 1,
        ...formData,
      },
    ]);

    // Clear form fields after submission
    setFormData({
      headquarters: '',
      branchName: '',
      contactNumber: '',
    });
  };

  return (
    <Box>
      <Heading mb={4}>Customer Management</Heading>
      <HStack mb={4}>
        {/* Two-Column Form Layout */}
        <VStack spacing={4} align="stretch" w="50%">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Headquarters (Customer Name)</FormLabel>
              <Input
                type="text"
                name="headquarters"
                value={formData.headquarters}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Branch Name</FormLabel>
              <Input
                type="text"
                name="branchName"
                value={formData.branchName}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Contact Number</FormLabel>
              <Input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </FormControl>

            <Button type="submit" colorScheme="teal" mt={4}>
              Add Customer
            </Button>
          </form>
        </VStack>
      </HStack>

      {/* Customer List Table */}
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Headquarters (Customer Name)</Th>
            <Th>Branch Name</Th>
            <Th>Contact Number</Th>
          </Tr>
        </Thead>
        <Tbody>
          {customers.map((customer) => (
            <Tr key={customer.id}>
              <Td>{customer.id}</Td>
              <Td>{customer.headquarters}</Td>
              <Td>{customer.branchName}</Td>
              <Td>{customer.contactNumber}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CustomerManagement;

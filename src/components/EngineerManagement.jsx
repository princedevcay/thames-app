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

const EngineerManagement = () => {
  const [engineers, setEngineers] = useState([
    {
      id: 1,
      name: 'John Doe',
      contactNumber: '1234567890',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      contactNumber: '9876543210',
      email: 'jane.smith@example.com',
    },
    // Add more sample engineers as needed
  ]);

  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to the server)
    console.log('Form submitted:', formData);

    // Update engineers with a new entry
    setEngineers((prevEngineers) => [
      ...prevEngineers,
      {
        id: prevEngineers.length + 1,
        ...formData,
      },
    ]);

    // Clear form fields after submission
    setFormData({
      name: '',
      contactNumber: '',
      email: '',
    });
  };

  return (
    <Box>
      <Heading mb={4}>Engineer Management</Heading>
      <HStack mb={4}>
        {/* Two-Column Form Layout */}
        <VStack spacing={4} align="stretch" w="50%">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
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

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormControl>

            <Button type="submit" colorScheme="teal" mt={4}>
              Add Engineer
            </Button>
          </form>
        </VStack>
      </HStack>

      {/* Engineer List Table */}
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Contact Number</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {engineers.map((engineer) => (
            <Tr key={engineer.id}>
              <Td>{engineer.id}</Td>
              <Td>{engineer.name}</Td>
              <Td>{engineer.contactNumber}</Td>
              <Td>{engineer.email}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default EngineerManagement;

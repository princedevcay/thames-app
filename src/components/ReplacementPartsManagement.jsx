import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

const ReplacementPartsManagement = () => {
  const [replacementParts, setReplacementParts] = useState([
    {
      id: 1,
      partNo: '12345',
      partDescription: 'Replacement Part 1',
      quantityInStock: 10,
      unitPrice: 20.0,
      status: 'Good',
    },
    {
      id: 2,
      partNo: '67890',
      partDescription: 'Replacement Part 2',
      quantityInStock: 5,
      unitPrice: 30.0,
      status: 'Faulty',
    },
    // Add more sample replacement parts as needed
  ]);

  const [formData, setFormData] = useState({
    partNo: '',
    partDescription: '',
    quantityInStock: 0,
    unitPrice: 0.0,
    status: 'Good',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to the server)
    console.log('Form submitted:', formData);

    // Update replacement parts with a new entry
    setReplacementParts((prevParts) => [
      ...prevParts,
      {
        id: prevParts.length + 1,
        ...formData,
      },
    ]);

    // Clear form fields after submission
    setFormData({
      partNo: '',
      partDescription: '',
      quantityInStock: 0,
      unitPrice: 0.0,
      status: 'Good',
    });
  };

  return (
    <Box>
      <Heading mb={4}>Replacement Parts Management</Heading>
      <HStack mb={4}>
        {/* Three-Column Form Layout */}
        <VStack spacing={4} align="stretch" w="50%">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Part Number</FormLabel>
              <Input
                type="text"
                name="partNo"
                value={formData.partNo}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Part Description</FormLabel>
              <Input
                type="text"
                name="partDescription"
                value={formData.partDescription}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Quantity in Stock</FormLabel>
              <Input
                type="number"
                name="quantityInStock"
                value={formData.quantityInStock}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Unit Price</FormLabel>
              <Input
                type="number"
                step="0.01"
                name="unitPrice"
                value={formData.unitPrice}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Status</FormLabel>
              <Select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="Good">Good</option>
                <option value="Faulty">Faulty</option>
                {/* Add more status options as needed */}
              </Select>
            </FormControl>

            <Button type="submit" colorScheme="teal" mt={4}>
              Add Replacement Part
            </Button>
          </form>
        </VStack>
      </HStack>

      {/* Replacement Parts List Table */}
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Part Number</Th>
            <Th>Part Description</Th>
            <Th>Quantity in Stock</Th>
            <Th>Unit Price</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {replacementParts.map((part) => (
            <Tr key={part.id}>
              <Td>{part.id}</Td>
              <Td>{part.partNo}</Td>
              <Td>{part.partDescription}</Td>
              <Td>{part.quantityInStock}</Td>
              <Td>${part.unitPrice.toFixed(2)}</Td>
              <Td>{part.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ReplacementPartsManagement;

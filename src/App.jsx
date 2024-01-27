import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import MainLayout from './components/MainLayout';
import Login from './components/Login';


const App = () => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<div>{/* Render register component here */}</div>} />

          {/* Private Routes with MainLayout */}
          <Route path="/*" element={<MainLayout />}>
            {/* Add more routes as needed */}
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;

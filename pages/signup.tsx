import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Checkbox,
  Heading,
  Text,
} from "@chakra-ui/react";
import Useevent from "@/customhooks/useevents";
const Signupuser = () => {
  const {
    setEmail,
    setPassword,
    setRememberMe,
    email,
    password,
    rememberMe,
    name,
    setName,
    submithandel,
  } = Useevent();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box p={6} maxW="md" borderWidth={1} borderRadius={8}>
        <Box bg="gray" p={4} color="white">
          <Heading as="h1" size="xl"> 
            Sign Up
          </Heading>
        </Box>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4} mt={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </FormControl>
            <Checkbox
              isChecked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
            >
              Remember me
            </Checkbox>
            <Button onClick={() => submithandel()} colorScheme="blue">
              Sign Up
            </Button>
          </Stack>
        </form>
        <Box bg="gray" p={4} color="white" mt={4}>
          <Text fontSize="sm" textAlign="center">
            © 2023 My Company. All rights reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
export default Signupuser;

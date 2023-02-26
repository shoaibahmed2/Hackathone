 import UseSiignin from "../customhooks/usesignin";
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";


const signin = () => {
  const { setemail, setpassword, signhandel, checkhandel } =
UseSiignin();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        bg="gray.50"
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w={{ base: "100%", md: "md" }}
          bg="white"
          rounded={{ md: "lg" }}
          shadow={{ md: "lg" }}
          p={{ base: 4, md: 8 }}
        >
          <Heading textAlign="center" mb={{ base: 4, md: 8 }}>
            Sign in
          </Heading>
          <Input
            onChange={(event) =>setemail(event.target.value)}
            mb={4}
            placeholder="Email"
          />
          <Input
            onChange={(event) => setpassword(event.target.value)}
            mb={4}
            type="password"
            placeholder="Password"
          />
          <Flex alignItems="center" justifyContent="space-between" mb={4}>
            <Box>
              <Input onChange={(event)=>checkhandel(event)} type="checkbox" mr={2} />
              <Text as="span">Remember me</Text>
            </Box>
            <Link color="blue.400">Forgot Password?</Link>
          </Flex>
          <Button
            onClick={() => signhandel()}
            leftIcon={<FaLock />}
            colorScheme="blue"
            w="full"
            mb={4}
            mt={{ base: 2, md: 4 }}
          >
            Sign in
          </Button>
          <Text textAlign="center">
            Don't have an account? <Link color="blue.400">Sign up here</Link>
          </Text>
        </Box>
      </Box>
    </div>
  );
};
export default signin;

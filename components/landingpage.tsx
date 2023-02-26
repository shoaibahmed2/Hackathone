import { Box, Button, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import Image from "*.jpg";
import { useRouter } from "next/router";
const Landingpage = () => {

  const router = useRouter()

const onSignup = ()=>{
  router.push("/signup")
}

const onSignin = ()=>{
  router.push("/signin")
}

const events = ()=>{
  router.push("/createevent")
}
  return (
    <div>
      <Box bg="#F5F5F5" minHeight="100vh">
        */
        <Box
          bgImage="url(background3.jpg)"
          bgSize="cover"
          bgPosition="center"
          minHeight="300px"
          pt="50px"
          position="relative"
        >
          <Box
            bg="rgba(5, 3, 1, 0.1)"
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
          />

          <Box maxW="800px" mx="auto">
            <Text color="black" fontSize="4xl" fontWeight="bold">
              Welcome to our Saylani Event Planner
            </Text>
            {/* <Text pt={"200px"} color="black" fontSize="lg" mt="4">
              Welcome to our event planning website! We are dedicated to
              providing exceptional event planning services for all of your
              special occasions. Whether you are planning a corporate
              conference, a wedding, or a birthday party, our team of
              experienced planners is here to help you create a memorable and
              successful event. Our goal is to take the stress out of event
              planning, allowing you to enjoy the process and fully engage in
              the festivities.
            </Text> */}

            <Box
              bg="white"
              p="4"
              w="50%"
              position="absolute"
              top="200px"
              left="0"
            >
              <Text border={"thin"} color="black" fontSize="lg" mt="4">
                Welcome to our event planning website! We are dedicated to
                providing exceptional event planning services for all of your
                special occasions. Whether you are planning a corporate
                conference, a wedding, or a birthday party, our team of
                experienced planners is here to help you create a memorable and
                successful event. Our goal is to take the stress out of event
                planning, allowing you to enjoy the process and fully engage in
                the festivities.
              </Text>
            </Box>
          </Box>
        </Box>
        <Flex pt={"200px"} maxW="800px" mx="auto" mt="-50px" justify="center">
          <Button onClick={()=>onSignup()}  size="lg" mr="4" colorScheme="green"> 
            Sign Up
          </Button>
          <Button onClick={()=>onSignin()} size="lg" mr="4" colorScheme="teal">
            Login
          </Button>
          <Button onClick={()=>events()} size="lg" colorScheme="purple">
            Events
          </Button>
        </Flex>
        <Box maxW="800px" mx="auto" py="16">
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="6">
            <Box bg="white" boxShadow="md" borderRadius="md" p="4">
              <Text fontSize="xl" fontWeight="bold" mb="2">
                Our Goal
              </Text>
              <Text>
                We wanted to take a moment to express our gratitude for your
                support of our company. At{" "}
                <strong>Saylani Event Managment</strong> , we are committed to
                providing our customers with exceptional products and services
                that exceed their expectations. It is our passion to innovate
                and strive for excellence in everything we do.
              </Text>
            </Box>
            <Box bg="white" boxShadow="md" borderRadius="md" p="4">
              <Text fontSize="xl" fontWeight="bold" mb="2">
                Our Services
              </Text>
              <Text>
                <li>Wedding Planner</li>
                <li>Party Planner</li>
                <li>Birthday Part</li>
                <li>Office Meeting</li>
                <li>Ball Room for confrences</li>
                <li>Buffet </li>
              </Text>
            </Box>
            <Box bg="white" boxShadow="md" borderRadius="md" p="4">
              <Text fontSize="xl" fontWeight="bold" mb="2">
                Our Clients
              </Text>
              <Text>
                At our event planning company, our clients are at the heart of
                everything we do. We believe that every client is unique and has
                specific needs and expectations for their event. That's why we
                take the time to get to know our clients and work closely with
                them to create a truly personalized experience.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
        <InputGroup maxW="400px" mx="auto">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            border={"dark"}
            mb={"5"}
            type="text"
            placeholder="Search your event"
          />
        </InputGroup>
        <Box bg="gray.700" color="white" py="8">
          {/* <Flex bg="gray.100" py="4" justify="center"> */}
          <Box textAlign="center">
            <p>Copyright © 2023, All rights reserved.</p>
            <p>Created by Shoaib Ahmed</p>
          </Box>
          {/* </Flex> */}
        </Box>{" "}
      </Box>{" "}
    </div>
  );
};

export default Landingpage;

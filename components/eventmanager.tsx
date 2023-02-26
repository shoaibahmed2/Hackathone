import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import UseEventApp from "../customhooks/useaddevent";

const EventManager = () => {
  const {
    title,
    date,
    time,
    location,
    Creator,
    description,
    setTitle,
    setDate,
    setTime,
    setLocation,
    setCreator,
    setDescription,
    submitEventHandler,
  } = UseEventApp();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="gray.100"
    >
      <Box w="full" maxW="lg" p="4" bg="white" borderRadius="md">
        <Heading
          as="h2"
          fontSize="xl"
          mb="4"
          textAlign="center"
          color="gray.800"
        >
          Add Event
        </Heading>

        <FormControl id="title" mb="4">
          <FormLabel color="gray.800">Title</FormLabel>
          <Input
            type="text"
            size="sm"
            bg="white"
            placeholder="Enter the title of the event"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>

        <FormControl id="date" mb="4">
          <FormLabel color="gray.800">Date</FormLabel>
          <Input
            type="date"
            size="sm"
            bg="white"
            placeholder="Select the date of the event"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormControl>

        <FormControl id="time" mb="4">
          <FormLabel color="gray.800">Time</FormLabel>
          <Input
            type="time"
            size="sm"
            bg="white"
            placeholder="Select the time of the event"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </FormControl>

        <FormControl id="location" mb="4">
          <FormLabel color="gray.800">Location</FormLabel>
          <Input
            type="text"
            size="sm"
            bg="white"
            placeholder="Enter the location of the event"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormControl>

        <FormControl id="description" mb="4">
          <FormLabel color="gray.800">Description</FormLabel>
          <Input
            type="text"
            size="sm"
            bg="white"
            placeholder="Enter the description of the event"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <FormControl id="creator" mb="4">
          <FormLabel color="gray.800">Your Name</FormLabel>
          <Input
            type="text"
            size="sm"
            bg="white"
            placeholder="Enter your name"
            name="creator"
            value={Creator}
            onChange={(e) => setCreator(e.target.value)}
          />
        </FormControl>

        <Button
          size="md"
          colorScheme="blue"
          w="full"
          mt="8"
          onClick={() => submitEventHandler()}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default EventManager;

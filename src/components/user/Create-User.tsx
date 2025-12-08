import React, { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  Field,
  Switch,
  HStack,
  Spinner,
  Text,
  Box,
} from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode";
import type { formDataType } from "@/interfaces/constants";
import { CustomToast } from "../custom-toast/Custom-Toast";
import axios from "axios";
const API = import.meta.env.VITE_API_URL;
const Login = () => {
  const [formData, setFormData] = useState<formDataType>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const handleChangeValue = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitFormData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(`${API}/api/user/signUp`, formData);
      setIsLoading(false);
      console.log(res.data);
      setShowToast(true);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  return (
    <Flex
      minH="100vh"
      w="50%"
      align="center"
      justify="center"
      margin="auto"
      px={{ base: 4, md: 8 }}
    >
      <Flex
        direction="column"
        bg={formBackground}
        p={{ base: 6, md: 10 }}
        borderRadius="xl"
        boxShadow="lg"
        w="100%"
        maxW={{ base: "100%", sm: "480px", md: "700px", lg: "900px" }}
      >
        <Heading mb={6} textAlign="center">
          Sign up
        </Heading>

        <Field.Root mb={3}>
          <Field.Label>First Name</Field.Label>
          <Input
            name="first_name"
            value={formData.first_name}
            onChange={handleChangeValue}
            placeholder="John"
            type="text"
            variant="subtle"
          />
        </Field.Root>

        <Field.Root mb={3}>
          <Field.Label>Last Name</Field.Label>
          <Input
            name="last_name"
            value={formData.last_name}
            onChange={handleChangeValue}
            placeholder="Doe"
            type="text"
            variant="subtle"
          />
        </Field.Root>

        <Field.Root mb={3}>
          <Field.Label>Email</Field.Label>
          <Input
            name="email"
            value={formData.email}
            onChange={handleChangeValue}
            placeholder="johndoe@gmail.com"
            type="email"
            variant="subtle"
          />
        </Field.Root>

        <Field.Root mb={3}>
          <Field.Label>Phone</Field.Label>
          <Input
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChangeValue}
            placeholder="123-456-7890"
            type="tel"
            variant="subtle"
          />
        </Field.Root>

        <Field.Root mb={6}>
          <Field.Label>Password</Field.Label>
          <Input
            name="password"
            value={formData.password}
            onChange={handleChangeValue}
            placeholder="**********"
            type="password"
            variant="subtle"
          />
        </Field.Root>

        <Button
          onClick={handleSubmitFormData}
          colorScheme="teal"
          size="lg"
          mb={6}
          w="100%"
        >
          {isLoading ? <Spinner size="lg" /> : " Sign up"}
        </Button>

        {/* Dark mode toggle */}
        <HStack justify="space-between">
          <Text>Enable Dark Mode?</Text>

          <Switch.Root onCheckedChange={toggleColorMode} size="lg">
            <Switch.Control />
            <Switch.Label srOnly>Dark mode</Switch.Label>
          </Switch.Root>
        </HStack>
      </Flex>
      <Box position="fixed" bottom="4" right="4">
        {showToast && (
          <CustomToast
            message="User created successfully"
            type="success"
            onClose={() => setShowToast(false)} // optional
          />
        )}
      </Box>
    </Flex>
  );
};

export default Login;

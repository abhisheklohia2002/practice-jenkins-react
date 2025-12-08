
import { Image, Flex, Button, HStack, chakra, Box } from "@chakra-ui/react";
import { Link } from "react-scroll";
// import data from "./header.data";
import Logo from "../../assets/logo/logo.png";
import type { NavItem } from "../../interfaces/constants";
import MobileDrawer from "./MobileDrawer";



export default function Headers() {
  const data: NavItem[] = [
  { label: "Home", to: "home" },
  { label: "Features", to: "features" },
  { label: "Products", to: "our-products" },
];
const CTA:string = "Create Account";
  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <Image
          src={Logo ?? "N/a"}   
          h="50px"
          alt="Logo"
        />

        {/* Nav Items */}
        <HStack as="nav" gap="5">
          {data.map((item, i) => (
            <Link
              key={i}
              to={item.to}       
              smooth={true}
              duration={500}
              offset={-80}        
            >
              <Button variant={"outline"}>{item.label}</Button>
            </Link>
          ))}
        </HStack>

        {/* Call to action items */}
         <HStack display={{ base: "none", md: "flex" }}>
          <Button>{CTA}</Button>
        </HStack>
         <Box display={{ base: "flex", md: "none" }}>
          <MobileDrawer />
        </Box>
      </Flex>
    </chakra.header>
  );
}

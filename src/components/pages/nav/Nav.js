import React from "react";
import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";

const Nav = () => {
  return (
    <Box w={1200} m="auto">
      <HStack d="flex" alignItems="center" justify="space-between" mt={30}>
        <Box>
          <Image src={logo}></Image>
        </Box>
        <Box>
          <Link to="/" style={{ marginRight: "25px" }}>
            Home
          </Link>
          <Link to="/about" style={{ marginRight: "25px" }}>
            About
          </Link>
          <Link to="/shipping">Create your plan</Link>
        </Box>
      </HStack>
    </Box>
  );
};

export default Nav;

import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import logo from "../../../assets/img/layout/logo.svg"

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <img h='26px' w='175px' my='32px' mb='20px' color={logoColor} src={logo}/>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;

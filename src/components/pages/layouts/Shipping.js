import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import bgImage from "../../../images/hero-blackcup.jpg";

const Shipping = () => {
  return (
    <Box w={1200} m="auto" mt={30}>
      <Box bgImage={bgImage} bgSize="cover" h={450} borderRadius="xl">
        <Flex
          flexDir="column"
          justifyContent="center"
          h={450}
          color="#fff"
          pl={20}
        >
          <Heading fontWeight="900" fontSize={65} mb={7}>
            Create a plan
          </Heading>
          <Text w={560}>
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </Text>
        </Flex>
      </Box>

      <Box mt={100} bgColor="#333d4b" h={450}>
        <HStack
          color="#fff"
          d="flex"
          alignItems="center"
          justify="space-around"
          h={450}
        >
          <Box w={300}>
            <Text color="#fdd6ba" fontSize={70} fontWeight="extrabold">
              01
            </Text>
            <Heading fontSize={30} my={30} fontWeight="bold ">
              Pick your coffee{" "}
            </Heading>
            <Text>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </Text>
          </Box>
          <Box w={300}>
            <Text color="#fdd6ba" fontSize={70} fontWeight="extrabold">
              02
            </Text>
            <Heading fontSize={30} my={30} fontWeight="bold ">
              Choose the frequency{" "}
            </Heading>
            <Text>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </Text>
          </Box>
          <Box w={300}>
            <Text color="#fdd6ba" fontSize={70} fontWeight="extrabold">
              03
            </Text>
            <Heading fontSize={30} my={30} fontWeight="bold ">
              Receive and enjoy!{" "}
            </Heading>
            <Text>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Shipping;

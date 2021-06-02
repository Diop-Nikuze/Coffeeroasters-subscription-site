import { Box, Flex, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";
import React from "react";
import bgImage from "../../../images/hero-blackcup.jpg";
import bgImageMobile from "../../../images/hero-blackcup-mobile.jpg";
import bgStep from "../../../images/bg-steps.png";

const Shipping = () => {
  return (
    <Box
      w={{ base: 340, sm: 340, md: 750, lg: 1100 }}
      m="auto"
      mt={30}
      maxWidth={1100}
    >
      <Box
        bgImage={bgImage}
        bgSize="cover"
        h={450}
        borderRadius="0.5rem"
        bgPosition="center"
      >
        <Flex
          flexDir="column"
          justifyContent="center"
          h={450}
          color="#fff"
          pl={{ base: 5, sm: 5, md: 20, lg: 20 }}
          textAlign={{ base: "center", sm: "center", md: "left", lg: "left" }}
        >
          <Heading
            fontWeight="900"
            fontSize={65}
            mb={7}
            w={{ base: 300, sm: 300, md: 450, lg: 450 }}
          >
            Create a plan
          </Heading>
          <Text w={{ base: 300, sm: 300, md: 450, lg: 450 }}>
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </Text>
        </Flex>
      </Box>

      <SimpleGrid
        columns={3}
        d="flex"
        justifyContent={{
          base: "flex-start",
          sm: "flex-start",
          md: "space-around",
          lg: "space-around",
        }}
        alignItems={{
          base: "center",
          sm: "center",
          md: "normal",
          lg: "normal",
        }}
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
        mt={90}
        bgImage={bgStep}
        h={{ base: "137vh ", sm: "137vh  ", md: "70vh", lg: "70vh" }}
        borderRadius="0.5rem"
        color="#fff"
        textAlign={{ base: "center", sm: "center", md: "left", lg: "left" }}
      >
        <Box w={300} mt={{ base: "2vh", sm: "2vh", md: "15vh", lg: "15vh" }}>
          <Heading color="#fdd6ba" fontSize={70} fontWeight="extrabold">
            01
          </Heading>
          <Heading
            fontSize={25}
            my={{ base: 5, sm: 5, md: 30, lg: 30 }}
            fontWeight="bold "
          >
            Pick your coffee
          </Heading>
          <Text>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </Text>
        </Box>
        <Box w={300} mt={{ base: "2vh", sm: "2vh", md: "15vh", lg: "15vh" }}>
          <Heading color="#fdd6ba" fontSize={70} fontWeight="extrabold">
            02
          </Heading>
          <Heading
            fontSize={25}
            my={{ base: 5, sm: 5, md: 30, lg: 30 }}
            fontWeight="bold "
          >
            Choose the frequency
          </Heading>
          <Text>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </Text>
        </Box>
        <Box w={300} mt={{ base: "2vh", sm: "2vh", md: "15vh", lg: "15vh" }}>
          <Heading color="#fdd6ba" fontSize={70} fontWeight="extrabold">
            03
          </Heading>
          <Heading
            fontSize={25}
            my={{ base: 5, sm: 5, md: 30, lg: 30 }}
            fontWeight="bold "
          >
            Receive and enjoy!
          </Heading>
          <Text>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

{
}
export default Shipping;

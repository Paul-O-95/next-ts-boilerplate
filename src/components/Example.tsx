import {
  MotionFlex,
  MotionContainer,
  MotionBox,
} from "@animations/FramerAnimations";
import { Image } from "@chakra-ui/image";
import { Heading } from "@chakra-ui/layout";
import { useEffect, useState } from "react";

const Example = () => {
  const images = [
    {
      img: "https://images.unsplash.com/photo-1633278372448-500612a9cceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1605708896118-957f660c1555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1630691431226-c3e07acab1b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1623284577359-a0130bb9a86d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1568607689150-17e625c1586e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1222&q=80",
    },
  ];
  const [selectedImg, setSelectedImg] = useState("");
  const handleSelectedImg = (picked: string) => {
    setSelectedImg(picked);
  };

  const variants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 2,
        delay: i * 0.2,
      },
    }),
  };

  useEffect(() => {
    setSelectedImg(images[Math.floor(Math.random() * 6)].img);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MotionFlex
      w="full"
      h="100vh"
      justify="center"
      align="center"
      bg={`url(${selectedImg} ) no-repeat center/cover`}
    >
      <MotionContainer
        maxW="800px"
        h="500px"
        borderRadius="xl"
        boxShadow="2xl"
        d="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        bg="rgba(0,0,0,.7)"
        backdropFilter="10px"
      >
        <Heading
          bgGradient="linear(to-l, #4b28ca, #00ffc8)"
          bgClip="text"
          fontSize="6xl"
          fontStyle="italic"
        >
          Welcome Home
        </Heading>
        <MotionFlex wrap="wrap" justify="space-between">
          {images.map(({ img }, idx) => (
            <MotionBox
              w="200px"
              h="150px"
              key={idx}
              my={4}
              borderRadius="md"
              onClick={() => handleSelectedImg(img)}
              custom={idx}
              variants={variants}
              initial="initial"
              animate="animate"
            >
              <Image
                src={img}
                w="100%"
                h="100%"
                alt=""
                borderRadius="md"
                objectFit="cover"
              />
            </MotionBox>
          ))}
        </MotionFlex>
      </MotionContainer>
    </MotionFlex>
  );
};

export { Example };

import { Button, ButtonProps } from "@chakra-ui/button";
import {
  Box,
  BoxProps,
  Container,
  ContainerProps,
  Flex,
  FlexProps,
} from "@chakra-ui/layout";
import { motion } from "framer-motion";

export const MotionBox = motion<BoxProps>(Box);
export const MotionFlex = motion<FlexProps>(Flex);
export const MotionContainer = motion<ContainerProps>(Container);
export const MotionButton = motion<ButtonProps>(Button);

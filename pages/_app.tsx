import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "theme";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const headerName = (() => {
    const currentPath = router.pathname?.split("/")[1];
    if (currentPath) {
      return `${currentPath.charAt(0).toUpperCase()}${currentPath.slice(1)}`;
    }
    return "Home";
  })();
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <title>{headerName}</title>
      </Head>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;

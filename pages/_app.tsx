import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { Header } from "../components";
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react'

const desiredChainId = ChainId.Mumbai;

// const supportedChainIds = [4];

// const connectors = {
//   injected: {},
// };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      desiredChainId={desiredChainId}
    >
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </ThirdwebProvider>
  );
}

export default MyApp;

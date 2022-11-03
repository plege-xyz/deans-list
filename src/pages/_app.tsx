import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import WalletProvider from "@/components/wallet/Provider";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <WalletProvider>
      <Component {...pageProps} />
    </WalletProvider>
  );
};

export default MyApp;

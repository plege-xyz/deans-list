import React, { FC, ReactNode, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider as WP,
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { endpoint } from "@/constants";

const WalletProvider = ({ children }: { children: ReactNode }) => {
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WP wallets={wallets}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WP>
    </ConnectionProvider>
  );
};

export default WalletProvider;

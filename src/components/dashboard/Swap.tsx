import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Swap, StrataProviders } from "@strata-foundation/react";
import { DEAN_MINT } from "@/constants";

const DeanSwap = () => {
  const { connection } = useConnection();
  const { connected } = useWallet();

  return (
    <StrataProviders
      resetCSS
      onError={(e) => {
        console.error(e);
      }}
    >
      {connected && connection && typeof window != "undefined" && (
        <Swap id={DEAN_MINT} />
      )}
    </StrataProviders>
  );
};

export default DeanSwap;

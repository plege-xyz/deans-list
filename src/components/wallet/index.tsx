import dynamic from "next/dynamic";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const Wallet = () => {
  return (
    <WalletMultiButtonDynamic
      style={{
        background: "#fff",
        color: "#000",
      }}
    />
  );
};

export default Wallet;

import Wallet from "@/components/wallet";
import { useWallet } from "@solana/wallet-adapter-react";

const Dashboard = () => {
  const { connected } = useWallet();

  return (
    <div className="relative flex h-screen w-full flex-col bg-black text-white">
      <div className="TT flex h-20 w-full items-center justify-between border-b border-[#111] px-8 text-3xl">
        DEAN'S LIST
      </div>
      {!connected ? (
        <div className="flex w-full flex-grow items-center justify-center">
          <Wallet />
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;

import Wallet from "@/components/wallet";
import type { NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-white">
      <Wallet />
    </div>
  );
};

export default Dashboard;

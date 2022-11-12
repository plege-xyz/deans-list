import Wallet from "@/components/wallet";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import type { NextPage } from "next";
import { useEffect } from "react";
import { connection, DEAN_MINT } from "@/constants";
import DeanSwap from "@/components/dashboard/Swap";
import { getAccount, getAssociatedTokenAddressSync } from "@solana/spl-token";
import BN from "bignumber.js";
import {
  BountyCard,
  useBounties,
  BountyList,
} from "@strata-foundation/marketplace-ui";

const Dashboard: NextPage = () => {
  const { publicKey } = useWallet();

  const { connection } = useConnection();

  const { bounties, loading, error } = useBounties({
    baseMint: DEAN_MINT,
    search: "",
    sortType: "CONTRIBUTION",
    sortDirection: "DESC",
  });

  console.log(bounties, loading, error);

  const getBalance = async () => {
    try {
      const tokenAccount = await getAssociatedTokenAddressSync(
        DEAN_MINT,
        publicKey!
      );
      if (tokenAccount) {
        const account = await getAccount(connection, tokenAccount);
        return new BN(account.amount).toNumber() / 10 ** 9;
      } else {
        return 0;
      }
    } catch {
      return 0;
    }
  };

  return (
    <div className="h-screen w-screen bg-black">
      <div className="flex h-full w-full items-center justify-center">
        <Wallet />
      </div>
    </div>
  );
};

export default Dashboard;

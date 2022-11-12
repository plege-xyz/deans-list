import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const DEAN_BONDING = new PublicKey(
  "9ERkrMD8gq8PQBABazpziNytJKrxVgyoxd5uEzAqsTc6"
);
const DEAN_MINT = new PublicKey("6LyW1iUpfTPiMxSLMpKCxeAqXDz7nuWCfCNnEaSmibZ1");

const endpoint = clusterApiUrl("mainnet-beta");
const connection = new Connection(endpoint, "confirmed");

export { DEAN_BONDING, DEAN_MINT, endpoint, connection };

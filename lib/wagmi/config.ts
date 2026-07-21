import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  coinbaseWallet,
  metaMaskWallet,
  rabbyWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { createConfig, http } from "wagmi";
import {
  arbitrum,
  avalanche,
  base,
  bsc,
  linea,
  mainnet,
  optimism,
  polygon,
  scroll,
  zksync,
} from "wagmi/chains";

export const supportedChains = [
  mainnet,
  arbitrum,
  base,
  optimism,
  polygon,
  avalanche,
  bsc,
  scroll,
  linea,
  zksync,
] as const;

function getWalletConnectProjectId(): string {
  const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

  if (projectId) {
    return projectId;
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID is required in production. Get a free project ID at https://cloud.walletconnect.com/",
    );
  }

  console.warn(
    "Missing NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID. WalletConnect will not work until configured.",
  );

  return "00000000000000000000000000000000";
}

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        metaMaskWallet,
        rabbyWallet,
        coinbaseWallet,
        walletConnectWallet,
      ],
    },
  ],
  {
    appName: "ArcNavigator",
    projectId: getWalletConnectProjectId(),
  },
);

export const wagmiConfig = createConfig({
  chains: [...supportedChains],
  connectors,
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [optimism.id]: http(),
    [polygon.id]: http(),
    [avalanche.id]: http(),
    [bsc.id]: http(),
    [scroll.id]: http(),
    [linea.id]: http(),
    [zksync.id]: http(),
  },
});

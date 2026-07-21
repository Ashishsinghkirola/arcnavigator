"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

const baseButtonClassName =
  "rounded-lg px-4 py-2 text-sm font-medium transition-all";

const connectClassName = `${baseButtonClassName} border border-white/10 bg-white/5 text-zinc-200 hover:border-white/20 hover:bg-white/10 hover:text-white`;

const connectedClassName = `${baseButtonClassName} border border-white/10 bg-white/[0.07] text-zinc-200 hover:border-white/20 hover:bg-white/10 hover:text-white`;

const errorClassName = `${baseButtonClassName} border border-red-500/30 bg-red-500/10 text-red-300 hover:border-red-500/50 hover:bg-red-500/20`;

const hiddenUntilMountedClassName =
  "opacity-0 pointer-events-none select-none";

type ConnectWalletButtonProps = {
  className?: string;
  fullWidth?: boolean;
};

export function ConnectWalletButton({
  className,
  fullWidth = false,
}: ConnectWalletButtonProps) {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;
        const widthClassName = fullWidth ? "w-full" : "";

        return (
          <div
            aria-hidden={!ready || undefined}
            className={`${widthClassName} ${!ready ? hiddenUntilMountedClassName : ""}`}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    type="button"
                    onClick={openConnectModal}
                    className={className ?? connectClassName}
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    type="button"
                    onClick={openChainModal}
                    className={className ?? errorClassName}
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <button
                  type="button"
                  onClick={openAccountModal}
                  className={className ?? connectedClassName}
                >
                  {account.displayName}
                </button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

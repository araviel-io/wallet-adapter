/// <reference types="react" />
import { MessageSignerWalletAdapterProps, SignerWalletAdapterProps, WalletAdapterProps } from '@araviel/wallet-adapter-base';
import { Wallet, WalletName } from '@araviel/wallet-adapter-wallets';
export interface WalletContextState extends WalletAdapterProps {
    wallets: Wallet[];
    autoConnect: boolean;
    wallet: Wallet | null;
    adapter: ReturnType<Wallet['adapter']> | null;
    disconnecting: boolean;
    select(walletName: WalletName): void;
    signTransaction: SignerWalletAdapterProps['signTransaction'] | undefined;
    signAllTransactions: SignerWalletAdapterProps['signAllTransactions'] | undefined;
    signMessage: MessageSignerWalletAdapterProps['signMessage'] | undefined;
}
export declare const WalletContext: import("react").Context<WalletContextState>;
export declare function useWallet(): WalletContextState;
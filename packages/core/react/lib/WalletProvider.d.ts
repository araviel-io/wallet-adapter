import { WalletError } from '@araviel/wallet-adapter-base';
import { Wallet } from '@araviel/wallet-adapter-wallets';
import { FC, ReactNode } from 'react';
export interface WalletProviderProps {
    children: ReactNode;
    wallets: Wallet[];
    autoConnect?: boolean;
    onError?: (error: WalletError) => void;
    localStorageKey?: string;
}
export declare const WalletProvider: FC<WalletProviderProps>;

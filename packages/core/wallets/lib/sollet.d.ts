import { SafecoinWalletAdapterConfig } from '@araviel/wallet-adapter-safecoin';
import { Wallet } from './types';
export declare const getSafecoinWallet: ({ provider, ...config }?: SafecoinWalletAdapterConfig) => Wallet;

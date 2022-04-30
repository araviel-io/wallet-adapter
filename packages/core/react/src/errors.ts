import { WalletError } from '@araviel/wallet-adapter-base';

export class WalletNotSelectedError extends WalletError {
    name = 'WalletNotSelectedError';
}

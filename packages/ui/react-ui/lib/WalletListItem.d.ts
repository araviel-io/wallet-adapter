import { Wallet } from '@araviel/wallet-adapter-wallets';
import { FC, MouseEventHandler } from 'react';
export interface WalletListItemProps {
    handleClick: MouseEventHandler<HTMLButtonElement>;
    tabIndex?: number;
    wallet: Wallet;
}
export declare const WalletListItem: FC<WalletListItemProps>;

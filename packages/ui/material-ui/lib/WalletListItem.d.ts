import { ListItemProps } from '@material-ui/core';
import { Wallet } from '@araviel/wallet-adapter-wallets';
import { FC, MouseEventHandler } from 'react';
interface WalletListItemProps extends Omit<ListItemProps, 'onClick' | 'button'> {
    onClick: MouseEventHandler<HTMLButtonElement>;
    wallet: Wallet;
}
export declare const WalletListItem: FC<WalletListItemProps>;
export {};

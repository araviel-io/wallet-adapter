import { FC, ReactNode } from 'react';
import { WalletDialogProps } from './WalletDialog';
export interface WalletDialogProviderProps extends WalletDialogProps {
    children: ReactNode;
}
export declare const WalletDialogProvider: FC<WalletDialogProviderProps>;
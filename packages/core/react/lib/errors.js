import { WalletError } from '@araviel/wallet-adapter-base';
export class WalletNotSelectedError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletNotSelectedError';
    }
}
//# sourceMappingURL=errors.js.map
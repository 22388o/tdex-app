import { IconExchange, IconSettings, IconWallet } from './components/icons';
import Account from './pages/Account';
import DeepRestoration from './pages/DeepRestoration';
import DeleteMnemonic from './pages/DeleteMnemonic';
import Deposit from './pages/Deposit';
import Faq from './pages/Faq';
import Privacy from './pages/Privacy';
import QRScanner from './pages/QRScanner';
import Settings from './pages/Settings';
import Network from './pages/Settings/Network';
import ShowMnemonicSettings from './pages/ShowMnemonic/show-mnemonic-settings';
import Terms from './pages/Terms';
import TransactionDetails from './pages/TransactionDetails';
import Backup from './redux/containers/backupContainer';
import ClaimPegin from './redux/containers/claimPeginContainer';
import Exchange from './redux/containers/exchangeContainer';
import Explorers from './redux/containers/explorersContainer';
import LiquidityProviders from './redux/containers/liquidityProvidersContainer';
import Operations from './redux/containers/operationsContainer';
import Receive from './redux/containers/receiveContainer';
import ShowMnemonic from './redux/containers/showMnemonicContainer';
import TorProxy from './redux/containers/torProxyContainer';
import TradeHistory from './redux/containers/tradeHistoryContainer';
import TradeSummary from './redux/containers/tradeSummaryContainer';
import Wallet from './redux/containers/walletContainer';
import Withdrawal from './redux/containers/withdrawalContainer';

export const routerLinks = {
  wallet: '/wallet',
  exchange: '/exchange',
  tradeSummary: '/tradesummary/:txid',
  history: '/history',
  operations: '/operations/:asset_id',
  transactionDetails: '/transaction/:txid',
  withdrawal: '/withdraw/:asset_id',
  receive: '/receive',
  qrScanner: '/qrscanner/:asset_id',
  backup: '/backup',
  showMnemonic: '/show-mnemonic',
  deposit: '/deposit',
  // Settings
  account: '/account',
  claimPegin: '/settings/claim-pegin',
  deleteMnemonic: '/settings/delete-mnemonic',
  faq: '/faq',
  liquidityProvider: '/liquidity-provider',
  privacy: '/privacy',
  settings: '/settings',
  showMnemonicSettings: '/settings/show-mnemonic',
  terms: '/terms',
  deepRestoration: '/settings/deep-restoration',
  explorers: '/settings/explorers',
  network: '/settings/network',
  torProxy: '/settings/tor-proxy',
};

export const ROUTES = [
  {
    path: routerLinks.faq,
    component: Faq,
  },
  {
    path: routerLinks.privacy,
    component: Privacy,
  },
  {
    path: routerLinks.terms,
    component: Terms,
  },
  {
    path: routerLinks.wallet,
    component: Wallet,
  },
  {
    path: routerLinks.exchange,
    component: Exchange,
  },
  {
    path: routerLinks.settings,
    component: Settings,
  },
  {
    path: routerLinks.history,
    component: TradeHistory,
  },
  {
    path: routerLinks.tradeSummary,
    component: TradeSummary,
  },
  {
    path: routerLinks.withdrawal,
    component: Withdrawal,
  },
  {
    path: routerLinks.receive,
    component: Receive,
  },
  {
    path: routerLinks.qrScanner,
    component: QRScanner,
  },
  {
    path: routerLinks.operations,
    component: Operations,
  },
  {
    path: routerLinks.transactionDetails,
    component: TransactionDetails,
  },
  {
    path: routerLinks.account,
    component: Account,
  },
  {
    path: routerLinks.liquidityProvider,
    component: LiquidityProviders,
  },
  {
    path: routerLinks.deposit,
    component: Deposit,
  },
  {
    path: routerLinks.backup,
    component: Backup,
  },
  {
    path: routerLinks.showMnemonic,
    component: ShowMnemonic,
  },
  {
    path: routerLinks.showMnemonicSettings,
    component: ShowMnemonicSettings,
  },
  {
    path: routerLinks.deleteMnemonic,
    component: DeleteMnemonic,
  },
  {
    path: routerLinks.deepRestoration,
    component: DeepRestoration,
  },
  {
    path: routerLinks.claimPegin,
    component: ClaimPegin,
  },
  {
    path: routerLinks.explorers,
    component: Explorers,
  },
  {
    path: routerLinks.network,
    component: Network,
  },
  {
    path: routerLinks.torProxy,
    component: TorProxy,
  },
];

export const TABS = [
  {
    name: 'wallet',
    path: routerLinks.wallet,
    icon: IconWallet,
    component: Wallet,
  },
  {
    name: 'exchange',
    path: routerLinks.exchange,
    icon: IconExchange,
    component: Exchange,
  },
  {
    name: 'settings',
    path: routerLinks.settings,
    icon: IconSettings,
    component: Settings,
  },
];

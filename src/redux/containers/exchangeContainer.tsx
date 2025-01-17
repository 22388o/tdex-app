import { connect } from 'react-redux';

import Exchange from '../../pages/Exchange';
import { getTradablesAssets } from '../../utils/tdex';
import { unlockedUtxosSelector, balancesSelector, lastUsedIndexesSelector } from '../reducers/walletReducer';
import type { RootState } from '../types';

const mapStateToProps = (state: RootState) => {
  return {
    assets: state.assets,
    balances: balancesSelector(state).filter(
      (b) => b.amount > 0 && getTradablesAssets(state.tdex.markets, b.assetHash).length > 0
    ),
    explorerLiquidAPI: state.settings.explorerLiquidAPI,
    isFetchingMarkets: state.app.isFetchingMarkets,
    lastUsedIndexes: lastUsedIndexesSelector(state),
    lbtcUnit: state.settings.denominationLBTC,
    markets: state.tdex.markets,
    network: state.settings.network,
    providers: state.tdex.providers,
    torProxy: state.settings.torProxy,
    utxos: unlockedUtxosSelector(state),
  };
};

export default connect(mapStateToProps)(Exchange);

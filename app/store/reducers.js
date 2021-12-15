import { homeReducer } from '../features/home/redux/reducer';
import { appReducer } from './AppStore/reducer';

/**
 * root reducer of the app
 * @returns combined object of reducers
 */
export default {
    appReducer,
    homeReducer,
};

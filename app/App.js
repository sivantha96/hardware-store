/**
 * React Native App
 * everything starts from the here
 */

import React from 'react';
import AppNavigator from './navigation';
import { Provider } from 'react-redux';
import configureStore from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator } from 'react-native';

const { store, persistor } = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                <AppNavigator />
            </PersistGate>
        </Provider>
    );
};

export default App;

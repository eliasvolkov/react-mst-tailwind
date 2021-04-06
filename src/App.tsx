import React from 'react';
import { Provider, rootStore } from './models/Root';

export const App: React.FC = () => {
    return (
        <Provider value={rootStore}>
            <div className="container mx-auto">
                <h1 className="text-gray-300">Boilerplate</h1>
            </div>
        </Provider>
    );
};

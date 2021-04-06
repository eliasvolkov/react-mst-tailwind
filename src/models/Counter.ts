import { types } from 'mobx-state-tree';

export const Counter = types.model({
    count: types.number,
});

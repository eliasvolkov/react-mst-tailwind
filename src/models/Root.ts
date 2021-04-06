import { useContext, createContext } from "react";
import { types, Instance } from "mobx-state-tree";

import { Counter } from "./Counter";

const RootModel = types.model({
  counter: Counter,
});

let initialState = RootModel.create({
  counter: {
    count: 0
  },
});

const data = localStorage.getItem('rootState');
if (data) {
  const json = JSON.parse(data);
  if (RootModel.is(json)) {
    initialState = RootModel.create(json);
  }
}

export const rootStore = initialState;


export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}

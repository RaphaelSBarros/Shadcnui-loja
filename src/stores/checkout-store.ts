import { create } from "zustand";

type States = {
  name: string;
  address: {
    street: string;
    number: string;
    complemenmt?: string | undefined
    district: string;
    city: string;
    state: string;
  }
}

type Actions = {
  setName: (name: States["name"]) => void;
  setAddress: (address: States["address"]) => void;
}

const initialState: States = {
  name: '',
  address: {
    street: '',
    number: '',
    complemenmt: '',
    district: '',
    city: '',
    state: '',
  }
}

export const useCheckoutStore = create<States & Actions>()(set => ({
  ...initialState,
  setName: (name) => set(state => ({ ...state, name })),
  setAddress: (address) => set(state => ({ ...state, address }))
}));
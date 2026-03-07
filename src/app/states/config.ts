import { create } from "zustand";
import { userT, productsStateT, selectDateT } from "@/app/types/config";
import { User } from "firebase/auth";

/********************* USER  *************************/
export const useUser = create<userT>((set) => ({
  user: {} as User,
  getUser: (data) => set({ user: data }),
}));

/********************* PRODUCTS  *************************/
export const useExpenses = create<productsStateT>((set) => ({
  creating: false,
  setCreating: (data) => set({ creating: data }),
  deleting: false,
  setDeleting: (data) => set({ deleting: data }),
  editing: false,
  setEditing: (data) => set({ editing: data }),
  allProducts: [],
  getAllProducts: (data) => set({ allProducts: data }),
  productsByDate: [],
  getProductsByDate: (data) => set({ productsByDate: data }),
}));

/********************* DATE  *************************/
export const useSelectDate = create<selectDateT>((set) => ({
  year: new Date().getFullYear(),
  setYear: (data) => set({ year: data }),
  month: new Date().getMonth(),
  setMonth: (data) => set({ month: data }),
}));

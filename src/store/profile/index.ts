import { Module } from "vuex";
import { getters } from "./getters";
//import { actions } from "./actions";
import { mutations } from "./mutations";
import { ProfileState } from "@/store/profile/types";
import { RootState } from "@/types";

export const state: ProfileState = {
  user: undefined,
  error: false
};

const namespaced = true;

export const profile: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  //actions,
  mutations
};

import { GetterTree } from "vuex";
import { ProfileState } from "./types";
import { RootState } from "@/types";

export const getters: GetterTree<ProfileState, RootState> = {
  loggedIn(state): boolean {
    const { user } = state;
    return user?.isLoggedIn ?? false;
  }
};

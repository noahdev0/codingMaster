import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  user: object | null;
  token?: string;
};

const initialState: AuthState = {
  user: {},
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState["user"]>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state = initialState;
    },

    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

type AuthActions = typeof authSlice.actions;
export const {
  login,
  logout,
}: { login: AuthActions["login"]; logout: AuthActions["logout"] } =
  authSlice.actions;
export default authSlice.reducer;

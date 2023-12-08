type LoginState = 'idle' | 'logging' | 'error';

type UsersState = {
  loggedUser: User | null;
  loggingState: LoginState;
  token: string;
};

const initial: UsersState = {
  loggedUser: null,
  loggingState: 'idle',
  token: '',
};

const userSlice = createSlice({
  name: 'users',
  initialState: initial,
  reducers: {
    logout: (state: UsersState) => {
      state.loggedUser = null;
      state.token = '';
    },
  },

  extraReducers: (builder) => {
    builder.addCase();
  },
});

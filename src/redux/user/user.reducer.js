//if we define initial state component takes the default value that got assigned
const INITIAL_STATE = {
  currentUser: null,
};

//reducer
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        currentUser: action.payload,
      };
  }
};

export default userReducer;
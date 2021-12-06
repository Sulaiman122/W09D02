const initialState = {
  token: "",
  role: "user",
};

const SignIn = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      const { token, role } = payload;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      return { token, role };

    default:
      return state;
  }
};





export default SignIn;

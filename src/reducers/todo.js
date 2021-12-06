const initialState = {
    todo: [],
  };
  
  const TODO = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "TODO":
        console.log(payload);
        return payload;
      default:
        return state;
    }
  };
  
  
  
  
  
  export default TODO;
  
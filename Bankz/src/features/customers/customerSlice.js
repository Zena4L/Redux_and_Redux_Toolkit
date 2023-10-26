const initialStateCustomer = {
  fullname: "",
  nationalId: "",
  createdAt: "",
};
// define the reducer function

export function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullname: action.payload.fullname,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullname: action.payload.fullname,
      };

    default:
      return state;
  }
}
export function createCustomer(fullname, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullname, nationalId, createdAt: new Date().toISOString() },
  };
}
export function updateName(fullname) {
  return {
    type: "customer/updateName",
    payload: fullname,
  };
}

const initialState = {
  loading: false,
  error: null,
  token: localStorage.getItem('userToken') || null,
  user: null,
  adminToken: localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken') || null,
  adminLoading: false,
  adminError: null
};
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'AUTH_REQUEST':
        return { ...state, loading: true, error: null };
      case 'ADMIN_LOGIN_REQUEST':
        return { ...state, adminLoading: true, adminError: null };
      case 'LOGIN_SUCCESS':
      case 'REGISTER_SUCCESS':
        return { 
          ...state, 
          loading: false, 
          token: action.payload.token,
          user: action.payload.user 
        };
      case 'ADMIN_LOGIN_SUCCESS':
        return {
          ...state,
          adminLoading: false,
          adminToken: action.payload.adminToken
        };
      case 'AUTH_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'ADMIN_LOGIN_FAILURE':
        return { ...state, adminLoading: false, adminError: action.payload };
        case 'LOGOUT':
          return {
            ...initialState,
            token: null,
            adminToken: null
          };
      default:
        return state;
    }
  };
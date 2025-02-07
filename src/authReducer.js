const initialState = {
  loading: false,
  error: null,
  token: localStorage.getItem('userToken') || null,
  user: localStorage.getItem('userData') || null,
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
            localStorage.setItem('userToken', action.payload.token);
            localStorage.setItem('userData', JSON.stringify(action.payload.user));
            return { 
              ...state, 
              loading: false, 
              token: action.payload.token,
              user: action.payload.user 
            };
          
          case 'ADMIN_LOGIN_SUCCESS':
            if (action.payload.rememberMe) {
              localStorage.setItem('adminToken', action.payload.adminToken);
            } else {
              sessionStorage.setItem('adminToken', action.payload.adminToken);
            }
            return {
              ...state,
              adminLoading: false,
              adminToken: action.payload.adminToken
            };
          
          case 'LOGOUT':
            localStorage.removeItem('userToken');
            localStorage.removeItem('userData');
            localStorage.removeItem('adminToken');
            sessionStorage.removeItem('adminToken');
            return initialState;
      default:
        return state;
    }
  };
export const loginUser = (credentials) => async (dispatch) => {
    try {
      dispatch({ type: 'AUTH_REQUEST' });
      
      // Simulated API call for login
      const response = await new Promise((resolve) => 
        setTimeout(() => resolve({ token: 'mock-token' }), 1000)
      );
  
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: response
      });
      
    } catch (error) {
      dispatch({
        type: 'AUTH_FAILURE',
        payload: error.message
      });
    }
  };
  
  export const adminLogin = (credentials) => async (dispatch) => {
    try {
      dispatch({ type: 'ADMIN_LOGIN_REQUEST' });
      
      // Simulated admin verification
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      if (credentials.email === 'admin@gmail.com' && credentials.password === 'admin123') {
        dispatch({
          type: 'ADMIN_LOGIN_SUCCESS',
          payload: { adminToken: 'admin-mock-token' }
        });
      } else {
        throw new Error('Invalid admin credentials');
      }
      
    } catch (error) {
      dispatch({
        type: 'ADMIN_LOGIN_FAILURE',
        payload: error.message
      });
    }
  };
  
  export const registerUser = (userData) => async (dispatch) => {
    try {
      dispatch({ type: 'AUTH_REQUEST' });
      
      // Simulated API call for registration
      const response = await new Promise((resolve) => 
        setTimeout(() => resolve({ token: 'mock-token' }), 1000)
      );
  
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: response
      });
      
    } catch (error) {
      dispatch({
        type: 'AUTH_FAILURE',
        payload: error.message
      });
    }
  };
  
  export const logoutUser = () => (dispatch) => {
    dispatch({ type: 'LOGOUT' });
  };
export const loginUser = (credentials) => async (dispatch) => {
    try {
      dispatch({ type: 'AUTH_REQUEST' });
      
      const response = await new Promise((resolve) => 
        setTimeout(() => resolve({ token: 'mock-token' }), 1000)
      );

      localStorage.setItem('userToken', response.token);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response });
    
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
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      if (credentials.email === 'admin@gmail.com' && credentials.password === 'admin123') {
        const adminToken = 'admin-mock-token';
        
        // Store token based on Remember Me choice
        if (credentials.rememberMe) {
          localStorage.setItem('adminToken', adminToken);
        } else {
          sessionStorage.setItem('adminToken', adminToken);
        }
        
        dispatch({
          type: 'ADMIN_LOGIN_SUCCESS',
          payload: { adminToken }
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
      
      const response = await new Promise((resolve) => 
        setTimeout(() => resolve({ token: 'mock-token' }), 1000)
      );
  
      localStorage.setItem('userToken', response.token);
      dispatch({ type: 'REGISTER_SUCCESS', payload: response });  
    } catch (error) {
      dispatch({
        type: 'AUTH_FAILURE',
        payload: error.message
      });
    }
  };
  
  export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    localStorage.removeItem('adminToken');
    sessionStorage.removeItem('adminToken');
    dispatch({ type: 'LOGOUT' });
  };
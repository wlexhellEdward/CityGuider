const isLocalhost = process.env.NODE_ENV === 'development'; 
export const basePath = isLocalhost ? '' : process.env.REACT_APP_BASE_PATH;
export function saveAuth(data){localStorage.setItem('auth', JSON.stringify(data));}
export function getAuth(){try{return JSON.parse(localStorage.getItem('auth')||'{}')}catch{return {}}}
export function logout(){localStorage.removeItem('auth');}

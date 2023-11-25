const BASE_URL = "https://grupo-3.2023.tecnicasdedisenio.com.ar/api/";
export function verifyToken(string: String) {

    const cookies = string.split(';');

    let token = null

    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');

        if (name !== null) {
            token = value;
            console.log(token)
            if (token !== "null" && token !== "")
                return token
        }
    }
    return false;
}

export const viewProfiles = async (token: any) => {
    const url = BASE_URL + "api/accounts";
  
    try {
      const response = await fetch(url, { headers: { "token": String(token) } });
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
  
      const data = await response.json();
      return data;
    } catch (err) {
      
      throw err; // Re-throw the error to handle it outside this function if needed
    }
  };
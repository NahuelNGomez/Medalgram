const BASE_URL = "https://grupo-3.2023.tecnicasdedisenio.com.ar/api/";
export function verifyToken(string : String) {
    
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

export const viewProfiles = (token: any) => {
    console.log("se corre viewProfiles")
    let res = null;

    const url = BASE_URL+ "api/accounts"

    console.log("URL es: " + url);

    try {
        fetch(url, {headers: {token: token}}).then(response => response.json()).then(data => {console.log(data) 
            return data});
    } catch (err) {
        console.error(err);
    }
    console.log(res)

    return res;
}
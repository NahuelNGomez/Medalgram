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
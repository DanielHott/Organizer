/* require('dotenv/config');
const PORT = process.env.SERVER_PORT */

export const registrateUser = (username: string, password: string) => {
    const url = `https://accounts-backend-n843.onrender.com/create-user`
    try {
    const request = fetch(url, {
        method: 'POST',
        body: JSON.stringify({ 
            username, password
          }),
          headers: {'Content-Type': 'application/json'},
        })
    const result = request.then((response: Response) => response.status)
    return result;
    }    catch(err) {
        return err
    }
}

export const loginUser = (username: string, password: string) => {
    const url = `https://accounts-backend-n843.onrender.com/login`
    try {
    const request = fetch(url, {
        method: 'POST',
        body: JSON.stringify({ 
            username, password
          }),
          headers: {'Content-Type': 'application/json'},
        })
    const result = request.then((response: Response) => response.json())
    return result;
    }    catch(err) {
        return err
    }
}

export const checkToken = (token: string) => {
    const url = `https://accounts-backend-n843.onrender.com/check-token`
    try {
    const request = fetch(url, {
        method: 'POST',
        body: JSON.stringify({ 
            token: token,
          }),
          headers: {'Content-Type': 'application/json'},
        })
    const result = request.then((response: Response) => response.json())
    return result;
    }    catch(err) {
        return err
    }
}
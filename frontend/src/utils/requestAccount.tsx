export const allAccounts = (username: string) => {
    const url = `https://accounts-backend-n843.onrender.com/accounts`
    try {
    const request = fetch(url, {
        method: 'POST',
        body: JSON.stringify({ 
            username
          }),
          headers: {'Content-Type': 'application/json'},
        })
    const result = request.then((response: Response) => response.json())
    return result;
    }    catch(err) {
        return err
    }
}

export const deleteAccounts = (id: number) => {
    const url = `https://accounts-backend-n843.onrender.com/delete`
    try {
    const request = fetch(url, {
        method: 'POST',
        body: JSON.stringify({ 
            id
          }),
          headers: {'Content-Type': 'application/json'},
        })
    const result = request.then((response: Response) => response.json())
    return result;
    }    catch(err) {
        return err
    }
}
//регистрация

export interface ISingUpUser {
  email: string;
  password: string;
  commandId: string;
}

const signUp = async (user: ISingUpUser) => {
    try {
        const response = await fetch(`http://19429ba06ff2.vps.myjino.ru/api/signup`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(user),
        });
        
        if(!response.ok) return
          
        return await response.json();
    } catch (error) {
        console.error(error)
    }

};

export default signUp;

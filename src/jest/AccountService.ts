export type userType = 'Standard' | 'Premium' | 'Gold' | 'Free';

type UserType = {
    userType : userType;
    discount : number;
}

export type User = {
    id : number;
    type : UserType;
}

const users : User[] = [
    { id: 1, type: { userType : 'Free', discount: 0 }},
    { id: 2, type: { userType: 'Standard', discount: 2 }},
    { id: 3, type: { userType: 'Gold', discount: 5 }},
    { id: 4, type: { userType: 'Premium', discount: 15 }}
]

const userTypes : UserType[] = [  
    { userType: 'Free', discount: 0 } , 
    { userType: 'Standard', discount: 2 },
    { userType: 'Gold', discount: 5 },
    { userType: 'Premium', discount: 15 }
]



export class AccountService {

    getUserTypes() : UserType[] {
        return userTypes;
    }

    getUser(id : number) : User {
        return users.filter((user) => user.id === id)[0];
    }
}
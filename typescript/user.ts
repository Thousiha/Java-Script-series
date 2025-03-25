export interface User {
    username: string;
    age: number;
    email: string;
}

// Function to create a user
export function createUser(username: string, age: number, email: string): User {
    return { username, age, email };
}
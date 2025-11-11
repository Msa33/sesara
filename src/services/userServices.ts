import { users } from "../data/users";
export function getUsers() {
 return new Promise<{ data: typeof users }>((resolve) => {
 setTimeout(() => resolve({ data: users }), 500);
 });
}
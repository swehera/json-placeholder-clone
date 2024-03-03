export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
  };
}

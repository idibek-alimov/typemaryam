export interface User {
  id: number | null;
  username: string | undefined;
  name?: string;
  roles?: [];
  age: number | string;
  email: string;
  gender: string;
  phoneNumber: string;
  address: string;
}

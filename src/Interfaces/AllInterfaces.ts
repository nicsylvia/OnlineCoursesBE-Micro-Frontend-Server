export interface UserData extends Document {
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
  token: string;
}

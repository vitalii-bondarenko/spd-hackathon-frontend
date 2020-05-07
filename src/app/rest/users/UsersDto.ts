export enum UserStatus {
  'ADMIN' = 1,
  'USER' = 0
}

export interface UserDto {
  id: number;
  name: string;
  email: string;
  password: string;
  gitlab?: string;
  status: UserStatus;
  courses: object[];
}

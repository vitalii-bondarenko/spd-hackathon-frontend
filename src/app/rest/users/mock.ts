import { UserDto, UserStatus } from './UsersDto';

export const usersList: UserDto[] = [
  {
    id: 1,
    name: 'Vas',
    email: 'email@gmail.com',
    password: 'SDQ#q#r@!',
    gitlab: 'https://gitlab.com/vitalii.bondarenko',
    status: UserStatus.ADMIN,
    courses: [{id: 1, name: 'Angular'}, {id: 2, name: 'JS'}],
  }, {
    id: 2,
    name: 'Len',
    email: 'email2@gmail.com',
    password: '@@!Q#q#r@!',
    gitlab: 'https://gitlab.com/vitalii.bondarenko',
    status: UserStatus.USER,
    courses: [{id: 1, name: 'Angular'}, {id: 2, name: 'JS'}],
  }
];

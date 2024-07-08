import { UsersDataInfoType } from '../../types';
import usersIcon from '/USERS-icon.png';
import activeUsersIcon from '/active-users-icon.png';
import usersWithLoansIcon from '/users-with-loan-icon.png';
import usersWithSavingsIcon from '/users-with-savings-icon.png';

export const usersData: Array<UsersDataInfoType> = [
  {
    icon: usersIcon,
    name: 'USERS',
    total: '2,453',
  },
  {
    icon: activeUsersIcon,
    name: 'ACTIVE USERS',
    total: '2,453',
  },
  {
    icon: usersWithLoansIcon,
    name: 'USERS WITH LOANS',
    total: '12,453',
  },
  {
    icon: usersWithSavingsIcon,
    name: 'USERS WITH SAVINGS',
    total: '102,453',
  },
];

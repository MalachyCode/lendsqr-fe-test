import activateUserIcon from '/activate-user-icon.svg';
import viewDetailsIcon from '/view-details-icon.svg';
import blacklistUserIcon from '/blacklist-user-icon.svg';

export const sideMenuOptions = [
  {
    id: 1,
    icon: viewDetailsIcon,
    name: 'View Details',
  },
  {
    id: 2,
    icon: blacklistUserIcon,
    name: 'Blacklist User',
  },
  {
    id: 3,
    icon: activateUserIcon,
    name: 'Activate User',
  },
];
export const organizationSelectOptionsData = [
  { id: 1, value: '', title: 'Select' },
  { id: 2, value: 'Lendsqr', title: 'Lendsqr' },
  { id: 3, value: 'Irorun', title: 'Irorun' },
  { id: 4, value: 'Lendstar', title: 'Lendstar' },
  { id: 5, value: 'Snapcash', title: 'Snapcash' },
  { id: 6, value: 'Blockacash', title: 'Blockacash' },
  { id: 7, value: 'Kredi', title: 'Kredi' },
];

export const statusSelectOptionsData = [
  { id: 1, value: '', title: 'Select' },
  { id: 2, value: 'Active', title: 'Active' },
  { id: 3, value: 'Inactive', title: 'Inactive' },
  { id: 4, value: 'Pending', title: 'Pending' },
  { id: 5, value: 'Blacklisted', title: 'Blacklisted' },
];

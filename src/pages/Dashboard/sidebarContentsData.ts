import { SidebarHeaderAndContentType } from '../../types';
import userFriendsIcon from '/user-friends-1.png';

export const sidebarContentsData: Array<SidebarHeaderAndContentType> = [
  {
    headerName: 'CUSTOMERS',
    contentsData: [
      {
        imgSrc: userFriendsIcon,
        name: 'Users',
        imgAlt: 'user friends icon',
        imgClassName: 'user-friends-icon',
      },
    ],
  },
];

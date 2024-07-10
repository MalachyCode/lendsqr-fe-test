export const tableHeaders = [
  {
    id: 1,
    name: 'ORGANIZATION',
  },
  {
    id: 2,
    name: 'USERNAME',
  },
  {
    id: 3,
    name: 'EMAIL',
  },
  {
    id: 4,
    name: 'PHONE NUMBER',
  },
  {
    id: 5,
    name: 'DATE JOINED',
  },
  {
    id: 6,
    name: 'STATUS',
  },
];

export const tableBodyContents = [
  {
    id: 1,
    contents: [
      { id: 1, name: 'Lendsqr' },
      { id: 2, name: 'Adedeji' },
      { id: 3, name: 'adedeji@lendsqr.com' },
      { id: 4, name: '08078903721' },
      { id: 5, name: 'May 15, 2020 10:00 AM' },
      { id: 6, name: 'Inactive' },
    ],
  },
  {
    id: 2,
    contents: [
      { id: 1, name: 'Lendsqr' },
      { id: 2, name: 'Adedeji' },
      { id: 3, name: 'adedeji@lendsqr.com' },
      { id: 4, name: '08078903721' },
      { id: 5, name: 'May 15, 2020 10:00 AM' },
      { id: 6, name: 'Blacklisted' },
    ],
  },
  {
    id: 3,
    contents: [
      { id: 1, name: 'Lendsqr' },
      { id: 2, name: 'Adedeji' },
      { id: 3, name: 'adedeji@lendsqr.com' },
      { id: 4, name: '08078903721' },
      { id: 5, name: 'May 15, 2020 10:00 AM' },
      { id: 6, name: 'Pending' },
    ],
  },
  {
    id: 4,
    contents: [
      { id: 1, name: 'Lendsqr' },
      { id: 2, name: 'Adedeji' },
      { id: 3, name: 'adedeji@lendsqr.com' },
      { id: 4, name: '08078903721' },
      { id: 5, name: 'May 15, 2020 10:00 AM' },
      { id: 6, name: 'Active' },
    ],
  },
  {
    id: 5,
    contents: [
      { id: 1, name: 'Lendsqr' },
      { id: 2, name: 'Adedeji' },
      { id: 3, name: 'adedeji@lendsqr.com' },
      { id: 4, name: '08078903721' },
      { id: 5, name: 'May 15, 2020 10:00 AM' },
      { id: 6, name: 'Inactive' },
    ],
  },
  {
    id: 6,
    contents: [
      { id: 1, name: 'Lendsqr' },
      { id: 2, name: 'Adedeji' },
      { id: 3, name: 'adedeji@lendsqr.com' },
      { id: 4, name: '08078903721' },
      { id: 5, name: 'May 15, 2020 10:00 AM' },
      { id: 6, name: 'Blacklisted' },
    ],
  },
  {
    id: 7,
    contents: [
      { id: 1, name: 'Lendsqr' },
      { id: 2, name: 'Adedeji' },
      { id: 3, name: 'adedeji@lendsqr.com' },
      { id: 4, name: '08078903721' },
      { id: 5, name: 'May 15, 2020 10:00 AM' },
      { id: 6, name: 'Pending' },
    ],
  },
  {
    id: 8,
    contents: [
      { id: 1, name: 'Lendsqr' },
      { id: 2, name: 'Adedeji' },
      { id: 3, name: 'adedeji@lendsqr.com' },
      { id: 4, name: '08078903721' },
      { id: 5, name: 'May 15, 2020 10:00 AM' },
      { id: 6, name: 'Active' },
    ],
  },
];

export const statusColumnClassname = (content: { id: number; name: string }) =>
  content.name === 'Blacklisted'
    ? 'blacklisted'
    : content.name === 'Inactive'
    ? 'inactive'
    : content.name === 'Pending'
    ? 'pending'
    : content.name === 'Active'
    ? 'active'
    : '';

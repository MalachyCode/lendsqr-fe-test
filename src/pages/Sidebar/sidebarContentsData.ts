import { SidebarHeaderAndContentType } from '../../types';
import userFriendsIcon from '/user-friends-1.png';
import guarantorIcon from '/guarantor-icon.svg';
import karmaIcon from '/karma-icon.svg';
import loanRequestIcon from '/loan-request-icon.svg';
import loanIcon from '/loan-icon.svg';
import decisionModelsIcon from '/decision-models-icon.svg';
import savingsIcon from '/savings-icon.svg';
import whitelistIcon from '/whitelist-icon.svg';
import briefcaseIcon from '/briefcase-1.png';
import savingProductsIcon from '/saving-products-icon.svg';
import feesAndChargesIcon from '/fees-and-charges-icon.svg';
import transactionsIcon from '/transactions-icon.svg';
import servicesIcon from '/services-icon.svg';
import serviceAccountIcon from '/service-account-icon.svg';
import settlementsIcon from '/settlements-icon.svg';
import reportsIcon from '/reports-icon.svg';
import preferencesIcon from '/preferences-icon.svg';
import feesAndPricingIcon from '/fees-and-pricing-icon.svg';
import auditLogsIcon from '/audit-logs-icon.svg';
import systemMessagesIcon from '/systems-messages-icon.svg';

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
      {
        imgSrc: guarantorIcon,
        name: 'Guarantors',
        imgAlt: 'guarantors icon',
        imgClassName: 'guarantors-icon',
      },
      {
        imgSrc: loanIcon,
        name: 'Loans',
        imgAlt: 'loans icon',
        imgClassName: 'loans-icon',
      },
      {
        imgSrc: decisionModelsIcon,
        name: 'Decision Models',
        imgAlt: 'decision models icon',
        imgClassName: 'decision-models-icon',
      },
      {
        imgSrc: savingsIcon,
        name: 'Savings',
        imgAlt: 'savings icon',
        imgClassName: 'savings-icon',
      },
      {
        imgSrc: loanRequestIcon,
        name: 'Loan Requests',
        imgAlt: 'loan requests icon',
        imgClassName: 'loan-requests-icon',
      },
      {
        imgSrc: whitelistIcon,
        name: 'Whitelist',
        imgAlt: 'whitelist icon',
        imgClassName: 'whitelist-icon',
      },
      {
        imgSrc: karmaIcon,
        name: 'Karma',
        imgAlt: 'karma icon',
        imgClassName: 'karma-icon',
      },
    ],
  },
  {
    headerName: 'BUSINESSES',
    contentsData: [
      {
        imgSrc: briefcaseIcon,
        name: 'Organization',
        imgAlt: 'organization',
        imgClassName: 'organization',
      },
      {
        imgSrc: loanRequestIcon,
        name: 'Loan Products',
        imgAlt: 'loan products icon',
        imgClassName: 'loan-products-icon',
      },
      {
        imgSrc: savingProductsIcon,
        name: 'Savings Products',
        imgAlt: 'savings products icon',
        imgClassName: 'savings-products-icon',
      },
      {
        imgSrc: feesAndChargesIcon,
        name: 'Fees and Charges',
        imgAlt: 'Fees and Charges',
        imgClassName: 'fees-and-charges',
      },
      {
        imgSrc: transactionsIcon,
        name: 'Transactions',
        imgAlt: 'Transactions',
        imgClassName: 'transactions',
      },
      {
        imgSrc: servicesIcon,
        name: 'Services',
        imgAlt: 'Services',
        imgClassName: 'services',
      },
      {
        imgSrc: serviceAccountIcon,
        name: 'Service Account',
        imgAlt: 'Service Account',
        imgClassName: 'service-account',
      },
      {
        imgSrc: settlementsIcon,
        name: 'Settlements',
        imgAlt: 'Settlements',
        imgClassName: 'settlements',
      },
      {
        imgSrc: reportsIcon,
        name: 'Reports',
        imgAlt: 'Reports',
        imgClassName: 'reports',
      },
    ],
  },
  {
    headerName: 'SETTINGS',
    contentsData: [
      {
        imgSrc: preferencesIcon,
        name: 'Preferences',
        imgAlt: 'preferences',
        imgClassName: 'preferences',
      },
      {
        imgSrc: feesAndPricingIcon,
        name: 'Fees and Pricing',
        imgAlt: 'fees and charges icon',
        imgClassName: 'fees-and-charges-icon',
      },
      {
        imgSrc: auditLogsIcon,
        name: 'Audit Logs',
        imgAlt: 'audit logs',
        imgClassName: 'audit-logs-icon',
      },
      {
        imgSrc: systemMessagesIcon,
        name: 'Systems Messages',
        imgAlt: 'Systems messages icon',
        imgClassName: 'systems-messages-icon',
      },
    ],
  },
];

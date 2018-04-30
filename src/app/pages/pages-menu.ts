import { NbMenuItem } from '@tlslaj0417/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Configuration',
    //group: true,
    link: '/pages/config',
    icon: 'nb-locked',
  },
  // {
  //   title: 'Settings',
  //   icon: 'nb-locked',
  //   children: [
  //     {
  //       title: 'Application Config',
  //       link: '',
  //     },
  //     // {
  //     //   title: 'Register',
  //     //   link: '/auth/register',
  //     // },
  //     // {
  //     //   title: 'Request Password',
  //     //   link: '/auth/request-password',
  //     // },
  //     // {
  //     //   title: 'Reset Password',
  //     //   link: '/auth/reset-password',
  //     // },
  //   ],
  // },
];

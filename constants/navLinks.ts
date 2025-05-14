import {
  IconClipboardList,
  IconClock,
  IconDashboard,
  IconHelpSquareRounded,
  IconHome,
  IconLibraryPlus,
  IconSettings,
} from '@tabler/icons-react';

export const navigationLink = {
  navMain: [
    {
      title: 'Sections',
      url: '#',
      items: [
        {
          title: 'Partners',
          url: '/home/partners',
          icon: IconHome,
        },
        {
          title: 'Passport',
          url: '/home/passport',
          icon: IconDashboard,
        },
        {
          title: 'Quests',
          url: '/home/quests',
          icon: IconClipboardList,
        },
      ],
    },
    {
      title: 'Other',
      url: '#',
      items: [
        {
          title: 'Settings',
          url: '/home/settings',
          icon: IconSettings,
        },
        {
          title: 'Help Center',
          url: '#',
          icon: IconHelpSquareRounded,
        },
      ],
    },
  ],
};

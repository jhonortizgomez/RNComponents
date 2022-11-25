import {MenuItem} from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'animation 101',
    icon: 'logo-react',
    component: 'Animation101Screen',
  },
  {
    name: 'animation 102',
    icon: 'logo-react',
    component: 'Animation102Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'Input Text',
    icon: 'alert-circle-outline',
    component: 'TextInputScreen',
  },
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Seccion List',
    icon: 'refresh-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'refresh-outline',
    component: 'ModalScreen',
  },
  {
    name: 'Infinite Scroll',
    icon: 'refresh-outline',
    component: 'InfiniteScrollScreen',
  },
];

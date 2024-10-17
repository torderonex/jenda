import { h, markRaw } from 'vue';
import type { Link } from './types';
import { RouteNames } from '@/shared/config/consts';

import Kanban from '@/shared/assets/icons/sidebar/kanban.svg?component';
import Templates from '@/shared/assets/icons/sidebar/templates.svg?component';
import Analytics from '@/shared/assets/icons/sidebar/analytics.svg?component';
import Members from '@/shared/assets/icons/sidebar/members.svg?component';
import Settings from '@/shared/assets/icons/sidebar/settings.svg?component';

export const links = markRaw<Link[]>([
  { id: 0, title: 'boards', pathName: RouteNames.boards, icon: h(Kanban) },
  { id: 1, title: 'templates', pathName: RouteNames.templates, icon: h(Templates) },
  { id: 2, title: 'analytics', pathName: RouteNames.templates, icon: h(Analytics) },
  { id: 3, title: 'members', pathName: RouteNames.members, icon: h(Members) },
  { id: 4, title: 'settings', pathName: RouteNames.settings, icon: h(Settings) }
]);

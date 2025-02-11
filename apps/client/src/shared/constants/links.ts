import type { WorkspaceLink } from '../config/shared-types'

export const links: WorkspaceLink[] = [
  {
    id: 0,
    name: 'boards',
    pathName: 'boards',
    icon: 'hugeicons:trello',
  },
  {
    id: 1,
    name: 'notes',
    pathName: 'notes',
    icon: 'hugeicons:sticky-note-02',
    badge: true,
  },
  {
    id: 2,
    name: 'templates',
    pathName: 'templates',
    icon: 'hugeicons:block-game',
  },
  {
    id: 3,
    name: 'workflows',
    pathName: 'workflows',
    icon: 'hugeicons:route-block',
    badge: true,
  },
  {
    id: 4,
    name: 'members',
    pathName: 'members',
    icon: 'hugeicons:user-multiple-02',
  },
]

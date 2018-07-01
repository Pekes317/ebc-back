import { DrawerNav } from '../core/models/drawer-nav.model';

export const dashNav: Array<DrawerNav> = [
	{
		name: 'Dashboard',
		path: '/dashboard',
		roles: ['user', 'member', 'owner', 'admin']
	},
	{
		name: 'Admin Dashboard',
		path: '/admin',
		roles: ['member', 'owner', 'admin']
	}
]
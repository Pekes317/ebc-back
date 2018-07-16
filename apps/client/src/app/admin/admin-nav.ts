import { DrawerNav } from '../core/models/drawer-nav.model';

export const adminNav: Array<DrawerNav> = [
	{
		name: 'Dashboard',
		path: '/dashboard',
		roles: ['user', 'member', 'owner', 'admin']
	},
	{
		name: 'Admin Dashboard',
		path: '/admin',
		roles: ['member', 'owner', 'admin']
	},
	{
		name: 'User Manager',
		path: '/admin/u/users',
		roles: ['owner', 'admin']
	},
	{
		name: 'Items',
		path: '/admin/i/items',
		roles: ['member', 'owner', 'admin']
	},
	{
		name: 'Samples',
		path: '/admin/i/samples',
		roles: ['member', 'owner', 'admin']
	},	
	{
		name: 'Templates',
		path: '/admin/i/templates',
		roles: ['member', 'owner', 'admin']
	},
	{
		name: 'Filemanger',
		path: '/admin/f/file',
		roles: ['member', 'owner', 'admin']
	}
]
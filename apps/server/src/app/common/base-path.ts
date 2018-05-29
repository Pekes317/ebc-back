import { dirname } from 'path';
import { app } from 'firebase-admin';

export const nodeDir: string = dirname(require.main.filename);
export const devDir: string = `${nodeDir.substring(0, nodeDir.lastIndexOf('apps'))}/dist`;
export const prodDir: string = `${nodeDir}/ebc/`;

export const appDir = () => {
	let env: string = 'dev';
	
	switch (env) {
		case 'dev':
			return devDir;
		case 'local':
			return nodeDir;
		case 'prod':
			return prodDir;
	}
}
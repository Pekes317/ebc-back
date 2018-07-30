import { dirname } from 'path';

export const nodeDir: string = dirname(require.main.filename);
export const devDir: string = `${nodeDir.substring(0, nodeDir.lastIndexOf('apps'))}/dist`;
export const stageDir: string = `${nodeDir}/`;
export const prodDir: string = `${nodeDir}/ebc/`;

export const appDir = () => {
	let env: string = 'dev';
	
	switch (env) {
		case 'dev':
			return devDir;
		case 'local':
			return nodeDir;
		case 'stage':
			return stageDir;
		case 'prod':
			return prodDir;
	}
}
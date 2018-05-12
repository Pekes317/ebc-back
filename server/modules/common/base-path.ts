import { dirname } from 'path';
import { app } from 'firebase-admin';

export const nodeDir: string = dirname(require.main.filename);
export const devDir: string = `${nodeDir.substring(0, nodeDir.lastIndexOf('server'))}/dist`;
export const prodDir: string = `${nodeDir}/ebc/`;

let env: string = 'dev';

export const appDir = () => {
	switch (env) {
		case env: 'dev'
			return devDir;
		case env: 'local'
			return nodeDir;
		case env: 'prod'
			return prodDir;
	}
}
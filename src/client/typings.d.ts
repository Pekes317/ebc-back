// Typings reference file, see links for more information
// https://github.com/typings/typings
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

declare var System: any;

declare module '*/ebc-client.json' {
	
	interface value {
		apiKey: string;
		authDomain: string;
		databaseURL: string;
		projectId: string;
		storageBucket: string;
		messagingSenderId: string;
	} 

	export default value;
}
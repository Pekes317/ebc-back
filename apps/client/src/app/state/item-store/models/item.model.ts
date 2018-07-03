import { Sample } from './sample.model';

export interface Item extends Sample {
  client: Array<Collected>;
  data: string;
  user: UserBack;
}

export interface UserBack {
  id: number;
  fbUser: string;
  email: string;
}

export interface Collected { }
import { Dictionary, EntityState as IEntityState } from '@ngrx/entity';
import { CONTENT_TYPE } from './models';

export interface EntityState<T> extends IEntityState<T> {
  loaded?: boolean; // has the Accounts list been loaded
  error?: any; // last none error (if any)
}

export class State<T> implements EntityState<T> {
  ids!: string[];
  entities!: Dictionary<T>;
  constructor() {
    this.ids = [];
    this.entities = {};
  }
}

export interface IEntity {
  id: string;
  name?: string | undefined;
  type?: string | undefined;
  features?: CONTENT_TYPE[];
}

export function interfaceKeys<T>(keys: Record<keyof T, 1>) {
  return Object.keys(keys) as Array<keyof T>;
}

// export class Entity<T> implements IEntity<T> {
//   id!: string;
//   fields: T;
//   sys: Sys;
//   metadata: Metadata;
//   toPlainObject(): object {
//     return {
//       fields: this.fields,
//       sys: this.sys,
//       metadata: this.metadata,
//     };
//   }
//   update(): Promise<Entry<T>> {
//     return new Promise((resolve) => {
//       resolve(this);
//     });
//   }

//   constructor(entry: any) {
//     this.fields = entry;
//     this.sys = {
//       type: '',
//       id: '',
//       createdAt: '',
//       updatedAt: '',
//       locale: '',
//       contentType: {
//         sys: {
//           type: 'Link',
//           linkType: 'ContentType',
//           id: '',
//         },
//       },
//     };
//     this.id = entry.id;
//     this.metadata = {
//       tags: [],
//     };
//   }
// }

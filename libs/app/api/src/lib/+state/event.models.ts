import { CONTENT_TYPE, IAppFields } from '@the/utility/models';

/**
 * Interface for the 'Event' data
 */
export interface EventEntity extends IAppFields {
  id: string; // Primary ID;
  features?: CONTENT_TYPE[];
}

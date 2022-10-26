import { TypeModifier } from '@angular/compiler';
import { IEvent, IEventFields } from '@the/utility/models';

/**
 * Interface for the 'Event' data
 */
export interface EventEntity extends IEventFields {
  id: string; // Primary ID
}

import { InjectionToken } from '@angular/core';
import { IAppFields } from '@the/utility/models';

export const APP_CONFIG = new InjectionToken<IAppFields>('app.config');

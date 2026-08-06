import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideLucideIcons } from '@lucide/angular'

import { LUCIDE_ICONS } from '@shared/icons/icon-registry'

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),
        provideLucideIcons(...LUCIDE_ICONS),
    ],
}

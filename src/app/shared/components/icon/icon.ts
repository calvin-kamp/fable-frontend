import { Component, computed, input } from '@angular/core'
import { LucideDynamicIcon } from '@lucide/angular'
import { ICONS, type IconName } from '@shared/icons/icon-registry'

type IconSize = 'xs' | 'sm' | 'md' | 'lg'

@Component({
    selector: 'ui-icon',
    imports: [LucideDynamicIcon],
    templateUrl: './icon.html',
    styleUrl: './icon.scss',
})
export class Icon {
    readonly name = input.required<IconName>()
    readonly size = input<IconSize>('md')

    protected readonly lucideName = computed((): string => ICONS[this.name()])

    protected readonly modifierClass = computed((): string =>
        this.size() === 'md' ? '' : `icon--${this.size()}`,
    )
}

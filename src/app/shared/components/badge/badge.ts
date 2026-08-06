import { Component, computed, input } from '@angular/core'

type BadgeType = 'primary' | 'success' | 'warning' | 'danger'

@Component({
    selector: 'ui-badge',
    imports: [],
    templateUrl: './badge.html',
    styleUrl: './badge.scss',
})
export class Badge {
    readonly type = input<BadgeType>()

    protected readonly modifierClass = computed((): string => {
        const type: BadgeType | undefined = this.type()

        return type ? `badge--${type}` : ''
    })
}

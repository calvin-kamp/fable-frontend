import { Component, computed, input } from '@angular/core'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg'

@Component({
    selector: 'ui-avatar',
    imports: [],
    templateUrl: './avatar.html',
    styleUrl: './avatar.scss',
})
export class Avatar {
    readonly name = input<string>()
    readonly size = input<AvatarSize>('md')
    readonly more = input<number>(0)

    protected readonly initials = computed((): string => {
        const name: string = this.name() ?? ''

        return name
            .split(' ')
            .filter(Boolean)
            .slice(0, 2)
            .map((word) => word[0])
            .join('')
            .toUpperCase()
    })

    protected readonly label = computed((): string => {
        if (this.more() > 0) return `${this.more()} more`

        return this.name() ?? 'not assigned'
    })

    protected readonly modifierClasses = computed((): string => {
        const classes: string[] = []

        if (!this.name() && this.more() === 0) classes.push('avatar--none')
        if (this.size() !== 'md') classes.push(`avatar--${this.size()}`)

        return classes.join(' ')
    })
}

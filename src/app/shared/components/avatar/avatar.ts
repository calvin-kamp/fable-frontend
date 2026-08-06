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

    protected readonly initials = computed((): string => {
        const name: string = this.name() ?? ''

        return name
            .split(' ')
            .filter(Boolean)
            .slice(0, 2)
            .map((word) => word[0])
            .join('')
    })

    protected readonly label = computed((): string => this.name() ?? 'not assigned')

    protected readonly modifierClasses = computed((): string => {
        const classes: string[] = []

        if (!this.name()) classes.push('avatar--none')
        if (this.size() !== 'md') classes.push(`avatar--${this.size()}`)

        return classes.join(' ')
    })
}

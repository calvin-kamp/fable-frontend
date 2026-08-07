import { Component, computed, input } from '@angular/core'
import { Avatar } from '../avatar/avatar'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg'

@Component({
    selector: 'ui-avatar-group',
    imports: [Avatar],
    templateUrl: './avatar-group.html',
    styleUrl: './avatar-group.scss',
})
export class AvatarGroup {
    readonly names = input.required<string[]>()
    readonly size = input<AvatarSize>('md')
    readonly visibleNamesAmount = input<number>(3)

    readonly label = input<string>('People')

    protected readonly visibleNames = computed((): string[] =>
        this.names().slice(0, this.visibleNamesAmount()),
    )

    protected readonly overflowCount = computed(
        (): number => this.names().length - this.visibleNamesAmount(),
    )
}

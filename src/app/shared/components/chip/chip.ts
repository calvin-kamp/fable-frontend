import { Component, computed, input, output } from '@angular/core'
import { Icon } from '../icon/icon'

@Component({
    selector: 'ui-chip',
    imports: [Icon],
    templateUrl: './chip.html',
    styleUrl: './chip.scss',
})
export class Chip {
    readonly color = input<string>()
    readonly label = input.required<string>()
    readonly removable = input<boolean>(false)

    readonly remove = output<void>()

    protected readonly modifierClass = computed((): string =>
        this.removable() ? 'chip--removable' : '',
    )
}

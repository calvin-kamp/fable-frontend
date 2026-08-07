import { Component, computed, input } from '@angular/core'

type ButtonVariant = 'primary' | 'secondary' | 'subtle' | 'danger' | 'link'
type ButtonSize = 'sm' | 'md' | 'lg'

@Component({
    selector: 'ui-button',
    imports: [],
    templateUrl: './button.html',
    styleUrl: './button.scss',
})
export class Button {
    readonly variant = input<ButtonVariant>('primary')
    readonly size = input<ButtonSize>('md')

    readonly icon = input<boolean>(false)
    readonly disabled = input<boolean>(false)
    readonly loading = input<boolean>(false)

    protected readonly isDisabled = computed((): boolean => this.disabled() || this.loading())

    protected readonly modifierClasses = computed((): string[] => {
        const classes: string[] = []

        classes.push(`button--${this.variant()}`)

        if (this.icon()) classes.push(' button--icon')
        if (this.loading()) classes.push(' button--loading')
        if (this.size() !== 'md') classes.push(` button--${this.size()}`)

        return classes
    })
}

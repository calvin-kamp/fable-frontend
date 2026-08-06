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
    variant = input<ButtonVariant>('primary')
    size = input<ButtonSize>('md')

    icon = input<boolean>(false)
    disabled = input<boolean>(false)
    loading = input<boolean>(false)

    modifierClasses = computed((): string => {
        let classes: string = ''

        classes += `button--${this.variant()}`

        if (this.icon()) classes += ' button--icon'
        if (this.loading()) classes += ' button--loading'
        if (this.size() !== 'md') classes += ` button--${this.size()}`

        return classes
    })
}

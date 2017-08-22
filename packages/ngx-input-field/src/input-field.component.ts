import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-input-field',
    templateUrl: './input-field.component.html'
})

export class InputFieldComponent {
    @Input() className: string;
    @Input() type: string;
    @Input() title: string;
}

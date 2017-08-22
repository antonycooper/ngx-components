import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ngx-button',
    templateUrl: './button.component.html'
})

export class ButtonComponent {
    @Input() className: string;
    @Input() type: string;
    @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
    isValid: boolean = false;

    handleClick(event: any): void {
        this.onClick.emit(event);
    }

    isValidForm(): boolean {
        return this.isValid;
    }
}

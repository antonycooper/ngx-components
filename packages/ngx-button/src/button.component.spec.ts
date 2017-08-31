import {
    async,
    inject,
    TestBed
} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
    let fixture, component;

    beforeAll(() => {
        TestBed.resetTestingModule();
    });

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [
                    ButtonComponent
                ],
                providers: [],
                schemas: [NO_ERRORS_SCHEMA]
            });
            fixture = TestBed.createComponent(ButtonComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        })
    );

    it('should create the app', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
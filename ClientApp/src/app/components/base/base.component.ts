import { Directive, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export { NgbActiveModal };
export { takeUntil };

@Directive({})
export class BaseComponent implements OnDestroy {
    protected unsubscribe = new Subject<void>();
    protected unsubscribeChildren = new Subject<void>();

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.unsubscribeChildren.next();
        this.unsubscribeChildren.complete();
    }
}

@Directive({})
export class BasePopupComponent extends BaseComponent {
    static classModalWindow = '';
    @Input() params: any;
    protected constructor(public activeModal: NgbActiveModal) {
        super();
    }
    close(result?: any) {
        this.activeModal.close(result);
    }
}
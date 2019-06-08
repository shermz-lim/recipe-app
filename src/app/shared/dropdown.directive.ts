import { Directive, HostListener, HostBinding, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.elRef.nativeElement.children[1].classList.add('show');
        } else {
            this.elRef.nativeElement.children[1].classList.remove('show');
        }
    }

    constructor(private elRef: ElementRef) { }

}
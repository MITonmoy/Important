
import { bindable, bindingMode, inject, customAttribute, DOM } from "aurelia-framework";
import { TooltipService } from "../../helpers/tooltip-service";
import { bootstrapOptions } from "../../helpers/bootstrap-options";
import { AppLogger } from "../../helpers/app-logger";
import { Tether } from "tether";
// import * as velocity from "velocity-animate";

// declare var velocity: any;

@customAttribute("popmenu")
@inject(DOM.Element, TooltipService, AppLogger)
export class PopoverMenu {
    @bindable title: string;
    @bindable body: string;
    @bindable position = bootstrapOptions.popoverPosition;
    @bindable disabled = false;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) isOpen = false;
    @bindable trigger = bootstrapOptions.popoverTrigger;
    @bindable customPopover: Element;
    @bindable onToggle: (open: boolean) => any;

    triggers: string[] = [];
    oldPosition: string;
    bodyElement: Element;
    titleElement: Element;
    tether: Tether;
    isAttached: boolean;
    listeners: { in: () => void; out: () => void; click: () => void; outside: (event: any) => void; };

    validPositions: string[] = ['top', 'bottom', 'left', 'right'];
    valuesChanged: boolean = false;
    visible: boolean = false;
    popover: Element;

    showClass: string;

    constructor(private _elm: Element, private _ttSrv: TooltipService, private _lg: AppLogger) {
        this._lg.log("popoverMenu ctored.")

        this.listeners = {
            in: () => this.handleShow(),
            out: () => this.handleHide(),
            click: () => {
                this.visible ? this.handleHide() : this.handleShow()
            },
            outside: event => this.handleOutside(event)
        }
    }

    bind() {
        this._lg.log("popoverMenu bind.")

        if (!this.validPositions.some((v: string) => this.position == v)) {
            this.position = 'top';
        }

        this.triggers = this.trigger.split(' ');

        this.showClass = bootstrapOptions.version === 4 ? 'show' : 'in';
    }

    attached() {
        this._lg.log("popoverMenu attached.")
        this._ttSrv.setTriggers(this._elm, this.triggers, this.listeners);

        if (this.customPopover) {
            this._lg.log("popoverMenu setting display none to ref.")
            this.customPopover.setAttribute("display", "none");
        }

        this.isAttached = true;
        if (this.isOpen) {
            this._lg.log("popoverMenu calling handleShow.")
            this.handleShow();
        }
    }

    detached() {
        this._ttSrv.removeTriggers(this._elm, this.triggers, this.listeners);

        if (this.popover && document.body.contains(this.popover)) {
            if (!this.customPopover) {
                document.body.removeChild(this.popover);
            } else {
                this.popover.setAttribute("display", "none");
            }
        }

        if (this.tether) {
            this.tether.destroy();
        }
    }

    isOpenChanged() {
        if (!this.isAttached) {
            return;
        }

        if (this.isOpen) {
            this.handleShow();
        } else {
            this.handleHide();
        }
    }

    titleChanged() {
        this.valuesChanged = true;

        if (this.titleElement) {
            this.titleElement.innerHTML = this.title;
        }
    }

    bodyChanged() {
        this.valuesChanged = true;

        if (this.bodyElement) {
            this.bodyElement.innerHTML = this.body;
        }
    }

    positionChanged(newValue: string, oldValue: string) {
        if (!this.validPositions.some((v: string) => v == newValue)) {
            this.position = oldValue;
            return;
        }
        this.oldPosition = oldValue;

        this.valuesChanged = true;
    }

    triggerChanged(newValue: any, oldValue: any) {
        this._ttSrv.removeTriggers(this._elm, this.triggers, this.listeners);

        this.triggers = this.trigger.split(' ');
        this._ttSrv.setTriggers(this._elm, this.triggers, this.listeners);
    }

    handleShow() {
        if (this.visible || this.disabled) {
            return;
        }

        if (!this.popover || this.valuesChanged) {
            this.createPopover();
            this.valuesChanged = false;
        }

        if (this.customPopover) {
            if (this.tether) {
                this.tether.destroy();
            }

            this.tether = this._ttSrv.createAttachment(this._elm, this.popover, this.position);
        }

        this.popover.setAttribute("display", "block");
        this.tether.position();
        /*
                velocity(this.popover, 'stop')
                    .then(() => {
                        velocity(this.popover, 'fadeIn')
                            .then(() => {
                                this.popover.classList.add(this.showClass);
        
                                if (typeof this.onToggle === 'function') {
                                    this.onToggle({ open: true });
                                }
                            });
                    });
        //*/
        this.popover.classList.add(this.showClass);

        if (typeof this.onToggle === 'function') {
            this.onToggle(true);
        }

        this.visible = true;
        this.isOpen = true;

    }

    handleHide() {
        if (!this.visible) {
            return;
        }
        /*
                velocity(this.popover, 'stop')
                    .then(() => {
                        velocity(this.popover, 'fadeOut')
                            .then(() => {
                                this.popover.classList.remove(this.showClass);
        
                                if (typeof this.onToggle === 'function') {
                                    this.onToggle({ open: false });
                                }
                            });
                    });
        //*/
        this.popover.classList.remove(this.showClass);

        if (typeof this.onToggle === 'function') {
            this.onToggle(false);
        }
        this.visible = false;
        this.isOpen = false;
    }

    handleOutside(event: any) {
        if (!this.visible) {
            return;
        }

        if (this._elm !== event.target && !this.popover.contains(event.target)) {
            this.handleHide();
        }
    }

    getPositionClass(position: any) {
        return (bootstrapOptions.version === 4 ? 'popover-' : '') + position;

    }

    createPopover() {
        let arrow = document.createElement('div');
        arrow.classList.add('arrow');

        if (this.customPopover) {
            this.popover = this.customPopover;

            this.popover.classList.remove(this.getPositionClass(this.oldPosition));

            this.popover.classList.add('popover');
            this.popover.classList.add(this.getPositionClass(this.position));

            if (!this.popover.querySelector('.arrow')) {
                this.popover.appendChild(arrow);
            }
        } else {
            if (this.popover) {
                document.body.removeChild(this.popover);
            }

            this.popover = document.createElement('div');
            this.popover.classList.add('popover');
            this.popover.classList.add(this.getPositionClass(this.position));

            this.popover.appendChild(arrow);

            if (this.title) {
                this.titleElement = document.createElement('h3');
                this.titleElement.classList.add('popover-title');
                this.titleElement.innerHTML = this.title;
                this.popover.appendChild(this.titleElement);
            }


            let content = document.createElement('div');
            content.classList.add('popover-content');
            this.bodyElement = document.createElement('p');
            this.bodyElement.innerHTML = this.body;
            content.appendChild(this.bodyElement);
            this.popover.appendChild(content);

            document.body.appendChild(this.popover);

            if (this.tether) {
                this.tether.destroy();
            }

            this.tether = this._ttSrv.createAttachment(this._elm, this.popover, this.position);
        }
    }
}
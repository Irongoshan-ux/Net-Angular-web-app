import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TipContent } from '../../interfaces/tipContent';
import { BaseComponent } from 'src/app/components/base/base.component';

@Component({
    selector: 'app-daily-greeting',
    templateUrl: './daily-greeting.component.html',
    styleUrls: ['./daily-greeting.component.scss'],
})
export class DailyGreetingComponent extends BaseComponent implements DoCheck, OnDestroy {
    public shouldShowTip: boolean = true;
    public shouldShowAnimation: boolean = true;
    public shouldShowFadeAnimation: boolean = false;
    public tip: TipContent = { tipText: "Hey! You're Awesome! Tap anywhere to close this screen." };
    private tipShowing: boolean = false;

    private closingInterval!: NodeJS.Timer;
    private fadingInterval!: NodeJS.Timer;
    private showingInterval!: NodeJS.Timer;

    private lastTipDisplayTimeCookieName: string = 'lastTipDisplayTime';

    constructor(private cookies: CookieService) {
        super();
    }

    ngDoCheck() {
        this.shouldShowTipCheck();
    }

    public onClick() {
        this.close();
    }

    private shouldShowTipCheck() {
        if (this.tipShowing) return;
        const lastTipDisplayTimeJSON = this.cookies.get(this.lastTipDisplayTimeCookieName);
        let lastTipDisplayTime: Date | null;
        if (lastTipDisplayTimeJSON) {
            lastTipDisplayTime = new Date(lastTipDisplayTimeJSON);
        } else {
            lastTipDisplayTime = null;
        }

        if (!lastTipDisplayTime) {
            this.showTip();
            return;
        }

        let thresholdTime: Date;
        if (lastTipDisplayTime) {
            thresholdTime = lastTipDisplayTime;
        } else {
            thresholdTime = new Date();
        }
        const hoursBetweenTips = 3;

        thresholdTime.setHours(lastTipDisplayTime.getHours() + hoursBetweenTips);

        if (thresholdTime < new Date()) {
            this.showTip();
        }
    }

    private showTip() {
        this.tipShowing = true;
            this.setupShowing();

            const tipShowTime = 4500;
            this.fadingInterval = setTimeout(() => {
                this.close();
            }, tipShowTime);
    }

    private setupShowing() {
        this.shouldShowTip = true;
        const animationDelay = 100;
        this.showingInterval = setTimeout(() => {
            this.shouldShowAnimation = true;
        }, animationDelay);
    }

    private close() {
        this.shouldShowFadeAnimation = true;
        const fadeDuration = 1000;

        this.closingInterval = setTimeout(() => {
            this.shouldShowTip = false;
            this.shouldShowAnimation = false;
            this.shouldShowFadeAnimation = false;
            this.tipShowing = false;
        }, fadeDuration);

        const newTime = new Date();
        const newTimeString = newTime.toString();
        this.cookies.set(this.lastTipDisplayTimeCookieName, newTimeString);
    }
}

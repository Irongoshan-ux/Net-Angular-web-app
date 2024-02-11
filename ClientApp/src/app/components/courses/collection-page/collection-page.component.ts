import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../components/base/base.component';
import { MenuGroupItem } from "../../../interfaces/contentPageModel";
import { AppService } from 'src/app/services/app.service';

@Component({
    selector: 'app-collection-page',
    templateUrl: './collection-page.component.html',
    styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent extends BaseComponent implements OnInit {
    public pageData!: MenuGroupItem;
    constructor(private appService: AppService) {
        super();
    }

    ngOnInit(): void {
        this.appService.searchCollection()
            .subscribe((pageData) => {
                this.pageData = pageData;
            });
    }
}

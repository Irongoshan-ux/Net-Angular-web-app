import {Component, Input} from '@angular/core';
import {NavigationService} from '../../../../services/navigation.service';

@Component({
  selector: 'app-collection-title',
  templateUrl: './collection-title.component.html',
  styleUrls: ['./collection-title.component.scss']
})
export class CollectionTitleComponent {
    @Input()
  collectionName!: string;
    @Input()
  collectionIcon!: string;
    @Input()
  color!: string;
    
    constructor(private navigation: NavigationService) {}

    public goBack(): void {
        this.navigation.back();
    }
}

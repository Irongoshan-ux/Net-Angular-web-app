import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-content-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-not-found.component.html',
  styleUrls: ['./content-not-found.component.scss']
})
export class ContentNotFoundComponent {
    constructor(private router: Router) {
    }

    public onGoHome(): void {
        this.router.navigate([''])
    }
}

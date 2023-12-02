import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StyledButtonComponent } from '../../components/styled-button/styled-button.component';
@Component({
  selector: 'app-store',
  standalone: true,
  imports: [StyledButtonComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
  constructor(public router: Router) {}

}

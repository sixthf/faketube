import { Component } from '@angular/core';
import { sideBar } from '../models/sideBar.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  listSideBar = sideBar;
}

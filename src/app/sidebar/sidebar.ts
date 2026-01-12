import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  activeComponent:string = "dashboard"
// 1. Create the Output decorator (the "speaker")
  @Output() navClick = new EventEmitter<string>();

  // 2. Function called when a button is clicked
  onNavigate(view: string) {
    // 3. Emit the value ('dashboard' or 'history') up to the parent
    this.activeComponent=view;
    this.navClick.emit(view);
  }
}

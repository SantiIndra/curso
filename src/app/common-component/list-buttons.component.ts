/* eslint-disable @angular-eslint/no-input-rename */
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-list-buttons',
  template: `
    <div class="btn-group" role="group">
      <button class="btn btn-info" *ngIf="hasView" (click)="view.emit(null)" title="Ver"><i class="fas fa-eye"></i></button>
      <button class="btn btn-success" *ngIf="hasEdit" (click)="edit.emit(null)" title="Editar"><i class="fas fa-pen"></i></button>
      <button class="btn btn-danger" *ngIf="hasDelete" (click)="confirmDelete()" title="Borrar"><i class="far fa-trash-alt"></i></button>
    </div>
  `
})
export class ListButtonsComponent {
  @Input('can-view') canView = true
  @Input('can-edit') canEdit = true
  @Input('can-delete') canDelete = true
  @Input('confirm-delete-message') confirmDeleteMsg = ''
  @Output() view: EventEmitter<null> = new EventEmitter<null>();
  @Output() edit: EventEmitter<null> = new EventEmitter<null>();
  @Output() delete: EventEmitter<null> = new EventEmitter<null>();

  get hasView(): boolean { return this.canView && this.view.observed; }
  get hasEdit(): boolean { return this.canEdit && this.edit.observed; }
  get hasDelete(): boolean { return this.canDelete && this.delete.observed; }

  confirmDelete() {
    if(!this.confirmDeleteMsg || window.confirm(this.confirmDeleteMsg)) {
      this.delete.emit(null)
    }
  }
}
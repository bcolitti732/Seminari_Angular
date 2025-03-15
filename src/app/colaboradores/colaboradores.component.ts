import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Component, inject, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ConfirmDialogComponent } from '../confirmDialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NombrePipe } from '../pipes/nombre.pipe';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colaboradores',
  imports: [CommonModule, NombrePipe, FormsModule],
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css'],
  standalone: true
})
export class ColaboradoresComponent implements OnInit {
  users: User[] = [];
  query = '';
  userService = inject(UserService);
  dialog: MatDialog = inject(MatDialog);

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { user: User };
    if (state && state.user) {
      this.users.push(state.user);
    }
  }

  async obtenerUsuarios() {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        console.log(this.users);
      },
      error: (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    });
  }

  trackByUserId(index: number, user: any): number {
    return user.id;
  }

  @Output() changeNameEvent = new EventEmitter<string>();
  changeName(Name: string) {
    this.changeNameEvent.emit(Name);
  }

  deleteUser(i: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        console.log("delete User ", i);
        this.users.splice(i, 1);
      }
    });
  }
}
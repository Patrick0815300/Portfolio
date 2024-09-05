import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe, MatButtonModule, CommonModule, ScrollAnimationDirective],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
  animations: [
    trigger('dialogAnimation', [
      // "hidden" State
      state('hidden', style({
        transform: 'translateY(100%)',
        opacity: 0,
        display: 'none'
      })),
      // "visible" State
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1,
        display: 'flex'
      })),
      transition('hidden => visible', [
        style({ display: 'flex' }),
        animate('0.5s ease-out')
      ]),
      transition('visible => hidden', [
        animate('0.5s ease-in')
      ])
    ])
  ]
})
export class ContactformComponent {
  constructor(public dialog: MatDialog) { }

  http = inject(HttpClient)
  formComplete: boolean = false;
  isDialogVisible = false;

  contactData = {
    name: "",
    email: "",
    message: "",
    isChecked: false
  }

  isFormComplete(): boolean {
    const { name, email, message, isChecked } = this.contactData;
    const isNameValid = typeof name === 'string' && name.trim().length > 1;
    const isEmailValid = typeof email === 'string' && email.trim().length > 4;
    const isMessageValid = typeof message === 'string' && message.trim().length > 3;

    const isValid = isNameValid && isEmailValid && isMessageValid && isChecked;
    this.formComplete = isValid;

    return isValid;
  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  openDialog() {
    this.isDialogVisible = true;
    setTimeout(() => {
      this.isDialogVisible = false;
    }, 3000);
  }
}
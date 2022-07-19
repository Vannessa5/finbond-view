import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import swal from 'sweetalert2';
import {Router} from "@angular/router";
import {UserService} from "../shared/user.service";
import {Role, User} from "../shared/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public form: FormGroup;
  formIsInValid = false;
  isLoading = false;
  message = "";
  showUser: boolean = false;
  user: User = new User();

  constructor(private formBuilder: FormBuilder, private messageService: MessageService, private router: Router,
              private userService: UserService) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });


  }


  ngOnInit(): void {
  }

  checkForm(form: FormGroup): void {
    if (!this.form.valid) {
      this.form.controls['username'].markAsTouched();
      this.form.controls['password'].markAsTouched();
      this.formIsInValid = true;
    } else {
      this.isLoading = true;
      this.formIsInValid = false;
      this.submit();
    }

  }

  submit(): void {
    this.userService.authenticate(this.form.value).subscribe(user => {
      this.isLoading = false;
      this.showUser = true
        this.user = user;

    }, error => {
      this.isLoading = false;
      this.showWarning(this.message);
    });
  }

  formatRoles(roles: Role[]): string {
    return roles.map(role => role.name).join(",")
  }

  showWarning(message: string): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Warning',
      detail: message,
    });
  }
}

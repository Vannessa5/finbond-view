import {Component, NgModule, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../shared/user.service";
import swal, {SweetAlertIcon} from "sweetalert2";
import {SelectItem} from "primeng/api";
import {RoleService} from "../shared/role.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  formIsInvalid: boolean = false;
  isLoading: boolean = false;
  roles: SelectItem[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router,
              private userService: UserService, private roleService: RoleService) {
    this.form = formBuilder.group({
      email: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      phoneNumber: [null],
      id: [null],
      password: [null, [Validators.required]],
      username: [null, [Validators.required]],
      authorities: [[], [Validators.required]],
      enabled: [false],
      userLocked: [false],
      createdBy: [null],
    })

  }

  ngOnInit(): void {
    this.initRoles();
  }

  initRoles(): void {
    this.roleService.getAllRoles(25, 0).subscribe(result => {

      if (result && result.content.length > 0) {
        this.roles = [];
        result.content.forEach((item: any) => {
          this.roles.push({label: item.name, value: item});
        });
      }
    });
  }

  checkForm(form: FormGroup) {
    if (!this.form.valid) {
      this.form.controls['authorities'].markAsTouched();
      this.form.controls['lastName'].markAsTouched();
      this.form.controls['firstName'].markAsTouched();
      this.form.controls['email'].markAsTouched();
      this.form.controls['username'].markAsTouched();
      this.form.controls['password'].markAsTouched();
      this.formIsInvalid = true;
    } else {
      this.isLoading = true;
      this.formIsInvalid = false;
      this.submit();
    }
  }

  submit(): void {
    const user = this.form.value;
    user.createdBy = user.firstName;
    this.save(user);
  }

  routeToList() {
    this.router.navigate(['/login']);
  }

  save(user: any): void {
    if (user.id) {
      this.userService.update(user).subscribe(user => {
        this.isLoading = false;
        this.showMessage('Successfully updated user!', 'success');
      }, error => {
        this.isLoading = false;
        this.showMessage('Failed to update user!', 'error');
      });
    } else {
      this.userService.save(user).subscribe(user => {
        this.isLoading = false;
        this.showMessage('Successfully created user!', 'success');
      }, error => {
        this.isLoading = false;
        this.showMessage('Failed to create user!', 'error');
      });
    }
  }

  showMessage(message: string, type: SweetAlertIcon): void {
    swal.fire({
      title: type === 'success' ? 'Success!' : 'Error!',
      text: message,
      icon: type,
      target: 'body',
      confirmButtonText: 'OK',
    }).then(() => {
        this.routeToList();
      }
    );
  }
}

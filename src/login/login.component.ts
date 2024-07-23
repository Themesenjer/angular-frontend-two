import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../app/auth.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe(response => {
      // Manejar respuesta
    });
  }

  goToRegister(): void {
    this.router.navigate(['/registro']);
  }
}

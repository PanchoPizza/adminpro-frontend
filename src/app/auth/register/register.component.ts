import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm = this.formBuilder.group(
    {
      nombre: ['Fran', Validators.required],
      email: ['fran@fma.com', [Validators.required, Validators.email]],
      password: ['123', Validators.required],
      password2: ['123', Validators.required],
      terminos: [false, Validators.requiredTrue],
    },
    {
      validators: this.passwordsIguales('password', 'password2'),
    }
  );

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService,private router: Router) {}

  crearUsuario() {
    this.formSubmitted = true;
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
   this.usuarioService.crearUsuario(this.registerForm.value).subscribe(
     (resp: any) =>{
       if(resp.status){
      Swal.fire({
        title: 'Exito!',
        text: resp.message,
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result)=>{
        if(result.isConfirmed){
        this.router.navigateByUrl('/login');
      }
      });
    // console.log(resp);
   
    } else {
     // console.log('formulario no valido');
Swal.fire({
  title: 'Error!',
  text: 'No exitoso',
  icon: 'error',
  confirmButtonText: 'OK'
});
}
},
(err) => console.warn(err)
);
    }
    else{
      console.log('Formulario no valido');
    }
  }

  campoNoValido(campo: string): boolean {
    if (this.registerForm.get(campo).invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  contrasenasNoValidas() {
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;
    if (pass1 !== pass2 && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  aceptaTerminos() {
    return !this.registerForm.get('terminos').value && this.formSubmitted;
  }

  passwordsIguales(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);
      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }
    };
  }



}

// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import {
//   FormBuilder,
//   FormGroup,
//   FormsModule,
//   ReactiveFormsModule,
//   Validators,
// } from '@angular/forms';
// interface Inscripcion {
//   id: number;
//   nombre: string;
//   cedula: string;
//   oficio: string;
//   destrezas: string;
//   evento: string;
//   aceptar: boolean;
// }

// @Component({
//   selector: 'app-form-inscripcion',
//   standalone: true,
//   imports: [CommonModule, FormsModule, ReactiveFormsModule],

//   templateUrl: './form-inscripcion.component.html',
//   styleUrl: './form-inscripcion.component.css',
// })
// export class FormInscripcionComponent {
//   form: FormGroup;
//   eventos = [
//     'Taller de pintura',
//     'Curso de programación',
//     'Conferencia de liderazgo',
//   ];
//   inscripciones: Inscripcion[] = [];
//   usuario = {
//     nombre: 'Christian Salazar',
//     cedula: '123456789',
//     oficio: 'Desarrollador',
//   };

//   constructor(private fb: FormBuilder) {
//     form: FormGroup;
//     inscripciones: any[] = []; // Simula la BD en memoria
//     eventos = ['Taller de pintura', 'Conferencia de tecnología', 'Clase de Yoga']; // Opciones de eventos

//     usuario = {
//       nombre: 'Christian Salazar',
//       cedula: '123456789',
//       oficio: 'Estudiante de Ingeniería',
//     }; // Datos simulados del usuario autenticado

//     constructor(private fb: FormBuilder) {
//       this.form = this.fb.group({
//         nombre: [{ value: this.usuario.nombre, disabled: true }, Validators.required],
//         cedula: [{ value: this.usuario.cedula, disabled: true }, Validators.required],
//         oficio: [{ value: this.usuario.oficio, disabled: true }, Validators.required],
//         destrezas: ['', Validators.required],
//         evento: ['', Validators.required],
//         resumen: [{ value: '', disabled: true }],
//         acepta: [false, Validators.requiredTrue],
//       });
//     }

//     actualizarResumen() {
//       const eventoSeleccionado = this.form.get('evento')?.value;
//       this.form.get('resumen')?.setValue(
//         `Te inscribiste en el evento: ${eventoSeleccionado}`
//       );
//     }

//     inscribirse() {
//       if (this.form.valid) {
//         const nuevaInscripcion = {
//           id: this.inscripciones.length + 1,
//           ...this.form.getRawValue(),
//         };

//         this.inscripciones.push(nuevaInscripcion);
//         console.log('Inscripción guardada:', nuevaInscripcion);
//         alert('¡Inscripción exitosa!');
//         this.form.reset();
//       } else {
//         alert('Por favor, completa el formulario correctamente.');
//       }
//     }
// }

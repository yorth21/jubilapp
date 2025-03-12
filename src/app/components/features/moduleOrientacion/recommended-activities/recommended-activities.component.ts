import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../../../../modules/shared/models/activity';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-recommended-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommended-activities.component.html',
  styleUrl: './recommended-activities.component.css',
})
export class RecommendedActivitiesComponent {
  user: any = {};
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUserData().subscribe((userData) => {
      if (userData) {
        this.user = userData;
      }
    });
  }

  activites = signal<Activity[]>([
    {
      name: 'YOGA CON PERSONAS DE SU EDAD',
      img: 'https://comfamiliarhuila.com/media/2025/01/programa-adulto-mayor-2.jpg',
      link: 'https://comfamiliarhuila.com/recreacion/programa-adulto-mayor/',
      recomendaciones: `

📌 Descripción:
 es una actividad diseñada para mejorar la flexibilidad, el equilibrio y la relajación. A través de movimientos suaves y técnicas de respiración, los participantes experimentarán un profundo bienestar físico y mental, promoviendo una mejor calidad de vida.

🎯 Beneficios:
✅ Mejora la movilidad y reduce dolores articulares
✅ Ayuda a prevenir caídas fortaleciendo el equilibrio
✅ Reduce el estrés y mejora la calidad del sueño
✅ Fomenta la socialización y el bienestar emocional

💡 ¡Anímate a descubrir los beneficios del yoga en un ambiente seguro y acogedor! `,
    },
    {
      name: 'BAILOTERAPIA GRUPALES',
      img: 'https://www.comfamiliar.com/wp-content/uploads/2023/09/IMG_7661-1024x684.jpg',
      link: 'https://www.comfamiliar.com/conoce-las-ultimas-novedades-de-nuestro-programa-de-gerontologia/',
      recomendaciones: `
📌 Descripción:
 es una actividad diseñada para mejorar la flexibilidad, el equilibrio y la relajación. A través de movimientos suaves y técnicas de respiración, los participantes experimentarán un profundo bienestar físico y mental, promoviendo una mejor calidad de vida.

🎯 Beneficios:
✅ Mejora la movilidad y reduce dolores articulares
✅ Ayuda a prevenir caídas fortaleciendo el equilibrio
✅ Reduce el estrés y mejora la calidad del sueño
✅ Fomenta la socialización y el bienestar emocional

💡 ¡Anímate a descubrir los beneficios del yoga en un ambiente seguro y acogedor!  `,
    },
    {
      name: 'CAMINATAS CORTAS',
      img: 'https://images.pexels.com/photos/10431325/pexels-photo-10431325.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '',
      recomendaciones: `
📌 Descripción:
  Las **caminatas cortas** son una excelente forma de mantenerse activo y disfrutar del aire libre. Diseñadas especialmente para adultos mayores, estas caminatas se realizan a un ritmo moderado, en entornos seguros y agradables, promoviendo la salud física y el bienestar emocional.

      🎯 Beneficios:
      ✅ Mejora la circulación y la salud cardiovascular
      ✅ Fortalece músculos y articulaciones, reduciendo el riesgo de lesiones
      ✅ Ayuda a controlar el peso y mejorar la movilidad
      ✅ Reduce el estrés y mejora el estado de ánimo gracias al contacto con la naturaleza

      💡 ¡Anímate a participar en nuestras caminatas cortas y disfruta de los beneficios de moverte al aire libre en un ambiente seguro y amigable! 🚶‍♂️🌿☀️
      `,
    },
  ]);

  goToModule(route: string) {
    this.router.navigate([route]);
  }
}

import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../../../../modules/shared/models/activity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommended-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommended-activities.component.html',
  styleUrl: './recommended-activities.component.css',
})
export class RecommendedActivitiesComponent {
  constructor(private router: Router) {}

  activites = signal<Activity[]>([
    {
      name: 'YOGA CON PERSONAS DE SU EDAD',
      img: 'https://comfamiliarhuila.com/media/2025/01/programa-adulto-mayor-2.jpg',
      link: 'https://comfamiliarhuila.com/recreacion/programa-adulto-mayor/',
    },
    {
      name: 'BAILOTERAPIA GRUPALES',
      img: 'https://www.comfamiliar.com/wp-content/uploads/2023/09/IMG_7661-1024x684.jpg',
      link: 'https://www.comfamiliar.com/conoce-las-ultimas-novedades-de-nuestro-programa-de-gerontologia/',
    },
    {
      name: 'CAMINATAS CORTAS',
      img: 'https://scontent.fclo1-3.fna.fbcdn.net/v/t1.6435-9/119096039_3281889578527498_5153445949562518240_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGOnApeOkqjTPhL6HiczJNjuvxYNH09Ljm6_Fg0fT0uOYkPwPrTHS7QBDwh3DSsxoqHWoJ40cBzIKIaMDRnjurd&_nc_ohc=LueWPK5GwWcQ7kNvgEHAuXV&_nc_oc=AdhEcBmi2lYAjgWZQfVwkv5JMmRJMufo9rYIo5uIOdsOx-VuXzI8Sksx3691VTU87sQGpgdLQSiDvSSP_Y76qX5l&_nc_zt=23&_nc_ht=scontent.fclo1-3.fna&_nc_gid=AqqqgbB0JTAiF4sdpf1NTCp&oh=00_AYB5Px9S5xJ5XpBWojep3anp_XUQ-BAjG86pJy_HX8oX1g&oe=67ED16A7',
      link: '',
    },
  ]);

  goToModule(route: string) {
    this.router.navigate([route]);
  }
}

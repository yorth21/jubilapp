import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.isAdmin()) {
    return true;
  }

  alert('No tienes permisos para acceder a esta sección.');
  router.navigate(['/unauthorized']); // Redirige a una página de acceso denegado
  return false;
};

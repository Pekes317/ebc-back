import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { EbcSvgComponent } from '../ebc-svg/ebc-svg.component';

@Injectable()
export class SvgGuardService implements CanDeactivate<EbcSvgComponent> {

  constructor() { }

  canDeactivate(comp: EbcSvgComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> | boolean {
      let token = localStorage.getItem('token');
      if(token) {
        return true;
      }

      comp.navAlert();
      return false;
  }
}

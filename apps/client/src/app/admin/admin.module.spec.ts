import { AdminModule } from './admin.module';
import { TranslateService } from '@ngx-translate/core';

describe('AdminModule', () => {
  let adminModule: AdminModule;
  let translate: TranslateService;

  beforeEach(() => {
    adminModule = new AdminModule(translate);
  });

  it('should create an instance', () => {
    expect(adminModule).toBeTruthy();
  });
});

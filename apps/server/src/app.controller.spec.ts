import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { expect } from 'chai';

import { AppController } from './app.controller';

describe('AppController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [AppController],
    })
      .compile()
      .then(compiledModule => (module = compiledModule));
  });

  let controller: AppController;
  beforeEach(() => {
    controller = module.get(AppController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});

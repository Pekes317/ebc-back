import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { ClientRoutesController } from './client-routes.controller';
import { expect } from 'chai';

describe('ClientRoutesController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        ClientRoutesController
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: ClientRoutesController;
  beforeEach(() => {
    controller = module.get(ClientRoutesController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});

import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { MobileController } from './mobile.controller';
import { expect } from 'chai';

describe('ObjectController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        MobileController
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: MobileController;
  beforeEach(() => {
    controller = module.get(MobileController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});

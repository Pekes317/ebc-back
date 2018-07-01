import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { ObjectController } from './object.controller';
import { expect } from 'chai';

describe('ObjectController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        ObjectController
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: ObjectController;
  beforeEach(() => {
    controller = module.get(ObjectController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});

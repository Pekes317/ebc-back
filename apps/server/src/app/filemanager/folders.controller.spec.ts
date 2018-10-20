import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { expect } from 'chai';

import { FoldersController } from './folders.controller';

describe('ClientRoutesController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        FoldersController
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: FoldersController;
  beforeEach(() => {
    controller = module.get(FoldersController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});

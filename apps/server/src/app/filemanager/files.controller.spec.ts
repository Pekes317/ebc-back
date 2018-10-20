import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { expect } from 'chai';

import { FilesController } from './files.controller';

describe('ClientRoutesController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        FilesController
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: FilesController;
  beforeEach(() => {
    controller = module.get(FilesController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});

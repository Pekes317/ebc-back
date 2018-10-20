import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { expect } from 'chai';

import { FolderService } from './folder.service';

describe('ClientRoutesController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        FolderService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: FolderService;
  beforeEach(() => {
    controller = module.get(FolderService);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});

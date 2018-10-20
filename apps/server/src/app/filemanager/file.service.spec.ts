import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { expect } from 'chai';

import { FileService } from './file.service';

describe('ClientRoutesController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [FileService]
    })
      .compile()
      .then(compiledModule => (module = compiledModule));
  });

  let controller: FileService;
  beforeEach(() => {
    controller = module.get(FileService);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});

import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { FileService } from './file.service';
import { expect } from 'chai';

describe('ClientRoutesController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        FileService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: FileService;
  beforeEach(() => {
    controller = module.get(FileService);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});

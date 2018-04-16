import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { FilemanagerService } from './filemanager.service';
import { expect } from 'chai';

describe('ClientRoutesController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        FilemanagerService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: FilemanagerService;
  beforeEach(() => {
    controller = module.get(FilemanagerService);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});

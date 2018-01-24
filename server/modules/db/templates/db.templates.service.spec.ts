import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { DbTempService } from './db.templates.service'
import { expect } from 'chai';

describe('DbTempService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        DbTempService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: DbTempService;
  beforeEach(() => {
    service = module.get(DbTempService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});

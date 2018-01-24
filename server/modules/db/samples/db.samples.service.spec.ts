import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { DbSamplesService } from './db.samples.service';
import { expect } from 'chai';

describe('DbSamplesService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        DbSamplesService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: DbSamplesService;
  beforeEach(() => {
    service = module.get(DbSamplesService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});

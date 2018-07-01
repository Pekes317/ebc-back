import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { DbService } from './db.service';
import { expect } from 'chai';

describe('DbService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        DbService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: DbService;
  beforeEach(() => {
    service = module.get(DbService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});

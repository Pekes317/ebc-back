import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { DbItemsService } from './db.items.service';
import { expect } from 'chai';

describe('DbItemsService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
         DbItemsService       ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: DbItemsService;
  beforeEach(() => {
    service = module.get(DbItemsService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});

import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { DbCollectedService } from './db.collected.service';
import { expect } from 'chai';

describe('DbCollectedService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        DbCollectedService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: DbCollectedService;
  beforeEach(() => {
    service = module.get(DbCollectedService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});

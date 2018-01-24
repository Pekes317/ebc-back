import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { DbUsersService } from './db.users.service';
import { expect } from 'chai';

describe('DbUsersService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        DbUsersService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: DbUsersService;
  beforeEach(() => {
    service = module.get(DbUsersService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});

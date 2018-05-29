import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { MobileService } from './mobile.service';
import { expect } from 'chai';

describe('DbService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        MobileService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: MobileService;
  beforeEach(() => {
    service = module.get(MobileService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});

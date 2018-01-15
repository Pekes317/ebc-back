import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { ClientRoutesService } from './client-routes.service';
import { expect } from 'chai';

describe('RouteService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        ClientRoutesService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: ClientRoutesService;
  beforeEach(() => {
    service = module.get(ClientRoutesService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});

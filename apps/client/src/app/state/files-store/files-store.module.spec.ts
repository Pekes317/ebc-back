import { FilesStoreModule } from './files-store.module';

describe('FilesStoreModule', () => {
  let filesStoreModule: FilesStoreModule;

  beforeEach(() => {
    filesStoreModule = new FilesStoreModule();
  });

  it('should create an instance', () => {
    expect(filesStoreModule).toBeTruthy();
  });
});

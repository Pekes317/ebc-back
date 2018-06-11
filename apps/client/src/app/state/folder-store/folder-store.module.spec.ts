import { FolderStoreModule } from './folder-store.module';

describe('FolderStoreModule', () => {
  let folderStoreModule: FolderStoreModule;

  beforeEach(() => {
    folderStoreModule = new FolderStoreModule();
  });

  it('should create an instance', () => {
    expect(folderStoreModule).toBeTruthy();
  });
});

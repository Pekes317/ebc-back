import { IFileManagerConfiguration } from '@beezleeart/ngx-filemanager';

export const fileManagerConfig: IFileManagerConfiguration = {
  allowChooseMultipleFiles: true,
  urls: {
    filesUrl: null,
    folderMoveUrl: '/api/folder/move',
    foldersUrl: '/api/folder'
  }
}
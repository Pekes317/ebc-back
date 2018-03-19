import { IFileManagerConfiguration } from '@rign/angular2-filemanager';

export const fileManagerConfig: IFileManagerConfiguration = {
  allowChooseMultipleFiles: true,
  urls: {
    filesUrl: '/api/files',
    folderMoveUrl: '/api/folder/move',
    foldersUrl: '/api/folder'
  }
}
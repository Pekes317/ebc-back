import { IFileManagerConfiguration } from '@beezleeart/ngx-filemanager';

export const fileManagerConfig: IFileManagerConfiguration = {
  allowChooseMultipleFiles: true,
  urls: {
    filesUrl: '/api/manager/file',
    folderMoveUrl: '/api/manager/folder/move',
    foldersUrl: '/api/manager/folder',
    iconUrl: '/assets/icons'
  }
}
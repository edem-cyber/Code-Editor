import { PayloadAction } from '@reduxjs/toolkit';
import filesReducer, { addActiveFile, setFiles } from './reducer';
import { initialState } from './reducer';

describe('files reducer', () => {
  test('should return the initial state if known action is provided', () => {
    expect(filesReducer(undefined, {} as PayloadAction)).toEqual(initialState);
  });
  test('should set user files when action is setFiles', () => {
    const userFiles = [
      {
        id: '1',
        name: 'index.js',
        relativePath: 'test/index.js',
        code: "console.log('hello world')",
        extension: '.js',
      },
    ];
    const expectedResult = {
      ...initialState,
      activeFiles: [],
      userFiles,
    };
    expect(filesReducer(initialState, setFiles(userFiles))).toEqual(expectedResult);
  });
  test('should add new file id when file is an active file', () => {
    const field = '1';
    const expectedState = {
      ...initialState,
      activeFiles: [field],
    };
    expect(filesReducer(initialState, addActiveFile(field))).toEqual(expectedState);
  });
});

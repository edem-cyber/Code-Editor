import React, { ChangeEvent } from 'react';
import { AppBar, makeStyles, Tab, Tabs } from '@material-ui/core';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import selectActiveFiles from '../../../store/selectors/selectActiveFiles/selectActiveFiles';
import { setEditorActiveFile } from '../../../store/reducers/files/reducer';

const EditorContainer = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const activeFiles = useAppSelector(selectActiveFiles);
  const editorActiveFile = useAppSelector((state) => state.files.editorActiveFile);
  const activeFilesIds = useAppSelector((state) => state.files.activeFiles);
  if (!activeFiles.length) {
    return <div className={classes.emptyMessage}>Select a file</div>;
  }

  const onTabClick = (event: ChangeEvent<{}>, tabPosition: number) => {
    console.log('foo');
    const activeFileId = activeFilesIds[tabPosition];
    if (activeFileId !== editorActiveFile) {
      dispatch(setEditorActiveFile(activeFileId));
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={editorActiveFile ? activeFilesIds.indexOf(editorActiveFile) : 0}
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          onChange={onTabClick}
        >
          {activeFiles.map((activeFile) => {
            return <Tab key={activeFile.id} label="foo" />;
          })}
        </Tabs>
      </AppBar>

      {activeFiles.map((activeFile) => {
        return <TabPanel key={activeFile.id} />;
      })}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    height: '100%',
    overflow: 'hidden',
  },
  emptyMessage: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.font,
  },
}));

export default EditorContainer;

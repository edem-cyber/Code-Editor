import React from 'react';
import UserFile from '../../../types/UserFile';
import { makeStyles } from '@material-ui/core';

interface Props {
  activeFile: UserFile;
  editorActiveFile: string | null;
}
const CustomTabPanel = (props: Props) => {
  const classes = usestyles();
  const {
    activeFile: { id: activeFileId },
    editorActiveFile,
  } = props;
  return (
    <div className={classes.root} role="tabpanel" hidden={ editorActiveFile!== activeFileId}> 
      CustomTabPanel
    </div>
  );
};

const usestyles = makeStyles(() => ({
  root: {
    height: '100%',
  },
}));
export default CustomTabPanel;

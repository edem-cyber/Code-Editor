import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import { commonColors } from '../../../theme/colors';
import { AuthButton } from '../../../auth/AuthButtons';
import { useAppDispatch } from '../../../store/hooks';
import readFiles from '../../../store/thunks/readFiles/readFiles';

const OpenWorkspace = () => {
  const classes = useStyles();
  const directoryInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const onClick = () => {
    directoryInputRef.current?.click();
  };
  const onFilesUploaded = async () => {
    try {
      const files = directoryInputRef.current?.files as FileList;
      await dispatch(readFiles(files));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <AuthButton className={classes.button} onClick={onClick}>
        Open Workspace
      </AuthButton>
      <input
        type="file"
        directory=""
        className={classes.input}
        webkitdirectory=""
        ref={directoryInputRef}
        onChange={onFilesUploaded}
      />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  input: {
    display: 'none',
  },
  button: {
    color: commonColors.white,
  },
}));

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    directory?: string;
    webkitdirectory?: string;
  }
}
export default OpenWorkspace;

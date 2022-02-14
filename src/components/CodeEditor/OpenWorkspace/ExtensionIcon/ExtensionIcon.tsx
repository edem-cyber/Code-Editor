import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as CSSIcon } from '../../../../assets/images/css3.svg';
import { ReactComponent as PythonIcon } from '../../../../assets/images/python.svg';
import { ReactComponent as RubyIcon } from '../../../../assets/images/ruby.svg';
import { ReactComponent as HTML5Icon } from '../../../../assets/images/html-5.svg';
import { ReactComponent as JavaIcon } from '../../../../assets/images/java.svg';
import { ReactComponent as PhpIcon } from '../../../../assets/images/php.svg';
import { ReactComponent as ReactIcon } from '../../../../assets/images/react.svg';
import { ReactComponent as TypescriptIcon } from '../../../../assets/images/typescript.svg';
import { ReactComponent as JavascriptIcon } from '../../../../assets/images/javascript.svg';
import { ReactComponent as GoIcon } from '../../../../assets/images/golang.svg';

interface Props {
  extension?: string;
}

const ExtensionIcon = (props: Props) => {
  const classes = useStyles();
  switch (props.extension) {
    case 'jsx':
    case 'tsx':
      return <ReactIcon className={classes.icon} />;
    case 'js':
      return <JavascriptIcon className={classes.icon} />;
    case 'ts':
      return <TypescriptIcon className={classes.icon} />;
    case 'css':
      return <CSSIcon className={classes.icon} />;
    case 'php':
      return <PhpIcon className={classes.icon} />;
    case 'java':
      return <JavaIcon className={classes.icon} />;
    case 'html':
      return <HTML5Icon className={classes.icon} />;
    case 'rb':
      return <RubyIcon className={classes.icon} />;
    case 'go':
      return <GoIcon className={classes.icon} />;
    case 'py':
      return <PythonIcon className={classes.icon} />;
    default:
      return <HTML5Icon className={classes.icon} />;
  }
};

const useStyles = makeStyles(() => ({
  icon: {
    height: '15px',
    width: '15px',
  },
}));
export default ExtensionIcon;

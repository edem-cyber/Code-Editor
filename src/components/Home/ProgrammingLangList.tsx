import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ReactComponent as CSSIcon } from '../../assets/images/css3.svg';
import { ReactComponent as PythonIcon } from '../../assets/images/python.svg';
import { ReactComponent as RubyIcon } from '../../assets/images/ruby.svg';
import { ReactComponent as HTML5Icon } from '../../assets/images/html-5.svg';
import { ReactComponent as JavaIcon } from '../../assets/images/java.svg';
import { ReactComponent as PhpIcon } from '../../assets/images/php.svg';
import { ReactComponent as ReactIcon } from '../../assets/images/react.svg';
import { ReactComponent as TypescriptIcon } from '../../assets/images/typescript.svg';
import { ReactComponent as JavascriptIcon } from '../../assets/images/javascript.svg';
import { ReactComponent as GoIcon } from '../../assets/images/golang.svg';

const ProgrammingLangList = () => {
  const classes = useStyles();
  return (
    <div>
      <CSSIcon className={classes.icon} />
      <GoIcon className={classes.icon} />
      <PythonIcon className={classes.icon} />
      <RubyIcon className={classes.icon} />
      <JavascriptIcon className={classes.icon} />
      <ReactIcon className={classes.icon} />
      <TypescriptIcon className={classes.icon} />
      <JavaIcon className={classes.icon} />
      <HTML5Icon className={classes.icon} />
      <PhpIcon className={classes.icon} />
    </div>
  );
};
const useStyles = makeStyles(() => ({
  icon: {
    padding: '10px',
    height: '50px',
    width: '50px',
  },
}));

export default ProgrammingLangList;

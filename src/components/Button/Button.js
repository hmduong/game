import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, to, valid, onclick }) {
  return (
    <button onClick={onclick} className={cx('button')} disabled={!valid}>
      {to ? <Link to={to}>{children}</Link> : <>{children}</>}
    </button>
  );
}

export default memo(Button);

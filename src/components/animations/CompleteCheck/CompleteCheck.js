import classNames from 'classnames/bind';
import styles from './CompleteCheck.module.scss';

const cx = classNames.bind(styles);

export default function CompleteCheck({ children, size }) {
  return (
    <div className={cx('complete-check')} style={{ fontSize: size * 2 + 'rem' }}>
      {children}
      <div className={cx('check')} style={{ height: size * 20 + 'px', width: size * 20 + 'px' }}></div>
    </div>
  );
}

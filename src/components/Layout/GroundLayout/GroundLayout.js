import classNames from 'classnames/bind';
import styles from './GroundLayout.module.scss';

const cx = classNames.bind(styles);

export default function GroundLayout() {
  return (
    <div className={cx('ground-layout')}>
      <div className={cx('ground')}></div>
    </div>
  );
}

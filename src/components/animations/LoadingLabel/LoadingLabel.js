import classNames from 'classnames/bind';
import styles from './LoadingLabel.module.scss';

const cx = classNames.bind(styles);

export default function LoadingLabel() {
  return (
    <div className={cx('loading-label')}>
      <div className={cx('dot')}></div>
      <div className={cx('dot')}></div>
      <div className={cx('dot')}></div>
      <div className={cx('dot')}></div>
      <div className={cx('dot')}></div>
    </div>
  );
}

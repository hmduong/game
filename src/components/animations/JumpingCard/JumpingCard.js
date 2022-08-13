import classNames from 'classnames/bind';
import styles from './JumpingCard.module.scss';

const cx = classNames.bind(styles);

export default function JumpingCard() {
  return (
    <div className={cx('ground')}>
      <div className={cx('card')}>
        <div className={cx('body')}>
          <div className={cx('eyes')}>
            <span className={cx('eye')}>
              <div></div>
            </span>
            <span className={cx('eye')}>
              <div></div>
            </span>
          </div>
          <div className={cx('cheeks')}>
            <span className={cx('cheek')}></span>
            <span className={cx('cheek')}></span>
          </div>
          <div className={cx('mouth')}></div>
        </div>
      </div>
    </div>
  );
}

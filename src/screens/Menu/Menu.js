import { JumpingCard } from '~/components/animations/JumpingCard';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PlayerForm from '~/components/PlayerForm';
import ScoreBoard from '~/components/ScoreBoard';
import { GroundLayout } from '~/components/Layout';

const cx = classNames.bind(styles);

export default function Menu() {
  return (
    <>
      <div className={cx('menu')}>
        <div className={cx('inner')}>
          <div className={cx('content')}>
            <div className={cx('jumping-card')}>
              <JumpingCard />
            </div>
            <div className={cx('mid-menu')}>
              <h1 className={cx('title')}>English Card</h1>
              <PlayerForm />
            </div>
            <div className={cx('score-board')}>
              <ScoreBoard />
            </div>
          </div>
          <GroundLayout />
        </div>
      </div>
    </>
  );
}

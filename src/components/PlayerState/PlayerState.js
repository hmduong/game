import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './PlayerState.module.scss';

const cx = classNames.bind(styles);
const memoName = sessionStorage.getItem('player');

export default function PlayerState() {
  const playerName = useSelector((state) => state.name.value) || memoName;
  const playerScore = useSelector((state) => state.score.value);
  return (
    <div className={cx('player-state')}>
      <div>
        <h1>{playerName}</h1>
      </div>
      <div>
        <h1>{playerScore / 2}</h1>
      </div>
    </div>
  );
}

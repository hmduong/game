import axios from 'axios';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/Button';
import { resetScore } from '~/features/score/scoreSlice';
import styles from './GameOver.module.scss';

const cx = classNames.bind(styles);
const memoName = sessionStorage.getItem('player');

export default function GameOver() {
  const name = useSelector((state) => state.name.value) || memoName;
  const score = useSelector((state) => state.score.value / 2);
  const dispatch = useDispatch();

  return (
    <div className={cx('game-over')}>
      <div className={cx('left')}>
        <h1>{name}</h1>
        <h1>{'score: ' + score}</h1>
      </div>
      <div className={cx('right')}>
        <Button
          onclick={() => {
            axios
              .post('https://62f385a718493ca21f4561d5.mockapi.io/players', {
                name: name,
                score: score,
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
          to="/"
          valid
        >
          Save
        </Button>
        <Button onclick={() => dispatch(resetScore())} valid>
          Again
        </Button>
      </div>
    </div>
  );
}

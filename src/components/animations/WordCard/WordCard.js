import classNames from 'classnames/bind';
import styles from './WordCard.module.scss';
import { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useDispatch, useSelector } from 'react-redux';
import { resetCouple, subscribeCouple } from '~/features/couple/coupleSlice';
import { correct, increment } from '~/features/score/scoreSlice';

const cx = classNames.bind(styles);
const colorsMap = ['red', 'green', 'blue', 'pink', 'orange', 'purple', 'greenyellow', 'yellow'];

export default function WordCard({ children, id }) {
  const [isWaiting, setIsWaiting] = useState(false);
  const [isFlip, setIsFlip] = useState(false);
  const couple = useSelector((state) => state.couple.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isWaiting && couple.length > 1) {
      if (couple[0] !== couple[1]) {
        setTimeout(() => {
          setIsFlip(false);
        }, 500);
      } else {
        setTimeout(() => {
          dispatch(correct());
        }, 500);
      }
      dispatch(increment());
      dispatch(resetCouple());
      setIsWaiting(false);
    }
    // eslint-disable-next-line
  }, [couple]);

  const handleClick = () => {
    if (!isFlip) {
      setIsFlip(true);
      dispatch(subscribeCouple(id));
      setIsWaiting(true);
    }
  };

  return (
    <div className={cx('word-card')} onClick={handleClick}>
      <ReactCardFlip isFlipped={isFlip} flipDirection="vertical">
        <div className={cx('front')}></div>
        <div className={cx('back')} style={{ backgroundColor: colorsMap[id - 1] }}>
          {children}
        </div>
      </ReactCardFlip>
    </div>
  );
}

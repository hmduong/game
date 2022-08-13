import PlayerState from '~/components/PlayerState';
import PlayGround from '~/components/PlayGround';
import ScoreBoard from '~/components/ScoreBoard';
import classNames from 'classnames/bind';
import styles from './Playing.module.scss';

const cx = classNames.bind(styles);

export default function Playing({ topic, words }) {
  return (
    <div className={cx('playing')}>
      <div className={cx('left-section')}>
        <h1 className={cx('topic')}>{topic}</h1>
        <ul className={cx('words')}>
          {words.map((el, index) => (
            <li key={index}>
              <h1>{el.eng}</h1>
              <h1>{el.vie}</h1>
            </li>
          ))}
        </ul>
      </div>
      <div className={cx('mid-section')}>
        <PlayGround words={words} />
      </div>
      <div className={cx('right-section')}>
        <PlayerState />
        <ScoreBoard />
      </div>
    </div>
  );
}

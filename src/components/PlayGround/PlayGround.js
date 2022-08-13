import classNames from 'classnames/bind';
import WordCard from '~/components/WordCard';
import styles from './PlayGround.module.scss';

const cx = classNames.bind(styles);

function mix(words) {
  const cards = [].concat(
    ...words.map((el, index) => [
      { id: index, word: el.eng },
      { id: index, word: el.vie },
    ]),
  );
  const res = [];
  while (cards.length !== 0) {
    let randomIndex = Math.round(Math.random() * (cards.length - 1));
    res.push(cards[randomIndex]);
    cards.splice(randomIndex, 1);
  }
  return res;
}

export default function PlayGround({ words }) {
  const mixedWords = mix(words);
  return (
    <div className={cx('play-ground')}>
      <ul className={cx('cards')}>
        {mixedWords.map((el, index) => (
          <li key={index}>
            <WordCard id={el.id}>{el.word}</WordCard>
          </li>
        ))}
      </ul>
    </div>
  );
}

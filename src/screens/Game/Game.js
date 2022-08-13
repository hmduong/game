import classNames from 'classnames/bind';
import styles from './Game.module.scss';
import LoadingLabel from '~/components/animations/LoadingLabel';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GroundLayout } from '~/components/Layout';
import Playing from './Playing';
import { useSelector } from 'react-redux';
import GameOver from './GameOver';

const cx = classNames.bind(styles);
const topicsNumber = 4;

export default function Game() {
  const [isLoading, setIsLoading] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [topic, setTopic] = useState('');
  const [words, setWords] = useState([]);
  const remainings = useSelector((state) => state.score.remainings !== 0);

  useEffect(() => {
    if (!remainings) {
      setIsGameOver(true);
    } else {
      if (isGameOver) {
        setIsGameOver(false);
        setIsLoading(true);
      }
      let topicId = Math.round(Math.random() * (topicsNumber - 1) + 1);
      axios
        .get('https://62f385a718493ca21f4561d5.mockapi.io/topics', {
          params: {
            id: topicId,
            sortby: 'score',
          },
        })
        .then((res) => {
          let data = res.data[0];
          setWords(data.words);
          setTopic(data.topic);
          setIsLoading(false);
        });
    }
    // eslint-disable-next-line
  }, [remainings]);

  return (
    <div className={cx('game')}>
      {isLoading ? (
        <div className={cx('loading')}>
          <h1>loading</h1>
          <LoadingLabel />
        </div>
      ) : isGameOver ? (
        <GameOver />
      ) : (
        <Playing topic={topic} words={words} />
      )}
      <GroundLayout />
    </div>
  );
}

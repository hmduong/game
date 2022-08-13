import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import LoadingLabel from '~/components/animations/LoadingLabel';
import styles from './ScoreBoard.module.scss';

const cx = classNames.bind(styles);

export default function ScoreBoard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://62f385a718493ca21f4561d5.mockapi.io/players', {
        params: {
          limit: 5,
          sortby: 'score',
        },
      })
      .then((res) => {
        let data = res.data;
        while (data.length < 5) data.push({ name: 'none', score: 'none' });
        setData(res.data);
        setIsLoading(false);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <div className={cx('score-board')}>
      <h1>Top Flash</h1>
      <div className={cx('table')}>
        {isLoading ? (
          <LoadingLabel />
        ) : (
          <>
            <div className={cx('table-heading')}>
              <h3>Name</h3>
              <h3>Turn</h3>
            </div>
            <ul className={cx('list-players')}>
              {data.map((el, index) => (
                <li key={index} className={cx('player')}>
                  <div>{el.name}</div>
                  <div>{el.score}</div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

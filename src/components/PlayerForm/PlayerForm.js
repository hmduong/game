import classNames from 'classnames/bind';
import styles from './PlayerForm.module.scss';
import Button from '~/components/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDebounce } from '~/hooks';
import LoadingLabel from '~/components/animations/LoadingLabel';
import CompleteCheck from '~/components/animations/CompleteCheck';
import { useDispatch } from 'react-redux';
import { setName } from '~/features/name/nameSlice';
import { resetScore } from '~/features/score/scoreSlice';

const cx = classNames.bind(styles);

export default function PlayerForm() {
  const [mess, setMess] = useState('Enter your name here!');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const debounce = useDebounce(inputValue, 600);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (mess === '') {
      dispatch(setName(debounce));
      dispatch(resetScore(0));
      sessionStorage.setItem('player', debounce);
    }
  };

  useEffect(() => {
    if (debounce !== inputValue) {
    }
    if (!debounce.trim()) {
      setIsLoading(false);
      setMess('Enter your name here!');
    } else if (debounce.length < 5) {
      setIsLoading(false);
      setMess('Your name is too short!');
    } else {
      setIsLoading(true);
      axios
        .get('https://62f385a718493ca21f4561d5.mockapi.io/players', {
          params: {
            name: debounce,
          },
        })
        .then((res) => {
          setIsLoading(false);
          let isExist = res.data.some((el) => {
            return el.name.toUpperCase() === debounce.toUpperCase();
          });
          if (isExist) {
            setMess('this name already exists!');
          } else {
            setMess('');
          }
        });
    }
    // eslint-disable-next-line
  }, [debounce]);

  return (
    <form id="info" className={cx('info')}>
      <label className={cx('mess')} htmlFor="name">
        {isLoading ? (
          <LoadingLabel />
        ) : mess === '' ? (
          <CompleteCheck size={1}>Ready</CompleteCheck>
        ) : (
          <p style={{ color: 'red' }}>{mess}</p>
        )}
      </label>
      <input
        onChange={(evt) => {
          setInputValue(evt.target.value);
          setIsLoading(true);
        }}
        id="name"
        className={cx('name')}
        placeholder="Name"
        autoComplete="off"
        spellCheck="false"
        maxLength="15"
      ></input>
      <Button onclick={handleSubmit} to="/game" valid={!isLoading && mess === '' ? true : false}>
        Play!
      </Button>
    </form>
  );
}

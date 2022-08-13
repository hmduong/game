// import classNames from 'classnames/bind';
// import styles from './submit-button.css';

import { Route, Routes } from 'react-router-dom';
import Menu from './screens/Menu';
import Game from './screens/Game';

// let cx = classNames.bind(styles);

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </div>
  );
}

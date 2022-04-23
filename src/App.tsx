import { Routes, Route } from 'react-router-dom';

import Banner from 'components/Banner';
import TodoPage from 'pages/TodoPage';
import FollowersPage from 'pages/FollowersPage';

import 'App.css';

export default function App() {
  return (
    <div className="app">
      <Banner />
      <Routes>
        <Route path="/" element={<TodoPage />}/>
        <Route path="/followers" element={<FollowersPage />}/>
      </Routes>
    </div>
  );
}

import FollowersList from 'components/FollowersList';
import Header from 'components/Header';

import 'components/Followers/Followers.css';

export default function Followers() {
  return (
    <div className="followers">
      <Header title="Followers" />
      <FollowersList />
    </div>
  );
}

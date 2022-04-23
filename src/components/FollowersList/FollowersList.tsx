import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import 'components/FollowersList/FollowersList.css';

export interface Follower {
  picture: {
    large: string;
  }
  name: {
    first: string;
    last: string;
  }
  login: {
    username: string;
  }
}

export default function FollowersList() {
  const [followers, setFollowers] = useState<Follower[]>([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      const { data } = await axios.get("https://randomuser.me/api/?results=5");
      setFollowers(data.results);
    }

    fetchFollowers()
  }, []);

  return (
    <div className="followers-list-container">
      <div>
        {followers.map((follower, index) => (
          <div
            className="follower-item"
            data-testid={`follower-item-${index}`}
            key={follower.login.username}
          >
            <img src={follower.picture.large} alt="" />
            <div className="followers-details">
              <div className="follower-item-name">
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="todo-footer">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}

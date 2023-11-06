import { Link } from 'react-router-dom';
import store from '../../constants/store.json';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {store.map(({ storeId, title }) => (
          <li key={storeId}>
            <Link to={`/store/${storeId}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

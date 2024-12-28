import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';

import css from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={css.container}>
          <Header />
          <Hero />
    </div>
  );
};

export default HomePage;
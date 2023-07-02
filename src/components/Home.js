import React from 'react';

const Home = () => {
  document.title = 'TextUtils - word counter | charater counter | ...';
  return (
    <div>
      <img
        src={require('../assets/images/banner.png')}
        alt="banner"
        style={{ margin: '20px 0 0 250px' }}
      />
    </div>
  );
};

export default Home;

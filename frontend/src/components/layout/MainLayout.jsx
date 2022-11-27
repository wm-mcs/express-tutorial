import React from 'react';

const MainLayout = (props) => {
  return (
    <div>
      <header>Header</header>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </div>
  );
};

MainLayout.propTypes = {
  // ...prop type definitions here
};

export default MainLayout;

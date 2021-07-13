import React from 'react';

const ErrorPage = () => {
  return (
    <div className="home">
      <div className="err-block">
        Error 404! <br />
        OOPS Page you are looking for does not exist.
        <div className="err-img" />
      </div>
      <footer>
        An anime disovering website powered by <i>&copy;Kitsu</i>, handcrafted
        by Str4nge
      </footer>
    </div>
  );
};
export default ErrorPage;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center user-card br-10'>
      <img src={avatar_url} alt='' className='round-img' />
      <h2>{login}</h2>
      <div>
        <Link
          to={`/user/${login}`}
          className='card-btn btn btn-dark btn-lg my-3'
        >
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

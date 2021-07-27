import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import history from '../utils/history';

class Header extends Component {
  handleLogoutClick = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  render() {
    const { auth: { isAuthenticated } = {} } = this.props;
    return (
      <header className='py-4 px-8 w-full bg-white shadow-md'>
        <nav className='nav'>
          <div className='flex justify-between'>
            <div className='nav__brand font-bold text-2xl'>
              <Link to='/'>KreditPay</Link>
            </div>
            {isAuthenticated && (
              <button
                type='button'
                className='hover:text-orange'
                onClick={this.handleLogoutClick}
              >
                LogOut
              </button>
            )}
            {!isAuthenticated && (
              <div className='space-x-8'>
                <button
                  type='button'
                  className='text-blue-500 hover:underline'
                  onClick={() => history.push('/signIn')}
                >
                  Login
                </button>
                <button
                  type='button'
                  className='px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-400 outline-none'
                  onClick={() => history.push('/signUp')}
                >
                  SignUp
                </button>
              </div>
            )}
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.shape({}).isRequired
  // logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(withRouter(Header));

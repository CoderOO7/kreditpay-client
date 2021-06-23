import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    const { dispatch } = this.props;
    dispatch(logoutUser());
    // history.push('/');
  }

  render() {
    return (
      <header className='py-6 px-3 w-full bg-white shadow-md'>
        <nav className='nav'>
          <div className='flex justify-between'>
            <div className='nav__brand font-bold text-2xl'>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to='/'>KreditPay</Link>
            </div>
            <button
              type='button'
              className='hover:text-orange'
              onClick={this.handleLogoutClick}
            >
              LogOut
            </button>
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

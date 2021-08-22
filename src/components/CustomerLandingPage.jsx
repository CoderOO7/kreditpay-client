// eslint-disable class-methods-use-this

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CustomerLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  render() {
    return (
      <>
        <div>Let's begin your loan application process</div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.user.users,
  loading: state.user.loading,
  apiErrors: state.user.errors
});

CustomerLandingPage.propTypes = {
  auth: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  apiErrors: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps)(withRouter(CustomerLandingPage));

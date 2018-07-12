import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const propTypes = {
  isLogin: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

class LoginChecker extends Component {
  componentDidMount() {
    const {
      isLogin,
      history,
    } = this.props;
    if (!isLogin) {
      history.push('/login');
    }
  }

  componentDidUpdate() {
    const {
      isLogin,
      history,
    } = this.props;
    if (!isLogin) {
      history.push('/login');
    }
  }

  render() {
    const {
      children,
    } = this.props;
    return children;
  }
}

LoginChecker.propTypes = propTypes;
export default withRouter(LoginChecker);

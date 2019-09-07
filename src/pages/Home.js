import React from 'react';
import PageTitle from './components/PageTitle';
import { connect } from 'react-redux';

class Home extends React.Component {
  componentDidMount () {
  }

  state = {
    bla: 'ble'
  };

  render () {
    return (
      <React.Fragment>
        <PageTitle />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles
});

export default connect(
  mapStateToProps
)(Home);

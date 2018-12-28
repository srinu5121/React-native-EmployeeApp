import { connect } from 'react-redux';

import * as albumActions from './actions';

import Albums from './list';

const mapStateToProps = state => ({
  Albums: state.Albums
});

const mapDispatchToProps = {
  getAlbums: albumActions.getAlbums
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);

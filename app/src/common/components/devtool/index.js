import React from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import style from './style';

export default class Devtool extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  static defaultProps = {
    store: {}
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className={cx({
        [style.devtool]: true,
        [style.open]: this.state.open
      })}>
        <DebugPanel top right bottom style={{maxWidth: '300px'}}>
          <DevTools store={this.props.store} monitor={LogMonitor} />
        </DebugPanel>
        <span className={style.toggleBtn} onClick={::this.toggleOpen}><i className="fa fa-bars"></i></span>
      </div>
    );
  }
}

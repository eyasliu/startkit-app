import React from 'react'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

export default class Devtool extends React.Component{
  constructor(){
    super()
  }
  static defaultProps = {
    store:{}
  }
  render(){
    return (
      <div>
        <DebugPanel top right bottom style={{maxWidth:'300px'}}>
          <DevTools store={this.props.store} monitor={LogMonitor} />
        </DebugPanel>
      </div>

    )
  }
}
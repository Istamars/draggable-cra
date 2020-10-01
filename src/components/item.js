import React from 'react';

import './item.css';

export default class Component extends React.Component {
  state = { status: this.props.task.status, move: false };

  render() {
    const { isTaskMoving } = this.state.move;
    return (
      <React.Fragment>
        <div className={`draggable${isTaskMoving ? ' moving' : ''}`} draggable>
          {this.props.task.desc}
        </div>
      </React.Fragment>
    );
  }
}

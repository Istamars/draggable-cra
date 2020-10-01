import React from 'react';
import task from '../task.json';
import Item from './item';
import './item.css';

import { Col, Container, Row } from 'react-bootstrap';

export default class Component extends React.Component {
  state = { tasks: task, move: false };

  dragOver = (event) => {
    event.preventDefault();
    this.setState({ move: true });
  };

  drop = (event, status) => {
    const index = this.state.tasks.findIndex(
      (task) => task.id == event.dataTransfer.getData('taskId')
    );
    let copyTasks = [...this.state.tasks];
    copyTasks[index] = { ...copyTasks[index], status: status };
    this.setState({ tasks: copyTasks, move: false });
  };

  dragStart = (event, id, prevStat) => {
    this.setState({ move: true, prevStat: prevStat });
    event.dataTransfer.setData('taskId', id);
    this.setState({ move: true });
    console.log('drag start true');
  };

  render() {
    const isTaskMoving = this.state.move;
    return (
      <Container>
        <Row>
          <Col
            className="task-container"
            onDragOver={(event) => this.dragOver(event)}
            onDrop={(event) => {
              this.drop(event, 0);
            }}
          >
            <div>To Do</div>
            <hr />
            <div className="row-container">
              {this.state.tasks
                .filter((task) => task.status === 0)
                .map((task) => {
                  return (
                    <div
                      className={`draggable${isTaskMoving ? ' moving' : ''}`}
                      key={task.id}
                      draggable
                      onDragStart={(event) => this.dragStart(event, task.id, 0)}
                    >
                      {task.desc}
                    </div>
                    // <div
                    //   key={task.id}
                    //   draggable
                    //   onDragStart={(event) => this.dragStart(event, task.id, 0)}
                    // >
                    //   <Item task={task} />
                    // </div>
                  );
                })}
            </div>
          </Col>
          <Col
            className="task-container"
            onDragOver={(event) => this.dragOver(event)}
            onDrop={(event) => {
              this.drop(event, 1);
            }}
          >
            <div>In Progress</div>
            <hr />
            <div className="row-container">
              {this.state.tasks
                .filter((task) => task.status === 1)
                .map((task) => {
                  return (
                    <div
                      key={task.id}
                      draggable
                      onDragStart={(event) => this.dragStart(event, task.id, 1)}
                    >
                      <Item task={task} />
                    </div>
                  );
                })}
            </div>
          </Col>
          <Col
            className="task-container"
            onDragOver={(event) => this.dragOver(event)}
            onDrop={(event) => {
              this.drop(event, 2);
            }}
          >
            <div>Complete</div>
            <hr />
            <div className="row-container">
              {this.state.tasks
                .filter((task) => task.status === 2)
                .map((task) => {
                  return (
                    <div
                      key={task.id}
                      draggable
                      onDragStart={(event) => this.dragStart(event, task.id, 2)}
                    >
                      <Item task={task} />
                    </div>
                  );
                })}
            </div>
          </Col>
          <Col
            className="task-container"
            onDragOver={(event) => this.dragOver(event)}
            onDrop={(event) => {
              this.drop(event, 3);
            }}
          >
            <div>Review</div>
            <hr />
            <div className="row-container">
              {this.state.tasks
                .filter((task) => task.status === 3)
                .map((task) => {
                  return (
                    <div
                      key={task.id}
                      draggable
                      onDragStart={(event) => this.dragStart(event, task.id, 3)}
                    >
                      <Item task={task} />
                    </div>
                  );
                })}
            </div>
          </Col>
          <Col
            className="task-container"
            onDragOver={(event) => this.dragOver(event)}
            onDrop={(event) => {
              this.drop(event, 4);
            }}
          >
            <div>Done</div>
            <hr />
            <div className="row-container">
              {this.state.tasks
                .filter((task) => task.status === 4)
                .map((task) => {
                  return (
                    <div
                      key={task.id}
                      draggable
                      onDragStart={(event) => this.dragStart(event, task.id, 4)}
                    >
                      <Item task={task} />
                    </div>
                  );
                })}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

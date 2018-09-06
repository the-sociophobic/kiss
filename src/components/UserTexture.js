import React, { Component } from 'react';

class UserTexture extends Component {
  render() {
    return (
      <div
        className="user-texture"
        id={this.props.id}
      >
        <div className="image-area">
          <img
            className="avatar"
            src={this.props.avatar}
          />
        </div>
        <div className="text-area">
          {this.props.name}
        </div>
      </div>
    );
  }
}

export default UserTexture;

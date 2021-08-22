import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class RootModal extends PureComponent {
  constructor() {
    super();
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.append(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const modalTemplate = (
      <div className='fixed inset-0'>
        <div className='min-h-screen flex justify-center items-center bg-black bg-opacity-40 text-white'>
          {/* eslint-disable-next-line react/destructuring-assignment */}
          {this.props.children}
        </div>
      </div>
    );

    return ReactDom.createPortal(modalTemplate, modalRoot);
  }
}

export default RootModal;

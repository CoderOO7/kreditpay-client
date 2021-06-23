import React, { PureComponent } from 'react';
import RootModal from './RootModal';
import LoadingSpinnerInfinity from '../loadingSpinners/LoadingSpinnerInfinity';
import LoadingSpinnerDualRing from '../loadingSpinners/LoadingSpinnerDualRIng';

class LoadingModal extends PureComponent {
  constructor() {
    super();
    this.spinner = {
      DualRing: <LoadingSpinnerDualRing show />,
      Infinity: <LoadingSpinnerInfinity show />
    };
  }

  render() {
    const { type } = this.props;

    return (
      <RootModal>
        <div className='text-xl'>{this.spinner[type] || this.spinner.DualRing}</div>
      </RootModal>
    );
  }
}

export default LoadingModal;

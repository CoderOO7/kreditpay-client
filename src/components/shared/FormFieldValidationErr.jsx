import React, { PureComponent } from 'react';

class FormFieldValidationErr extends PureComponent {
  render() {
    const { error } = this.props;
    return (
      <>
        {error ?
        <div className='border px-3 py-1 border-red-200 bg-red-200 text-red-800'>
          {error}
        </div>
        :null}
      </>
    );
  }
}

export default FormFieldValidationErr;

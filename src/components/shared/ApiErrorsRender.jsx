import React, { PureComponent } from 'react';
import _ from 'lodash';

class ApiErrorsRender extends PureComponent {
  render() {
    const { errors } = this.props;
    return (
      <>
        {!_.isEmpty(errors) ? (
          <div className='border px-3 py-1 border-red-200 bg-red-200 text-red-800 rounded-sm'>
            {errors.map((error, idx) => (
              <p key={idx}>{error.message}</p>
            ))}
          </div>
        ) : null}
      </>
    );
  }
}

export default ApiErrorsRender;

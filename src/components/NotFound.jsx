import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends PureComponent {
  render() {
    return (
      <section className='not_found__pg'>
        <div className='h-screen flex flex-col items-center justify-center text-2xl space-y-3'>
          <h1 className='text-9xl text-purple-900 font-bold'>404</h1>
          <p>Oh no! We couldn't find the page you are looking for</p>
          <Link className='text-purple-600 hover:underline' to='/'>
            Go back to home page
          </Link>
        </div>
      </section>
    );
  }
}

export default NotFound;

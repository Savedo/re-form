import React from 'react';
import SimpleForm from './SimpleForm/SimpleForm';
import BulmaForm from './BulmaForm/BulmaForm';

const App = () => {
  return (
    <div className='container'>
      <section className='hero'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title has-text-centered'>Re-Form Examples page</h1>
          </div>
        </div>
      </section>
      <div className='tile is-ancestor'>
        <div className='tile is-parent is-2' />
        <div className='tile is-parent'>
          <div className='tile is-child'>
            <div className='box'>
              <p className='subtitle has-text-centered'>
                Default elements using <a href="https://tailwindcss.com/" target="_blank">tailwind css</a>
              </p>
              <SimpleForm />
            </div>
          </div>
        </div>
        <div className='tile is-parent'>
          <div className='tile is-child'>
            <div className='box'>
              <p className='subtitle has-text-centered'>
                Custom elements using <a href="https://bulma.io" target="_blank">Bulma.io</a>
              </p>
              <BulmaForm />
            </div>
          </div>
        </div>
        <div className='tile is-parent is-2' />
      </div>
    </div>
  );
};

export default App;

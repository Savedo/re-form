import React from 'react';
import SimpleForm from './SimpleForm/SimpleForm';
import BulmaForm from './BulmaForm/BulmaForm';
import ValidatedForm from './Validation.js/ValidatedForm';
import AsyncIbanForm from './AsyncIbanForm/AsyncIbanForm';
import MultipleForms from './MultipleForms/MultipleForms';

const App = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">Re-Form Examples page</h1>
          </div>
        </div>
      </section>
      <div className="tile is-vertical is-ancestor">
        <div className="tile is-12">
          <div className="tile is-2" />
          <div className="tile is-parent is-4">
            <div className="tile is-child">
              <div className="box">
                <p className="subtitle has-text-centered">
                  Default elements using{ ' ' }
                  <a href="https://tailwindcss.com/" target="_blank">
                    tailwind css
                  </a>
                </p>
                <SimpleForm />
              </div>
            </div>
          </div>
          <div className="tile is-parent is-4">
            <div className="tile is-child">
              <div className="box">
                <p className="subtitle has-text-centered">
                  Custom elements using{ ' ' }
                  <a href="https://bulma.io" target="_blank">
                    Bulma.io
                  </a>
                </p>
                <BulmaForm />
              </div>
            </div>
          </div>
        </div>

        <div className="tile is-12">
          <div className="tile is-2" />
          <div className="tile is-parent is-4">
            <div className="tile is-child">
              <div className="box">
                <p className="subtitle has-text-centered">
                  Element Validation Using{ ' ' }
                  <a href="https://validatejs.org/" target="_blank">
                    Validate.js
                  </a>
                </p>
                <ValidatedForm />
              </div>
            </div>
          </div>
          <div className="tile is-parent is-4">
            <div className="tile is-child">
              <div className="box">
                <p className="subtitle has-text-centered">Async Validation</p>
                <AsyncIbanForm />
              </div>
            </div>
          </div>
        </div>

        <div className="tile is-12">
          <div className="tile is-2" />
          <div className="tile is-parent is-4">
            <div className="tile is-child">
              <div className="box">
                <p className="subtitle has-text-centered">
                  Handling Multiple Form Sections
                </p>
                <MultipleForms />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

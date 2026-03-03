import React from 'react';
import './StudyMaterials.css';

function StudyMaterials() {
    return (
        <section className="study-materials">
            <h1>React Study Notes</h1>

            <div className="cards">
                <article className="card">
                    <h4>Introduction to React</h4>
                    <p>
                        React is a JavaScript library for building user interfaces. It uses a
                        component‑based model where UI is broken into reusable pieces. React
                        started as a project at Facebook and today powers many modern web apps.
                        <br />
                        <em>Nepali:</em> React ek JS library ho, jasma UI components banayera
                        application banauncha.
                    </p>
                </article>

                <article className="card">
                    <h4>JSX &amp; Rendering</h4>
                    <p>
                        JSX lets you write HTML‑like syntax inside JavaScript. During build time it
                        gets transformed into React.createElement calls. React renders the
                        resulting virtual DOM and efficiently updates the real DOM.
                        <br />
                        <em>Nepali:</em> JSX le HTML jasto lekhe pani JS ma convert huncha,
                        ani React le DOM update garcha.
                    </p>
                </article>

                <article className="card">
                    <h4>Components</h4>
                    <p>
                        Components are the building blocks. There are two kinds: functional and
                        class components. Today we mostly use functional components because of
                        hooks.
                        <br />
                        <em>Nepali:</em> Components chai UI ko block haru hun, functional chai
                        simple function, class chai ES6 class.
                    </p>
                </article>

                <article className="card">
                    <h4>Props &amp; State</h4>
                    <p>
                        Props (properties) are read‑only values passed from parent to child. State
                        is internal data that a component manages and can change over time. Use
                        <code>useState</code> in functional components.
                        <br />
                        <em>Nepali:</em> Props bahira bata aune data ho, state component ko
                        bhitra ko data ho.
                    </p>
                </article>

                <article className="card">
                    <h4>Hooks</h4>
                    <p>
                        Hooks are special functions that let you "hook into" React features such
                        as state and lifecycle from functional components. Common hooks include
                        <code>useState</code>, <code>useEffect</code>, <code>useContext</code>,
                        <code>useRef</code>, and <code>useReducer</code>.
                        <br />
                        <em>Nepali:</em> Hooks le functional components lai state, effect,
                        context jasta ability dincha.
                    </p>
                </article>

                <article className="card">
                    <h4>More Topics</h4>
                    <ul>
                        <li>useMemo / useCallback – performance tuning</li>
                        <li>Custom hooks – reuse logic</li>
                        <li>Context API – global state without props drilling</li>
                        <li>React Router, Redux, and other libraries</li>
                    </ul>
                </article>
            </div>

            <p className="note">
                <strong>Notes section:</strong> add your own theory notes here as you learn.
            </p>
        </section>
    );
}

export default StudyMaterials;

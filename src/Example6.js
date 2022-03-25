import React from 'react';
import ReactDOM from 'react-dom';

function Subjects(props) {
  return <li>{ props.brand }</li>;
}

function Example6() {
  const subjects = ['HTML & CSS', 'Javascript', 'ReactJS'];
  return (
    <>
	    <h1>Some Subjects in Front-End Developer</h1>
	    <ul>
        {subjects.map((subjects) => <Subjects brand={subjects} />)}
      </ul>
    </>
  );
}

export default Example6;
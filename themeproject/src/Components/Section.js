import React from 'react';
import Header from './Header';

const Section = ({content, title, theme}) => {
  return (
    <section className={`dataSection dataSection-${theme}`}>
        <Header theme={theme} text={title} class_name={"titles"}/>
        <div>{content}</div>
    </section>
  )
}

export default Section
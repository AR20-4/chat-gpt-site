import React from 'react';
import './whatGPT.css';
import { Feature } from '../../components';

const WhatGPT = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT" text="Opening a new door to the future, the ability to free your employees time, make your business focus on the importnat things to get business done faster"/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="ChatBots" text="Our amazing real voice bots help stream line call center services and filter emails and voice messages"  />
        <Feature title="Knowledge" text="Our business practices ethics that will not share data we collect for our programming " />
        <Feature title="Education" text="Our team is full of the brightest minds around, we are here to teach you how to use and best benifit from our resources. Our business is helping your busniess " />
      </div>
    </div>
  )
}

export default WhatGPT
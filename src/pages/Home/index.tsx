import React from 'react';
import Main from '../../components/Main';

export default function Home() {
  return (
    <Main>
      <h1>Home</h1>
      <div className="st-sound-img" style={{animationPlayState: "start;"}}>
      <div className="st-sound-img-bg" style={{animationPlayState: "start;"}}>
      <div className="st-sound-img-bg-item" 
        style={{
          backgroundImage: "url(&quot;https://www.sleepiest.com/wp-content/uploads/2020/09/1@2x-1.jpg&quot;);",
          transform: "translate(0.5674px, -6.0367px);"
        }}>  
      </div>
      <div className="st-sound-img-bg-item" style={{
        backgroundImage: "url(https://www.sleepiest.com/wp-content/uploads/2020/09/2@2x-3.png)"
      }}></div>
      </div>
      <div className="st-sound-img-particle" style={{transform: "translate(0.3405px, -1.811px) rotate(-125deg);"}}>
        <img src="/assets/img/sound/2.svg" alt="" />
      </div>
      </div>
    </Main>
  );
}
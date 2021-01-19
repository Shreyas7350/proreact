import React from "react"; 
import Tweet from "./Tweet";

function App() {
  
  return(
    <div className="app">
     <Tweet name="Dev" message="This is random tweet" />
       <Tweet name="Rock" message="I am true king" />
       <Tweet name="John"message="Never give up!"/>
       <Tweet name="Mosh"message="My new course is availabe"/>

    </div>


  );

}

export default App;
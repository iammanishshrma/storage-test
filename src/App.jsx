import React from "react";

const App = () => {
  return (
    <div>
      <h1>localStorage token: {localStorage.getItem("token")}</h1>
      <h1>sessionStorage token: {sessionStorage.getItem("token")}</h1>
    </div>
  );
};

export default App;

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is React.JS</h1>
        <p>
          To make programs with React.JS, we must first download NPM (Node Package Manager). 
          Then we can run the command `<code>npx create-react-app myapp</code>`, where 'myapp' is the name of your React.JS project.
          This will create a folder named 'myapp' and will have all the things required for your first webpage with React.JS.
          <br></br>
          <br></br>
          To run the webpage, use command `npm start`. This will build your webpage and host it on localhost:3000. 
          From there, you can modify the files and the changes will be shown when you save.
          <br></br>
          <br></br>
          There were some difficulties I faced when installing NPM. 
          At first, I tried installing it via the command line and didn't get it to work, 
          but then I installed Node.JS, which comes with NPM bundled together.
          Once that was done, creating the webpage was quite easy!
          <br></br>
          <br></br>
          I look forward to using React.JS for future projects!
        </p>
      </header>
    </div>
  );
}

export default App;

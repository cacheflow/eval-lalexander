import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div style={{fontFamily: 'Roboto', textAlign: 'center'}}>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet"></link>
        <header style={{alignItems: 'center', backgroundColor: '#282c34', color: 'white', display: 'flex', fontSize: 'calc(10px + 2vmin)', flexDirection: 'column', justifyContent: 'center'}}>
          <p>
            Sample code: List of first names selection
            <ol style={{textAlign: 'left', fontSize: '12px'}}>
              <li>Create a git branch for your changes.</li>
              <li>Review sample code and refactor to at least two components: name list component and selected names display component</li>
              <li>Add functionality to toggle selected names and display below in "Selected Names" section.</li>
              <li>Add filter field above checkbox list and filter visible options based on matching characters</li>
              <li>Review sample code and refactor to improve code quality</li>
            </ol>
          </p>
        </header>
        <div style={{float: 'left', margin: '0 auto', width: '50%'}}>
          <h2>Names</h2>
          <ul style={{listStyle: 'none', padding: '0'}}>
            <li><input type="checkbox" data-name="Yasujiro" id="dir-1"  /><label htmlFor="dir-1" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Yasujiro</label></li>
            <li><input type="checkbox" data-name="F.W." id="dir-2"  /><label htmlFor="dir-2" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>F.W.</label></li>
            <li><input type="checkbox" data-name="Sergei" id="dir-3"  /><label htmlFor="dir-3" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Sergei</label></li>
            <li><input type="checkbox" data-name="Carl" id="dir-4"  /><label htmlFor="dir-4" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Carl</label></li>
            <li><input type="checkbox" data-name="Howard" id="dir-5"  /><label htmlFor="dir-5" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Howard</label></li>
            <li><input type="checkbox" data-name="Luis" id="dir-6"  /><label htmlFor="dir-6" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Luis</label></li>
            <li><input type="checkbox" data-name="Martin" id="dir-7"  /><label htmlFor="dir-7" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Martin</label></li>
            <li><input type="checkbox" data-name="Billy" id="dir-8"  /><label htmlFor="dir-8" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Billy</label></li>
            <li><input type="checkbox" data-name="Charles" id="dir-9"  /><label htmlFor="dir-9" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Charles</label></li>
            <li><input type="checkbox" data-name="Kar-Wai" id="dir-10"  /><label htmlFor="dir-10" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Kar-Wai</label></li>
            <li><input type="checkbox" data-name="Jean-Luc" id="dir-11"  /><label htmlFor="dir-11" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Jean-Luc</label></li>
            <li><input type="checkbox" data-name="Ingmar" id="dir-12"  /><label htmlFor="dir-12" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Ingmar</label></li>
            <li><input type="checkbox" data-name="Francis" id="dir-13"  /><label htmlFor="dir-13" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Francis</label></li>
            <li><input type="checkbox" data-name="Akira" id="dir-14"  /><label htmlFor="dir-14" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Akira</label></li>
            <li><input type="checkbox" data-name="Jean" id="dir-15"  /><label htmlFor="dir-15" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Jean</label></li>
            <li><input type="checkbox" data-name="John" id="dir-16"  /><label htmlFor="dir-16" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>John</label></li>
            <li><input type="checkbox" data-name="Federico" id="dir-17"  /><label htmlFor="dir-17" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Federico</label></li>
            <li><input type="checkbox" data-name="Stanley" id="dir-18"  /><label htmlFor="dir-18" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Stanley</label></li>
            <li><input type="checkbox" data-name="Alfred" id="dir-19"  /><label htmlFor="dir-19" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Alfred</label></li>
            <li><input type="checkbox" data-name="Orson" id="dir-20"  /><label htmlFor="dir-20" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Orson</label></li>
            <li><input type="checkbox" data-name="Alexander" id="dir-21"  /><label htmlFor="dir-21" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Alexander</label></li>
            <li><input type="checkbox" data-name="Frank" id="dir-22"  /><label htmlFor="dir-22" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Frank</label></li>
            <li><input type="checkbox" data-name="Ingrid" id="dir-23"  /><label htmlFor="dir-23" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Ingrid</label></li>
            <li><input type="checkbox" data-name="Horatio" id="dir-24"  /><label htmlFor="dir-24" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Horatio</label></li>
            <li><input type="checkbox" data-name="Akiva" id="dir-25"  /><label htmlFor="dir-25" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Akiva</label></li>
            <li><input type="checkbox" data-name="Luciano" id="dir-26"  /><label htmlFor="dir-26" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Luciano</label></li>
            <li><input type="checkbox" data-name="George" id="dir-27"  /><label htmlFor="dir-26" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>George</label></li>
            <li><input type="checkbox" data-name="Stacey" id="dir-28"  /><label htmlFor="dir-28" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Stacey</label></li>
            <li><input type="checkbox" data-name="Horton" id="dir-29"  /><label htmlFor="dir-29" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Horton</label></li>
            <li><input type="checkbox" data-name="Carrie" id="dir-30"  /><label htmlFor="dir-30" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Carrie</label></li>
            <li><input type="checkbox" data-name="Alfonse" id="dir-31"  /><label htmlFor="dir-31" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Alfonse</label></li>
            <li><input type="checkbox" data-name="Yasmin" id="dir-32"  /><label htmlFor="dir-32" style={{cursor: 'pointer', display: 'inline-block', margin: '0 auto', width: '35%'}}>Yasmin</label></li>
          </ul>
        </div>
        <div style={{float: 'left', width: '50%'}}>
          <h2>Selected Names:</h2>

          <div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

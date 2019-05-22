
import React, { Component } from 'react';

import './App.css';

class App extends Component {

    render() {

        return (
            <div style={{ textAlign: "center", fontSize: 35, paddingTop: 180 }}>
                Welcome to Credit Culture
                <div>
                    <button className="button effect-wave" >You are now logged in</button>
                </div>
            </div>
        )
    }


}
export default App;


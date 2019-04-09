import React from 'react';
import './style.css'

class Home extends React.Component {

    render() {
        return (
            <body class="body">
                {/* Div da NavBar */}
                <div class="divNav">
                    <nav class="navbar">
                        <a id="a1" href="#menu">AdHere</a>
                        <a id="a2" href="#">Belém</a>
                    </nav>
                </div>

                {/* Div da NavBar */}

                <div class="card">
                    <div class="container">
                        <h4>Melhor lugar pra por o bagulho</h4>
                    </div>
                </div>
            </body>

        );
    }
}

export default Home;
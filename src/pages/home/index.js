import React from 'react';
import './style.css'
import logoImage from '../../assets/images/adhere_logo.svg'

class Home extends React.Component {

    render() {
        return (
            <body className="body">
                {/* Div da NavBar */}
                <div className="container1">
                    <div className="divNav">
                        <nav className="navbar">
                            <img src={logoImage} height="30" />
                            <a id="a2" href="#">Belém</a>
                        </nav>
                    </div>

                    {/* Menu column 1 */}

                    <section id="column1">
                        <div className="card">
                            <h4>Melhor lugar pra por o bagulho</h4>
                        </div>


                    </section>

                    <section id="column2">
                        <div className="card">
                            <h4>Melhor lugar pra por o bagulho</h4>
                        </div>
                    </section>

                    {/* <div class="column2">

                    </div> */}
                </div>

            </body >

        );
    }
}

export default Home;
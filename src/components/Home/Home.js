import React, {Component} from "react";
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

class Home extends Component {

    render() {
        return (
            <>
                <header className='block'>
                    <Header/>
                    <Body/>
                </header>
                <Footer/>
            </>
        )
    }
}

export default Home;
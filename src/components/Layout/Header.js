import { Fragment } from 'react';
import mealsImg from '../../assets/meals.jpg';
import './Header.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
        <Fragment>
            <header className="header">
                <h1>CheeseItUp</h1>
                <HeaderCartButton/>
            </header>
            <div className="main-image">
                <img src={mealsImg} alt="Table full of food"/>
            </div>
        </Fragment>
    );
};

export default Header;
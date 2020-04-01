import React, { useContext, useState } from 'react'

import './header.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import CardIcon from '../card-icon/card-icon.component';
import { ReactComponent as Logo } from '../../assest/crown.svg';
import CardDropDown from '../card-dropdown/card-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { OptionContainerStyles, OptionLink, LogoContainer, OptionsContainer, HeaderContainer } from './header.style'
import CartContext from '../../context/cart/cart.context';


const Header = () => {

    const [hidden, setHidden] = useState(true);
    const toggleHidden = () => setHidden(!hidden);

    return (

        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>


            <OptionsContainer>

                <OptionLink as='div' to='/shop'>

                    Contact
            </OptionLink>

                <OptionLink to='/shop'>

                    Shop
</OptionLink>

                <OptionLink to='/singout'> Sign Out </OptionLink>
                <OptionLink to='/signin'>Sing In</OptionLink>


                <CartContext.Provider value={{
                    hidden,
                    toggleHidden
                }}
                >

                    <CardIcon />
                </CartContext.Provider>


            </OptionsContainer>



            {

                hidden ? null :

                    <CardDropDown />

            }

        </HeaderContainer>
    )
}



export default Header;

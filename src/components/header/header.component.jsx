import React from 'react'

import './header.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import CardIcon from '../card-icon/card-icon.component';
import { ReactComponent as Logo } from '../../assest/crown.svg';
import CardDropDown from '../card-dropdown/card-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { OptionContainerStyles, OptionLink, LogoContainer, OptionsContainer, HeaderContainer } from './header.style'

const Header = ({ currentUser, hidden }) => {
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

                <CardIcon />

            </OptionsContainer>



            {

                hidden ? null :

                    <CardDropDown />

            }

        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

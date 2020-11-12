import React, { Component } from 'react';
import Image from '../../Elements/Image';
import Container from '../UI/Container';
import {HeaderSection} from './Header.styled';

import logo from '../../assets/logo.png';

class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <HeaderSection>
                    <Container>
                        <div className="row">
                            <div className="col-6 col-lg-4">

                            </div>
                            <div className="col-6 col-lg-4">
                            <Image src={logo} alt={"logo"}/>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                
                                </div>
                        </div>
                    </Container>
                </HeaderSection>

            </React.Fragment>
        );
    }
}
export default Header;
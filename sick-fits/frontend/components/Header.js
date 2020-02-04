import Nav from './Nav'
import Link from 'next/link'
import styled from 'styled-components'
import Router from 'next/router';
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => {
    NProgress.start();
    console.log('start triggered')
}
Router.onRouteChangeComplete = () => {
    NProgress.done();
    console.log("complete triggerd")
}
Router.onRouteChangeError = () => {
    NProgress.done();
    console.log('onRouteChangeError Triggered')
}

const Logo = styled.h1`
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skewY(-7deg);
    padding: 8%;
    margin: 0;
    text-align: center;
    a {
        padding: 0.5rem 1rem;
        background: ${props => props.theme.red};
        color:white;
        text-transform: uppercase;
        text-decoration: none;
    }
    /* @media (max-width: 1300px ){
        margin: 0;
        text-align: center;
    } */
`
const StyledHeader = styled.header`
    .bar{
        border-bottom: 10px solid ${props => props.theme.red};
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;
        @media (max-width: 2000px){
            grid-template-columns: 1fr;
            justify-content: center;
        }
    }
    .sub-bar{
        display: grid;
        grid-template-columns: 1fr auto;
        border-bottom: 1px solid ${
            props => props.theme.lightgrey
        };
    }
`;
const Header = () => (
    <StyledHeader>
       <div className="bar">
          <Logo>
            <Link href="/">
                <a> Kim's Cosmetics </a> 
            </Link>
          </Logo>
          <Nav />
       </div> 
       <div className="sub-bar">
        <p>Search</p>
        </div>
        <div>
            Cart
        </div>
    </StyledHeader>
   
)

export default Header
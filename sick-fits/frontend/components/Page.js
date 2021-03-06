import React, { Component } from 'react'
import Header from '../components/Header';
import Meta from '../components/Meta'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

const StyledPage = styled.div`
     background: white;
     color: ${props => props.theme.black};

`

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: auto;
    padding: 2rem;
    
`

const theme = {
    red: '#ffb6c1',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
}

injectGlobal`
    html{
        box-sizing: border-box;
        font-size: 10px;

    }
    *, *:before, *:after{
        box-sizing: inherit;
    }
    body{
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;

    }
    a{
        text-decoration: none;
        color: ${theme.black}
    }
`
export default class Page extends Component {
    render() {
        console.log(this.props, '*******')
        return (

            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta/>
                    <Header/>
               
                    <Inner>
                        {this.props.children}
                    </Inner>
                
                </StyledPage>
            </ThemeProvider>
            
        )
    }
}


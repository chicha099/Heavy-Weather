import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styled from 'styled-components';
import clima from '../../media/clima.png'
import placeholder from '../../media/placeholder.png'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Styled-components

const NavBar = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #35005A;
    height: 7%;
`;

const DivH2 = styled.div`
    width:25%;
    text-align:center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const H2 = styled(Link)`
    color: white;
    font-family: 'Comfortaa';
    font-size: 1.2em;
    font-weight: 600;
    padding: 10px;
    padding-bottom: 0px;
    padding-left: 0px;
    text-decoration: none;
`;

const DivSearch = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Loc = styled(Link)`
    font-family: 'Comfortaa';
    text-decoration: none;
    color: white;
    box-shadow: none;
    outline: none;
    font-weight: 800;
    margin: 3px;
`;

const DivLoc = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 25%;
`;

export default function Nav(){

    const [state, setState] = useState({
        lon: 0,
        lat: 0
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function(position){
                setState({
                    lon: position.coords.longitude,
                    lat: position.coords.latitude
                })
            },
            function(error){
                console.log(error)
            },
            { enableHighAccuracy: true }
        )
    }, [])

    return (
        <NavBar>
            <DivH2>
                <img src={clima} width='50px' height='50px' />
                <H2 to='/'>Heavy Weather</H2>
            </DivH2>
            <DivSearch>
                <SearchBar />
            </DivSearch>
            <DivLoc>
                <img src={placeholder} width='20px' height='20px'/>
                <Loc to={`/locate/${state.lon}/${state.lat}`}>Weather in your Location</Loc>
            </DivLoc>
        </NavBar>
    )
}
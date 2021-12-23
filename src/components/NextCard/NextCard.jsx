import React from 'react'
import styled from 'styled-components'
import drop from '../../media/drop.png'

//Styled-components

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 5px 5px 20px lightgray;
    width: 120px;
`;

const H6 = styled.h6`
    margin: 5px;
    font-family: 'Comfortaa';
    font-size: 1.03em;
`;

const DivPop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const DivPopIco = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const P = styled.p`
    margin: 0;
`;
//-----------------------------------

export default function NextCard({ time, icon, min, max, pop }){

    const tiempo = new Date(time * 1000)
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const date = tiempo.getDate();
    const day = `${week[tiempo.getDay()]} ${date}`;

    return (
        <Container>
            <H6>{day}</H6>
            <DivPopIco>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} width='80px' height='80px'/>
                <DivPop><img src={drop} width='15px' height='15px'/><P>{`${Math.round(pop * 100)}%`}</P></DivPop>
            </DivPopIco>
            <span>{Math.round(min)}°/{Math.round(max)}°</span>
        </Container>
    )
}
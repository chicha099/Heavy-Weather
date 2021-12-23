import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import getNextWeather from '../../actions/getNextWeather';
import NextCard from '../NextCard/NextCard'

//Styled-components

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`;

const H4 = styled.h4`
    font-family: 'Comfortaa';
`;

//---------------------

export default function NextDays({ lat, lon }){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNextWeather(lat, lon))
    }, [])

    const nextWeather = useSelector(store => store.nextWeather)

    return (
        <div>
            <H4>Daily Forecast</H4>
            <Container>
                {
                    nextWeather.daily?.map(daily => <NextCard pop={daily.pop} time={daily.dt} icon={daily.weather[0].icon} min={Math.round(daily.temp.min)} max={Math.round(daily.temp.max)}/>)
                }
            </Container>
        </div>
        
    )
}
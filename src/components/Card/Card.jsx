import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import removeCity from '../../actions/removeCity';
import moment from 'moment';
import humidit from '../../media/humidity.png'
import visibilit from '../../media/witness.png'
import win from '../../media/wind.png'
import gauge from '../../media/gauge.png'
import { Link } from 'react-router-dom';
import getNextWeather from '../../actions/getNextWeather';

//Styled-component

const CardContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 235px;
    border: 1px lightgray solid;
    border-radius: 10px;
    box-shadow: 5px 5px 20px lightgray;
    margin: 10px 0 10px 0;
    background: linear-gradient(to bottom, #077196, #3190AB);
    overflow: hidden;
    text-decoration: none;
`;

const Container = styled.div`
    height: 100%;
    padding:  0 50px;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
`;

const H1 = styled.h1`
    display: flex;
    color: #fff;
    font-family: 'Comfortaa', sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    width: auto;
`;

const Temp = styled.h1`
    color: #fff;
    font-family: 'Ubuntu', sans-serif;
    font-size: 80px;
    margin: 0;
    padding: 0  0 0 15px;
`;

const MinMax = styled.h3`
    margin: 0;
    color: #fff;
    text-align: center;
    font-size: 30px;
    font-weight: 400;
`;

const TempDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33%;
`;

const DivH1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33%;
`;

const Description = styled.h6`
    margin: 0;
    font-weight: 400;
    text-align: center;
    font-size: 15px;
    font-family: 'Comfortaa';
    color: #fff;
    &:first-letter {
        text-transform: uppercase;
}
`;

const Time = styled(Description)`
    text-align: left;
    color: #C6C6C6;
    margin: 3px;
`;

const Button = styled.button`
    font-family: 'Comfortaa';
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 20px 0 0 -40px;
    cursor: pointer;
    background-color: rgba(0,0,0,0);
    border: 1px solid lightgray;
    color: #fff;
    border-radius: 4px;
    transition: all 0.5s;
    &:hover{
        background-color: rgba(0,0,0,0.5);
    }
`;

const City = styled(H1)`
    font-weight: 900;
    padding-left: 5px;
`;

const Hum = styled(Description)`
    text-align: left;
    padding: 5px;
    margin: 3px;
`;

const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33%;
`;

const DivHum = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Center = styled.div`
    justify-content: flex-start;
`;

export default function Card({lon, lat, name, temp, min, max, time, img, description, humidity, feel, visibility, wind, pressure, id}){

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(removeCity(id))
    }

    //HORA
    const timezoneInMinutes = time / 60;
    const currTime = moment().utcOffset(timezoneInMinutes).format("h:mm A");

    //Visibility
    const visibi = visibility/1000;


    return (
        <CardContainer to={`/details/${id}`} onClick={() => {dispatch(getNextWeather(lat, lon))}}>
            <Container>
                <DivH1>
                    <H1>Weather in <City>{name}</City></H1>
                    <Time>{currTime}</Time>
                    <Temp>{`${Math.round(temp)}°`}</Temp>
                    <DivHum><Hum>Feels like: {Math.round(feel)}°</Hum></DivHum>
                </DivH1>
                <DivInfo>
                    <Center>
                        <DivHum><img src={humidit} width='20px' height='20px'/><Hum>Humidity: {humidity}%</Hum></DivHum>
                        <DivHum><img src={visibilit} width='20px' height='20px'/><Hum>Visibility: {visibi} km</Hum></DivHum>
                        <DivHum><img src={win} width='20px' height='20px'/><Hum>Wind speed: {wind} m/s</Hum></DivHum>
                        <DivHum><img src={gauge} width='20px' height='20px'/><Hum>Pressure: {pressure} hPa</Hum></DivHum>
                    </Center>
                </DivInfo>
                <TempDiv>
                    <Description>{description}</Description>
                    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} width='100px' height='100px'/>
                    <MinMax>{Math.round(max)}°/{Math.round(min)}°</MinMax>
                </TempDiv>
                <Button onClick={(e) => {handleClick(e)}}>X</Button>
            </Container>
        </CardContainer>
    )
}
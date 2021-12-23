import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getCityByCoords from '../../actions/getCityByCoords';
import DetailLocate from '../DetailLocate/DetailLocate';

export default function Locate({match}){

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('effect')
        dispatch(getCityByCoords(match.params.lon, match.params.lat))
    })

    return (
        <DetailLocate />
    )
}
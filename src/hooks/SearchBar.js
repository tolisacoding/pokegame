
import React, {useContext} from 'react';
import {PokeListContext} from '../contexts/PokelistContext';
import {TeamContext} from '../contexts/TeamContext'
import './SearchBar.scss'

const SearchBar=()=>{
    const {search, setSearch, pokes }=useContext(PokeListContext);
    const {team, setTeamA}=useContext(TeamContext);

    if(search.length>0 && pokes.length<1) {
        alert('no pokemon')
        setSearch('')
    } 

    const submitTeam=(e)=>{
        setSearch(e.target.value);
        setTeamA(team)
    }
    
    return(
        <div className='SearchBar'>
                <input id='auto' type='text' 
                    value={search}
                    onChange={(e)=>{submitTeam(e)}}
                    required
                />  
        </div>
    )
}

export default SearchBar;
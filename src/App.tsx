import React, {useState} from 'react';

import './App.css';

import CharacterGallery from "./CharacterGallery";
import ActionBar from "./ActionBar";
import Header from "./Header";
import {Character} from "./Character";
import axios from "axios";
import * as https from "https";
import './Header.css';


function App() {


    const [allCharacters, setCharacters] = useState<Character[]>([])


    const [text, setText] = useState("")

    const filteredCharacters = allCharacters.filter((character) => character.name.toLowerCase().includes(text.toLowerCase()))

    function onChange(value: string) {
        setText(value)
    }

    function loadAllCharacters() {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
            console.log(response.data.results)
                setCharacters(response.data.results)
        })

    }

    loadAllCharacters();

    return (
        <div className="App">
            <Header/>
            <ActionBar text={text} onTextChange={onChange}/>
            {filteredCharacters.length > 0 && <CharacterGallery characters={filteredCharacters}/>}
            {filteredCharacters.length === 0 && <p className="noCharacterFound"> No Character Found </p>}

        </div>
    );
}

export default App;

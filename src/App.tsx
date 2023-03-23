import React, {useEffect, useState} from 'react';

import './App.css';

import CharacterGallery from "./CharacterGallery";
import ActionBar from "./ActionBar";
import Header from "./Header";
import {Character} from "./Character";
import axios from "axios";
import * as https from "https";
import './Header.css';
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


function App() {


    const [allCharacters, setCharacters] = useState<Character[]>([])


    const [searchText, setSearchText] = useState("")

    const [page, setPages] = useState(1)

    function onButtonClick() {
        setPages(page + 1)
        console.log("click", page)
    }

    function onButtonClickToLow() {
        setPages(page - 1)
        console.log("click", page)
    }


    useEffect(() => {
        loadPage(page);
    }, [page])

    const filteredCharacters = allCharacters.filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()))

    function onChange(value: string) {
        setSearchText(value)
    }

    async function loadPage(page: number) {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
            setCharacters(response.data.results);
        } catch (error) {
            console.error(`Fehler beim Laden der Seite ${page}:`, error);
        }
    }

        return (
            <div className="App">
                <Header/>
                <ActionBar text={searchText} onTextChange={onChange}/>
                {filteredCharacters.length > 0 && <CharacterGallery characters={filteredCharacters}/>}
                {filteredCharacters.length === 0 && <p className="noCharacterFound"> No Character Found </p>}
                <p className="pageNumber">{page}</p>
                <button onClick={onButtonClickToLow}>Seite zurück</button>
                <button onClick={onButtonClick}>nächste Seite</button>


            </div>
        );
    }

    export default App;

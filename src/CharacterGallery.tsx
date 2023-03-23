import {Character} from "./Character"
import CharacterCards from "./CharacterCard"
import "./CharacterGallery.css";

type CharacterProps = {characters: Character[]}
export default function CharacterGallery(props: CharacterProps) {
    return (
    <div className={"character-gallery"}>
        {props.characters.map((character)=> (
                <div key = {character.id}>
            <CharacterCards name={character.name} image={character.image}/>
        </div>))}
    </div>

);


}




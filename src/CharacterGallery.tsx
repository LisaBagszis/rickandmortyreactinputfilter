import {Character} from "./Character"
import CharacterCards from "./CharacterCard";

type CharacterProps = {characters: Character[]}
export default function CharacterGallery(props: CharacterProps) {
    return (
    <div>
        {props.characters.map((character)=> (
                <div key = {character.name}>
            <CharacterCards name={character.name} image={character.image}/>
        </div>))}
    </div>

);


}




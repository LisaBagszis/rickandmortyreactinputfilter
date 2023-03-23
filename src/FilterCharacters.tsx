import {Character} from "./Character";
import CharacterGallery from "./CharacterGallery";
import CharacterCards, {CharacterProps} from "./CharacterCard";


export default function FilterCharacter(props : CharacterProps) {
    return (
        <div>
            {props.characters.filter((character)=> (
                <div key = {character.name}>
                    <CharacterCards name={character.name} image={character.image}/>
                </div>))}
        </div>

    );
}
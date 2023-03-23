import "./CharacterCard.css";
export type CharacterProps = {
    name: string,
    image: string

    }

export default function CharacterCards(props: CharacterProps){
    return (
        <div className={"character-card"}>
            <img className="character-card__image" src={props.image} alt={props.name}/>
                <p>{props.name} </p>

        </div>
    )
}
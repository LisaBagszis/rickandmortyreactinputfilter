
export type CharacterProps = {
    name: string,
    image: string,
    }

export default function CharacterCards(props: CharacterProps){
    return (
        <div>
            <img src={props.image} alt={props.name}/>
                <p>{props.name}</p>

        </div>
    )
}
type NamesProps = {greetingToShow: string[]}
export default function Greetings(props: NamesProps){
    return (
        <div>
            {props.greetingToShow}
            </div>
    )
}
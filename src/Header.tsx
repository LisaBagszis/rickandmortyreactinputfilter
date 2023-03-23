import './Header.css';


export default function Header() {

    return (
        <header className="header">
            <img className="header__image" src="https://rickandmortyapi.com/icons/icon-512x512.png"
                 alt="rick and morty logo"/>
            <h1 className="header__title">Rick and Morty</h1>
        </header>
    )
}
import '../menu/menu.scss'

export const Menu = ({open, setOpen }) => {
    return (
        <div className={'menu ' + (open && "active")}>
            <ul>
                <li>
                    <a href="#intro">About myself</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

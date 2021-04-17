import s from './Toolbar.module.css';


const Toolbar = ({links}) => {

    return (
        <nav className={s.toolbar}>
            <a className={s.brandLogo} href="#">
                React App
            </a>

            <ul className={s.toolbarList}>
                {
                    links.map(link => <ToolbarItem key={link.url} link={link} />)
                }
            </ul>
        </nav>
    )
}

const ToolbarItem = ({link}) => {

    return (
        <li className={s.toolbarItem}>
            <a className={s.toolbarLink} href={link.url}>
                {link.title}
            </a>
        </li>
    )
}

export default Toolbar;
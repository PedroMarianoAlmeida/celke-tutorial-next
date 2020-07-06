import Link from 'next/link'

const Menu = () => {
    return (
        <div>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>

            <Link href="/sobre">
                <a style={linkStyle}>Sobre</a>
            </Link>

            <Link href="/contato">
                <a style={linkStyle}>Contato</a>
            </Link>
        </div>
      );
}
 
export default Menu;

const linkStyle = {
    marginRight: 15,
}
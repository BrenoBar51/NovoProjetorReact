import Logo from '../atoms/Logo'
import Title from '../atoms/Title'
import Links from '../molecules/Links'
export default function Header(){
    const pathname = window.location.href
    const linksHeader = [
        {
            texto: 'Our Rates',
            url: `${pathname}#rates`
        },
        {
            texto: 'Favorite projects',
            url: `${pathname}#projects`
        },
        {
            texto: 'Reviews',
            url: `${pathname}#reviews`
        },
        {
            texto: 'Contact',
            url: `${pathname}#contact`
        },
    ]
    return(
        <header className='px-12 py-6 flex justify-between border-b-2 border-[#d9dbe0]'>
            <Logo />
            <Links links={linksHeader} />
            <Title>
                Meu Título
            </Title>
        </header>
    )
}
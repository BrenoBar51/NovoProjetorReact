import LinkItem from "../atoms/LinkItem";

export default function Links(){
    const pathname = window.location.href
    const links = [
        {
            texto: 'Our Rates',
            url: `${pathname}/#rates`
        },
        {
            texto: 'Reviews',
            url: `${pathname}/#reviews`
        },
        {
            texto: 'Favorite projects',
            url: `${pathname}/#projects`
        },
        {
            texto: 'Contact',
            url: `${pathname}/#contact`
        },
    ]
    return(
        <div>
            {
                links.map((link, index) => {
                    return(
                        <LinkItem key={index} text={link.texto} url={link.url}/>
                    );
                })
            }
        </div>
    )
}
export default function Title(props){
    return(
        <>
            {
                props.type === 'primary' &&
                <h1
                    className={`
                
                `}
        >
                    {props.children}
                </h1>
            }
                        {
                props.type === 'secundary' &&
                <h2
                    className={`
                
                `}
        >
                    {props.children}
                </h2>
            }
        </>
    )
}
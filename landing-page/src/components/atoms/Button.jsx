export default function Button(props){
    return(
        <button
            className={`
                ${props.color === 'green' && 'bg-green-500 border-green-500 text-black'}
                ${props.color === 'blue' && 'bg-blue-700 border-blue-700 text-black'}
                ${props.type === 'rounded' && 'h-9 w-9 rounded-full border border-grey-400 text-black'}
                ${props.type === 'default' && 'px-8 py-5 rounded border border-grey-400 text-black'}
                uppercase
                text-base
            `}
        >
            {props.title}
        </button>
    )
}
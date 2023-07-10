export default function LinkItem({text, url}){
    return(
        <a className="text-[#030303] text-lg font-normal hover:text-[#0053ff] cursor-pointer" href={url}>
            {text}
        </a>
    )
}
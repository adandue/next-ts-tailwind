//generate a random function between 1 and 123
import { useRef } from 'react'
type Props = { image:string}

export const RandomFox = ({ image }: Props): JSX.Element => {

    const node = useRef<HTMLImageElement>(null)
    node.current?.scroll

    return <img ref={node} width={320} height="auto" className="rounded-xl" src={image} /> 
}
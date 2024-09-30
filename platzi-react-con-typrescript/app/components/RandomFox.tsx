//generate a random function between 1 and 123
import { useRef, useEffect, useState } from 'react'
type Props = { image:string}

export const RandomFox = ({ image }: Props): JSX.Element => {

    const node = useRef<HTMLImageElement>(null)//Los argumentos vacíos siempre se inician en null con TS
    const [src, setSrc] = useState(
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
    )
    
    useEffect(() => {
        //nuevo observador
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                //onIntersection => console.log
                if (entry.isIntersecting) {
                    setSrc(image)
                }
            });
        });
    
        //observe node

        if (node.current) {
            observer.observe(node.current)
        }
    
        //desconectar

        return () => {
            observer.disconnect()
        }

    }, [image]);

    return <img 
                ref={node} 
                width={320} 
                height="auto" 
                className="rounded-xl bg-gray-300"
                src={src} 
                alt='random fox image' 
                /> 
}
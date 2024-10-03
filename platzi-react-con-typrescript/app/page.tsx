'use client'; import { useState } from "react";
import type { MouseEventHandler } from 'react'
import { LazyImage } from "./components/LazyImage";


//generate simple unique id
const generateId = (): string => {
  return(
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  )}
  
  // random number from 1 to 122
  const random = () : number => Math.floor(Math.random() * 123) + 1;
  
export default function Home() {
  const [images, setImages] = useState<Array<IFoxImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => { 
      const id = generateId();
      const url=`https://randomfox.ca/images/${random()}.jpg`;
      setImages([...images, {id, url}])
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello Platzi!
      </h1>
      <div className="m-4">
        <button onClick={addNewFox}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Add new fox
        </button>
      </div>
      {images.map(({id, url}, index) => (
          <div className="p-4" key={id}>
            <LazyImage 
              src={url}
              width={320}
              height='auto'
              title='Random Fox' 
              className="mx-auto rounded-lg bg-gray-300"
              onClick={() => console.log('hey')}
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img)
              }}
              />
          </div>
      ))}
    </>
  );
}

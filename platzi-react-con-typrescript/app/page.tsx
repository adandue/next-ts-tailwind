'use client'; import { useState } from "react";
import type { MouseEventHandler } from 'react'
import { LazyImage } from "./components/LazyImage";

const random = () : number => Math.floor(Math.random() * 123) + 1;

//generate simple unique id
const generateId = () => Math.random().toString(36).substr(2, 9)

type ImageItem = { id: string, url: string }

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newImageItem: ImageItem = { 
      id:generateId(), 
      url:`https://randomfox.ca/images/${random()}.jpg`}
    
      setImages([
        ...images,
        newImageItem
      ]);
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello Platzi!
      </h1>
      <button onClick={addNewFox}>Add new fox</button>
      {images.map(({id, url}) => (
          <div className="p-4" key={id}>
            <LazyImage 
              src={url}
              width={320}
              height='auto'
              title='Random Fox' 
              className="rounded-lg bg-gray-300"
              onClick={() => console.log('hey')} 
              />
          </div>
      ))}
    </>
  );
}

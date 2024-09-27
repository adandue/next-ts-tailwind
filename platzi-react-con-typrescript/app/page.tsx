'use client'; import { useState } from "react";
import { RandomFox } from "./components/RandomFox";

const random = () : number => Math.floor(Math.random() * 123) + 1;

//generate simple unique id
const generateId = () => Math.random().toString(36).substr(2, 9)

type ImageItem = { id: string, url: string }

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([
    { id:generateId(), url:`https://randomfox.ca/images/${random()}.jpg`},
    { id:generateId(), url:`https://randomfox.ca/images/${random()}.jpg`},
    { id:generateId(), url:`https://randomfox.ca/images/${random()}.jpg`},
    { id:generateId(), url:`https://randomfox.ca/images/${random()}.jpg`},
  ]);

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello Platzi!
      </h1>
      {images.map(({id, url}) => (
          <div className="p-4" key={id}>
            <RandomFox image={url} />
          </div>
      ))}
    </>
  );
}

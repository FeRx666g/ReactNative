import React from 'react'

interface Person {
    name: string;
    age: number;
    isActive: boolean;
    powers: string[];
    address: Address;
}

interface Address {
    city: string;
    country: string;
    street?: string;
}

export const ObjectLiterals = () => {

    const person: Person = {
        name: 'Fernando',
        age: 25,
        isActive: false,
        powers: ['ReactNative', 'Node', 'TypeScript'],
        address: {
            city: 'Lima',
            country: 'Peru'
        }
    }

  return (
    <>
    <h3>Objetos Literales</h3>

    <pre>
        {JSON.stringify(person, null, 2)}
    </pre>
    
    </>
  )
}

const addTwoNumbers = (a: number, b: number):number => {
    return a + b;
}

export const BasicFunctions = () => {

  return (
    <div>
        <h3>Funciones Básicas</h3>
        <p>El resultado de sumar 2 + 2 es: {addTwoNumbers(2, 2)}</p>
    </div>
  )
}

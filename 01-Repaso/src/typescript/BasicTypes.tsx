const BasicTypes = () => {

    const name:string = 'Fernando';
    const age:number = 25;
    const isActive:boolean = false;

    const powers:string[] = ['ReactNative', 'Node', 'TypeScript'];

  return (
    <>
        <h1>Tipos Básicos</h1>

        {name} - {age} - {isActive ? 'Activo' : 'Inactivo'}

        <p>Poderes: {powers.join(', ')}</p>
    </>
  )
}

export default BasicTypes
import { useCounter } from "../hooks/useCounter";

export const Counter = () => {

    const {count, increment, decrement} = useCounter();

    return (
        <>
            <h3>
                Contador: <small className="text-2xl">{count}</small>
            </h3>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => increment(1)}>
                    +1
                </button>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => decrement(1)}>
                    -1
                </button>
            </div>
        </>
    )
}

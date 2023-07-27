import { useState } from 'react'
import './App.css'

// Conditionals = condition ? JSX : null



// function Counter() {
//     const [count, setCount] = useState(0)
//
//     // let message = null;
//     // if (count>5){
//     //     message = <p>The count is greater than 5</p>
//     // }
//
//     // const message = (count > 5 ) ? <p>The count is greater than 5</p> : null;
//
//
//     return (
//         <>
//             <div className="card">
//                 <button onClick={() => setCount((count) => count + 1)}>
//                     count is {count}
//                 </button>
//                 {(count > 5 ) ? <p>The count is greater than 5</p> : null} {/*inline*/}
//                 {/*{message}*/}
//             </div>
//         </>
//     )
// }



    type CounterProps = {
        title?: string;
        count: number;
        setCount: (n: number) => void;
    }

    function Counter(props: CounterProps) {
        return (
            <>
                {props.title ? <h3>{props.title}</h3> : null}
                <div className="card">
                    <button onClick={() => props.setCount(props.count + 1)}>
                        count is {props.count}
                    </button>
                    {(props.count > 5 ) ? <p>The count is greater than 5</p> : null} {/*inline*/}
                </div>
            </>
        )
    }


    function App() {
        const [count, setCount] = useState(0)

        return (
            <div>
                <Counter count={count} setCount={setCount} title={"Titanic"}></Counter>
                <br/>
            </div>
        );
    }

export default App

import { useState } from "react";

export default function Form() {
    const [item, setItem] = useState<string>("");
    // vad är listan för datatyp och vilka datatyper innehåller objekten i listan
    const [items, setItems] = useState<string[]>(["make the submission form", "test the form"]);
    return (
        <>
            <section>
                <h3>To Do Items:</h3>
                <ul>
                    {
                        items.map((item, i) => (
                            <li key={i}>{item}
                                <button onClick={() => console.log('item removed')
                                }>
                                    <p>-</p>
                                </button></li>
                        ))
                    }
                </ul>
            </section>
        </>
    )
}
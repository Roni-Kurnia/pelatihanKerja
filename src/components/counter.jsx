import { useState } from "react";


function Counter(){
    const [hitung, setHitung] = useState(0);

    return (
        <div style={{ margin: '20px 0' }}>
            <h3>komponen hitungan: {hitung}</h3>
            <button className="btn_utama" onClick={() => setHitung(hitung + 1)}>HItung</button>
        </div>
    );
}

export default Counter;
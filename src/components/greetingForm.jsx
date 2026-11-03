import { useState } from "react";


function greetingForm(){
    const [nama, setnNama] = useState(0);

    return (
        <div style={{ margin: '20px 0' }}>
            <input 
            type="text"
            placeholder="Ketik nama anda..."
            value={nama}
            onChange={(e) => setnNama(e.target.value)}
            className="input_text"
            />
            <p>halo {nama || 'tamu'}</p>
        </div>
    );
}

export default counter;
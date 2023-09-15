import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"

export default function ToDo() {
   const [categoria, setCategoria] = useState("");
   const [marca, setMarca] = useState("");
   const [preco, setPreco] = useState("");
   const [lista, setLista ] = useState([]);
   const [id,setId] = useState(1);
    const salvar =(e) =>{
        e.preventDefault();
        setLista([...lista, {
                categoria: categoria, marca: marca, preco: preco,
                id: id
        }]);
        setId(id + 1);
        setCategoria("");
        setMarca("");
        setPreco("");
    };

    return (
        <div>
            <Link to="/">home</Link>
            <h1>Adicionar aparelho ao seu carrinho:</h1>
            <div class="flex.conteiner">   
            <form onSubmit={salvar}>

            <p>Categoria:</p>
                &emsp;
            <input value={categoria} type="text"
            onChange={(e)=>{ setCategoria(e.target.value)}}/>
           

                <p>Marca:</p>
                &emsp;
            <input value={marca} type="text"
            onChange={(e)=>{ setMarca(e.target.value)}}/>
            

            <p>Preco:</p>
                &emsp;
            <input value={preco} type="text"
            onChange={(e)=>{ setPreco(e.target.value)}}/>
                &emsp;
            
            <button>ADD</button> 
           </form> 
           </div>     
            { lista.map((ativ)=>
            <div key= {ativ.id}>
                <p>Categoria:{ativ.categoria}</p>
                <p>Marca:{ativ.marca}</p>
                <p>Preço:{ativ.preco}</p>
            </div>
            )}  
        </div>
    );
}

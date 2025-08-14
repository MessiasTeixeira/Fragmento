'use client';

import {colecao, fragrancia} from "../data/data.js"; 
import { createContext , useContext , useState} from "react";

export const FragmentoContext = createContext();

export function FragmentoProvider({ children }) {
    const [cartOpen, setCartOpen] = useState(false);
    const [item, setItem] = useState([]);
    const [valor, setValor] = useState(0);
    const [qtdCart, setQtdCart] = useState(0);
    const [itemSelect, setItemSelect] = useState(null);
    const [itemSelectNameValue, setItemSelectNameValue] = useState(null);
    const [type, setType] = useState(null);
    const handleClick = ( name, value, type) => {
        setItemSelect(name);
        setItemSelectNameValue(value);
        setType(type);

        if (type === "adicionar") {
        Add(name, value);
        } else if (type === "remover") {
        Remove(name, value);
        } else if (type === "limpar") {
        setItem([]);
        setValor(0);
        setQtdCart(0);
        }
    };

    function Add(name, value){
        setValor(prev => prev + Number(value));
        console.log(name, value);
        const foundAdd = colecao.find(item => item.nome === name) || fragrancia.find(item => item.nome === name);
        if (foundAdd) {
            setItem(prev => [...prev, foundAdd]);
        }
    }

    function Remove(name, value){
        const foundRemove = item.find(item => item.nome === name);
        if (foundRemove) {
            const index = item.findIndex(i => i.nome === name);
            const newItem = [...item];
            newItem.splice(index, 1);
            setItem(newItem);
            setValor(prev => Math.max(prev - value, 0));
        }
    }

    return (
        <FragmentoContext.Provider value={{ 
            cartOpen, 
            setCartOpen,
            item,
            setItem,
            valor,
            setValor,
            qtdCart,
            setQtdCart,
            itemSelect,
            setItemSelect,
            itemSelectNameValue,
            setItemSelectNameValue,
            type,
            setType,
            handleClick,
            Add,
            Remove
            }}
        >
            {children}
        </FragmentoContext.Provider>
    );
}

export function useFragmento() {
    return useContext(FragmentoContext);
}

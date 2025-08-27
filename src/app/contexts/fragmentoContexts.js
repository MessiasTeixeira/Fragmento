'use client';

import { createContext , useContext , useState} from "react";
import { create } from "../storage/storagefetch.js";

export const FragmentoContext = createContext();

export function FragmentoProvider({ children }) {
    const [cartOpen, setCartOpen] = useState(false);
    const [item, setItem] = useState([]);
    const [valor, setValor] = useState(0);
    const [qtdCart, setQtdCart] = useState(0);
    const [itemSelect, setItemSelect] = useState(null);
    const [itemSelectNameValue, setItemSelectNameValue] = useState(null);
    const [type, setType] = useState(null);
    const [data, setData] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [fragmento, setFragmento] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleSubmit = async () => {
        if (data.length === 0) return;
        try {
            for (const item of data) {
                await create('produtos', item);
            }
            setData([]);
            setItem([]);
            setValor(0);
            setQtdCart(0);
        } catch (err) {
            console.error("Erro ao enviar os itens", err);
        }
    };

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
        const foundAdd = fragmento.find(item => item.nome === name);
        if (foundAdd) {
            setItem(prev => [...prev, foundAdd]);
            setData(prev => [...prev, { 
                id: foundAdd.id, 
                nome: foundAdd.nome, 
                preco: foundAdd.preco,
                descricao: foundAdd.descricao,
                categoria: foundAdd.categoria,
            }]);
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
            setData(prev => prev.filter(item => item.nome !== name));
        }
    }
    
    const [modalOpen, setModalOpen] = useState(false);

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
            Remove,
            handleSubmit,
            setModalOpen,
            modalOpen,
            showAlert, 
            setShowAlert,
            fragmento,
            setFragmento,
            loading,
            setLoading
            }}
        >
            {children}
        </FragmentoContext.Provider>
    );
}

export function useFragmento() {
    return useContext(FragmentoContext);
}

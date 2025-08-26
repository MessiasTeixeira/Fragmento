import { useEffect, useState } from "react";
import { useFragmento } from "../contexts/fragmentoContexts.js";

function CreditCardModal() {
    const {
        modalOpen,
        setModalOpen,
        handleSubmit,
        setShowAlert
    } = useFragmento();

    const [cardNumber, setCardNumber] = useState("");
    const [name, setName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [backspace, setBackspace] = useState(false);

    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            setCardNumber("");
            setName("");
            setExpiry("");
            setCvv("");
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [modalOpen]);

        const formatCardNumber = (value) => {
            return value
                .replace(/\D/g, "")               
                .replace(/(\d{4})(?=\d)/g, "$1 ") 
                .trim();                           
        };


        const formatExpiry = (value) => {
            return value
                .replace(/\D/g, "")         
                .replace(/^(\d{2})(\d)/, "$1/$2") 
                .slice(0, 5);                
        };

    function Size(){
        if (cardNumber.length === 19 && name.length > 0 && expiry.length === 5 && cvv.length == 4) {
            return true;
        }
        return false;
    };  

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black/50 bg-opacity-10 ${modalOpen ? " " : "translate-x-full"}`}>
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Pagamento com Cartão</h2>
            <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Número do Cartão</label>
                <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    maxLength={19}
                    value={cardNumber}
                    onChange={(e) => {if (/^[\d\s]*$/.test(e.target.value)) setCardNumber(formatCardNumber(e.target.value));}}
                    onKeyDown={(e) => {if (e.key === "Backspace") setBackspace(true); else setBackspace(false);}} 
                    className="mt-1 block w-full border rounded-lg p-2"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Nome no Cartão</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => { if(/^[A-Za-z\s]*$/.test(e.target.value)) setName(e.target.value) }}
                    onKeyDown={(e) => {if (e.key === "Backspace") setBackspace(true); else setBackspace(false);}} 
                    placeholder="Como está no cartão"
                    className="mt-1 block w-full border rounded-lg p-2"
                    required
                />
            </div>
            <div className="flex space-x-4">
                <div className="flex-1">
                <label className="block text-sm font-medium">Validade</label>
                <input
                    type="text"
                    maxLength={5}
                    value={expiry}
                    onChange={(e) => { if (/^[0-9/]*$/.test(e.target.value)) setExpiry(formatExpiry(e.target.value)) }}
                    onKeyDown={e => {if (e.key === "Backspace") setBackspace(true); else setBackspace(false);}}
                    placeholder="MM/AA"
                    className="mt-1 block w-full border rounded-lg p-2"
                    required
                />
                </div>
                <div className="flex-1">
                <label className="block text-sm font-medium">CVV </label>
                <input
                    type="password"
                    maxLength={4}
                    value={cvv}
                    onChange={(e) => {if (/^\d*$/.test(e.target.value)) setCvv(e.target.value)}}
                    placeholder="***"
                    className="mt-1 block w-full border rounded-lg p-2"
                    required
                />
                </div>
            </div>
            <div className="flex justify-end space-x-3 mt-4">
                <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                    >
                Cancela
                </button>
                <button
                    disabled={!Size()}
                    onClick={(e) => { setShowAlert(true); handleSubmit(); setModalOpen(false); e.preventDefault();}}
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                    Confirmar
                </button>
            </div>
            </form>
        </div>
        </div>
    );
    }

    export default CreditCardModal;
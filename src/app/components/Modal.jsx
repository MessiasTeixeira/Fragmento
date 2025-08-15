import { useEffect, useState } from "react";
import { useFragmento } from "../contexts/fragmentoContexts.js";

function CreditCardModal() {
    const {
        modalOpen,
        setModalOpen,
        handleSubmit
    } = useFragmento();

    const [cardNumber, setCardNumber] = useState("");
    const [name, setName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");

    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            setCardNumber("");
            setName("");
            setExpiry("");
            setCvv("");
        }

        if (cardNumber.length == 4 || cardNumber.length == 9 || cardNumber.length == 14) { {/*MELHORAR ESSA LÓGICAS*/}
            setCardNumber((prev) => prev + " ");
        }

        if (expiry.length == 2) {  {/*MELHORAR ESSA LÓGICAS*/}
            setCardNumber((prev) => prev + " ");
            setExpiry((prev) => prev + "/");
        }

        return () => {
            document.body.style.overflow = "auto";
        };


    }, [modalOpen, cardNumber, expiry]);

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black/50 bg-opacity-10 ${modalOpen ? " " : "translate-x-full"}`}>
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Pagamento com Cartão</h2>
            <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Número do Cartão</label>
                <input
                    onBlur={() => /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/
}
                    type="text"
                    maxLength={19}
                    value={cardNumber}
                    onChange={(e) => { if (/^[\d\s]+$/.test(e.target.value)) setCardNumber(e.target.value) }}
                    placeholder="0000 0000 0000 0000"
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
                    onChange={(e) => { if (/^[0-9/]*$/.test(e.target.value)) setExpiry(e.target.value) }}
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
                    onChange={(e) => setCvv(e.target.value)}
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
                    onClick={handleSubmit}
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
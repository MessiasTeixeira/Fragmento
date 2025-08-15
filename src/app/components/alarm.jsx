import { useEffect } from "react";
import { useFragmento } from "../contexts/fragmentoContexts.js";
import { Alert, AlertDescription, AlertTitle } from "./alert"

function Alarm() {
    const { setShowAlert } = useFragmento();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [setShowAlert]);

    return (
        <div className="fixed top-4 right-4 z-50 animate-fade-in">
            <Alert className="bg-green-50 border-green-500 text-green-800 shadow-lg rounded-lg">
                <AlertTitle className="text-lg font-semibold mb-2">
                    Pedido Confirmado!
                </AlertTitle>
                <AlertDescription className="text-sm">
                    Seu pedido foi processado com sucesso. 
                    Em breve você receberá mais informações por email.
                </AlertDescription>
            </Alert>
        </div>
    );
}

export default Alarm;
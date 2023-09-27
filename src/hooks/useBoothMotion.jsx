import { useEffect, useRef } from "react";

export const useBoothMotion = ({ importStrategy = 'signed-url', ...options }) => {
    const buttonRef = useRef();

    useEffect(() => {
        if (!buttonRef.current) {
            return;
        }

        const script = document.createElement("script");
        script.src = "https://www.boothmotion.com/partners/partners.js";
        script.async = true;
        document.body.appendChild(script);

        let BM;

        const handleScriptLoad = () => {
            BM = new window.BoothMotionSDK({
                customButton: buttonRef.current,
                importStrategy,
                ...options,
            });

            BM.init();
        };

        script.addEventListener("load", handleScriptLoad);

        return () => {
            if (BM && BM.destroy) {
                BM.destroy();
            }
            script.removeEventListener("load", handleScriptLoad);
            document.body.removeChild(script);
        };

    }, [buttonRef, importStrategy, options]);

    return { buttonRef }
}

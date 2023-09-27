import { useEffect, useRef, useState } from "react";
import { useBoothMotion } from "../hooks/useBoothMotion";

export default function FileInputStrategy() {
    const inputRef = useRef(null);

    // This is a workaround to make sure the inputRef is updated in the useBoothMotion hook
    const [importStrategyOptions, setImportStrategyOptions] = useState({
        fileInput: inputRef.current,
    });

    useEffect(() => {
        setImportStrategyOptions({
            fileInput: inputRef.current,
        })
    }, [inputRef])

    const { buttonRef } = useBoothMotion({
        importStrategy: 'file-input',
        importStrategyOptions,
        onReceiveFile: (data) => {
            console.log('onReceiveFile', data);
        },
        onOpen: () => console.log('popup opened'),
        onClose: () => console.log('popup closed'),

        // Filters for the products that are shown in the import widget

        // productType: "start-screen", // optional, options: start-screen, animated-overlay, default is all
        // avoFileFormat: "transparent.mov", // optional, options: transparent.mov, transparent.hevc.mov, transparent.hevc.mp4
        // resolutionId: 2, // optional

        // 1 - mirror start screens
        // 2 - ipad portrait start screens
        // 3 - ipad landscape start screens
        // 4 - surface pro portrait start screens
        // 5 - surface pro landscape start screens
        // 6 - generic tft start screens
        // 7 - hd landscape start screens
        // 8 - pillar booth start screens

        // 9 - portrait animated overlays
        // 10 - landscape animated overlays
        // 11 - square animated overlays
    }, [inputRef]);


    return (
        <fieldset>
            <legend>File Input Strategy</legend>

            <button ref={buttonRef}>This is my custom open button</button>
            <input ref={inputRef} type="file" name="file" style={{ marginTop: '1rem', display: 'block' }} />
        </fieldset>
    );
}

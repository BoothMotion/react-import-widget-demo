import FileInputStrategy from "./components/FileInputStrategy";
import FileReturnStrategy from "./components/FileReturnStrategy";
import SignedUrlStrategy from "./components/SignedUrlStrategy";

export default function App() {
    return (
        <>
            <SignedUrlStrategy />
            <FileInputStrategy />
            <FileReturnStrategy />
        </>
    );
}

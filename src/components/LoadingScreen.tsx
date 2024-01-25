import { BeatLoader } from "react-spinners";

export default function LoadingScreen() {
    return (
        <div className="loading-screen">
            <BeatLoader className="bounce-loader" size={20} color="#ff00a4" />
        </div>
    );
}

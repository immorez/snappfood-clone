import { BeatLoader } from "react-spinners";

/**
 * LoadingScreen component displays a loading spinner as a fallback for suspense.
 *
 * @component
 * @example
 * Usage in a Suspense boundary
 * <Suspense fallback={<LoadingScreen />}>
 *   <LazyLoadedComponent />
 * </Suspense>
 *
 * @returns {JSX.Element} Loading screen with a spinning loader.
 */

export default function LoadingScreen() {
    return (
        <div className="loading-screen">
            <BeatLoader className="bounce-loader" size={20} color="#ff00a4" />
        </div>
    );
}

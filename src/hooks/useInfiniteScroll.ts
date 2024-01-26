import { useEffect, useState } from "react";

/**
 * Custom hook for handling infinite scroll behavior.
 *
 * @param {boolean} isLoading - Indicates whether data is currently being loaded.
 * @param {boolean} hasMoreData - Indicates whether there is more data to be loaded.
 * @param {string} className - The CSS class name of the container element.
 * @returns {object} - An object containing the current page value.
 */

const useInfiniteScroll = (
    isLoading: boolean,
    hasMoreData: boolean,
    className: string,
) => {
    const [page, setPage] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            if (hasMoreData) {
                const lastElement = document.querySelector(
                    `.${className} > :last-child`,
                );

                if (lastElement) {
                    const rect = lastElement.getBoundingClientRect();
                    const scrolledToBottom = rect.bottom <= window.innerHeight;

                    if (scrolledToBottom && !isLoading && hasMoreData) {
                        setPage((prevPage) => prevPage + 1);
                    }
                }
            }
        };

        document.addEventListener("scroll", onScroll);

        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, [isLoading, hasMoreData]);

    return { page };
};

export default useInfiniteScroll;

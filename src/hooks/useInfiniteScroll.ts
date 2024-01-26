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
    onPageChange: () => void,
) => {
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
                        onPageChange();
                    }
                }
            }
        };

        document.addEventListener("scroll", onScroll);

        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, [isLoading, hasMoreData, onPageChange]);
};

export default useInfiniteScroll;

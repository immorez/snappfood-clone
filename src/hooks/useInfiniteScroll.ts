import { debounce } from "lodash";
import { useEffect, useCallback } from "react";

const useInfiniteScroll = (
    isLoading: boolean,
    hasMoreData: boolean,
    className: string,
    onPageChange: () => void,
) => {
    const handleScroll = useCallback(() => {
        if (hasMoreData) {
            const lastElement = document.querySelector(
                `.${className} > :last-child`,
            ) as HTMLElement | null;

            if (lastElement) {
                const rect = lastElement.getBoundingClientRect();
                const scrolledToBottom =
                    rect.bottom <= window.innerHeight + 200;

                if (scrolledToBottom && !isLoading) {
                    onPageChange();
                }
            }
        }
    }, [isLoading, hasMoreData, onPageChange, className]);

    const debouncedScroll = useCallback(debounce(handleScroll, 200), [
        handleScroll,
    ]);

    useEffect(() => {
        document.addEventListener("scroll", debouncedScroll);

        return () => {
            document.removeEventListener("scroll", debouncedScroll);
        };
    }, [debouncedScroll]);

    return {};
};

export default useInfiniteScroll;

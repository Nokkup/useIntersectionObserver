import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = ({
    root = null,
    rootMargin = "0px",
    threshold = 1.0,
    triggerOnce = false,
}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [entry, setEntry] = useState({});

    useEffect(() => {
        let observerRef = null;

        const callback = (entries) => {
            const [entry] = entries;

            if (triggerOnce && isVisible) {
                return;
            }

            setIsVisible(entry.isIntersecting);
            setEntry(entry);
            console.log(entry);
        };

        const observer = new IntersectionObserver(
            callback,
            root,
            rootMargin,
            threshold
        );

        if (ref.current) {
            observer.observe(ref.current);
            observerRef = ref.current;
        }

        return () => {
            if (observerRef) {
                observer.unobserve(observerRef);
            }
        };
    }, [ref, root, rootMargin, threshold, triggerOnce, isVisible]);

    return [ref, isVisible, entry];
};

export default useIntersectionObserver;

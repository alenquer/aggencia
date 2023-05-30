import {
	HTMLMotionProps,
	animate,
	motion,
	useInView,
	useMotionValue,
	useTransform
} from "framer-motion";
import { useEffect, useRef } from "react";

interface IProps extends HTMLMotionProps<"span"> {
	from: number;
	to: number;
}

export function AnimatedCounter({ from, to, ...rest }: IProps) {
	const ref = useRef<HTMLSpanElement>(null);

	const inView = useInView(ref, { once: true });

	const count = useMotionValue(from);

	const rounded = useTransform(count, (latest) => Math.round(latest));

	// while in view, animate the count
	useEffect(() => {
		if (inView) animate(count, to, { duration: 3 });
	}, [count, inView, to]);

	return (
		<motion.span ref={ref} {...rest}>
			{rounded}
		</motion.span>
	);
}

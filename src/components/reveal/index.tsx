import {
	HTMLMotionProps,
	motion,
	useAnimation,
	useInView
} from "framer-motion";
import { PropsWithChildren, useEffect, useRef } from "react";

export const SectionReveal: React.FC<
	PropsWithChildren<HTMLMotionProps<"section">>
> = ({ children, ...rest }) => {
	const ref = useRef<HTMLDivElement>(null);

	const isInView = useInView(ref, { once: true });

	const controls = useAnimation();

	useEffect(() => {
		if (isInView) controls.start("visible");
	}, [controls, isInView]);

	return (
		<motion.section
			ref={ref}
			variants={{
				hidden: { opacity: 0, y: 75 },
				visible: { opacity: 1, y: 0 }
			}}
			initial="hidden"
			animate={controls}
			transition={{ duration: 0.5, delay: 0.25 }}
			{...rest}
		>
			{children}
		</motion.section>
	);
};

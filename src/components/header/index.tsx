import clsx from "clsx";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { MdMenu } from "react-icons/md";
import { productSans } from "~/shared";

const HeaderItem: React.FC<{
	title: string;
}> = ({ title }) => {
	return (
		<li>
			<p
				className={clsx(
					productSans.className,
					"font-bold",
					"text-xl",
					"lg:hover:text-[#FF5100]",
					"w-full",
					"px-6",
					"py-2",
					"text-center",
					"lg:text-black",
					"text-white",
					"rounded-lg",
					"cursor-pointer",
					"bg-primary",
					"xl:bg-transparent",
					"text-md",
					"xl:w-auto",
					"xl:py-0",
					"xl:px-0",
					"hover:opacity-50",
					"lg:hover:opacity-100"
				)}
			>
				{title}
			</p>
		</li>
	);
};

export const Header: React.FC = () => {
	const navRef = useRef<HTMLElement>(null);
	const menuListRef = useRef<HTMLUListElement>(null);

	function openMenu() {
		menuListRef.current?.classList.toggle("hidden");
		menuListRef.current?.classList.toggle("flex");
	}

	const onScroll = useCallback(() => {
		if (scrollY > 0) {
			navRef.current?.classList.add("scroll");
		} else {
			navRef.current?.classList.remove("scroll");
		}
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, [onScroll]);

	return (
		<nav
			ref={navRef}
			className={clsx(
				"fixed",
				"top-0",
				"py-4",
				"w-full",
				"bg-white",
				"z-[999]"
			)}
		>
			<div
				className={clsx(
					"container",
					"relative",
					"flex",
					"flex-col",
					"m-auto",
					"lg:justify-between",
					"lg:flex-row",
					"lg:items-center",
					"h-full",
					"w-full"
				)}
			>
				<div className={clsx("flex", "items-center", "justify-between")}>
					<a href="">
						<div
							className={clsx(
								"flex",
								"flex-row",
								"items-center",
								"gap-4"
							)}
						>
							<div className={clsx("relative", "w-9", "h-9")}>
								<Image
									priority
									fill
									src="/svgs/logo.svg"
									alt="aggencia-logo"
								/>
							</div>
							<h2
								className={clsx(
									productSans.className,
									"font-bold",
									"text-xl"
								)}
							>
								Aggencia
							</h2>
						</div>
					</a>
					<MdMenu
						size={36}
						onClick={openMenu}
						className={clsx(
							"cursor-pointer",
							"text-black",
							"xl:hidden",
							"hover:opacity-50"
						)}
					/>
				</div>
				<ul
					ref={menuListRef}
					className={clsx(
						"flex-col",
						"items-center",
						"hidden",
						"gap-4",
						"mt-4",
						//"bg-white",
						"rounded-lg",
						"xl:flex",
						"xl:flex-row",
						"xl:gap-6",
						"xl:mt-0"
					)}
				>
					<a
						href="#metodos"
						onClick={openMenu}
						className={clsx("w-full", "xl:w-auto")}
					>
						<HeaderItem title="Métodos" />
					</a>
					<a
						href="#especialidades"
						onClick={openMenu}
						className={clsx("w-full", "xl:w-auto")}
					>
						<HeaderItem title="Especialidades" />
					</a>
					<a
						href="#testemunhos"
						onClick={openMenu}
						className={clsx("w-full", "xl:w-auto")}
					>
						<HeaderItem title="Testemunhos" />
					</a>
					<a
						href="#sobre-nos"
						onClick={openMenu}
						className={clsx("w-full", "xl:w-auto")}
					>
						<HeaderItem title="Sobre Nós" />
					</a>
				</ul>
			</div>
		</nav>
	);
};

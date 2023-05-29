import clsx from "clsx";
import { useKeenSlider } from "keen-slider/react";
import Head from "next/head";
import Image from "next/image";
import {
	BsFacebook,
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
	BsInstagram
} from "react-icons/bs";
import { AnimatedCounter } from "~/components/counter";
import { Header } from "~/components/header";
import { SectionReveal } from "~/components/reveal";
import { hankenGrotesk, productSans } from "~/shared";
import { feedbacks } from "~/utils/feedbacks";

const MethodCard: React.FC<{
	imageSrc: string;
	imageAlt: string;
	title: string;
	description: string;
	floatLabel: string;
	side?: "left" | "right";
}> = ({
	description,
	imageAlt,
	imageSrc,
	floatLabel,
	title,
	side = "left"
}) => {
	return (
		<div
			className={clsx(
				"min-h-[12rem]",
				"w-full",
				"lg:w-2/3",
				"bg-white",
				"relative",
				"rounded-lg",
				"shadow-[4px_4px_48px_4px_rgba(0,0,0,0.1)]",
				"items-center",
				"flex",
				"px-4",
				"py-8",
				"gap-2",
				"sm:px-8",
				"sm:py-4",
				"sm:gap-2",
				"flex-col",
				side === "left" ? "place-self-start" : "place-self-end",
				side === "right" ? "sm:flex-row-reverse" : "sm:flex-row"
			)}
		>
			<div
				className={clsx(
					"relative",
					"min-h-[6rem]",
					"min-w-[6rem]",
					"sm:min-h-[9rem]",
					"sm:min-w-[9rem]"
				)}
			>
				<Image fill src={imageSrc} alt={imageAlt} />
			</div>
			<div className={clsx("flex", "flex-col", "gap-2")}>
				<p
					className={clsx(
						productSans.className,
						"font-bold",
						"text-lg",
						"xxs:text-2xl",
						"relative",
						"pb-2",
						"after:absolute",
						"after:content-['']",
						"after:rounded-xl",
						"after:border-b-4",
						"after:border-[#FF5100]",
						"after:bottom-0",
						"after:left-0",
						"after:w-16"
					)}
				>
					{title}
				</p>
				<p
					className={clsx(
						hankenGrotesk.className,
						"lg:text-[16px]",
						"xxs:text-sm",
						"text-xs",
						"opacity-80"
					)}
				>
					{description}
				</p>
			</div>
			<div
				className={clsx(
					"absolute",
					"md:-top-8",
					"-top-4",
					side === "right" ? "md:-right-8" : "md:-left-8",
					side === "right" ? "-right-4" : "-left-4"
				)}
			>
				<p
					className={clsx(
						productSans.className,
						"font-bold",
						"text-5xl",
						"md:text-7xl",
						"text-[#FF5100]",
						"opacity-50"
					)}
				>
					{floatLabel}
				</p>
			</div>
		</div>
	);
};

const ClientSlide: React.FC<{
	name: string;
	vacation: string;
	description: string;
	avatar: string;
}> = ({ avatar, name, vacation, description }) => {
	return (
		<div
			className={clsx(
				"h-56",
				"bg-[#F8F9FF]",
				"hover:bg-[#FF5100]",
				"hover:cursor-pointer",
				"rounded-lg",
				"p-4",
				"flex",
				"flex-col",
				"gap-4",
				"group"
			)}
		>
			<div className={clsx("flex", "flex-row", "items-center", "gap-4")}>
				<div
					className={clsx(
						"relative",
						"w-16",
						"h-16",
						"rounded-full",
						"bg-[#eee]",
						"overflow-hidden"
					)}
				>
					<Image fill src={avatar} alt={name} />
				</div>
				<div>
					<strong
						className={clsx(
							hankenGrotesk.className,
							"group-hover:text-white",
							"text-lg",
							"text-[#FF5100]"
						)}
					>
						{name}
					</strong>
					<p
						className={clsx(
							hankenGrotesk.className,
							"group-hover:text-white",
							"text-sm"
						)}
					>
						{vacation}
					</p>
				</div>
			</div>
			<p
				className={clsx(
					hankenGrotesk.className,
					"text-sm",
					"line-clamp-5",
					"opacity-80",
					"group-hover:text-white"
				)}
			>
				{description}
			</p>
		</div>
	);
};

export default function Home() {
	const [ref, instanceRef] = useKeenSlider<HTMLUListElement>({
		breakpoints: {
			"(min-width: 720px)": {
				slides: { perView: 2, spacing: 16 }
			},
			"(min-width: 1024px)": {
				slides: { perView: 3, spacing: 16 }
			}
		},
		loop: true,
		slides: { perView: 1, spacing: 16 }
	});

	function nextPage() {
		return instanceRef.current?.next();
	}

	function prevPage() {
		return instanceRef.current?.prev();
	}

	return (
		<>
			<Head>
				<title>
					Aggencia - Especialistas em Google Ads e Criação de Sites
				</title>
				<meta
					name="description"
					content="Agência de marketing especializada em Google Ads e criação de sites. Estratégias personalizadas, campanhas segmentadas, otimização de anúncios. Design responsivo e funcionalidade para sites. Monitoramento de métricas e ROI. Resultados com atendimento personalizado, transforme sua presença online."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/svgs/logo.svg" />
				<link
					rel="preload"
					as="image"
					type="image/svg+xml"
					href="/svgs/wave.svg"
				/>
			</Head>
			<header>
				<Header />
			</header>
			<main className={clsx("mt-20")}>
				<section>
					<div
						className={clsx(
							"container",
							"flex",
							"flex-row",
							"justify-between",
							"items-center",
							"h-[24rem]",
							"relative",
							"m-auto",
							"mt-4",
							"lg:mt-0"
						)}
					>
						<div
							className={clsx(
								"absolute",
								"top-0",
								"h-[32rem]",
								"lg:h-[36rem]",
								"flex",
								"flex-col",
								"lg:flex-row",
								"items-center",
								"gap-8",
								"lg:gap-4",
								"w-full",
								"z-10"
							)}
						>
							<div className={clsx("flex", "flex-col", "gap-6")}>
								<h1
									className={clsx(
										productSans.className,
										"text-4xl",
										"md:text-5xl",
										"text-center",
										"lg:text-left",
										"font-bold",
										"text-black"
									)}
								>
									Venda no Google <br />
									<span className="text-[#FF5100]">
										todos os dias.
									</span>
								</h1>
								<h2
									className={clsx(
										hankenGrotesk.className,
										"text-sm",
										"text-center",
										"lg:text-left",
										"md:text-lg",
										"opacity-80"
									)}
								>
									Tenha uma estratégia de marketing específica para o
									seu negócio criado por especialistas em Google Ads.
								</h2>
								<a
									href={process.env["NEXT_PUBLIC_WHATSAPP"]}
									target="_blank"
									rel="noopener noreferrer"
								>
									<button
										type="button"
										className={clsx(
											productSans.className,
											"font-bold",
											"text-white",
											"bg-[#FF5100]",
											"rounded-xl",
											"text-lg",
											"h-16",
											"w-full",
											"lg:w-64",
											"shadow-[4px_4px_48px_4px_rgba(0,0,0,0.1)]",
											"hover:cursor-pointer",
											"hover:opacity-40"
										)}
									>
										Entre em Contato
									</button>
								</a>
							</div>
							<aside
								className={clsx(
									"lg:min-w-[36rem]",
									"lg:max-w-[36rem]",
									"min-h-[70vw]",
									"max-h-[70vw]",
									"min-w-full",
									"lg:min-h-[36rem]",
									"lg:max-h-[36rem]",
									"relative",
									"overflow-hidden"
								)}
							>
								<Image
									fill
									priority
									src="/svgs/meme-content.svg"
									alt="meme-content"
									placeholder="blur"
									blurDataURL={"/svgs/meme-content.svg"}
									className={clsx("animate-fly")}
								/>
							</aside>
						</div>
					</div>
				</section>
				<div
					className={clsx(
						"w-full",
						"lg:h-[450px]",
						"h-[70vw]",
						"relative"
					)}
				>
					<Image
						fill
						priority
						alt="wave"
						src="/svgs/wave.svg"
						placeholder="blur"
						blurDataURL={"/svgs/wave.svg"}
					/>
				</div>
				<SectionReveal id="metodos">
					<div className={clsx("container", "relative", "m-auto")}>
						<h2
							className={clsx(
								productSans.className,
								"relative",
								"text-black",
								"font-bold",
								"text-4xl",
								"text-center",
								"pb-4",
								"after:absolute",
								"after:content-['']",
								"after:rounded-xl",
								"after:border-b-4",
								"after:border-[#FF5100]",
								"after:bottom-0",
								"after:left-[50%]",
								"after:-ml-[50px]",
								"after:w-24",
								"after:m-auto"
							)}
						>
							Conheça nosso método
						</h2>
						<div className={clsx("flex", "flex-col", "mt-16", "gap-8")}>
							<MethodCard
								imageAlt="objetivos"
								imageSrc="/svgs/testimonial.svg"
								title="Objetivo"
								floatLabel="01"
								description="Para ajudar a sua empresa a crescer, primeiro
										buscamos entender o produto que ela vende, os
										objetivos e as limitações. Com isso em mente,
										partimos para a parte 2."
							/>
							<MethodCard
								imageAlt="concorrentes"
								imageSrc="/svgs/concorrentes.svg"
								title="Concorrentes"
								floatLabel="02"
								side="right"
								description="Todo mundo quer ser maior que os concorrentes.
										Para alcançar isso, os estudamos para ver o que
										eles fazem que dá certo e o que da errado. Assim,
										economizamos seu dinheiro, tempo e esforço para
										alcançar anúncios vencedores."
							/>
							<MethodCard
								imageAlt="estratégia"
								imageSrc="/svgs/estrategia.svg"
								title="Estratégia"
								floatLabel="03"
								description="Entendendo como seus concorrentes trabalham,
										partimos para a montagem de uma estratégia
										especifica para o seu negócio, buscando sempre
										gastar o menos possível por cada venda."
							/>
							<MethodCard
								imageAlt="lançamento"
								imageSrc="/svgs/lancamento.svg"
								title="Lançamento"
								floatLabel="04"
								side="right"
								description="Após todos os passos anteriores, partimos para a
										ação. Lançamos os seus anúncios seguindo o
										planejamento a risca para obtermos o melhor
										resultado possível para a sua empresa."
							/>
						</div>
					</div>
				</SectionReveal>
				<SectionReveal id="especialidades">
					<div
						className={clsx(
							"container",
							"relative",
							"mt-24",
							"lg:mt-36",
							"m-auto"
						)}
					>
						<div className={clsx("especialidades-grid", "lg:h-[24rem]")}>
							<div
								className={clsx(
									"[grid-area:a]",
									"bg-[#F8F9FF]",
									"rounded-xl",
									"flex",
									"flex-col",
									"items-center",
									"justify-center",
									"gap-4",
									"p-8",
									"h-48"
								)}
							>
								<Image
									alt="promoção"
									width={36}
									height={36}
									src={"/svgs/promotion.svg"}
									className={clsx("text-[#FF5100]")}
								/>
								<p
									className={clsx(
										hankenGrotesk.className,
										"text-lg",
										"text-center",
										"text-black",
										"opacity-80"
									)}
								>
									Campanhas para Google Ads
								</p>
							</div>
							<div
								className={clsx(
									"[grid-area:b]",
									"bg-[#F8F9FF]",
									"rounded-xl",
									"flex",
									"flex-col",
									"items-center",
									"justify-center",
									"gap-4",
									"p-8",
									"h-48"
								)}
							>
								<Image
									alt="desenvolvimento de sites"
									width={36}
									height={36}
									src={"/svgs/code.svg"}
									className={clsx("text-[#FF5100]")}
								/>
								<p
									className={clsx(
										hankenGrotesk.className,
										"text-lg",
										"text-center",
										"text-black",
										"opacity-80"
									)}
								>
									Desenvolvimento e Design de Sites
								</p>
							</div>
							<div
								className={clsx(
									"[grid-area:c]",
									"rounded-xl",
									"flex",
									"flex-col",
									"items-center",
									"justify-center",
									"p-8"
								)}
							>
								<h2
									className={clsx(
										productSans.className,
										"relative",
										"text-black",
										"font-bold",
										"text-4xl",
										"text-center",
										"pb-4",
										"after:absolute",
										"after:content-['']",
										"after:rounded-xl",
										"after:border-b-4",
										"after:border-[#FF5100]",
										"after:bottom-0",
										"after:left-[50%]",
										"after:-translate-x-[50%]",
										"after:w-24",
										"after:m-auto"
									)}
								>
									Nossas Especialidades
								</h2>
								<p
									className={clsx(
										hankenGrotesk.className,
										"text-black",
										"text-center",
										"text-lg",
										"opacity-80",
										"mt-2"
									)}
								>
									Profissionais especializados e prontos para te
									entregar resultado e te ajudar a vender todos os dias
									através do Google Ads.
								</p>
							</div>
							<div
								className={clsx(
									"[grid-area:e]",
									"bg-[#F8F9FF]",
									"rounded-xl",
									"flex",
									"flex-col",
									"items-center",
									"justify-center",
									"gap-4",
									"p-8",
									"h-48"
								)}
							>
								<Image
									alt="elaboração de copys"
									width={36}
									height={36}
									src={"/svgs/copy.svg"}
									className={clsx("text-[#FF5100]")}
								/>
								<p
									className={clsx(
										hankenGrotesk.className,
										"text-lg",
										"text-center",
										"text-black",
										"opacity-80"
									)}
								>
									Elaboração de Copys
								</p>
							</div>
							<div
								className={clsx(
									"[grid-area:f]",
									"bg-[#F8F9FF]",
									"rounded-xl",
									"flex",
									"flex-col",
									"items-center",
									"justify-center",
									"gap-4",
									"p-8",
									"h-48"
								)}
							>
								<Image
									alt="crescimento de negócio"
									width={36}
									height={36}
									src={"/svgs/growth.svg"}
									className={clsx("text-[#FF5100]")}
								/>
								<p
									className={clsx(
										hankenGrotesk.className,
										"text-lg",
										"text-center",
										"text-black",
										"opacity-80"
									)}
								>
									Otimização de Campanhas
								</p>
							</div>
							<div
								className={clsx(
									"[grid-area:g]",
									"bg-[#F8F9FF]",
									"rounded-xl",
									"flex",
									"flex-col",
									"items-center",
									"justify-center",
									"gap-4",
									"p-8",
									"h-48"
								)}
							>
								<Image
									alt="estudo de persona"
									width={36}
									height={36}
									src={"/svgs/writer.svg"}
									className={clsx("text-[#FF5100]")}
								/>
								<p
									className={clsx(
										hankenGrotesk.className,
										"text-lg",
										"text-center",
										"text-black",
										"opacity-80"
									)}
								>
									Estudo de Persona e Concorrentes
								</p>
							</div>
							<div
								className={clsx(
									"[grid-area:h]",
									"bg-[#F8F9FF]",
									"rounded-xl",
									"flex",
									"flex-col",
									"items-center",
									"justify-center",
									"gap-4",
									"p-8",
									"h-48"
								)}
							>
								<Image
									alt="alavancar vendas"
									width={36}
									height={36}
									src={"/svgs/rocket.svg"}
									className={clsx("text-[#FF5100]")}
								/>
								<p
									className={clsx(
										hankenGrotesk.className,
										"text-lg",
										"text-center",
										"text-black",
										"opacity-80"
									)}
								>
									Alavancagem de Vendas
								</p>
							</div>
						</div>
					</div>
				</SectionReveal>
				<SectionReveal id="testemunhos">
					<div
						className={clsx(
							"container",
							"relative",
							"m-auto",
							"mt-24",
							"lg:mt-36",
							"flex",
							"flex-col",
							"gap-8"
						)}
					>
						<div
							className={clsx(
								"flex",
								"flex-row",
								"lg:justify-between",
								"justify-center",
								"items-center",
								"gap-8"
							)}
						>
							<div className={clsx("flex", "flex-col", "w-[36rem]")}>
								<h2
									className={clsx(
										productSans.className,
										"relative",
										"text-black",
										"font-bold",
										"text-4xl",
										"text-center",
										"lg:text-left",
										"pb-4",
										"after:absolute",
										"after:content-['']",
										"after:rounded-xl",
										"after:border-b-4",
										"after:border-[#FF5100]",
										"after:bottom-0",
										"lg:after:left-[32%]",
										"after:left-[50%]",
										"after:-translate-x-[50%]",
										"lg:after:-translate-x-[0]",
										"after:w-24",
										"after:m-auto"
									)}
								>
									O que nossos clientes dizem
								</h2>
								<p
									className={clsx(
										hankenGrotesk.className,
										"text-lg",
										"text-center",
										"lg:text-left",
										"opacity-80",
										"mt-2"
									)}
								>
									De lojistas a prestadores de serviço, atendemos e
									ajudamos qualquer tipo de negócio local a triplicar
									suas vendas na internet.
								</p>
							</div>
							<div
								className={clsx(
									"lg:flex",
									"flex-row",
									"items-center",
									"gap-4",
									"hidden"
								)}
							>
								<BsFillArrowLeftCircleFill
									onClick={prevPage}
									size={48}
									className={clsx(
										"text-[#ccc]",
										"hover:text-[#FF5100]",
										"hover:cursor-pointer"
									)}
								/>
								<BsFillArrowRightCircleFill
									onClick={nextPage}
									size={48}
									className={clsx(
										"text-[#ccc]",
										"hover:text-[#FF5100]",
										"hover:cursor-pointer"
									)}
								/>
							</div>
						</div>
						<ul ref={ref} className={clsx("keen-slider", "h-full")}>
							{feedbacks.map((data, index) => {
								return (
									<li
										key={index}
										className={clsx(
											`keen-slider__slide`,
											`number-slide${index}`,
											"group"
										)}
									>
										<ClientSlide
											name={data.name}
											vacation={data.vacation}
											avatar={data.avatar}
											description={data.description}
										/>
									</li>
								);
							})}
						</ul>
						<div
							className={clsx(
								"flex",
								"flex-row",
								"items-center",
								"gap-4",
								"lg:hidden",
								"justify-center"
							)}
						>
							<BsFillArrowLeftCircleFill
								onClick={prevPage}
								size={48}
								className={clsx(
									"text-[#ccc]",
									"hover:text-[#FF5100]",
									"hover:cursor-pointer"
								)}
							/>
							<BsFillArrowRightCircleFill
								onClick={nextPage}
								size={48}
								className={clsx(
									"text-[#ccc]",
									"hover:text-[#FF5100]",
									"hover:cursor-pointer"
								)}
							/>
						</div>
					</div>
				</SectionReveal>
				<SectionReveal>
					<div
						className={clsx(
							"container",
							"relative",
							"m-auto",
							"flex",
							"flex-col",
							"lg:flex-row",
							"items-center",
							"justify-between",
							"mt-24",
							"lg:mt-36",
							"text-center",
							"lg:text-left",
							"gap-8",
							"lg:gap-4"
						)}
					>
						<div className={clsx("conquests-grid")}>
							<div className={clsx("[grid-area:header]")}>
								<h2
									className={clsx(
										productSans.className,
										"relative",
										"text-black",
										"font-bold",
										"text-4xl",
										"pb-4",
										"after:absolute",
										"after:content-['']",
										"after:rounded-xl",
										"after:border-b-4",
										"after:border-[#FF5100]",
										"after:bottom-0",
										"after:left-[50%]",
										"after:-translate-x-[50%]",
										"lg:after:-translate-x-[0]",
										"lg:after:left-[24%]",
										"after:w-16",
										"after:m-auto"
									)}
								>
									Nossas Conquistas
								</h2>
							</div>
							<div
								className={clsx(
									"flex",
									"flex-col",
									"gap-1",
									"[grid-area:a]",
									"whitespace-nowrap"
								)}
							>
								<AnimatedCounter
									from={0}
									to={100}
									className={clsx(
										productSans.className,
										"font-bold",
										"text-3xl",
										"text-[#FF5100]",
										"before:content-['R$']",
										"before:pr-2",
										"after:content-['K+']"
									)}
								/>
								<p
									className={clsx(
										productSans.className,
										"text-lg",
										"text-black",
										"opacity-80"
									)}
								>
									Gerenciados em anúncios
								</p>
							</div>
							<div
								className={clsx(
									"flex",
									"flex-col",
									"gap-1",
									"[grid-area:b]",
									"mt-2",
									"lg:mt-0",
									"whitespace-nowrap"
								)}
							>
								<AnimatedCounter
									from={0}
									to={4000}
									className={clsx(
										productSans.className,
										"font-bold",
										"text-3xl",
										"text-[#FF5100]",
										"after:content-['+']"
									)}
								/>
								<p
									className={clsx(
										productSans.className,
										"text-lg",
										"text-black",
										"opacity-80"
									)}
								>
									Leads Gerados
								</p>
							</div>
							<div
								className={clsx(
									"flex",
									"flex-col",
									"gap-1",
									"[grid-area:c]",
									"mt-2",
									"lg:mt-0",
									"whitespace-nowrap"
								)}
							>
								<AnimatedCounter
									from={0}
									to={24}
									className={clsx(
										productSans.className,
										"font-bold",
										"text-3xl",
										"text-[#FF5100]",
										"after:content-['+']"
									)}
								/>
								<p
									className={clsx(
										productSans.className,
										"text-lg",
										"text-black",
										"opacity-80"
									)}
								>
									Sites que VENDEM criados
								</p>
							</div>
							<div
								className={clsx(
									"flex",
									"flex-col",
									"gap-1",
									"[grid-area:d]",
									"mt-2",
									"lg:mt-0",
									"whitespace-nowrap"
								)}
							>
								<AnimatedCounter
									from={0}
									to={16}
									className={clsx(
										productSans.className,
										"font-bold",
										"text-3xl",
										"text-[#FF5100]",
										"after:content-['+']"
									)}
								/>
								<p
									className={clsx(
										productSans.className,
										"text-lg",
										"text-black",
										"opacity-80"
									)}
								>
									Nichos Atendidos
								</p>
							</div>
						</div>
						<aside
							className={clsx(
								"min-w-full",
								"h-[70vw]",
								"lg:min-w-[32rem]",
								"lg:h-[36rem]",
								"relative"
							)}
						>
							<Image
								fill
								src="/svgs/ship.svg"
								alt="ship-content"
								placeholder="blur"
								blurDataURL={"/svgs/ship.svg"}
							/>
						</aside>
					</div>
				</SectionReveal>
				<SectionReveal id="sobre-nos">
					<div
						className={clsx(
							"container",
							"relative",
							"m-auto",
							"flex",
							"flex-col-reverse",
							"lg:flex-row",
							"items-center",
							"justify-between",
							"mt-24",
							"gap-8",
							"text-center",
							"lg:text-left"
						)}
					>
						<aside
							className={clsx(
								"min-w-full",
								"h-[70vw]",
								"lg:min-w-[32rem]",
								"lg:h-[36rem]",
								"relative"
							)}
						>
							<Image
								fill
								src="/svgs/why.svg"
								alt="why-content"
								placeholder="blur"
								blurDataURL={"/svgs/why.svg"}
							/>
						</aside>
						<div className={clsx("flex", "flex-col")}>
							<h2
								className={clsx(
									productSans.className,
									"relative",
									"text-black",
									"font-bold",
									"text-4xl",
									"pb-4",
									"after:absolute",
									"after:content-['']",
									"after:rounded-xl",
									"after:border-b-4",
									"after:border-[#FF5100]",
									"after:bottom-0",
									"lg:after:left-[32%]",
									"after:left-[50%]",
									"after:-translate-x-[50%]",
									"lg:after:-translate-x-[0]",
									"after:w-24",
									"after:m-auto"
								)}
							>
								Por que a Aggencia?
							</h2>
							<p
								className={clsx(
									hankenGrotesk.className,
									"text-lg",
									"mt-4",
									"text-black",
									"opacity-80"
								)}
							>
								<span className={clsx("inline-block")}>
									Saber apertar os botões, criar anúncios de qualquer
									forma e selecionar palavras chaves no achismo é o que
									a maioria dos gestores de tráfego fazem, mas isso não
									é o suficiente. Na Aggencia trabalhamos de uma forma
									diferente.
								</span>
								<span className={clsx("inline-block", "mt-4")}>
									Buscamos entender a sua empresa, as limitações, os
									objetivos, qual solução você vende. Além de estudar
									profundamente a sua persona (público comprador).
								</span>
								<span className={clsx("inline-block", "mt-4")}>
									Essa é a parte principal para se ter anúncios
									vencedores e conseguir vender todos os dias no
									Google. Cuidamos da verba disponibilizada pelos
									nossos clientes como se fossem nosso, não gastaremos
									com cliques sujos de pessoas curiosas que não vão
									comprar o seu produto.
								</span>
							</p>
						</div>
					</div>
				</SectionReveal>
			</main>
			<footer className={clsx("mt-24", "bg-[#FF5100]", "h-28")}>
				<div
					className={clsx(
						"container",
						"m-auto",
						"flex",
						"flex-row",
						"items-center",
						"h-full",
						"justify-between",
						"gap-8"
					)}
				>
					<div
						className={clsx(
							"flex",
							"flex-row",
							"lg:flex-col",
							"gap-2",
							"items-center",
							"justify-between",
							"w-full",
							"lg:w-auto"
						)}
					>
						<h2
							className={clsx(
								productSans.className,
								"font-bold",
								"text-white",
								"text-xl"
							)}
						>
							Aggencia
						</h2>
						<div
							className={clsx(
								"flex",
								"flex-row",
								"items-center",
								"gap-4"
							)}
						>
							<a
								href={process.env["NEXT_PUBLIC_FACEBOOK"]}
								target="_blank"
								rel="noopener noreferrer"
							>
								<BsFacebook
									size={28}
									color="white"
									className={clsx("hover:opacity-50")}
								/>
							</a>
							<a
								href={process.env["NEXT_PUBLIC_INSTAGRAM"]}
								target="_blank"
								rel="noopener noreferrer"
							>
								<BsInstagram
									size={28}
									color="white"
									className={clsx("hover:opacity-50")}
								/>
							</a>
						</div>
					</div>
					<ul
						className={clsx(
							"hidden",
							"lg:flex",
							"flex-row",
							"items-center",
							"gap-8"
						)}
					>
						<a href="#metodos">
							<li>
								<p
									className={clsx(
										productSans.className,
										"font-bold",
										"text-xl",
										"text-white",
										"hover:cursor-pointer",
										"hover:opacity-40"
									)}
								>
									Método
								</p>
							</li>
						</a>
						<a href="#especialidades">
							<li>
								<p
									className={clsx(
										productSans.className,
										"font-bold",
										"text-xl",
										"text-white",
										"hover:cursor-pointer",
										"hover:opacity-40"
									)}
								>
									Especialidades
								</p>
							</li>
						</a>
						<a href="#testemunhos">
							<li>
								<p
									className={clsx(
										productSans.className,
										"font-bold",
										"text-xl",
										"text-white",
										"hover:cursor-pointer",
										"hover:opacity-40"
									)}
								>
									Testemunhos
								</p>
							</li>
						</a>
						<a href="#sobre-nos">
							<li>
								<p
									className={clsx(
										productSans.className,
										"font-bold",
										"text-xl",
										"text-white",
										"hover:cursor-pointer",
										"hover:opacity-40"
									)}
								>
									Sobre Nós
								</p>
							</li>
						</a>
					</ul>
				</div>
			</footer>
		</>
	);
}

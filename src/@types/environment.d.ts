declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_WHATSAPP: string;
			NEXT_PUBLIC_INSTAGRAM: string;
			NEXT_PUBLIC_FACEBOOK: string;
		}
	}
}

export type ChatID = number | null;

export interface CommandRetention {
	command: string,
	timestamp: number,
	stage?: number
}
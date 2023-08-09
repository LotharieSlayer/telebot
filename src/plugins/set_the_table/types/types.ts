export interface SetTheTableType {
	participants: string[] | null,
	meals: MealType[] | null,
	turn: number | null,
}

export interface MealType {
	name: string,
	time: number
}
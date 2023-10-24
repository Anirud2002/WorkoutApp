export interface Food {
    name: string,
    calories?: number,
    protein?: number,
    caarbs?: number,
    fat?: number
}

export interface Meal {
    mealName: string,
    foods?: Food[]
}

export interface Set {
    weight: number,
    reps: number
}

export interface Exercise {
    id: string, // unique id for each exercise
    name: string,
    imageSrc?: string,
    sets: Set[];
}
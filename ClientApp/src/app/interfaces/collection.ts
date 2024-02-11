import { Course } from "./course";

export interface Collection {
    id: number;
    title: string;
    titleTranslation?: string;
    image?: string;
    bio?: string;
    collectionName: string;
    mainColor: string;
    courses: Course[]
}

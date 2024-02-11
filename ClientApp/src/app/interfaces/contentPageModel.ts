import { Collection } from "./collection";

export interface Course {
    id: number;
    courseName: string;
    title: string;
    thumbImage: string;
    completed: number;
    englishOnly: boolean;
}


export interface MenuGroupItem {
    title: string;
    titleTranslation: string;
    image: string;
    mainColor: string;
    collections: Collection[];
    journal: Course;
}

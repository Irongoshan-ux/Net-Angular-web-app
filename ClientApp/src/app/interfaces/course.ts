export interface Course {
    id: number;
    courseName: string;
    title: string;
    titleTranslation: string;
    collectionIdName: string;
    wideImage: string;
    totalSessions: number;
    englishOnly: boolean;
    largeImage: string;
    thumbImage: string;
    verticalImage: string;
    description: string;
    rating: number;
    completed?: number;
    completedSessions?: number;
}

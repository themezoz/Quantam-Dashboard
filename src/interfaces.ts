interface Duration {
    startDate: string;
    endDate: string;
}

interface Curriculum {
    units: number;
    lessons: number;
    topics: number;
}
interface Grade {
    base: number;
    additional: number;
}

export interface Course {
    img: string;
    title: string;
    subject: string;
    grade: Grade;
    curriculum: Curriculum;
    classes: string[];
    students: number;
    duration: Duration;
    isFavourite: boolean;
    isExpired: boolean;
}


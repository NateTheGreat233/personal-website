import { MY_BIRTHDAY, UNDERGRAD_START_YEAR } from "./constants";

export enum StudentStatus {
    FRESHMAN = 'freshman',
    SOPHOMORE = 'sophomore',
    JUNIOR = 'junior',
    SENIOR = 'senior',
    GRADUATE = 'graduate'
}

export const calculateAge = (birthday?: Date): number => {
    const birth = birthday ?? MY_BIRTHDAY;
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

export const calculateStudentStatus = (startYear?: number): StudentStatus => {
    const firstYear = startYear ?? UNDERGRAD_START_YEAR;
    const yearsAfterStarting = calculateAge(new Date(firstYear, 6, 1));
    if (yearsAfterStarting < 1) {
        return StudentStatus.FRESHMAN;
    } else if (yearsAfterStarting < 2) {
        return StudentStatus.SOPHOMORE;
    } else if (yearsAfterStarting < 3) {
        return StudentStatus.JUNIOR;
    } else {
        return StudentStatus.GRADUATE;
    }
}
const AddNumbers = (a: number, b: number) => {
    const c = a + b;
    console.log(c);
}

const BadAddNumbers = (a: number, b: number) => {
    const c = a + b;
    console.log(d);
}

const DeleteMatch = (FirstArray: string[], SecondArray: string[]) => {
    if (FirstArray.length != SecondArray.length) {
        throw new Error("Arrays are different lengths");
    } else if (Array.isArray(FirstArray) && FirstArray.every(item => typeof item === 'string') || Array.isArray(SecondArray) && SecondArray.every(item => typeof item === 'string')) {
        throw new Error("Props must be an array of strings");
    }

    let matchedIndex: number | null = null;
    for (let index = 0; index < FirstArray.length; index++) {
        const element = FirstArray[index];
        const foundIndex = SecondArray.findIndex(value => value === element);
        if (foundIndex === -1) {
            continue;
        } else {
            matchedIndex = foundIndex;
            break;
        }
    }

    if (matchedIndex === null) {
        throw new Error("No matches");
    } else {
        FirstArray.splice(matchedIndex - 1, 1);
        SecondArray.splice(matchedIndex - 1, 1);
        console.log('The first array is:', FirstArray);
        console.log('The second array is:', SecondArray);
    }
}

const BadDeleteMatch = (FirstArray: string[], SecondArray: string[]) => {
    if (FirstArray.length != SecondArray.length) {
        throw new Error("Arrays are different lengths");
    } else if (Array.isArray(FirstArray) && FirstArray.every(item => typeof item === 'string') || Array.isArray(SecondArray) && SecondArray.every(item => typeof item === 'string')) {
        throw new Error("Props must be an array of strings");
    }

    let matchedIndex: number | null = null;
    for (let index = 0; index < FirstArray.length; index++) {
        const element = FirstArray[index];
        const foundIndex = SecondArray.findIndex(value => value === element);
        if (foundIndex === -1) {
            continue;
        } else {
            matchedIndex = element;
            break;
        }
    }

    if (matchedIndex === null) {
        throw new Error("No matches");
    } else {
        FirstArray.splice(matchedIndex - 1, 1);
        SecondArray.splice(matchedIndex - 1, 1);
        console.log('The first array is:', FirstArray);
        console.log('The second array is:', SecondArray);
    }
}
// 通过 接口interface来定义索引类型

interface FrontLanguage {
    // index 是一个形参，名称可以自由定义
    [index: number]: string
}

const frontLanguage: FrontLanguage = {
    0: "HTML",
    1: "CSS",
    2: "JavaScript",
    3: "Vue"
}


interface ILanguageYear {
    [name: string]: number
}


const languageYear: ILanguageYear = {
    "C": 1972,
    "Java": 1995,
    "JavaScript": 1996,
    "TypeScript": 2014
}


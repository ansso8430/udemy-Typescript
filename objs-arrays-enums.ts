// const person : {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } =  {
//     name: 'so',
//     age: 27,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'] // 튜플
// };

// person.role.push('admin');  // push는 튜플에서 거르질 못함 but 값을 할당하지는 않음
// person.role[1] = 10;    // !! ERROR 두번째는 string

// person.role = [0, 'adimin', 'user'];

let favoriteActivites: string[];
favoriteActivites = ['Sports'];

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'so',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
}

console.log(person.age);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !! ERROR hobby: string, person.hobbies: string[]
}

if (person.role === Role.ADMIN) {
    console.log('is admin');
}
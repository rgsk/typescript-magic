type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

const user = {
  name: 'Rahul Gupta',
  age: 23,
  work: {
    designation: {
      title: 'software developer',
      experience: 2,
    },
    array: [1, 2, 3],
  },
  friends: [
    {
      name: 'Mehak',
      age: 18,
    },
    { name: 'Dinker', age: 20, ketor: { name: 'hii' } },
  ],
};

const partialUser: RecursivePartial<typeof user> = {
  work: {},
  friends: [{ ketor: {} }],
};

type PartialExcept<T, K extends keyof T> = RecursivePartial<T> & Pick<T, K>;

export type RecursiveRequired<T> = {
  [P in keyof T]-?: RecursiveRequired<T[P]>;
};

// const allRequired: RecursiveRequired<RecursivePartial<typeof user>> = {work:{}}

const nameAgeMandatory: PartialExcept<typeof user, 'name' | 'age'> = {
  name: 'rahul',
  age: 23,
};

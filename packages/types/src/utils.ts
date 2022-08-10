export type ParamType<T> = T extends (arg: infer P) => any ? P : T;

// A | B -> A & B
export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;


type FalsyType = false | null | undefined | '' | 0;
export function typedBoolean<ValueType>(
  value: ValueType
): value is Exclude<ValueType, FalsyType> {
  return Boolean(value);
}

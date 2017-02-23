export interface Serializable<T> {
    __name__: string;
    deserialize(input): T;
}

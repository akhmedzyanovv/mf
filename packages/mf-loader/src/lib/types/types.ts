export interface WrapperOptions {
  elementName: string;
  remoteEntry: string;
  exposedModule: string;
}

export type Container = {
  init(shareScope: Scope): void;
  get(module: string): Factory;
};

export type Scope = unknown;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Factory = () => any;

export type ContainerMap = { [key: string]: Container };
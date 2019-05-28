export interface Route {
  method: string;
  url: string;
  handler: Function;
}

export type Routes = Route[];

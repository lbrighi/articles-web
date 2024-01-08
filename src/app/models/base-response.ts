export interface BaseResponse<T> {
  count:number;
  next:string;
  previous:string;
  results:T;
}

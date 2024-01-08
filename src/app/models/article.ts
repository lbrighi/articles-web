export interface Article {
  id:number;
  title:string;
  article_category:string;
  cover_image:string;
  hightlight:boolean;
  groups:number[];
  description:string;
  is_all_users:boolean;
  created_at:string;
}

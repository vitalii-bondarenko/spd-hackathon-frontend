export interface NewsDto {
  title: string;
  createdBy: string;
  createdAt?: Date;
  text: string;
  videoUrl?: string;
}

export interface NewsListDto extends Array<NewsDto> {
}

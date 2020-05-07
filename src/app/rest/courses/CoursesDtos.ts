export interface CourseDto {
  id: number;
  name: string;
}

export interface CoursesListDto extends Array<CourseDto> {
}


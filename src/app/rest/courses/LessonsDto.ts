export interface LessonDto {
  id: number;
  subjectId: string;
  lessonNumber: number;
  title: string;
  description: string;
  lectorName: string;
  lectorPosition: string;
  deadline: Date;
  presentation_ulr?: string;
  videoUrl?: string;
  homework?: string;
  additional?: string;
  messages?: any;
}

export interface Message {
  userFullName?: string;
  text: string;
  createdAt?: Date;
}

export interface MessageList extends Array<Message> {
}

export interface LessonsListDto extends Array<LessonDto> {
}

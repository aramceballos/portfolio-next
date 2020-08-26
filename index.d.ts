type TProjectId = string;

type TProject = {
  _id: TProjectId;
  title: string;
  description?: string;
  technologies?: string[];
  src?: string;
  url?: string;
  repository?: string;
};

type ProjectListProps = {
  projects: TProject[];
};

type TAPIProjectsResponse = {
  data: TProject[];
  message: string;
};

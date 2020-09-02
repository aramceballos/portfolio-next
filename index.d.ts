type TProjectId = string;
type TCertificateId = string;

type TProject = {
  _id: TProjectId;
  title: string;
  description?: string;
  technologies?: string[];
  src?: string;
  url?: string;
  repository?: string;
};

type TCertificate = {
  _id: TCertificateId;
  name: string;
  src: string;
};

type ProjectListProps = {
  projects: TProject[];
};

type CertificateListProps = {
  certificates: TCertificate[];
};

type TAPIProjectsResponse = {
  data: TProject[];
  message: string;
};

type TAPICertificatesResponse = {
  data: TCertificate[];
  message: string;
};

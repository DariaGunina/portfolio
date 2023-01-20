export interface IPhoto { _id: number; preview: string; title: string };
export interface IInformation {
  phone: string;
  greetings: string;
  textGreetings: string;
  selfRepresentation: string;
  mail: string;
  steps: [
    {
      title: string;
      text: string;
      key: number;
    }
  ];
  city: string;
  region: string;
};

export interface IImage {
  asset: object;
  _key: string;
  _type: string;
};
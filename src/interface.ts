export interface PhotosProps {
  photos: [{ _id: number; preview: string; title: string }];
}

export interface InformationProps {
  information: [
    {
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
    }
  ];
}
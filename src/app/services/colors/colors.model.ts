export interface ColorsInterface {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data?: ColorInterface[];
  ad?: any;
}


export interface ColorInterface {
  id?: number;
  name?: string;
  year?: number;
  color?: string;
  pantone_value?: string;
}

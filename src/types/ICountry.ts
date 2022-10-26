
export interface ICountry {
   name: {common:string, official:string }
   flags: { png: string,svg:string };
   population: number;
   region: string;
   subregion: string;
   capital: [string];
   languages: {[propName: string]: string};
   area: number;
   startOfWeek: string;
   borders: [string];
}
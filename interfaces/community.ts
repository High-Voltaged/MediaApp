export default interface ICommunity {
   id: number;
   avatar: string;
   name: string;
   category: string;
   followers: string | number;
   description: string;
   
   suggested: boolean;
   managed: boolean;
   new?: boolean;
}
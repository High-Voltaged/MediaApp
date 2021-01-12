export default function followers_format(followers: any | number): string {

   const suffixes = ['K', 'M', 'B', 'T'];

   if ((followers > (1e4 - 1)) && ((followers / 1e3) < 1e3)) {

      return Math.floor(followers / 1e3) + suffixes[0];

   }

   if((followers > (1e6 - 1)) && ((followers / 1e6) < 1e3)) {

      return Math.floor(followers / 1e6) + suffixes[1];

   }

   if((followers > (1e9 - 1)) && ((followers / 1e9) < 1e3)) {

      return Math.floor(followers / 1e9) + suffixes[2];

   }

   if((followers > (1e12 - 1)) && ((followers / 1e12) < 1e3)) {

      return Math.floor(followers / 1e12) + suffixes[3];

   }

   return followers;

}
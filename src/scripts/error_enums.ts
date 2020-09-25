export namespace ERRORS {

   export enum Email {

      EMPTY = -1,
      NONE = 0,
      INVALID = 1,
      TAKEN = 2,

   }

   export enum Username {

      EMPTY = -1,
      NONE = 0,
      INVALID_LENGTH = 1,
      INVALID_CHARACTERS = 2,
      TAKEN = 3,

   }

   export enum Password {

      EMPTY = -1,
      NONE = 0,
      INVALID_LENGTH = 1,
      INVALID_CHARACTERS = 2,
      DOESNT_MATCH = 3,

   }

   export enum Gender {

      EMPTY = -1,
      NONE = 0,

   }

   export enum Age {

      EMPTY = -1,
      NONE = 0,
      OUT_OF_RANGE = 1,

   }

   export enum Bio {

      EMPTY = -1,
      NONE = 0,
      OUT_OF_RANGE = 1,

   }

   export enum Avatar {

      EMPTY = -1,
      NONE = 0,

   }

}

export default ERRORS;
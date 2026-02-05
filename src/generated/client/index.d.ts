
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model BiometricTemplate
 * 
 */
export type BiometricTemplate = $Result.DefaultSelection<Prisma.$BiometricTemplatePayload>
/**
 * Model BiometricDevice
 * 
 */
export type BiometricDevice = $Result.DefaultSelection<Prisma.$BiometricDevicePayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model BranchOffice
 * 
 */
export type BranchOffice = $Result.DefaultSelection<Prisma.$BranchOfficePayload>
/**
 * Model AttendanceRecord
 * 
 */
export type AttendanceRecord = $Result.DefaultSelection<Prisma.$AttendanceRecordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DeviceStatus: {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
  MAINTENANCE: 'MAINTENANCE'
};

export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus]

}

export type DeviceStatus = $Enums.DeviceStatus

export const DeviceStatus: typeof $Enums.DeviceStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.biometricTemplate`: Exposes CRUD operations for the **BiometricTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BiometricTemplates
    * const biometricTemplates = await prisma.biometricTemplate.findMany()
    * ```
    */
  get biometricTemplate(): Prisma.BiometricTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.biometricDevice`: Exposes CRUD operations for the **BiometricDevice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BiometricDevices
    * const biometricDevices = await prisma.biometricDevice.findMany()
    * ```
    */
  get biometricDevice(): Prisma.BiometricDeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.branchOffice`: Exposes CRUD operations for the **BranchOffice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BranchOffices
    * const branchOffices = await prisma.branchOffice.findMany()
    * ```
    */
  get branchOffice(): Prisma.BranchOfficeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendanceRecord`: Exposes CRUD operations for the **AttendanceRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttendanceRecords
    * const attendanceRecords = await prisma.attendanceRecord.findMany()
    * ```
    */
  get attendanceRecord(): Prisma.AttendanceRecordDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    BiometricTemplate: 'BiometricTemplate',
    BiometricDevice: 'BiometricDevice',
    Company: 'Company',
    BranchOffice: 'BranchOffice',
    AttendanceRecord: 'AttendanceRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "biometricTemplate" | "biometricDevice" | "company" | "branchOffice" | "attendanceRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BiometricTemplate: {
        payload: Prisma.$BiometricTemplatePayload<ExtArgs>
        fields: Prisma.BiometricTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BiometricTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BiometricTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricTemplatePayload>
          }
          findFirst: {
            args: Prisma.BiometricTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BiometricTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricTemplatePayload>
          }
          findMany: {
            args: Prisma.BiometricTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricTemplatePayload>[]
          }
          create: {
            args: Prisma.BiometricTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricTemplatePayload>
          }
          createMany: {
            args: Prisma.BiometricTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BiometricTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricTemplatePayload>[]
          }
          delete: {
            args: Prisma.BiometricTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricTemplatePayload>
          }
          update: {
            args: Prisma.BiometricTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricTemplatePayload>
          }
          deleteMany: {
            args: Prisma.BiometricTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BiometricTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BiometricTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricTemplatePayload>[]
          }
          upsert: {
            args: Prisma.BiometricTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricTemplatePayload>
          }
          aggregate: {
            args: Prisma.BiometricTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBiometricTemplate>
          }
          groupBy: {
            args: Prisma.BiometricTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<BiometricTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.BiometricTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<BiometricTemplateCountAggregateOutputType> | number
          }
        }
      }
      BiometricDevice: {
        payload: Prisma.$BiometricDevicePayload<ExtArgs>
        fields: Prisma.BiometricDeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BiometricDeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BiometricDeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDevicePayload>
          }
          findFirst: {
            args: Prisma.BiometricDeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BiometricDeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDevicePayload>
          }
          findMany: {
            args: Prisma.BiometricDeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDevicePayload>[]
          }
          create: {
            args: Prisma.BiometricDeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDevicePayload>
          }
          createMany: {
            args: Prisma.BiometricDeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BiometricDeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDevicePayload>[]
          }
          delete: {
            args: Prisma.BiometricDeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDevicePayload>
          }
          update: {
            args: Prisma.BiometricDeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDevicePayload>
          }
          deleteMany: {
            args: Prisma.BiometricDeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BiometricDeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BiometricDeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDevicePayload>[]
          }
          upsert: {
            args: Prisma.BiometricDeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDevicePayload>
          }
          aggregate: {
            args: Prisma.BiometricDeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBiometricDevice>
          }
          groupBy: {
            args: Prisma.BiometricDeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BiometricDeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BiometricDeviceCountArgs<ExtArgs>
            result: $Utils.Optional<BiometricDeviceCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      BranchOffice: {
        payload: Prisma.$BranchOfficePayload<ExtArgs>
        fields: Prisma.BranchOfficeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchOfficeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchOfficePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchOfficeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchOfficePayload>
          }
          findFirst: {
            args: Prisma.BranchOfficeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchOfficePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchOfficeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchOfficePayload>
          }
          findMany: {
            args: Prisma.BranchOfficeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchOfficePayload>[]
          }
          create: {
            args: Prisma.BranchOfficeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchOfficePayload>
          }
          createMany: {
            args: Prisma.BranchOfficeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BranchOfficeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchOfficePayload>[]
          }
          delete: {
            args: Prisma.BranchOfficeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchOfficePayload>
          }
          update: {
            args: Prisma.BranchOfficeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchOfficePayload>
          }
          deleteMany: {
            args: Prisma.BranchOfficeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchOfficeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BranchOfficeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchOfficePayload>[]
          }
          upsert: {
            args: Prisma.BranchOfficeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchOfficePayload>
          }
          aggregate: {
            args: Prisma.BranchOfficeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranchOffice>
          }
          groupBy: {
            args: Prisma.BranchOfficeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchOfficeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchOfficeCountArgs<ExtArgs>
            result: $Utils.Optional<BranchOfficeCountAggregateOutputType> | number
          }
        }
      }
      AttendanceRecord: {
        payload: Prisma.$AttendanceRecordPayload<ExtArgs>
        fields: Prisma.AttendanceRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          findFirst: {
            args: Prisma.AttendanceRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          findMany: {
            args: Prisma.AttendanceRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[]
          }
          create: {
            args: Prisma.AttendanceRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          createMany: {
            args: Prisma.AttendanceRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[]
          }
          delete: {
            args: Prisma.AttendanceRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          update: {
            args: Prisma.AttendanceRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          deleteMany: {
            args: Prisma.AttendanceRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[]
          }
          upsert: {
            args: Prisma.AttendanceRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          aggregate: {
            args: Prisma.AttendanceRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendanceRecord>
          }
          groupBy: {
            args: Prisma.AttendanceRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceRecordCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    biometricTemplate?: BiometricTemplateOmit
    biometricDevice?: BiometricDeviceOmit
    company?: CompanyOmit
    branchOffice?: BranchOfficeOmit
    attendanceRecord?: AttendanceRecordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    templates: number
    records: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templates?: boolean | UserCountOutputTypeCountTemplatesArgs
    records?: boolean | UserCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BiometricTemplateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRecordWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    branches: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branches?: boolean | CompanyCountOutputTypeCountBranchesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountBranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchOfficeWhereInput
  }


  /**
   * Count Type BranchOfficeCountOutputType
   */

  export type BranchOfficeCountOutputType = {
    users: number
    devices: number
  }

  export type BranchOfficeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | BranchOfficeCountOutputTypeCountUsersArgs
    devices?: boolean | BranchOfficeCountOutputTypeCountDevicesArgs
  }

  // Custom InputTypes
  /**
   * BranchOfficeCountOutputType without action
   */
  export type BranchOfficeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchOfficeCountOutputType
     */
    select?: BranchOfficeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchOfficeCountOutputType without action
   */
  export type BranchOfficeCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * BranchOfficeCountOutputType without action
   */
  export type BranchOfficeCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BiometricDeviceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    branchOfficeId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    branchOfficeId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    cedula: string | null
    fullName: string | null
    email: string | null
    password: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    branchOfficeId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    cedula: string | null
    fullName: string | null
    email: string | null
    password: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    branchOfficeId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    cedula: number
    fullName: number
    email: number
    password: number
    isDeleted: number
    createdAt: number
    branchOfficeId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    branchOfficeId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    branchOfficeId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    cedula?: true
    fullName?: true
    email?: true
    password?: true
    isDeleted?: true
    createdAt?: true
    branchOfficeId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    cedula?: true
    fullName?: true
    email?: true
    password?: true
    isDeleted?: true
    createdAt?: true
    branchOfficeId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    cedula?: true
    fullName?: true
    email?: true
    password?: true
    isDeleted?: true
    createdAt?: true
    branchOfficeId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    cedula: string
    fullName: string
    email: string
    password: string
    isDeleted: boolean
    createdAt: Date
    branchOfficeId: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cedula?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    branchOfficeId?: boolean
    templates?: boolean | User$templatesArgs<ExtArgs>
    records?: boolean | User$recordsArgs<ExtArgs>
    branchOffice?: boolean | BranchOfficeDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cedula?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    branchOfficeId?: boolean
    branchOffice?: boolean | BranchOfficeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cedula?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    branchOfficeId?: boolean
    branchOffice?: boolean | BranchOfficeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    cedula?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    branchOfficeId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cedula" | "fullName" | "email" | "password" | "isDeleted" | "createdAt" | "branchOfficeId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templates?: boolean | User$templatesArgs<ExtArgs>
    records?: boolean | User$recordsArgs<ExtArgs>
    branchOffice?: boolean | BranchOfficeDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branchOffice?: boolean | BranchOfficeDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branchOffice?: boolean | BranchOfficeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      templates: Prisma.$BiometricTemplatePayload<ExtArgs>[]
      records: Prisma.$AttendanceRecordPayload<ExtArgs>[]
      branchOffice: Prisma.$BranchOfficePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cedula: string
      fullName: string
      email: string
      password: string
      isDeleted: boolean
      createdAt: Date
      branchOfficeId: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    templates<T extends User$templatesArgs<ExtArgs> = {}>(args?: Subset<T, User$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometricTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    records<T extends User$recordsArgs<ExtArgs> = {}>(args?: Subset<T, User$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    branchOffice<T extends BranchOfficeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchOfficeDefaultArgs<ExtArgs>>): Prisma__BranchOfficeClient<$Result.GetResult<Prisma.$BranchOfficePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly cedula: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isDeleted: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly branchOfficeId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.templates
   */
  export type User$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricTemplate
     */
    select?: BiometricTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricTemplate
     */
    omit?: BiometricTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricTemplateInclude<ExtArgs> | null
    where?: BiometricTemplateWhereInput
    orderBy?: BiometricTemplateOrderByWithRelationInput | BiometricTemplateOrderByWithRelationInput[]
    cursor?: BiometricTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BiometricTemplateScalarFieldEnum | BiometricTemplateScalarFieldEnum[]
  }

  /**
   * User.records
   */
  export type User$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    where?: AttendanceRecordWhereInput
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    cursor?: AttendanceRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BiometricTemplate
   */

  export type AggregateBiometricTemplate = {
    _count: BiometricTemplateCountAggregateOutputType | null
    _avg: BiometricTemplateAvgAggregateOutputType | null
    _sum: BiometricTemplateSumAggregateOutputType | null
    _min: BiometricTemplateMinAggregateOutputType | null
    _max: BiometricTemplateMaxAggregateOutputType | null
  }

  export type BiometricTemplateAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    fingerIndex: number | null
    qualityScore: number | null
  }

  export type BiometricTemplateSumAggregateOutputType = {
    id: number | null
    userId: number | null
    fingerIndex: number | null
    qualityScore: number | null
  }

  export type BiometricTemplateMinAggregateOutputType = {
    id: number | null
    userId: number | null
    encryptedData: string | null
    encryptionIv: string | null
    fingerIndex: number | null
    qualityScore: number | null
    createdAt: Date | null
  }

  export type BiometricTemplateMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    encryptedData: string | null
    encryptionIv: string | null
    fingerIndex: number | null
    qualityScore: number | null
    createdAt: Date | null
  }

  export type BiometricTemplateCountAggregateOutputType = {
    id: number
    userId: number
    encryptedData: number
    encryptionIv: number
    fingerIndex: number
    qualityScore: number
    createdAt: number
    _all: number
  }


  export type BiometricTemplateAvgAggregateInputType = {
    id?: true
    userId?: true
    fingerIndex?: true
    qualityScore?: true
  }

  export type BiometricTemplateSumAggregateInputType = {
    id?: true
    userId?: true
    fingerIndex?: true
    qualityScore?: true
  }

  export type BiometricTemplateMinAggregateInputType = {
    id?: true
    userId?: true
    encryptedData?: true
    encryptionIv?: true
    fingerIndex?: true
    qualityScore?: true
    createdAt?: true
  }

  export type BiometricTemplateMaxAggregateInputType = {
    id?: true
    userId?: true
    encryptedData?: true
    encryptionIv?: true
    fingerIndex?: true
    qualityScore?: true
    createdAt?: true
  }

  export type BiometricTemplateCountAggregateInputType = {
    id?: true
    userId?: true
    encryptedData?: true
    encryptionIv?: true
    fingerIndex?: true
    qualityScore?: true
    createdAt?: true
    _all?: true
  }

  export type BiometricTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BiometricTemplate to aggregate.
     */
    where?: BiometricTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiometricTemplates to fetch.
     */
    orderBy?: BiometricTemplateOrderByWithRelationInput | BiometricTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BiometricTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiometricTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiometricTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BiometricTemplates
    **/
    _count?: true | BiometricTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BiometricTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BiometricTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BiometricTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BiometricTemplateMaxAggregateInputType
  }

  export type GetBiometricTemplateAggregateType<T extends BiometricTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateBiometricTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBiometricTemplate[P]>
      : GetScalarType<T[P], AggregateBiometricTemplate[P]>
  }




  export type BiometricTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BiometricTemplateWhereInput
    orderBy?: BiometricTemplateOrderByWithAggregationInput | BiometricTemplateOrderByWithAggregationInput[]
    by: BiometricTemplateScalarFieldEnum[] | BiometricTemplateScalarFieldEnum
    having?: BiometricTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BiometricTemplateCountAggregateInputType | true
    _avg?: BiometricTemplateAvgAggregateInputType
    _sum?: BiometricTemplateSumAggregateInputType
    _min?: BiometricTemplateMinAggregateInputType
    _max?: BiometricTemplateMaxAggregateInputType
  }

  export type BiometricTemplateGroupByOutputType = {
    id: number
    userId: number
    encryptedData: string
    encryptionIv: string
    fingerIndex: number
    qualityScore: number
    createdAt: Date
    _count: BiometricTemplateCountAggregateOutputType | null
    _avg: BiometricTemplateAvgAggregateOutputType | null
    _sum: BiometricTemplateSumAggregateOutputType | null
    _min: BiometricTemplateMinAggregateOutputType | null
    _max: BiometricTemplateMaxAggregateOutputType | null
  }

  type GetBiometricTemplateGroupByPayload<T extends BiometricTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BiometricTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BiometricTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BiometricTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], BiometricTemplateGroupByOutputType[P]>
        }
      >
    >


  export type BiometricTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    encryptedData?: boolean
    encryptionIv?: boolean
    fingerIndex?: boolean
    qualityScore?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["biometricTemplate"]>

  export type BiometricTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    encryptedData?: boolean
    encryptionIv?: boolean
    fingerIndex?: boolean
    qualityScore?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["biometricTemplate"]>

  export type BiometricTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    encryptedData?: boolean
    encryptionIv?: boolean
    fingerIndex?: boolean
    qualityScore?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["biometricTemplate"]>

  export type BiometricTemplateSelectScalar = {
    id?: boolean
    userId?: boolean
    encryptedData?: boolean
    encryptionIv?: boolean
    fingerIndex?: boolean
    qualityScore?: boolean
    createdAt?: boolean
  }

  export type BiometricTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "encryptedData" | "encryptionIv" | "fingerIndex" | "qualityScore" | "createdAt", ExtArgs["result"]["biometricTemplate"]>
  export type BiometricTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BiometricTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BiometricTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BiometricTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BiometricTemplate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      encryptedData: string
      encryptionIv: string
      fingerIndex: number
      qualityScore: number
      createdAt: Date
    }, ExtArgs["result"]["biometricTemplate"]>
    composites: {}
  }

  type BiometricTemplateGetPayload<S extends boolean | null | undefined | BiometricTemplateDefaultArgs> = $Result.GetResult<Prisma.$BiometricTemplatePayload, S>

  type BiometricTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BiometricTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BiometricTemplateCountAggregateInputType | true
    }

  export interface BiometricTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BiometricTemplate'], meta: { name: 'BiometricTemplate' } }
    /**
     * Find zero or one BiometricTemplate that matches the filter.
     * @param {BiometricTemplateFindUniqueArgs} args - Arguments to find a BiometricTemplate
     * @example
     * // Get one BiometricTemplate
     * const biometricTemplate = await prisma.biometricTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BiometricTemplateFindUniqueArgs>(args: SelectSubset<T, BiometricTemplateFindUniqueArgs<ExtArgs>>): Prisma__BiometricTemplateClient<$Result.GetResult<Prisma.$BiometricTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BiometricTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BiometricTemplateFindUniqueOrThrowArgs} args - Arguments to find a BiometricTemplate
     * @example
     * // Get one BiometricTemplate
     * const biometricTemplate = await prisma.biometricTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BiometricTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, BiometricTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BiometricTemplateClient<$Result.GetResult<Prisma.$BiometricTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BiometricTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricTemplateFindFirstArgs} args - Arguments to find a BiometricTemplate
     * @example
     * // Get one BiometricTemplate
     * const biometricTemplate = await prisma.biometricTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BiometricTemplateFindFirstArgs>(args?: SelectSubset<T, BiometricTemplateFindFirstArgs<ExtArgs>>): Prisma__BiometricTemplateClient<$Result.GetResult<Prisma.$BiometricTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BiometricTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricTemplateFindFirstOrThrowArgs} args - Arguments to find a BiometricTemplate
     * @example
     * // Get one BiometricTemplate
     * const biometricTemplate = await prisma.biometricTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BiometricTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, BiometricTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__BiometricTemplateClient<$Result.GetResult<Prisma.$BiometricTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BiometricTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BiometricTemplates
     * const biometricTemplates = await prisma.biometricTemplate.findMany()
     * 
     * // Get first 10 BiometricTemplates
     * const biometricTemplates = await prisma.biometricTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const biometricTemplateWithIdOnly = await prisma.biometricTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BiometricTemplateFindManyArgs>(args?: SelectSubset<T, BiometricTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometricTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BiometricTemplate.
     * @param {BiometricTemplateCreateArgs} args - Arguments to create a BiometricTemplate.
     * @example
     * // Create one BiometricTemplate
     * const BiometricTemplate = await prisma.biometricTemplate.create({
     *   data: {
     *     // ... data to create a BiometricTemplate
     *   }
     * })
     * 
     */
    create<T extends BiometricTemplateCreateArgs>(args: SelectSubset<T, BiometricTemplateCreateArgs<ExtArgs>>): Prisma__BiometricTemplateClient<$Result.GetResult<Prisma.$BiometricTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BiometricTemplates.
     * @param {BiometricTemplateCreateManyArgs} args - Arguments to create many BiometricTemplates.
     * @example
     * // Create many BiometricTemplates
     * const biometricTemplate = await prisma.biometricTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BiometricTemplateCreateManyArgs>(args?: SelectSubset<T, BiometricTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BiometricTemplates and returns the data saved in the database.
     * @param {BiometricTemplateCreateManyAndReturnArgs} args - Arguments to create many BiometricTemplates.
     * @example
     * // Create many BiometricTemplates
     * const biometricTemplate = await prisma.biometricTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BiometricTemplates and only return the `id`
     * const biometricTemplateWithIdOnly = await prisma.biometricTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BiometricTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, BiometricTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometricTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BiometricTemplate.
     * @param {BiometricTemplateDeleteArgs} args - Arguments to delete one BiometricTemplate.
     * @example
     * // Delete one BiometricTemplate
     * const BiometricTemplate = await prisma.biometricTemplate.delete({
     *   where: {
     *     // ... filter to delete one BiometricTemplate
     *   }
     * })
     * 
     */
    delete<T extends BiometricTemplateDeleteArgs>(args: SelectSubset<T, BiometricTemplateDeleteArgs<ExtArgs>>): Prisma__BiometricTemplateClient<$Result.GetResult<Prisma.$BiometricTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BiometricTemplate.
     * @param {BiometricTemplateUpdateArgs} args - Arguments to update one BiometricTemplate.
     * @example
     * // Update one BiometricTemplate
     * const biometricTemplate = await prisma.biometricTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BiometricTemplateUpdateArgs>(args: SelectSubset<T, BiometricTemplateUpdateArgs<ExtArgs>>): Prisma__BiometricTemplateClient<$Result.GetResult<Prisma.$BiometricTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BiometricTemplates.
     * @param {BiometricTemplateDeleteManyArgs} args - Arguments to filter BiometricTemplates to delete.
     * @example
     * // Delete a few BiometricTemplates
     * const { count } = await prisma.biometricTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BiometricTemplateDeleteManyArgs>(args?: SelectSubset<T, BiometricTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BiometricTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BiometricTemplates
     * const biometricTemplate = await prisma.biometricTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BiometricTemplateUpdateManyArgs>(args: SelectSubset<T, BiometricTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BiometricTemplates and returns the data updated in the database.
     * @param {BiometricTemplateUpdateManyAndReturnArgs} args - Arguments to update many BiometricTemplates.
     * @example
     * // Update many BiometricTemplates
     * const biometricTemplate = await prisma.biometricTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BiometricTemplates and only return the `id`
     * const biometricTemplateWithIdOnly = await prisma.biometricTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BiometricTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, BiometricTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometricTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BiometricTemplate.
     * @param {BiometricTemplateUpsertArgs} args - Arguments to update or create a BiometricTemplate.
     * @example
     * // Update or create a BiometricTemplate
     * const biometricTemplate = await prisma.biometricTemplate.upsert({
     *   create: {
     *     // ... data to create a BiometricTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BiometricTemplate we want to update
     *   }
     * })
     */
    upsert<T extends BiometricTemplateUpsertArgs>(args: SelectSubset<T, BiometricTemplateUpsertArgs<ExtArgs>>): Prisma__BiometricTemplateClient<$Result.GetResult<Prisma.$BiometricTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BiometricTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricTemplateCountArgs} args - Arguments to filter BiometricTemplates to count.
     * @example
     * // Count the number of BiometricTemplates
     * const count = await prisma.biometricTemplate.count({
     *   where: {
     *     // ... the filter for the BiometricTemplates we want to count
     *   }
     * })
    **/
    count<T extends BiometricTemplateCountArgs>(
      args?: Subset<T, BiometricTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BiometricTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BiometricTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BiometricTemplateAggregateArgs>(args: Subset<T, BiometricTemplateAggregateArgs>): Prisma.PrismaPromise<GetBiometricTemplateAggregateType<T>>

    /**
     * Group by BiometricTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BiometricTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BiometricTemplateGroupByArgs['orderBy'] }
        : { orderBy?: BiometricTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BiometricTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBiometricTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BiometricTemplate model
   */
  readonly fields: BiometricTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BiometricTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BiometricTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BiometricTemplate model
   */
  interface BiometricTemplateFieldRefs {
    readonly id: FieldRef<"BiometricTemplate", 'Int'>
    readonly userId: FieldRef<"BiometricTemplate", 'Int'>
    readonly encryptedData: FieldRef<"BiometricTemplate", 'String'>
    readonly encryptionIv: FieldRef<"BiometricTemplate", 'String'>
    readonly fingerIndex: FieldRef<"BiometricTemplate", 'Int'>
    readonly qualityScore: FieldRef<"BiometricTemplate", 'Int'>
    readonly createdAt: FieldRef<"BiometricTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BiometricTemplate findUnique
   */
  export type BiometricTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricTemplate
     */
    select?: BiometricTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricTemplate
     */
    omit?: BiometricTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricTemplateInclude<ExtArgs> | null
    /**
     * Filter, which BiometricTemplate to fetch.
     */
    where: BiometricTemplateWhereUniqueInput
  }

  /**
   * BiometricTemplate findUniqueOrThrow
   */
  export type BiometricTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricTemplate
     */
    select?: BiometricTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricTemplate
     */
    omit?: BiometricTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricTemplateInclude<ExtArgs> | null
    /**
     * Filter, which BiometricTemplate to fetch.
     */
    where: BiometricTemplateWhereUniqueInput
  }

  /**
   * BiometricTemplate findFirst
   */
  export type BiometricTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricTemplate
     */
    select?: BiometricTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricTemplate
     */
    omit?: BiometricTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricTemplateInclude<ExtArgs> | null
    /**
     * Filter, which BiometricTemplate to fetch.
     */
    where?: BiometricTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiometricTemplates to fetch.
     */
    orderBy?: BiometricTemplateOrderByWithRelationInput | BiometricTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BiometricTemplates.
     */
    cursor?: BiometricTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiometricTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiometricTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BiometricTemplates.
     */
    distinct?: BiometricTemplateScalarFieldEnum | BiometricTemplateScalarFieldEnum[]
  }

  /**
   * BiometricTemplate findFirstOrThrow
   */
  export type BiometricTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricTemplate
     */
    select?: BiometricTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricTemplate
     */
    omit?: BiometricTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricTemplateInclude<ExtArgs> | null
    /**
     * Filter, which BiometricTemplate to fetch.
     */
    where?: BiometricTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiometricTemplates to fetch.
     */
    orderBy?: BiometricTemplateOrderByWithRelationInput | BiometricTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BiometricTemplates.
     */
    cursor?: BiometricTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiometricTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiometricTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BiometricTemplates.
     */
    distinct?: BiometricTemplateScalarFieldEnum | BiometricTemplateScalarFieldEnum[]
  }

  /**
   * BiometricTemplate findMany
   */
  export type BiometricTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricTemplate
     */
    select?: BiometricTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricTemplate
     */
    omit?: BiometricTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricTemplateInclude<ExtArgs> | null
    /**
     * Filter, which BiometricTemplates to fetch.
     */
    where?: BiometricTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiometricTemplates to fetch.
     */
    orderBy?: BiometricTemplateOrderByWithRelationInput | BiometricTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BiometricTemplates.
     */
    cursor?: BiometricTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiometricTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiometricTemplates.
     */
    skip?: number
    distinct?: BiometricTemplateScalarFieldEnum | BiometricTemplateScalarFieldEnum[]
  }

  /**
   * BiometricTemplate create
   */
  export type BiometricTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricTemplate
     */
    select?: BiometricTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricTemplate
     */
    omit?: BiometricTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a BiometricTemplate.
     */
    data: XOR<BiometricTemplateCreateInput, BiometricTemplateUncheckedCreateInput>
  }

  /**
   * BiometricTemplate createMany
   */
  export type BiometricTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BiometricTemplates.
     */
    data: BiometricTemplateCreateManyInput | BiometricTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BiometricTemplate createManyAndReturn
   */
  export type BiometricTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricTemplate
     */
    select?: BiometricTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricTemplate
     */
    omit?: BiometricTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many BiometricTemplates.
     */
    data: BiometricTemplateCreateManyInput | BiometricTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BiometricTemplate update
   */
  export type BiometricTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricTemplate
     */
    select?: BiometricTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricTemplate
     */
    omit?: BiometricTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a BiometricTemplate.
     */
    data: XOR<BiometricTemplateUpdateInput, BiometricTemplateUncheckedUpdateInput>
    /**
     * Choose, which BiometricTemplate to update.
     */
    where: BiometricTemplateWhereUniqueInput
  }

  /**
   * BiometricTemplate updateMany
   */
  export type BiometricTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BiometricTemplates.
     */
    data: XOR<BiometricTemplateUpdateManyMutationInput, BiometricTemplateUncheckedUpdateManyInput>
    /**
     * Filter which BiometricTemplates to update
     */
    where?: BiometricTemplateWhereInput
    /**
     * Limit how many BiometricTemplates to update.
     */
    limit?: number
  }

  /**
   * BiometricTemplate updateManyAndReturn
   */
  export type BiometricTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricTemplate
     */
    select?: BiometricTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricTemplate
     */
    omit?: BiometricTemplateOmit<ExtArgs> | null
    /**
     * The data used to update BiometricTemplates.
     */
    data: XOR<BiometricTemplateUpdateManyMutationInput, BiometricTemplateUncheckedUpdateManyInput>
    /**
     * Filter which BiometricTemplates to update
     */
    where?: BiometricTemplateWhereInput
    /**
     * Limit how many BiometricTemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricTemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BiometricTemplate upsert
   */
  export type BiometricTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricTemplate
     */
    select?: BiometricTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricTemplate
     */
    omit?: BiometricTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the BiometricTemplate to update in case it exists.
     */
    where: BiometricTemplateWhereUniqueInput
    /**
     * In case the BiometricTemplate found by the `where` argument doesn't exist, create a new BiometricTemplate with this data.
     */
    create: XOR<BiometricTemplateCreateInput, BiometricTemplateUncheckedCreateInput>
    /**
     * In case the BiometricTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BiometricTemplateUpdateInput, BiometricTemplateUncheckedUpdateInput>
  }

  /**
   * BiometricTemplate delete
   */
  export type BiometricTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricTemplate
     */
    select?: BiometricTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricTemplate
     */
    omit?: BiometricTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricTemplateInclude<ExtArgs> | null
    /**
     * Filter which BiometricTemplate to delete.
     */
    where: BiometricTemplateWhereUniqueInput
  }

  /**
   * BiometricTemplate deleteMany
   */
  export type BiometricTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BiometricTemplates to delete
     */
    where?: BiometricTemplateWhereInput
    /**
     * Limit how many BiometricTemplates to delete.
     */
    limit?: number
  }

  /**
   * BiometricTemplate without action
   */
  export type BiometricTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricTemplate
     */
    select?: BiometricTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricTemplate
     */
    omit?: BiometricTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricTemplateInclude<ExtArgs> | null
  }


  /**
   * Model BiometricDevice
   */

  export type AggregateBiometricDevice = {
    _count: BiometricDeviceCountAggregateOutputType | null
    _avg: BiometricDeviceAvgAggregateOutputType | null
    _sum: BiometricDeviceSumAggregateOutputType | null
    _min: BiometricDeviceMinAggregateOutputType | null
    _max: BiometricDeviceMaxAggregateOutputType | null
  }

  export type BiometricDeviceAvgAggregateOutputType = {
    id: number | null
    port: number | null
    branchOfficeId: number | null
  }

  export type BiometricDeviceSumAggregateOutputType = {
    id: number | null
    port: number | null
    branchOfficeId: number | null
  }

  export type BiometricDeviceMinAggregateOutputType = {
    id: number | null
    name: string | null
    serial: string | null
    ip: string | null
    port: number | null
    token: string | null
    lastSync: Date | null
    status: $Enums.DeviceStatus | null
    branchOfficeId: number | null
  }

  export type BiometricDeviceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    serial: string | null
    ip: string | null
    port: number | null
    token: string | null
    lastSync: Date | null
    status: $Enums.DeviceStatus | null
    branchOfficeId: number | null
  }

  export type BiometricDeviceCountAggregateOutputType = {
    id: number
    name: number
    serial: number
    ip: number
    port: number
    token: number
    lastSync: number
    status: number
    branchOfficeId: number
    _all: number
  }


  export type BiometricDeviceAvgAggregateInputType = {
    id?: true
    port?: true
    branchOfficeId?: true
  }

  export type BiometricDeviceSumAggregateInputType = {
    id?: true
    port?: true
    branchOfficeId?: true
  }

  export type BiometricDeviceMinAggregateInputType = {
    id?: true
    name?: true
    serial?: true
    ip?: true
    port?: true
    token?: true
    lastSync?: true
    status?: true
    branchOfficeId?: true
  }

  export type BiometricDeviceMaxAggregateInputType = {
    id?: true
    name?: true
    serial?: true
    ip?: true
    port?: true
    token?: true
    lastSync?: true
    status?: true
    branchOfficeId?: true
  }

  export type BiometricDeviceCountAggregateInputType = {
    id?: true
    name?: true
    serial?: true
    ip?: true
    port?: true
    token?: true
    lastSync?: true
    status?: true
    branchOfficeId?: true
    _all?: true
  }

  export type BiometricDeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BiometricDevice to aggregate.
     */
    where?: BiometricDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiometricDevices to fetch.
     */
    orderBy?: BiometricDeviceOrderByWithRelationInput | BiometricDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BiometricDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiometricDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiometricDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BiometricDevices
    **/
    _count?: true | BiometricDeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BiometricDeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BiometricDeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BiometricDeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BiometricDeviceMaxAggregateInputType
  }

  export type GetBiometricDeviceAggregateType<T extends BiometricDeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateBiometricDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBiometricDevice[P]>
      : GetScalarType<T[P], AggregateBiometricDevice[P]>
  }




  export type BiometricDeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BiometricDeviceWhereInput
    orderBy?: BiometricDeviceOrderByWithAggregationInput | BiometricDeviceOrderByWithAggregationInput[]
    by: BiometricDeviceScalarFieldEnum[] | BiometricDeviceScalarFieldEnum
    having?: BiometricDeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BiometricDeviceCountAggregateInputType | true
    _avg?: BiometricDeviceAvgAggregateInputType
    _sum?: BiometricDeviceSumAggregateInputType
    _min?: BiometricDeviceMinAggregateInputType
    _max?: BiometricDeviceMaxAggregateInputType
  }

  export type BiometricDeviceGroupByOutputType = {
    id: number
    name: string
    serial: string
    ip: string | null
    port: number | null
    token: string | null
    lastSync: Date | null
    status: $Enums.DeviceStatus
    branchOfficeId: number
    _count: BiometricDeviceCountAggregateOutputType | null
    _avg: BiometricDeviceAvgAggregateOutputType | null
    _sum: BiometricDeviceSumAggregateOutputType | null
    _min: BiometricDeviceMinAggregateOutputType | null
    _max: BiometricDeviceMaxAggregateOutputType | null
  }

  type GetBiometricDeviceGroupByPayload<T extends BiometricDeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BiometricDeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BiometricDeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BiometricDeviceGroupByOutputType[P]>
            : GetScalarType<T[P], BiometricDeviceGroupByOutputType[P]>
        }
      >
    >


  export type BiometricDeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serial?: boolean
    ip?: boolean
    port?: boolean
    token?: boolean
    lastSync?: boolean
    status?: boolean
    branchOfficeId?: boolean
    branchOffice?: boolean | BranchOfficeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["biometricDevice"]>

  export type BiometricDeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serial?: boolean
    ip?: boolean
    port?: boolean
    token?: boolean
    lastSync?: boolean
    status?: boolean
    branchOfficeId?: boolean
    branchOffice?: boolean | BranchOfficeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["biometricDevice"]>

  export type BiometricDeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serial?: boolean
    ip?: boolean
    port?: boolean
    token?: boolean
    lastSync?: boolean
    status?: boolean
    branchOfficeId?: boolean
    branchOffice?: boolean | BranchOfficeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["biometricDevice"]>

  export type BiometricDeviceSelectScalar = {
    id?: boolean
    name?: boolean
    serial?: boolean
    ip?: boolean
    port?: boolean
    token?: boolean
    lastSync?: boolean
    status?: boolean
    branchOfficeId?: boolean
  }

  export type BiometricDeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "serial" | "ip" | "port" | "token" | "lastSync" | "status" | "branchOfficeId", ExtArgs["result"]["biometricDevice"]>
  export type BiometricDeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branchOffice?: boolean | BranchOfficeDefaultArgs<ExtArgs>
  }
  export type BiometricDeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branchOffice?: boolean | BranchOfficeDefaultArgs<ExtArgs>
  }
  export type BiometricDeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branchOffice?: boolean | BranchOfficeDefaultArgs<ExtArgs>
  }

  export type $BiometricDevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BiometricDevice"
    objects: {
      branchOffice: Prisma.$BranchOfficePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      serial: string
      ip: string | null
      port: number | null
      token: string | null
      lastSync: Date | null
      status: $Enums.DeviceStatus
      branchOfficeId: number
    }, ExtArgs["result"]["biometricDevice"]>
    composites: {}
  }

  type BiometricDeviceGetPayload<S extends boolean | null | undefined | BiometricDeviceDefaultArgs> = $Result.GetResult<Prisma.$BiometricDevicePayload, S>

  type BiometricDeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BiometricDeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BiometricDeviceCountAggregateInputType | true
    }

  export interface BiometricDeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BiometricDevice'], meta: { name: 'BiometricDevice' } }
    /**
     * Find zero or one BiometricDevice that matches the filter.
     * @param {BiometricDeviceFindUniqueArgs} args - Arguments to find a BiometricDevice
     * @example
     * // Get one BiometricDevice
     * const biometricDevice = await prisma.biometricDevice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BiometricDeviceFindUniqueArgs>(args: SelectSubset<T, BiometricDeviceFindUniqueArgs<ExtArgs>>): Prisma__BiometricDeviceClient<$Result.GetResult<Prisma.$BiometricDevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BiometricDevice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BiometricDeviceFindUniqueOrThrowArgs} args - Arguments to find a BiometricDevice
     * @example
     * // Get one BiometricDevice
     * const biometricDevice = await prisma.biometricDevice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BiometricDeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, BiometricDeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BiometricDeviceClient<$Result.GetResult<Prisma.$BiometricDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BiometricDevice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricDeviceFindFirstArgs} args - Arguments to find a BiometricDevice
     * @example
     * // Get one BiometricDevice
     * const biometricDevice = await prisma.biometricDevice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BiometricDeviceFindFirstArgs>(args?: SelectSubset<T, BiometricDeviceFindFirstArgs<ExtArgs>>): Prisma__BiometricDeviceClient<$Result.GetResult<Prisma.$BiometricDevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BiometricDevice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricDeviceFindFirstOrThrowArgs} args - Arguments to find a BiometricDevice
     * @example
     * // Get one BiometricDevice
     * const biometricDevice = await prisma.biometricDevice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BiometricDeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, BiometricDeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BiometricDeviceClient<$Result.GetResult<Prisma.$BiometricDevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BiometricDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricDeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BiometricDevices
     * const biometricDevices = await prisma.biometricDevice.findMany()
     * 
     * // Get first 10 BiometricDevices
     * const biometricDevices = await prisma.biometricDevice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const biometricDeviceWithIdOnly = await prisma.biometricDevice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BiometricDeviceFindManyArgs>(args?: SelectSubset<T, BiometricDeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometricDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BiometricDevice.
     * @param {BiometricDeviceCreateArgs} args - Arguments to create a BiometricDevice.
     * @example
     * // Create one BiometricDevice
     * const BiometricDevice = await prisma.biometricDevice.create({
     *   data: {
     *     // ... data to create a BiometricDevice
     *   }
     * })
     * 
     */
    create<T extends BiometricDeviceCreateArgs>(args: SelectSubset<T, BiometricDeviceCreateArgs<ExtArgs>>): Prisma__BiometricDeviceClient<$Result.GetResult<Prisma.$BiometricDevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BiometricDevices.
     * @param {BiometricDeviceCreateManyArgs} args - Arguments to create many BiometricDevices.
     * @example
     * // Create many BiometricDevices
     * const biometricDevice = await prisma.biometricDevice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BiometricDeviceCreateManyArgs>(args?: SelectSubset<T, BiometricDeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BiometricDevices and returns the data saved in the database.
     * @param {BiometricDeviceCreateManyAndReturnArgs} args - Arguments to create many BiometricDevices.
     * @example
     * // Create many BiometricDevices
     * const biometricDevice = await prisma.biometricDevice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BiometricDevices and only return the `id`
     * const biometricDeviceWithIdOnly = await prisma.biometricDevice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BiometricDeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, BiometricDeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometricDevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BiometricDevice.
     * @param {BiometricDeviceDeleteArgs} args - Arguments to delete one BiometricDevice.
     * @example
     * // Delete one BiometricDevice
     * const BiometricDevice = await prisma.biometricDevice.delete({
     *   where: {
     *     // ... filter to delete one BiometricDevice
     *   }
     * })
     * 
     */
    delete<T extends BiometricDeviceDeleteArgs>(args: SelectSubset<T, BiometricDeviceDeleteArgs<ExtArgs>>): Prisma__BiometricDeviceClient<$Result.GetResult<Prisma.$BiometricDevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BiometricDevice.
     * @param {BiometricDeviceUpdateArgs} args - Arguments to update one BiometricDevice.
     * @example
     * // Update one BiometricDevice
     * const biometricDevice = await prisma.biometricDevice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BiometricDeviceUpdateArgs>(args: SelectSubset<T, BiometricDeviceUpdateArgs<ExtArgs>>): Prisma__BiometricDeviceClient<$Result.GetResult<Prisma.$BiometricDevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BiometricDevices.
     * @param {BiometricDeviceDeleteManyArgs} args - Arguments to filter BiometricDevices to delete.
     * @example
     * // Delete a few BiometricDevices
     * const { count } = await prisma.biometricDevice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BiometricDeviceDeleteManyArgs>(args?: SelectSubset<T, BiometricDeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BiometricDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricDeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BiometricDevices
     * const biometricDevice = await prisma.biometricDevice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BiometricDeviceUpdateManyArgs>(args: SelectSubset<T, BiometricDeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BiometricDevices and returns the data updated in the database.
     * @param {BiometricDeviceUpdateManyAndReturnArgs} args - Arguments to update many BiometricDevices.
     * @example
     * // Update many BiometricDevices
     * const biometricDevice = await prisma.biometricDevice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BiometricDevices and only return the `id`
     * const biometricDeviceWithIdOnly = await prisma.biometricDevice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BiometricDeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, BiometricDeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometricDevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BiometricDevice.
     * @param {BiometricDeviceUpsertArgs} args - Arguments to update or create a BiometricDevice.
     * @example
     * // Update or create a BiometricDevice
     * const biometricDevice = await prisma.biometricDevice.upsert({
     *   create: {
     *     // ... data to create a BiometricDevice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BiometricDevice we want to update
     *   }
     * })
     */
    upsert<T extends BiometricDeviceUpsertArgs>(args: SelectSubset<T, BiometricDeviceUpsertArgs<ExtArgs>>): Prisma__BiometricDeviceClient<$Result.GetResult<Prisma.$BiometricDevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BiometricDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricDeviceCountArgs} args - Arguments to filter BiometricDevices to count.
     * @example
     * // Count the number of BiometricDevices
     * const count = await prisma.biometricDevice.count({
     *   where: {
     *     // ... the filter for the BiometricDevices we want to count
     *   }
     * })
    **/
    count<T extends BiometricDeviceCountArgs>(
      args?: Subset<T, BiometricDeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BiometricDeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BiometricDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricDeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BiometricDeviceAggregateArgs>(args: Subset<T, BiometricDeviceAggregateArgs>): Prisma.PrismaPromise<GetBiometricDeviceAggregateType<T>>

    /**
     * Group by BiometricDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricDeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BiometricDeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BiometricDeviceGroupByArgs['orderBy'] }
        : { orderBy?: BiometricDeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BiometricDeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBiometricDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BiometricDevice model
   */
  readonly fields: BiometricDeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BiometricDevice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BiometricDeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branchOffice<T extends BranchOfficeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchOfficeDefaultArgs<ExtArgs>>): Prisma__BranchOfficeClient<$Result.GetResult<Prisma.$BranchOfficePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BiometricDevice model
   */
  interface BiometricDeviceFieldRefs {
    readonly id: FieldRef<"BiometricDevice", 'Int'>
    readonly name: FieldRef<"BiometricDevice", 'String'>
    readonly serial: FieldRef<"BiometricDevice", 'String'>
    readonly ip: FieldRef<"BiometricDevice", 'String'>
    readonly port: FieldRef<"BiometricDevice", 'Int'>
    readonly token: FieldRef<"BiometricDevice", 'String'>
    readonly lastSync: FieldRef<"BiometricDevice", 'DateTime'>
    readonly status: FieldRef<"BiometricDevice", 'DeviceStatus'>
    readonly branchOfficeId: FieldRef<"BiometricDevice", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BiometricDevice findUnique
   */
  export type BiometricDeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricDevice
     */
    select?: BiometricDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricDevice
     */
    omit?: BiometricDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDeviceInclude<ExtArgs> | null
    /**
     * Filter, which BiometricDevice to fetch.
     */
    where: BiometricDeviceWhereUniqueInput
  }

  /**
   * BiometricDevice findUniqueOrThrow
   */
  export type BiometricDeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricDevice
     */
    select?: BiometricDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricDevice
     */
    omit?: BiometricDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDeviceInclude<ExtArgs> | null
    /**
     * Filter, which BiometricDevice to fetch.
     */
    where: BiometricDeviceWhereUniqueInput
  }

  /**
   * BiometricDevice findFirst
   */
  export type BiometricDeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricDevice
     */
    select?: BiometricDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricDevice
     */
    omit?: BiometricDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDeviceInclude<ExtArgs> | null
    /**
     * Filter, which BiometricDevice to fetch.
     */
    where?: BiometricDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiometricDevices to fetch.
     */
    orderBy?: BiometricDeviceOrderByWithRelationInput | BiometricDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BiometricDevices.
     */
    cursor?: BiometricDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiometricDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiometricDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BiometricDevices.
     */
    distinct?: BiometricDeviceScalarFieldEnum | BiometricDeviceScalarFieldEnum[]
  }

  /**
   * BiometricDevice findFirstOrThrow
   */
  export type BiometricDeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricDevice
     */
    select?: BiometricDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricDevice
     */
    omit?: BiometricDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDeviceInclude<ExtArgs> | null
    /**
     * Filter, which BiometricDevice to fetch.
     */
    where?: BiometricDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiometricDevices to fetch.
     */
    orderBy?: BiometricDeviceOrderByWithRelationInput | BiometricDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BiometricDevices.
     */
    cursor?: BiometricDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiometricDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiometricDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BiometricDevices.
     */
    distinct?: BiometricDeviceScalarFieldEnum | BiometricDeviceScalarFieldEnum[]
  }

  /**
   * BiometricDevice findMany
   */
  export type BiometricDeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricDevice
     */
    select?: BiometricDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricDevice
     */
    omit?: BiometricDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDeviceInclude<ExtArgs> | null
    /**
     * Filter, which BiometricDevices to fetch.
     */
    where?: BiometricDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiometricDevices to fetch.
     */
    orderBy?: BiometricDeviceOrderByWithRelationInput | BiometricDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BiometricDevices.
     */
    cursor?: BiometricDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiometricDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiometricDevices.
     */
    skip?: number
    distinct?: BiometricDeviceScalarFieldEnum | BiometricDeviceScalarFieldEnum[]
  }

  /**
   * BiometricDevice create
   */
  export type BiometricDeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricDevice
     */
    select?: BiometricDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricDevice
     */
    omit?: BiometricDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a BiometricDevice.
     */
    data: XOR<BiometricDeviceCreateInput, BiometricDeviceUncheckedCreateInput>
  }

  /**
   * BiometricDevice createMany
   */
  export type BiometricDeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BiometricDevices.
     */
    data: BiometricDeviceCreateManyInput | BiometricDeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BiometricDevice createManyAndReturn
   */
  export type BiometricDeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricDevice
     */
    select?: BiometricDeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricDevice
     */
    omit?: BiometricDeviceOmit<ExtArgs> | null
    /**
     * The data used to create many BiometricDevices.
     */
    data: BiometricDeviceCreateManyInput | BiometricDeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BiometricDevice update
   */
  export type BiometricDeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricDevice
     */
    select?: BiometricDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricDevice
     */
    omit?: BiometricDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a BiometricDevice.
     */
    data: XOR<BiometricDeviceUpdateInput, BiometricDeviceUncheckedUpdateInput>
    /**
     * Choose, which BiometricDevice to update.
     */
    where: BiometricDeviceWhereUniqueInput
  }

  /**
   * BiometricDevice updateMany
   */
  export type BiometricDeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BiometricDevices.
     */
    data: XOR<BiometricDeviceUpdateManyMutationInput, BiometricDeviceUncheckedUpdateManyInput>
    /**
     * Filter which BiometricDevices to update
     */
    where?: BiometricDeviceWhereInput
    /**
     * Limit how many BiometricDevices to update.
     */
    limit?: number
  }

  /**
   * BiometricDevice updateManyAndReturn
   */
  export type BiometricDeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricDevice
     */
    select?: BiometricDeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricDevice
     */
    omit?: BiometricDeviceOmit<ExtArgs> | null
    /**
     * The data used to update BiometricDevices.
     */
    data: XOR<BiometricDeviceUpdateManyMutationInput, BiometricDeviceUncheckedUpdateManyInput>
    /**
     * Filter which BiometricDevices to update
     */
    where?: BiometricDeviceWhereInput
    /**
     * Limit how many BiometricDevices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BiometricDevice upsert
   */
  export type BiometricDeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricDevice
     */
    select?: BiometricDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricDevice
     */
    omit?: BiometricDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the BiometricDevice to update in case it exists.
     */
    where: BiometricDeviceWhereUniqueInput
    /**
     * In case the BiometricDevice found by the `where` argument doesn't exist, create a new BiometricDevice with this data.
     */
    create: XOR<BiometricDeviceCreateInput, BiometricDeviceUncheckedCreateInput>
    /**
     * In case the BiometricDevice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BiometricDeviceUpdateInput, BiometricDeviceUncheckedUpdateInput>
  }

  /**
   * BiometricDevice delete
   */
  export type BiometricDeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricDevice
     */
    select?: BiometricDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricDevice
     */
    omit?: BiometricDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDeviceInclude<ExtArgs> | null
    /**
     * Filter which BiometricDevice to delete.
     */
    where: BiometricDeviceWhereUniqueInput
  }

  /**
   * BiometricDevice deleteMany
   */
  export type BiometricDeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BiometricDevices to delete
     */
    where?: BiometricDeviceWhereInput
    /**
     * Limit how many BiometricDevices to delete.
     */
    limit?: number
  }

  /**
   * BiometricDevice without action
   */
  export type BiometricDeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricDevice
     */
    select?: BiometricDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricDevice
     */
    omit?: BiometricDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDeviceInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branches?: boolean | Company$branchesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branches?: boolean | Company$branchesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      branches: Prisma.$BranchOfficePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branches<T extends Company$branchesArgs<ExtArgs> = {}>(args?: Subset<T, Company$branchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchOfficePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.branches
   */
  export type Company$branchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchOffice
     */
    select?: BranchOfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchOffice
     */
    omit?: BranchOfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchOfficeInclude<ExtArgs> | null
    where?: BranchOfficeWhereInput
    orderBy?: BranchOfficeOrderByWithRelationInput | BranchOfficeOrderByWithRelationInput[]
    cursor?: BranchOfficeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchOfficeScalarFieldEnum | BranchOfficeScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model BranchOffice
   */

  export type AggregateBranchOffice = {
    _count: BranchOfficeCountAggregateOutputType | null
    _avg: BranchOfficeAvgAggregateOutputType | null
    _sum: BranchOfficeSumAggregateOutputType | null
    _min: BranchOfficeMinAggregateOutputType | null
    _max: BranchOfficeMaxAggregateOutputType | null
  }

  export type BranchOfficeAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type BranchOfficeSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type BranchOfficeMinAggregateOutputType = {
    id: number | null
    name: string | null
    companyId: number | null
  }

  export type BranchOfficeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    companyId: number | null
  }

  export type BranchOfficeCountAggregateOutputType = {
    id: number
    name: number
    companyId: number
    _all: number
  }


  export type BranchOfficeAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type BranchOfficeSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type BranchOfficeMinAggregateInputType = {
    id?: true
    name?: true
    companyId?: true
  }

  export type BranchOfficeMaxAggregateInputType = {
    id?: true
    name?: true
    companyId?: true
  }

  export type BranchOfficeCountAggregateInputType = {
    id?: true
    name?: true
    companyId?: true
    _all?: true
  }

  export type BranchOfficeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BranchOffice to aggregate.
     */
    where?: BranchOfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchOffices to fetch.
     */
    orderBy?: BranchOfficeOrderByWithRelationInput | BranchOfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchOfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchOffices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchOffices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BranchOffices
    **/
    _count?: true | BranchOfficeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BranchOfficeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BranchOfficeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchOfficeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchOfficeMaxAggregateInputType
  }

  export type GetBranchOfficeAggregateType<T extends BranchOfficeAggregateArgs> = {
        [P in keyof T & keyof AggregateBranchOffice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranchOffice[P]>
      : GetScalarType<T[P], AggregateBranchOffice[P]>
  }




  export type BranchOfficeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchOfficeWhereInput
    orderBy?: BranchOfficeOrderByWithAggregationInput | BranchOfficeOrderByWithAggregationInput[]
    by: BranchOfficeScalarFieldEnum[] | BranchOfficeScalarFieldEnum
    having?: BranchOfficeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchOfficeCountAggregateInputType | true
    _avg?: BranchOfficeAvgAggregateInputType
    _sum?: BranchOfficeSumAggregateInputType
    _min?: BranchOfficeMinAggregateInputType
    _max?: BranchOfficeMaxAggregateInputType
  }

  export type BranchOfficeGroupByOutputType = {
    id: number
    name: string
    companyId: number
    _count: BranchOfficeCountAggregateOutputType | null
    _avg: BranchOfficeAvgAggregateOutputType | null
    _sum: BranchOfficeSumAggregateOutputType | null
    _min: BranchOfficeMinAggregateOutputType | null
    _max: BranchOfficeMaxAggregateOutputType | null
  }

  type GetBranchOfficeGroupByPayload<T extends BranchOfficeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchOfficeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchOfficeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchOfficeGroupByOutputType[P]>
            : GetScalarType<T[P], BranchOfficeGroupByOutputType[P]>
        }
      >
    >


  export type BranchOfficeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    users?: boolean | BranchOffice$usersArgs<ExtArgs>
    devices?: boolean | BranchOffice$devicesArgs<ExtArgs>
    _count?: boolean | BranchOfficeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branchOffice"]>

  export type BranchOfficeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branchOffice"]>

  export type BranchOfficeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branchOffice"]>

  export type BranchOfficeSelectScalar = {
    id?: boolean
    name?: boolean
    companyId?: boolean
  }

  export type BranchOfficeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "companyId", ExtArgs["result"]["branchOffice"]>
  export type BranchOfficeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    users?: boolean | BranchOffice$usersArgs<ExtArgs>
    devices?: boolean | BranchOffice$devicesArgs<ExtArgs>
    _count?: boolean | BranchOfficeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BranchOfficeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type BranchOfficeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $BranchOfficePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BranchOffice"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      users: Prisma.$UserPayload<ExtArgs>[]
      devices: Prisma.$BiometricDevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      companyId: number
    }, ExtArgs["result"]["branchOffice"]>
    composites: {}
  }

  type BranchOfficeGetPayload<S extends boolean | null | undefined | BranchOfficeDefaultArgs> = $Result.GetResult<Prisma.$BranchOfficePayload, S>

  type BranchOfficeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BranchOfficeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BranchOfficeCountAggregateInputType | true
    }

  export interface BranchOfficeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BranchOffice'], meta: { name: 'BranchOffice' } }
    /**
     * Find zero or one BranchOffice that matches the filter.
     * @param {BranchOfficeFindUniqueArgs} args - Arguments to find a BranchOffice
     * @example
     * // Get one BranchOffice
     * const branchOffice = await prisma.branchOffice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchOfficeFindUniqueArgs>(args: SelectSubset<T, BranchOfficeFindUniqueArgs<ExtArgs>>): Prisma__BranchOfficeClient<$Result.GetResult<Prisma.$BranchOfficePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BranchOffice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BranchOfficeFindUniqueOrThrowArgs} args - Arguments to find a BranchOffice
     * @example
     * // Get one BranchOffice
     * const branchOffice = await prisma.branchOffice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchOfficeFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchOfficeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchOfficeClient<$Result.GetResult<Prisma.$BranchOfficePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BranchOffice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchOfficeFindFirstArgs} args - Arguments to find a BranchOffice
     * @example
     * // Get one BranchOffice
     * const branchOffice = await prisma.branchOffice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchOfficeFindFirstArgs>(args?: SelectSubset<T, BranchOfficeFindFirstArgs<ExtArgs>>): Prisma__BranchOfficeClient<$Result.GetResult<Prisma.$BranchOfficePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BranchOffice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchOfficeFindFirstOrThrowArgs} args - Arguments to find a BranchOffice
     * @example
     * // Get one BranchOffice
     * const branchOffice = await prisma.branchOffice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchOfficeFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchOfficeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchOfficeClient<$Result.GetResult<Prisma.$BranchOfficePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BranchOffices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchOfficeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BranchOffices
     * const branchOffices = await prisma.branchOffice.findMany()
     * 
     * // Get first 10 BranchOffices
     * const branchOffices = await prisma.branchOffice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchOfficeWithIdOnly = await prisma.branchOffice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchOfficeFindManyArgs>(args?: SelectSubset<T, BranchOfficeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchOfficePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BranchOffice.
     * @param {BranchOfficeCreateArgs} args - Arguments to create a BranchOffice.
     * @example
     * // Create one BranchOffice
     * const BranchOffice = await prisma.branchOffice.create({
     *   data: {
     *     // ... data to create a BranchOffice
     *   }
     * })
     * 
     */
    create<T extends BranchOfficeCreateArgs>(args: SelectSubset<T, BranchOfficeCreateArgs<ExtArgs>>): Prisma__BranchOfficeClient<$Result.GetResult<Prisma.$BranchOfficePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BranchOffices.
     * @param {BranchOfficeCreateManyArgs} args - Arguments to create many BranchOffices.
     * @example
     * // Create many BranchOffices
     * const branchOffice = await prisma.branchOffice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchOfficeCreateManyArgs>(args?: SelectSubset<T, BranchOfficeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BranchOffices and returns the data saved in the database.
     * @param {BranchOfficeCreateManyAndReturnArgs} args - Arguments to create many BranchOffices.
     * @example
     * // Create many BranchOffices
     * const branchOffice = await prisma.branchOffice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BranchOffices and only return the `id`
     * const branchOfficeWithIdOnly = await prisma.branchOffice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BranchOfficeCreateManyAndReturnArgs>(args?: SelectSubset<T, BranchOfficeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchOfficePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BranchOffice.
     * @param {BranchOfficeDeleteArgs} args - Arguments to delete one BranchOffice.
     * @example
     * // Delete one BranchOffice
     * const BranchOffice = await prisma.branchOffice.delete({
     *   where: {
     *     // ... filter to delete one BranchOffice
     *   }
     * })
     * 
     */
    delete<T extends BranchOfficeDeleteArgs>(args: SelectSubset<T, BranchOfficeDeleteArgs<ExtArgs>>): Prisma__BranchOfficeClient<$Result.GetResult<Prisma.$BranchOfficePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BranchOffice.
     * @param {BranchOfficeUpdateArgs} args - Arguments to update one BranchOffice.
     * @example
     * // Update one BranchOffice
     * const branchOffice = await prisma.branchOffice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchOfficeUpdateArgs>(args: SelectSubset<T, BranchOfficeUpdateArgs<ExtArgs>>): Prisma__BranchOfficeClient<$Result.GetResult<Prisma.$BranchOfficePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BranchOffices.
     * @param {BranchOfficeDeleteManyArgs} args - Arguments to filter BranchOffices to delete.
     * @example
     * // Delete a few BranchOffices
     * const { count } = await prisma.branchOffice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchOfficeDeleteManyArgs>(args?: SelectSubset<T, BranchOfficeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BranchOffices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchOfficeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BranchOffices
     * const branchOffice = await prisma.branchOffice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchOfficeUpdateManyArgs>(args: SelectSubset<T, BranchOfficeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BranchOffices and returns the data updated in the database.
     * @param {BranchOfficeUpdateManyAndReturnArgs} args - Arguments to update many BranchOffices.
     * @example
     * // Update many BranchOffices
     * const branchOffice = await prisma.branchOffice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BranchOffices and only return the `id`
     * const branchOfficeWithIdOnly = await prisma.branchOffice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BranchOfficeUpdateManyAndReturnArgs>(args: SelectSubset<T, BranchOfficeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchOfficePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BranchOffice.
     * @param {BranchOfficeUpsertArgs} args - Arguments to update or create a BranchOffice.
     * @example
     * // Update or create a BranchOffice
     * const branchOffice = await prisma.branchOffice.upsert({
     *   create: {
     *     // ... data to create a BranchOffice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BranchOffice we want to update
     *   }
     * })
     */
    upsert<T extends BranchOfficeUpsertArgs>(args: SelectSubset<T, BranchOfficeUpsertArgs<ExtArgs>>): Prisma__BranchOfficeClient<$Result.GetResult<Prisma.$BranchOfficePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BranchOffices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchOfficeCountArgs} args - Arguments to filter BranchOffices to count.
     * @example
     * // Count the number of BranchOffices
     * const count = await prisma.branchOffice.count({
     *   where: {
     *     // ... the filter for the BranchOffices we want to count
     *   }
     * })
    **/
    count<T extends BranchOfficeCountArgs>(
      args?: Subset<T, BranchOfficeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchOfficeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BranchOffice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchOfficeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchOfficeAggregateArgs>(args: Subset<T, BranchOfficeAggregateArgs>): Prisma.PrismaPromise<GetBranchOfficeAggregateType<T>>

    /**
     * Group by BranchOffice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchOfficeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BranchOfficeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchOfficeGroupByArgs['orderBy'] }
        : { orderBy?: BranchOfficeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BranchOfficeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchOfficeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BranchOffice model
   */
  readonly fields: BranchOfficeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BranchOffice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchOfficeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends BranchOffice$usersArgs<ExtArgs> = {}>(args?: Subset<T, BranchOffice$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    devices<T extends BranchOffice$devicesArgs<ExtArgs> = {}>(args?: Subset<T, BranchOffice$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometricDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BranchOffice model
   */
  interface BranchOfficeFieldRefs {
    readonly id: FieldRef<"BranchOffice", 'Int'>
    readonly name: FieldRef<"BranchOffice", 'String'>
    readonly companyId: FieldRef<"BranchOffice", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BranchOffice findUnique
   */
  export type BranchOfficeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchOffice
     */
    select?: BranchOfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchOffice
     */
    omit?: BranchOfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchOfficeInclude<ExtArgs> | null
    /**
     * Filter, which BranchOffice to fetch.
     */
    where: BranchOfficeWhereUniqueInput
  }

  /**
   * BranchOffice findUniqueOrThrow
   */
  export type BranchOfficeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchOffice
     */
    select?: BranchOfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchOffice
     */
    omit?: BranchOfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchOfficeInclude<ExtArgs> | null
    /**
     * Filter, which BranchOffice to fetch.
     */
    where: BranchOfficeWhereUniqueInput
  }

  /**
   * BranchOffice findFirst
   */
  export type BranchOfficeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchOffice
     */
    select?: BranchOfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchOffice
     */
    omit?: BranchOfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchOfficeInclude<ExtArgs> | null
    /**
     * Filter, which BranchOffice to fetch.
     */
    where?: BranchOfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchOffices to fetch.
     */
    orderBy?: BranchOfficeOrderByWithRelationInput | BranchOfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BranchOffices.
     */
    cursor?: BranchOfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchOffices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchOffices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BranchOffices.
     */
    distinct?: BranchOfficeScalarFieldEnum | BranchOfficeScalarFieldEnum[]
  }

  /**
   * BranchOffice findFirstOrThrow
   */
  export type BranchOfficeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchOffice
     */
    select?: BranchOfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchOffice
     */
    omit?: BranchOfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchOfficeInclude<ExtArgs> | null
    /**
     * Filter, which BranchOffice to fetch.
     */
    where?: BranchOfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchOffices to fetch.
     */
    orderBy?: BranchOfficeOrderByWithRelationInput | BranchOfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BranchOffices.
     */
    cursor?: BranchOfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchOffices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchOffices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BranchOffices.
     */
    distinct?: BranchOfficeScalarFieldEnum | BranchOfficeScalarFieldEnum[]
  }

  /**
   * BranchOffice findMany
   */
  export type BranchOfficeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchOffice
     */
    select?: BranchOfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchOffice
     */
    omit?: BranchOfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchOfficeInclude<ExtArgs> | null
    /**
     * Filter, which BranchOffices to fetch.
     */
    where?: BranchOfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchOffices to fetch.
     */
    orderBy?: BranchOfficeOrderByWithRelationInput | BranchOfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BranchOffices.
     */
    cursor?: BranchOfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchOffices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchOffices.
     */
    skip?: number
    distinct?: BranchOfficeScalarFieldEnum | BranchOfficeScalarFieldEnum[]
  }

  /**
   * BranchOffice create
   */
  export type BranchOfficeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchOffice
     */
    select?: BranchOfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchOffice
     */
    omit?: BranchOfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchOfficeInclude<ExtArgs> | null
    /**
     * The data needed to create a BranchOffice.
     */
    data: XOR<BranchOfficeCreateInput, BranchOfficeUncheckedCreateInput>
  }

  /**
   * BranchOffice createMany
   */
  export type BranchOfficeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BranchOffices.
     */
    data: BranchOfficeCreateManyInput | BranchOfficeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BranchOffice createManyAndReturn
   */
  export type BranchOfficeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchOffice
     */
    select?: BranchOfficeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BranchOffice
     */
    omit?: BranchOfficeOmit<ExtArgs> | null
    /**
     * The data used to create many BranchOffices.
     */
    data: BranchOfficeCreateManyInput | BranchOfficeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchOfficeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BranchOffice update
   */
  export type BranchOfficeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchOffice
     */
    select?: BranchOfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchOffice
     */
    omit?: BranchOfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchOfficeInclude<ExtArgs> | null
    /**
     * The data needed to update a BranchOffice.
     */
    data: XOR<BranchOfficeUpdateInput, BranchOfficeUncheckedUpdateInput>
    /**
     * Choose, which BranchOffice to update.
     */
    where: BranchOfficeWhereUniqueInput
  }

  /**
   * BranchOffice updateMany
   */
  export type BranchOfficeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BranchOffices.
     */
    data: XOR<BranchOfficeUpdateManyMutationInput, BranchOfficeUncheckedUpdateManyInput>
    /**
     * Filter which BranchOffices to update
     */
    where?: BranchOfficeWhereInput
    /**
     * Limit how many BranchOffices to update.
     */
    limit?: number
  }

  /**
   * BranchOffice updateManyAndReturn
   */
  export type BranchOfficeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchOffice
     */
    select?: BranchOfficeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BranchOffice
     */
    omit?: BranchOfficeOmit<ExtArgs> | null
    /**
     * The data used to update BranchOffices.
     */
    data: XOR<BranchOfficeUpdateManyMutationInput, BranchOfficeUncheckedUpdateManyInput>
    /**
     * Filter which BranchOffices to update
     */
    where?: BranchOfficeWhereInput
    /**
     * Limit how many BranchOffices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchOfficeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BranchOffice upsert
   */
  export type BranchOfficeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchOffice
     */
    select?: BranchOfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchOffice
     */
    omit?: BranchOfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchOfficeInclude<ExtArgs> | null
    /**
     * The filter to search for the BranchOffice to update in case it exists.
     */
    where: BranchOfficeWhereUniqueInput
    /**
     * In case the BranchOffice found by the `where` argument doesn't exist, create a new BranchOffice with this data.
     */
    create: XOR<BranchOfficeCreateInput, BranchOfficeUncheckedCreateInput>
    /**
     * In case the BranchOffice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchOfficeUpdateInput, BranchOfficeUncheckedUpdateInput>
  }

  /**
   * BranchOffice delete
   */
  export type BranchOfficeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchOffice
     */
    select?: BranchOfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchOffice
     */
    omit?: BranchOfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchOfficeInclude<ExtArgs> | null
    /**
     * Filter which BranchOffice to delete.
     */
    where: BranchOfficeWhereUniqueInput
  }

  /**
   * BranchOffice deleteMany
   */
  export type BranchOfficeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BranchOffices to delete
     */
    where?: BranchOfficeWhereInput
    /**
     * Limit how many BranchOffices to delete.
     */
    limit?: number
  }

  /**
   * BranchOffice.users
   */
  export type BranchOffice$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * BranchOffice.devices
   */
  export type BranchOffice$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricDevice
     */
    select?: BiometricDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricDevice
     */
    omit?: BiometricDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDeviceInclude<ExtArgs> | null
    where?: BiometricDeviceWhereInput
    orderBy?: BiometricDeviceOrderByWithRelationInput | BiometricDeviceOrderByWithRelationInput[]
    cursor?: BiometricDeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BiometricDeviceScalarFieldEnum | BiometricDeviceScalarFieldEnum[]
  }

  /**
   * BranchOffice without action
   */
  export type BranchOfficeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchOffice
     */
    select?: BranchOfficeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchOffice
     */
    omit?: BranchOfficeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchOfficeInclude<ExtArgs> | null
  }


  /**
   * Model AttendanceRecord
   */

  export type AggregateAttendanceRecord = {
    _count: AttendanceRecordCountAggregateOutputType | null
    _avg: AttendanceRecordAvgAggregateOutputType | null
    _sum: AttendanceRecordSumAggregateOutputType | null
    _min: AttendanceRecordMinAggregateOutputType | null
    _max: AttendanceRecordMaxAggregateOutputType | null
  }

  export type AttendanceRecordAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    deviceId: number | null
  }

  export type AttendanceRecordSumAggregateOutputType = {
    id: number | null
    userId: number | null
    deviceId: number | null
  }

  export type AttendanceRecordMinAggregateOutputType = {
    id: number | null
    userId: number | null
    timestamp: Date | null
    deviceId: number | null
  }

  export type AttendanceRecordMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    timestamp: Date | null
    deviceId: number | null
  }

  export type AttendanceRecordCountAggregateOutputType = {
    id: number
    userId: number
    timestamp: number
    deviceId: number
    _all: number
  }


  export type AttendanceRecordAvgAggregateInputType = {
    id?: true
    userId?: true
    deviceId?: true
  }

  export type AttendanceRecordSumAggregateInputType = {
    id?: true
    userId?: true
    deviceId?: true
  }

  export type AttendanceRecordMinAggregateInputType = {
    id?: true
    userId?: true
    timestamp?: true
    deviceId?: true
  }

  export type AttendanceRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    timestamp?: true
    deviceId?: true
  }

  export type AttendanceRecordCountAggregateInputType = {
    id?: true
    userId?: true
    timestamp?: true
    deviceId?: true
    _all?: true
  }

  export type AttendanceRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceRecord to aggregate.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttendanceRecords
    **/
    _count?: true | AttendanceRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceRecordMaxAggregateInputType
  }

  export type GetAttendanceRecordAggregateType<T extends AttendanceRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendanceRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendanceRecord[P]>
      : GetScalarType<T[P], AggregateAttendanceRecord[P]>
  }




  export type AttendanceRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRecordWhereInput
    orderBy?: AttendanceRecordOrderByWithAggregationInput | AttendanceRecordOrderByWithAggregationInput[]
    by: AttendanceRecordScalarFieldEnum[] | AttendanceRecordScalarFieldEnum
    having?: AttendanceRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceRecordCountAggregateInputType | true
    _avg?: AttendanceRecordAvgAggregateInputType
    _sum?: AttendanceRecordSumAggregateInputType
    _min?: AttendanceRecordMinAggregateInputType
    _max?: AttendanceRecordMaxAggregateInputType
  }

  export type AttendanceRecordGroupByOutputType = {
    id: number
    userId: number
    timestamp: Date
    deviceId: number
    _count: AttendanceRecordCountAggregateOutputType | null
    _avg: AttendanceRecordAvgAggregateOutputType | null
    _sum: AttendanceRecordSumAggregateOutputType | null
    _min: AttendanceRecordMinAggregateOutputType | null
    _max: AttendanceRecordMaxAggregateOutputType | null
  }

  type GetAttendanceRecordGroupByPayload<T extends AttendanceRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceRecordGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceRecordGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    timestamp?: boolean
    deviceId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceRecord"]>

  export type AttendanceRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    timestamp?: boolean
    deviceId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceRecord"]>

  export type AttendanceRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    timestamp?: boolean
    deviceId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceRecord"]>

  export type AttendanceRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    timestamp?: boolean
    deviceId?: boolean
  }

  export type AttendanceRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "timestamp" | "deviceId", ExtArgs["result"]["attendanceRecord"]>
  export type AttendanceRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendanceRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendanceRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttendanceRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttendanceRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      timestamp: Date
      deviceId: number
    }, ExtArgs["result"]["attendanceRecord"]>
    composites: {}
  }

  type AttendanceRecordGetPayload<S extends boolean | null | undefined | AttendanceRecordDefaultArgs> = $Result.GetResult<Prisma.$AttendanceRecordPayload, S>

  type AttendanceRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceRecordCountAggregateInputType | true
    }

  export interface AttendanceRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttendanceRecord'], meta: { name: 'AttendanceRecord' } }
    /**
     * Find zero or one AttendanceRecord that matches the filter.
     * @param {AttendanceRecordFindUniqueArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceRecordFindUniqueArgs>(args: SelectSubset<T, AttendanceRecordFindUniqueArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttendanceRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceRecordFindUniqueOrThrowArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordFindFirstArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceRecordFindFirstArgs>(args?: SelectSubset<T, AttendanceRecordFindFirstArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordFindFirstOrThrowArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttendanceRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceRecords
     * const attendanceRecords = await prisma.attendanceRecord.findMany()
     * 
     * // Get first 10 AttendanceRecords
     * const attendanceRecords = await prisma.attendanceRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceRecordWithIdOnly = await prisma.attendanceRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceRecordFindManyArgs>(args?: SelectSubset<T, AttendanceRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttendanceRecord.
     * @param {AttendanceRecordCreateArgs} args - Arguments to create a AttendanceRecord.
     * @example
     * // Create one AttendanceRecord
     * const AttendanceRecord = await prisma.attendanceRecord.create({
     *   data: {
     *     // ... data to create a AttendanceRecord
     *   }
     * })
     * 
     */
    create<T extends AttendanceRecordCreateArgs>(args: SelectSubset<T, AttendanceRecordCreateArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttendanceRecords.
     * @param {AttendanceRecordCreateManyArgs} args - Arguments to create many AttendanceRecords.
     * @example
     * // Create many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceRecordCreateManyArgs>(args?: SelectSubset<T, AttendanceRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttendanceRecords and returns the data saved in the database.
     * @param {AttendanceRecordCreateManyAndReturnArgs} args - Arguments to create many AttendanceRecords.
     * @example
     * // Create many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttendanceRecords and only return the `id`
     * const attendanceRecordWithIdOnly = await prisma.attendanceRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttendanceRecord.
     * @param {AttendanceRecordDeleteArgs} args - Arguments to delete one AttendanceRecord.
     * @example
     * // Delete one AttendanceRecord
     * const AttendanceRecord = await prisma.attendanceRecord.delete({
     *   where: {
     *     // ... filter to delete one AttendanceRecord
     *   }
     * })
     * 
     */
    delete<T extends AttendanceRecordDeleteArgs>(args: SelectSubset<T, AttendanceRecordDeleteArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttendanceRecord.
     * @param {AttendanceRecordUpdateArgs} args - Arguments to update one AttendanceRecord.
     * @example
     * // Update one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceRecordUpdateArgs>(args: SelectSubset<T, AttendanceRecordUpdateArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttendanceRecords.
     * @param {AttendanceRecordDeleteManyArgs} args - Arguments to filter AttendanceRecords to delete.
     * @example
     * // Delete a few AttendanceRecords
     * const { count } = await prisma.attendanceRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceRecordDeleteManyArgs>(args?: SelectSubset<T, AttendanceRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceRecordUpdateManyArgs>(args: SelectSubset<T, AttendanceRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceRecords and returns the data updated in the database.
     * @param {AttendanceRecordUpdateManyAndReturnArgs} args - Arguments to update many AttendanceRecords.
     * @example
     * // Update many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttendanceRecords and only return the `id`
     * const attendanceRecordWithIdOnly = await prisma.attendanceRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttendanceRecord.
     * @param {AttendanceRecordUpsertArgs} args - Arguments to update or create a AttendanceRecord.
     * @example
     * // Update or create a AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.upsert({
     *   create: {
     *     // ... data to create a AttendanceRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceRecord we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceRecordUpsertArgs>(args: SelectSubset<T, AttendanceRecordUpsertArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttendanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordCountArgs} args - Arguments to filter AttendanceRecords to count.
     * @example
     * // Count the number of AttendanceRecords
     * const count = await prisma.attendanceRecord.count({
     *   where: {
     *     // ... the filter for the AttendanceRecords we want to count
     *   }
     * })
    **/
    count<T extends AttendanceRecordCountArgs>(
      args?: Subset<T, AttendanceRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttendanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceRecordAggregateArgs>(args: Subset<T, AttendanceRecordAggregateArgs>): Prisma.PrismaPromise<GetAttendanceRecordAggregateType<T>>

    /**
     * Group by AttendanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceRecordGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttendanceRecord model
   */
  readonly fields: AttendanceRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttendanceRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AttendanceRecord model
   */
  interface AttendanceRecordFieldRefs {
    readonly id: FieldRef<"AttendanceRecord", 'Int'>
    readonly userId: FieldRef<"AttendanceRecord", 'Int'>
    readonly timestamp: FieldRef<"AttendanceRecord", 'DateTime'>
    readonly deviceId: FieldRef<"AttendanceRecord", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AttendanceRecord findUnique
   */
  export type AttendanceRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord findUniqueOrThrow
   */
  export type AttendanceRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord findFirst
   */
  export type AttendanceRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceRecords.
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceRecords.
     */
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AttendanceRecord findFirstOrThrow
   */
  export type AttendanceRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceRecords.
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceRecords.
     */
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AttendanceRecord findMany
   */
  export type AttendanceRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecords to fetch.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttendanceRecords.
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AttendanceRecord create
   */
  export type AttendanceRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a AttendanceRecord.
     */
    data: XOR<AttendanceRecordCreateInput, AttendanceRecordUncheckedCreateInput>
  }

  /**
   * AttendanceRecord createMany
   */
  export type AttendanceRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceRecords.
     */
    data: AttendanceRecordCreateManyInput | AttendanceRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceRecord createManyAndReturn
   */
  export type AttendanceRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * The data used to create many AttendanceRecords.
     */
    data: AttendanceRecordCreateManyInput | AttendanceRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttendanceRecord update
   */
  export type AttendanceRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a AttendanceRecord.
     */
    data: XOR<AttendanceRecordUpdateInput, AttendanceRecordUncheckedUpdateInput>
    /**
     * Choose, which AttendanceRecord to update.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord updateMany
   */
  export type AttendanceRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceRecords.
     */
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceRecords to update
     */
    where?: AttendanceRecordWhereInput
    /**
     * Limit how many AttendanceRecords to update.
     */
    limit?: number
  }

  /**
   * AttendanceRecord updateManyAndReturn
   */
  export type AttendanceRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * The data used to update AttendanceRecords.
     */
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceRecords to update
     */
    where?: AttendanceRecordWhereInput
    /**
     * Limit how many AttendanceRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttendanceRecord upsert
   */
  export type AttendanceRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the AttendanceRecord to update in case it exists.
     */
    where: AttendanceRecordWhereUniqueInput
    /**
     * In case the AttendanceRecord found by the `where` argument doesn't exist, create a new AttendanceRecord with this data.
     */
    create: XOR<AttendanceRecordCreateInput, AttendanceRecordUncheckedCreateInput>
    /**
     * In case the AttendanceRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceRecordUpdateInput, AttendanceRecordUncheckedUpdateInput>
  }

  /**
   * AttendanceRecord delete
   */
  export type AttendanceRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter which AttendanceRecord to delete.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord deleteMany
   */
  export type AttendanceRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceRecords to delete
     */
    where?: AttendanceRecordWhereInput
    /**
     * Limit how many AttendanceRecords to delete.
     */
    limit?: number
  }

  /**
   * AttendanceRecord without action
   */
  export type AttendanceRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    cedula: 'cedula',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    branchOfficeId: 'branchOfficeId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BiometricTemplateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    encryptedData: 'encryptedData',
    encryptionIv: 'encryptionIv',
    fingerIndex: 'fingerIndex',
    qualityScore: 'qualityScore',
    createdAt: 'createdAt'
  };

  export type BiometricTemplateScalarFieldEnum = (typeof BiometricTemplateScalarFieldEnum)[keyof typeof BiometricTemplateScalarFieldEnum]


  export const BiometricDeviceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    serial: 'serial',
    ip: 'ip',
    port: 'port',
    token: 'token',
    lastSync: 'lastSync',
    status: 'status',
    branchOfficeId: 'branchOfficeId'
  };

  export type BiometricDeviceScalarFieldEnum = (typeof BiometricDeviceScalarFieldEnum)[keyof typeof BiometricDeviceScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const BranchOfficeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    companyId: 'companyId'
  };

  export type BranchOfficeScalarFieldEnum = (typeof BranchOfficeScalarFieldEnum)[keyof typeof BranchOfficeScalarFieldEnum]


  export const AttendanceRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    timestamp: 'timestamp',
    deviceId: 'deviceId'
  };

  export type AttendanceRecordScalarFieldEnum = (typeof AttendanceRecordScalarFieldEnum)[keyof typeof AttendanceRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DeviceStatus'
   */
  export type EnumDeviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceStatus'>
    


  /**
   * Reference to a field of type 'DeviceStatus[]'
   */
  export type ListEnumDeviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    cedula?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isDeleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    branchOfficeId?: IntFilter<"User"> | number
    templates?: BiometricTemplateListRelationFilter
    records?: AttendanceRecordListRelationFilter
    branchOffice?: XOR<BranchOfficeScalarRelationFilter, BranchOfficeWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    cedula?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    branchOfficeId?: SortOrder
    templates?: BiometricTemplateOrderByRelationAggregateInput
    records?: AttendanceRecordOrderByRelationAggregateInput
    branchOffice?: BranchOfficeOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cedula?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isDeleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    branchOfficeId?: IntFilter<"User"> | number
    templates?: BiometricTemplateListRelationFilter
    records?: AttendanceRecordListRelationFilter
    branchOffice?: XOR<BranchOfficeScalarRelationFilter, BranchOfficeWhereInput>
  }, "id" | "cedula" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    cedula?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    branchOfficeId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    cedula?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isDeleted?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    branchOfficeId?: IntWithAggregatesFilter<"User"> | number
  }

  export type BiometricTemplateWhereInput = {
    AND?: BiometricTemplateWhereInput | BiometricTemplateWhereInput[]
    OR?: BiometricTemplateWhereInput[]
    NOT?: BiometricTemplateWhereInput | BiometricTemplateWhereInput[]
    id?: IntFilter<"BiometricTemplate"> | number
    userId?: IntFilter<"BiometricTemplate"> | number
    encryptedData?: StringFilter<"BiometricTemplate"> | string
    encryptionIv?: StringFilter<"BiometricTemplate"> | string
    fingerIndex?: IntFilter<"BiometricTemplate"> | number
    qualityScore?: IntFilter<"BiometricTemplate"> | number
    createdAt?: DateTimeFilter<"BiometricTemplate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BiometricTemplateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    encryptedData?: SortOrder
    encryptionIv?: SortOrder
    fingerIndex?: SortOrder
    qualityScore?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BiometricTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BiometricTemplateWhereInput | BiometricTemplateWhereInput[]
    OR?: BiometricTemplateWhereInput[]
    NOT?: BiometricTemplateWhereInput | BiometricTemplateWhereInput[]
    userId?: IntFilter<"BiometricTemplate"> | number
    encryptedData?: StringFilter<"BiometricTemplate"> | string
    encryptionIv?: StringFilter<"BiometricTemplate"> | string
    fingerIndex?: IntFilter<"BiometricTemplate"> | number
    qualityScore?: IntFilter<"BiometricTemplate"> | number
    createdAt?: DateTimeFilter<"BiometricTemplate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BiometricTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    encryptedData?: SortOrder
    encryptionIv?: SortOrder
    fingerIndex?: SortOrder
    qualityScore?: SortOrder
    createdAt?: SortOrder
    _count?: BiometricTemplateCountOrderByAggregateInput
    _avg?: BiometricTemplateAvgOrderByAggregateInput
    _max?: BiometricTemplateMaxOrderByAggregateInput
    _min?: BiometricTemplateMinOrderByAggregateInput
    _sum?: BiometricTemplateSumOrderByAggregateInput
  }

  export type BiometricTemplateScalarWhereWithAggregatesInput = {
    AND?: BiometricTemplateScalarWhereWithAggregatesInput | BiometricTemplateScalarWhereWithAggregatesInput[]
    OR?: BiometricTemplateScalarWhereWithAggregatesInput[]
    NOT?: BiometricTemplateScalarWhereWithAggregatesInput | BiometricTemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BiometricTemplate"> | number
    userId?: IntWithAggregatesFilter<"BiometricTemplate"> | number
    encryptedData?: StringWithAggregatesFilter<"BiometricTemplate"> | string
    encryptionIv?: StringWithAggregatesFilter<"BiometricTemplate"> | string
    fingerIndex?: IntWithAggregatesFilter<"BiometricTemplate"> | number
    qualityScore?: IntWithAggregatesFilter<"BiometricTemplate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BiometricTemplate"> | Date | string
  }

  export type BiometricDeviceWhereInput = {
    AND?: BiometricDeviceWhereInput | BiometricDeviceWhereInput[]
    OR?: BiometricDeviceWhereInput[]
    NOT?: BiometricDeviceWhereInput | BiometricDeviceWhereInput[]
    id?: IntFilter<"BiometricDevice"> | number
    name?: StringFilter<"BiometricDevice"> | string
    serial?: StringFilter<"BiometricDevice"> | string
    ip?: StringNullableFilter<"BiometricDevice"> | string | null
    port?: IntNullableFilter<"BiometricDevice"> | number | null
    token?: StringNullableFilter<"BiometricDevice"> | string | null
    lastSync?: DateTimeNullableFilter<"BiometricDevice"> | Date | string | null
    status?: EnumDeviceStatusFilter<"BiometricDevice"> | $Enums.DeviceStatus
    branchOfficeId?: IntFilter<"BiometricDevice"> | number
    branchOffice?: XOR<BranchOfficeScalarRelationFilter, BranchOfficeWhereInput>
  }

  export type BiometricDeviceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    serial?: SortOrder
    ip?: SortOrderInput | SortOrder
    port?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    status?: SortOrder
    branchOfficeId?: SortOrder
    branchOffice?: BranchOfficeOrderByWithRelationInput
  }

  export type BiometricDeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    serial?: string
    token?: string
    AND?: BiometricDeviceWhereInput | BiometricDeviceWhereInput[]
    OR?: BiometricDeviceWhereInput[]
    NOT?: BiometricDeviceWhereInput | BiometricDeviceWhereInput[]
    name?: StringFilter<"BiometricDevice"> | string
    ip?: StringNullableFilter<"BiometricDevice"> | string | null
    port?: IntNullableFilter<"BiometricDevice"> | number | null
    lastSync?: DateTimeNullableFilter<"BiometricDevice"> | Date | string | null
    status?: EnumDeviceStatusFilter<"BiometricDevice"> | $Enums.DeviceStatus
    branchOfficeId?: IntFilter<"BiometricDevice"> | number
    branchOffice?: XOR<BranchOfficeScalarRelationFilter, BranchOfficeWhereInput>
  }, "id" | "serial" | "token">

  export type BiometricDeviceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    serial?: SortOrder
    ip?: SortOrderInput | SortOrder
    port?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    status?: SortOrder
    branchOfficeId?: SortOrder
    _count?: BiometricDeviceCountOrderByAggregateInput
    _avg?: BiometricDeviceAvgOrderByAggregateInput
    _max?: BiometricDeviceMaxOrderByAggregateInput
    _min?: BiometricDeviceMinOrderByAggregateInput
    _sum?: BiometricDeviceSumOrderByAggregateInput
  }

  export type BiometricDeviceScalarWhereWithAggregatesInput = {
    AND?: BiometricDeviceScalarWhereWithAggregatesInput | BiometricDeviceScalarWhereWithAggregatesInput[]
    OR?: BiometricDeviceScalarWhereWithAggregatesInput[]
    NOT?: BiometricDeviceScalarWhereWithAggregatesInput | BiometricDeviceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BiometricDevice"> | number
    name?: StringWithAggregatesFilter<"BiometricDevice"> | string
    serial?: StringWithAggregatesFilter<"BiometricDevice"> | string
    ip?: StringNullableWithAggregatesFilter<"BiometricDevice"> | string | null
    port?: IntNullableWithAggregatesFilter<"BiometricDevice"> | number | null
    token?: StringNullableWithAggregatesFilter<"BiometricDevice"> | string | null
    lastSync?: DateTimeNullableWithAggregatesFilter<"BiometricDevice"> | Date | string | null
    status?: EnumDeviceStatusWithAggregatesFilter<"BiometricDevice"> | $Enums.DeviceStatus
    branchOfficeId?: IntWithAggregatesFilter<"BiometricDevice"> | number
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    branches?: BranchOfficeListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    branches?: BranchOfficeOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    branches?: BranchOfficeListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
  }

  export type BranchOfficeWhereInput = {
    AND?: BranchOfficeWhereInput | BranchOfficeWhereInput[]
    OR?: BranchOfficeWhereInput[]
    NOT?: BranchOfficeWhereInput | BranchOfficeWhereInput[]
    id?: IntFilter<"BranchOffice"> | number
    name?: StringFilter<"BranchOffice"> | string
    companyId?: IntFilter<"BranchOffice"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    users?: UserListRelationFilter
    devices?: BiometricDeviceListRelationFilter
  }

  export type BranchOfficeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    company?: CompanyOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    devices?: BiometricDeviceOrderByRelationAggregateInput
  }

  export type BranchOfficeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BranchOfficeWhereInput | BranchOfficeWhereInput[]
    OR?: BranchOfficeWhereInput[]
    NOT?: BranchOfficeWhereInput | BranchOfficeWhereInput[]
    name?: StringFilter<"BranchOffice"> | string
    companyId?: IntFilter<"BranchOffice"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    users?: UserListRelationFilter
    devices?: BiometricDeviceListRelationFilter
  }, "id">

  export type BranchOfficeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    _count?: BranchOfficeCountOrderByAggregateInput
    _avg?: BranchOfficeAvgOrderByAggregateInput
    _max?: BranchOfficeMaxOrderByAggregateInput
    _min?: BranchOfficeMinOrderByAggregateInput
    _sum?: BranchOfficeSumOrderByAggregateInput
  }

  export type BranchOfficeScalarWhereWithAggregatesInput = {
    AND?: BranchOfficeScalarWhereWithAggregatesInput | BranchOfficeScalarWhereWithAggregatesInput[]
    OR?: BranchOfficeScalarWhereWithAggregatesInput[]
    NOT?: BranchOfficeScalarWhereWithAggregatesInput | BranchOfficeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BranchOffice"> | number
    name?: StringWithAggregatesFilter<"BranchOffice"> | string
    companyId?: IntWithAggregatesFilter<"BranchOffice"> | number
  }

  export type AttendanceRecordWhereInput = {
    AND?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    OR?: AttendanceRecordWhereInput[]
    NOT?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    id?: IntFilter<"AttendanceRecord"> | number
    userId?: IntFilter<"AttendanceRecord"> | number
    timestamp?: DateTimeFilter<"AttendanceRecord"> | Date | string
    deviceId?: IntFilter<"AttendanceRecord"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AttendanceRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    deviceId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AttendanceRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    OR?: AttendanceRecordWhereInput[]
    NOT?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    userId?: IntFilter<"AttendanceRecord"> | number
    timestamp?: DateTimeFilter<"AttendanceRecord"> | Date | string
    deviceId?: IntFilter<"AttendanceRecord"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AttendanceRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    deviceId?: SortOrder
    _count?: AttendanceRecordCountOrderByAggregateInput
    _avg?: AttendanceRecordAvgOrderByAggregateInput
    _max?: AttendanceRecordMaxOrderByAggregateInput
    _min?: AttendanceRecordMinOrderByAggregateInput
    _sum?: AttendanceRecordSumOrderByAggregateInput
  }

  export type AttendanceRecordScalarWhereWithAggregatesInput = {
    AND?: AttendanceRecordScalarWhereWithAggregatesInput | AttendanceRecordScalarWhereWithAggregatesInput[]
    OR?: AttendanceRecordScalarWhereWithAggregatesInput[]
    NOT?: AttendanceRecordScalarWhereWithAggregatesInput | AttendanceRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AttendanceRecord"> | number
    userId?: IntWithAggregatesFilter<"AttendanceRecord"> | number
    timestamp?: DateTimeWithAggregatesFilter<"AttendanceRecord"> | Date | string
    deviceId?: IntWithAggregatesFilter<"AttendanceRecord"> | number
  }

  export type UserCreateInput = {
    cedula: string
    fullName: string
    email: string
    password: string
    isDeleted?: boolean
    createdAt?: Date | string
    templates?: BiometricTemplateCreateNestedManyWithoutUserInput
    records?: AttendanceRecordCreateNestedManyWithoutUserInput
    branchOffice: BranchOfficeCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    cedula: string
    fullName: string
    email: string
    password: string
    isDeleted?: boolean
    createdAt?: Date | string
    branchOfficeId: number
    templates?: BiometricTemplateUncheckedCreateNestedManyWithoutUserInput
    records?: AttendanceRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    cedula?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: BiometricTemplateUpdateManyWithoutUserNestedInput
    records?: AttendanceRecordUpdateManyWithoutUserNestedInput
    branchOffice?: BranchOfficeUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cedula?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branchOfficeId?: IntFieldUpdateOperationsInput | number
    templates?: BiometricTemplateUncheckedUpdateManyWithoutUserNestedInput
    records?: AttendanceRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    cedula: string
    fullName: string
    email: string
    password: string
    isDeleted?: boolean
    createdAt?: Date | string
    branchOfficeId: number
  }

  export type UserUpdateManyMutationInput = {
    cedula?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cedula?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branchOfficeId?: IntFieldUpdateOperationsInput | number
  }

  export type BiometricTemplateCreateInput = {
    encryptedData: string
    encryptionIv: string
    fingerIndex: number
    qualityScore: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTemplatesInput
  }

  export type BiometricTemplateUncheckedCreateInput = {
    id?: number
    userId: number
    encryptedData: string
    encryptionIv: string
    fingerIndex: number
    qualityScore: number
    createdAt?: Date | string
  }

  export type BiometricTemplateUpdateInput = {
    encryptedData?: StringFieldUpdateOperationsInput | string
    encryptionIv?: StringFieldUpdateOperationsInput | string
    fingerIndex?: IntFieldUpdateOperationsInput | number
    qualityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type BiometricTemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    encryptedData?: StringFieldUpdateOperationsInput | string
    encryptionIv?: StringFieldUpdateOperationsInput | string
    fingerIndex?: IntFieldUpdateOperationsInput | number
    qualityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BiometricTemplateCreateManyInput = {
    id?: number
    userId: number
    encryptedData: string
    encryptionIv: string
    fingerIndex: number
    qualityScore: number
    createdAt?: Date | string
  }

  export type BiometricTemplateUpdateManyMutationInput = {
    encryptedData?: StringFieldUpdateOperationsInput | string
    encryptionIv?: StringFieldUpdateOperationsInput | string
    fingerIndex?: IntFieldUpdateOperationsInput | number
    qualityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BiometricTemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    encryptedData?: StringFieldUpdateOperationsInput | string
    encryptionIv?: StringFieldUpdateOperationsInput | string
    fingerIndex?: IntFieldUpdateOperationsInput | number
    qualityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BiometricDeviceCreateInput = {
    name: string
    serial: string
    ip?: string | null
    port?: number | null
    token?: string | null
    lastSync?: Date | string | null
    status?: $Enums.DeviceStatus
    branchOffice: BranchOfficeCreateNestedOneWithoutDevicesInput
  }

  export type BiometricDeviceUncheckedCreateInput = {
    id?: number
    name: string
    serial: string
    ip?: string | null
    port?: number | null
    token?: string | null
    lastSync?: Date | string | null
    status?: $Enums.DeviceStatus
    branchOfficeId: number
  }

  export type BiometricDeviceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    branchOffice?: BranchOfficeUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type BiometricDeviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    branchOfficeId?: IntFieldUpdateOperationsInput | number
  }

  export type BiometricDeviceCreateManyInput = {
    id?: number
    name: string
    serial: string
    ip?: string | null
    port?: number | null
    token?: string | null
    lastSync?: Date | string | null
    status?: $Enums.DeviceStatus
    branchOfficeId: number
  }

  export type BiometricDeviceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
  }

  export type BiometricDeviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    branchOfficeId?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyCreateInput = {
    name: string
    branches?: BranchOfficeCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    name: string
    branches?: BranchOfficeUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    branches?: BranchOfficeUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branches?: BranchOfficeUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    name: string
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BranchOfficeCreateInput = {
    name: string
    company: CompanyCreateNestedOneWithoutBranchesInput
    users?: UserCreateNestedManyWithoutBranchOfficeInput
    devices?: BiometricDeviceCreateNestedManyWithoutBranchOfficeInput
  }

  export type BranchOfficeUncheckedCreateInput = {
    id?: number
    name: string
    companyId: number
    users?: UserUncheckedCreateNestedManyWithoutBranchOfficeInput
    devices?: BiometricDeviceUncheckedCreateNestedManyWithoutBranchOfficeInput
  }

  export type BranchOfficeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    company?: CompanyUpdateOneRequiredWithoutBranchesNestedInput
    users?: UserUpdateManyWithoutBranchOfficeNestedInput
    devices?: BiometricDeviceUpdateManyWithoutBranchOfficeNestedInput
  }

  export type BranchOfficeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutBranchOfficeNestedInput
    devices?: BiometricDeviceUncheckedUpdateManyWithoutBranchOfficeNestedInput
  }

  export type BranchOfficeCreateManyInput = {
    id?: number
    name: string
    companyId: number
  }

  export type BranchOfficeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BranchOfficeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceRecordCreateInput = {
    timestamp?: Date | string
    deviceId: number
    user: UserCreateNestedOneWithoutRecordsInput
  }

  export type AttendanceRecordUncheckedCreateInput = {
    id?: number
    userId: number
    timestamp?: Date | string
    deviceId: number
  }

  export type AttendanceRecordUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type AttendanceRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceRecordCreateManyInput = {
    id?: number
    userId: number
    timestamp?: Date | string
    deviceId: number
  }

  export type AttendanceRecordUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BiometricTemplateListRelationFilter = {
    every?: BiometricTemplateWhereInput
    some?: BiometricTemplateWhereInput
    none?: BiometricTemplateWhereInput
  }

  export type AttendanceRecordListRelationFilter = {
    every?: AttendanceRecordWhereInput
    some?: AttendanceRecordWhereInput
    none?: AttendanceRecordWhereInput
  }

  export type BranchOfficeScalarRelationFilter = {
    is?: BranchOfficeWhereInput
    isNot?: BranchOfficeWhereInput
  }

  export type BiometricTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    cedula?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    branchOfficeId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    branchOfficeId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    cedula?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    branchOfficeId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    cedula?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    branchOfficeId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    branchOfficeId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BiometricTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    encryptedData?: SortOrder
    encryptionIv?: SortOrder
    fingerIndex?: SortOrder
    qualityScore?: SortOrder
    createdAt?: SortOrder
  }

  export type BiometricTemplateAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fingerIndex?: SortOrder
    qualityScore?: SortOrder
  }

  export type BiometricTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    encryptedData?: SortOrder
    encryptionIv?: SortOrder
    fingerIndex?: SortOrder
    qualityScore?: SortOrder
    createdAt?: SortOrder
  }

  export type BiometricTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    encryptedData?: SortOrder
    encryptionIv?: SortOrder
    fingerIndex?: SortOrder
    qualityScore?: SortOrder
    createdAt?: SortOrder
  }

  export type BiometricTemplateSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fingerIndex?: SortOrder
    qualityScore?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumDeviceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusFilter<$PrismaModel> | $Enums.DeviceStatus
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BiometricDeviceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serial?: SortOrder
    ip?: SortOrder
    port?: SortOrder
    token?: SortOrder
    lastSync?: SortOrder
    status?: SortOrder
    branchOfficeId?: SortOrder
  }

  export type BiometricDeviceAvgOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
    branchOfficeId?: SortOrder
  }

  export type BiometricDeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serial?: SortOrder
    ip?: SortOrder
    port?: SortOrder
    token?: SortOrder
    lastSync?: SortOrder
    status?: SortOrder
    branchOfficeId?: SortOrder
  }

  export type BiometricDeviceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serial?: SortOrder
    ip?: SortOrder
    port?: SortOrder
    token?: SortOrder
    lastSync?: SortOrder
    status?: SortOrder
    branchOfficeId?: SortOrder
  }

  export type BiometricDeviceSumOrderByAggregateInput = {
    id?: SortOrder
    port?: SortOrder
    branchOfficeId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumDeviceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeviceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceStatusFilter<$PrismaModel>
    _max?: NestedEnumDeviceStatusFilter<$PrismaModel>
  }

  export type BranchOfficeListRelationFilter = {
    every?: BranchOfficeWhereInput
    some?: BranchOfficeWhereInput
    none?: BranchOfficeWhereInput
  }

  export type BranchOfficeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type BiometricDeviceListRelationFilter = {
    every?: BiometricDeviceWhereInput
    some?: BiometricDeviceWhereInput
    none?: BiometricDeviceWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BiometricDeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BranchOfficeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
  }

  export type BranchOfficeAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type BranchOfficeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
  }

  export type BranchOfficeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
  }

  export type BranchOfficeSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type AttendanceRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    deviceId?: SortOrder
  }

  export type AttendanceRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
  }

  export type AttendanceRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    deviceId?: SortOrder
  }

  export type AttendanceRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    deviceId?: SortOrder
  }

  export type AttendanceRecordSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
  }

  export type BiometricTemplateCreateNestedManyWithoutUserInput = {
    create?: XOR<BiometricTemplateCreateWithoutUserInput, BiometricTemplateUncheckedCreateWithoutUserInput> | BiometricTemplateCreateWithoutUserInput[] | BiometricTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BiometricTemplateCreateOrConnectWithoutUserInput | BiometricTemplateCreateOrConnectWithoutUserInput[]
    createMany?: BiometricTemplateCreateManyUserInputEnvelope
    connect?: BiometricTemplateWhereUniqueInput | BiometricTemplateWhereUniqueInput[]
  }

  export type AttendanceRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceRecordCreateWithoutUserInput, AttendanceRecordUncheckedCreateWithoutUserInput> | AttendanceRecordCreateWithoutUserInput[] | AttendanceRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutUserInput | AttendanceRecordCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceRecordCreateManyUserInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type BranchOfficeCreateNestedOneWithoutUsersInput = {
    create?: XOR<BranchOfficeCreateWithoutUsersInput, BranchOfficeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BranchOfficeCreateOrConnectWithoutUsersInput
    connect?: BranchOfficeWhereUniqueInput
  }

  export type BiometricTemplateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BiometricTemplateCreateWithoutUserInput, BiometricTemplateUncheckedCreateWithoutUserInput> | BiometricTemplateCreateWithoutUserInput[] | BiometricTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BiometricTemplateCreateOrConnectWithoutUserInput | BiometricTemplateCreateOrConnectWithoutUserInput[]
    createMany?: BiometricTemplateCreateManyUserInputEnvelope
    connect?: BiometricTemplateWhereUniqueInput | BiometricTemplateWhereUniqueInput[]
  }

  export type AttendanceRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceRecordCreateWithoutUserInput, AttendanceRecordUncheckedCreateWithoutUserInput> | AttendanceRecordCreateWithoutUserInput[] | AttendanceRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutUserInput | AttendanceRecordCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceRecordCreateManyUserInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BiometricTemplateUpdateManyWithoutUserNestedInput = {
    create?: XOR<BiometricTemplateCreateWithoutUserInput, BiometricTemplateUncheckedCreateWithoutUserInput> | BiometricTemplateCreateWithoutUserInput[] | BiometricTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BiometricTemplateCreateOrConnectWithoutUserInput | BiometricTemplateCreateOrConnectWithoutUserInput[]
    upsert?: BiometricTemplateUpsertWithWhereUniqueWithoutUserInput | BiometricTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BiometricTemplateCreateManyUserInputEnvelope
    set?: BiometricTemplateWhereUniqueInput | BiometricTemplateWhereUniqueInput[]
    disconnect?: BiometricTemplateWhereUniqueInput | BiometricTemplateWhereUniqueInput[]
    delete?: BiometricTemplateWhereUniqueInput | BiometricTemplateWhereUniqueInput[]
    connect?: BiometricTemplateWhereUniqueInput | BiometricTemplateWhereUniqueInput[]
    update?: BiometricTemplateUpdateWithWhereUniqueWithoutUserInput | BiometricTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BiometricTemplateUpdateManyWithWhereWithoutUserInput | BiometricTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BiometricTemplateScalarWhereInput | BiometricTemplateScalarWhereInput[]
  }

  export type AttendanceRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutUserInput, AttendanceRecordUncheckedCreateWithoutUserInput> | AttendanceRecordCreateWithoutUserInput[] | AttendanceRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutUserInput | AttendanceRecordCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutUserInput | AttendanceRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceRecordCreateManyUserInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutUserInput | AttendanceRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutUserInput | AttendanceRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type BranchOfficeUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<BranchOfficeCreateWithoutUsersInput, BranchOfficeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BranchOfficeCreateOrConnectWithoutUsersInput
    upsert?: BranchOfficeUpsertWithoutUsersInput
    connect?: BranchOfficeWhereUniqueInput
    update?: XOR<XOR<BranchOfficeUpdateToOneWithWhereWithoutUsersInput, BranchOfficeUpdateWithoutUsersInput>, BranchOfficeUncheckedUpdateWithoutUsersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BiometricTemplateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BiometricTemplateCreateWithoutUserInput, BiometricTemplateUncheckedCreateWithoutUserInput> | BiometricTemplateCreateWithoutUserInput[] | BiometricTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BiometricTemplateCreateOrConnectWithoutUserInput | BiometricTemplateCreateOrConnectWithoutUserInput[]
    upsert?: BiometricTemplateUpsertWithWhereUniqueWithoutUserInput | BiometricTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BiometricTemplateCreateManyUserInputEnvelope
    set?: BiometricTemplateWhereUniqueInput | BiometricTemplateWhereUniqueInput[]
    disconnect?: BiometricTemplateWhereUniqueInput | BiometricTemplateWhereUniqueInput[]
    delete?: BiometricTemplateWhereUniqueInput | BiometricTemplateWhereUniqueInput[]
    connect?: BiometricTemplateWhereUniqueInput | BiometricTemplateWhereUniqueInput[]
    update?: BiometricTemplateUpdateWithWhereUniqueWithoutUserInput | BiometricTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BiometricTemplateUpdateManyWithWhereWithoutUserInput | BiometricTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BiometricTemplateScalarWhereInput | BiometricTemplateScalarWhereInput[]
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutUserInput, AttendanceRecordUncheckedCreateWithoutUserInput> | AttendanceRecordCreateWithoutUserInput[] | AttendanceRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutUserInput | AttendanceRecordCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutUserInput | AttendanceRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceRecordCreateManyUserInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutUserInput | AttendanceRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutUserInput | AttendanceRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTemplatesInput
    upsert?: UserUpsertWithoutTemplatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTemplatesInput, UserUpdateWithoutTemplatesInput>, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type BranchOfficeCreateNestedOneWithoutDevicesInput = {
    create?: XOR<BranchOfficeCreateWithoutDevicesInput, BranchOfficeUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: BranchOfficeCreateOrConnectWithoutDevicesInput
    connect?: BranchOfficeWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumDeviceStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeviceStatus
  }

  export type BranchOfficeUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<BranchOfficeCreateWithoutDevicesInput, BranchOfficeUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: BranchOfficeCreateOrConnectWithoutDevicesInput
    upsert?: BranchOfficeUpsertWithoutDevicesInput
    connect?: BranchOfficeWhereUniqueInput
    update?: XOR<XOR<BranchOfficeUpdateToOneWithWhereWithoutDevicesInput, BranchOfficeUpdateWithoutDevicesInput>, BranchOfficeUncheckedUpdateWithoutDevicesInput>
  }

  export type BranchOfficeCreateNestedManyWithoutCompanyInput = {
    create?: XOR<BranchOfficeCreateWithoutCompanyInput, BranchOfficeUncheckedCreateWithoutCompanyInput> | BranchOfficeCreateWithoutCompanyInput[] | BranchOfficeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BranchOfficeCreateOrConnectWithoutCompanyInput | BranchOfficeCreateOrConnectWithoutCompanyInput[]
    createMany?: BranchOfficeCreateManyCompanyInputEnvelope
    connect?: BranchOfficeWhereUniqueInput | BranchOfficeWhereUniqueInput[]
  }

  export type BranchOfficeUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<BranchOfficeCreateWithoutCompanyInput, BranchOfficeUncheckedCreateWithoutCompanyInput> | BranchOfficeCreateWithoutCompanyInput[] | BranchOfficeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BranchOfficeCreateOrConnectWithoutCompanyInput | BranchOfficeCreateOrConnectWithoutCompanyInput[]
    createMany?: BranchOfficeCreateManyCompanyInputEnvelope
    connect?: BranchOfficeWhereUniqueInput | BranchOfficeWhereUniqueInput[]
  }

  export type BranchOfficeUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<BranchOfficeCreateWithoutCompanyInput, BranchOfficeUncheckedCreateWithoutCompanyInput> | BranchOfficeCreateWithoutCompanyInput[] | BranchOfficeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BranchOfficeCreateOrConnectWithoutCompanyInput | BranchOfficeCreateOrConnectWithoutCompanyInput[]
    upsert?: BranchOfficeUpsertWithWhereUniqueWithoutCompanyInput | BranchOfficeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: BranchOfficeCreateManyCompanyInputEnvelope
    set?: BranchOfficeWhereUniqueInput | BranchOfficeWhereUniqueInput[]
    disconnect?: BranchOfficeWhereUniqueInput | BranchOfficeWhereUniqueInput[]
    delete?: BranchOfficeWhereUniqueInput | BranchOfficeWhereUniqueInput[]
    connect?: BranchOfficeWhereUniqueInput | BranchOfficeWhereUniqueInput[]
    update?: BranchOfficeUpdateWithWhereUniqueWithoutCompanyInput | BranchOfficeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: BranchOfficeUpdateManyWithWhereWithoutCompanyInput | BranchOfficeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: BranchOfficeScalarWhereInput | BranchOfficeScalarWhereInput[]
  }

  export type BranchOfficeUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<BranchOfficeCreateWithoutCompanyInput, BranchOfficeUncheckedCreateWithoutCompanyInput> | BranchOfficeCreateWithoutCompanyInput[] | BranchOfficeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BranchOfficeCreateOrConnectWithoutCompanyInput | BranchOfficeCreateOrConnectWithoutCompanyInput[]
    upsert?: BranchOfficeUpsertWithWhereUniqueWithoutCompanyInput | BranchOfficeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: BranchOfficeCreateManyCompanyInputEnvelope
    set?: BranchOfficeWhereUniqueInput | BranchOfficeWhereUniqueInput[]
    disconnect?: BranchOfficeWhereUniqueInput | BranchOfficeWhereUniqueInput[]
    delete?: BranchOfficeWhereUniqueInput | BranchOfficeWhereUniqueInput[]
    connect?: BranchOfficeWhereUniqueInput | BranchOfficeWhereUniqueInput[]
    update?: BranchOfficeUpdateWithWhereUniqueWithoutCompanyInput | BranchOfficeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: BranchOfficeUpdateManyWithWhereWithoutCompanyInput | BranchOfficeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: BranchOfficeScalarWhereInput | BranchOfficeScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutBranchesInput = {
    create?: XOR<CompanyCreateWithoutBranchesInput, CompanyUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutBranchesInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutBranchOfficeInput = {
    create?: XOR<UserCreateWithoutBranchOfficeInput, UserUncheckedCreateWithoutBranchOfficeInput> | UserCreateWithoutBranchOfficeInput[] | UserUncheckedCreateWithoutBranchOfficeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchOfficeInput | UserCreateOrConnectWithoutBranchOfficeInput[]
    createMany?: UserCreateManyBranchOfficeInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BiometricDeviceCreateNestedManyWithoutBranchOfficeInput = {
    create?: XOR<BiometricDeviceCreateWithoutBranchOfficeInput, BiometricDeviceUncheckedCreateWithoutBranchOfficeInput> | BiometricDeviceCreateWithoutBranchOfficeInput[] | BiometricDeviceUncheckedCreateWithoutBranchOfficeInput[]
    connectOrCreate?: BiometricDeviceCreateOrConnectWithoutBranchOfficeInput | BiometricDeviceCreateOrConnectWithoutBranchOfficeInput[]
    createMany?: BiometricDeviceCreateManyBranchOfficeInputEnvelope
    connect?: BiometricDeviceWhereUniqueInput | BiometricDeviceWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBranchOfficeInput = {
    create?: XOR<UserCreateWithoutBranchOfficeInput, UserUncheckedCreateWithoutBranchOfficeInput> | UserCreateWithoutBranchOfficeInput[] | UserUncheckedCreateWithoutBranchOfficeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchOfficeInput | UserCreateOrConnectWithoutBranchOfficeInput[]
    createMany?: UserCreateManyBranchOfficeInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BiometricDeviceUncheckedCreateNestedManyWithoutBranchOfficeInput = {
    create?: XOR<BiometricDeviceCreateWithoutBranchOfficeInput, BiometricDeviceUncheckedCreateWithoutBranchOfficeInput> | BiometricDeviceCreateWithoutBranchOfficeInput[] | BiometricDeviceUncheckedCreateWithoutBranchOfficeInput[]
    connectOrCreate?: BiometricDeviceCreateOrConnectWithoutBranchOfficeInput | BiometricDeviceCreateOrConnectWithoutBranchOfficeInput[]
    createMany?: BiometricDeviceCreateManyBranchOfficeInputEnvelope
    connect?: BiometricDeviceWhereUniqueInput | BiometricDeviceWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutBranchesNestedInput = {
    create?: XOR<CompanyCreateWithoutBranchesInput, CompanyUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutBranchesInput
    upsert?: CompanyUpsertWithoutBranchesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutBranchesInput, CompanyUpdateWithoutBranchesInput>, CompanyUncheckedUpdateWithoutBranchesInput>
  }

  export type UserUpdateManyWithoutBranchOfficeNestedInput = {
    create?: XOR<UserCreateWithoutBranchOfficeInput, UserUncheckedCreateWithoutBranchOfficeInput> | UserCreateWithoutBranchOfficeInput[] | UserUncheckedCreateWithoutBranchOfficeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchOfficeInput | UserCreateOrConnectWithoutBranchOfficeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBranchOfficeInput | UserUpsertWithWhereUniqueWithoutBranchOfficeInput[]
    createMany?: UserCreateManyBranchOfficeInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBranchOfficeInput | UserUpdateWithWhereUniqueWithoutBranchOfficeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBranchOfficeInput | UserUpdateManyWithWhereWithoutBranchOfficeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BiometricDeviceUpdateManyWithoutBranchOfficeNestedInput = {
    create?: XOR<BiometricDeviceCreateWithoutBranchOfficeInput, BiometricDeviceUncheckedCreateWithoutBranchOfficeInput> | BiometricDeviceCreateWithoutBranchOfficeInput[] | BiometricDeviceUncheckedCreateWithoutBranchOfficeInput[]
    connectOrCreate?: BiometricDeviceCreateOrConnectWithoutBranchOfficeInput | BiometricDeviceCreateOrConnectWithoutBranchOfficeInput[]
    upsert?: BiometricDeviceUpsertWithWhereUniqueWithoutBranchOfficeInput | BiometricDeviceUpsertWithWhereUniqueWithoutBranchOfficeInput[]
    createMany?: BiometricDeviceCreateManyBranchOfficeInputEnvelope
    set?: BiometricDeviceWhereUniqueInput | BiometricDeviceWhereUniqueInput[]
    disconnect?: BiometricDeviceWhereUniqueInput | BiometricDeviceWhereUniqueInput[]
    delete?: BiometricDeviceWhereUniqueInput | BiometricDeviceWhereUniqueInput[]
    connect?: BiometricDeviceWhereUniqueInput | BiometricDeviceWhereUniqueInput[]
    update?: BiometricDeviceUpdateWithWhereUniqueWithoutBranchOfficeInput | BiometricDeviceUpdateWithWhereUniqueWithoutBranchOfficeInput[]
    updateMany?: BiometricDeviceUpdateManyWithWhereWithoutBranchOfficeInput | BiometricDeviceUpdateManyWithWhereWithoutBranchOfficeInput[]
    deleteMany?: BiometricDeviceScalarWhereInput | BiometricDeviceScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBranchOfficeNestedInput = {
    create?: XOR<UserCreateWithoutBranchOfficeInput, UserUncheckedCreateWithoutBranchOfficeInput> | UserCreateWithoutBranchOfficeInput[] | UserUncheckedCreateWithoutBranchOfficeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchOfficeInput | UserCreateOrConnectWithoutBranchOfficeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBranchOfficeInput | UserUpsertWithWhereUniqueWithoutBranchOfficeInput[]
    createMany?: UserCreateManyBranchOfficeInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBranchOfficeInput | UserUpdateWithWhereUniqueWithoutBranchOfficeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBranchOfficeInput | UserUpdateManyWithWhereWithoutBranchOfficeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BiometricDeviceUncheckedUpdateManyWithoutBranchOfficeNestedInput = {
    create?: XOR<BiometricDeviceCreateWithoutBranchOfficeInput, BiometricDeviceUncheckedCreateWithoutBranchOfficeInput> | BiometricDeviceCreateWithoutBranchOfficeInput[] | BiometricDeviceUncheckedCreateWithoutBranchOfficeInput[]
    connectOrCreate?: BiometricDeviceCreateOrConnectWithoutBranchOfficeInput | BiometricDeviceCreateOrConnectWithoutBranchOfficeInput[]
    upsert?: BiometricDeviceUpsertWithWhereUniqueWithoutBranchOfficeInput | BiometricDeviceUpsertWithWhereUniqueWithoutBranchOfficeInput[]
    createMany?: BiometricDeviceCreateManyBranchOfficeInputEnvelope
    set?: BiometricDeviceWhereUniqueInput | BiometricDeviceWhereUniqueInput[]
    disconnect?: BiometricDeviceWhereUniqueInput | BiometricDeviceWhereUniqueInput[]
    delete?: BiometricDeviceWhereUniqueInput | BiometricDeviceWhereUniqueInput[]
    connect?: BiometricDeviceWhereUniqueInput | BiometricDeviceWhereUniqueInput[]
    update?: BiometricDeviceUpdateWithWhereUniqueWithoutBranchOfficeInput | BiometricDeviceUpdateWithWhereUniqueWithoutBranchOfficeInput[]
    updateMany?: BiometricDeviceUpdateManyWithWhereWithoutBranchOfficeInput | BiometricDeviceUpdateManyWithWhereWithoutBranchOfficeInput[]
    deleteMany?: BiometricDeviceScalarWhereInput | BiometricDeviceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRecordsInput = {
    create?: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsInput
    upsert?: UserUpsertWithoutRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecordsInput, UserUpdateWithoutRecordsInput>, UserUncheckedUpdateWithoutRecordsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumDeviceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusFilter<$PrismaModel> | $Enums.DeviceStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeviceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceStatusFilter<$PrismaModel>
    _max?: NestedEnumDeviceStatusFilter<$PrismaModel>
  }

  export type BiometricTemplateCreateWithoutUserInput = {
    encryptedData: string
    encryptionIv: string
    fingerIndex: number
    qualityScore: number
    createdAt?: Date | string
  }

  export type BiometricTemplateUncheckedCreateWithoutUserInput = {
    id?: number
    encryptedData: string
    encryptionIv: string
    fingerIndex: number
    qualityScore: number
    createdAt?: Date | string
  }

  export type BiometricTemplateCreateOrConnectWithoutUserInput = {
    where: BiometricTemplateWhereUniqueInput
    create: XOR<BiometricTemplateCreateWithoutUserInput, BiometricTemplateUncheckedCreateWithoutUserInput>
  }

  export type BiometricTemplateCreateManyUserInputEnvelope = {
    data: BiometricTemplateCreateManyUserInput | BiometricTemplateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceRecordCreateWithoutUserInput = {
    timestamp?: Date | string
    deviceId: number
  }

  export type AttendanceRecordUncheckedCreateWithoutUserInput = {
    id?: number
    timestamp?: Date | string
    deviceId: number
  }

  export type AttendanceRecordCreateOrConnectWithoutUserInput = {
    where: AttendanceRecordWhereUniqueInput
    create: XOR<AttendanceRecordCreateWithoutUserInput, AttendanceRecordUncheckedCreateWithoutUserInput>
  }

  export type AttendanceRecordCreateManyUserInputEnvelope = {
    data: AttendanceRecordCreateManyUserInput | AttendanceRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BranchOfficeCreateWithoutUsersInput = {
    name: string
    company: CompanyCreateNestedOneWithoutBranchesInput
    devices?: BiometricDeviceCreateNestedManyWithoutBranchOfficeInput
  }

  export type BranchOfficeUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    companyId: number
    devices?: BiometricDeviceUncheckedCreateNestedManyWithoutBranchOfficeInput
  }

  export type BranchOfficeCreateOrConnectWithoutUsersInput = {
    where: BranchOfficeWhereUniqueInput
    create: XOR<BranchOfficeCreateWithoutUsersInput, BranchOfficeUncheckedCreateWithoutUsersInput>
  }

  export type BiometricTemplateUpsertWithWhereUniqueWithoutUserInput = {
    where: BiometricTemplateWhereUniqueInput
    update: XOR<BiometricTemplateUpdateWithoutUserInput, BiometricTemplateUncheckedUpdateWithoutUserInput>
    create: XOR<BiometricTemplateCreateWithoutUserInput, BiometricTemplateUncheckedCreateWithoutUserInput>
  }

  export type BiometricTemplateUpdateWithWhereUniqueWithoutUserInput = {
    where: BiometricTemplateWhereUniqueInput
    data: XOR<BiometricTemplateUpdateWithoutUserInput, BiometricTemplateUncheckedUpdateWithoutUserInput>
  }

  export type BiometricTemplateUpdateManyWithWhereWithoutUserInput = {
    where: BiometricTemplateScalarWhereInput
    data: XOR<BiometricTemplateUpdateManyMutationInput, BiometricTemplateUncheckedUpdateManyWithoutUserInput>
  }

  export type BiometricTemplateScalarWhereInput = {
    AND?: BiometricTemplateScalarWhereInput | BiometricTemplateScalarWhereInput[]
    OR?: BiometricTemplateScalarWhereInput[]
    NOT?: BiometricTemplateScalarWhereInput | BiometricTemplateScalarWhereInput[]
    id?: IntFilter<"BiometricTemplate"> | number
    userId?: IntFilter<"BiometricTemplate"> | number
    encryptedData?: StringFilter<"BiometricTemplate"> | string
    encryptionIv?: StringFilter<"BiometricTemplate"> | string
    fingerIndex?: IntFilter<"BiometricTemplate"> | number
    qualityScore?: IntFilter<"BiometricTemplate"> | number
    createdAt?: DateTimeFilter<"BiometricTemplate"> | Date | string
  }

  export type AttendanceRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: AttendanceRecordWhereUniqueInput
    update: XOR<AttendanceRecordUpdateWithoutUserInput, AttendanceRecordUncheckedUpdateWithoutUserInput>
    create: XOR<AttendanceRecordCreateWithoutUserInput, AttendanceRecordUncheckedCreateWithoutUserInput>
  }

  export type AttendanceRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: AttendanceRecordWhereUniqueInput
    data: XOR<AttendanceRecordUpdateWithoutUserInput, AttendanceRecordUncheckedUpdateWithoutUserInput>
  }

  export type AttendanceRecordUpdateManyWithWhereWithoutUserInput = {
    where: AttendanceRecordScalarWhereInput
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type AttendanceRecordScalarWhereInput = {
    AND?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
    OR?: AttendanceRecordScalarWhereInput[]
    NOT?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
    id?: IntFilter<"AttendanceRecord"> | number
    userId?: IntFilter<"AttendanceRecord"> | number
    timestamp?: DateTimeFilter<"AttendanceRecord"> | Date | string
    deviceId?: IntFilter<"AttendanceRecord"> | number
  }

  export type BranchOfficeUpsertWithoutUsersInput = {
    update: XOR<BranchOfficeUpdateWithoutUsersInput, BranchOfficeUncheckedUpdateWithoutUsersInput>
    create: XOR<BranchOfficeCreateWithoutUsersInput, BranchOfficeUncheckedCreateWithoutUsersInput>
    where?: BranchOfficeWhereInput
  }

  export type BranchOfficeUpdateToOneWithWhereWithoutUsersInput = {
    where?: BranchOfficeWhereInput
    data: XOR<BranchOfficeUpdateWithoutUsersInput, BranchOfficeUncheckedUpdateWithoutUsersInput>
  }

  export type BranchOfficeUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    company?: CompanyUpdateOneRequiredWithoutBranchesNestedInput
    devices?: BiometricDeviceUpdateManyWithoutBranchOfficeNestedInput
  }

  export type BranchOfficeUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    devices?: BiometricDeviceUncheckedUpdateManyWithoutBranchOfficeNestedInput
  }

  export type UserCreateWithoutTemplatesInput = {
    cedula: string
    fullName: string
    email: string
    password: string
    isDeleted?: boolean
    createdAt?: Date | string
    records?: AttendanceRecordCreateNestedManyWithoutUserInput
    branchOffice: BranchOfficeCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutTemplatesInput = {
    id?: number
    cedula: string
    fullName: string
    email: string
    password: string
    isDeleted?: boolean
    createdAt?: Date | string
    branchOfficeId: number
    records?: AttendanceRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
  }

  export type UserUpsertWithoutTemplatesInput = {
    update: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
    create: XOR<UserCreateWithoutTemplatesInput, UserUncheckedCreateWithoutTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTemplatesInput, UserUncheckedUpdateWithoutTemplatesInput>
  }

  export type UserUpdateWithoutTemplatesInput = {
    cedula?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: AttendanceRecordUpdateManyWithoutUserNestedInput
    branchOffice?: BranchOfficeUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutTemplatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cedula?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branchOfficeId?: IntFieldUpdateOperationsInput | number
    records?: AttendanceRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BranchOfficeCreateWithoutDevicesInput = {
    name: string
    company: CompanyCreateNestedOneWithoutBranchesInput
    users?: UserCreateNestedManyWithoutBranchOfficeInput
  }

  export type BranchOfficeUncheckedCreateWithoutDevicesInput = {
    id?: number
    name: string
    companyId: number
    users?: UserUncheckedCreateNestedManyWithoutBranchOfficeInput
  }

  export type BranchOfficeCreateOrConnectWithoutDevicesInput = {
    where: BranchOfficeWhereUniqueInput
    create: XOR<BranchOfficeCreateWithoutDevicesInput, BranchOfficeUncheckedCreateWithoutDevicesInput>
  }

  export type BranchOfficeUpsertWithoutDevicesInput = {
    update: XOR<BranchOfficeUpdateWithoutDevicesInput, BranchOfficeUncheckedUpdateWithoutDevicesInput>
    create: XOR<BranchOfficeCreateWithoutDevicesInput, BranchOfficeUncheckedCreateWithoutDevicesInput>
    where?: BranchOfficeWhereInput
  }

  export type BranchOfficeUpdateToOneWithWhereWithoutDevicesInput = {
    where?: BranchOfficeWhereInput
    data: XOR<BranchOfficeUpdateWithoutDevicesInput, BranchOfficeUncheckedUpdateWithoutDevicesInput>
  }

  export type BranchOfficeUpdateWithoutDevicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    company?: CompanyUpdateOneRequiredWithoutBranchesNestedInput
    users?: UserUpdateManyWithoutBranchOfficeNestedInput
  }

  export type BranchOfficeUncheckedUpdateWithoutDevicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutBranchOfficeNestedInput
  }

  export type BranchOfficeCreateWithoutCompanyInput = {
    name: string
    users?: UserCreateNestedManyWithoutBranchOfficeInput
    devices?: BiometricDeviceCreateNestedManyWithoutBranchOfficeInput
  }

  export type BranchOfficeUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutBranchOfficeInput
    devices?: BiometricDeviceUncheckedCreateNestedManyWithoutBranchOfficeInput
  }

  export type BranchOfficeCreateOrConnectWithoutCompanyInput = {
    where: BranchOfficeWhereUniqueInput
    create: XOR<BranchOfficeCreateWithoutCompanyInput, BranchOfficeUncheckedCreateWithoutCompanyInput>
  }

  export type BranchOfficeCreateManyCompanyInputEnvelope = {
    data: BranchOfficeCreateManyCompanyInput | BranchOfficeCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type BranchOfficeUpsertWithWhereUniqueWithoutCompanyInput = {
    where: BranchOfficeWhereUniqueInput
    update: XOR<BranchOfficeUpdateWithoutCompanyInput, BranchOfficeUncheckedUpdateWithoutCompanyInput>
    create: XOR<BranchOfficeCreateWithoutCompanyInput, BranchOfficeUncheckedCreateWithoutCompanyInput>
  }

  export type BranchOfficeUpdateWithWhereUniqueWithoutCompanyInput = {
    where: BranchOfficeWhereUniqueInput
    data: XOR<BranchOfficeUpdateWithoutCompanyInput, BranchOfficeUncheckedUpdateWithoutCompanyInput>
  }

  export type BranchOfficeUpdateManyWithWhereWithoutCompanyInput = {
    where: BranchOfficeScalarWhereInput
    data: XOR<BranchOfficeUpdateManyMutationInput, BranchOfficeUncheckedUpdateManyWithoutCompanyInput>
  }

  export type BranchOfficeScalarWhereInput = {
    AND?: BranchOfficeScalarWhereInput | BranchOfficeScalarWhereInput[]
    OR?: BranchOfficeScalarWhereInput[]
    NOT?: BranchOfficeScalarWhereInput | BranchOfficeScalarWhereInput[]
    id?: IntFilter<"BranchOffice"> | number
    name?: StringFilter<"BranchOffice"> | string
    companyId?: IntFilter<"BranchOffice"> | number
  }

  export type CompanyCreateWithoutBranchesInput = {
    name: string
  }

  export type CompanyUncheckedCreateWithoutBranchesInput = {
    id?: number
    name: string
  }

  export type CompanyCreateOrConnectWithoutBranchesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutBranchesInput, CompanyUncheckedCreateWithoutBranchesInput>
  }

  export type UserCreateWithoutBranchOfficeInput = {
    cedula: string
    fullName: string
    email: string
    password: string
    isDeleted?: boolean
    createdAt?: Date | string
    templates?: BiometricTemplateCreateNestedManyWithoutUserInput
    records?: AttendanceRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBranchOfficeInput = {
    id?: number
    cedula: string
    fullName: string
    email: string
    password: string
    isDeleted?: boolean
    createdAt?: Date | string
    templates?: BiometricTemplateUncheckedCreateNestedManyWithoutUserInput
    records?: AttendanceRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBranchOfficeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBranchOfficeInput, UserUncheckedCreateWithoutBranchOfficeInput>
  }

  export type UserCreateManyBranchOfficeInputEnvelope = {
    data: UserCreateManyBranchOfficeInput | UserCreateManyBranchOfficeInput[]
    skipDuplicates?: boolean
  }

  export type BiometricDeviceCreateWithoutBranchOfficeInput = {
    name: string
    serial: string
    ip?: string | null
    port?: number | null
    token?: string | null
    lastSync?: Date | string | null
    status?: $Enums.DeviceStatus
  }

  export type BiometricDeviceUncheckedCreateWithoutBranchOfficeInput = {
    id?: number
    name: string
    serial: string
    ip?: string | null
    port?: number | null
    token?: string | null
    lastSync?: Date | string | null
    status?: $Enums.DeviceStatus
  }

  export type BiometricDeviceCreateOrConnectWithoutBranchOfficeInput = {
    where: BiometricDeviceWhereUniqueInput
    create: XOR<BiometricDeviceCreateWithoutBranchOfficeInput, BiometricDeviceUncheckedCreateWithoutBranchOfficeInput>
  }

  export type BiometricDeviceCreateManyBranchOfficeInputEnvelope = {
    data: BiometricDeviceCreateManyBranchOfficeInput | BiometricDeviceCreateManyBranchOfficeInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutBranchesInput = {
    update: XOR<CompanyUpdateWithoutBranchesInput, CompanyUncheckedUpdateWithoutBranchesInput>
    create: XOR<CompanyCreateWithoutBranchesInput, CompanyUncheckedCreateWithoutBranchesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutBranchesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutBranchesInput, CompanyUncheckedUpdateWithoutBranchesInput>
  }

  export type CompanyUpdateWithoutBranchesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateWithoutBranchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithWhereUniqueWithoutBranchOfficeInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBranchOfficeInput, UserUncheckedUpdateWithoutBranchOfficeInput>
    create: XOR<UserCreateWithoutBranchOfficeInput, UserUncheckedCreateWithoutBranchOfficeInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBranchOfficeInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBranchOfficeInput, UserUncheckedUpdateWithoutBranchOfficeInput>
  }

  export type UserUpdateManyWithWhereWithoutBranchOfficeInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBranchOfficeInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    cedula?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isDeleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    branchOfficeId?: IntFilter<"User"> | number
  }

  export type BiometricDeviceUpsertWithWhereUniqueWithoutBranchOfficeInput = {
    where: BiometricDeviceWhereUniqueInput
    update: XOR<BiometricDeviceUpdateWithoutBranchOfficeInput, BiometricDeviceUncheckedUpdateWithoutBranchOfficeInput>
    create: XOR<BiometricDeviceCreateWithoutBranchOfficeInput, BiometricDeviceUncheckedCreateWithoutBranchOfficeInput>
  }

  export type BiometricDeviceUpdateWithWhereUniqueWithoutBranchOfficeInput = {
    where: BiometricDeviceWhereUniqueInput
    data: XOR<BiometricDeviceUpdateWithoutBranchOfficeInput, BiometricDeviceUncheckedUpdateWithoutBranchOfficeInput>
  }

  export type BiometricDeviceUpdateManyWithWhereWithoutBranchOfficeInput = {
    where: BiometricDeviceScalarWhereInput
    data: XOR<BiometricDeviceUpdateManyMutationInput, BiometricDeviceUncheckedUpdateManyWithoutBranchOfficeInput>
  }

  export type BiometricDeviceScalarWhereInput = {
    AND?: BiometricDeviceScalarWhereInput | BiometricDeviceScalarWhereInput[]
    OR?: BiometricDeviceScalarWhereInput[]
    NOT?: BiometricDeviceScalarWhereInput | BiometricDeviceScalarWhereInput[]
    id?: IntFilter<"BiometricDevice"> | number
    name?: StringFilter<"BiometricDevice"> | string
    serial?: StringFilter<"BiometricDevice"> | string
    ip?: StringNullableFilter<"BiometricDevice"> | string | null
    port?: IntNullableFilter<"BiometricDevice"> | number | null
    token?: StringNullableFilter<"BiometricDevice"> | string | null
    lastSync?: DateTimeNullableFilter<"BiometricDevice"> | Date | string | null
    status?: EnumDeviceStatusFilter<"BiometricDevice"> | $Enums.DeviceStatus
    branchOfficeId?: IntFilter<"BiometricDevice"> | number
  }

  export type UserCreateWithoutRecordsInput = {
    cedula: string
    fullName: string
    email: string
    password: string
    isDeleted?: boolean
    createdAt?: Date | string
    templates?: BiometricTemplateCreateNestedManyWithoutUserInput
    branchOffice: BranchOfficeCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutRecordsInput = {
    id?: number
    cedula: string
    fullName: string
    email: string
    password: string
    isDeleted?: boolean
    createdAt?: Date | string
    branchOfficeId: number
    templates?: BiometricTemplateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
  }

  export type UserUpsertWithoutRecordsInput = {
    update: XOR<UserUpdateWithoutRecordsInput, UserUncheckedUpdateWithoutRecordsInput>
    create: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecordsInput, UserUncheckedUpdateWithoutRecordsInput>
  }

  export type UserUpdateWithoutRecordsInput = {
    cedula?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: BiometricTemplateUpdateManyWithoutUserNestedInput
    branchOffice?: BranchOfficeUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cedula?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branchOfficeId?: IntFieldUpdateOperationsInput | number
    templates?: BiometricTemplateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BiometricTemplateCreateManyUserInput = {
    id?: number
    encryptedData: string
    encryptionIv: string
    fingerIndex: number
    qualityScore: number
    createdAt?: Date | string
  }

  export type AttendanceRecordCreateManyUserInput = {
    id?: number
    timestamp?: Date | string
    deviceId: number
  }

  export type BiometricTemplateUpdateWithoutUserInput = {
    encryptedData?: StringFieldUpdateOperationsInput | string
    encryptionIv?: StringFieldUpdateOperationsInput | string
    fingerIndex?: IntFieldUpdateOperationsInput | number
    qualityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BiometricTemplateUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    encryptedData?: StringFieldUpdateOperationsInput | string
    encryptionIv?: StringFieldUpdateOperationsInput | string
    fingerIndex?: IntFieldUpdateOperationsInput | number
    qualityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BiometricTemplateUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    encryptedData?: StringFieldUpdateOperationsInput | string
    encryptionIv?: StringFieldUpdateOperationsInput | string
    fingerIndex?: IntFieldUpdateOperationsInput | number
    qualityScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordUpdateWithoutUserInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceRecordUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: IntFieldUpdateOperationsInput | number
  }

  export type BranchOfficeCreateManyCompanyInput = {
    id?: number
    name: string
  }

  export type BranchOfficeUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutBranchOfficeNestedInput
    devices?: BiometricDeviceUpdateManyWithoutBranchOfficeNestedInput
  }

  export type BranchOfficeUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutBranchOfficeNestedInput
    devices?: BiometricDeviceUncheckedUpdateManyWithoutBranchOfficeNestedInput
  }

  export type BranchOfficeUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyBranchOfficeInput = {
    id?: number
    cedula: string
    fullName: string
    email: string
    password: string
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type BiometricDeviceCreateManyBranchOfficeInput = {
    id?: number
    name: string
    serial: string
    ip?: string | null
    port?: number | null
    token?: string | null
    lastSync?: Date | string | null
    status?: $Enums.DeviceStatus
  }

  export type UserUpdateWithoutBranchOfficeInput = {
    cedula?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: BiometricTemplateUpdateManyWithoutUserNestedInput
    records?: AttendanceRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBranchOfficeInput = {
    id?: IntFieldUpdateOperationsInput | number
    cedula?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templates?: BiometricTemplateUncheckedUpdateManyWithoutUserNestedInput
    records?: AttendanceRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBranchOfficeInput = {
    id?: IntFieldUpdateOperationsInput | number
    cedula?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BiometricDeviceUpdateWithoutBranchOfficeInput = {
    name?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
  }

  export type BiometricDeviceUncheckedUpdateWithoutBranchOfficeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
  }

  export type BiometricDeviceUncheckedUpdateManyWithoutBranchOfficeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AthleteTypeInput
 * 
 */
export type AthleteTypeInput = $Result.DefaultSelection<Prisma.$AthleteTypeInputPayload>
/**
 * Model CollegeInput
 * 
 */
export type CollegeInput = $Result.DefaultSelection<Prisma.$CollegeInputPayload>
/**
 * Model SportInput
 * 
 */
export type SportInput = $Result.DefaultSelection<Prisma.$SportInputPayload>
/**
 * Model SocialMediaInput
 * 
 */
export type SocialMediaInput = $Result.DefaultSelection<Prisma.$SocialMediaInputPayload>
/**
 * Model CalculationInput
 * 
 */
export type CalculationInput = $Result.DefaultSelection<Prisma.$CalculationInputPayload>
/**
 * Model CalculationOutput
 * 
 */
export type CalculationOutput = $Result.DefaultSelection<Prisma.$CalculationOutputPayload>
/**
 * Model SocialMediaPlatformSpecific
 * 
 */
export type SocialMediaPlatformSpecific = $Result.DefaultSelection<Prisma.$SocialMediaPlatformSpecificPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AthleteTypeInputs
 * const athleteTypeInputs = await prisma.athleteTypeInput.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more AthleteTypeInputs
   * const athleteTypeInputs = await prisma.athleteTypeInput.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.athleteTypeInput`: Exposes CRUD operations for the **AthleteTypeInput** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AthleteTypeInputs
    * const athleteTypeInputs = await prisma.athleteTypeInput.findMany()
    * ```
    */
  get athleteTypeInput(): Prisma.AthleteTypeInputDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collegeInput`: Exposes CRUD operations for the **CollegeInput** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollegeInputs
    * const collegeInputs = await prisma.collegeInput.findMany()
    * ```
    */
  get collegeInput(): Prisma.CollegeInputDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sportInput`: Exposes CRUD operations for the **SportInput** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SportInputs
    * const sportInputs = await prisma.sportInput.findMany()
    * ```
    */
  get sportInput(): Prisma.SportInputDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialMediaInput`: Exposes CRUD operations for the **SocialMediaInput** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialMediaInputs
    * const socialMediaInputs = await prisma.socialMediaInput.findMany()
    * ```
    */
  get socialMediaInput(): Prisma.SocialMediaInputDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calculationInput`: Exposes CRUD operations for the **CalculationInput** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CalculationInputs
    * const calculationInputs = await prisma.calculationInput.findMany()
    * ```
    */
  get calculationInput(): Prisma.CalculationInputDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calculationOutput`: Exposes CRUD operations for the **CalculationOutput** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CalculationOutputs
    * const calculationOutputs = await prisma.calculationOutput.findMany()
    * ```
    */
  get calculationOutput(): Prisma.CalculationOutputDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialMediaPlatformSpecific`: Exposes CRUD operations for the **SocialMediaPlatformSpecific** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialMediaPlatformSpecifics
    * const socialMediaPlatformSpecifics = await prisma.socialMediaPlatformSpecific.findMany()
    * ```
    */
  get socialMediaPlatformSpecific(): Prisma.SocialMediaPlatformSpecificDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    AthleteTypeInput: 'AthleteTypeInput',
    CollegeInput: 'CollegeInput',
    SportInput: 'SportInput',
    SocialMediaInput: 'SocialMediaInput',
    CalculationInput: 'CalculationInput',
    CalculationOutput: 'CalculationOutput',
    SocialMediaPlatformSpecific: 'SocialMediaPlatformSpecific'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "athleteTypeInput" | "collegeInput" | "sportInput" | "socialMediaInput" | "calculationInput" | "calculationOutput" | "socialMediaPlatformSpecific"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AthleteTypeInput: {
        payload: Prisma.$AthleteTypeInputPayload<ExtArgs>
        fields: Prisma.AthleteTypeInputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AthleteTypeInputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteTypeInputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AthleteTypeInputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteTypeInputPayload>
          }
          findFirst: {
            args: Prisma.AthleteTypeInputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteTypeInputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AthleteTypeInputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteTypeInputPayload>
          }
          findMany: {
            args: Prisma.AthleteTypeInputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteTypeInputPayload>[]
          }
          create: {
            args: Prisma.AthleteTypeInputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteTypeInputPayload>
          }
          createMany: {
            args: Prisma.AthleteTypeInputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AthleteTypeInputCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteTypeInputPayload>[]
          }
          delete: {
            args: Prisma.AthleteTypeInputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteTypeInputPayload>
          }
          update: {
            args: Prisma.AthleteTypeInputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteTypeInputPayload>
          }
          deleteMany: {
            args: Prisma.AthleteTypeInputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AthleteTypeInputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AthleteTypeInputUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteTypeInputPayload>[]
          }
          upsert: {
            args: Prisma.AthleteTypeInputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AthleteTypeInputPayload>
          }
          aggregate: {
            args: Prisma.AthleteTypeInputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAthleteTypeInput>
          }
          groupBy: {
            args: Prisma.AthleteTypeInputGroupByArgs<ExtArgs>
            result: $Utils.Optional<AthleteTypeInputGroupByOutputType>[]
          }
          count: {
            args: Prisma.AthleteTypeInputCountArgs<ExtArgs>
            result: $Utils.Optional<AthleteTypeInputCountAggregateOutputType> | number
          }
        }
      }
      CollegeInput: {
        payload: Prisma.$CollegeInputPayload<ExtArgs>
        fields: Prisma.CollegeInputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollegeInputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeInputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollegeInputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeInputPayload>
          }
          findFirst: {
            args: Prisma.CollegeInputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeInputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollegeInputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeInputPayload>
          }
          findMany: {
            args: Prisma.CollegeInputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeInputPayload>[]
          }
          create: {
            args: Prisma.CollegeInputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeInputPayload>
          }
          createMany: {
            args: Prisma.CollegeInputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollegeInputCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeInputPayload>[]
          }
          delete: {
            args: Prisma.CollegeInputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeInputPayload>
          }
          update: {
            args: Prisma.CollegeInputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeInputPayload>
          }
          deleteMany: {
            args: Prisma.CollegeInputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollegeInputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollegeInputUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeInputPayload>[]
          }
          upsert: {
            args: Prisma.CollegeInputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegeInputPayload>
          }
          aggregate: {
            args: Prisma.CollegeInputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollegeInput>
          }
          groupBy: {
            args: Prisma.CollegeInputGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollegeInputGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollegeInputCountArgs<ExtArgs>
            result: $Utils.Optional<CollegeInputCountAggregateOutputType> | number
          }
        }
      }
      SportInput: {
        payload: Prisma.$SportInputPayload<ExtArgs>
        fields: Prisma.SportInputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SportInputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportInputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SportInputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportInputPayload>
          }
          findFirst: {
            args: Prisma.SportInputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportInputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SportInputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportInputPayload>
          }
          findMany: {
            args: Prisma.SportInputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportInputPayload>[]
          }
          create: {
            args: Prisma.SportInputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportInputPayload>
          }
          createMany: {
            args: Prisma.SportInputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SportInputCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportInputPayload>[]
          }
          delete: {
            args: Prisma.SportInputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportInputPayload>
          }
          update: {
            args: Prisma.SportInputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportInputPayload>
          }
          deleteMany: {
            args: Prisma.SportInputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SportInputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SportInputUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportInputPayload>[]
          }
          upsert: {
            args: Prisma.SportInputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportInputPayload>
          }
          aggregate: {
            args: Prisma.SportInputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSportInput>
          }
          groupBy: {
            args: Prisma.SportInputGroupByArgs<ExtArgs>
            result: $Utils.Optional<SportInputGroupByOutputType>[]
          }
          count: {
            args: Prisma.SportInputCountArgs<ExtArgs>
            result: $Utils.Optional<SportInputCountAggregateOutputType> | number
          }
        }
      }
      SocialMediaInput: {
        payload: Prisma.$SocialMediaInputPayload<ExtArgs>
        fields: Prisma.SocialMediaInputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialMediaInputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaInputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialMediaInputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaInputPayload>
          }
          findFirst: {
            args: Prisma.SocialMediaInputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaInputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialMediaInputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaInputPayload>
          }
          findMany: {
            args: Prisma.SocialMediaInputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaInputPayload>[]
          }
          create: {
            args: Prisma.SocialMediaInputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaInputPayload>
          }
          createMany: {
            args: Prisma.SocialMediaInputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialMediaInputCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaInputPayload>[]
          }
          delete: {
            args: Prisma.SocialMediaInputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaInputPayload>
          }
          update: {
            args: Prisma.SocialMediaInputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaInputPayload>
          }
          deleteMany: {
            args: Prisma.SocialMediaInputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialMediaInputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialMediaInputUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaInputPayload>[]
          }
          upsert: {
            args: Prisma.SocialMediaInputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaInputPayload>
          }
          aggregate: {
            args: Prisma.SocialMediaInputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialMediaInput>
          }
          groupBy: {
            args: Prisma.SocialMediaInputGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialMediaInputGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialMediaInputCountArgs<ExtArgs>
            result: $Utils.Optional<SocialMediaInputCountAggregateOutputType> | number
          }
        }
      }
      CalculationInput: {
        payload: Prisma.$CalculationInputPayload<ExtArgs>
        fields: Prisma.CalculationInputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalculationInputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationInputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalculationInputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationInputPayload>
          }
          findFirst: {
            args: Prisma.CalculationInputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationInputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalculationInputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationInputPayload>
          }
          findMany: {
            args: Prisma.CalculationInputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationInputPayload>[]
          }
          create: {
            args: Prisma.CalculationInputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationInputPayload>
          }
          createMany: {
            args: Prisma.CalculationInputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalculationInputCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationInputPayload>[]
          }
          delete: {
            args: Prisma.CalculationInputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationInputPayload>
          }
          update: {
            args: Prisma.CalculationInputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationInputPayload>
          }
          deleteMany: {
            args: Prisma.CalculationInputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalculationInputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalculationInputUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationInputPayload>[]
          }
          upsert: {
            args: Prisma.CalculationInputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationInputPayload>
          }
          aggregate: {
            args: Prisma.CalculationInputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalculationInput>
          }
          groupBy: {
            args: Prisma.CalculationInputGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalculationInputGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalculationInputCountArgs<ExtArgs>
            result: $Utils.Optional<CalculationInputCountAggregateOutputType> | number
          }
        }
      }
      CalculationOutput: {
        payload: Prisma.$CalculationOutputPayload<ExtArgs>
        fields: Prisma.CalculationOutputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalculationOutputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationOutputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalculationOutputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationOutputPayload>
          }
          findFirst: {
            args: Prisma.CalculationOutputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationOutputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalculationOutputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationOutputPayload>
          }
          findMany: {
            args: Prisma.CalculationOutputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationOutputPayload>[]
          }
          create: {
            args: Prisma.CalculationOutputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationOutputPayload>
          }
          createMany: {
            args: Prisma.CalculationOutputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalculationOutputCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationOutputPayload>[]
          }
          delete: {
            args: Prisma.CalculationOutputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationOutputPayload>
          }
          update: {
            args: Prisma.CalculationOutputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationOutputPayload>
          }
          deleteMany: {
            args: Prisma.CalculationOutputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalculationOutputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalculationOutputUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationOutputPayload>[]
          }
          upsert: {
            args: Prisma.CalculationOutputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalculationOutputPayload>
          }
          aggregate: {
            args: Prisma.CalculationOutputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalculationOutput>
          }
          groupBy: {
            args: Prisma.CalculationOutputGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalculationOutputGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalculationOutputCountArgs<ExtArgs>
            result: $Utils.Optional<CalculationOutputCountAggregateOutputType> | number
          }
        }
      }
      SocialMediaPlatformSpecific: {
        payload: Prisma.$SocialMediaPlatformSpecificPayload<ExtArgs>
        fields: Prisma.SocialMediaPlatformSpecificFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialMediaPlatformSpecificFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPlatformSpecificPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialMediaPlatformSpecificFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPlatformSpecificPayload>
          }
          findFirst: {
            args: Prisma.SocialMediaPlatformSpecificFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPlatformSpecificPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialMediaPlatformSpecificFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPlatformSpecificPayload>
          }
          findMany: {
            args: Prisma.SocialMediaPlatformSpecificFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPlatformSpecificPayload>[]
          }
          create: {
            args: Prisma.SocialMediaPlatformSpecificCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPlatformSpecificPayload>
          }
          createMany: {
            args: Prisma.SocialMediaPlatformSpecificCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialMediaPlatformSpecificCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPlatformSpecificPayload>[]
          }
          delete: {
            args: Prisma.SocialMediaPlatformSpecificDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPlatformSpecificPayload>
          }
          update: {
            args: Prisma.SocialMediaPlatformSpecificUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPlatformSpecificPayload>
          }
          deleteMany: {
            args: Prisma.SocialMediaPlatformSpecificDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialMediaPlatformSpecificUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialMediaPlatformSpecificUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPlatformSpecificPayload>[]
          }
          upsert: {
            args: Prisma.SocialMediaPlatformSpecificUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPlatformSpecificPayload>
          }
          aggregate: {
            args: Prisma.SocialMediaPlatformSpecificAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialMediaPlatformSpecific>
          }
          groupBy: {
            args: Prisma.SocialMediaPlatformSpecificGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialMediaPlatformSpecificGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialMediaPlatformSpecificCountArgs<ExtArgs>
            result: $Utils.Optional<SocialMediaPlatformSpecificCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    athleteTypeInput?: AthleteTypeInputOmit
    collegeInput?: CollegeInputOmit
    sportInput?: SportInputOmit
    socialMediaInput?: SocialMediaInputOmit
    calculationInput?: CalculationInputOmit
    calculationOutput?: CalculationOutputOmit
    socialMediaPlatformSpecific?: SocialMediaPlatformSpecificOmit
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CalculationInputCountOutputType
   */

  export type CalculationInputCountOutputType = {
    college_input: number
    social_media_input: number
  }

  export type CalculationInputCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college_input?: boolean | CalculationInputCountOutputTypeCountCollege_inputArgs
    social_media_input?: boolean | CalculationInputCountOutputTypeCountSocial_media_inputArgs
  }

  // Custom InputTypes
  /**
   * CalculationInputCountOutputType without action
   */
  export type CalculationInputCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationInputCountOutputType
     */
    select?: CalculationInputCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CalculationInputCountOutputType without action
   */
  export type CalculationInputCountOutputTypeCountCollege_inputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeInputWhereInput
  }

  /**
   * CalculationInputCountOutputType without action
   */
  export type CalculationInputCountOutputTypeCountSocial_media_inputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialMediaInputWhereInput
  }


  /**
   * Count Type CalculationOutputCountOutputType
   */

  export type CalculationOutputCountOutputType = {
    sm_platform_specific: number
  }

  export type CalculationOutputCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sm_platform_specific?: boolean | CalculationOutputCountOutputTypeCountSm_platform_specificArgs
  }

  // Custom InputTypes
  /**
   * CalculationOutputCountOutputType without action
   */
  export type CalculationOutputCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationOutputCountOutputType
     */
    select?: CalculationOutputCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CalculationOutputCountOutputType without action
   */
  export type CalculationOutputCountOutputTypeCountSm_platform_specificArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialMediaPlatformSpecificWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AthleteTypeInput
   */

  export type AggregateAthleteTypeInput = {
    _count: AthleteTypeInputCountAggregateOutputType | null
    _min: AthleteTypeInputMinAggregateOutputType | null
    _max: AthleteTypeInputMaxAggregateOutputType | null
  }

  export type AthleteTypeInputMinAggregateOutputType = {
    id: string | null
    input_id: string | null
    athlete_type: string | null
  }

  export type AthleteTypeInputMaxAggregateOutputType = {
    id: string | null
    input_id: string | null
    athlete_type: string | null
  }

  export type AthleteTypeInputCountAggregateOutputType = {
    id: number
    input_id: number
    athlete_type: number
    _all: number
  }


  export type AthleteTypeInputMinAggregateInputType = {
    id?: true
    input_id?: true
    athlete_type?: true
  }

  export type AthleteTypeInputMaxAggregateInputType = {
    id?: true
    input_id?: true
    athlete_type?: true
  }

  export type AthleteTypeInputCountAggregateInputType = {
    id?: true
    input_id?: true
    athlete_type?: true
    _all?: true
  }

  export type AthleteTypeInputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AthleteTypeInput to aggregate.
     */
    where?: AthleteTypeInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AthleteTypeInputs to fetch.
     */
    orderBy?: AthleteTypeInputOrderByWithRelationInput | AthleteTypeInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AthleteTypeInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AthleteTypeInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AthleteTypeInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AthleteTypeInputs
    **/
    _count?: true | AthleteTypeInputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AthleteTypeInputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AthleteTypeInputMaxAggregateInputType
  }

  export type GetAthleteTypeInputAggregateType<T extends AthleteTypeInputAggregateArgs> = {
        [P in keyof T & keyof AggregateAthleteTypeInput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAthleteTypeInput[P]>
      : GetScalarType<T[P], AggregateAthleteTypeInput[P]>
  }




  export type AthleteTypeInputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AthleteTypeInputWhereInput
    orderBy?: AthleteTypeInputOrderByWithAggregationInput | AthleteTypeInputOrderByWithAggregationInput[]
    by: AthleteTypeInputScalarFieldEnum[] | AthleteTypeInputScalarFieldEnum
    having?: AthleteTypeInputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AthleteTypeInputCountAggregateInputType | true
    _min?: AthleteTypeInputMinAggregateInputType
    _max?: AthleteTypeInputMaxAggregateInputType
  }

  export type AthleteTypeInputGroupByOutputType = {
    id: string
    input_id: string
    athlete_type: string
    _count: AthleteTypeInputCountAggregateOutputType | null
    _min: AthleteTypeInputMinAggregateOutputType | null
    _max: AthleteTypeInputMaxAggregateOutputType | null
  }

  type GetAthleteTypeInputGroupByPayload<T extends AthleteTypeInputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AthleteTypeInputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AthleteTypeInputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AthleteTypeInputGroupByOutputType[P]>
            : GetScalarType<T[P], AthleteTypeInputGroupByOutputType[P]>
        }
      >
    >


  export type AthleteTypeInputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    input_id?: boolean
    athlete_type?: boolean
    calculationInput?: boolean | CalculationInputDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athleteTypeInput"]>

  export type AthleteTypeInputSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    input_id?: boolean
    athlete_type?: boolean
    calculationInput?: boolean | CalculationInputDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athleteTypeInput"]>

  export type AthleteTypeInputSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    input_id?: boolean
    athlete_type?: boolean
    calculationInput?: boolean | CalculationInputDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["athleteTypeInput"]>

  export type AthleteTypeInputSelectScalar = {
    id?: boolean
    input_id?: boolean
    athlete_type?: boolean
  }

  export type AthleteTypeInputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "input_id" | "athlete_type", ExtArgs["result"]["athleteTypeInput"]>
  export type AthleteTypeInputInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calculationInput?: boolean | CalculationInputDefaultArgs<ExtArgs>
  }
  export type AthleteTypeInputIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calculationInput?: boolean | CalculationInputDefaultArgs<ExtArgs>
  }
  export type AthleteTypeInputIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calculationInput?: boolean | CalculationInputDefaultArgs<ExtArgs>
  }

  export type $AthleteTypeInputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AthleteTypeInput"
    objects: {
      calculationInput: Prisma.$CalculationInputPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      input_id: string
      athlete_type: string
    }, ExtArgs["result"]["athleteTypeInput"]>
    composites: {}
  }

  type AthleteTypeInputGetPayload<S extends boolean | null | undefined | AthleteTypeInputDefaultArgs> = $Result.GetResult<Prisma.$AthleteTypeInputPayload, S>

  type AthleteTypeInputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AthleteTypeInputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AthleteTypeInputCountAggregateInputType | true
    }

  export interface AthleteTypeInputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AthleteTypeInput'], meta: { name: 'AthleteTypeInput' } }
    /**
     * Find zero or one AthleteTypeInput that matches the filter.
     * @param {AthleteTypeInputFindUniqueArgs} args - Arguments to find a AthleteTypeInput
     * @example
     * // Get one AthleteTypeInput
     * const athleteTypeInput = await prisma.athleteTypeInput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AthleteTypeInputFindUniqueArgs>(args: SelectSubset<T, AthleteTypeInputFindUniqueArgs<ExtArgs>>): Prisma__AthleteTypeInputClient<$Result.GetResult<Prisma.$AthleteTypeInputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AthleteTypeInput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AthleteTypeInputFindUniqueOrThrowArgs} args - Arguments to find a AthleteTypeInput
     * @example
     * // Get one AthleteTypeInput
     * const athleteTypeInput = await prisma.athleteTypeInput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AthleteTypeInputFindUniqueOrThrowArgs>(args: SelectSubset<T, AthleteTypeInputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AthleteTypeInputClient<$Result.GetResult<Prisma.$AthleteTypeInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AthleteTypeInput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteTypeInputFindFirstArgs} args - Arguments to find a AthleteTypeInput
     * @example
     * // Get one AthleteTypeInput
     * const athleteTypeInput = await prisma.athleteTypeInput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AthleteTypeInputFindFirstArgs>(args?: SelectSubset<T, AthleteTypeInputFindFirstArgs<ExtArgs>>): Prisma__AthleteTypeInputClient<$Result.GetResult<Prisma.$AthleteTypeInputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AthleteTypeInput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteTypeInputFindFirstOrThrowArgs} args - Arguments to find a AthleteTypeInput
     * @example
     * // Get one AthleteTypeInput
     * const athleteTypeInput = await prisma.athleteTypeInput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AthleteTypeInputFindFirstOrThrowArgs>(args?: SelectSubset<T, AthleteTypeInputFindFirstOrThrowArgs<ExtArgs>>): Prisma__AthleteTypeInputClient<$Result.GetResult<Prisma.$AthleteTypeInputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AthleteTypeInputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteTypeInputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AthleteTypeInputs
     * const athleteTypeInputs = await prisma.athleteTypeInput.findMany()
     * 
     * // Get first 10 AthleteTypeInputs
     * const athleteTypeInputs = await prisma.athleteTypeInput.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const athleteTypeInputWithIdOnly = await prisma.athleteTypeInput.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AthleteTypeInputFindManyArgs>(args?: SelectSubset<T, AthleteTypeInputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AthleteTypeInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AthleteTypeInput.
     * @param {AthleteTypeInputCreateArgs} args - Arguments to create a AthleteTypeInput.
     * @example
     * // Create one AthleteTypeInput
     * const AthleteTypeInput = await prisma.athleteTypeInput.create({
     *   data: {
     *     // ... data to create a AthleteTypeInput
     *   }
     * })
     * 
     */
    create<T extends AthleteTypeInputCreateArgs>(args: SelectSubset<T, AthleteTypeInputCreateArgs<ExtArgs>>): Prisma__AthleteTypeInputClient<$Result.GetResult<Prisma.$AthleteTypeInputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AthleteTypeInputs.
     * @param {AthleteTypeInputCreateManyArgs} args - Arguments to create many AthleteTypeInputs.
     * @example
     * // Create many AthleteTypeInputs
     * const athleteTypeInput = await prisma.athleteTypeInput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AthleteTypeInputCreateManyArgs>(args?: SelectSubset<T, AthleteTypeInputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AthleteTypeInputs and returns the data saved in the database.
     * @param {AthleteTypeInputCreateManyAndReturnArgs} args - Arguments to create many AthleteTypeInputs.
     * @example
     * // Create many AthleteTypeInputs
     * const athleteTypeInput = await prisma.athleteTypeInput.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AthleteTypeInputs and only return the `id`
     * const athleteTypeInputWithIdOnly = await prisma.athleteTypeInput.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AthleteTypeInputCreateManyAndReturnArgs>(args?: SelectSubset<T, AthleteTypeInputCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AthleteTypeInputPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AthleteTypeInput.
     * @param {AthleteTypeInputDeleteArgs} args - Arguments to delete one AthleteTypeInput.
     * @example
     * // Delete one AthleteTypeInput
     * const AthleteTypeInput = await prisma.athleteTypeInput.delete({
     *   where: {
     *     // ... filter to delete one AthleteTypeInput
     *   }
     * })
     * 
     */
    delete<T extends AthleteTypeInputDeleteArgs>(args: SelectSubset<T, AthleteTypeInputDeleteArgs<ExtArgs>>): Prisma__AthleteTypeInputClient<$Result.GetResult<Prisma.$AthleteTypeInputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AthleteTypeInput.
     * @param {AthleteTypeInputUpdateArgs} args - Arguments to update one AthleteTypeInput.
     * @example
     * // Update one AthleteTypeInput
     * const athleteTypeInput = await prisma.athleteTypeInput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AthleteTypeInputUpdateArgs>(args: SelectSubset<T, AthleteTypeInputUpdateArgs<ExtArgs>>): Prisma__AthleteTypeInputClient<$Result.GetResult<Prisma.$AthleteTypeInputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AthleteTypeInputs.
     * @param {AthleteTypeInputDeleteManyArgs} args - Arguments to filter AthleteTypeInputs to delete.
     * @example
     * // Delete a few AthleteTypeInputs
     * const { count } = await prisma.athleteTypeInput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AthleteTypeInputDeleteManyArgs>(args?: SelectSubset<T, AthleteTypeInputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AthleteTypeInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteTypeInputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AthleteTypeInputs
     * const athleteTypeInput = await prisma.athleteTypeInput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AthleteTypeInputUpdateManyArgs>(args: SelectSubset<T, AthleteTypeInputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AthleteTypeInputs and returns the data updated in the database.
     * @param {AthleteTypeInputUpdateManyAndReturnArgs} args - Arguments to update many AthleteTypeInputs.
     * @example
     * // Update many AthleteTypeInputs
     * const athleteTypeInput = await prisma.athleteTypeInput.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AthleteTypeInputs and only return the `id`
     * const athleteTypeInputWithIdOnly = await prisma.athleteTypeInput.updateManyAndReturn({
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
    updateManyAndReturn<T extends AthleteTypeInputUpdateManyAndReturnArgs>(args: SelectSubset<T, AthleteTypeInputUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AthleteTypeInputPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AthleteTypeInput.
     * @param {AthleteTypeInputUpsertArgs} args - Arguments to update or create a AthleteTypeInput.
     * @example
     * // Update or create a AthleteTypeInput
     * const athleteTypeInput = await prisma.athleteTypeInput.upsert({
     *   create: {
     *     // ... data to create a AthleteTypeInput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AthleteTypeInput we want to update
     *   }
     * })
     */
    upsert<T extends AthleteTypeInputUpsertArgs>(args: SelectSubset<T, AthleteTypeInputUpsertArgs<ExtArgs>>): Prisma__AthleteTypeInputClient<$Result.GetResult<Prisma.$AthleteTypeInputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AthleteTypeInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteTypeInputCountArgs} args - Arguments to filter AthleteTypeInputs to count.
     * @example
     * // Count the number of AthleteTypeInputs
     * const count = await prisma.athleteTypeInput.count({
     *   where: {
     *     // ... the filter for the AthleteTypeInputs we want to count
     *   }
     * })
    **/
    count<T extends AthleteTypeInputCountArgs>(
      args?: Subset<T, AthleteTypeInputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AthleteTypeInputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AthleteTypeInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteTypeInputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AthleteTypeInputAggregateArgs>(args: Subset<T, AthleteTypeInputAggregateArgs>): Prisma.PrismaPromise<GetAthleteTypeInputAggregateType<T>>

    /**
     * Group by AthleteTypeInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AthleteTypeInputGroupByArgs} args - Group by arguments.
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
      T extends AthleteTypeInputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AthleteTypeInputGroupByArgs['orderBy'] }
        : { orderBy?: AthleteTypeInputGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AthleteTypeInputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAthleteTypeInputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AthleteTypeInput model
   */
  readonly fields: AthleteTypeInputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AthleteTypeInput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AthleteTypeInputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    calculationInput<T extends CalculationInputDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CalculationInputDefaultArgs<ExtArgs>>): Prisma__CalculationInputClient<$Result.GetResult<Prisma.$CalculationInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AthleteTypeInput model
   */
  interface AthleteTypeInputFieldRefs {
    readonly id: FieldRef<"AthleteTypeInput", 'String'>
    readonly input_id: FieldRef<"AthleteTypeInput", 'String'>
    readonly athlete_type: FieldRef<"AthleteTypeInput", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AthleteTypeInput findUnique
   */
  export type AthleteTypeInputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteTypeInput
     */
    select?: AthleteTypeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteTypeInput
     */
    omit?: AthleteTypeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteTypeInputInclude<ExtArgs> | null
    /**
     * Filter, which AthleteTypeInput to fetch.
     */
    where: AthleteTypeInputWhereUniqueInput
  }

  /**
   * AthleteTypeInput findUniqueOrThrow
   */
  export type AthleteTypeInputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteTypeInput
     */
    select?: AthleteTypeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteTypeInput
     */
    omit?: AthleteTypeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteTypeInputInclude<ExtArgs> | null
    /**
     * Filter, which AthleteTypeInput to fetch.
     */
    where: AthleteTypeInputWhereUniqueInput
  }

  /**
   * AthleteTypeInput findFirst
   */
  export type AthleteTypeInputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteTypeInput
     */
    select?: AthleteTypeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteTypeInput
     */
    omit?: AthleteTypeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteTypeInputInclude<ExtArgs> | null
    /**
     * Filter, which AthleteTypeInput to fetch.
     */
    where?: AthleteTypeInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AthleteTypeInputs to fetch.
     */
    orderBy?: AthleteTypeInputOrderByWithRelationInput | AthleteTypeInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AthleteTypeInputs.
     */
    cursor?: AthleteTypeInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AthleteTypeInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AthleteTypeInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AthleteTypeInputs.
     */
    distinct?: AthleteTypeInputScalarFieldEnum | AthleteTypeInputScalarFieldEnum[]
  }

  /**
   * AthleteTypeInput findFirstOrThrow
   */
  export type AthleteTypeInputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteTypeInput
     */
    select?: AthleteTypeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteTypeInput
     */
    omit?: AthleteTypeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteTypeInputInclude<ExtArgs> | null
    /**
     * Filter, which AthleteTypeInput to fetch.
     */
    where?: AthleteTypeInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AthleteTypeInputs to fetch.
     */
    orderBy?: AthleteTypeInputOrderByWithRelationInput | AthleteTypeInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AthleteTypeInputs.
     */
    cursor?: AthleteTypeInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AthleteTypeInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AthleteTypeInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AthleteTypeInputs.
     */
    distinct?: AthleteTypeInputScalarFieldEnum | AthleteTypeInputScalarFieldEnum[]
  }

  /**
   * AthleteTypeInput findMany
   */
  export type AthleteTypeInputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteTypeInput
     */
    select?: AthleteTypeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteTypeInput
     */
    omit?: AthleteTypeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteTypeInputInclude<ExtArgs> | null
    /**
     * Filter, which AthleteTypeInputs to fetch.
     */
    where?: AthleteTypeInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AthleteTypeInputs to fetch.
     */
    orderBy?: AthleteTypeInputOrderByWithRelationInput | AthleteTypeInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AthleteTypeInputs.
     */
    cursor?: AthleteTypeInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AthleteTypeInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AthleteTypeInputs.
     */
    skip?: number
    distinct?: AthleteTypeInputScalarFieldEnum | AthleteTypeInputScalarFieldEnum[]
  }

  /**
   * AthleteTypeInput create
   */
  export type AthleteTypeInputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteTypeInput
     */
    select?: AthleteTypeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteTypeInput
     */
    omit?: AthleteTypeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteTypeInputInclude<ExtArgs> | null
    /**
     * The data needed to create a AthleteTypeInput.
     */
    data: XOR<AthleteTypeInputCreateInput, AthleteTypeInputUncheckedCreateInput>
  }

  /**
   * AthleteTypeInput createMany
   */
  export type AthleteTypeInputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AthleteTypeInputs.
     */
    data: AthleteTypeInputCreateManyInput | AthleteTypeInputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AthleteTypeInput createManyAndReturn
   */
  export type AthleteTypeInputCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteTypeInput
     */
    select?: AthleteTypeInputSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteTypeInput
     */
    omit?: AthleteTypeInputOmit<ExtArgs> | null
    /**
     * The data used to create many AthleteTypeInputs.
     */
    data: AthleteTypeInputCreateManyInput | AthleteTypeInputCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteTypeInputIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AthleteTypeInput update
   */
  export type AthleteTypeInputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteTypeInput
     */
    select?: AthleteTypeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteTypeInput
     */
    omit?: AthleteTypeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteTypeInputInclude<ExtArgs> | null
    /**
     * The data needed to update a AthleteTypeInput.
     */
    data: XOR<AthleteTypeInputUpdateInput, AthleteTypeInputUncheckedUpdateInput>
    /**
     * Choose, which AthleteTypeInput to update.
     */
    where: AthleteTypeInputWhereUniqueInput
  }

  /**
   * AthleteTypeInput updateMany
   */
  export type AthleteTypeInputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AthleteTypeInputs.
     */
    data: XOR<AthleteTypeInputUpdateManyMutationInput, AthleteTypeInputUncheckedUpdateManyInput>
    /**
     * Filter which AthleteTypeInputs to update
     */
    where?: AthleteTypeInputWhereInput
    /**
     * Limit how many AthleteTypeInputs to update.
     */
    limit?: number
  }

  /**
   * AthleteTypeInput updateManyAndReturn
   */
  export type AthleteTypeInputUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteTypeInput
     */
    select?: AthleteTypeInputSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteTypeInput
     */
    omit?: AthleteTypeInputOmit<ExtArgs> | null
    /**
     * The data used to update AthleteTypeInputs.
     */
    data: XOR<AthleteTypeInputUpdateManyMutationInput, AthleteTypeInputUncheckedUpdateManyInput>
    /**
     * Filter which AthleteTypeInputs to update
     */
    where?: AthleteTypeInputWhereInput
    /**
     * Limit how many AthleteTypeInputs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteTypeInputIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AthleteTypeInput upsert
   */
  export type AthleteTypeInputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteTypeInput
     */
    select?: AthleteTypeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteTypeInput
     */
    omit?: AthleteTypeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteTypeInputInclude<ExtArgs> | null
    /**
     * The filter to search for the AthleteTypeInput to update in case it exists.
     */
    where: AthleteTypeInputWhereUniqueInput
    /**
     * In case the AthleteTypeInput found by the `where` argument doesn't exist, create a new AthleteTypeInput with this data.
     */
    create: XOR<AthleteTypeInputCreateInput, AthleteTypeInputUncheckedCreateInput>
    /**
     * In case the AthleteTypeInput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AthleteTypeInputUpdateInput, AthleteTypeInputUncheckedUpdateInput>
  }

  /**
   * AthleteTypeInput delete
   */
  export type AthleteTypeInputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteTypeInput
     */
    select?: AthleteTypeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteTypeInput
     */
    omit?: AthleteTypeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteTypeInputInclude<ExtArgs> | null
    /**
     * Filter which AthleteTypeInput to delete.
     */
    where: AthleteTypeInputWhereUniqueInput
  }

  /**
   * AthleteTypeInput deleteMany
   */
  export type AthleteTypeInputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AthleteTypeInputs to delete
     */
    where?: AthleteTypeInputWhereInput
    /**
     * Limit how many AthleteTypeInputs to delete.
     */
    limit?: number
  }

  /**
   * AthleteTypeInput without action
   */
  export type AthleteTypeInputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteTypeInput
     */
    select?: AthleteTypeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteTypeInput
     */
    omit?: AthleteTypeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteTypeInputInclude<ExtArgs> | null
  }


  /**
   * Model CollegeInput
   */

  export type AggregateCollegeInput = {
    _count: CollegeInputCountAggregateOutputType | null
    _min: CollegeInputMinAggregateOutputType | null
    _max: CollegeInputMaxAggregateOutputType | null
  }

  export type CollegeInputMinAggregateOutputType = {
    id: string | null
    input_id: string | null
    college: string | null
    conference: string | null
  }

  export type CollegeInputMaxAggregateOutputType = {
    id: string | null
    input_id: string | null
    college: string | null
    conference: string | null
  }

  export type CollegeInputCountAggregateOutputType = {
    id: number
    input_id: number
    college: number
    conference: number
    _all: number
  }


  export type CollegeInputMinAggregateInputType = {
    id?: true
    input_id?: true
    college?: true
    conference?: true
  }

  export type CollegeInputMaxAggregateInputType = {
    id?: true
    input_id?: true
    college?: true
    conference?: true
  }

  export type CollegeInputCountAggregateInputType = {
    id?: true
    input_id?: true
    college?: true
    conference?: true
    _all?: true
  }

  export type CollegeInputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollegeInput to aggregate.
     */
    where?: CollegeInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeInputs to fetch.
     */
    orderBy?: CollegeInputOrderByWithRelationInput | CollegeInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollegeInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollegeInputs
    **/
    _count?: true | CollegeInputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollegeInputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollegeInputMaxAggregateInputType
  }

  export type GetCollegeInputAggregateType<T extends CollegeInputAggregateArgs> = {
        [P in keyof T & keyof AggregateCollegeInput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollegeInput[P]>
      : GetScalarType<T[P], AggregateCollegeInput[P]>
  }




  export type CollegeInputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeInputWhereInput
    orderBy?: CollegeInputOrderByWithAggregationInput | CollegeInputOrderByWithAggregationInput[]
    by: CollegeInputScalarFieldEnum[] | CollegeInputScalarFieldEnum
    having?: CollegeInputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollegeInputCountAggregateInputType | true
    _min?: CollegeInputMinAggregateInputType
    _max?: CollegeInputMaxAggregateInputType
  }

  export type CollegeInputGroupByOutputType = {
    id: string
    input_id: string
    college: string
    conference: string
    _count: CollegeInputCountAggregateOutputType | null
    _min: CollegeInputMinAggregateOutputType | null
    _max: CollegeInputMaxAggregateOutputType | null
  }

  type GetCollegeInputGroupByPayload<T extends CollegeInputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollegeInputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollegeInputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollegeInputGroupByOutputType[P]>
            : GetScalarType<T[P], CollegeInputGroupByOutputType[P]>
        }
      >
    >


  export type CollegeInputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    input_id?: boolean
    college?: boolean
    conference?: boolean
    calculationInput?: boolean | CalculationInputDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collegeInput"]>

  export type CollegeInputSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    input_id?: boolean
    college?: boolean
    conference?: boolean
    calculationInput?: boolean | CalculationInputDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collegeInput"]>

  export type CollegeInputSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    input_id?: boolean
    college?: boolean
    conference?: boolean
    calculationInput?: boolean | CalculationInputDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collegeInput"]>

  export type CollegeInputSelectScalar = {
    id?: boolean
    input_id?: boolean
    college?: boolean
    conference?: boolean
  }

  export type CollegeInputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "input_id" | "college" | "conference", ExtArgs["result"]["collegeInput"]>
  export type CollegeInputInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calculationInput?: boolean | CalculationInputDefaultArgs<ExtArgs>
  }
  export type CollegeInputIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calculationInput?: boolean | CalculationInputDefaultArgs<ExtArgs>
  }
  export type CollegeInputIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calculationInput?: boolean | CalculationInputDefaultArgs<ExtArgs>
  }

  export type $CollegeInputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollegeInput"
    objects: {
      calculationInput: Prisma.$CalculationInputPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      input_id: string
      college: string
      conference: string
    }, ExtArgs["result"]["collegeInput"]>
    composites: {}
  }

  type CollegeInputGetPayload<S extends boolean | null | undefined | CollegeInputDefaultArgs> = $Result.GetResult<Prisma.$CollegeInputPayload, S>

  type CollegeInputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollegeInputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollegeInputCountAggregateInputType | true
    }

  export interface CollegeInputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollegeInput'], meta: { name: 'CollegeInput' } }
    /**
     * Find zero or one CollegeInput that matches the filter.
     * @param {CollegeInputFindUniqueArgs} args - Arguments to find a CollegeInput
     * @example
     * // Get one CollegeInput
     * const collegeInput = await prisma.collegeInput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollegeInputFindUniqueArgs>(args: SelectSubset<T, CollegeInputFindUniqueArgs<ExtArgs>>): Prisma__CollegeInputClient<$Result.GetResult<Prisma.$CollegeInputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CollegeInput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollegeInputFindUniqueOrThrowArgs} args - Arguments to find a CollegeInput
     * @example
     * // Get one CollegeInput
     * const collegeInput = await prisma.collegeInput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollegeInputFindUniqueOrThrowArgs>(args: SelectSubset<T, CollegeInputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollegeInputClient<$Result.GetResult<Prisma.$CollegeInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollegeInput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeInputFindFirstArgs} args - Arguments to find a CollegeInput
     * @example
     * // Get one CollegeInput
     * const collegeInput = await prisma.collegeInput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollegeInputFindFirstArgs>(args?: SelectSubset<T, CollegeInputFindFirstArgs<ExtArgs>>): Prisma__CollegeInputClient<$Result.GetResult<Prisma.$CollegeInputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollegeInput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeInputFindFirstOrThrowArgs} args - Arguments to find a CollegeInput
     * @example
     * // Get one CollegeInput
     * const collegeInput = await prisma.collegeInput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollegeInputFindFirstOrThrowArgs>(args?: SelectSubset<T, CollegeInputFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollegeInputClient<$Result.GetResult<Prisma.$CollegeInputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollegeInputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeInputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollegeInputs
     * const collegeInputs = await prisma.collegeInput.findMany()
     * 
     * // Get first 10 CollegeInputs
     * const collegeInputs = await prisma.collegeInput.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collegeInputWithIdOnly = await prisma.collegeInput.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollegeInputFindManyArgs>(args?: SelectSubset<T, CollegeInputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CollegeInput.
     * @param {CollegeInputCreateArgs} args - Arguments to create a CollegeInput.
     * @example
     * // Create one CollegeInput
     * const CollegeInput = await prisma.collegeInput.create({
     *   data: {
     *     // ... data to create a CollegeInput
     *   }
     * })
     * 
     */
    create<T extends CollegeInputCreateArgs>(args: SelectSubset<T, CollegeInputCreateArgs<ExtArgs>>): Prisma__CollegeInputClient<$Result.GetResult<Prisma.$CollegeInputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CollegeInputs.
     * @param {CollegeInputCreateManyArgs} args - Arguments to create many CollegeInputs.
     * @example
     * // Create many CollegeInputs
     * const collegeInput = await prisma.collegeInput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollegeInputCreateManyArgs>(args?: SelectSubset<T, CollegeInputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CollegeInputs and returns the data saved in the database.
     * @param {CollegeInputCreateManyAndReturnArgs} args - Arguments to create many CollegeInputs.
     * @example
     * // Create many CollegeInputs
     * const collegeInput = await prisma.collegeInput.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CollegeInputs and only return the `id`
     * const collegeInputWithIdOnly = await prisma.collegeInput.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollegeInputCreateManyAndReturnArgs>(args?: SelectSubset<T, CollegeInputCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeInputPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CollegeInput.
     * @param {CollegeInputDeleteArgs} args - Arguments to delete one CollegeInput.
     * @example
     * // Delete one CollegeInput
     * const CollegeInput = await prisma.collegeInput.delete({
     *   where: {
     *     // ... filter to delete one CollegeInput
     *   }
     * })
     * 
     */
    delete<T extends CollegeInputDeleteArgs>(args: SelectSubset<T, CollegeInputDeleteArgs<ExtArgs>>): Prisma__CollegeInputClient<$Result.GetResult<Prisma.$CollegeInputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CollegeInput.
     * @param {CollegeInputUpdateArgs} args - Arguments to update one CollegeInput.
     * @example
     * // Update one CollegeInput
     * const collegeInput = await prisma.collegeInput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollegeInputUpdateArgs>(args: SelectSubset<T, CollegeInputUpdateArgs<ExtArgs>>): Prisma__CollegeInputClient<$Result.GetResult<Prisma.$CollegeInputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CollegeInputs.
     * @param {CollegeInputDeleteManyArgs} args - Arguments to filter CollegeInputs to delete.
     * @example
     * // Delete a few CollegeInputs
     * const { count } = await prisma.collegeInput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollegeInputDeleteManyArgs>(args?: SelectSubset<T, CollegeInputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollegeInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeInputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollegeInputs
     * const collegeInput = await prisma.collegeInput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollegeInputUpdateManyArgs>(args: SelectSubset<T, CollegeInputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollegeInputs and returns the data updated in the database.
     * @param {CollegeInputUpdateManyAndReturnArgs} args - Arguments to update many CollegeInputs.
     * @example
     * // Update many CollegeInputs
     * const collegeInput = await prisma.collegeInput.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CollegeInputs and only return the `id`
     * const collegeInputWithIdOnly = await prisma.collegeInput.updateManyAndReturn({
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
    updateManyAndReturn<T extends CollegeInputUpdateManyAndReturnArgs>(args: SelectSubset<T, CollegeInputUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeInputPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CollegeInput.
     * @param {CollegeInputUpsertArgs} args - Arguments to update or create a CollegeInput.
     * @example
     * // Update or create a CollegeInput
     * const collegeInput = await prisma.collegeInput.upsert({
     *   create: {
     *     // ... data to create a CollegeInput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollegeInput we want to update
     *   }
     * })
     */
    upsert<T extends CollegeInputUpsertArgs>(args: SelectSubset<T, CollegeInputUpsertArgs<ExtArgs>>): Prisma__CollegeInputClient<$Result.GetResult<Prisma.$CollegeInputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CollegeInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeInputCountArgs} args - Arguments to filter CollegeInputs to count.
     * @example
     * // Count the number of CollegeInputs
     * const count = await prisma.collegeInput.count({
     *   where: {
     *     // ... the filter for the CollegeInputs we want to count
     *   }
     * })
    **/
    count<T extends CollegeInputCountArgs>(
      args?: Subset<T, CollegeInputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollegeInputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollegeInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeInputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollegeInputAggregateArgs>(args: Subset<T, CollegeInputAggregateArgs>): Prisma.PrismaPromise<GetCollegeInputAggregateType<T>>

    /**
     * Group by CollegeInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeInputGroupByArgs} args - Group by arguments.
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
      T extends CollegeInputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollegeInputGroupByArgs['orderBy'] }
        : { orderBy?: CollegeInputGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollegeInputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollegeInputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollegeInput model
   */
  readonly fields: CollegeInputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollegeInput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollegeInputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    calculationInput<T extends CalculationInputDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CalculationInputDefaultArgs<ExtArgs>>): Prisma__CalculationInputClient<$Result.GetResult<Prisma.$CalculationInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CollegeInput model
   */
  interface CollegeInputFieldRefs {
    readonly id: FieldRef<"CollegeInput", 'String'>
    readonly input_id: FieldRef<"CollegeInput", 'String'>
    readonly college: FieldRef<"CollegeInput", 'String'>
    readonly conference: FieldRef<"CollegeInput", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CollegeInput findUnique
   */
  export type CollegeInputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeInput
     */
    select?: CollegeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeInput
     */
    omit?: CollegeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInputInclude<ExtArgs> | null
    /**
     * Filter, which CollegeInput to fetch.
     */
    where: CollegeInputWhereUniqueInput
  }

  /**
   * CollegeInput findUniqueOrThrow
   */
  export type CollegeInputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeInput
     */
    select?: CollegeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeInput
     */
    omit?: CollegeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInputInclude<ExtArgs> | null
    /**
     * Filter, which CollegeInput to fetch.
     */
    where: CollegeInputWhereUniqueInput
  }

  /**
   * CollegeInput findFirst
   */
  export type CollegeInputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeInput
     */
    select?: CollegeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeInput
     */
    omit?: CollegeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInputInclude<ExtArgs> | null
    /**
     * Filter, which CollegeInput to fetch.
     */
    where?: CollegeInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeInputs to fetch.
     */
    orderBy?: CollegeInputOrderByWithRelationInput | CollegeInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollegeInputs.
     */
    cursor?: CollegeInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollegeInputs.
     */
    distinct?: CollegeInputScalarFieldEnum | CollegeInputScalarFieldEnum[]
  }

  /**
   * CollegeInput findFirstOrThrow
   */
  export type CollegeInputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeInput
     */
    select?: CollegeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeInput
     */
    omit?: CollegeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInputInclude<ExtArgs> | null
    /**
     * Filter, which CollegeInput to fetch.
     */
    where?: CollegeInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeInputs to fetch.
     */
    orderBy?: CollegeInputOrderByWithRelationInput | CollegeInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollegeInputs.
     */
    cursor?: CollegeInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollegeInputs.
     */
    distinct?: CollegeInputScalarFieldEnum | CollegeInputScalarFieldEnum[]
  }

  /**
   * CollegeInput findMany
   */
  export type CollegeInputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeInput
     */
    select?: CollegeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeInput
     */
    omit?: CollegeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInputInclude<ExtArgs> | null
    /**
     * Filter, which CollegeInputs to fetch.
     */
    where?: CollegeInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollegeInputs to fetch.
     */
    orderBy?: CollegeInputOrderByWithRelationInput | CollegeInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollegeInputs.
     */
    cursor?: CollegeInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollegeInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollegeInputs.
     */
    skip?: number
    distinct?: CollegeInputScalarFieldEnum | CollegeInputScalarFieldEnum[]
  }

  /**
   * CollegeInput create
   */
  export type CollegeInputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeInput
     */
    select?: CollegeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeInput
     */
    omit?: CollegeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInputInclude<ExtArgs> | null
    /**
     * The data needed to create a CollegeInput.
     */
    data: XOR<CollegeInputCreateInput, CollegeInputUncheckedCreateInput>
  }

  /**
   * CollegeInput createMany
   */
  export type CollegeInputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollegeInputs.
     */
    data: CollegeInputCreateManyInput | CollegeInputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CollegeInput createManyAndReturn
   */
  export type CollegeInputCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeInput
     */
    select?: CollegeInputSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeInput
     */
    omit?: CollegeInputOmit<ExtArgs> | null
    /**
     * The data used to create many CollegeInputs.
     */
    data: CollegeInputCreateManyInput | CollegeInputCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInputIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollegeInput update
   */
  export type CollegeInputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeInput
     */
    select?: CollegeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeInput
     */
    omit?: CollegeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInputInclude<ExtArgs> | null
    /**
     * The data needed to update a CollegeInput.
     */
    data: XOR<CollegeInputUpdateInput, CollegeInputUncheckedUpdateInput>
    /**
     * Choose, which CollegeInput to update.
     */
    where: CollegeInputWhereUniqueInput
  }

  /**
   * CollegeInput updateMany
   */
  export type CollegeInputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollegeInputs.
     */
    data: XOR<CollegeInputUpdateManyMutationInput, CollegeInputUncheckedUpdateManyInput>
    /**
     * Filter which CollegeInputs to update
     */
    where?: CollegeInputWhereInput
    /**
     * Limit how many CollegeInputs to update.
     */
    limit?: number
  }

  /**
   * CollegeInput updateManyAndReturn
   */
  export type CollegeInputUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeInput
     */
    select?: CollegeInputSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeInput
     */
    omit?: CollegeInputOmit<ExtArgs> | null
    /**
     * The data used to update CollegeInputs.
     */
    data: XOR<CollegeInputUpdateManyMutationInput, CollegeInputUncheckedUpdateManyInput>
    /**
     * Filter which CollegeInputs to update
     */
    where?: CollegeInputWhereInput
    /**
     * Limit how many CollegeInputs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInputIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollegeInput upsert
   */
  export type CollegeInputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeInput
     */
    select?: CollegeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeInput
     */
    omit?: CollegeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInputInclude<ExtArgs> | null
    /**
     * The filter to search for the CollegeInput to update in case it exists.
     */
    where: CollegeInputWhereUniqueInput
    /**
     * In case the CollegeInput found by the `where` argument doesn't exist, create a new CollegeInput with this data.
     */
    create: XOR<CollegeInputCreateInput, CollegeInputUncheckedCreateInput>
    /**
     * In case the CollegeInput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollegeInputUpdateInput, CollegeInputUncheckedUpdateInput>
  }

  /**
   * CollegeInput delete
   */
  export type CollegeInputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeInput
     */
    select?: CollegeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeInput
     */
    omit?: CollegeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInputInclude<ExtArgs> | null
    /**
     * Filter which CollegeInput to delete.
     */
    where: CollegeInputWhereUniqueInput
  }

  /**
   * CollegeInput deleteMany
   */
  export type CollegeInputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollegeInputs to delete
     */
    where?: CollegeInputWhereInput
    /**
     * Limit how many CollegeInputs to delete.
     */
    limit?: number
  }

  /**
   * CollegeInput without action
   */
  export type CollegeInputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeInput
     */
    select?: CollegeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeInput
     */
    omit?: CollegeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInputInclude<ExtArgs> | null
  }


  /**
   * Model SportInput
   */

  export type AggregateSportInput = {
    _count: SportInputCountAggregateOutputType | null
    _min: SportInputMinAggregateOutputType | null
    _max: SportInputMaxAggregateOutputType | null
  }

  export type SportInputMinAggregateOutputType = {
    id: string | null
    input_id: string | null
    sport: string | null
    position: string | null
  }

  export type SportInputMaxAggregateOutputType = {
    id: string | null
    input_id: string | null
    sport: string | null
    position: string | null
  }

  export type SportInputCountAggregateOutputType = {
    id: number
    input_id: number
    sport: number
    position: number
    _all: number
  }


  export type SportInputMinAggregateInputType = {
    id?: true
    input_id?: true
    sport?: true
    position?: true
  }

  export type SportInputMaxAggregateInputType = {
    id?: true
    input_id?: true
    sport?: true
    position?: true
  }

  export type SportInputCountAggregateInputType = {
    id?: true
    input_id?: true
    sport?: true
    position?: true
    _all?: true
  }

  export type SportInputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SportInput to aggregate.
     */
    where?: SportInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportInputs to fetch.
     */
    orderBy?: SportInputOrderByWithRelationInput | SportInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SportInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SportInputs
    **/
    _count?: true | SportInputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SportInputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SportInputMaxAggregateInputType
  }

  export type GetSportInputAggregateType<T extends SportInputAggregateArgs> = {
        [P in keyof T & keyof AggregateSportInput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSportInput[P]>
      : GetScalarType<T[P], AggregateSportInput[P]>
  }




  export type SportInputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportInputWhereInput
    orderBy?: SportInputOrderByWithAggregationInput | SportInputOrderByWithAggregationInput[]
    by: SportInputScalarFieldEnum[] | SportInputScalarFieldEnum
    having?: SportInputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SportInputCountAggregateInputType | true
    _min?: SportInputMinAggregateInputType
    _max?: SportInputMaxAggregateInputType
  }

  export type SportInputGroupByOutputType = {
    id: string
    input_id: string
    sport: string
    position: string | null
    _count: SportInputCountAggregateOutputType | null
    _min: SportInputMinAggregateOutputType | null
    _max: SportInputMaxAggregateOutputType | null
  }

  type GetSportInputGroupByPayload<T extends SportInputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SportInputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SportInputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SportInputGroupByOutputType[P]>
            : GetScalarType<T[P], SportInputGroupByOutputType[P]>
        }
      >
    >


  export type SportInputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    input_id?: boolean
    sport?: boolean
    position?: boolean
    calculationInput?: boolean | SportInput$calculationInputArgs<ExtArgs>
  }, ExtArgs["result"]["sportInput"]>

  export type SportInputSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    input_id?: boolean
    sport?: boolean
    position?: boolean
    calculationInput?: boolean | SportInput$calculationInputArgs<ExtArgs>
  }, ExtArgs["result"]["sportInput"]>

  export type SportInputSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    input_id?: boolean
    sport?: boolean
    position?: boolean
    calculationInput?: boolean | SportInput$calculationInputArgs<ExtArgs>
  }, ExtArgs["result"]["sportInput"]>

  export type SportInputSelectScalar = {
    id?: boolean
    input_id?: boolean
    sport?: boolean
    position?: boolean
  }

  export type SportInputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "input_id" | "sport" | "position", ExtArgs["result"]["sportInput"]>
  export type SportInputInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calculationInput?: boolean | SportInput$calculationInputArgs<ExtArgs>
  }
  export type SportInputIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calculationInput?: boolean | SportInput$calculationInputArgs<ExtArgs>
  }
  export type SportInputIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calculationInput?: boolean | SportInput$calculationInputArgs<ExtArgs>
  }

  export type $SportInputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SportInput"
    objects: {
      calculationInput: Prisma.$CalculationInputPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      input_id: string
      sport: string
      position: string | null
    }, ExtArgs["result"]["sportInput"]>
    composites: {}
  }

  type SportInputGetPayload<S extends boolean | null | undefined | SportInputDefaultArgs> = $Result.GetResult<Prisma.$SportInputPayload, S>

  type SportInputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SportInputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SportInputCountAggregateInputType | true
    }

  export interface SportInputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SportInput'], meta: { name: 'SportInput' } }
    /**
     * Find zero or one SportInput that matches the filter.
     * @param {SportInputFindUniqueArgs} args - Arguments to find a SportInput
     * @example
     * // Get one SportInput
     * const sportInput = await prisma.sportInput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SportInputFindUniqueArgs>(args: SelectSubset<T, SportInputFindUniqueArgs<ExtArgs>>): Prisma__SportInputClient<$Result.GetResult<Prisma.$SportInputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SportInput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SportInputFindUniqueOrThrowArgs} args - Arguments to find a SportInput
     * @example
     * // Get one SportInput
     * const sportInput = await prisma.sportInput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SportInputFindUniqueOrThrowArgs>(args: SelectSubset<T, SportInputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SportInputClient<$Result.GetResult<Prisma.$SportInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SportInput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportInputFindFirstArgs} args - Arguments to find a SportInput
     * @example
     * // Get one SportInput
     * const sportInput = await prisma.sportInput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SportInputFindFirstArgs>(args?: SelectSubset<T, SportInputFindFirstArgs<ExtArgs>>): Prisma__SportInputClient<$Result.GetResult<Prisma.$SportInputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SportInput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportInputFindFirstOrThrowArgs} args - Arguments to find a SportInput
     * @example
     * // Get one SportInput
     * const sportInput = await prisma.sportInput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SportInputFindFirstOrThrowArgs>(args?: SelectSubset<T, SportInputFindFirstOrThrowArgs<ExtArgs>>): Prisma__SportInputClient<$Result.GetResult<Prisma.$SportInputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SportInputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportInputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SportInputs
     * const sportInputs = await prisma.sportInput.findMany()
     * 
     * // Get first 10 SportInputs
     * const sportInputs = await prisma.sportInput.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sportInputWithIdOnly = await prisma.sportInput.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SportInputFindManyArgs>(args?: SelectSubset<T, SportInputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SportInput.
     * @param {SportInputCreateArgs} args - Arguments to create a SportInput.
     * @example
     * // Create one SportInput
     * const SportInput = await prisma.sportInput.create({
     *   data: {
     *     // ... data to create a SportInput
     *   }
     * })
     * 
     */
    create<T extends SportInputCreateArgs>(args: SelectSubset<T, SportInputCreateArgs<ExtArgs>>): Prisma__SportInputClient<$Result.GetResult<Prisma.$SportInputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SportInputs.
     * @param {SportInputCreateManyArgs} args - Arguments to create many SportInputs.
     * @example
     * // Create many SportInputs
     * const sportInput = await prisma.sportInput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SportInputCreateManyArgs>(args?: SelectSubset<T, SportInputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SportInputs and returns the data saved in the database.
     * @param {SportInputCreateManyAndReturnArgs} args - Arguments to create many SportInputs.
     * @example
     * // Create many SportInputs
     * const sportInput = await prisma.sportInput.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SportInputs and only return the `id`
     * const sportInputWithIdOnly = await prisma.sportInput.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SportInputCreateManyAndReturnArgs>(args?: SelectSubset<T, SportInputCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportInputPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SportInput.
     * @param {SportInputDeleteArgs} args - Arguments to delete one SportInput.
     * @example
     * // Delete one SportInput
     * const SportInput = await prisma.sportInput.delete({
     *   where: {
     *     // ... filter to delete one SportInput
     *   }
     * })
     * 
     */
    delete<T extends SportInputDeleteArgs>(args: SelectSubset<T, SportInputDeleteArgs<ExtArgs>>): Prisma__SportInputClient<$Result.GetResult<Prisma.$SportInputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SportInput.
     * @param {SportInputUpdateArgs} args - Arguments to update one SportInput.
     * @example
     * // Update one SportInput
     * const sportInput = await prisma.sportInput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SportInputUpdateArgs>(args: SelectSubset<T, SportInputUpdateArgs<ExtArgs>>): Prisma__SportInputClient<$Result.GetResult<Prisma.$SportInputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SportInputs.
     * @param {SportInputDeleteManyArgs} args - Arguments to filter SportInputs to delete.
     * @example
     * // Delete a few SportInputs
     * const { count } = await prisma.sportInput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SportInputDeleteManyArgs>(args?: SelectSubset<T, SportInputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SportInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportInputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SportInputs
     * const sportInput = await prisma.sportInput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SportInputUpdateManyArgs>(args: SelectSubset<T, SportInputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SportInputs and returns the data updated in the database.
     * @param {SportInputUpdateManyAndReturnArgs} args - Arguments to update many SportInputs.
     * @example
     * // Update many SportInputs
     * const sportInput = await prisma.sportInput.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SportInputs and only return the `id`
     * const sportInputWithIdOnly = await prisma.sportInput.updateManyAndReturn({
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
    updateManyAndReturn<T extends SportInputUpdateManyAndReturnArgs>(args: SelectSubset<T, SportInputUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportInputPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SportInput.
     * @param {SportInputUpsertArgs} args - Arguments to update or create a SportInput.
     * @example
     * // Update or create a SportInput
     * const sportInput = await prisma.sportInput.upsert({
     *   create: {
     *     // ... data to create a SportInput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SportInput we want to update
     *   }
     * })
     */
    upsert<T extends SportInputUpsertArgs>(args: SelectSubset<T, SportInputUpsertArgs<ExtArgs>>): Prisma__SportInputClient<$Result.GetResult<Prisma.$SportInputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SportInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportInputCountArgs} args - Arguments to filter SportInputs to count.
     * @example
     * // Count the number of SportInputs
     * const count = await prisma.sportInput.count({
     *   where: {
     *     // ... the filter for the SportInputs we want to count
     *   }
     * })
    **/
    count<T extends SportInputCountArgs>(
      args?: Subset<T, SportInputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SportInputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SportInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportInputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SportInputAggregateArgs>(args: Subset<T, SportInputAggregateArgs>): Prisma.PrismaPromise<GetSportInputAggregateType<T>>

    /**
     * Group by SportInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportInputGroupByArgs} args - Group by arguments.
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
      T extends SportInputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SportInputGroupByArgs['orderBy'] }
        : { orderBy?: SportInputGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SportInputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSportInputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SportInput model
   */
  readonly fields: SportInputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SportInput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SportInputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    calculationInput<T extends SportInput$calculationInputArgs<ExtArgs> = {}>(args?: Subset<T, SportInput$calculationInputArgs<ExtArgs>>): Prisma__CalculationInputClient<$Result.GetResult<Prisma.$CalculationInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SportInput model
   */
  interface SportInputFieldRefs {
    readonly id: FieldRef<"SportInput", 'String'>
    readonly input_id: FieldRef<"SportInput", 'String'>
    readonly sport: FieldRef<"SportInput", 'String'>
    readonly position: FieldRef<"SportInput", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SportInput findUnique
   */
  export type SportInputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportInput
     */
    select?: SportInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportInput
     */
    omit?: SportInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInputInclude<ExtArgs> | null
    /**
     * Filter, which SportInput to fetch.
     */
    where: SportInputWhereUniqueInput
  }

  /**
   * SportInput findUniqueOrThrow
   */
  export type SportInputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportInput
     */
    select?: SportInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportInput
     */
    omit?: SportInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInputInclude<ExtArgs> | null
    /**
     * Filter, which SportInput to fetch.
     */
    where: SportInputWhereUniqueInput
  }

  /**
   * SportInput findFirst
   */
  export type SportInputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportInput
     */
    select?: SportInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportInput
     */
    omit?: SportInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInputInclude<ExtArgs> | null
    /**
     * Filter, which SportInput to fetch.
     */
    where?: SportInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportInputs to fetch.
     */
    orderBy?: SportInputOrderByWithRelationInput | SportInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SportInputs.
     */
    cursor?: SportInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SportInputs.
     */
    distinct?: SportInputScalarFieldEnum | SportInputScalarFieldEnum[]
  }

  /**
   * SportInput findFirstOrThrow
   */
  export type SportInputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportInput
     */
    select?: SportInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportInput
     */
    omit?: SportInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInputInclude<ExtArgs> | null
    /**
     * Filter, which SportInput to fetch.
     */
    where?: SportInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportInputs to fetch.
     */
    orderBy?: SportInputOrderByWithRelationInput | SportInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SportInputs.
     */
    cursor?: SportInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SportInputs.
     */
    distinct?: SportInputScalarFieldEnum | SportInputScalarFieldEnum[]
  }

  /**
   * SportInput findMany
   */
  export type SportInputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportInput
     */
    select?: SportInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportInput
     */
    omit?: SportInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInputInclude<ExtArgs> | null
    /**
     * Filter, which SportInputs to fetch.
     */
    where?: SportInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportInputs to fetch.
     */
    orderBy?: SportInputOrderByWithRelationInput | SportInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SportInputs.
     */
    cursor?: SportInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportInputs.
     */
    skip?: number
    distinct?: SportInputScalarFieldEnum | SportInputScalarFieldEnum[]
  }

  /**
   * SportInput create
   */
  export type SportInputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportInput
     */
    select?: SportInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportInput
     */
    omit?: SportInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInputInclude<ExtArgs> | null
    /**
     * The data needed to create a SportInput.
     */
    data: XOR<SportInputCreateInput, SportInputUncheckedCreateInput>
  }

  /**
   * SportInput createMany
   */
  export type SportInputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SportInputs.
     */
    data: SportInputCreateManyInput | SportInputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SportInput createManyAndReturn
   */
  export type SportInputCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportInput
     */
    select?: SportInputSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SportInput
     */
    omit?: SportInputOmit<ExtArgs> | null
    /**
     * The data used to create many SportInputs.
     */
    data: SportInputCreateManyInput | SportInputCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInputIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SportInput update
   */
  export type SportInputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportInput
     */
    select?: SportInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportInput
     */
    omit?: SportInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInputInclude<ExtArgs> | null
    /**
     * The data needed to update a SportInput.
     */
    data: XOR<SportInputUpdateInput, SportInputUncheckedUpdateInput>
    /**
     * Choose, which SportInput to update.
     */
    where: SportInputWhereUniqueInput
  }

  /**
   * SportInput updateMany
   */
  export type SportInputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SportInputs.
     */
    data: XOR<SportInputUpdateManyMutationInput, SportInputUncheckedUpdateManyInput>
    /**
     * Filter which SportInputs to update
     */
    where?: SportInputWhereInput
    /**
     * Limit how many SportInputs to update.
     */
    limit?: number
  }

  /**
   * SportInput updateManyAndReturn
   */
  export type SportInputUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportInput
     */
    select?: SportInputSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SportInput
     */
    omit?: SportInputOmit<ExtArgs> | null
    /**
     * The data used to update SportInputs.
     */
    data: XOR<SportInputUpdateManyMutationInput, SportInputUncheckedUpdateManyInput>
    /**
     * Filter which SportInputs to update
     */
    where?: SportInputWhereInput
    /**
     * Limit how many SportInputs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInputIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SportInput upsert
   */
  export type SportInputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportInput
     */
    select?: SportInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportInput
     */
    omit?: SportInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInputInclude<ExtArgs> | null
    /**
     * The filter to search for the SportInput to update in case it exists.
     */
    where: SportInputWhereUniqueInput
    /**
     * In case the SportInput found by the `where` argument doesn't exist, create a new SportInput with this data.
     */
    create: XOR<SportInputCreateInput, SportInputUncheckedCreateInput>
    /**
     * In case the SportInput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SportInputUpdateInput, SportInputUncheckedUpdateInput>
  }

  /**
   * SportInput delete
   */
  export type SportInputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportInput
     */
    select?: SportInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportInput
     */
    omit?: SportInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInputInclude<ExtArgs> | null
    /**
     * Filter which SportInput to delete.
     */
    where: SportInputWhereUniqueInput
  }

  /**
   * SportInput deleteMany
   */
  export type SportInputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SportInputs to delete
     */
    where?: SportInputWhereInput
    /**
     * Limit how many SportInputs to delete.
     */
    limit?: number
  }

  /**
   * SportInput.calculationInput
   */
  export type SportInput$calculationInputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationInput
     */
    select?: CalculationInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationInput
     */
    omit?: CalculationInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInputInclude<ExtArgs> | null
    where?: CalculationInputWhereInput
  }

  /**
   * SportInput without action
   */
  export type SportInputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportInput
     */
    select?: SportInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportInput
     */
    omit?: SportInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInputInclude<ExtArgs> | null
  }


  /**
   * Model SocialMediaInput
   */

  export type AggregateSocialMediaInput = {
    _count: SocialMediaInputCountAggregateOutputType | null
    _avg: SocialMediaInputAvgAggregateOutputType | null
    _sum: SocialMediaInputSumAggregateOutputType | null
    _min: SocialMediaInputMinAggregateOutputType | null
    _max: SocialMediaInputMaxAggregateOutputType | null
  }

  export type SocialMediaInputAvgAggregateOutputType = {
    followers: number | null
  }

  export type SocialMediaInputSumAggregateOutputType = {
    followers: number | null
  }

  export type SocialMediaInputMinAggregateOutputType = {
    id: string | null
    input_id: string | null
    platform: string | null
    followers: number | null
  }

  export type SocialMediaInputMaxAggregateOutputType = {
    id: string | null
    input_id: string | null
    platform: string | null
    followers: number | null
  }

  export type SocialMediaInputCountAggregateOutputType = {
    id: number
    input_id: number
    platform: number
    followers: number
    _all: number
  }


  export type SocialMediaInputAvgAggregateInputType = {
    followers?: true
  }

  export type SocialMediaInputSumAggregateInputType = {
    followers?: true
  }

  export type SocialMediaInputMinAggregateInputType = {
    id?: true
    input_id?: true
    platform?: true
    followers?: true
  }

  export type SocialMediaInputMaxAggregateInputType = {
    id?: true
    input_id?: true
    platform?: true
    followers?: true
  }

  export type SocialMediaInputCountAggregateInputType = {
    id?: true
    input_id?: true
    platform?: true
    followers?: true
    _all?: true
  }

  export type SocialMediaInputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialMediaInput to aggregate.
     */
    where?: SocialMediaInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMediaInputs to fetch.
     */
    orderBy?: SocialMediaInputOrderByWithRelationInput | SocialMediaInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialMediaInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMediaInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMediaInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialMediaInputs
    **/
    _count?: true | SocialMediaInputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialMediaInputAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialMediaInputSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialMediaInputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialMediaInputMaxAggregateInputType
  }

  export type GetSocialMediaInputAggregateType<T extends SocialMediaInputAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialMediaInput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialMediaInput[P]>
      : GetScalarType<T[P], AggregateSocialMediaInput[P]>
  }




  export type SocialMediaInputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialMediaInputWhereInput
    orderBy?: SocialMediaInputOrderByWithAggregationInput | SocialMediaInputOrderByWithAggregationInput[]
    by: SocialMediaInputScalarFieldEnum[] | SocialMediaInputScalarFieldEnum
    having?: SocialMediaInputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialMediaInputCountAggregateInputType | true
    _avg?: SocialMediaInputAvgAggregateInputType
    _sum?: SocialMediaInputSumAggregateInputType
    _min?: SocialMediaInputMinAggregateInputType
    _max?: SocialMediaInputMaxAggregateInputType
  }

  export type SocialMediaInputGroupByOutputType = {
    id: string
    input_id: string
    platform: string
    followers: number
    _count: SocialMediaInputCountAggregateOutputType | null
    _avg: SocialMediaInputAvgAggregateOutputType | null
    _sum: SocialMediaInputSumAggregateOutputType | null
    _min: SocialMediaInputMinAggregateOutputType | null
    _max: SocialMediaInputMaxAggregateOutputType | null
  }

  type GetSocialMediaInputGroupByPayload<T extends SocialMediaInputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialMediaInputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialMediaInputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialMediaInputGroupByOutputType[P]>
            : GetScalarType<T[P], SocialMediaInputGroupByOutputType[P]>
        }
      >
    >


  export type SocialMediaInputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    input_id?: boolean
    platform?: boolean
    followers?: boolean
    calculationInput?: boolean | CalculationInputDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialMediaInput"]>

  export type SocialMediaInputSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    input_id?: boolean
    platform?: boolean
    followers?: boolean
    calculationInput?: boolean | CalculationInputDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialMediaInput"]>

  export type SocialMediaInputSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    input_id?: boolean
    platform?: boolean
    followers?: boolean
    calculationInput?: boolean | CalculationInputDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialMediaInput"]>

  export type SocialMediaInputSelectScalar = {
    id?: boolean
    input_id?: boolean
    platform?: boolean
    followers?: boolean
  }

  export type SocialMediaInputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "input_id" | "platform" | "followers", ExtArgs["result"]["socialMediaInput"]>
  export type SocialMediaInputInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calculationInput?: boolean | CalculationInputDefaultArgs<ExtArgs>
  }
  export type SocialMediaInputIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calculationInput?: boolean | CalculationInputDefaultArgs<ExtArgs>
  }
  export type SocialMediaInputIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calculationInput?: boolean | CalculationInputDefaultArgs<ExtArgs>
  }

  export type $SocialMediaInputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialMediaInput"
    objects: {
      calculationInput: Prisma.$CalculationInputPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      input_id: string
      platform: string
      followers: number
    }, ExtArgs["result"]["socialMediaInput"]>
    composites: {}
  }

  type SocialMediaInputGetPayload<S extends boolean | null | undefined | SocialMediaInputDefaultArgs> = $Result.GetResult<Prisma.$SocialMediaInputPayload, S>

  type SocialMediaInputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialMediaInputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialMediaInputCountAggregateInputType | true
    }

  export interface SocialMediaInputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialMediaInput'], meta: { name: 'SocialMediaInput' } }
    /**
     * Find zero or one SocialMediaInput that matches the filter.
     * @param {SocialMediaInputFindUniqueArgs} args - Arguments to find a SocialMediaInput
     * @example
     * // Get one SocialMediaInput
     * const socialMediaInput = await prisma.socialMediaInput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialMediaInputFindUniqueArgs>(args: SelectSubset<T, SocialMediaInputFindUniqueArgs<ExtArgs>>): Prisma__SocialMediaInputClient<$Result.GetResult<Prisma.$SocialMediaInputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialMediaInput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialMediaInputFindUniqueOrThrowArgs} args - Arguments to find a SocialMediaInput
     * @example
     * // Get one SocialMediaInput
     * const socialMediaInput = await prisma.socialMediaInput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialMediaInputFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialMediaInputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialMediaInputClient<$Result.GetResult<Prisma.$SocialMediaInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialMediaInput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaInputFindFirstArgs} args - Arguments to find a SocialMediaInput
     * @example
     * // Get one SocialMediaInput
     * const socialMediaInput = await prisma.socialMediaInput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialMediaInputFindFirstArgs>(args?: SelectSubset<T, SocialMediaInputFindFirstArgs<ExtArgs>>): Prisma__SocialMediaInputClient<$Result.GetResult<Prisma.$SocialMediaInputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialMediaInput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaInputFindFirstOrThrowArgs} args - Arguments to find a SocialMediaInput
     * @example
     * // Get one SocialMediaInput
     * const socialMediaInput = await prisma.socialMediaInput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialMediaInputFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialMediaInputFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialMediaInputClient<$Result.GetResult<Prisma.$SocialMediaInputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialMediaInputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaInputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialMediaInputs
     * const socialMediaInputs = await prisma.socialMediaInput.findMany()
     * 
     * // Get first 10 SocialMediaInputs
     * const socialMediaInputs = await prisma.socialMediaInput.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialMediaInputWithIdOnly = await prisma.socialMediaInput.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialMediaInputFindManyArgs>(args?: SelectSubset<T, SocialMediaInputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialMediaInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialMediaInput.
     * @param {SocialMediaInputCreateArgs} args - Arguments to create a SocialMediaInput.
     * @example
     * // Create one SocialMediaInput
     * const SocialMediaInput = await prisma.socialMediaInput.create({
     *   data: {
     *     // ... data to create a SocialMediaInput
     *   }
     * })
     * 
     */
    create<T extends SocialMediaInputCreateArgs>(args: SelectSubset<T, SocialMediaInputCreateArgs<ExtArgs>>): Prisma__SocialMediaInputClient<$Result.GetResult<Prisma.$SocialMediaInputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialMediaInputs.
     * @param {SocialMediaInputCreateManyArgs} args - Arguments to create many SocialMediaInputs.
     * @example
     * // Create many SocialMediaInputs
     * const socialMediaInput = await prisma.socialMediaInput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialMediaInputCreateManyArgs>(args?: SelectSubset<T, SocialMediaInputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialMediaInputs and returns the data saved in the database.
     * @param {SocialMediaInputCreateManyAndReturnArgs} args - Arguments to create many SocialMediaInputs.
     * @example
     * // Create many SocialMediaInputs
     * const socialMediaInput = await prisma.socialMediaInput.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialMediaInputs and only return the `id`
     * const socialMediaInputWithIdOnly = await prisma.socialMediaInput.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialMediaInputCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialMediaInputCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialMediaInputPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialMediaInput.
     * @param {SocialMediaInputDeleteArgs} args - Arguments to delete one SocialMediaInput.
     * @example
     * // Delete one SocialMediaInput
     * const SocialMediaInput = await prisma.socialMediaInput.delete({
     *   where: {
     *     // ... filter to delete one SocialMediaInput
     *   }
     * })
     * 
     */
    delete<T extends SocialMediaInputDeleteArgs>(args: SelectSubset<T, SocialMediaInputDeleteArgs<ExtArgs>>): Prisma__SocialMediaInputClient<$Result.GetResult<Prisma.$SocialMediaInputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialMediaInput.
     * @param {SocialMediaInputUpdateArgs} args - Arguments to update one SocialMediaInput.
     * @example
     * // Update one SocialMediaInput
     * const socialMediaInput = await prisma.socialMediaInput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialMediaInputUpdateArgs>(args: SelectSubset<T, SocialMediaInputUpdateArgs<ExtArgs>>): Prisma__SocialMediaInputClient<$Result.GetResult<Prisma.$SocialMediaInputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialMediaInputs.
     * @param {SocialMediaInputDeleteManyArgs} args - Arguments to filter SocialMediaInputs to delete.
     * @example
     * // Delete a few SocialMediaInputs
     * const { count } = await prisma.socialMediaInput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialMediaInputDeleteManyArgs>(args?: SelectSubset<T, SocialMediaInputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialMediaInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaInputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialMediaInputs
     * const socialMediaInput = await prisma.socialMediaInput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialMediaInputUpdateManyArgs>(args: SelectSubset<T, SocialMediaInputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialMediaInputs and returns the data updated in the database.
     * @param {SocialMediaInputUpdateManyAndReturnArgs} args - Arguments to update many SocialMediaInputs.
     * @example
     * // Update many SocialMediaInputs
     * const socialMediaInput = await prisma.socialMediaInput.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialMediaInputs and only return the `id`
     * const socialMediaInputWithIdOnly = await prisma.socialMediaInput.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialMediaInputUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialMediaInputUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialMediaInputPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialMediaInput.
     * @param {SocialMediaInputUpsertArgs} args - Arguments to update or create a SocialMediaInput.
     * @example
     * // Update or create a SocialMediaInput
     * const socialMediaInput = await prisma.socialMediaInput.upsert({
     *   create: {
     *     // ... data to create a SocialMediaInput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialMediaInput we want to update
     *   }
     * })
     */
    upsert<T extends SocialMediaInputUpsertArgs>(args: SelectSubset<T, SocialMediaInputUpsertArgs<ExtArgs>>): Prisma__SocialMediaInputClient<$Result.GetResult<Prisma.$SocialMediaInputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialMediaInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaInputCountArgs} args - Arguments to filter SocialMediaInputs to count.
     * @example
     * // Count the number of SocialMediaInputs
     * const count = await prisma.socialMediaInput.count({
     *   where: {
     *     // ... the filter for the SocialMediaInputs we want to count
     *   }
     * })
    **/
    count<T extends SocialMediaInputCountArgs>(
      args?: Subset<T, SocialMediaInputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialMediaInputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialMediaInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaInputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialMediaInputAggregateArgs>(args: Subset<T, SocialMediaInputAggregateArgs>): Prisma.PrismaPromise<GetSocialMediaInputAggregateType<T>>

    /**
     * Group by SocialMediaInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaInputGroupByArgs} args - Group by arguments.
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
      T extends SocialMediaInputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialMediaInputGroupByArgs['orderBy'] }
        : { orderBy?: SocialMediaInputGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialMediaInputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialMediaInputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialMediaInput model
   */
  readonly fields: SocialMediaInputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialMediaInput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialMediaInputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    calculationInput<T extends CalculationInputDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CalculationInputDefaultArgs<ExtArgs>>): Prisma__CalculationInputClient<$Result.GetResult<Prisma.$CalculationInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SocialMediaInput model
   */
  interface SocialMediaInputFieldRefs {
    readonly id: FieldRef<"SocialMediaInput", 'String'>
    readonly input_id: FieldRef<"SocialMediaInput", 'String'>
    readonly platform: FieldRef<"SocialMediaInput", 'String'>
    readonly followers: FieldRef<"SocialMediaInput", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SocialMediaInput findUnique
   */
  export type SocialMediaInputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaInput
     */
    select?: SocialMediaInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaInput
     */
    omit?: SocialMediaInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInputInclude<ExtArgs> | null
    /**
     * Filter, which SocialMediaInput to fetch.
     */
    where: SocialMediaInputWhereUniqueInput
  }

  /**
   * SocialMediaInput findUniqueOrThrow
   */
  export type SocialMediaInputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaInput
     */
    select?: SocialMediaInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaInput
     */
    omit?: SocialMediaInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInputInclude<ExtArgs> | null
    /**
     * Filter, which SocialMediaInput to fetch.
     */
    where: SocialMediaInputWhereUniqueInput
  }

  /**
   * SocialMediaInput findFirst
   */
  export type SocialMediaInputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaInput
     */
    select?: SocialMediaInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaInput
     */
    omit?: SocialMediaInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInputInclude<ExtArgs> | null
    /**
     * Filter, which SocialMediaInput to fetch.
     */
    where?: SocialMediaInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMediaInputs to fetch.
     */
    orderBy?: SocialMediaInputOrderByWithRelationInput | SocialMediaInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialMediaInputs.
     */
    cursor?: SocialMediaInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMediaInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMediaInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialMediaInputs.
     */
    distinct?: SocialMediaInputScalarFieldEnum | SocialMediaInputScalarFieldEnum[]
  }

  /**
   * SocialMediaInput findFirstOrThrow
   */
  export type SocialMediaInputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaInput
     */
    select?: SocialMediaInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaInput
     */
    omit?: SocialMediaInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInputInclude<ExtArgs> | null
    /**
     * Filter, which SocialMediaInput to fetch.
     */
    where?: SocialMediaInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMediaInputs to fetch.
     */
    orderBy?: SocialMediaInputOrderByWithRelationInput | SocialMediaInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialMediaInputs.
     */
    cursor?: SocialMediaInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMediaInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMediaInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialMediaInputs.
     */
    distinct?: SocialMediaInputScalarFieldEnum | SocialMediaInputScalarFieldEnum[]
  }

  /**
   * SocialMediaInput findMany
   */
  export type SocialMediaInputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaInput
     */
    select?: SocialMediaInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaInput
     */
    omit?: SocialMediaInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInputInclude<ExtArgs> | null
    /**
     * Filter, which SocialMediaInputs to fetch.
     */
    where?: SocialMediaInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMediaInputs to fetch.
     */
    orderBy?: SocialMediaInputOrderByWithRelationInput | SocialMediaInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialMediaInputs.
     */
    cursor?: SocialMediaInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMediaInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMediaInputs.
     */
    skip?: number
    distinct?: SocialMediaInputScalarFieldEnum | SocialMediaInputScalarFieldEnum[]
  }

  /**
   * SocialMediaInput create
   */
  export type SocialMediaInputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaInput
     */
    select?: SocialMediaInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaInput
     */
    omit?: SocialMediaInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInputInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialMediaInput.
     */
    data: XOR<SocialMediaInputCreateInput, SocialMediaInputUncheckedCreateInput>
  }

  /**
   * SocialMediaInput createMany
   */
  export type SocialMediaInputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialMediaInputs.
     */
    data: SocialMediaInputCreateManyInput | SocialMediaInputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialMediaInput createManyAndReturn
   */
  export type SocialMediaInputCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaInput
     */
    select?: SocialMediaInputSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaInput
     */
    omit?: SocialMediaInputOmit<ExtArgs> | null
    /**
     * The data used to create many SocialMediaInputs.
     */
    data: SocialMediaInputCreateManyInput | SocialMediaInputCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInputIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialMediaInput update
   */
  export type SocialMediaInputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaInput
     */
    select?: SocialMediaInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaInput
     */
    omit?: SocialMediaInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInputInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialMediaInput.
     */
    data: XOR<SocialMediaInputUpdateInput, SocialMediaInputUncheckedUpdateInput>
    /**
     * Choose, which SocialMediaInput to update.
     */
    where: SocialMediaInputWhereUniqueInput
  }

  /**
   * SocialMediaInput updateMany
   */
  export type SocialMediaInputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialMediaInputs.
     */
    data: XOR<SocialMediaInputUpdateManyMutationInput, SocialMediaInputUncheckedUpdateManyInput>
    /**
     * Filter which SocialMediaInputs to update
     */
    where?: SocialMediaInputWhereInput
    /**
     * Limit how many SocialMediaInputs to update.
     */
    limit?: number
  }

  /**
   * SocialMediaInput updateManyAndReturn
   */
  export type SocialMediaInputUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaInput
     */
    select?: SocialMediaInputSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaInput
     */
    omit?: SocialMediaInputOmit<ExtArgs> | null
    /**
     * The data used to update SocialMediaInputs.
     */
    data: XOR<SocialMediaInputUpdateManyMutationInput, SocialMediaInputUncheckedUpdateManyInput>
    /**
     * Filter which SocialMediaInputs to update
     */
    where?: SocialMediaInputWhereInput
    /**
     * Limit how many SocialMediaInputs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInputIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialMediaInput upsert
   */
  export type SocialMediaInputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaInput
     */
    select?: SocialMediaInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaInput
     */
    omit?: SocialMediaInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInputInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialMediaInput to update in case it exists.
     */
    where: SocialMediaInputWhereUniqueInput
    /**
     * In case the SocialMediaInput found by the `where` argument doesn't exist, create a new SocialMediaInput with this data.
     */
    create: XOR<SocialMediaInputCreateInput, SocialMediaInputUncheckedCreateInput>
    /**
     * In case the SocialMediaInput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialMediaInputUpdateInput, SocialMediaInputUncheckedUpdateInput>
  }

  /**
   * SocialMediaInput delete
   */
  export type SocialMediaInputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaInput
     */
    select?: SocialMediaInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaInput
     */
    omit?: SocialMediaInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInputInclude<ExtArgs> | null
    /**
     * Filter which SocialMediaInput to delete.
     */
    where: SocialMediaInputWhereUniqueInput
  }

  /**
   * SocialMediaInput deleteMany
   */
  export type SocialMediaInputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialMediaInputs to delete
     */
    where?: SocialMediaInputWhereInput
    /**
     * Limit how many SocialMediaInputs to delete.
     */
    limit?: number
  }

  /**
   * SocialMediaInput without action
   */
  export type SocialMediaInputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaInput
     */
    select?: SocialMediaInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaInput
     */
    omit?: SocialMediaInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInputInclude<ExtArgs> | null
  }


  /**
   * Model CalculationInput
   */

  export type AggregateCalculationInput = {
    _count: CalculationInputCountAggregateOutputType | null
    _min: CalculationInputMinAggregateOutputType | null
    _max: CalculationInputMaxAggregateOutputType | null
  }

  export type CalculationInputMinAggregateOutputType = {
    id: string | null
    output_id: string | null
    athlete_type_input_id: string | null
    sport_input_id: string | null
  }

  export type CalculationInputMaxAggregateOutputType = {
    id: string | null
    output_id: string | null
    athlete_type_input_id: string | null
    sport_input_id: string | null
  }

  export type CalculationInputCountAggregateOutputType = {
    id: number
    output_id: number
    athlete_type_input_id: number
    sport_input_id: number
    _all: number
  }


  export type CalculationInputMinAggregateInputType = {
    id?: true
    output_id?: true
    athlete_type_input_id?: true
    sport_input_id?: true
  }

  export type CalculationInputMaxAggregateInputType = {
    id?: true
    output_id?: true
    athlete_type_input_id?: true
    sport_input_id?: true
  }

  export type CalculationInputCountAggregateInputType = {
    id?: true
    output_id?: true
    athlete_type_input_id?: true
    sport_input_id?: true
    _all?: true
  }

  export type CalculationInputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalculationInput to aggregate.
     */
    where?: CalculationInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalculationInputs to fetch.
     */
    orderBy?: CalculationInputOrderByWithRelationInput | CalculationInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalculationInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalculationInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalculationInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CalculationInputs
    **/
    _count?: true | CalculationInputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalculationInputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalculationInputMaxAggregateInputType
  }

  export type GetCalculationInputAggregateType<T extends CalculationInputAggregateArgs> = {
        [P in keyof T & keyof AggregateCalculationInput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalculationInput[P]>
      : GetScalarType<T[P], AggregateCalculationInput[P]>
  }




  export type CalculationInputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalculationInputWhereInput
    orderBy?: CalculationInputOrderByWithAggregationInput | CalculationInputOrderByWithAggregationInput[]
    by: CalculationInputScalarFieldEnum[] | CalculationInputScalarFieldEnum
    having?: CalculationInputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalculationInputCountAggregateInputType | true
    _min?: CalculationInputMinAggregateInputType
    _max?: CalculationInputMaxAggregateInputType
  }

  export type CalculationInputGroupByOutputType = {
    id: string
    output_id: string
    athlete_type_input_id: string
    sport_input_id: string
    _count: CalculationInputCountAggregateOutputType | null
    _min: CalculationInputMinAggregateOutputType | null
    _max: CalculationInputMaxAggregateOutputType | null
  }

  type GetCalculationInputGroupByPayload<T extends CalculationInputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalculationInputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalculationInputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalculationInputGroupByOutputType[P]>
            : GetScalarType<T[P], CalculationInputGroupByOutputType[P]>
        }
      >
    >


  export type CalculationInputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    output_id?: boolean
    athlete_type_input_id?: boolean
    sport_input_id?: boolean
    output?: boolean | CalculationOutputDefaultArgs<ExtArgs>
    athleteTypeInput?: boolean | CalculationInput$athleteTypeInputArgs<ExtArgs>
    sportInput?: boolean | CalculationInput$sportInputArgs<ExtArgs>
    college_input?: boolean | CalculationInput$college_inputArgs<ExtArgs>
    social_media_input?: boolean | CalculationInput$social_media_inputArgs<ExtArgs>
    _count?: boolean | CalculationInputCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calculationInput"]>

  export type CalculationInputSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    output_id?: boolean
    athlete_type_input_id?: boolean
    sport_input_id?: boolean
    output?: boolean | CalculationOutputDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calculationInput"]>

  export type CalculationInputSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    output_id?: boolean
    athlete_type_input_id?: boolean
    sport_input_id?: boolean
    output?: boolean | CalculationOutputDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calculationInput"]>

  export type CalculationInputSelectScalar = {
    id?: boolean
    output_id?: boolean
    athlete_type_input_id?: boolean
    sport_input_id?: boolean
  }

  export type CalculationInputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "output_id" | "athlete_type_input_id" | "sport_input_id", ExtArgs["result"]["calculationInput"]>
  export type CalculationInputInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    output?: boolean | CalculationOutputDefaultArgs<ExtArgs>
    athleteTypeInput?: boolean | CalculationInput$athleteTypeInputArgs<ExtArgs>
    sportInput?: boolean | CalculationInput$sportInputArgs<ExtArgs>
    college_input?: boolean | CalculationInput$college_inputArgs<ExtArgs>
    social_media_input?: boolean | CalculationInput$social_media_inputArgs<ExtArgs>
    _count?: boolean | CalculationInputCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CalculationInputIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    output?: boolean | CalculationOutputDefaultArgs<ExtArgs>
  }
  export type CalculationInputIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    output?: boolean | CalculationOutputDefaultArgs<ExtArgs>
  }

  export type $CalculationInputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CalculationInput"
    objects: {
      output: Prisma.$CalculationOutputPayload<ExtArgs>
      athleteTypeInput: Prisma.$AthleteTypeInputPayload<ExtArgs> | null
      sportInput: Prisma.$SportInputPayload<ExtArgs> | null
      college_input: Prisma.$CollegeInputPayload<ExtArgs>[]
      social_media_input: Prisma.$SocialMediaInputPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      output_id: string
      athlete_type_input_id: string
      sport_input_id: string
    }, ExtArgs["result"]["calculationInput"]>
    composites: {}
  }

  type CalculationInputGetPayload<S extends boolean | null | undefined | CalculationInputDefaultArgs> = $Result.GetResult<Prisma.$CalculationInputPayload, S>

  type CalculationInputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalculationInputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalculationInputCountAggregateInputType | true
    }

  export interface CalculationInputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CalculationInput'], meta: { name: 'CalculationInput' } }
    /**
     * Find zero or one CalculationInput that matches the filter.
     * @param {CalculationInputFindUniqueArgs} args - Arguments to find a CalculationInput
     * @example
     * // Get one CalculationInput
     * const calculationInput = await prisma.calculationInput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalculationInputFindUniqueArgs>(args: SelectSubset<T, CalculationInputFindUniqueArgs<ExtArgs>>): Prisma__CalculationInputClient<$Result.GetResult<Prisma.$CalculationInputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CalculationInput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalculationInputFindUniqueOrThrowArgs} args - Arguments to find a CalculationInput
     * @example
     * // Get one CalculationInput
     * const calculationInput = await prisma.calculationInput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalculationInputFindUniqueOrThrowArgs>(args: SelectSubset<T, CalculationInputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalculationInputClient<$Result.GetResult<Prisma.$CalculationInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalculationInput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationInputFindFirstArgs} args - Arguments to find a CalculationInput
     * @example
     * // Get one CalculationInput
     * const calculationInput = await prisma.calculationInput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalculationInputFindFirstArgs>(args?: SelectSubset<T, CalculationInputFindFirstArgs<ExtArgs>>): Prisma__CalculationInputClient<$Result.GetResult<Prisma.$CalculationInputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalculationInput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationInputFindFirstOrThrowArgs} args - Arguments to find a CalculationInput
     * @example
     * // Get one CalculationInput
     * const calculationInput = await prisma.calculationInput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalculationInputFindFirstOrThrowArgs>(args?: SelectSubset<T, CalculationInputFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalculationInputClient<$Result.GetResult<Prisma.$CalculationInputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CalculationInputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationInputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CalculationInputs
     * const calculationInputs = await prisma.calculationInput.findMany()
     * 
     * // Get first 10 CalculationInputs
     * const calculationInputs = await prisma.calculationInput.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calculationInputWithIdOnly = await prisma.calculationInput.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalculationInputFindManyArgs>(args?: SelectSubset<T, CalculationInputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalculationInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CalculationInput.
     * @param {CalculationInputCreateArgs} args - Arguments to create a CalculationInput.
     * @example
     * // Create one CalculationInput
     * const CalculationInput = await prisma.calculationInput.create({
     *   data: {
     *     // ... data to create a CalculationInput
     *   }
     * })
     * 
     */
    create<T extends CalculationInputCreateArgs>(args: SelectSubset<T, CalculationInputCreateArgs<ExtArgs>>): Prisma__CalculationInputClient<$Result.GetResult<Prisma.$CalculationInputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CalculationInputs.
     * @param {CalculationInputCreateManyArgs} args - Arguments to create many CalculationInputs.
     * @example
     * // Create many CalculationInputs
     * const calculationInput = await prisma.calculationInput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalculationInputCreateManyArgs>(args?: SelectSubset<T, CalculationInputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CalculationInputs and returns the data saved in the database.
     * @param {CalculationInputCreateManyAndReturnArgs} args - Arguments to create many CalculationInputs.
     * @example
     * // Create many CalculationInputs
     * const calculationInput = await prisma.calculationInput.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CalculationInputs and only return the `id`
     * const calculationInputWithIdOnly = await prisma.calculationInput.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalculationInputCreateManyAndReturnArgs>(args?: SelectSubset<T, CalculationInputCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalculationInputPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CalculationInput.
     * @param {CalculationInputDeleteArgs} args - Arguments to delete one CalculationInput.
     * @example
     * // Delete one CalculationInput
     * const CalculationInput = await prisma.calculationInput.delete({
     *   where: {
     *     // ... filter to delete one CalculationInput
     *   }
     * })
     * 
     */
    delete<T extends CalculationInputDeleteArgs>(args: SelectSubset<T, CalculationInputDeleteArgs<ExtArgs>>): Prisma__CalculationInputClient<$Result.GetResult<Prisma.$CalculationInputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CalculationInput.
     * @param {CalculationInputUpdateArgs} args - Arguments to update one CalculationInput.
     * @example
     * // Update one CalculationInput
     * const calculationInput = await prisma.calculationInput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalculationInputUpdateArgs>(args: SelectSubset<T, CalculationInputUpdateArgs<ExtArgs>>): Prisma__CalculationInputClient<$Result.GetResult<Prisma.$CalculationInputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CalculationInputs.
     * @param {CalculationInputDeleteManyArgs} args - Arguments to filter CalculationInputs to delete.
     * @example
     * // Delete a few CalculationInputs
     * const { count } = await prisma.calculationInput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalculationInputDeleteManyArgs>(args?: SelectSubset<T, CalculationInputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalculationInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationInputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CalculationInputs
     * const calculationInput = await prisma.calculationInput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalculationInputUpdateManyArgs>(args: SelectSubset<T, CalculationInputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalculationInputs and returns the data updated in the database.
     * @param {CalculationInputUpdateManyAndReturnArgs} args - Arguments to update many CalculationInputs.
     * @example
     * // Update many CalculationInputs
     * const calculationInput = await prisma.calculationInput.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CalculationInputs and only return the `id`
     * const calculationInputWithIdOnly = await prisma.calculationInput.updateManyAndReturn({
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
    updateManyAndReturn<T extends CalculationInputUpdateManyAndReturnArgs>(args: SelectSubset<T, CalculationInputUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalculationInputPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CalculationInput.
     * @param {CalculationInputUpsertArgs} args - Arguments to update or create a CalculationInput.
     * @example
     * // Update or create a CalculationInput
     * const calculationInput = await prisma.calculationInput.upsert({
     *   create: {
     *     // ... data to create a CalculationInput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CalculationInput we want to update
     *   }
     * })
     */
    upsert<T extends CalculationInputUpsertArgs>(args: SelectSubset<T, CalculationInputUpsertArgs<ExtArgs>>): Prisma__CalculationInputClient<$Result.GetResult<Prisma.$CalculationInputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CalculationInputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationInputCountArgs} args - Arguments to filter CalculationInputs to count.
     * @example
     * // Count the number of CalculationInputs
     * const count = await prisma.calculationInput.count({
     *   where: {
     *     // ... the filter for the CalculationInputs we want to count
     *   }
     * })
    **/
    count<T extends CalculationInputCountArgs>(
      args?: Subset<T, CalculationInputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalculationInputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CalculationInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationInputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CalculationInputAggregateArgs>(args: Subset<T, CalculationInputAggregateArgs>): Prisma.PrismaPromise<GetCalculationInputAggregateType<T>>

    /**
     * Group by CalculationInput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationInputGroupByArgs} args - Group by arguments.
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
      T extends CalculationInputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalculationInputGroupByArgs['orderBy'] }
        : { orderBy?: CalculationInputGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CalculationInputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalculationInputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CalculationInput model
   */
  readonly fields: CalculationInputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CalculationInput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalculationInputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    output<T extends CalculationOutputDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CalculationOutputDefaultArgs<ExtArgs>>): Prisma__CalculationOutputClient<$Result.GetResult<Prisma.$CalculationOutputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    athleteTypeInput<T extends CalculationInput$athleteTypeInputArgs<ExtArgs> = {}>(args?: Subset<T, CalculationInput$athleteTypeInputArgs<ExtArgs>>): Prisma__AthleteTypeInputClient<$Result.GetResult<Prisma.$AthleteTypeInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sportInput<T extends CalculationInput$sportInputArgs<ExtArgs> = {}>(args?: Subset<T, CalculationInput$sportInputArgs<ExtArgs>>): Prisma__SportInputClient<$Result.GetResult<Prisma.$SportInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    college_input<T extends CalculationInput$college_inputArgs<ExtArgs> = {}>(args?: Subset<T, CalculationInput$college_inputArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegeInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    social_media_input<T extends CalculationInput$social_media_inputArgs<ExtArgs> = {}>(args?: Subset<T, CalculationInput$social_media_inputArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialMediaInputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CalculationInput model
   */
  interface CalculationInputFieldRefs {
    readonly id: FieldRef<"CalculationInput", 'String'>
    readonly output_id: FieldRef<"CalculationInput", 'String'>
    readonly athlete_type_input_id: FieldRef<"CalculationInput", 'String'>
    readonly sport_input_id: FieldRef<"CalculationInput", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CalculationInput findUnique
   */
  export type CalculationInputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationInput
     */
    select?: CalculationInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationInput
     */
    omit?: CalculationInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInputInclude<ExtArgs> | null
    /**
     * Filter, which CalculationInput to fetch.
     */
    where: CalculationInputWhereUniqueInput
  }

  /**
   * CalculationInput findUniqueOrThrow
   */
  export type CalculationInputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationInput
     */
    select?: CalculationInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationInput
     */
    omit?: CalculationInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInputInclude<ExtArgs> | null
    /**
     * Filter, which CalculationInput to fetch.
     */
    where: CalculationInputWhereUniqueInput
  }

  /**
   * CalculationInput findFirst
   */
  export type CalculationInputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationInput
     */
    select?: CalculationInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationInput
     */
    omit?: CalculationInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInputInclude<ExtArgs> | null
    /**
     * Filter, which CalculationInput to fetch.
     */
    where?: CalculationInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalculationInputs to fetch.
     */
    orderBy?: CalculationInputOrderByWithRelationInput | CalculationInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalculationInputs.
     */
    cursor?: CalculationInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalculationInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalculationInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalculationInputs.
     */
    distinct?: CalculationInputScalarFieldEnum | CalculationInputScalarFieldEnum[]
  }

  /**
   * CalculationInput findFirstOrThrow
   */
  export type CalculationInputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationInput
     */
    select?: CalculationInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationInput
     */
    omit?: CalculationInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInputInclude<ExtArgs> | null
    /**
     * Filter, which CalculationInput to fetch.
     */
    where?: CalculationInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalculationInputs to fetch.
     */
    orderBy?: CalculationInputOrderByWithRelationInput | CalculationInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalculationInputs.
     */
    cursor?: CalculationInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalculationInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalculationInputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalculationInputs.
     */
    distinct?: CalculationInputScalarFieldEnum | CalculationInputScalarFieldEnum[]
  }

  /**
   * CalculationInput findMany
   */
  export type CalculationInputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationInput
     */
    select?: CalculationInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationInput
     */
    omit?: CalculationInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInputInclude<ExtArgs> | null
    /**
     * Filter, which CalculationInputs to fetch.
     */
    where?: CalculationInputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalculationInputs to fetch.
     */
    orderBy?: CalculationInputOrderByWithRelationInput | CalculationInputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CalculationInputs.
     */
    cursor?: CalculationInputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalculationInputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalculationInputs.
     */
    skip?: number
    distinct?: CalculationInputScalarFieldEnum | CalculationInputScalarFieldEnum[]
  }

  /**
   * CalculationInput create
   */
  export type CalculationInputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationInput
     */
    select?: CalculationInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationInput
     */
    omit?: CalculationInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInputInclude<ExtArgs> | null
    /**
     * The data needed to create a CalculationInput.
     */
    data: XOR<CalculationInputCreateInput, CalculationInputUncheckedCreateInput>
  }

  /**
   * CalculationInput createMany
   */
  export type CalculationInputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CalculationInputs.
     */
    data: CalculationInputCreateManyInput | CalculationInputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CalculationInput createManyAndReturn
   */
  export type CalculationInputCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationInput
     */
    select?: CalculationInputSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationInput
     */
    omit?: CalculationInputOmit<ExtArgs> | null
    /**
     * The data used to create many CalculationInputs.
     */
    data: CalculationInputCreateManyInput | CalculationInputCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInputIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CalculationInput update
   */
  export type CalculationInputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationInput
     */
    select?: CalculationInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationInput
     */
    omit?: CalculationInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInputInclude<ExtArgs> | null
    /**
     * The data needed to update a CalculationInput.
     */
    data: XOR<CalculationInputUpdateInput, CalculationInputUncheckedUpdateInput>
    /**
     * Choose, which CalculationInput to update.
     */
    where: CalculationInputWhereUniqueInput
  }

  /**
   * CalculationInput updateMany
   */
  export type CalculationInputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CalculationInputs.
     */
    data: XOR<CalculationInputUpdateManyMutationInput, CalculationInputUncheckedUpdateManyInput>
    /**
     * Filter which CalculationInputs to update
     */
    where?: CalculationInputWhereInput
    /**
     * Limit how many CalculationInputs to update.
     */
    limit?: number
  }

  /**
   * CalculationInput updateManyAndReturn
   */
  export type CalculationInputUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationInput
     */
    select?: CalculationInputSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationInput
     */
    omit?: CalculationInputOmit<ExtArgs> | null
    /**
     * The data used to update CalculationInputs.
     */
    data: XOR<CalculationInputUpdateManyMutationInput, CalculationInputUncheckedUpdateManyInput>
    /**
     * Filter which CalculationInputs to update
     */
    where?: CalculationInputWhereInput
    /**
     * Limit how many CalculationInputs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInputIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CalculationInput upsert
   */
  export type CalculationInputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationInput
     */
    select?: CalculationInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationInput
     */
    omit?: CalculationInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInputInclude<ExtArgs> | null
    /**
     * The filter to search for the CalculationInput to update in case it exists.
     */
    where: CalculationInputWhereUniqueInput
    /**
     * In case the CalculationInput found by the `where` argument doesn't exist, create a new CalculationInput with this data.
     */
    create: XOR<CalculationInputCreateInput, CalculationInputUncheckedCreateInput>
    /**
     * In case the CalculationInput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalculationInputUpdateInput, CalculationInputUncheckedUpdateInput>
  }

  /**
   * CalculationInput delete
   */
  export type CalculationInputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationInput
     */
    select?: CalculationInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationInput
     */
    omit?: CalculationInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInputInclude<ExtArgs> | null
    /**
     * Filter which CalculationInput to delete.
     */
    where: CalculationInputWhereUniqueInput
  }

  /**
   * CalculationInput deleteMany
   */
  export type CalculationInputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalculationInputs to delete
     */
    where?: CalculationInputWhereInput
    /**
     * Limit how many CalculationInputs to delete.
     */
    limit?: number
  }

  /**
   * CalculationInput.athleteTypeInput
   */
  export type CalculationInput$athleteTypeInputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AthleteTypeInput
     */
    select?: AthleteTypeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AthleteTypeInput
     */
    omit?: AthleteTypeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AthleteTypeInputInclude<ExtArgs> | null
    where?: AthleteTypeInputWhereInput
  }

  /**
   * CalculationInput.sportInput
   */
  export type CalculationInput$sportInputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportInput
     */
    select?: SportInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportInput
     */
    omit?: SportInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInputInclude<ExtArgs> | null
    where?: SportInputWhereInput
  }

  /**
   * CalculationInput.college_input
   */
  export type CalculationInput$college_inputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeInput
     */
    select?: CollegeInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollegeInput
     */
    omit?: CollegeInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInputInclude<ExtArgs> | null
    where?: CollegeInputWhereInput
    orderBy?: CollegeInputOrderByWithRelationInput | CollegeInputOrderByWithRelationInput[]
    cursor?: CollegeInputWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollegeInputScalarFieldEnum | CollegeInputScalarFieldEnum[]
  }

  /**
   * CalculationInput.social_media_input
   */
  export type CalculationInput$social_media_inputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaInput
     */
    select?: SocialMediaInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaInput
     */
    omit?: SocialMediaInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInputInclude<ExtArgs> | null
    where?: SocialMediaInputWhereInput
    orderBy?: SocialMediaInputOrderByWithRelationInput | SocialMediaInputOrderByWithRelationInput[]
    cursor?: SocialMediaInputWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialMediaInputScalarFieldEnum | SocialMediaInputScalarFieldEnum[]
  }

  /**
   * CalculationInput without action
   */
  export type CalculationInputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationInput
     */
    select?: CalculationInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationInput
     */
    omit?: CalculationInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInputInclude<ExtArgs> | null
  }


  /**
   * Model CalculationOutput
   */

  export type AggregateCalculationOutput = {
    _count: CalculationOutputCountAggregateOutputType | null
    _avg: CalculationOutputAvgAggregateOutputType | null
    _sum: CalculationOutputSumAggregateOutputType | null
    _min: CalculationOutputMinAggregateOutputType | null
    _max: CalculationOutputMaxAggregateOutputType | null
  }

  export type CalculationOutputAvgAggregateOutputType = {
    img_low: number | null
    img_high: number | null
    vid_low: number | null
    vid_high: number | null
    ncv_low: number | null
    ncv_high: number | null
  }

  export type CalculationOutputSumAggregateOutputType = {
    img_low: number | null
    img_high: number | null
    vid_low: number | null
    vid_high: number | null
    ncv_low: number | null
    ncv_high: number | null
  }

  export type CalculationOutputMinAggregateOutputType = {
    id: string | null
    college_name: string | null
    img_low: number | null
    img_high: number | null
    vid_low: number | null
    vid_high: number | null
    ncv_low: number | null
    ncv_high: number | null
  }

  export type CalculationOutputMaxAggregateOutputType = {
    id: string | null
    college_name: string | null
    img_low: number | null
    img_high: number | null
    vid_low: number | null
    vid_high: number | null
    ncv_low: number | null
    ncv_high: number | null
  }

  export type CalculationOutputCountAggregateOutputType = {
    id: number
    college_name: number
    img_low: number
    img_high: number
    vid_low: number
    vid_high: number
    ncv_low: number
    ncv_high: number
    _all: number
  }


  export type CalculationOutputAvgAggregateInputType = {
    img_low?: true
    img_high?: true
    vid_low?: true
    vid_high?: true
    ncv_low?: true
    ncv_high?: true
  }

  export type CalculationOutputSumAggregateInputType = {
    img_low?: true
    img_high?: true
    vid_low?: true
    vid_high?: true
    ncv_low?: true
    ncv_high?: true
  }

  export type CalculationOutputMinAggregateInputType = {
    id?: true
    college_name?: true
    img_low?: true
    img_high?: true
    vid_low?: true
    vid_high?: true
    ncv_low?: true
    ncv_high?: true
  }

  export type CalculationOutputMaxAggregateInputType = {
    id?: true
    college_name?: true
    img_low?: true
    img_high?: true
    vid_low?: true
    vid_high?: true
    ncv_low?: true
    ncv_high?: true
  }

  export type CalculationOutputCountAggregateInputType = {
    id?: true
    college_name?: true
    img_low?: true
    img_high?: true
    vid_low?: true
    vid_high?: true
    ncv_low?: true
    ncv_high?: true
    _all?: true
  }

  export type CalculationOutputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalculationOutput to aggregate.
     */
    where?: CalculationOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalculationOutputs to fetch.
     */
    orderBy?: CalculationOutputOrderByWithRelationInput | CalculationOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalculationOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalculationOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalculationOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CalculationOutputs
    **/
    _count?: true | CalculationOutputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalculationOutputAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalculationOutputSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalculationOutputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalculationOutputMaxAggregateInputType
  }

  export type GetCalculationOutputAggregateType<T extends CalculationOutputAggregateArgs> = {
        [P in keyof T & keyof AggregateCalculationOutput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalculationOutput[P]>
      : GetScalarType<T[P], AggregateCalculationOutput[P]>
  }




  export type CalculationOutputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalculationOutputWhereInput
    orderBy?: CalculationOutputOrderByWithAggregationInput | CalculationOutputOrderByWithAggregationInput[]
    by: CalculationOutputScalarFieldEnum[] | CalculationOutputScalarFieldEnum
    having?: CalculationOutputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalculationOutputCountAggregateInputType | true
    _avg?: CalculationOutputAvgAggregateInputType
    _sum?: CalculationOutputSumAggregateInputType
    _min?: CalculationOutputMinAggregateInputType
    _max?: CalculationOutputMaxAggregateInputType
  }

  export type CalculationOutputGroupByOutputType = {
    id: string
    college_name: string
    img_low: number
    img_high: number
    vid_low: number
    vid_high: number
    ncv_low: number
    ncv_high: number
    _count: CalculationOutputCountAggregateOutputType | null
    _avg: CalculationOutputAvgAggregateOutputType | null
    _sum: CalculationOutputSumAggregateOutputType | null
    _min: CalculationOutputMinAggregateOutputType | null
    _max: CalculationOutputMaxAggregateOutputType | null
  }

  type GetCalculationOutputGroupByPayload<T extends CalculationOutputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalculationOutputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalculationOutputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalculationOutputGroupByOutputType[P]>
            : GetScalarType<T[P], CalculationOutputGroupByOutputType[P]>
        }
      >
    >


  export type CalculationOutputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    college_name?: boolean
    img_low?: boolean
    img_high?: boolean
    vid_low?: boolean
    vid_high?: boolean
    ncv_low?: boolean
    ncv_high?: boolean
    sm_platform_specific?: boolean | CalculationOutput$sm_platform_specificArgs<ExtArgs>
    calculationInput?: boolean | CalculationOutput$calculationInputArgs<ExtArgs>
    _count?: boolean | CalculationOutputCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calculationOutput"]>

  export type CalculationOutputSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    college_name?: boolean
    img_low?: boolean
    img_high?: boolean
    vid_low?: boolean
    vid_high?: boolean
    ncv_low?: boolean
    ncv_high?: boolean
  }, ExtArgs["result"]["calculationOutput"]>

  export type CalculationOutputSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    college_name?: boolean
    img_low?: boolean
    img_high?: boolean
    vid_low?: boolean
    vid_high?: boolean
    ncv_low?: boolean
    ncv_high?: boolean
  }, ExtArgs["result"]["calculationOutput"]>

  export type CalculationOutputSelectScalar = {
    id?: boolean
    college_name?: boolean
    img_low?: boolean
    img_high?: boolean
    vid_low?: boolean
    vid_high?: boolean
    ncv_low?: boolean
    ncv_high?: boolean
  }

  export type CalculationOutputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "college_name" | "img_low" | "img_high" | "vid_low" | "vid_high" | "ncv_low" | "ncv_high", ExtArgs["result"]["calculationOutput"]>
  export type CalculationOutputInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sm_platform_specific?: boolean | CalculationOutput$sm_platform_specificArgs<ExtArgs>
    calculationInput?: boolean | CalculationOutput$calculationInputArgs<ExtArgs>
    _count?: boolean | CalculationOutputCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CalculationOutputIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CalculationOutputIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CalculationOutputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CalculationOutput"
    objects: {
      sm_platform_specific: Prisma.$SocialMediaPlatformSpecificPayload<ExtArgs>[]
      calculationInput: Prisma.$CalculationInputPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      college_name: string
      img_low: number
      img_high: number
      vid_low: number
      vid_high: number
      ncv_low: number
      ncv_high: number
    }, ExtArgs["result"]["calculationOutput"]>
    composites: {}
  }

  type CalculationOutputGetPayload<S extends boolean | null | undefined | CalculationOutputDefaultArgs> = $Result.GetResult<Prisma.$CalculationOutputPayload, S>

  type CalculationOutputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalculationOutputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalculationOutputCountAggregateInputType | true
    }

  export interface CalculationOutputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CalculationOutput'], meta: { name: 'CalculationOutput' } }
    /**
     * Find zero or one CalculationOutput that matches the filter.
     * @param {CalculationOutputFindUniqueArgs} args - Arguments to find a CalculationOutput
     * @example
     * // Get one CalculationOutput
     * const calculationOutput = await prisma.calculationOutput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalculationOutputFindUniqueArgs>(args: SelectSubset<T, CalculationOutputFindUniqueArgs<ExtArgs>>): Prisma__CalculationOutputClient<$Result.GetResult<Prisma.$CalculationOutputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CalculationOutput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalculationOutputFindUniqueOrThrowArgs} args - Arguments to find a CalculationOutput
     * @example
     * // Get one CalculationOutput
     * const calculationOutput = await prisma.calculationOutput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalculationOutputFindUniqueOrThrowArgs>(args: SelectSubset<T, CalculationOutputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalculationOutputClient<$Result.GetResult<Prisma.$CalculationOutputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalculationOutput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationOutputFindFirstArgs} args - Arguments to find a CalculationOutput
     * @example
     * // Get one CalculationOutput
     * const calculationOutput = await prisma.calculationOutput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalculationOutputFindFirstArgs>(args?: SelectSubset<T, CalculationOutputFindFirstArgs<ExtArgs>>): Prisma__CalculationOutputClient<$Result.GetResult<Prisma.$CalculationOutputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalculationOutput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationOutputFindFirstOrThrowArgs} args - Arguments to find a CalculationOutput
     * @example
     * // Get one CalculationOutput
     * const calculationOutput = await prisma.calculationOutput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalculationOutputFindFirstOrThrowArgs>(args?: SelectSubset<T, CalculationOutputFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalculationOutputClient<$Result.GetResult<Prisma.$CalculationOutputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CalculationOutputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationOutputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CalculationOutputs
     * const calculationOutputs = await prisma.calculationOutput.findMany()
     * 
     * // Get first 10 CalculationOutputs
     * const calculationOutputs = await prisma.calculationOutput.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calculationOutputWithIdOnly = await prisma.calculationOutput.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalculationOutputFindManyArgs>(args?: SelectSubset<T, CalculationOutputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalculationOutputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CalculationOutput.
     * @param {CalculationOutputCreateArgs} args - Arguments to create a CalculationOutput.
     * @example
     * // Create one CalculationOutput
     * const CalculationOutput = await prisma.calculationOutput.create({
     *   data: {
     *     // ... data to create a CalculationOutput
     *   }
     * })
     * 
     */
    create<T extends CalculationOutputCreateArgs>(args: SelectSubset<T, CalculationOutputCreateArgs<ExtArgs>>): Prisma__CalculationOutputClient<$Result.GetResult<Prisma.$CalculationOutputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CalculationOutputs.
     * @param {CalculationOutputCreateManyArgs} args - Arguments to create many CalculationOutputs.
     * @example
     * // Create many CalculationOutputs
     * const calculationOutput = await prisma.calculationOutput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalculationOutputCreateManyArgs>(args?: SelectSubset<T, CalculationOutputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CalculationOutputs and returns the data saved in the database.
     * @param {CalculationOutputCreateManyAndReturnArgs} args - Arguments to create many CalculationOutputs.
     * @example
     * // Create many CalculationOutputs
     * const calculationOutput = await prisma.calculationOutput.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CalculationOutputs and only return the `id`
     * const calculationOutputWithIdOnly = await prisma.calculationOutput.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalculationOutputCreateManyAndReturnArgs>(args?: SelectSubset<T, CalculationOutputCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalculationOutputPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CalculationOutput.
     * @param {CalculationOutputDeleteArgs} args - Arguments to delete one CalculationOutput.
     * @example
     * // Delete one CalculationOutput
     * const CalculationOutput = await prisma.calculationOutput.delete({
     *   where: {
     *     // ... filter to delete one CalculationOutput
     *   }
     * })
     * 
     */
    delete<T extends CalculationOutputDeleteArgs>(args: SelectSubset<T, CalculationOutputDeleteArgs<ExtArgs>>): Prisma__CalculationOutputClient<$Result.GetResult<Prisma.$CalculationOutputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CalculationOutput.
     * @param {CalculationOutputUpdateArgs} args - Arguments to update one CalculationOutput.
     * @example
     * // Update one CalculationOutput
     * const calculationOutput = await prisma.calculationOutput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalculationOutputUpdateArgs>(args: SelectSubset<T, CalculationOutputUpdateArgs<ExtArgs>>): Prisma__CalculationOutputClient<$Result.GetResult<Prisma.$CalculationOutputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CalculationOutputs.
     * @param {CalculationOutputDeleteManyArgs} args - Arguments to filter CalculationOutputs to delete.
     * @example
     * // Delete a few CalculationOutputs
     * const { count } = await prisma.calculationOutput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalculationOutputDeleteManyArgs>(args?: SelectSubset<T, CalculationOutputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalculationOutputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationOutputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CalculationOutputs
     * const calculationOutput = await prisma.calculationOutput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalculationOutputUpdateManyArgs>(args: SelectSubset<T, CalculationOutputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalculationOutputs and returns the data updated in the database.
     * @param {CalculationOutputUpdateManyAndReturnArgs} args - Arguments to update many CalculationOutputs.
     * @example
     * // Update many CalculationOutputs
     * const calculationOutput = await prisma.calculationOutput.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CalculationOutputs and only return the `id`
     * const calculationOutputWithIdOnly = await prisma.calculationOutput.updateManyAndReturn({
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
    updateManyAndReturn<T extends CalculationOutputUpdateManyAndReturnArgs>(args: SelectSubset<T, CalculationOutputUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalculationOutputPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CalculationOutput.
     * @param {CalculationOutputUpsertArgs} args - Arguments to update or create a CalculationOutput.
     * @example
     * // Update or create a CalculationOutput
     * const calculationOutput = await prisma.calculationOutput.upsert({
     *   create: {
     *     // ... data to create a CalculationOutput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CalculationOutput we want to update
     *   }
     * })
     */
    upsert<T extends CalculationOutputUpsertArgs>(args: SelectSubset<T, CalculationOutputUpsertArgs<ExtArgs>>): Prisma__CalculationOutputClient<$Result.GetResult<Prisma.$CalculationOutputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CalculationOutputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationOutputCountArgs} args - Arguments to filter CalculationOutputs to count.
     * @example
     * // Count the number of CalculationOutputs
     * const count = await prisma.calculationOutput.count({
     *   where: {
     *     // ... the filter for the CalculationOutputs we want to count
     *   }
     * })
    **/
    count<T extends CalculationOutputCountArgs>(
      args?: Subset<T, CalculationOutputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalculationOutputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CalculationOutput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationOutputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CalculationOutputAggregateArgs>(args: Subset<T, CalculationOutputAggregateArgs>): Prisma.PrismaPromise<GetCalculationOutputAggregateType<T>>

    /**
     * Group by CalculationOutput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalculationOutputGroupByArgs} args - Group by arguments.
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
      T extends CalculationOutputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalculationOutputGroupByArgs['orderBy'] }
        : { orderBy?: CalculationOutputGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CalculationOutputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalculationOutputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CalculationOutput model
   */
  readonly fields: CalculationOutputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CalculationOutput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalculationOutputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sm_platform_specific<T extends CalculationOutput$sm_platform_specificArgs<ExtArgs> = {}>(args?: Subset<T, CalculationOutput$sm_platform_specificArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialMediaPlatformSpecificPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calculationInput<T extends CalculationOutput$calculationInputArgs<ExtArgs> = {}>(args?: Subset<T, CalculationOutput$calculationInputArgs<ExtArgs>>): Prisma__CalculationInputClient<$Result.GetResult<Prisma.$CalculationInputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CalculationOutput model
   */
  interface CalculationOutputFieldRefs {
    readonly id: FieldRef<"CalculationOutput", 'String'>
    readonly college_name: FieldRef<"CalculationOutput", 'String'>
    readonly img_low: FieldRef<"CalculationOutput", 'Int'>
    readonly img_high: FieldRef<"CalculationOutput", 'Int'>
    readonly vid_low: FieldRef<"CalculationOutput", 'Int'>
    readonly vid_high: FieldRef<"CalculationOutput", 'Int'>
    readonly ncv_low: FieldRef<"CalculationOutput", 'Int'>
    readonly ncv_high: FieldRef<"CalculationOutput", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CalculationOutput findUnique
   */
  export type CalculationOutputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationOutput
     */
    select?: CalculationOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationOutput
     */
    omit?: CalculationOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationOutputInclude<ExtArgs> | null
    /**
     * Filter, which CalculationOutput to fetch.
     */
    where: CalculationOutputWhereUniqueInput
  }

  /**
   * CalculationOutput findUniqueOrThrow
   */
  export type CalculationOutputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationOutput
     */
    select?: CalculationOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationOutput
     */
    omit?: CalculationOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationOutputInclude<ExtArgs> | null
    /**
     * Filter, which CalculationOutput to fetch.
     */
    where: CalculationOutputWhereUniqueInput
  }

  /**
   * CalculationOutput findFirst
   */
  export type CalculationOutputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationOutput
     */
    select?: CalculationOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationOutput
     */
    omit?: CalculationOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationOutputInclude<ExtArgs> | null
    /**
     * Filter, which CalculationOutput to fetch.
     */
    where?: CalculationOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalculationOutputs to fetch.
     */
    orderBy?: CalculationOutputOrderByWithRelationInput | CalculationOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalculationOutputs.
     */
    cursor?: CalculationOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalculationOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalculationOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalculationOutputs.
     */
    distinct?: CalculationOutputScalarFieldEnum | CalculationOutputScalarFieldEnum[]
  }

  /**
   * CalculationOutput findFirstOrThrow
   */
  export type CalculationOutputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationOutput
     */
    select?: CalculationOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationOutput
     */
    omit?: CalculationOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationOutputInclude<ExtArgs> | null
    /**
     * Filter, which CalculationOutput to fetch.
     */
    where?: CalculationOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalculationOutputs to fetch.
     */
    orderBy?: CalculationOutputOrderByWithRelationInput | CalculationOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalculationOutputs.
     */
    cursor?: CalculationOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalculationOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalculationOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalculationOutputs.
     */
    distinct?: CalculationOutputScalarFieldEnum | CalculationOutputScalarFieldEnum[]
  }

  /**
   * CalculationOutput findMany
   */
  export type CalculationOutputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationOutput
     */
    select?: CalculationOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationOutput
     */
    omit?: CalculationOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationOutputInclude<ExtArgs> | null
    /**
     * Filter, which CalculationOutputs to fetch.
     */
    where?: CalculationOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalculationOutputs to fetch.
     */
    orderBy?: CalculationOutputOrderByWithRelationInput | CalculationOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CalculationOutputs.
     */
    cursor?: CalculationOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalculationOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalculationOutputs.
     */
    skip?: number
    distinct?: CalculationOutputScalarFieldEnum | CalculationOutputScalarFieldEnum[]
  }

  /**
   * CalculationOutput create
   */
  export type CalculationOutputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationOutput
     */
    select?: CalculationOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationOutput
     */
    omit?: CalculationOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationOutputInclude<ExtArgs> | null
    /**
     * The data needed to create a CalculationOutput.
     */
    data: XOR<CalculationOutputCreateInput, CalculationOutputUncheckedCreateInput>
  }

  /**
   * CalculationOutput createMany
   */
  export type CalculationOutputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CalculationOutputs.
     */
    data: CalculationOutputCreateManyInput | CalculationOutputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CalculationOutput createManyAndReturn
   */
  export type CalculationOutputCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationOutput
     */
    select?: CalculationOutputSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationOutput
     */
    omit?: CalculationOutputOmit<ExtArgs> | null
    /**
     * The data used to create many CalculationOutputs.
     */
    data: CalculationOutputCreateManyInput | CalculationOutputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CalculationOutput update
   */
  export type CalculationOutputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationOutput
     */
    select?: CalculationOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationOutput
     */
    omit?: CalculationOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationOutputInclude<ExtArgs> | null
    /**
     * The data needed to update a CalculationOutput.
     */
    data: XOR<CalculationOutputUpdateInput, CalculationOutputUncheckedUpdateInput>
    /**
     * Choose, which CalculationOutput to update.
     */
    where: CalculationOutputWhereUniqueInput
  }

  /**
   * CalculationOutput updateMany
   */
  export type CalculationOutputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CalculationOutputs.
     */
    data: XOR<CalculationOutputUpdateManyMutationInput, CalculationOutputUncheckedUpdateManyInput>
    /**
     * Filter which CalculationOutputs to update
     */
    where?: CalculationOutputWhereInput
    /**
     * Limit how many CalculationOutputs to update.
     */
    limit?: number
  }

  /**
   * CalculationOutput updateManyAndReturn
   */
  export type CalculationOutputUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationOutput
     */
    select?: CalculationOutputSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationOutput
     */
    omit?: CalculationOutputOmit<ExtArgs> | null
    /**
     * The data used to update CalculationOutputs.
     */
    data: XOR<CalculationOutputUpdateManyMutationInput, CalculationOutputUncheckedUpdateManyInput>
    /**
     * Filter which CalculationOutputs to update
     */
    where?: CalculationOutputWhereInput
    /**
     * Limit how many CalculationOutputs to update.
     */
    limit?: number
  }

  /**
   * CalculationOutput upsert
   */
  export type CalculationOutputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationOutput
     */
    select?: CalculationOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationOutput
     */
    omit?: CalculationOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationOutputInclude<ExtArgs> | null
    /**
     * The filter to search for the CalculationOutput to update in case it exists.
     */
    where: CalculationOutputWhereUniqueInput
    /**
     * In case the CalculationOutput found by the `where` argument doesn't exist, create a new CalculationOutput with this data.
     */
    create: XOR<CalculationOutputCreateInput, CalculationOutputUncheckedCreateInput>
    /**
     * In case the CalculationOutput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalculationOutputUpdateInput, CalculationOutputUncheckedUpdateInput>
  }

  /**
   * CalculationOutput delete
   */
  export type CalculationOutputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationOutput
     */
    select?: CalculationOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationOutput
     */
    omit?: CalculationOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationOutputInclude<ExtArgs> | null
    /**
     * Filter which CalculationOutput to delete.
     */
    where: CalculationOutputWhereUniqueInput
  }

  /**
   * CalculationOutput deleteMany
   */
  export type CalculationOutputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalculationOutputs to delete
     */
    where?: CalculationOutputWhereInput
    /**
     * Limit how many CalculationOutputs to delete.
     */
    limit?: number
  }

  /**
   * CalculationOutput.sm_platform_specific
   */
  export type CalculationOutput$sm_platform_specificArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaPlatformSpecific
     */
    select?: SocialMediaPlatformSpecificSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaPlatformSpecific
     */
    omit?: SocialMediaPlatformSpecificOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaPlatformSpecificInclude<ExtArgs> | null
    where?: SocialMediaPlatformSpecificWhereInput
    orderBy?: SocialMediaPlatformSpecificOrderByWithRelationInput | SocialMediaPlatformSpecificOrderByWithRelationInput[]
    cursor?: SocialMediaPlatformSpecificWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialMediaPlatformSpecificScalarFieldEnum | SocialMediaPlatformSpecificScalarFieldEnum[]
  }

  /**
   * CalculationOutput.calculationInput
   */
  export type CalculationOutput$calculationInputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationInput
     */
    select?: CalculationInputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationInput
     */
    omit?: CalculationInputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationInputInclude<ExtArgs> | null
    where?: CalculationInputWhereInput
  }

  /**
   * CalculationOutput without action
   */
  export type CalculationOutputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalculationOutput
     */
    select?: CalculationOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalculationOutput
     */
    omit?: CalculationOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalculationOutputInclude<ExtArgs> | null
  }


  /**
   * Model SocialMediaPlatformSpecific
   */

  export type AggregateSocialMediaPlatformSpecific = {
    _count: SocialMediaPlatformSpecificCountAggregateOutputType | null
    _avg: SocialMediaPlatformSpecificAvgAggregateOutputType | null
    _sum: SocialMediaPlatformSpecificSumAggregateOutputType | null
    _min: SocialMediaPlatformSpecificMinAggregateOutputType | null
    _max: SocialMediaPlatformSpecificMaxAggregateOutputType | null
  }

  export type SocialMediaPlatformSpecificAvgAggregateOutputType = {
    img_low: number | null
    img_high: number | null
    vid_low: number | null
    vid_high: number | null
  }

  export type SocialMediaPlatformSpecificSumAggregateOutputType = {
    img_low: number | null
    img_high: number | null
    vid_low: number | null
    vid_high: number | null
  }

  export type SocialMediaPlatformSpecificMinAggregateOutputType = {
    id: string | null
    output_id: string | null
    name: string | null
    img_low: number | null
    img_high: number | null
    vid_low: number | null
    vid_high: number | null
  }

  export type SocialMediaPlatformSpecificMaxAggregateOutputType = {
    id: string | null
    output_id: string | null
    name: string | null
    img_low: number | null
    img_high: number | null
    vid_low: number | null
    vid_high: number | null
  }

  export type SocialMediaPlatformSpecificCountAggregateOutputType = {
    id: number
    output_id: number
    name: number
    img_low: number
    img_high: number
    vid_low: number
    vid_high: number
    _all: number
  }


  export type SocialMediaPlatformSpecificAvgAggregateInputType = {
    img_low?: true
    img_high?: true
    vid_low?: true
    vid_high?: true
  }

  export type SocialMediaPlatformSpecificSumAggregateInputType = {
    img_low?: true
    img_high?: true
    vid_low?: true
    vid_high?: true
  }

  export type SocialMediaPlatformSpecificMinAggregateInputType = {
    id?: true
    output_id?: true
    name?: true
    img_low?: true
    img_high?: true
    vid_low?: true
    vid_high?: true
  }

  export type SocialMediaPlatformSpecificMaxAggregateInputType = {
    id?: true
    output_id?: true
    name?: true
    img_low?: true
    img_high?: true
    vid_low?: true
    vid_high?: true
  }

  export type SocialMediaPlatformSpecificCountAggregateInputType = {
    id?: true
    output_id?: true
    name?: true
    img_low?: true
    img_high?: true
    vid_low?: true
    vid_high?: true
    _all?: true
  }

  export type SocialMediaPlatformSpecificAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialMediaPlatformSpecific to aggregate.
     */
    where?: SocialMediaPlatformSpecificWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMediaPlatformSpecifics to fetch.
     */
    orderBy?: SocialMediaPlatformSpecificOrderByWithRelationInput | SocialMediaPlatformSpecificOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialMediaPlatformSpecificWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMediaPlatformSpecifics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMediaPlatformSpecifics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialMediaPlatformSpecifics
    **/
    _count?: true | SocialMediaPlatformSpecificCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialMediaPlatformSpecificAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialMediaPlatformSpecificSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialMediaPlatformSpecificMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialMediaPlatformSpecificMaxAggregateInputType
  }

  export type GetSocialMediaPlatformSpecificAggregateType<T extends SocialMediaPlatformSpecificAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialMediaPlatformSpecific]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialMediaPlatformSpecific[P]>
      : GetScalarType<T[P], AggregateSocialMediaPlatformSpecific[P]>
  }




  export type SocialMediaPlatformSpecificGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialMediaPlatformSpecificWhereInput
    orderBy?: SocialMediaPlatformSpecificOrderByWithAggregationInput | SocialMediaPlatformSpecificOrderByWithAggregationInput[]
    by: SocialMediaPlatformSpecificScalarFieldEnum[] | SocialMediaPlatformSpecificScalarFieldEnum
    having?: SocialMediaPlatformSpecificScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialMediaPlatformSpecificCountAggregateInputType | true
    _avg?: SocialMediaPlatformSpecificAvgAggregateInputType
    _sum?: SocialMediaPlatformSpecificSumAggregateInputType
    _min?: SocialMediaPlatformSpecificMinAggregateInputType
    _max?: SocialMediaPlatformSpecificMaxAggregateInputType
  }

  export type SocialMediaPlatformSpecificGroupByOutputType = {
    id: string
    output_id: string
    name: string
    img_low: number
    img_high: number
    vid_low: number
    vid_high: number
    _count: SocialMediaPlatformSpecificCountAggregateOutputType | null
    _avg: SocialMediaPlatformSpecificAvgAggregateOutputType | null
    _sum: SocialMediaPlatformSpecificSumAggregateOutputType | null
    _min: SocialMediaPlatformSpecificMinAggregateOutputType | null
    _max: SocialMediaPlatformSpecificMaxAggregateOutputType | null
  }

  type GetSocialMediaPlatformSpecificGroupByPayload<T extends SocialMediaPlatformSpecificGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialMediaPlatformSpecificGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialMediaPlatformSpecificGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialMediaPlatformSpecificGroupByOutputType[P]>
            : GetScalarType<T[P], SocialMediaPlatformSpecificGroupByOutputType[P]>
        }
      >
    >


  export type SocialMediaPlatformSpecificSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    output_id?: boolean
    name?: boolean
    img_low?: boolean
    img_high?: boolean
    vid_low?: boolean
    vid_high?: boolean
    output?: boolean | CalculationOutputDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialMediaPlatformSpecific"]>

  export type SocialMediaPlatformSpecificSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    output_id?: boolean
    name?: boolean
    img_low?: boolean
    img_high?: boolean
    vid_low?: boolean
    vid_high?: boolean
    output?: boolean | CalculationOutputDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialMediaPlatformSpecific"]>

  export type SocialMediaPlatformSpecificSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    output_id?: boolean
    name?: boolean
    img_low?: boolean
    img_high?: boolean
    vid_low?: boolean
    vid_high?: boolean
    output?: boolean | CalculationOutputDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialMediaPlatformSpecific"]>

  export type SocialMediaPlatformSpecificSelectScalar = {
    id?: boolean
    output_id?: boolean
    name?: boolean
    img_low?: boolean
    img_high?: boolean
    vid_low?: boolean
    vid_high?: boolean
  }

  export type SocialMediaPlatformSpecificOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "output_id" | "name" | "img_low" | "img_high" | "vid_low" | "vid_high", ExtArgs["result"]["socialMediaPlatformSpecific"]>
  export type SocialMediaPlatformSpecificInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    output?: boolean | CalculationOutputDefaultArgs<ExtArgs>
  }
  export type SocialMediaPlatformSpecificIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    output?: boolean | CalculationOutputDefaultArgs<ExtArgs>
  }
  export type SocialMediaPlatformSpecificIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    output?: boolean | CalculationOutputDefaultArgs<ExtArgs>
  }

  export type $SocialMediaPlatformSpecificPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialMediaPlatformSpecific"
    objects: {
      output: Prisma.$CalculationOutputPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      output_id: string
      name: string
      img_low: number
      img_high: number
      vid_low: number
      vid_high: number
    }, ExtArgs["result"]["socialMediaPlatformSpecific"]>
    composites: {}
  }

  type SocialMediaPlatformSpecificGetPayload<S extends boolean | null | undefined | SocialMediaPlatformSpecificDefaultArgs> = $Result.GetResult<Prisma.$SocialMediaPlatformSpecificPayload, S>

  type SocialMediaPlatformSpecificCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialMediaPlatformSpecificFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialMediaPlatformSpecificCountAggregateInputType | true
    }

  export interface SocialMediaPlatformSpecificDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialMediaPlatformSpecific'], meta: { name: 'SocialMediaPlatformSpecific' } }
    /**
     * Find zero or one SocialMediaPlatformSpecific that matches the filter.
     * @param {SocialMediaPlatformSpecificFindUniqueArgs} args - Arguments to find a SocialMediaPlatformSpecific
     * @example
     * // Get one SocialMediaPlatformSpecific
     * const socialMediaPlatformSpecific = await prisma.socialMediaPlatformSpecific.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialMediaPlatformSpecificFindUniqueArgs>(args: SelectSubset<T, SocialMediaPlatformSpecificFindUniqueArgs<ExtArgs>>): Prisma__SocialMediaPlatformSpecificClient<$Result.GetResult<Prisma.$SocialMediaPlatformSpecificPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialMediaPlatformSpecific that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialMediaPlatformSpecificFindUniqueOrThrowArgs} args - Arguments to find a SocialMediaPlatformSpecific
     * @example
     * // Get one SocialMediaPlatformSpecific
     * const socialMediaPlatformSpecific = await prisma.socialMediaPlatformSpecific.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialMediaPlatformSpecificFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialMediaPlatformSpecificFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialMediaPlatformSpecificClient<$Result.GetResult<Prisma.$SocialMediaPlatformSpecificPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialMediaPlatformSpecific that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaPlatformSpecificFindFirstArgs} args - Arguments to find a SocialMediaPlatformSpecific
     * @example
     * // Get one SocialMediaPlatformSpecific
     * const socialMediaPlatformSpecific = await prisma.socialMediaPlatformSpecific.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialMediaPlatformSpecificFindFirstArgs>(args?: SelectSubset<T, SocialMediaPlatformSpecificFindFirstArgs<ExtArgs>>): Prisma__SocialMediaPlatformSpecificClient<$Result.GetResult<Prisma.$SocialMediaPlatformSpecificPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialMediaPlatformSpecific that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaPlatformSpecificFindFirstOrThrowArgs} args - Arguments to find a SocialMediaPlatformSpecific
     * @example
     * // Get one SocialMediaPlatformSpecific
     * const socialMediaPlatformSpecific = await prisma.socialMediaPlatformSpecific.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialMediaPlatformSpecificFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialMediaPlatformSpecificFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialMediaPlatformSpecificClient<$Result.GetResult<Prisma.$SocialMediaPlatformSpecificPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialMediaPlatformSpecifics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaPlatformSpecificFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialMediaPlatformSpecifics
     * const socialMediaPlatformSpecifics = await prisma.socialMediaPlatformSpecific.findMany()
     * 
     * // Get first 10 SocialMediaPlatformSpecifics
     * const socialMediaPlatformSpecifics = await prisma.socialMediaPlatformSpecific.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialMediaPlatformSpecificWithIdOnly = await prisma.socialMediaPlatformSpecific.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialMediaPlatformSpecificFindManyArgs>(args?: SelectSubset<T, SocialMediaPlatformSpecificFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialMediaPlatformSpecificPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialMediaPlatformSpecific.
     * @param {SocialMediaPlatformSpecificCreateArgs} args - Arguments to create a SocialMediaPlatformSpecific.
     * @example
     * // Create one SocialMediaPlatformSpecific
     * const SocialMediaPlatformSpecific = await prisma.socialMediaPlatformSpecific.create({
     *   data: {
     *     // ... data to create a SocialMediaPlatformSpecific
     *   }
     * })
     * 
     */
    create<T extends SocialMediaPlatformSpecificCreateArgs>(args: SelectSubset<T, SocialMediaPlatformSpecificCreateArgs<ExtArgs>>): Prisma__SocialMediaPlatformSpecificClient<$Result.GetResult<Prisma.$SocialMediaPlatformSpecificPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialMediaPlatformSpecifics.
     * @param {SocialMediaPlatformSpecificCreateManyArgs} args - Arguments to create many SocialMediaPlatformSpecifics.
     * @example
     * // Create many SocialMediaPlatformSpecifics
     * const socialMediaPlatformSpecific = await prisma.socialMediaPlatformSpecific.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialMediaPlatformSpecificCreateManyArgs>(args?: SelectSubset<T, SocialMediaPlatformSpecificCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialMediaPlatformSpecifics and returns the data saved in the database.
     * @param {SocialMediaPlatformSpecificCreateManyAndReturnArgs} args - Arguments to create many SocialMediaPlatformSpecifics.
     * @example
     * // Create many SocialMediaPlatformSpecifics
     * const socialMediaPlatformSpecific = await prisma.socialMediaPlatformSpecific.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialMediaPlatformSpecifics and only return the `id`
     * const socialMediaPlatformSpecificWithIdOnly = await prisma.socialMediaPlatformSpecific.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialMediaPlatformSpecificCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialMediaPlatformSpecificCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialMediaPlatformSpecificPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialMediaPlatformSpecific.
     * @param {SocialMediaPlatformSpecificDeleteArgs} args - Arguments to delete one SocialMediaPlatformSpecific.
     * @example
     * // Delete one SocialMediaPlatformSpecific
     * const SocialMediaPlatformSpecific = await prisma.socialMediaPlatformSpecific.delete({
     *   where: {
     *     // ... filter to delete one SocialMediaPlatformSpecific
     *   }
     * })
     * 
     */
    delete<T extends SocialMediaPlatformSpecificDeleteArgs>(args: SelectSubset<T, SocialMediaPlatformSpecificDeleteArgs<ExtArgs>>): Prisma__SocialMediaPlatformSpecificClient<$Result.GetResult<Prisma.$SocialMediaPlatformSpecificPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialMediaPlatformSpecific.
     * @param {SocialMediaPlatformSpecificUpdateArgs} args - Arguments to update one SocialMediaPlatformSpecific.
     * @example
     * // Update one SocialMediaPlatformSpecific
     * const socialMediaPlatformSpecific = await prisma.socialMediaPlatformSpecific.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialMediaPlatformSpecificUpdateArgs>(args: SelectSubset<T, SocialMediaPlatformSpecificUpdateArgs<ExtArgs>>): Prisma__SocialMediaPlatformSpecificClient<$Result.GetResult<Prisma.$SocialMediaPlatformSpecificPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialMediaPlatformSpecifics.
     * @param {SocialMediaPlatformSpecificDeleteManyArgs} args - Arguments to filter SocialMediaPlatformSpecifics to delete.
     * @example
     * // Delete a few SocialMediaPlatformSpecifics
     * const { count } = await prisma.socialMediaPlatformSpecific.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialMediaPlatformSpecificDeleteManyArgs>(args?: SelectSubset<T, SocialMediaPlatformSpecificDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialMediaPlatformSpecifics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaPlatformSpecificUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialMediaPlatformSpecifics
     * const socialMediaPlatformSpecific = await prisma.socialMediaPlatformSpecific.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialMediaPlatformSpecificUpdateManyArgs>(args: SelectSubset<T, SocialMediaPlatformSpecificUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialMediaPlatformSpecifics and returns the data updated in the database.
     * @param {SocialMediaPlatformSpecificUpdateManyAndReturnArgs} args - Arguments to update many SocialMediaPlatformSpecifics.
     * @example
     * // Update many SocialMediaPlatformSpecifics
     * const socialMediaPlatformSpecific = await prisma.socialMediaPlatformSpecific.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialMediaPlatformSpecifics and only return the `id`
     * const socialMediaPlatformSpecificWithIdOnly = await prisma.socialMediaPlatformSpecific.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialMediaPlatformSpecificUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialMediaPlatformSpecificUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialMediaPlatformSpecificPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialMediaPlatformSpecific.
     * @param {SocialMediaPlatformSpecificUpsertArgs} args - Arguments to update or create a SocialMediaPlatformSpecific.
     * @example
     * // Update or create a SocialMediaPlatformSpecific
     * const socialMediaPlatformSpecific = await prisma.socialMediaPlatformSpecific.upsert({
     *   create: {
     *     // ... data to create a SocialMediaPlatformSpecific
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialMediaPlatformSpecific we want to update
     *   }
     * })
     */
    upsert<T extends SocialMediaPlatformSpecificUpsertArgs>(args: SelectSubset<T, SocialMediaPlatformSpecificUpsertArgs<ExtArgs>>): Prisma__SocialMediaPlatformSpecificClient<$Result.GetResult<Prisma.$SocialMediaPlatformSpecificPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialMediaPlatformSpecifics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaPlatformSpecificCountArgs} args - Arguments to filter SocialMediaPlatformSpecifics to count.
     * @example
     * // Count the number of SocialMediaPlatformSpecifics
     * const count = await prisma.socialMediaPlatformSpecific.count({
     *   where: {
     *     // ... the filter for the SocialMediaPlatformSpecifics we want to count
     *   }
     * })
    **/
    count<T extends SocialMediaPlatformSpecificCountArgs>(
      args?: Subset<T, SocialMediaPlatformSpecificCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialMediaPlatformSpecificCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialMediaPlatformSpecific.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaPlatformSpecificAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialMediaPlatformSpecificAggregateArgs>(args: Subset<T, SocialMediaPlatformSpecificAggregateArgs>): Prisma.PrismaPromise<GetSocialMediaPlatformSpecificAggregateType<T>>

    /**
     * Group by SocialMediaPlatformSpecific.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaPlatformSpecificGroupByArgs} args - Group by arguments.
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
      T extends SocialMediaPlatformSpecificGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialMediaPlatformSpecificGroupByArgs['orderBy'] }
        : { orderBy?: SocialMediaPlatformSpecificGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialMediaPlatformSpecificGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialMediaPlatformSpecificGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialMediaPlatformSpecific model
   */
  readonly fields: SocialMediaPlatformSpecificFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialMediaPlatformSpecific.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialMediaPlatformSpecificClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    output<T extends CalculationOutputDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CalculationOutputDefaultArgs<ExtArgs>>): Prisma__CalculationOutputClient<$Result.GetResult<Prisma.$CalculationOutputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SocialMediaPlatformSpecific model
   */
  interface SocialMediaPlatformSpecificFieldRefs {
    readonly id: FieldRef<"SocialMediaPlatformSpecific", 'String'>
    readonly output_id: FieldRef<"SocialMediaPlatformSpecific", 'String'>
    readonly name: FieldRef<"SocialMediaPlatformSpecific", 'String'>
    readonly img_low: FieldRef<"SocialMediaPlatformSpecific", 'Int'>
    readonly img_high: FieldRef<"SocialMediaPlatformSpecific", 'Int'>
    readonly vid_low: FieldRef<"SocialMediaPlatformSpecific", 'Int'>
    readonly vid_high: FieldRef<"SocialMediaPlatformSpecific", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SocialMediaPlatformSpecific findUnique
   */
  export type SocialMediaPlatformSpecificFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaPlatformSpecific
     */
    select?: SocialMediaPlatformSpecificSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaPlatformSpecific
     */
    omit?: SocialMediaPlatformSpecificOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaPlatformSpecificInclude<ExtArgs> | null
    /**
     * Filter, which SocialMediaPlatformSpecific to fetch.
     */
    where: SocialMediaPlatformSpecificWhereUniqueInput
  }

  /**
   * SocialMediaPlatformSpecific findUniqueOrThrow
   */
  export type SocialMediaPlatformSpecificFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaPlatformSpecific
     */
    select?: SocialMediaPlatformSpecificSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaPlatformSpecific
     */
    omit?: SocialMediaPlatformSpecificOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaPlatformSpecificInclude<ExtArgs> | null
    /**
     * Filter, which SocialMediaPlatformSpecific to fetch.
     */
    where: SocialMediaPlatformSpecificWhereUniqueInput
  }

  /**
   * SocialMediaPlatformSpecific findFirst
   */
  export type SocialMediaPlatformSpecificFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaPlatformSpecific
     */
    select?: SocialMediaPlatformSpecificSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaPlatformSpecific
     */
    omit?: SocialMediaPlatformSpecificOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaPlatformSpecificInclude<ExtArgs> | null
    /**
     * Filter, which SocialMediaPlatformSpecific to fetch.
     */
    where?: SocialMediaPlatformSpecificWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMediaPlatformSpecifics to fetch.
     */
    orderBy?: SocialMediaPlatformSpecificOrderByWithRelationInput | SocialMediaPlatformSpecificOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialMediaPlatformSpecifics.
     */
    cursor?: SocialMediaPlatformSpecificWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMediaPlatformSpecifics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMediaPlatformSpecifics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialMediaPlatformSpecifics.
     */
    distinct?: SocialMediaPlatformSpecificScalarFieldEnum | SocialMediaPlatformSpecificScalarFieldEnum[]
  }

  /**
   * SocialMediaPlatformSpecific findFirstOrThrow
   */
  export type SocialMediaPlatformSpecificFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaPlatformSpecific
     */
    select?: SocialMediaPlatformSpecificSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaPlatformSpecific
     */
    omit?: SocialMediaPlatformSpecificOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaPlatformSpecificInclude<ExtArgs> | null
    /**
     * Filter, which SocialMediaPlatformSpecific to fetch.
     */
    where?: SocialMediaPlatformSpecificWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMediaPlatformSpecifics to fetch.
     */
    orderBy?: SocialMediaPlatformSpecificOrderByWithRelationInput | SocialMediaPlatformSpecificOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialMediaPlatformSpecifics.
     */
    cursor?: SocialMediaPlatformSpecificWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMediaPlatformSpecifics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMediaPlatformSpecifics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialMediaPlatformSpecifics.
     */
    distinct?: SocialMediaPlatformSpecificScalarFieldEnum | SocialMediaPlatformSpecificScalarFieldEnum[]
  }

  /**
   * SocialMediaPlatformSpecific findMany
   */
  export type SocialMediaPlatformSpecificFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaPlatformSpecific
     */
    select?: SocialMediaPlatformSpecificSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaPlatformSpecific
     */
    omit?: SocialMediaPlatformSpecificOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaPlatformSpecificInclude<ExtArgs> | null
    /**
     * Filter, which SocialMediaPlatformSpecifics to fetch.
     */
    where?: SocialMediaPlatformSpecificWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMediaPlatformSpecifics to fetch.
     */
    orderBy?: SocialMediaPlatformSpecificOrderByWithRelationInput | SocialMediaPlatformSpecificOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialMediaPlatformSpecifics.
     */
    cursor?: SocialMediaPlatformSpecificWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMediaPlatformSpecifics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMediaPlatformSpecifics.
     */
    skip?: number
    distinct?: SocialMediaPlatformSpecificScalarFieldEnum | SocialMediaPlatformSpecificScalarFieldEnum[]
  }

  /**
   * SocialMediaPlatformSpecific create
   */
  export type SocialMediaPlatformSpecificCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaPlatformSpecific
     */
    select?: SocialMediaPlatformSpecificSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaPlatformSpecific
     */
    omit?: SocialMediaPlatformSpecificOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaPlatformSpecificInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialMediaPlatformSpecific.
     */
    data: XOR<SocialMediaPlatformSpecificCreateInput, SocialMediaPlatformSpecificUncheckedCreateInput>
  }

  /**
   * SocialMediaPlatformSpecific createMany
   */
  export type SocialMediaPlatformSpecificCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialMediaPlatformSpecifics.
     */
    data: SocialMediaPlatformSpecificCreateManyInput | SocialMediaPlatformSpecificCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialMediaPlatformSpecific createManyAndReturn
   */
  export type SocialMediaPlatformSpecificCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaPlatformSpecific
     */
    select?: SocialMediaPlatformSpecificSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaPlatformSpecific
     */
    omit?: SocialMediaPlatformSpecificOmit<ExtArgs> | null
    /**
     * The data used to create many SocialMediaPlatformSpecifics.
     */
    data: SocialMediaPlatformSpecificCreateManyInput | SocialMediaPlatformSpecificCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaPlatformSpecificIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialMediaPlatformSpecific update
   */
  export type SocialMediaPlatformSpecificUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaPlatformSpecific
     */
    select?: SocialMediaPlatformSpecificSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaPlatformSpecific
     */
    omit?: SocialMediaPlatformSpecificOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaPlatformSpecificInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialMediaPlatformSpecific.
     */
    data: XOR<SocialMediaPlatformSpecificUpdateInput, SocialMediaPlatformSpecificUncheckedUpdateInput>
    /**
     * Choose, which SocialMediaPlatformSpecific to update.
     */
    where: SocialMediaPlatformSpecificWhereUniqueInput
  }

  /**
   * SocialMediaPlatformSpecific updateMany
   */
  export type SocialMediaPlatformSpecificUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialMediaPlatformSpecifics.
     */
    data: XOR<SocialMediaPlatformSpecificUpdateManyMutationInput, SocialMediaPlatformSpecificUncheckedUpdateManyInput>
    /**
     * Filter which SocialMediaPlatformSpecifics to update
     */
    where?: SocialMediaPlatformSpecificWhereInput
    /**
     * Limit how many SocialMediaPlatformSpecifics to update.
     */
    limit?: number
  }

  /**
   * SocialMediaPlatformSpecific updateManyAndReturn
   */
  export type SocialMediaPlatformSpecificUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaPlatformSpecific
     */
    select?: SocialMediaPlatformSpecificSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaPlatformSpecific
     */
    omit?: SocialMediaPlatformSpecificOmit<ExtArgs> | null
    /**
     * The data used to update SocialMediaPlatformSpecifics.
     */
    data: XOR<SocialMediaPlatformSpecificUpdateManyMutationInput, SocialMediaPlatformSpecificUncheckedUpdateManyInput>
    /**
     * Filter which SocialMediaPlatformSpecifics to update
     */
    where?: SocialMediaPlatformSpecificWhereInput
    /**
     * Limit how many SocialMediaPlatformSpecifics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaPlatformSpecificIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialMediaPlatformSpecific upsert
   */
  export type SocialMediaPlatformSpecificUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaPlatformSpecific
     */
    select?: SocialMediaPlatformSpecificSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaPlatformSpecific
     */
    omit?: SocialMediaPlatformSpecificOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaPlatformSpecificInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialMediaPlatformSpecific to update in case it exists.
     */
    where: SocialMediaPlatformSpecificWhereUniqueInput
    /**
     * In case the SocialMediaPlatformSpecific found by the `where` argument doesn't exist, create a new SocialMediaPlatformSpecific with this data.
     */
    create: XOR<SocialMediaPlatformSpecificCreateInput, SocialMediaPlatformSpecificUncheckedCreateInput>
    /**
     * In case the SocialMediaPlatformSpecific was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialMediaPlatformSpecificUpdateInput, SocialMediaPlatformSpecificUncheckedUpdateInput>
  }

  /**
   * SocialMediaPlatformSpecific delete
   */
  export type SocialMediaPlatformSpecificDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaPlatformSpecific
     */
    select?: SocialMediaPlatformSpecificSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaPlatformSpecific
     */
    omit?: SocialMediaPlatformSpecificOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaPlatformSpecificInclude<ExtArgs> | null
    /**
     * Filter which SocialMediaPlatformSpecific to delete.
     */
    where: SocialMediaPlatformSpecificWhereUniqueInput
  }

  /**
   * SocialMediaPlatformSpecific deleteMany
   */
  export type SocialMediaPlatformSpecificDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialMediaPlatformSpecifics to delete
     */
    where?: SocialMediaPlatformSpecificWhereInput
    /**
     * Limit how many SocialMediaPlatformSpecifics to delete.
     */
    limit?: number
  }

  /**
   * SocialMediaPlatformSpecific without action
   */
  export type SocialMediaPlatformSpecificDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMediaPlatformSpecific
     */
    select?: SocialMediaPlatformSpecificSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMediaPlatformSpecific
     */
    omit?: SocialMediaPlatformSpecificOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaPlatformSpecificInclude<ExtArgs> | null
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


  export const AthleteTypeInputScalarFieldEnum: {
    id: 'id',
    input_id: 'input_id',
    athlete_type: 'athlete_type'
  };

  export type AthleteTypeInputScalarFieldEnum = (typeof AthleteTypeInputScalarFieldEnum)[keyof typeof AthleteTypeInputScalarFieldEnum]


  export const CollegeInputScalarFieldEnum: {
    id: 'id',
    input_id: 'input_id',
    college: 'college',
    conference: 'conference'
  };

  export type CollegeInputScalarFieldEnum = (typeof CollegeInputScalarFieldEnum)[keyof typeof CollegeInputScalarFieldEnum]


  export const SportInputScalarFieldEnum: {
    id: 'id',
    input_id: 'input_id',
    sport: 'sport',
    position: 'position'
  };

  export type SportInputScalarFieldEnum = (typeof SportInputScalarFieldEnum)[keyof typeof SportInputScalarFieldEnum]


  export const SocialMediaInputScalarFieldEnum: {
    id: 'id',
    input_id: 'input_id',
    platform: 'platform',
    followers: 'followers'
  };

  export type SocialMediaInputScalarFieldEnum = (typeof SocialMediaInputScalarFieldEnum)[keyof typeof SocialMediaInputScalarFieldEnum]


  export const CalculationInputScalarFieldEnum: {
    id: 'id',
    output_id: 'output_id',
    athlete_type_input_id: 'athlete_type_input_id',
    sport_input_id: 'sport_input_id'
  };

  export type CalculationInputScalarFieldEnum = (typeof CalculationInputScalarFieldEnum)[keyof typeof CalculationInputScalarFieldEnum]


  export const CalculationOutputScalarFieldEnum: {
    id: 'id',
    college_name: 'college_name',
    img_low: 'img_low',
    img_high: 'img_high',
    vid_low: 'vid_low',
    vid_high: 'vid_high',
    ncv_low: 'ncv_low',
    ncv_high: 'ncv_high'
  };

  export type CalculationOutputScalarFieldEnum = (typeof CalculationOutputScalarFieldEnum)[keyof typeof CalculationOutputScalarFieldEnum]


  export const SocialMediaPlatformSpecificScalarFieldEnum: {
    id: 'id',
    output_id: 'output_id',
    name: 'name',
    img_low: 'img_low',
    img_high: 'img_high',
    vid_low: 'vid_low',
    vid_high: 'vid_high'
  };

  export type SocialMediaPlatformSpecificScalarFieldEnum = (typeof SocialMediaPlatformSpecificScalarFieldEnum)[keyof typeof SocialMediaPlatformSpecificScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type AthleteTypeInputWhereInput = {
    AND?: AthleteTypeInputWhereInput | AthleteTypeInputWhereInput[]
    OR?: AthleteTypeInputWhereInput[]
    NOT?: AthleteTypeInputWhereInput | AthleteTypeInputWhereInput[]
    id?: StringFilter<"AthleteTypeInput"> | string
    input_id?: StringFilter<"AthleteTypeInput"> | string
    athlete_type?: StringFilter<"AthleteTypeInput"> | string
    calculationInput?: XOR<CalculationInputScalarRelationFilter, CalculationInputWhereInput>
  }

  export type AthleteTypeInputOrderByWithRelationInput = {
    id?: SortOrder
    input_id?: SortOrder
    athlete_type?: SortOrder
    calculationInput?: CalculationInputOrderByWithRelationInput
  }

  export type AthleteTypeInputWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    input_id?: string
    AND?: AthleteTypeInputWhereInput | AthleteTypeInputWhereInput[]
    OR?: AthleteTypeInputWhereInput[]
    NOT?: AthleteTypeInputWhereInput | AthleteTypeInputWhereInput[]
    athlete_type?: StringFilter<"AthleteTypeInput"> | string
    calculationInput?: XOR<CalculationInputScalarRelationFilter, CalculationInputWhereInput>
  }, "id" | "input_id">

  export type AthleteTypeInputOrderByWithAggregationInput = {
    id?: SortOrder
    input_id?: SortOrder
    athlete_type?: SortOrder
    _count?: AthleteTypeInputCountOrderByAggregateInput
    _max?: AthleteTypeInputMaxOrderByAggregateInput
    _min?: AthleteTypeInputMinOrderByAggregateInput
  }

  export type AthleteTypeInputScalarWhereWithAggregatesInput = {
    AND?: AthleteTypeInputScalarWhereWithAggregatesInput | AthleteTypeInputScalarWhereWithAggregatesInput[]
    OR?: AthleteTypeInputScalarWhereWithAggregatesInput[]
    NOT?: AthleteTypeInputScalarWhereWithAggregatesInput | AthleteTypeInputScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AthleteTypeInput"> | string
    input_id?: StringWithAggregatesFilter<"AthleteTypeInput"> | string
    athlete_type?: StringWithAggregatesFilter<"AthleteTypeInput"> | string
  }

  export type CollegeInputWhereInput = {
    AND?: CollegeInputWhereInput | CollegeInputWhereInput[]
    OR?: CollegeInputWhereInput[]
    NOT?: CollegeInputWhereInput | CollegeInputWhereInput[]
    id?: StringFilter<"CollegeInput"> | string
    input_id?: StringFilter<"CollegeInput"> | string
    college?: StringFilter<"CollegeInput"> | string
    conference?: StringFilter<"CollegeInput"> | string
    calculationInput?: XOR<CalculationInputScalarRelationFilter, CalculationInputWhereInput>
  }

  export type CollegeInputOrderByWithRelationInput = {
    id?: SortOrder
    input_id?: SortOrder
    college?: SortOrder
    conference?: SortOrder
    calculationInput?: CalculationInputOrderByWithRelationInput
  }

  export type CollegeInputWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollegeInputWhereInput | CollegeInputWhereInput[]
    OR?: CollegeInputWhereInput[]
    NOT?: CollegeInputWhereInput | CollegeInputWhereInput[]
    input_id?: StringFilter<"CollegeInput"> | string
    college?: StringFilter<"CollegeInput"> | string
    conference?: StringFilter<"CollegeInput"> | string
    calculationInput?: XOR<CalculationInputScalarRelationFilter, CalculationInputWhereInput>
  }, "id">

  export type CollegeInputOrderByWithAggregationInput = {
    id?: SortOrder
    input_id?: SortOrder
    college?: SortOrder
    conference?: SortOrder
    _count?: CollegeInputCountOrderByAggregateInput
    _max?: CollegeInputMaxOrderByAggregateInput
    _min?: CollegeInputMinOrderByAggregateInput
  }

  export type CollegeInputScalarWhereWithAggregatesInput = {
    AND?: CollegeInputScalarWhereWithAggregatesInput | CollegeInputScalarWhereWithAggregatesInput[]
    OR?: CollegeInputScalarWhereWithAggregatesInput[]
    NOT?: CollegeInputScalarWhereWithAggregatesInput | CollegeInputScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CollegeInput"> | string
    input_id?: StringWithAggregatesFilter<"CollegeInput"> | string
    college?: StringWithAggregatesFilter<"CollegeInput"> | string
    conference?: StringWithAggregatesFilter<"CollegeInput"> | string
  }

  export type SportInputWhereInput = {
    AND?: SportInputWhereInput | SportInputWhereInput[]
    OR?: SportInputWhereInput[]
    NOT?: SportInputWhereInput | SportInputWhereInput[]
    id?: StringFilter<"SportInput"> | string
    input_id?: StringFilter<"SportInput"> | string
    sport?: StringFilter<"SportInput"> | string
    position?: StringNullableFilter<"SportInput"> | string | null
    calculationInput?: XOR<CalculationInputNullableScalarRelationFilter, CalculationInputWhereInput> | null
  }

  export type SportInputOrderByWithRelationInput = {
    id?: SortOrder
    input_id?: SortOrder
    sport?: SortOrder
    position?: SortOrderInput | SortOrder
    calculationInput?: CalculationInputOrderByWithRelationInput
  }

  export type SportInputWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    input_id?: string
    AND?: SportInputWhereInput | SportInputWhereInput[]
    OR?: SportInputWhereInput[]
    NOT?: SportInputWhereInput | SportInputWhereInput[]
    sport?: StringFilter<"SportInput"> | string
    position?: StringNullableFilter<"SportInput"> | string | null
    calculationInput?: XOR<CalculationInputNullableScalarRelationFilter, CalculationInputWhereInput> | null
  }, "id" | "input_id">

  export type SportInputOrderByWithAggregationInput = {
    id?: SortOrder
    input_id?: SortOrder
    sport?: SortOrder
    position?: SortOrderInput | SortOrder
    _count?: SportInputCountOrderByAggregateInput
    _max?: SportInputMaxOrderByAggregateInput
    _min?: SportInputMinOrderByAggregateInput
  }

  export type SportInputScalarWhereWithAggregatesInput = {
    AND?: SportInputScalarWhereWithAggregatesInput | SportInputScalarWhereWithAggregatesInput[]
    OR?: SportInputScalarWhereWithAggregatesInput[]
    NOT?: SportInputScalarWhereWithAggregatesInput | SportInputScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SportInput"> | string
    input_id?: StringWithAggregatesFilter<"SportInput"> | string
    sport?: StringWithAggregatesFilter<"SportInput"> | string
    position?: StringNullableWithAggregatesFilter<"SportInput"> | string | null
  }

  export type SocialMediaInputWhereInput = {
    AND?: SocialMediaInputWhereInput | SocialMediaInputWhereInput[]
    OR?: SocialMediaInputWhereInput[]
    NOT?: SocialMediaInputWhereInput | SocialMediaInputWhereInput[]
    id?: StringFilter<"SocialMediaInput"> | string
    input_id?: StringFilter<"SocialMediaInput"> | string
    platform?: StringFilter<"SocialMediaInput"> | string
    followers?: IntFilter<"SocialMediaInput"> | number
    calculationInput?: XOR<CalculationInputScalarRelationFilter, CalculationInputWhereInput>
  }

  export type SocialMediaInputOrderByWithRelationInput = {
    id?: SortOrder
    input_id?: SortOrder
    platform?: SortOrder
    followers?: SortOrder
    calculationInput?: CalculationInputOrderByWithRelationInput
  }

  export type SocialMediaInputWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SocialMediaInputWhereInput | SocialMediaInputWhereInput[]
    OR?: SocialMediaInputWhereInput[]
    NOT?: SocialMediaInputWhereInput | SocialMediaInputWhereInput[]
    input_id?: StringFilter<"SocialMediaInput"> | string
    platform?: StringFilter<"SocialMediaInput"> | string
    followers?: IntFilter<"SocialMediaInput"> | number
    calculationInput?: XOR<CalculationInputScalarRelationFilter, CalculationInputWhereInput>
  }, "id">

  export type SocialMediaInputOrderByWithAggregationInput = {
    id?: SortOrder
    input_id?: SortOrder
    platform?: SortOrder
    followers?: SortOrder
    _count?: SocialMediaInputCountOrderByAggregateInput
    _avg?: SocialMediaInputAvgOrderByAggregateInput
    _max?: SocialMediaInputMaxOrderByAggregateInput
    _min?: SocialMediaInputMinOrderByAggregateInput
    _sum?: SocialMediaInputSumOrderByAggregateInput
  }

  export type SocialMediaInputScalarWhereWithAggregatesInput = {
    AND?: SocialMediaInputScalarWhereWithAggregatesInput | SocialMediaInputScalarWhereWithAggregatesInput[]
    OR?: SocialMediaInputScalarWhereWithAggregatesInput[]
    NOT?: SocialMediaInputScalarWhereWithAggregatesInput | SocialMediaInputScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialMediaInput"> | string
    input_id?: StringWithAggregatesFilter<"SocialMediaInput"> | string
    platform?: StringWithAggregatesFilter<"SocialMediaInput"> | string
    followers?: IntWithAggregatesFilter<"SocialMediaInput"> | number
  }

  export type CalculationInputWhereInput = {
    AND?: CalculationInputWhereInput | CalculationInputWhereInput[]
    OR?: CalculationInputWhereInput[]
    NOT?: CalculationInputWhereInput | CalculationInputWhereInput[]
    id?: StringFilter<"CalculationInput"> | string
    output_id?: StringFilter<"CalculationInput"> | string
    athlete_type_input_id?: StringFilter<"CalculationInput"> | string
    sport_input_id?: StringFilter<"CalculationInput"> | string
    output?: XOR<CalculationOutputScalarRelationFilter, CalculationOutputWhereInput>
    athleteTypeInput?: XOR<AthleteTypeInputNullableScalarRelationFilter, AthleteTypeInputWhereInput> | null
    sportInput?: XOR<SportInputNullableScalarRelationFilter, SportInputWhereInput> | null
    college_input?: CollegeInputListRelationFilter
    social_media_input?: SocialMediaInputListRelationFilter
  }

  export type CalculationInputOrderByWithRelationInput = {
    id?: SortOrder
    output_id?: SortOrder
    athlete_type_input_id?: SortOrder
    sport_input_id?: SortOrder
    output?: CalculationOutputOrderByWithRelationInput
    athleteTypeInput?: AthleteTypeInputOrderByWithRelationInput
    sportInput?: SportInputOrderByWithRelationInput
    college_input?: CollegeInputOrderByRelationAggregateInput
    social_media_input?: SocialMediaInputOrderByRelationAggregateInput
  }

  export type CalculationInputWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    output_id?: string
    athlete_type_input_id?: string
    sport_input_id?: string
    AND?: CalculationInputWhereInput | CalculationInputWhereInput[]
    OR?: CalculationInputWhereInput[]
    NOT?: CalculationInputWhereInput | CalculationInputWhereInput[]
    output?: XOR<CalculationOutputScalarRelationFilter, CalculationOutputWhereInput>
    athleteTypeInput?: XOR<AthleteTypeInputNullableScalarRelationFilter, AthleteTypeInputWhereInput> | null
    sportInput?: XOR<SportInputNullableScalarRelationFilter, SportInputWhereInput> | null
    college_input?: CollegeInputListRelationFilter
    social_media_input?: SocialMediaInputListRelationFilter
  }, "id" | "output_id" | "athlete_type_input_id" | "sport_input_id">

  export type CalculationInputOrderByWithAggregationInput = {
    id?: SortOrder
    output_id?: SortOrder
    athlete_type_input_id?: SortOrder
    sport_input_id?: SortOrder
    _count?: CalculationInputCountOrderByAggregateInput
    _max?: CalculationInputMaxOrderByAggregateInput
    _min?: CalculationInputMinOrderByAggregateInput
  }

  export type CalculationInputScalarWhereWithAggregatesInput = {
    AND?: CalculationInputScalarWhereWithAggregatesInput | CalculationInputScalarWhereWithAggregatesInput[]
    OR?: CalculationInputScalarWhereWithAggregatesInput[]
    NOT?: CalculationInputScalarWhereWithAggregatesInput | CalculationInputScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CalculationInput"> | string
    output_id?: StringWithAggregatesFilter<"CalculationInput"> | string
    athlete_type_input_id?: StringWithAggregatesFilter<"CalculationInput"> | string
    sport_input_id?: StringWithAggregatesFilter<"CalculationInput"> | string
  }

  export type CalculationOutputWhereInput = {
    AND?: CalculationOutputWhereInput | CalculationOutputWhereInput[]
    OR?: CalculationOutputWhereInput[]
    NOT?: CalculationOutputWhereInput | CalculationOutputWhereInput[]
    id?: StringFilter<"CalculationOutput"> | string
    college_name?: StringFilter<"CalculationOutput"> | string
    img_low?: IntFilter<"CalculationOutput"> | number
    img_high?: IntFilter<"CalculationOutput"> | number
    vid_low?: IntFilter<"CalculationOutput"> | number
    vid_high?: IntFilter<"CalculationOutput"> | number
    ncv_low?: IntFilter<"CalculationOutput"> | number
    ncv_high?: IntFilter<"CalculationOutput"> | number
    sm_platform_specific?: SocialMediaPlatformSpecificListRelationFilter
    calculationInput?: XOR<CalculationInputNullableScalarRelationFilter, CalculationInputWhereInput> | null
  }

  export type CalculationOutputOrderByWithRelationInput = {
    id?: SortOrder
    college_name?: SortOrder
    img_low?: SortOrder
    img_high?: SortOrder
    vid_low?: SortOrder
    vid_high?: SortOrder
    ncv_low?: SortOrder
    ncv_high?: SortOrder
    sm_platform_specific?: SocialMediaPlatformSpecificOrderByRelationAggregateInput
    calculationInput?: CalculationInputOrderByWithRelationInput
  }

  export type CalculationOutputWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CalculationOutputWhereInput | CalculationOutputWhereInput[]
    OR?: CalculationOutputWhereInput[]
    NOT?: CalculationOutputWhereInput | CalculationOutputWhereInput[]
    college_name?: StringFilter<"CalculationOutput"> | string
    img_low?: IntFilter<"CalculationOutput"> | number
    img_high?: IntFilter<"CalculationOutput"> | number
    vid_low?: IntFilter<"CalculationOutput"> | number
    vid_high?: IntFilter<"CalculationOutput"> | number
    ncv_low?: IntFilter<"CalculationOutput"> | number
    ncv_high?: IntFilter<"CalculationOutput"> | number
    sm_platform_specific?: SocialMediaPlatformSpecificListRelationFilter
    calculationInput?: XOR<CalculationInputNullableScalarRelationFilter, CalculationInputWhereInput> | null
  }, "id">

  export type CalculationOutputOrderByWithAggregationInput = {
    id?: SortOrder
    college_name?: SortOrder
    img_low?: SortOrder
    img_high?: SortOrder
    vid_low?: SortOrder
    vid_high?: SortOrder
    ncv_low?: SortOrder
    ncv_high?: SortOrder
    _count?: CalculationOutputCountOrderByAggregateInput
    _avg?: CalculationOutputAvgOrderByAggregateInput
    _max?: CalculationOutputMaxOrderByAggregateInput
    _min?: CalculationOutputMinOrderByAggregateInput
    _sum?: CalculationOutputSumOrderByAggregateInput
  }

  export type CalculationOutputScalarWhereWithAggregatesInput = {
    AND?: CalculationOutputScalarWhereWithAggregatesInput | CalculationOutputScalarWhereWithAggregatesInput[]
    OR?: CalculationOutputScalarWhereWithAggregatesInput[]
    NOT?: CalculationOutputScalarWhereWithAggregatesInput | CalculationOutputScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CalculationOutput"> | string
    college_name?: StringWithAggregatesFilter<"CalculationOutput"> | string
    img_low?: IntWithAggregatesFilter<"CalculationOutput"> | number
    img_high?: IntWithAggregatesFilter<"CalculationOutput"> | number
    vid_low?: IntWithAggregatesFilter<"CalculationOutput"> | number
    vid_high?: IntWithAggregatesFilter<"CalculationOutput"> | number
    ncv_low?: IntWithAggregatesFilter<"CalculationOutput"> | number
    ncv_high?: IntWithAggregatesFilter<"CalculationOutput"> | number
  }

  export type SocialMediaPlatformSpecificWhereInput = {
    AND?: SocialMediaPlatformSpecificWhereInput | SocialMediaPlatformSpecificWhereInput[]
    OR?: SocialMediaPlatformSpecificWhereInput[]
    NOT?: SocialMediaPlatformSpecificWhereInput | SocialMediaPlatformSpecificWhereInput[]
    id?: StringFilter<"SocialMediaPlatformSpecific"> | string
    output_id?: StringFilter<"SocialMediaPlatformSpecific"> | string
    name?: StringFilter<"SocialMediaPlatformSpecific"> | string
    img_low?: IntFilter<"SocialMediaPlatformSpecific"> | number
    img_high?: IntFilter<"SocialMediaPlatformSpecific"> | number
    vid_low?: IntFilter<"SocialMediaPlatformSpecific"> | number
    vid_high?: IntFilter<"SocialMediaPlatformSpecific"> | number
    output?: XOR<CalculationOutputScalarRelationFilter, CalculationOutputWhereInput>
  }

  export type SocialMediaPlatformSpecificOrderByWithRelationInput = {
    id?: SortOrder
    output_id?: SortOrder
    name?: SortOrder
    img_low?: SortOrder
    img_high?: SortOrder
    vid_low?: SortOrder
    vid_high?: SortOrder
    output?: CalculationOutputOrderByWithRelationInput
  }

  export type SocialMediaPlatformSpecificWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SocialMediaPlatformSpecificWhereInput | SocialMediaPlatformSpecificWhereInput[]
    OR?: SocialMediaPlatformSpecificWhereInput[]
    NOT?: SocialMediaPlatformSpecificWhereInput | SocialMediaPlatformSpecificWhereInput[]
    output_id?: StringFilter<"SocialMediaPlatformSpecific"> | string
    name?: StringFilter<"SocialMediaPlatformSpecific"> | string
    img_low?: IntFilter<"SocialMediaPlatformSpecific"> | number
    img_high?: IntFilter<"SocialMediaPlatformSpecific"> | number
    vid_low?: IntFilter<"SocialMediaPlatformSpecific"> | number
    vid_high?: IntFilter<"SocialMediaPlatformSpecific"> | number
    output?: XOR<CalculationOutputScalarRelationFilter, CalculationOutputWhereInput>
  }, "id">

  export type SocialMediaPlatformSpecificOrderByWithAggregationInput = {
    id?: SortOrder
    output_id?: SortOrder
    name?: SortOrder
    img_low?: SortOrder
    img_high?: SortOrder
    vid_low?: SortOrder
    vid_high?: SortOrder
    _count?: SocialMediaPlatformSpecificCountOrderByAggregateInput
    _avg?: SocialMediaPlatformSpecificAvgOrderByAggregateInput
    _max?: SocialMediaPlatformSpecificMaxOrderByAggregateInput
    _min?: SocialMediaPlatformSpecificMinOrderByAggregateInput
    _sum?: SocialMediaPlatformSpecificSumOrderByAggregateInput
  }

  export type SocialMediaPlatformSpecificScalarWhereWithAggregatesInput = {
    AND?: SocialMediaPlatformSpecificScalarWhereWithAggregatesInput | SocialMediaPlatformSpecificScalarWhereWithAggregatesInput[]
    OR?: SocialMediaPlatformSpecificScalarWhereWithAggregatesInput[]
    NOT?: SocialMediaPlatformSpecificScalarWhereWithAggregatesInput | SocialMediaPlatformSpecificScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialMediaPlatformSpecific"> | string
    output_id?: StringWithAggregatesFilter<"SocialMediaPlatformSpecific"> | string
    name?: StringWithAggregatesFilter<"SocialMediaPlatformSpecific"> | string
    img_low?: IntWithAggregatesFilter<"SocialMediaPlatformSpecific"> | number
    img_high?: IntWithAggregatesFilter<"SocialMediaPlatformSpecific"> | number
    vid_low?: IntWithAggregatesFilter<"SocialMediaPlatformSpecific"> | number
    vid_high?: IntWithAggregatesFilter<"SocialMediaPlatformSpecific"> | number
  }

  export type AthleteTypeInputCreateInput = {
    id?: string
    athlete_type: string
    calculationInput: CalculationInputCreateNestedOneWithoutAthleteTypeInputInput
  }

  export type AthleteTypeInputUncheckedCreateInput = {
    id?: string
    input_id: string
    athlete_type: string
  }

  export type AthleteTypeInputUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_type?: StringFieldUpdateOperationsInput | string
    calculationInput?: CalculationInputUpdateOneRequiredWithoutAthleteTypeInputNestedInput
  }

  export type AthleteTypeInputUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    input_id?: StringFieldUpdateOperationsInput | string
    athlete_type?: StringFieldUpdateOperationsInput | string
  }

  export type AthleteTypeInputCreateManyInput = {
    id?: string
    input_id: string
    athlete_type: string
  }

  export type AthleteTypeInputUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_type?: StringFieldUpdateOperationsInput | string
  }

  export type AthleteTypeInputUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    input_id?: StringFieldUpdateOperationsInput | string
    athlete_type?: StringFieldUpdateOperationsInput | string
  }

  export type CollegeInputCreateInput = {
    id?: string
    college: string
    conference: string
    calculationInput: CalculationInputCreateNestedOneWithoutCollege_inputInput
  }

  export type CollegeInputUncheckedCreateInput = {
    id?: string
    input_id: string
    college: string
    conference: string
  }

  export type CollegeInputUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    conference?: StringFieldUpdateOperationsInput | string
    calculationInput?: CalculationInputUpdateOneRequiredWithoutCollege_inputNestedInput
  }

  export type CollegeInputUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    input_id?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    conference?: StringFieldUpdateOperationsInput | string
  }

  export type CollegeInputCreateManyInput = {
    id?: string
    input_id: string
    college: string
    conference: string
  }

  export type CollegeInputUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    conference?: StringFieldUpdateOperationsInput | string
  }

  export type CollegeInputUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    input_id?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    conference?: StringFieldUpdateOperationsInput | string
  }

  export type SportInputCreateInput = {
    id?: string
    sport: string
    position?: string | null
    calculationInput?: CalculationInputCreateNestedOneWithoutSportInputInput
  }

  export type SportInputUncheckedCreateInput = {
    id?: string
    input_id: string
    sport: string
    position?: string | null
  }

  export type SportInputUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sport?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    calculationInput?: CalculationInputUpdateOneWithoutSportInputNestedInput
  }

  export type SportInputUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    input_id?: StringFieldUpdateOperationsInput | string
    sport?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportInputCreateManyInput = {
    id?: string
    input_id: string
    sport: string
    position?: string | null
  }

  export type SportInputUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sport?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportInputUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    input_id?: StringFieldUpdateOperationsInput | string
    sport?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SocialMediaInputCreateInput = {
    id?: string
    platform: string
    followers: number
    calculationInput: CalculationInputCreateNestedOneWithoutSocial_media_inputInput
  }

  export type SocialMediaInputUncheckedCreateInput = {
    id?: string
    input_id: string
    platform: string
    followers: number
  }

  export type SocialMediaInputUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
    calculationInput?: CalculationInputUpdateOneRequiredWithoutSocial_media_inputNestedInput
  }

  export type SocialMediaInputUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    input_id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
  }

  export type SocialMediaInputCreateManyInput = {
    id?: string
    input_id: string
    platform: string
    followers: number
  }

  export type SocialMediaInputUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
  }

  export type SocialMediaInputUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    input_id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
  }

  export type CalculationInputCreateInput = {
    id?: string
    athlete_type_input_id: string
    sport_input_id: string
    output: CalculationOutputCreateNestedOneWithoutCalculationInputInput
    athleteTypeInput?: AthleteTypeInputCreateNestedOneWithoutCalculationInputInput
    sportInput?: SportInputCreateNestedOneWithoutCalculationInputInput
    college_input?: CollegeInputCreateNestedManyWithoutCalculationInputInput
    social_media_input?: SocialMediaInputCreateNestedManyWithoutCalculationInputInput
  }

  export type CalculationInputUncheckedCreateInput = {
    id?: string
    output_id: string
    athlete_type_input_id: string
    sport_input_id: string
    athleteTypeInput?: AthleteTypeInputUncheckedCreateNestedOneWithoutCalculationInputInput
    sportInput?: SportInputUncheckedCreateNestedOneWithoutCalculationInputInput
    college_input?: CollegeInputUncheckedCreateNestedManyWithoutCalculationInputInput
    social_media_input?: SocialMediaInputUncheckedCreateNestedManyWithoutCalculationInputInput
  }

  export type CalculationInputUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_type_input_id?: StringFieldUpdateOperationsInput | string
    sport_input_id?: StringFieldUpdateOperationsInput | string
    output?: CalculationOutputUpdateOneRequiredWithoutCalculationInputNestedInput
    athleteTypeInput?: AthleteTypeInputUpdateOneWithoutCalculationInputNestedInput
    sportInput?: SportInputUpdateOneWithoutCalculationInputNestedInput
    college_input?: CollegeInputUpdateManyWithoutCalculationInputNestedInput
    social_media_input?: SocialMediaInputUpdateManyWithoutCalculationInputNestedInput
  }

  export type CalculationInputUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    output_id?: StringFieldUpdateOperationsInput | string
    athlete_type_input_id?: StringFieldUpdateOperationsInput | string
    sport_input_id?: StringFieldUpdateOperationsInput | string
    athleteTypeInput?: AthleteTypeInputUncheckedUpdateOneWithoutCalculationInputNestedInput
    sportInput?: SportInputUncheckedUpdateOneWithoutCalculationInputNestedInput
    college_input?: CollegeInputUncheckedUpdateManyWithoutCalculationInputNestedInput
    social_media_input?: SocialMediaInputUncheckedUpdateManyWithoutCalculationInputNestedInput
  }

  export type CalculationInputCreateManyInput = {
    id?: string
    output_id: string
    athlete_type_input_id: string
    sport_input_id: string
  }

  export type CalculationInputUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_type_input_id?: StringFieldUpdateOperationsInput | string
    sport_input_id?: StringFieldUpdateOperationsInput | string
  }

  export type CalculationInputUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    output_id?: StringFieldUpdateOperationsInput | string
    athlete_type_input_id?: StringFieldUpdateOperationsInput | string
    sport_input_id?: StringFieldUpdateOperationsInput | string
  }

  export type CalculationOutputCreateInput = {
    id?: string
    college_name: string
    img_low: number
    img_high: number
    vid_low: number
    vid_high: number
    ncv_low: number
    ncv_high: number
    sm_platform_specific?: SocialMediaPlatformSpecificCreateNestedManyWithoutOutputInput
    calculationInput?: CalculationInputCreateNestedOneWithoutOutputInput
  }

  export type CalculationOutputUncheckedCreateInput = {
    id?: string
    college_name: string
    img_low: number
    img_high: number
    vid_low: number
    vid_high: number
    ncv_low: number
    ncv_high: number
    sm_platform_specific?: SocialMediaPlatformSpecificUncheckedCreateNestedManyWithoutOutputInput
    calculationInput?: CalculationInputUncheckedCreateNestedOneWithoutOutputInput
  }

  export type CalculationOutputUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    college_name?: StringFieldUpdateOperationsInput | string
    img_low?: IntFieldUpdateOperationsInput | number
    img_high?: IntFieldUpdateOperationsInput | number
    vid_low?: IntFieldUpdateOperationsInput | number
    vid_high?: IntFieldUpdateOperationsInput | number
    ncv_low?: IntFieldUpdateOperationsInput | number
    ncv_high?: IntFieldUpdateOperationsInput | number
    sm_platform_specific?: SocialMediaPlatformSpecificUpdateManyWithoutOutputNestedInput
    calculationInput?: CalculationInputUpdateOneWithoutOutputNestedInput
  }

  export type CalculationOutputUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    college_name?: StringFieldUpdateOperationsInput | string
    img_low?: IntFieldUpdateOperationsInput | number
    img_high?: IntFieldUpdateOperationsInput | number
    vid_low?: IntFieldUpdateOperationsInput | number
    vid_high?: IntFieldUpdateOperationsInput | number
    ncv_low?: IntFieldUpdateOperationsInput | number
    ncv_high?: IntFieldUpdateOperationsInput | number
    sm_platform_specific?: SocialMediaPlatformSpecificUncheckedUpdateManyWithoutOutputNestedInput
    calculationInput?: CalculationInputUncheckedUpdateOneWithoutOutputNestedInput
  }

  export type CalculationOutputCreateManyInput = {
    id?: string
    college_name: string
    img_low: number
    img_high: number
    vid_low: number
    vid_high: number
    ncv_low: number
    ncv_high: number
  }

  export type CalculationOutputUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    college_name?: StringFieldUpdateOperationsInput | string
    img_low?: IntFieldUpdateOperationsInput | number
    img_high?: IntFieldUpdateOperationsInput | number
    vid_low?: IntFieldUpdateOperationsInput | number
    vid_high?: IntFieldUpdateOperationsInput | number
    ncv_low?: IntFieldUpdateOperationsInput | number
    ncv_high?: IntFieldUpdateOperationsInput | number
  }

  export type CalculationOutputUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    college_name?: StringFieldUpdateOperationsInput | string
    img_low?: IntFieldUpdateOperationsInput | number
    img_high?: IntFieldUpdateOperationsInput | number
    vid_low?: IntFieldUpdateOperationsInput | number
    vid_high?: IntFieldUpdateOperationsInput | number
    ncv_low?: IntFieldUpdateOperationsInput | number
    ncv_high?: IntFieldUpdateOperationsInput | number
  }

  export type SocialMediaPlatformSpecificCreateInput = {
    id?: string
    name: string
    img_low: number
    img_high: number
    vid_low: number
    vid_high: number
    output: CalculationOutputCreateNestedOneWithoutSm_platform_specificInput
  }

  export type SocialMediaPlatformSpecificUncheckedCreateInput = {
    id?: string
    output_id: string
    name: string
    img_low: number
    img_high: number
    vid_low: number
    vid_high: number
  }

  export type SocialMediaPlatformSpecificUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img_low?: IntFieldUpdateOperationsInput | number
    img_high?: IntFieldUpdateOperationsInput | number
    vid_low?: IntFieldUpdateOperationsInput | number
    vid_high?: IntFieldUpdateOperationsInput | number
    output?: CalculationOutputUpdateOneRequiredWithoutSm_platform_specificNestedInput
  }

  export type SocialMediaPlatformSpecificUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    output_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img_low?: IntFieldUpdateOperationsInput | number
    img_high?: IntFieldUpdateOperationsInput | number
    vid_low?: IntFieldUpdateOperationsInput | number
    vid_high?: IntFieldUpdateOperationsInput | number
  }

  export type SocialMediaPlatformSpecificCreateManyInput = {
    id?: string
    output_id: string
    name: string
    img_low: number
    img_high: number
    vid_low: number
    vid_high: number
  }

  export type SocialMediaPlatformSpecificUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img_low?: IntFieldUpdateOperationsInput | number
    img_high?: IntFieldUpdateOperationsInput | number
    vid_low?: IntFieldUpdateOperationsInput | number
    vid_high?: IntFieldUpdateOperationsInput | number
  }

  export type SocialMediaPlatformSpecificUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    output_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img_low?: IntFieldUpdateOperationsInput | number
    img_high?: IntFieldUpdateOperationsInput | number
    vid_low?: IntFieldUpdateOperationsInput | number
    vid_high?: IntFieldUpdateOperationsInput | number
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

  export type CalculationInputScalarRelationFilter = {
    is?: CalculationInputWhereInput
    isNot?: CalculationInputWhereInput
  }

  export type AthleteTypeInputCountOrderByAggregateInput = {
    id?: SortOrder
    input_id?: SortOrder
    athlete_type?: SortOrder
  }

  export type AthleteTypeInputMaxOrderByAggregateInput = {
    id?: SortOrder
    input_id?: SortOrder
    athlete_type?: SortOrder
  }

  export type AthleteTypeInputMinOrderByAggregateInput = {
    id?: SortOrder
    input_id?: SortOrder
    athlete_type?: SortOrder
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

  export type CollegeInputCountOrderByAggregateInput = {
    id?: SortOrder
    input_id?: SortOrder
    college?: SortOrder
    conference?: SortOrder
  }

  export type CollegeInputMaxOrderByAggregateInput = {
    id?: SortOrder
    input_id?: SortOrder
    college?: SortOrder
    conference?: SortOrder
  }

  export type CollegeInputMinOrderByAggregateInput = {
    id?: SortOrder
    input_id?: SortOrder
    college?: SortOrder
    conference?: SortOrder
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

  export type CalculationInputNullableScalarRelationFilter = {
    is?: CalculationInputWhereInput | null
    isNot?: CalculationInputWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SportInputCountOrderByAggregateInput = {
    id?: SortOrder
    input_id?: SortOrder
    sport?: SortOrder
    position?: SortOrder
  }

  export type SportInputMaxOrderByAggregateInput = {
    id?: SortOrder
    input_id?: SortOrder
    sport?: SortOrder
    position?: SortOrder
  }

  export type SportInputMinOrderByAggregateInput = {
    id?: SortOrder
    input_id?: SortOrder
    sport?: SortOrder
    position?: SortOrder
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

  export type SocialMediaInputCountOrderByAggregateInput = {
    id?: SortOrder
    input_id?: SortOrder
    platform?: SortOrder
    followers?: SortOrder
  }

  export type SocialMediaInputAvgOrderByAggregateInput = {
    followers?: SortOrder
  }

  export type SocialMediaInputMaxOrderByAggregateInput = {
    id?: SortOrder
    input_id?: SortOrder
    platform?: SortOrder
    followers?: SortOrder
  }

  export type SocialMediaInputMinOrderByAggregateInput = {
    id?: SortOrder
    input_id?: SortOrder
    platform?: SortOrder
    followers?: SortOrder
  }

  export type SocialMediaInputSumOrderByAggregateInput = {
    followers?: SortOrder
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

  export type CalculationOutputScalarRelationFilter = {
    is?: CalculationOutputWhereInput
    isNot?: CalculationOutputWhereInput
  }

  export type AthleteTypeInputNullableScalarRelationFilter = {
    is?: AthleteTypeInputWhereInput | null
    isNot?: AthleteTypeInputWhereInput | null
  }

  export type SportInputNullableScalarRelationFilter = {
    is?: SportInputWhereInput | null
    isNot?: SportInputWhereInput | null
  }

  export type CollegeInputListRelationFilter = {
    every?: CollegeInputWhereInput
    some?: CollegeInputWhereInput
    none?: CollegeInputWhereInput
  }

  export type SocialMediaInputListRelationFilter = {
    every?: SocialMediaInputWhereInput
    some?: SocialMediaInputWhereInput
    none?: SocialMediaInputWhereInput
  }

  export type CollegeInputOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SocialMediaInputOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CalculationInputCountOrderByAggregateInput = {
    id?: SortOrder
    output_id?: SortOrder
    athlete_type_input_id?: SortOrder
    sport_input_id?: SortOrder
  }

  export type CalculationInputMaxOrderByAggregateInput = {
    id?: SortOrder
    output_id?: SortOrder
    athlete_type_input_id?: SortOrder
    sport_input_id?: SortOrder
  }

  export type CalculationInputMinOrderByAggregateInput = {
    id?: SortOrder
    output_id?: SortOrder
    athlete_type_input_id?: SortOrder
    sport_input_id?: SortOrder
  }

  export type SocialMediaPlatformSpecificListRelationFilter = {
    every?: SocialMediaPlatformSpecificWhereInput
    some?: SocialMediaPlatformSpecificWhereInput
    none?: SocialMediaPlatformSpecificWhereInput
  }

  export type SocialMediaPlatformSpecificOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CalculationOutputCountOrderByAggregateInput = {
    id?: SortOrder
    college_name?: SortOrder
    img_low?: SortOrder
    img_high?: SortOrder
    vid_low?: SortOrder
    vid_high?: SortOrder
    ncv_low?: SortOrder
    ncv_high?: SortOrder
  }

  export type CalculationOutputAvgOrderByAggregateInput = {
    img_low?: SortOrder
    img_high?: SortOrder
    vid_low?: SortOrder
    vid_high?: SortOrder
    ncv_low?: SortOrder
    ncv_high?: SortOrder
  }

  export type CalculationOutputMaxOrderByAggregateInput = {
    id?: SortOrder
    college_name?: SortOrder
    img_low?: SortOrder
    img_high?: SortOrder
    vid_low?: SortOrder
    vid_high?: SortOrder
    ncv_low?: SortOrder
    ncv_high?: SortOrder
  }

  export type CalculationOutputMinOrderByAggregateInput = {
    id?: SortOrder
    college_name?: SortOrder
    img_low?: SortOrder
    img_high?: SortOrder
    vid_low?: SortOrder
    vid_high?: SortOrder
    ncv_low?: SortOrder
    ncv_high?: SortOrder
  }

  export type CalculationOutputSumOrderByAggregateInput = {
    img_low?: SortOrder
    img_high?: SortOrder
    vid_low?: SortOrder
    vid_high?: SortOrder
    ncv_low?: SortOrder
    ncv_high?: SortOrder
  }

  export type SocialMediaPlatformSpecificCountOrderByAggregateInput = {
    id?: SortOrder
    output_id?: SortOrder
    name?: SortOrder
    img_low?: SortOrder
    img_high?: SortOrder
    vid_low?: SortOrder
    vid_high?: SortOrder
  }

  export type SocialMediaPlatformSpecificAvgOrderByAggregateInput = {
    img_low?: SortOrder
    img_high?: SortOrder
    vid_low?: SortOrder
    vid_high?: SortOrder
  }

  export type SocialMediaPlatformSpecificMaxOrderByAggregateInput = {
    id?: SortOrder
    output_id?: SortOrder
    name?: SortOrder
    img_low?: SortOrder
    img_high?: SortOrder
    vid_low?: SortOrder
    vid_high?: SortOrder
  }

  export type SocialMediaPlatformSpecificMinOrderByAggregateInput = {
    id?: SortOrder
    output_id?: SortOrder
    name?: SortOrder
    img_low?: SortOrder
    img_high?: SortOrder
    vid_low?: SortOrder
    vid_high?: SortOrder
  }

  export type SocialMediaPlatformSpecificSumOrderByAggregateInput = {
    img_low?: SortOrder
    img_high?: SortOrder
    vid_low?: SortOrder
    vid_high?: SortOrder
  }

  export type CalculationInputCreateNestedOneWithoutAthleteTypeInputInput = {
    create?: XOR<CalculationInputCreateWithoutAthleteTypeInputInput, CalculationInputUncheckedCreateWithoutAthleteTypeInputInput>
    connectOrCreate?: CalculationInputCreateOrConnectWithoutAthleteTypeInputInput
    connect?: CalculationInputWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CalculationInputUpdateOneRequiredWithoutAthleteTypeInputNestedInput = {
    create?: XOR<CalculationInputCreateWithoutAthleteTypeInputInput, CalculationInputUncheckedCreateWithoutAthleteTypeInputInput>
    connectOrCreate?: CalculationInputCreateOrConnectWithoutAthleteTypeInputInput
    upsert?: CalculationInputUpsertWithoutAthleteTypeInputInput
    connect?: CalculationInputWhereUniqueInput
    update?: XOR<XOR<CalculationInputUpdateToOneWithWhereWithoutAthleteTypeInputInput, CalculationInputUpdateWithoutAthleteTypeInputInput>, CalculationInputUncheckedUpdateWithoutAthleteTypeInputInput>
  }

  export type CalculationInputCreateNestedOneWithoutCollege_inputInput = {
    create?: XOR<CalculationInputCreateWithoutCollege_inputInput, CalculationInputUncheckedCreateWithoutCollege_inputInput>
    connectOrCreate?: CalculationInputCreateOrConnectWithoutCollege_inputInput
    connect?: CalculationInputWhereUniqueInput
  }

  export type CalculationInputUpdateOneRequiredWithoutCollege_inputNestedInput = {
    create?: XOR<CalculationInputCreateWithoutCollege_inputInput, CalculationInputUncheckedCreateWithoutCollege_inputInput>
    connectOrCreate?: CalculationInputCreateOrConnectWithoutCollege_inputInput
    upsert?: CalculationInputUpsertWithoutCollege_inputInput
    connect?: CalculationInputWhereUniqueInput
    update?: XOR<XOR<CalculationInputUpdateToOneWithWhereWithoutCollege_inputInput, CalculationInputUpdateWithoutCollege_inputInput>, CalculationInputUncheckedUpdateWithoutCollege_inputInput>
  }

  export type CalculationInputCreateNestedOneWithoutSportInputInput = {
    create?: XOR<CalculationInputCreateWithoutSportInputInput, CalculationInputUncheckedCreateWithoutSportInputInput>
    connectOrCreate?: CalculationInputCreateOrConnectWithoutSportInputInput
    connect?: CalculationInputWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CalculationInputUpdateOneWithoutSportInputNestedInput = {
    create?: XOR<CalculationInputCreateWithoutSportInputInput, CalculationInputUncheckedCreateWithoutSportInputInput>
    connectOrCreate?: CalculationInputCreateOrConnectWithoutSportInputInput
    upsert?: CalculationInputUpsertWithoutSportInputInput
    disconnect?: CalculationInputWhereInput | boolean
    delete?: CalculationInputWhereInput | boolean
    connect?: CalculationInputWhereUniqueInput
    update?: XOR<XOR<CalculationInputUpdateToOneWithWhereWithoutSportInputInput, CalculationInputUpdateWithoutSportInputInput>, CalculationInputUncheckedUpdateWithoutSportInputInput>
  }

  export type CalculationInputCreateNestedOneWithoutSocial_media_inputInput = {
    create?: XOR<CalculationInputCreateWithoutSocial_media_inputInput, CalculationInputUncheckedCreateWithoutSocial_media_inputInput>
    connectOrCreate?: CalculationInputCreateOrConnectWithoutSocial_media_inputInput
    connect?: CalculationInputWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CalculationInputUpdateOneRequiredWithoutSocial_media_inputNestedInput = {
    create?: XOR<CalculationInputCreateWithoutSocial_media_inputInput, CalculationInputUncheckedCreateWithoutSocial_media_inputInput>
    connectOrCreate?: CalculationInputCreateOrConnectWithoutSocial_media_inputInput
    upsert?: CalculationInputUpsertWithoutSocial_media_inputInput
    connect?: CalculationInputWhereUniqueInput
    update?: XOR<XOR<CalculationInputUpdateToOneWithWhereWithoutSocial_media_inputInput, CalculationInputUpdateWithoutSocial_media_inputInput>, CalculationInputUncheckedUpdateWithoutSocial_media_inputInput>
  }

  export type CalculationOutputCreateNestedOneWithoutCalculationInputInput = {
    create?: XOR<CalculationOutputCreateWithoutCalculationInputInput, CalculationOutputUncheckedCreateWithoutCalculationInputInput>
    connectOrCreate?: CalculationOutputCreateOrConnectWithoutCalculationInputInput
    connect?: CalculationOutputWhereUniqueInput
  }

  export type AthleteTypeInputCreateNestedOneWithoutCalculationInputInput = {
    create?: XOR<AthleteTypeInputCreateWithoutCalculationInputInput, AthleteTypeInputUncheckedCreateWithoutCalculationInputInput>
    connectOrCreate?: AthleteTypeInputCreateOrConnectWithoutCalculationInputInput
    connect?: AthleteTypeInputWhereUniqueInput
  }

  export type SportInputCreateNestedOneWithoutCalculationInputInput = {
    create?: XOR<SportInputCreateWithoutCalculationInputInput, SportInputUncheckedCreateWithoutCalculationInputInput>
    connectOrCreate?: SportInputCreateOrConnectWithoutCalculationInputInput
    connect?: SportInputWhereUniqueInput
  }

  export type CollegeInputCreateNestedManyWithoutCalculationInputInput = {
    create?: XOR<CollegeInputCreateWithoutCalculationInputInput, CollegeInputUncheckedCreateWithoutCalculationInputInput> | CollegeInputCreateWithoutCalculationInputInput[] | CollegeInputUncheckedCreateWithoutCalculationInputInput[]
    connectOrCreate?: CollegeInputCreateOrConnectWithoutCalculationInputInput | CollegeInputCreateOrConnectWithoutCalculationInputInput[]
    createMany?: CollegeInputCreateManyCalculationInputInputEnvelope
    connect?: CollegeInputWhereUniqueInput | CollegeInputWhereUniqueInput[]
  }

  export type SocialMediaInputCreateNestedManyWithoutCalculationInputInput = {
    create?: XOR<SocialMediaInputCreateWithoutCalculationInputInput, SocialMediaInputUncheckedCreateWithoutCalculationInputInput> | SocialMediaInputCreateWithoutCalculationInputInput[] | SocialMediaInputUncheckedCreateWithoutCalculationInputInput[]
    connectOrCreate?: SocialMediaInputCreateOrConnectWithoutCalculationInputInput | SocialMediaInputCreateOrConnectWithoutCalculationInputInput[]
    createMany?: SocialMediaInputCreateManyCalculationInputInputEnvelope
    connect?: SocialMediaInputWhereUniqueInput | SocialMediaInputWhereUniqueInput[]
  }

  export type AthleteTypeInputUncheckedCreateNestedOneWithoutCalculationInputInput = {
    create?: XOR<AthleteTypeInputCreateWithoutCalculationInputInput, AthleteTypeInputUncheckedCreateWithoutCalculationInputInput>
    connectOrCreate?: AthleteTypeInputCreateOrConnectWithoutCalculationInputInput
    connect?: AthleteTypeInputWhereUniqueInput
  }

  export type SportInputUncheckedCreateNestedOneWithoutCalculationInputInput = {
    create?: XOR<SportInputCreateWithoutCalculationInputInput, SportInputUncheckedCreateWithoutCalculationInputInput>
    connectOrCreate?: SportInputCreateOrConnectWithoutCalculationInputInput
    connect?: SportInputWhereUniqueInput
  }

  export type CollegeInputUncheckedCreateNestedManyWithoutCalculationInputInput = {
    create?: XOR<CollegeInputCreateWithoutCalculationInputInput, CollegeInputUncheckedCreateWithoutCalculationInputInput> | CollegeInputCreateWithoutCalculationInputInput[] | CollegeInputUncheckedCreateWithoutCalculationInputInput[]
    connectOrCreate?: CollegeInputCreateOrConnectWithoutCalculationInputInput | CollegeInputCreateOrConnectWithoutCalculationInputInput[]
    createMany?: CollegeInputCreateManyCalculationInputInputEnvelope
    connect?: CollegeInputWhereUniqueInput | CollegeInputWhereUniqueInput[]
  }

  export type SocialMediaInputUncheckedCreateNestedManyWithoutCalculationInputInput = {
    create?: XOR<SocialMediaInputCreateWithoutCalculationInputInput, SocialMediaInputUncheckedCreateWithoutCalculationInputInput> | SocialMediaInputCreateWithoutCalculationInputInput[] | SocialMediaInputUncheckedCreateWithoutCalculationInputInput[]
    connectOrCreate?: SocialMediaInputCreateOrConnectWithoutCalculationInputInput | SocialMediaInputCreateOrConnectWithoutCalculationInputInput[]
    createMany?: SocialMediaInputCreateManyCalculationInputInputEnvelope
    connect?: SocialMediaInputWhereUniqueInput | SocialMediaInputWhereUniqueInput[]
  }

  export type CalculationOutputUpdateOneRequiredWithoutCalculationInputNestedInput = {
    create?: XOR<CalculationOutputCreateWithoutCalculationInputInput, CalculationOutputUncheckedCreateWithoutCalculationInputInput>
    connectOrCreate?: CalculationOutputCreateOrConnectWithoutCalculationInputInput
    upsert?: CalculationOutputUpsertWithoutCalculationInputInput
    connect?: CalculationOutputWhereUniqueInput
    update?: XOR<XOR<CalculationOutputUpdateToOneWithWhereWithoutCalculationInputInput, CalculationOutputUpdateWithoutCalculationInputInput>, CalculationOutputUncheckedUpdateWithoutCalculationInputInput>
  }

  export type AthleteTypeInputUpdateOneWithoutCalculationInputNestedInput = {
    create?: XOR<AthleteTypeInputCreateWithoutCalculationInputInput, AthleteTypeInputUncheckedCreateWithoutCalculationInputInput>
    connectOrCreate?: AthleteTypeInputCreateOrConnectWithoutCalculationInputInput
    upsert?: AthleteTypeInputUpsertWithoutCalculationInputInput
    disconnect?: AthleteTypeInputWhereInput | boolean
    delete?: AthleteTypeInputWhereInput | boolean
    connect?: AthleteTypeInputWhereUniqueInput
    update?: XOR<XOR<AthleteTypeInputUpdateToOneWithWhereWithoutCalculationInputInput, AthleteTypeInputUpdateWithoutCalculationInputInput>, AthleteTypeInputUncheckedUpdateWithoutCalculationInputInput>
  }

  export type SportInputUpdateOneWithoutCalculationInputNestedInput = {
    create?: XOR<SportInputCreateWithoutCalculationInputInput, SportInputUncheckedCreateWithoutCalculationInputInput>
    connectOrCreate?: SportInputCreateOrConnectWithoutCalculationInputInput
    upsert?: SportInputUpsertWithoutCalculationInputInput
    disconnect?: SportInputWhereInput | boolean
    delete?: SportInputWhereInput | boolean
    connect?: SportInputWhereUniqueInput
    update?: XOR<XOR<SportInputUpdateToOneWithWhereWithoutCalculationInputInput, SportInputUpdateWithoutCalculationInputInput>, SportInputUncheckedUpdateWithoutCalculationInputInput>
  }

  export type CollegeInputUpdateManyWithoutCalculationInputNestedInput = {
    create?: XOR<CollegeInputCreateWithoutCalculationInputInput, CollegeInputUncheckedCreateWithoutCalculationInputInput> | CollegeInputCreateWithoutCalculationInputInput[] | CollegeInputUncheckedCreateWithoutCalculationInputInput[]
    connectOrCreate?: CollegeInputCreateOrConnectWithoutCalculationInputInput | CollegeInputCreateOrConnectWithoutCalculationInputInput[]
    upsert?: CollegeInputUpsertWithWhereUniqueWithoutCalculationInputInput | CollegeInputUpsertWithWhereUniqueWithoutCalculationInputInput[]
    createMany?: CollegeInputCreateManyCalculationInputInputEnvelope
    set?: CollegeInputWhereUniqueInput | CollegeInputWhereUniqueInput[]
    disconnect?: CollegeInputWhereUniqueInput | CollegeInputWhereUniqueInput[]
    delete?: CollegeInputWhereUniqueInput | CollegeInputWhereUniqueInput[]
    connect?: CollegeInputWhereUniqueInput | CollegeInputWhereUniqueInput[]
    update?: CollegeInputUpdateWithWhereUniqueWithoutCalculationInputInput | CollegeInputUpdateWithWhereUniqueWithoutCalculationInputInput[]
    updateMany?: CollegeInputUpdateManyWithWhereWithoutCalculationInputInput | CollegeInputUpdateManyWithWhereWithoutCalculationInputInput[]
    deleteMany?: CollegeInputScalarWhereInput | CollegeInputScalarWhereInput[]
  }

  export type SocialMediaInputUpdateManyWithoutCalculationInputNestedInput = {
    create?: XOR<SocialMediaInputCreateWithoutCalculationInputInput, SocialMediaInputUncheckedCreateWithoutCalculationInputInput> | SocialMediaInputCreateWithoutCalculationInputInput[] | SocialMediaInputUncheckedCreateWithoutCalculationInputInput[]
    connectOrCreate?: SocialMediaInputCreateOrConnectWithoutCalculationInputInput | SocialMediaInputCreateOrConnectWithoutCalculationInputInput[]
    upsert?: SocialMediaInputUpsertWithWhereUniqueWithoutCalculationInputInput | SocialMediaInputUpsertWithWhereUniqueWithoutCalculationInputInput[]
    createMany?: SocialMediaInputCreateManyCalculationInputInputEnvelope
    set?: SocialMediaInputWhereUniqueInput | SocialMediaInputWhereUniqueInput[]
    disconnect?: SocialMediaInputWhereUniqueInput | SocialMediaInputWhereUniqueInput[]
    delete?: SocialMediaInputWhereUniqueInput | SocialMediaInputWhereUniqueInput[]
    connect?: SocialMediaInputWhereUniqueInput | SocialMediaInputWhereUniqueInput[]
    update?: SocialMediaInputUpdateWithWhereUniqueWithoutCalculationInputInput | SocialMediaInputUpdateWithWhereUniqueWithoutCalculationInputInput[]
    updateMany?: SocialMediaInputUpdateManyWithWhereWithoutCalculationInputInput | SocialMediaInputUpdateManyWithWhereWithoutCalculationInputInput[]
    deleteMany?: SocialMediaInputScalarWhereInput | SocialMediaInputScalarWhereInput[]
  }

  export type AthleteTypeInputUncheckedUpdateOneWithoutCalculationInputNestedInput = {
    create?: XOR<AthleteTypeInputCreateWithoutCalculationInputInput, AthleteTypeInputUncheckedCreateWithoutCalculationInputInput>
    connectOrCreate?: AthleteTypeInputCreateOrConnectWithoutCalculationInputInput
    upsert?: AthleteTypeInputUpsertWithoutCalculationInputInput
    disconnect?: AthleteTypeInputWhereInput | boolean
    delete?: AthleteTypeInputWhereInput | boolean
    connect?: AthleteTypeInputWhereUniqueInput
    update?: XOR<XOR<AthleteTypeInputUpdateToOneWithWhereWithoutCalculationInputInput, AthleteTypeInputUpdateWithoutCalculationInputInput>, AthleteTypeInputUncheckedUpdateWithoutCalculationInputInput>
  }

  export type SportInputUncheckedUpdateOneWithoutCalculationInputNestedInput = {
    create?: XOR<SportInputCreateWithoutCalculationInputInput, SportInputUncheckedCreateWithoutCalculationInputInput>
    connectOrCreate?: SportInputCreateOrConnectWithoutCalculationInputInput
    upsert?: SportInputUpsertWithoutCalculationInputInput
    disconnect?: SportInputWhereInput | boolean
    delete?: SportInputWhereInput | boolean
    connect?: SportInputWhereUniqueInput
    update?: XOR<XOR<SportInputUpdateToOneWithWhereWithoutCalculationInputInput, SportInputUpdateWithoutCalculationInputInput>, SportInputUncheckedUpdateWithoutCalculationInputInput>
  }

  export type CollegeInputUncheckedUpdateManyWithoutCalculationInputNestedInput = {
    create?: XOR<CollegeInputCreateWithoutCalculationInputInput, CollegeInputUncheckedCreateWithoutCalculationInputInput> | CollegeInputCreateWithoutCalculationInputInput[] | CollegeInputUncheckedCreateWithoutCalculationInputInput[]
    connectOrCreate?: CollegeInputCreateOrConnectWithoutCalculationInputInput | CollegeInputCreateOrConnectWithoutCalculationInputInput[]
    upsert?: CollegeInputUpsertWithWhereUniqueWithoutCalculationInputInput | CollegeInputUpsertWithWhereUniqueWithoutCalculationInputInput[]
    createMany?: CollegeInputCreateManyCalculationInputInputEnvelope
    set?: CollegeInputWhereUniqueInput | CollegeInputWhereUniqueInput[]
    disconnect?: CollegeInputWhereUniqueInput | CollegeInputWhereUniqueInput[]
    delete?: CollegeInputWhereUniqueInput | CollegeInputWhereUniqueInput[]
    connect?: CollegeInputWhereUniqueInput | CollegeInputWhereUniqueInput[]
    update?: CollegeInputUpdateWithWhereUniqueWithoutCalculationInputInput | CollegeInputUpdateWithWhereUniqueWithoutCalculationInputInput[]
    updateMany?: CollegeInputUpdateManyWithWhereWithoutCalculationInputInput | CollegeInputUpdateManyWithWhereWithoutCalculationInputInput[]
    deleteMany?: CollegeInputScalarWhereInput | CollegeInputScalarWhereInput[]
  }

  export type SocialMediaInputUncheckedUpdateManyWithoutCalculationInputNestedInput = {
    create?: XOR<SocialMediaInputCreateWithoutCalculationInputInput, SocialMediaInputUncheckedCreateWithoutCalculationInputInput> | SocialMediaInputCreateWithoutCalculationInputInput[] | SocialMediaInputUncheckedCreateWithoutCalculationInputInput[]
    connectOrCreate?: SocialMediaInputCreateOrConnectWithoutCalculationInputInput | SocialMediaInputCreateOrConnectWithoutCalculationInputInput[]
    upsert?: SocialMediaInputUpsertWithWhereUniqueWithoutCalculationInputInput | SocialMediaInputUpsertWithWhereUniqueWithoutCalculationInputInput[]
    createMany?: SocialMediaInputCreateManyCalculationInputInputEnvelope
    set?: SocialMediaInputWhereUniqueInput | SocialMediaInputWhereUniqueInput[]
    disconnect?: SocialMediaInputWhereUniqueInput | SocialMediaInputWhereUniqueInput[]
    delete?: SocialMediaInputWhereUniqueInput | SocialMediaInputWhereUniqueInput[]
    connect?: SocialMediaInputWhereUniqueInput | SocialMediaInputWhereUniqueInput[]
    update?: SocialMediaInputUpdateWithWhereUniqueWithoutCalculationInputInput | SocialMediaInputUpdateWithWhereUniqueWithoutCalculationInputInput[]
    updateMany?: SocialMediaInputUpdateManyWithWhereWithoutCalculationInputInput | SocialMediaInputUpdateManyWithWhereWithoutCalculationInputInput[]
    deleteMany?: SocialMediaInputScalarWhereInput | SocialMediaInputScalarWhereInput[]
  }

  export type SocialMediaPlatformSpecificCreateNestedManyWithoutOutputInput = {
    create?: XOR<SocialMediaPlatformSpecificCreateWithoutOutputInput, SocialMediaPlatformSpecificUncheckedCreateWithoutOutputInput> | SocialMediaPlatformSpecificCreateWithoutOutputInput[] | SocialMediaPlatformSpecificUncheckedCreateWithoutOutputInput[]
    connectOrCreate?: SocialMediaPlatformSpecificCreateOrConnectWithoutOutputInput | SocialMediaPlatformSpecificCreateOrConnectWithoutOutputInput[]
    createMany?: SocialMediaPlatformSpecificCreateManyOutputInputEnvelope
    connect?: SocialMediaPlatformSpecificWhereUniqueInput | SocialMediaPlatformSpecificWhereUniqueInput[]
  }

  export type CalculationInputCreateNestedOneWithoutOutputInput = {
    create?: XOR<CalculationInputCreateWithoutOutputInput, CalculationInputUncheckedCreateWithoutOutputInput>
    connectOrCreate?: CalculationInputCreateOrConnectWithoutOutputInput
    connect?: CalculationInputWhereUniqueInput
  }

  export type SocialMediaPlatformSpecificUncheckedCreateNestedManyWithoutOutputInput = {
    create?: XOR<SocialMediaPlatformSpecificCreateWithoutOutputInput, SocialMediaPlatformSpecificUncheckedCreateWithoutOutputInput> | SocialMediaPlatformSpecificCreateWithoutOutputInput[] | SocialMediaPlatformSpecificUncheckedCreateWithoutOutputInput[]
    connectOrCreate?: SocialMediaPlatformSpecificCreateOrConnectWithoutOutputInput | SocialMediaPlatformSpecificCreateOrConnectWithoutOutputInput[]
    createMany?: SocialMediaPlatformSpecificCreateManyOutputInputEnvelope
    connect?: SocialMediaPlatformSpecificWhereUniqueInput | SocialMediaPlatformSpecificWhereUniqueInput[]
  }

  export type CalculationInputUncheckedCreateNestedOneWithoutOutputInput = {
    create?: XOR<CalculationInputCreateWithoutOutputInput, CalculationInputUncheckedCreateWithoutOutputInput>
    connectOrCreate?: CalculationInputCreateOrConnectWithoutOutputInput
    connect?: CalculationInputWhereUniqueInput
  }

  export type SocialMediaPlatformSpecificUpdateManyWithoutOutputNestedInput = {
    create?: XOR<SocialMediaPlatformSpecificCreateWithoutOutputInput, SocialMediaPlatformSpecificUncheckedCreateWithoutOutputInput> | SocialMediaPlatformSpecificCreateWithoutOutputInput[] | SocialMediaPlatformSpecificUncheckedCreateWithoutOutputInput[]
    connectOrCreate?: SocialMediaPlatformSpecificCreateOrConnectWithoutOutputInput | SocialMediaPlatformSpecificCreateOrConnectWithoutOutputInput[]
    upsert?: SocialMediaPlatformSpecificUpsertWithWhereUniqueWithoutOutputInput | SocialMediaPlatformSpecificUpsertWithWhereUniqueWithoutOutputInput[]
    createMany?: SocialMediaPlatformSpecificCreateManyOutputInputEnvelope
    set?: SocialMediaPlatformSpecificWhereUniqueInput | SocialMediaPlatformSpecificWhereUniqueInput[]
    disconnect?: SocialMediaPlatformSpecificWhereUniqueInput | SocialMediaPlatformSpecificWhereUniqueInput[]
    delete?: SocialMediaPlatformSpecificWhereUniqueInput | SocialMediaPlatformSpecificWhereUniqueInput[]
    connect?: SocialMediaPlatformSpecificWhereUniqueInput | SocialMediaPlatformSpecificWhereUniqueInput[]
    update?: SocialMediaPlatformSpecificUpdateWithWhereUniqueWithoutOutputInput | SocialMediaPlatformSpecificUpdateWithWhereUniqueWithoutOutputInput[]
    updateMany?: SocialMediaPlatformSpecificUpdateManyWithWhereWithoutOutputInput | SocialMediaPlatformSpecificUpdateManyWithWhereWithoutOutputInput[]
    deleteMany?: SocialMediaPlatformSpecificScalarWhereInput | SocialMediaPlatformSpecificScalarWhereInput[]
  }

  export type CalculationInputUpdateOneWithoutOutputNestedInput = {
    create?: XOR<CalculationInputCreateWithoutOutputInput, CalculationInputUncheckedCreateWithoutOutputInput>
    connectOrCreate?: CalculationInputCreateOrConnectWithoutOutputInput
    upsert?: CalculationInputUpsertWithoutOutputInput
    disconnect?: CalculationInputWhereInput | boolean
    delete?: CalculationInputWhereInput | boolean
    connect?: CalculationInputWhereUniqueInput
    update?: XOR<XOR<CalculationInputUpdateToOneWithWhereWithoutOutputInput, CalculationInputUpdateWithoutOutputInput>, CalculationInputUncheckedUpdateWithoutOutputInput>
  }

  export type SocialMediaPlatformSpecificUncheckedUpdateManyWithoutOutputNestedInput = {
    create?: XOR<SocialMediaPlatformSpecificCreateWithoutOutputInput, SocialMediaPlatformSpecificUncheckedCreateWithoutOutputInput> | SocialMediaPlatformSpecificCreateWithoutOutputInput[] | SocialMediaPlatformSpecificUncheckedCreateWithoutOutputInput[]
    connectOrCreate?: SocialMediaPlatformSpecificCreateOrConnectWithoutOutputInput | SocialMediaPlatformSpecificCreateOrConnectWithoutOutputInput[]
    upsert?: SocialMediaPlatformSpecificUpsertWithWhereUniqueWithoutOutputInput | SocialMediaPlatformSpecificUpsertWithWhereUniqueWithoutOutputInput[]
    createMany?: SocialMediaPlatformSpecificCreateManyOutputInputEnvelope
    set?: SocialMediaPlatformSpecificWhereUniqueInput | SocialMediaPlatformSpecificWhereUniqueInput[]
    disconnect?: SocialMediaPlatformSpecificWhereUniqueInput | SocialMediaPlatformSpecificWhereUniqueInput[]
    delete?: SocialMediaPlatformSpecificWhereUniqueInput | SocialMediaPlatformSpecificWhereUniqueInput[]
    connect?: SocialMediaPlatformSpecificWhereUniqueInput | SocialMediaPlatformSpecificWhereUniqueInput[]
    update?: SocialMediaPlatformSpecificUpdateWithWhereUniqueWithoutOutputInput | SocialMediaPlatformSpecificUpdateWithWhereUniqueWithoutOutputInput[]
    updateMany?: SocialMediaPlatformSpecificUpdateManyWithWhereWithoutOutputInput | SocialMediaPlatformSpecificUpdateManyWithWhereWithoutOutputInput[]
    deleteMany?: SocialMediaPlatformSpecificScalarWhereInput | SocialMediaPlatformSpecificScalarWhereInput[]
  }

  export type CalculationInputUncheckedUpdateOneWithoutOutputNestedInput = {
    create?: XOR<CalculationInputCreateWithoutOutputInput, CalculationInputUncheckedCreateWithoutOutputInput>
    connectOrCreate?: CalculationInputCreateOrConnectWithoutOutputInput
    upsert?: CalculationInputUpsertWithoutOutputInput
    disconnect?: CalculationInputWhereInput | boolean
    delete?: CalculationInputWhereInput | boolean
    connect?: CalculationInputWhereUniqueInput
    update?: XOR<XOR<CalculationInputUpdateToOneWithWhereWithoutOutputInput, CalculationInputUpdateWithoutOutputInput>, CalculationInputUncheckedUpdateWithoutOutputInput>
  }

  export type CalculationOutputCreateNestedOneWithoutSm_platform_specificInput = {
    create?: XOR<CalculationOutputCreateWithoutSm_platform_specificInput, CalculationOutputUncheckedCreateWithoutSm_platform_specificInput>
    connectOrCreate?: CalculationOutputCreateOrConnectWithoutSm_platform_specificInput
    connect?: CalculationOutputWhereUniqueInput
  }

  export type CalculationOutputUpdateOneRequiredWithoutSm_platform_specificNestedInput = {
    create?: XOR<CalculationOutputCreateWithoutSm_platform_specificInput, CalculationOutputUncheckedCreateWithoutSm_platform_specificInput>
    connectOrCreate?: CalculationOutputCreateOrConnectWithoutSm_platform_specificInput
    upsert?: CalculationOutputUpsertWithoutSm_platform_specificInput
    connect?: CalculationOutputWhereUniqueInput
    update?: XOR<XOR<CalculationOutputUpdateToOneWithWhereWithoutSm_platform_specificInput, CalculationOutputUpdateWithoutSm_platform_specificInput>, CalculationOutputUncheckedUpdateWithoutSm_platform_specificInput>
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

  export type CalculationInputCreateWithoutAthleteTypeInputInput = {
    id?: string
    athlete_type_input_id: string
    sport_input_id: string
    output: CalculationOutputCreateNestedOneWithoutCalculationInputInput
    sportInput?: SportInputCreateNestedOneWithoutCalculationInputInput
    college_input?: CollegeInputCreateNestedManyWithoutCalculationInputInput
    social_media_input?: SocialMediaInputCreateNestedManyWithoutCalculationInputInput
  }

  export type CalculationInputUncheckedCreateWithoutAthleteTypeInputInput = {
    id?: string
    output_id: string
    athlete_type_input_id: string
    sport_input_id: string
    sportInput?: SportInputUncheckedCreateNestedOneWithoutCalculationInputInput
    college_input?: CollegeInputUncheckedCreateNestedManyWithoutCalculationInputInput
    social_media_input?: SocialMediaInputUncheckedCreateNestedManyWithoutCalculationInputInput
  }

  export type CalculationInputCreateOrConnectWithoutAthleteTypeInputInput = {
    where: CalculationInputWhereUniqueInput
    create: XOR<CalculationInputCreateWithoutAthleteTypeInputInput, CalculationInputUncheckedCreateWithoutAthleteTypeInputInput>
  }

  export type CalculationInputUpsertWithoutAthleteTypeInputInput = {
    update: XOR<CalculationInputUpdateWithoutAthleteTypeInputInput, CalculationInputUncheckedUpdateWithoutAthleteTypeInputInput>
    create: XOR<CalculationInputCreateWithoutAthleteTypeInputInput, CalculationInputUncheckedCreateWithoutAthleteTypeInputInput>
    where?: CalculationInputWhereInput
  }

  export type CalculationInputUpdateToOneWithWhereWithoutAthleteTypeInputInput = {
    where?: CalculationInputWhereInput
    data: XOR<CalculationInputUpdateWithoutAthleteTypeInputInput, CalculationInputUncheckedUpdateWithoutAthleteTypeInputInput>
  }

  export type CalculationInputUpdateWithoutAthleteTypeInputInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_type_input_id?: StringFieldUpdateOperationsInput | string
    sport_input_id?: StringFieldUpdateOperationsInput | string
    output?: CalculationOutputUpdateOneRequiredWithoutCalculationInputNestedInput
    sportInput?: SportInputUpdateOneWithoutCalculationInputNestedInput
    college_input?: CollegeInputUpdateManyWithoutCalculationInputNestedInput
    social_media_input?: SocialMediaInputUpdateManyWithoutCalculationInputNestedInput
  }

  export type CalculationInputUncheckedUpdateWithoutAthleteTypeInputInput = {
    id?: StringFieldUpdateOperationsInput | string
    output_id?: StringFieldUpdateOperationsInput | string
    athlete_type_input_id?: StringFieldUpdateOperationsInput | string
    sport_input_id?: StringFieldUpdateOperationsInput | string
    sportInput?: SportInputUncheckedUpdateOneWithoutCalculationInputNestedInput
    college_input?: CollegeInputUncheckedUpdateManyWithoutCalculationInputNestedInput
    social_media_input?: SocialMediaInputUncheckedUpdateManyWithoutCalculationInputNestedInput
  }

  export type CalculationInputCreateWithoutCollege_inputInput = {
    id?: string
    athlete_type_input_id: string
    sport_input_id: string
    output: CalculationOutputCreateNestedOneWithoutCalculationInputInput
    athleteTypeInput?: AthleteTypeInputCreateNestedOneWithoutCalculationInputInput
    sportInput?: SportInputCreateNestedOneWithoutCalculationInputInput
    social_media_input?: SocialMediaInputCreateNestedManyWithoutCalculationInputInput
  }

  export type CalculationInputUncheckedCreateWithoutCollege_inputInput = {
    id?: string
    output_id: string
    athlete_type_input_id: string
    sport_input_id: string
    athleteTypeInput?: AthleteTypeInputUncheckedCreateNestedOneWithoutCalculationInputInput
    sportInput?: SportInputUncheckedCreateNestedOneWithoutCalculationInputInput
    social_media_input?: SocialMediaInputUncheckedCreateNestedManyWithoutCalculationInputInput
  }

  export type CalculationInputCreateOrConnectWithoutCollege_inputInput = {
    where: CalculationInputWhereUniqueInput
    create: XOR<CalculationInputCreateWithoutCollege_inputInput, CalculationInputUncheckedCreateWithoutCollege_inputInput>
  }

  export type CalculationInputUpsertWithoutCollege_inputInput = {
    update: XOR<CalculationInputUpdateWithoutCollege_inputInput, CalculationInputUncheckedUpdateWithoutCollege_inputInput>
    create: XOR<CalculationInputCreateWithoutCollege_inputInput, CalculationInputUncheckedCreateWithoutCollege_inputInput>
    where?: CalculationInputWhereInput
  }

  export type CalculationInputUpdateToOneWithWhereWithoutCollege_inputInput = {
    where?: CalculationInputWhereInput
    data: XOR<CalculationInputUpdateWithoutCollege_inputInput, CalculationInputUncheckedUpdateWithoutCollege_inputInput>
  }

  export type CalculationInputUpdateWithoutCollege_inputInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_type_input_id?: StringFieldUpdateOperationsInput | string
    sport_input_id?: StringFieldUpdateOperationsInput | string
    output?: CalculationOutputUpdateOneRequiredWithoutCalculationInputNestedInput
    athleteTypeInput?: AthleteTypeInputUpdateOneWithoutCalculationInputNestedInput
    sportInput?: SportInputUpdateOneWithoutCalculationInputNestedInput
    social_media_input?: SocialMediaInputUpdateManyWithoutCalculationInputNestedInput
  }

  export type CalculationInputUncheckedUpdateWithoutCollege_inputInput = {
    id?: StringFieldUpdateOperationsInput | string
    output_id?: StringFieldUpdateOperationsInput | string
    athlete_type_input_id?: StringFieldUpdateOperationsInput | string
    sport_input_id?: StringFieldUpdateOperationsInput | string
    athleteTypeInput?: AthleteTypeInputUncheckedUpdateOneWithoutCalculationInputNestedInput
    sportInput?: SportInputUncheckedUpdateOneWithoutCalculationInputNestedInput
    social_media_input?: SocialMediaInputUncheckedUpdateManyWithoutCalculationInputNestedInput
  }

  export type CalculationInputCreateWithoutSportInputInput = {
    id?: string
    athlete_type_input_id: string
    sport_input_id: string
    output: CalculationOutputCreateNestedOneWithoutCalculationInputInput
    athleteTypeInput?: AthleteTypeInputCreateNestedOneWithoutCalculationInputInput
    college_input?: CollegeInputCreateNestedManyWithoutCalculationInputInput
    social_media_input?: SocialMediaInputCreateNestedManyWithoutCalculationInputInput
  }

  export type CalculationInputUncheckedCreateWithoutSportInputInput = {
    id?: string
    output_id: string
    athlete_type_input_id: string
    sport_input_id: string
    athleteTypeInput?: AthleteTypeInputUncheckedCreateNestedOneWithoutCalculationInputInput
    college_input?: CollegeInputUncheckedCreateNestedManyWithoutCalculationInputInput
    social_media_input?: SocialMediaInputUncheckedCreateNestedManyWithoutCalculationInputInput
  }

  export type CalculationInputCreateOrConnectWithoutSportInputInput = {
    where: CalculationInputWhereUniqueInput
    create: XOR<CalculationInputCreateWithoutSportInputInput, CalculationInputUncheckedCreateWithoutSportInputInput>
  }

  export type CalculationInputUpsertWithoutSportInputInput = {
    update: XOR<CalculationInputUpdateWithoutSportInputInput, CalculationInputUncheckedUpdateWithoutSportInputInput>
    create: XOR<CalculationInputCreateWithoutSportInputInput, CalculationInputUncheckedCreateWithoutSportInputInput>
    where?: CalculationInputWhereInput
  }

  export type CalculationInputUpdateToOneWithWhereWithoutSportInputInput = {
    where?: CalculationInputWhereInput
    data: XOR<CalculationInputUpdateWithoutSportInputInput, CalculationInputUncheckedUpdateWithoutSportInputInput>
  }

  export type CalculationInputUpdateWithoutSportInputInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_type_input_id?: StringFieldUpdateOperationsInput | string
    sport_input_id?: StringFieldUpdateOperationsInput | string
    output?: CalculationOutputUpdateOneRequiredWithoutCalculationInputNestedInput
    athleteTypeInput?: AthleteTypeInputUpdateOneWithoutCalculationInputNestedInput
    college_input?: CollegeInputUpdateManyWithoutCalculationInputNestedInput
    social_media_input?: SocialMediaInputUpdateManyWithoutCalculationInputNestedInput
  }

  export type CalculationInputUncheckedUpdateWithoutSportInputInput = {
    id?: StringFieldUpdateOperationsInput | string
    output_id?: StringFieldUpdateOperationsInput | string
    athlete_type_input_id?: StringFieldUpdateOperationsInput | string
    sport_input_id?: StringFieldUpdateOperationsInput | string
    athleteTypeInput?: AthleteTypeInputUncheckedUpdateOneWithoutCalculationInputNestedInput
    college_input?: CollegeInputUncheckedUpdateManyWithoutCalculationInputNestedInput
    social_media_input?: SocialMediaInputUncheckedUpdateManyWithoutCalculationInputNestedInput
  }

  export type CalculationInputCreateWithoutSocial_media_inputInput = {
    id?: string
    athlete_type_input_id: string
    sport_input_id: string
    output: CalculationOutputCreateNestedOneWithoutCalculationInputInput
    athleteTypeInput?: AthleteTypeInputCreateNestedOneWithoutCalculationInputInput
    sportInput?: SportInputCreateNestedOneWithoutCalculationInputInput
    college_input?: CollegeInputCreateNestedManyWithoutCalculationInputInput
  }

  export type CalculationInputUncheckedCreateWithoutSocial_media_inputInput = {
    id?: string
    output_id: string
    athlete_type_input_id: string
    sport_input_id: string
    athleteTypeInput?: AthleteTypeInputUncheckedCreateNestedOneWithoutCalculationInputInput
    sportInput?: SportInputUncheckedCreateNestedOneWithoutCalculationInputInput
    college_input?: CollegeInputUncheckedCreateNestedManyWithoutCalculationInputInput
  }

  export type CalculationInputCreateOrConnectWithoutSocial_media_inputInput = {
    where: CalculationInputWhereUniqueInput
    create: XOR<CalculationInputCreateWithoutSocial_media_inputInput, CalculationInputUncheckedCreateWithoutSocial_media_inputInput>
  }

  export type CalculationInputUpsertWithoutSocial_media_inputInput = {
    update: XOR<CalculationInputUpdateWithoutSocial_media_inputInput, CalculationInputUncheckedUpdateWithoutSocial_media_inputInput>
    create: XOR<CalculationInputCreateWithoutSocial_media_inputInput, CalculationInputUncheckedCreateWithoutSocial_media_inputInput>
    where?: CalculationInputWhereInput
  }

  export type CalculationInputUpdateToOneWithWhereWithoutSocial_media_inputInput = {
    where?: CalculationInputWhereInput
    data: XOR<CalculationInputUpdateWithoutSocial_media_inputInput, CalculationInputUncheckedUpdateWithoutSocial_media_inputInput>
  }

  export type CalculationInputUpdateWithoutSocial_media_inputInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_type_input_id?: StringFieldUpdateOperationsInput | string
    sport_input_id?: StringFieldUpdateOperationsInput | string
    output?: CalculationOutputUpdateOneRequiredWithoutCalculationInputNestedInput
    athleteTypeInput?: AthleteTypeInputUpdateOneWithoutCalculationInputNestedInput
    sportInput?: SportInputUpdateOneWithoutCalculationInputNestedInput
    college_input?: CollegeInputUpdateManyWithoutCalculationInputNestedInput
  }

  export type CalculationInputUncheckedUpdateWithoutSocial_media_inputInput = {
    id?: StringFieldUpdateOperationsInput | string
    output_id?: StringFieldUpdateOperationsInput | string
    athlete_type_input_id?: StringFieldUpdateOperationsInput | string
    sport_input_id?: StringFieldUpdateOperationsInput | string
    athleteTypeInput?: AthleteTypeInputUncheckedUpdateOneWithoutCalculationInputNestedInput
    sportInput?: SportInputUncheckedUpdateOneWithoutCalculationInputNestedInput
    college_input?: CollegeInputUncheckedUpdateManyWithoutCalculationInputNestedInput
  }

  export type CalculationOutputCreateWithoutCalculationInputInput = {
    id?: string
    college_name: string
    img_low: number
    img_high: number
    vid_low: number
    vid_high: number
    ncv_low: number
    ncv_high: number
    sm_platform_specific?: SocialMediaPlatformSpecificCreateNestedManyWithoutOutputInput
  }

  export type CalculationOutputUncheckedCreateWithoutCalculationInputInput = {
    id?: string
    college_name: string
    img_low: number
    img_high: number
    vid_low: number
    vid_high: number
    ncv_low: number
    ncv_high: number
    sm_platform_specific?: SocialMediaPlatformSpecificUncheckedCreateNestedManyWithoutOutputInput
  }

  export type CalculationOutputCreateOrConnectWithoutCalculationInputInput = {
    where: CalculationOutputWhereUniqueInput
    create: XOR<CalculationOutputCreateWithoutCalculationInputInput, CalculationOutputUncheckedCreateWithoutCalculationInputInput>
  }

  export type AthleteTypeInputCreateWithoutCalculationInputInput = {
    id?: string
    athlete_type: string
  }

  export type AthleteTypeInputUncheckedCreateWithoutCalculationInputInput = {
    id?: string
    athlete_type: string
  }

  export type AthleteTypeInputCreateOrConnectWithoutCalculationInputInput = {
    where: AthleteTypeInputWhereUniqueInput
    create: XOR<AthleteTypeInputCreateWithoutCalculationInputInput, AthleteTypeInputUncheckedCreateWithoutCalculationInputInput>
  }

  export type SportInputCreateWithoutCalculationInputInput = {
    id?: string
    sport: string
    position?: string | null
  }

  export type SportInputUncheckedCreateWithoutCalculationInputInput = {
    id?: string
    sport: string
    position?: string | null
  }

  export type SportInputCreateOrConnectWithoutCalculationInputInput = {
    where: SportInputWhereUniqueInput
    create: XOR<SportInputCreateWithoutCalculationInputInput, SportInputUncheckedCreateWithoutCalculationInputInput>
  }

  export type CollegeInputCreateWithoutCalculationInputInput = {
    id?: string
    college: string
    conference: string
  }

  export type CollegeInputUncheckedCreateWithoutCalculationInputInput = {
    id?: string
    college: string
    conference: string
  }

  export type CollegeInputCreateOrConnectWithoutCalculationInputInput = {
    where: CollegeInputWhereUniqueInput
    create: XOR<CollegeInputCreateWithoutCalculationInputInput, CollegeInputUncheckedCreateWithoutCalculationInputInput>
  }

  export type CollegeInputCreateManyCalculationInputInputEnvelope = {
    data: CollegeInputCreateManyCalculationInputInput | CollegeInputCreateManyCalculationInputInput[]
    skipDuplicates?: boolean
  }

  export type SocialMediaInputCreateWithoutCalculationInputInput = {
    id?: string
    platform: string
    followers: number
  }

  export type SocialMediaInputUncheckedCreateWithoutCalculationInputInput = {
    id?: string
    platform: string
    followers: number
  }

  export type SocialMediaInputCreateOrConnectWithoutCalculationInputInput = {
    where: SocialMediaInputWhereUniqueInput
    create: XOR<SocialMediaInputCreateWithoutCalculationInputInput, SocialMediaInputUncheckedCreateWithoutCalculationInputInput>
  }

  export type SocialMediaInputCreateManyCalculationInputInputEnvelope = {
    data: SocialMediaInputCreateManyCalculationInputInput | SocialMediaInputCreateManyCalculationInputInput[]
    skipDuplicates?: boolean
  }

  export type CalculationOutputUpsertWithoutCalculationInputInput = {
    update: XOR<CalculationOutputUpdateWithoutCalculationInputInput, CalculationOutputUncheckedUpdateWithoutCalculationInputInput>
    create: XOR<CalculationOutputCreateWithoutCalculationInputInput, CalculationOutputUncheckedCreateWithoutCalculationInputInput>
    where?: CalculationOutputWhereInput
  }

  export type CalculationOutputUpdateToOneWithWhereWithoutCalculationInputInput = {
    where?: CalculationOutputWhereInput
    data: XOR<CalculationOutputUpdateWithoutCalculationInputInput, CalculationOutputUncheckedUpdateWithoutCalculationInputInput>
  }

  export type CalculationOutputUpdateWithoutCalculationInputInput = {
    id?: StringFieldUpdateOperationsInput | string
    college_name?: StringFieldUpdateOperationsInput | string
    img_low?: IntFieldUpdateOperationsInput | number
    img_high?: IntFieldUpdateOperationsInput | number
    vid_low?: IntFieldUpdateOperationsInput | number
    vid_high?: IntFieldUpdateOperationsInput | number
    ncv_low?: IntFieldUpdateOperationsInput | number
    ncv_high?: IntFieldUpdateOperationsInput | number
    sm_platform_specific?: SocialMediaPlatformSpecificUpdateManyWithoutOutputNestedInput
  }

  export type CalculationOutputUncheckedUpdateWithoutCalculationInputInput = {
    id?: StringFieldUpdateOperationsInput | string
    college_name?: StringFieldUpdateOperationsInput | string
    img_low?: IntFieldUpdateOperationsInput | number
    img_high?: IntFieldUpdateOperationsInput | number
    vid_low?: IntFieldUpdateOperationsInput | number
    vid_high?: IntFieldUpdateOperationsInput | number
    ncv_low?: IntFieldUpdateOperationsInput | number
    ncv_high?: IntFieldUpdateOperationsInput | number
    sm_platform_specific?: SocialMediaPlatformSpecificUncheckedUpdateManyWithoutOutputNestedInput
  }

  export type AthleteTypeInputUpsertWithoutCalculationInputInput = {
    update: XOR<AthleteTypeInputUpdateWithoutCalculationInputInput, AthleteTypeInputUncheckedUpdateWithoutCalculationInputInput>
    create: XOR<AthleteTypeInputCreateWithoutCalculationInputInput, AthleteTypeInputUncheckedCreateWithoutCalculationInputInput>
    where?: AthleteTypeInputWhereInput
  }

  export type AthleteTypeInputUpdateToOneWithWhereWithoutCalculationInputInput = {
    where?: AthleteTypeInputWhereInput
    data: XOR<AthleteTypeInputUpdateWithoutCalculationInputInput, AthleteTypeInputUncheckedUpdateWithoutCalculationInputInput>
  }

  export type AthleteTypeInputUpdateWithoutCalculationInputInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_type?: StringFieldUpdateOperationsInput | string
  }

  export type AthleteTypeInputUncheckedUpdateWithoutCalculationInputInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_type?: StringFieldUpdateOperationsInput | string
  }

  export type SportInputUpsertWithoutCalculationInputInput = {
    update: XOR<SportInputUpdateWithoutCalculationInputInput, SportInputUncheckedUpdateWithoutCalculationInputInput>
    create: XOR<SportInputCreateWithoutCalculationInputInput, SportInputUncheckedCreateWithoutCalculationInputInput>
    where?: SportInputWhereInput
  }

  export type SportInputUpdateToOneWithWhereWithoutCalculationInputInput = {
    where?: SportInputWhereInput
    data: XOR<SportInputUpdateWithoutCalculationInputInput, SportInputUncheckedUpdateWithoutCalculationInputInput>
  }

  export type SportInputUpdateWithoutCalculationInputInput = {
    id?: StringFieldUpdateOperationsInput | string
    sport?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportInputUncheckedUpdateWithoutCalculationInputInput = {
    id?: StringFieldUpdateOperationsInput | string
    sport?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollegeInputUpsertWithWhereUniqueWithoutCalculationInputInput = {
    where: CollegeInputWhereUniqueInput
    update: XOR<CollegeInputUpdateWithoutCalculationInputInput, CollegeInputUncheckedUpdateWithoutCalculationInputInput>
    create: XOR<CollegeInputCreateWithoutCalculationInputInput, CollegeInputUncheckedCreateWithoutCalculationInputInput>
  }

  export type CollegeInputUpdateWithWhereUniqueWithoutCalculationInputInput = {
    where: CollegeInputWhereUniqueInput
    data: XOR<CollegeInputUpdateWithoutCalculationInputInput, CollegeInputUncheckedUpdateWithoutCalculationInputInput>
  }

  export type CollegeInputUpdateManyWithWhereWithoutCalculationInputInput = {
    where: CollegeInputScalarWhereInput
    data: XOR<CollegeInputUpdateManyMutationInput, CollegeInputUncheckedUpdateManyWithoutCalculationInputInput>
  }

  export type CollegeInputScalarWhereInput = {
    AND?: CollegeInputScalarWhereInput | CollegeInputScalarWhereInput[]
    OR?: CollegeInputScalarWhereInput[]
    NOT?: CollegeInputScalarWhereInput | CollegeInputScalarWhereInput[]
    id?: StringFilter<"CollegeInput"> | string
    input_id?: StringFilter<"CollegeInput"> | string
    college?: StringFilter<"CollegeInput"> | string
    conference?: StringFilter<"CollegeInput"> | string
  }

  export type SocialMediaInputUpsertWithWhereUniqueWithoutCalculationInputInput = {
    where: SocialMediaInputWhereUniqueInput
    update: XOR<SocialMediaInputUpdateWithoutCalculationInputInput, SocialMediaInputUncheckedUpdateWithoutCalculationInputInput>
    create: XOR<SocialMediaInputCreateWithoutCalculationInputInput, SocialMediaInputUncheckedCreateWithoutCalculationInputInput>
  }

  export type SocialMediaInputUpdateWithWhereUniqueWithoutCalculationInputInput = {
    where: SocialMediaInputWhereUniqueInput
    data: XOR<SocialMediaInputUpdateWithoutCalculationInputInput, SocialMediaInputUncheckedUpdateWithoutCalculationInputInput>
  }

  export type SocialMediaInputUpdateManyWithWhereWithoutCalculationInputInput = {
    where: SocialMediaInputScalarWhereInput
    data: XOR<SocialMediaInputUpdateManyMutationInput, SocialMediaInputUncheckedUpdateManyWithoutCalculationInputInput>
  }

  export type SocialMediaInputScalarWhereInput = {
    AND?: SocialMediaInputScalarWhereInput | SocialMediaInputScalarWhereInput[]
    OR?: SocialMediaInputScalarWhereInput[]
    NOT?: SocialMediaInputScalarWhereInput | SocialMediaInputScalarWhereInput[]
    id?: StringFilter<"SocialMediaInput"> | string
    input_id?: StringFilter<"SocialMediaInput"> | string
    platform?: StringFilter<"SocialMediaInput"> | string
    followers?: IntFilter<"SocialMediaInput"> | number
  }

  export type SocialMediaPlatformSpecificCreateWithoutOutputInput = {
    id?: string
    name: string
    img_low: number
    img_high: number
    vid_low: number
    vid_high: number
  }

  export type SocialMediaPlatformSpecificUncheckedCreateWithoutOutputInput = {
    id?: string
    name: string
    img_low: number
    img_high: number
    vid_low: number
    vid_high: number
  }

  export type SocialMediaPlatformSpecificCreateOrConnectWithoutOutputInput = {
    where: SocialMediaPlatformSpecificWhereUniqueInput
    create: XOR<SocialMediaPlatformSpecificCreateWithoutOutputInput, SocialMediaPlatformSpecificUncheckedCreateWithoutOutputInput>
  }

  export type SocialMediaPlatformSpecificCreateManyOutputInputEnvelope = {
    data: SocialMediaPlatformSpecificCreateManyOutputInput | SocialMediaPlatformSpecificCreateManyOutputInput[]
    skipDuplicates?: boolean
  }

  export type CalculationInputCreateWithoutOutputInput = {
    id?: string
    athlete_type_input_id: string
    sport_input_id: string
    athleteTypeInput?: AthleteTypeInputCreateNestedOneWithoutCalculationInputInput
    sportInput?: SportInputCreateNestedOneWithoutCalculationInputInput
    college_input?: CollegeInputCreateNestedManyWithoutCalculationInputInput
    social_media_input?: SocialMediaInputCreateNestedManyWithoutCalculationInputInput
  }

  export type CalculationInputUncheckedCreateWithoutOutputInput = {
    id?: string
    athlete_type_input_id: string
    sport_input_id: string
    athleteTypeInput?: AthleteTypeInputUncheckedCreateNestedOneWithoutCalculationInputInput
    sportInput?: SportInputUncheckedCreateNestedOneWithoutCalculationInputInput
    college_input?: CollegeInputUncheckedCreateNestedManyWithoutCalculationInputInput
    social_media_input?: SocialMediaInputUncheckedCreateNestedManyWithoutCalculationInputInput
  }

  export type CalculationInputCreateOrConnectWithoutOutputInput = {
    where: CalculationInputWhereUniqueInput
    create: XOR<CalculationInputCreateWithoutOutputInput, CalculationInputUncheckedCreateWithoutOutputInput>
  }

  export type SocialMediaPlatformSpecificUpsertWithWhereUniqueWithoutOutputInput = {
    where: SocialMediaPlatformSpecificWhereUniqueInput
    update: XOR<SocialMediaPlatformSpecificUpdateWithoutOutputInput, SocialMediaPlatformSpecificUncheckedUpdateWithoutOutputInput>
    create: XOR<SocialMediaPlatformSpecificCreateWithoutOutputInput, SocialMediaPlatformSpecificUncheckedCreateWithoutOutputInput>
  }

  export type SocialMediaPlatformSpecificUpdateWithWhereUniqueWithoutOutputInput = {
    where: SocialMediaPlatformSpecificWhereUniqueInput
    data: XOR<SocialMediaPlatformSpecificUpdateWithoutOutputInput, SocialMediaPlatformSpecificUncheckedUpdateWithoutOutputInput>
  }

  export type SocialMediaPlatformSpecificUpdateManyWithWhereWithoutOutputInput = {
    where: SocialMediaPlatformSpecificScalarWhereInput
    data: XOR<SocialMediaPlatformSpecificUpdateManyMutationInput, SocialMediaPlatformSpecificUncheckedUpdateManyWithoutOutputInput>
  }

  export type SocialMediaPlatformSpecificScalarWhereInput = {
    AND?: SocialMediaPlatformSpecificScalarWhereInput | SocialMediaPlatformSpecificScalarWhereInput[]
    OR?: SocialMediaPlatformSpecificScalarWhereInput[]
    NOT?: SocialMediaPlatformSpecificScalarWhereInput | SocialMediaPlatformSpecificScalarWhereInput[]
    id?: StringFilter<"SocialMediaPlatformSpecific"> | string
    output_id?: StringFilter<"SocialMediaPlatformSpecific"> | string
    name?: StringFilter<"SocialMediaPlatformSpecific"> | string
    img_low?: IntFilter<"SocialMediaPlatformSpecific"> | number
    img_high?: IntFilter<"SocialMediaPlatformSpecific"> | number
    vid_low?: IntFilter<"SocialMediaPlatformSpecific"> | number
    vid_high?: IntFilter<"SocialMediaPlatformSpecific"> | number
  }

  export type CalculationInputUpsertWithoutOutputInput = {
    update: XOR<CalculationInputUpdateWithoutOutputInput, CalculationInputUncheckedUpdateWithoutOutputInput>
    create: XOR<CalculationInputCreateWithoutOutputInput, CalculationInputUncheckedCreateWithoutOutputInput>
    where?: CalculationInputWhereInput
  }

  export type CalculationInputUpdateToOneWithWhereWithoutOutputInput = {
    where?: CalculationInputWhereInput
    data: XOR<CalculationInputUpdateWithoutOutputInput, CalculationInputUncheckedUpdateWithoutOutputInput>
  }

  export type CalculationInputUpdateWithoutOutputInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_type_input_id?: StringFieldUpdateOperationsInput | string
    sport_input_id?: StringFieldUpdateOperationsInput | string
    athleteTypeInput?: AthleteTypeInputUpdateOneWithoutCalculationInputNestedInput
    sportInput?: SportInputUpdateOneWithoutCalculationInputNestedInput
    college_input?: CollegeInputUpdateManyWithoutCalculationInputNestedInput
    social_media_input?: SocialMediaInputUpdateManyWithoutCalculationInputNestedInput
  }

  export type CalculationInputUncheckedUpdateWithoutOutputInput = {
    id?: StringFieldUpdateOperationsInput | string
    athlete_type_input_id?: StringFieldUpdateOperationsInput | string
    sport_input_id?: StringFieldUpdateOperationsInput | string
    athleteTypeInput?: AthleteTypeInputUncheckedUpdateOneWithoutCalculationInputNestedInput
    sportInput?: SportInputUncheckedUpdateOneWithoutCalculationInputNestedInput
    college_input?: CollegeInputUncheckedUpdateManyWithoutCalculationInputNestedInput
    social_media_input?: SocialMediaInputUncheckedUpdateManyWithoutCalculationInputNestedInput
  }

  export type CalculationOutputCreateWithoutSm_platform_specificInput = {
    id?: string
    college_name: string
    img_low: number
    img_high: number
    vid_low: number
    vid_high: number
    ncv_low: number
    ncv_high: number
    calculationInput?: CalculationInputCreateNestedOneWithoutOutputInput
  }

  export type CalculationOutputUncheckedCreateWithoutSm_platform_specificInput = {
    id?: string
    college_name: string
    img_low: number
    img_high: number
    vid_low: number
    vid_high: number
    ncv_low: number
    ncv_high: number
    calculationInput?: CalculationInputUncheckedCreateNestedOneWithoutOutputInput
  }

  export type CalculationOutputCreateOrConnectWithoutSm_platform_specificInput = {
    where: CalculationOutputWhereUniqueInput
    create: XOR<CalculationOutputCreateWithoutSm_platform_specificInput, CalculationOutputUncheckedCreateWithoutSm_platform_specificInput>
  }

  export type CalculationOutputUpsertWithoutSm_platform_specificInput = {
    update: XOR<CalculationOutputUpdateWithoutSm_platform_specificInput, CalculationOutputUncheckedUpdateWithoutSm_platform_specificInput>
    create: XOR<CalculationOutputCreateWithoutSm_platform_specificInput, CalculationOutputUncheckedCreateWithoutSm_platform_specificInput>
    where?: CalculationOutputWhereInput
  }

  export type CalculationOutputUpdateToOneWithWhereWithoutSm_platform_specificInput = {
    where?: CalculationOutputWhereInput
    data: XOR<CalculationOutputUpdateWithoutSm_platform_specificInput, CalculationOutputUncheckedUpdateWithoutSm_platform_specificInput>
  }

  export type CalculationOutputUpdateWithoutSm_platform_specificInput = {
    id?: StringFieldUpdateOperationsInput | string
    college_name?: StringFieldUpdateOperationsInput | string
    img_low?: IntFieldUpdateOperationsInput | number
    img_high?: IntFieldUpdateOperationsInput | number
    vid_low?: IntFieldUpdateOperationsInput | number
    vid_high?: IntFieldUpdateOperationsInput | number
    ncv_low?: IntFieldUpdateOperationsInput | number
    ncv_high?: IntFieldUpdateOperationsInput | number
    calculationInput?: CalculationInputUpdateOneWithoutOutputNestedInput
  }

  export type CalculationOutputUncheckedUpdateWithoutSm_platform_specificInput = {
    id?: StringFieldUpdateOperationsInput | string
    college_name?: StringFieldUpdateOperationsInput | string
    img_low?: IntFieldUpdateOperationsInput | number
    img_high?: IntFieldUpdateOperationsInput | number
    vid_low?: IntFieldUpdateOperationsInput | number
    vid_high?: IntFieldUpdateOperationsInput | number
    ncv_low?: IntFieldUpdateOperationsInput | number
    ncv_high?: IntFieldUpdateOperationsInput | number
    calculationInput?: CalculationInputUncheckedUpdateOneWithoutOutputNestedInput
  }

  export type CollegeInputCreateManyCalculationInputInput = {
    id?: string
    college: string
    conference: string
  }

  export type SocialMediaInputCreateManyCalculationInputInput = {
    id?: string
    platform: string
    followers: number
  }

  export type CollegeInputUpdateWithoutCalculationInputInput = {
    id?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    conference?: StringFieldUpdateOperationsInput | string
  }

  export type CollegeInputUncheckedUpdateWithoutCalculationInputInput = {
    id?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    conference?: StringFieldUpdateOperationsInput | string
  }

  export type CollegeInputUncheckedUpdateManyWithoutCalculationInputInput = {
    id?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    conference?: StringFieldUpdateOperationsInput | string
  }

  export type SocialMediaInputUpdateWithoutCalculationInputInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
  }

  export type SocialMediaInputUncheckedUpdateWithoutCalculationInputInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
  }

  export type SocialMediaInputUncheckedUpdateManyWithoutCalculationInputInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    followers?: IntFieldUpdateOperationsInput | number
  }

  export type SocialMediaPlatformSpecificCreateManyOutputInput = {
    id?: string
    name: string
    img_low: number
    img_high: number
    vid_low: number
    vid_high: number
  }

  export type SocialMediaPlatformSpecificUpdateWithoutOutputInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img_low?: IntFieldUpdateOperationsInput | number
    img_high?: IntFieldUpdateOperationsInput | number
    vid_low?: IntFieldUpdateOperationsInput | number
    vid_high?: IntFieldUpdateOperationsInput | number
  }

  export type SocialMediaPlatformSpecificUncheckedUpdateWithoutOutputInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img_low?: IntFieldUpdateOperationsInput | number
    img_high?: IntFieldUpdateOperationsInput | number
    vid_low?: IntFieldUpdateOperationsInput | number
    vid_high?: IntFieldUpdateOperationsInput | number
  }

  export type SocialMediaPlatformSpecificUncheckedUpdateManyWithoutOutputInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    img_low?: IntFieldUpdateOperationsInput | number
    img_high?: IntFieldUpdateOperationsInput | number
    vid_low?: IntFieldUpdateOperationsInput | number
    vid_high?: IntFieldUpdateOperationsInput | number
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
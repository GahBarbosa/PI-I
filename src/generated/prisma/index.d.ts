
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
 * Model dim_cliente
 * 
 */
export type dim_cliente = $Result.DefaultSelection<Prisma.$dim_clientePayload>
/**
 * Model dim_fornecedor
 * 
 */
export type dim_fornecedor = $Result.DefaultSelection<Prisma.$dim_fornecedorPayload>
/**
 * Model dim_insumo
 * 
 */
export type dim_insumo = $Result.DefaultSelection<Prisma.$dim_insumoPayload>
/**
 * Model dim_produto
 * 
 */
export type dim_produto = $Result.DefaultSelection<Prisma.$dim_produtoPayload>
/**
 * Model fct_pedido
 * 
 */
export type fct_pedido = $Result.DefaultSelection<Prisma.$fct_pedidoPayload>
/**
 * Model map_produto_composicao
 * 
 */
export type map_produto_composicao = $Result.DefaultSelection<Prisma.$map_produto_composicaoPayload>
/**
 * Model map_pedido_detalhe
 * 
 */
export type map_pedido_detalhe = $Result.DefaultSelection<Prisma.$map_pedido_detalhePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dim_clientes
 * const dim_clientes = await prisma.dim_cliente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Dim_clientes
   * const dim_clientes = await prisma.dim_cliente.findMany()
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
   * `prisma.dim_cliente`: Exposes CRUD operations for the **dim_cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dim_clientes
    * const dim_clientes = await prisma.dim_cliente.findMany()
    * ```
    */
  get dim_cliente(): Prisma.dim_clienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dim_fornecedor`: Exposes CRUD operations for the **dim_fornecedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dim_fornecedors
    * const dim_fornecedors = await prisma.dim_fornecedor.findMany()
    * ```
    */
  get dim_fornecedor(): Prisma.dim_fornecedorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dim_insumo`: Exposes CRUD operations for the **dim_insumo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dim_insumos
    * const dim_insumos = await prisma.dim_insumo.findMany()
    * ```
    */
  get dim_insumo(): Prisma.dim_insumoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dim_produto`: Exposes CRUD operations for the **dim_produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dim_produtos
    * const dim_produtos = await prisma.dim_produto.findMany()
    * ```
    */
  get dim_produto(): Prisma.dim_produtoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fct_pedido`: Exposes CRUD operations for the **fct_pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fct_pedidos
    * const fct_pedidos = await prisma.fct_pedido.findMany()
    * ```
    */
  get fct_pedido(): Prisma.fct_pedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.map_produto_composicao`: Exposes CRUD operations for the **map_produto_composicao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Map_produto_composicaos
    * const map_produto_composicaos = await prisma.map_produto_composicao.findMany()
    * ```
    */
  get map_produto_composicao(): Prisma.map_produto_composicaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.map_pedido_detalhe`: Exposes CRUD operations for the **map_pedido_detalhe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Map_pedido_detalhes
    * const map_pedido_detalhes = await prisma.map_pedido_detalhe.findMany()
    * ```
    */
  get map_pedido_detalhe(): Prisma.map_pedido_detalheDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    dim_cliente: 'dim_cliente',
    dim_fornecedor: 'dim_fornecedor',
    dim_insumo: 'dim_insumo',
    dim_produto: 'dim_produto',
    fct_pedido: 'fct_pedido',
    map_produto_composicao: 'map_produto_composicao',
    map_pedido_detalhe: 'map_pedido_detalhe'
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
      modelProps: "dim_cliente" | "dim_fornecedor" | "dim_insumo" | "dim_produto" | "fct_pedido" | "map_produto_composicao" | "map_pedido_detalhe"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      dim_cliente: {
        payload: Prisma.$dim_clientePayload<ExtArgs>
        fields: Prisma.dim_clienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dim_clienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_clientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dim_clienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_clientePayload>
          }
          findFirst: {
            args: Prisma.dim_clienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_clientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dim_clienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_clientePayload>
          }
          findMany: {
            args: Prisma.dim_clienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_clientePayload>[]
          }
          create: {
            args: Prisma.dim_clienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_clientePayload>
          }
          createMany: {
            args: Prisma.dim_clienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dim_clienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_clientePayload>[]
          }
          delete: {
            args: Prisma.dim_clienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_clientePayload>
          }
          update: {
            args: Prisma.dim_clienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_clientePayload>
          }
          deleteMany: {
            args: Prisma.dim_clienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dim_clienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.dim_clienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_clientePayload>[]
          }
          upsert: {
            args: Prisma.dim_clienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_clientePayload>
          }
          aggregate: {
            args: Prisma.Dim_clienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDim_cliente>
          }
          groupBy: {
            args: Prisma.dim_clienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Dim_clienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.dim_clienteCountArgs<ExtArgs>
            result: $Utils.Optional<Dim_clienteCountAggregateOutputType> | number
          }
        }
      }
      dim_fornecedor: {
        payload: Prisma.$dim_fornecedorPayload<ExtArgs>
        fields: Prisma.dim_fornecedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dim_fornecedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_fornecedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dim_fornecedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_fornecedorPayload>
          }
          findFirst: {
            args: Prisma.dim_fornecedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_fornecedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dim_fornecedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_fornecedorPayload>
          }
          findMany: {
            args: Prisma.dim_fornecedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_fornecedorPayload>[]
          }
          create: {
            args: Prisma.dim_fornecedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_fornecedorPayload>
          }
          createMany: {
            args: Prisma.dim_fornecedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dim_fornecedorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_fornecedorPayload>[]
          }
          delete: {
            args: Prisma.dim_fornecedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_fornecedorPayload>
          }
          update: {
            args: Prisma.dim_fornecedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_fornecedorPayload>
          }
          deleteMany: {
            args: Prisma.dim_fornecedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dim_fornecedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.dim_fornecedorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_fornecedorPayload>[]
          }
          upsert: {
            args: Prisma.dim_fornecedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_fornecedorPayload>
          }
          aggregate: {
            args: Prisma.Dim_fornecedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDim_fornecedor>
          }
          groupBy: {
            args: Prisma.dim_fornecedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Dim_fornecedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.dim_fornecedorCountArgs<ExtArgs>
            result: $Utils.Optional<Dim_fornecedorCountAggregateOutputType> | number
          }
        }
      }
      dim_insumo: {
        payload: Prisma.$dim_insumoPayload<ExtArgs>
        fields: Prisma.dim_insumoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dim_insumoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_insumoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dim_insumoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_insumoPayload>
          }
          findFirst: {
            args: Prisma.dim_insumoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_insumoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dim_insumoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_insumoPayload>
          }
          findMany: {
            args: Prisma.dim_insumoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_insumoPayload>[]
          }
          create: {
            args: Prisma.dim_insumoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_insumoPayload>
          }
          createMany: {
            args: Prisma.dim_insumoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dim_insumoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_insumoPayload>[]
          }
          delete: {
            args: Prisma.dim_insumoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_insumoPayload>
          }
          update: {
            args: Prisma.dim_insumoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_insumoPayload>
          }
          deleteMany: {
            args: Prisma.dim_insumoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dim_insumoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.dim_insumoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_insumoPayload>[]
          }
          upsert: {
            args: Prisma.dim_insumoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_insumoPayload>
          }
          aggregate: {
            args: Prisma.Dim_insumoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDim_insumo>
          }
          groupBy: {
            args: Prisma.dim_insumoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Dim_insumoGroupByOutputType>[]
          }
          count: {
            args: Prisma.dim_insumoCountArgs<ExtArgs>
            result: $Utils.Optional<Dim_insumoCountAggregateOutputType> | number
          }
        }
      }
      dim_produto: {
        payload: Prisma.$dim_produtoPayload<ExtArgs>
        fields: Prisma.dim_produtoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dim_produtoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_produtoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dim_produtoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_produtoPayload>
          }
          findFirst: {
            args: Prisma.dim_produtoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_produtoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dim_produtoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_produtoPayload>
          }
          findMany: {
            args: Prisma.dim_produtoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_produtoPayload>[]
          }
          create: {
            args: Prisma.dim_produtoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_produtoPayload>
          }
          createMany: {
            args: Prisma.dim_produtoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dim_produtoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_produtoPayload>[]
          }
          delete: {
            args: Prisma.dim_produtoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_produtoPayload>
          }
          update: {
            args: Prisma.dim_produtoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_produtoPayload>
          }
          deleteMany: {
            args: Prisma.dim_produtoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dim_produtoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.dim_produtoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_produtoPayload>[]
          }
          upsert: {
            args: Prisma.dim_produtoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_produtoPayload>
          }
          aggregate: {
            args: Prisma.Dim_produtoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDim_produto>
          }
          groupBy: {
            args: Prisma.dim_produtoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Dim_produtoGroupByOutputType>[]
          }
          count: {
            args: Prisma.dim_produtoCountArgs<ExtArgs>
            result: $Utils.Optional<Dim_produtoCountAggregateOutputType> | number
          }
        }
      }
      fct_pedido: {
        payload: Prisma.$fct_pedidoPayload<ExtArgs>
        fields: Prisma.fct_pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fct_pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fct_pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fct_pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fct_pedidoPayload>
          }
          findFirst: {
            args: Prisma.fct_pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fct_pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fct_pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fct_pedidoPayload>
          }
          findMany: {
            args: Prisma.fct_pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fct_pedidoPayload>[]
          }
          create: {
            args: Prisma.fct_pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fct_pedidoPayload>
          }
          createMany: {
            args: Prisma.fct_pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fct_pedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fct_pedidoPayload>[]
          }
          delete: {
            args: Prisma.fct_pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fct_pedidoPayload>
          }
          update: {
            args: Prisma.fct_pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fct_pedidoPayload>
          }
          deleteMany: {
            args: Prisma.fct_pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fct_pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fct_pedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fct_pedidoPayload>[]
          }
          upsert: {
            args: Prisma.fct_pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fct_pedidoPayload>
          }
          aggregate: {
            args: Prisma.Fct_pedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFct_pedido>
          }
          groupBy: {
            args: Prisma.fct_pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Fct_pedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.fct_pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<Fct_pedidoCountAggregateOutputType> | number
          }
        }
      }
      map_produto_composicao: {
        payload: Prisma.$map_produto_composicaoPayload<ExtArgs>
        fields: Prisma.map_produto_composicaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.map_produto_composicaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_produto_composicaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.map_produto_composicaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_produto_composicaoPayload>
          }
          findFirst: {
            args: Prisma.map_produto_composicaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_produto_composicaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.map_produto_composicaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_produto_composicaoPayload>
          }
          findMany: {
            args: Prisma.map_produto_composicaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_produto_composicaoPayload>[]
          }
          create: {
            args: Prisma.map_produto_composicaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_produto_composicaoPayload>
          }
          createMany: {
            args: Prisma.map_produto_composicaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.map_produto_composicaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_produto_composicaoPayload>[]
          }
          delete: {
            args: Prisma.map_produto_composicaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_produto_composicaoPayload>
          }
          update: {
            args: Prisma.map_produto_composicaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_produto_composicaoPayload>
          }
          deleteMany: {
            args: Prisma.map_produto_composicaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.map_produto_composicaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.map_produto_composicaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_produto_composicaoPayload>[]
          }
          upsert: {
            args: Prisma.map_produto_composicaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_produto_composicaoPayload>
          }
          aggregate: {
            args: Prisma.Map_produto_composicaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMap_produto_composicao>
          }
          groupBy: {
            args: Prisma.map_produto_composicaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Map_produto_composicaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.map_produto_composicaoCountArgs<ExtArgs>
            result: $Utils.Optional<Map_produto_composicaoCountAggregateOutputType> | number
          }
        }
      }
      map_pedido_detalhe: {
        payload: Prisma.$map_pedido_detalhePayload<ExtArgs>
        fields: Prisma.map_pedido_detalheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.map_pedido_detalheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_pedido_detalhePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.map_pedido_detalheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_pedido_detalhePayload>
          }
          findFirst: {
            args: Prisma.map_pedido_detalheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_pedido_detalhePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.map_pedido_detalheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_pedido_detalhePayload>
          }
          findMany: {
            args: Prisma.map_pedido_detalheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_pedido_detalhePayload>[]
          }
          create: {
            args: Prisma.map_pedido_detalheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_pedido_detalhePayload>
          }
          createMany: {
            args: Prisma.map_pedido_detalheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.map_pedido_detalheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_pedido_detalhePayload>[]
          }
          delete: {
            args: Prisma.map_pedido_detalheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_pedido_detalhePayload>
          }
          update: {
            args: Prisma.map_pedido_detalheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_pedido_detalhePayload>
          }
          deleteMany: {
            args: Prisma.map_pedido_detalheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.map_pedido_detalheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.map_pedido_detalheUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_pedido_detalhePayload>[]
          }
          upsert: {
            args: Prisma.map_pedido_detalheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$map_pedido_detalhePayload>
          }
          aggregate: {
            args: Prisma.Map_pedido_detalheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMap_pedido_detalhe>
          }
          groupBy: {
            args: Prisma.map_pedido_detalheGroupByArgs<ExtArgs>
            result: $Utils.Optional<Map_pedido_detalheGroupByOutputType>[]
          }
          count: {
            args: Prisma.map_pedido_detalheCountArgs<ExtArgs>
            result: $Utils.Optional<Map_pedido_detalheCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    dim_cliente?: dim_clienteOmit
    dim_fornecedor?: dim_fornecedorOmit
    dim_insumo?: dim_insumoOmit
    dim_produto?: dim_produtoOmit
    fct_pedido?: fct_pedidoOmit
    map_produto_composicao?: map_produto_composicaoOmit
    map_pedido_detalhe?: map_pedido_detalheOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
   * Count Type Dim_clienteCountOutputType
   */

  export type Dim_clienteCountOutputType = {
    fct_pedido: number
  }

  export type Dim_clienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fct_pedido?: boolean | Dim_clienteCountOutputTypeCountFct_pedidoArgs
  }

  // Custom InputTypes
  /**
   * Dim_clienteCountOutputType without action
   */
  export type Dim_clienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dim_clienteCountOutputType
     */
    select?: Dim_clienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Dim_clienteCountOutputType without action
   */
  export type Dim_clienteCountOutputTypeCountFct_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fct_pedidoWhereInput
  }


  /**
   * Count Type Dim_fornecedorCountOutputType
   */

  export type Dim_fornecedorCountOutputType = {
    dim_insumo: number
    dim_produto: number
  }

  export type Dim_fornecedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dim_insumo?: boolean | Dim_fornecedorCountOutputTypeCountDim_insumoArgs
    dim_produto?: boolean | Dim_fornecedorCountOutputTypeCountDim_produtoArgs
  }

  // Custom InputTypes
  /**
   * Dim_fornecedorCountOutputType without action
   */
  export type Dim_fornecedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dim_fornecedorCountOutputType
     */
    select?: Dim_fornecedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Dim_fornecedorCountOutputType without action
   */
  export type Dim_fornecedorCountOutputTypeCountDim_insumoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dim_insumoWhereInput
  }

  /**
   * Dim_fornecedorCountOutputType without action
   */
  export type Dim_fornecedorCountOutputTypeCountDim_produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dim_produtoWhereInput
  }


  /**
   * Count Type Dim_insumoCountOutputType
   */

  export type Dim_insumoCountOutputType = {
    map_composicao: number
  }

  export type Dim_insumoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    map_composicao?: boolean | Dim_insumoCountOutputTypeCountMap_composicaoArgs
  }

  // Custom InputTypes
  /**
   * Dim_insumoCountOutputType without action
   */
  export type Dim_insumoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dim_insumoCountOutputType
     */
    select?: Dim_insumoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Dim_insumoCountOutputType without action
   */
  export type Dim_insumoCountOutputTypeCountMap_composicaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: map_produto_composicaoWhereInput
  }


  /**
   * Count Type Dim_produtoCountOutputType
   */

  export type Dim_produtoCountOutputType = {
    map_detalhe: number
    map_composicao: number
  }

  export type Dim_produtoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    map_detalhe?: boolean | Dim_produtoCountOutputTypeCountMap_detalheArgs
    map_composicao?: boolean | Dim_produtoCountOutputTypeCountMap_composicaoArgs
  }

  // Custom InputTypes
  /**
   * Dim_produtoCountOutputType without action
   */
  export type Dim_produtoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dim_produtoCountOutputType
     */
    select?: Dim_produtoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Dim_produtoCountOutputType without action
   */
  export type Dim_produtoCountOutputTypeCountMap_detalheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: map_pedido_detalheWhereInput
  }

  /**
   * Dim_produtoCountOutputType without action
   */
  export type Dim_produtoCountOutputTypeCountMap_composicaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: map_produto_composicaoWhereInput
  }


  /**
   * Count Type Fct_pedidoCountOutputType
   */

  export type Fct_pedidoCountOutputType = {
    map_detalhe: number
  }

  export type Fct_pedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    map_detalhe?: boolean | Fct_pedidoCountOutputTypeCountMap_detalheArgs
  }

  // Custom InputTypes
  /**
   * Fct_pedidoCountOutputType without action
   */
  export type Fct_pedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fct_pedidoCountOutputType
     */
    select?: Fct_pedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Fct_pedidoCountOutputType without action
   */
  export type Fct_pedidoCountOutputTypeCountMap_detalheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: map_pedido_detalheWhereInput
  }


  /**
   * Models
   */

  /**
   * Model dim_cliente
   */

  export type AggregateDim_cliente = {
    _count: Dim_clienteCountAggregateOutputType | null
    _avg: Dim_clienteAvgAggregateOutputType | null
    _sum: Dim_clienteSumAggregateOutputType | null
    _min: Dim_clienteMinAggregateOutputType | null
    _max: Dim_clienteMaxAggregateOutputType | null
  }

  export type Dim_clienteAvgAggregateOutputType = {
    cliente_id: number | null
  }

  export type Dim_clienteSumAggregateOutputType = {
    cliente_id: number | null
  }

  export type Dim_clienteMinAggregateOutputType = {
    cliente_id: number | null
    nome: string | null
    cpf_cnpj: string | null
    telefone: string | null
    email: string | null
    endereco: string | null
    data_cadastro: Date | null
  }

  export type Dim_clienteMaxAggregateOutputType = {
    cliente_id: number | null
    nome: string | null
    cpf_cnpj: string | null
    telefone: string | null
    email: string | null
    endereco: string | null
    data_cadastro: Date | null
  }

  export type Dim_clienteCountAggregateOutputType = {
    cliente_id: number
    nome: number
    cpf_cnpj: number
    telefone: number
    email: number
    endereco: number
    data_cadastro: number
    _all: number
  }


  export type Dim_clienteAvgAggregateInputType = {
    cliente_id?: true
  }

  export type Dim_clienteSumAggregateInputType = {
    cliente_id?: true
  }

  export type Dim_clienteMinAggregateInputType = {
    cliente_id?: true
    nome?: true
    cpf_cnpj?: true
    telefone?: true
    email?: true
    endereco?: true
    data_cadastro?: true
  }

  export type Dim_clienteMaxAggregateInputType = {
    cliente_id?: true
    nome?: true
    cpf_cnpj?: true
    telefone?: true
    email?: true
    endereco?: true
    data_cadastro?: true
  }

  export type Dim_clienteCountAggregateInputType = {
    cliente_id?: true
    nome?: true
    cpf_cnpj?: true
    telefone?: true
    email?: true
    endereco?: true
    data_cadastro?: true
    _all?: true
  }

  export type Dim_clienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dim_cliente to aggregate.
     */
    where?: dim_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_clientes to fetch.
     */
    orderBy?: dim_clienteOrderByWithRelationInput | dim_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dim_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dim_clientes
    **/
    _count?: true | Dim_clienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Dim_clienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Dim_clienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Dim_clienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Dim_clienteMaxAggregateInputType
  }

  export type GetDim_clienteAggregateType<T extends Dim_clienteAggregateArgs> = {
        [P in keyof T & keyof AggregateDim_cliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDim_cliente[P]>
      : GetScalarType<T[P], AggregateDim_cliente[P]>
  }




  export type dim_clienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dim_clienteWhereInput
    orderBy?: dim_clienteOrderByWithAggregationInput | dim_clienteOrderByWithAggregationInput[]
    by: Dim_clienteScalarFieldEnum[] | Dim_clienteScalarFieldEnum
    having?: dim_clienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Dim_clienteCountAggregateInputType | true
    _avg?: Dim_clienteAvgAggregateInputType
    _sum?: Dim_clienteSumAggregateInputType
    _min?: Dim_clienteMinAggregateInputType
    _max?: Dim_clienteMaxAggregateInputType
  }

  export type Dim_clienteGroupByOutputType = {
    cliente_id: number
    nome: string
    cpf_cnpj: string
    telefone: string | null
    email: string
    endereco: string | null
    data_cadastro: Date | null
    _count: Dim_clienteCountAggregateOutputType | null
    _avg: Dim_clienteAvgAggregateOutputType | null
    _sum: Dim_clienteSumAggregateOutputType | null
    _min: Dim_clienteMinAggregateOutputType | null
    _max: Dim_clienteMaxAggregateOutputType | null
  }

  type GetDim_clienteGroupByPayload<T extends dim_clienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Dim_clienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Dim_clienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Dim_clienteGroupByOutputType[P]>
            : GetScalarType<T[P], Dim_clienteGroupByOutputType[P]>
        }
      >
    >


  export type dim_clienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cliente_id?: boolean
    nome?: boolean
    cpf_cnpj?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    data_cadastro?: boolean
    fct_pedido?: boolean | dim_cliente$fct_pedidoArgs<ExtArgs>
    _count?: boolean | Dim_clienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dim_cliente"]>

  export type dim_clienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cliente_id?: boolean
    nome?: boolean
    cpf_cnpj?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    data_cadastro?: boolean
  }, ExtArgs["result"]["dim_cliente"]>

  export type dim_clienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cliente_id?: boolean
    nome?: boolean
    cpf_cnpj?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    data_cadastro?: boolean
  }, ExtArgs["result"]["dim_cliente"]>

  export type dim_clienteSelectScalar = {
    cliente_id?: boolean
    nome?: boolean
    cpf_cnpj?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    data_cadastro?: boolean
  }

  export type dim_clienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cliente_id" | "nome" | "cpf_cnpj" | "telefone" | "email" | "endereco" | "data_cadastro", ExtArgs["result"]["dim_cliente"]>
  export type dim_clienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fct_pedido?: boolean | dim_cliente$fct_pedidoArgs<ExtArgs>
    _count?: boolean | Dim_clienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type dim_clienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type dim_clienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $dim_clientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dim_cliente"
    objects: {
      fct_pedido: Prisma.$fct_pedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cliente_id: number
      nome: string
      cpf_cnpj: string
      telefone: string | null
      email: string
      endereco: string | null
      data_cadastro: Date | null
    }, ExtArgs["result"]["dim_cliente"]>
    composites: {}
  }

  type dim_clienteGetPayload<S extends boolean | null | undefined | dim_clienteDefaultArgs> = $Result.GetResult<Prisma.$dim_clientePayload, S>

  type dim_clienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dim_clienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Dim_clienteCountAggregateInputType | true
    }

  export interface dim_clienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dim_cliente'], meta: { name: 'dim_cliente' } }
    /**
     * Find zero or one Dim_cliente that matches the filter.
     * @param {dim_clienteFindUniqueArgs} args - Arguments to find a Dim_cliente
     * @example
     * // Get one Dim_cliente
     * const dim_cliente = await prisma.dim_cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dim_clienteFindUniqueArgs>(args: SelectSubset<T, dim_clienteFindUniqueArgs<ExtArgs>>): Prisma__dim_clienteClient<$Result.GetResult<Prisma.$dim_clientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dim_cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dim_clienteFindUniqueOrThrowArgs} args - Arguments to find a Dim_cliente
     * @example
     * // Get one Dim_cliente
     * const dim_cliente = await prisma.dim_cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dim_clienteFindUniqueOrThrowArgs>(args: SelectSubset<T, dim_clienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dim_clienteClient<$Result.GetResult<Prisma.$dim_clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dim_cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_clienteFindFirstArgs} args - Arguments to find a Dim_cliente
     * @example
     * // Get one Dim_cliente
     * const dim_cliente = await prisma.dim_cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dim_clienteFindFirstArgs>(args?: SelectSubset<T, dim_clienteFindFirstArgs<ExtArgs>>): Prisma__dim_clienteClient<$Result.GetResult<Prisma.$dim_clientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dim_cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_clienteFindFirstOrThrowArgs} args - Arguments to find a Dim_cliente
     * @example
     * // Get one Dim_cliente
     * const dim_cliente = await prisma.dim_cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dim_clienteFindFirstOrThrowArgs>(args?: SelectSubset<T, dim_clienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__dim_clienteClient<$Result.GetResult<Prisma.$dim_clientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dim_clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_clienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dim_clientes
     * const dim_clientes = await prisma.dim_cliente.findMany()
     * 
     * // Get first 10 Dim_clientes
     * const dim_clientes = await prisma.dim_cliente.findMany({ take: 10 })
     * 
     * // Only select the `cliente_id`
     * const dim_clienteWithCliente_idOnly = await prisma.dim_cliente.findMany({ select: { cliente_id: true } })
     * 
     */
    findMany<T extends dim_clienteFindManyArgs>(args?: SelectSubset<T, dim_clienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dim_cliente.
     * @param {dim_clienteCreateArgs} args - Arguments to create a Dim_cliente.
     * @example
     * // Create one Dim_cliente
     * const Dim_cliente = await prisma.dim_cliente.create({
     *   data: {
     *     // ... data to create a Dim_cliente
     *   }
     * })
     * 
     */
    create<T extends dim_clienteCreateArgs>(args: SelectSubset<T, dim_clienteCreateArgs<ExtArgs>>): Prisma__dim_clienteClient<$Result.GetResult<Prisma.$dim_clientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dim_clientes.
     * @param {dim_clienteCreateManyArgs} args - Arguments to create many Dim_clientes.
     * @example
     * // Create many Dim_clientes
     * const dim_cliente = await prisma.dim_cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dim_clienteCreateManyArgs>(args?: SelectSubset<T, dim_clienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dim_clientes and returns the data saved in the database.
     * @param {dim_clienteCreateManyAndReturnArgs} args - Arguments to create many Dim_clientes.
     * @example
     * // Create many Dim_clientes
     * const dim_cliente = await prisma.dim_cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dim_clientes and only return the `cliente_id`
     * const dim_clienteWithCliente_idOnly = await prisma.dim_cliente.createManyAndReturn({
     *   select: { cliente_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dim_clienteCreateManyAndReturnArgs>(args?: SelectSubset<T, dim_clienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_clientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dim_cliente.
     * @param {dim_clienteDeleteArgs} args - Arguments to delete one Dim_cliente.
     * @example
     * // Delete one Dim_cliente
     * const Dim_cliente = await prisma.dim_cliente.delete({
     *   where: {
     *     // ... filter to delete one Dim_cliente
     *   }
     * })
     * 
     */
    delete<T extends dim_clienteDeleteArgs>(args: SelectSubset<T, dim_clienteDeleteArgs<ExtArgs>>): Prisma__dim_clienteClient<$Result.GetResult<Prisma.$dim_clientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dim_cliente.
     * @param {dim_clienteUpdateArgs} args - Arguments to update one Dim_cliente.
     * @example
     * // Update one Dim_cliente
     * const dim_cliente = await prisma.dim_cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dim_clienteUpdateArgs>(args: SelectSubset<T, dim_clienteUpdateArgs<ExtArgs>>): Prisma__dim_clienteClient<$Result.GetResult<Prisma.$dim_clientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dim_clientes.
     * @param {dim_clienteDeleteManyArgs} args - Arguments to filter Dim_clientes to delete.
     * @example
     * // Delete a few Dim_clientes
     * const { count } = await prisma.dim_cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dim_clienteDeleteManyArgs>(args?: SelectSubset<T, dim_clienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dim_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dim_clientes
     * const dim_cliente = await prisma.dim_cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dim_clienteUpdateManyArgs>(args: SelectSubset<T, dim_clienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dim_clientes and returns the data updated in the database.
     * @param {dim_clienteUpdateManyAndReturnArgs} args - Arguments to update many Dim_clientes.
     * @example
     * // Update many Dim_clientes
     * const dim_cliente = await prisma.dim_cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dim_clientes and only return the `cliente_id`
     * const dim_clienteWithCliente_idOnly = await prisma.dim_cliente.updateManyAndReturn({
     *   select: { cliente_id: true },
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
    updateManyAndReturn<T extends dim_clienteUpdateManyAndReturnArgs>(args: SelectSubset<T, dim_clienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_clientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dim_cliente.
     * @param {dim_clienteUpsertArgs} args - Arguments to update or create a Dim_cliente.
     * @example
     * // Update or create a Dim_cliente
     * const dim_cliente = await prisma.dim_cliente.upsert({
     *   create: {
     *     // ... data to create a Dim_cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dim_cliente we want to update
     *   }
     * })
     */
    upsert<T extends dim_clienteUpsertArgs>(args: SelectSubset<T, dim_clienteUpsertArgs<ExtArgs>>): Prisma__dim_clienteClient<$Result.GetResult<Prisma.$dim_clientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dim_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_clienteCountArgs} args - Arguments to filter Dim_clientes to count.
     * @example
     * // Count the number of Dim_clientes
     * const count = await prisma.dim_cliente.count({
     *   where: {
     *     // ... the filter for the Dim_clientes we want to count
     *   }
     * })
    **/
    count<T extends dim_clienteCountArgs>(
      args?: Subset<T, dim_clienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Dim_clienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dim_cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dim_clienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Dim_clienteAggregateArgs>(args: Subset<T, Dim_clienteAggregateArgs>): Prisma.PrismaPromise<GetDim_clienteAggregateType<T>>

    /**
     * Group by Dim_cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_clienteGroupByArgs} args - Group by arguments.
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
      T extends dim_clienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dim_clienteGroupByArgs['orderBy'] }
        : { orderBy?: dim_clienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, dim_clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDim_clienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dim_cliente model
   */
  readonly fields: dim_clienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dim_cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dim_clienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fct_pedido<T extends dim_cliente$fct_pedidoArgs<ExtArgs> = {}>(args?: Subset<T, dim_cliente$fct_pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fct_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the dim_cliente model
   */
  interface dim_clienteFieldRefs {
    readonly cliente_id: FieldRef<"dim_cliente", 'Int'>
    readonly nome: FieldRef<"dim_cliente", 'String'>
    readonly cpf_cnpj: FieldRef<"dim_cliente", 'String'>
    readonly telefone: FieldRef<"dim_cliente", 'String'>
    readonly email: FieldRef<"dim_cliente", 'String'>
    readonly endereco: FieldRef<"dim_cliente", 'String'>
    readonly data_cadastro: FieldRef<"dim_cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * dim_cliente findUnique
   */
  export type dim_clienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_cliente
     */
    select?: dim_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_cliente
     */
    omit?: dim_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_clienteInclude<ExtArgs> | null
    /**
     * Filter, which dim_cliente to fetch.
     */
    where: dim_clienteWhereUniqueInput
  }

  /**
   * dim_cliente findUniqueOrThrow
   */
  export type dim_clienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_cliente
     */
    select?: dim_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_cliente
     */
    omit?: dim_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_clienteInclude<ExtArgs> | null
    /**
     * Filter, which dim_cliente to fetch.
     */
    where: dim_clienteWhereUniqueInput
  }

  /**
   * dim_cliente findFirst
   */
  export type dim_clienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_cliente
     */
    select?: dim_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_cliente
     */
    omit?: dim_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_clienteInclude<ExtArgs> | null
    /**
     * Filter, which dim_cliente to fetch.
     */
    where?: dim_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_clientes to fetch.
     */
    orderBy?: dim_clienteOrderByWithRelationInput | dim_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dim_clientes.
     */
    cursor?: dim_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dim_clientes.
     */
    distinct?: Dim_clienteScalarFieldEnum | Dim_clienteScalarFieldEnum[]
  }

  /**
   * dim_cliente findFirstOrThrow
   */
  export type dim_clienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_cliente
     */
    select?: dim_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_cliente
     */
    omit?: dim_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_clienteInclude<ExtArgs> | null
    /**
     * Filter, which dim_cliente to fetch.
     */
    where?: dim_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_clientes to fetch.
     */
    orderBy?: dim_clienteOrderByWithRelationInput | dim_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dim_clientes.
     */
    cursor?: dim_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dim_clientes.
     */
    distinct?: Dim_clienteScalarFieldEnum | Dim_clienteScalarFieldEnum[]
  }

  /**
   * dim_cliente findMany
   */
  export type dim_clienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_cliente
     */
    select?: dim_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_cliente
     */
    omit?: dim_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_clienteInclude<ExtArgs> | null
    /**
     * Filter, which dim_clientes to fetch.
     */
    where?: dim_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_clientes to fetch.
     */
    orderBy?: dim_clienteOrderByWithRelationInput | dim_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dim_clientes.
     */
    cursor?: dim_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_clientes.
     */
    skip?: number
    distinct?: Dim_clienteScalarFieldEnum | Dim_clienteScalarFieldEnum[]
  }

  /**
   * dim_cliente create
   */
  export type dim_clienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_cliente
     */
    select?: dim_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_cliente
     */
    omit?: dim_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_clienteInclude<ExtArgs> | null
    /**
     * The data needed to create a dim_cliente.
     */
    data: XOR<dim_clienteCreateInput, dim_clienteUncheckedCreateInput>
  }

  /**
   * dim_cliente createMany
   */
  export type dim_clienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dim_clientes.
     */
    data: dim_clienteCreateManyInput | dim_clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dim_cliente createManyAndReturn
   */
  export type dim_clienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_cliente
     */
    select?: dim_clienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dim_cliente
     */
    omit?: dim_clienteOmit<ExtArgs> | null
    /**
     * The data used to create many dim_clientes.
     */
    data: dim_clienteCreateManyInput | dim_clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dim_cliente update
   */
  export type dim_clienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_cliente
     */
    select?: dim_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_cliente
     */
    omit?: dim_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_clienteInclude<ExtArgs> | null
    /**
     * The data needed to update a dim_cliente.
     */
    data: XOR<dim_clienteUpdateInput, dim_clienteUncheckedUpdateInput>
    /**
     * Choose, which dim_cliente to update.
     */
    where: dim_clienteWhereUniqueInput
  }

  /**
   * dim_cliente updateMany
   */
  export type dim_clienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dim_clientes.
     */
    data: XOR<dim_clienteUpdateManyMutationInput, dim_clienteUncheckedUpdateManyInput>
    /**
     * Filter which dim_clientes to update
     */
    where?: dim_clienteWhereInput
    /**
     * Limit how many dim_clientes to update.
     */
    limit?: number
  }

  /**
   * dim_cliente updateManyAndReturn
   */
  export type dim_clienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_cliente
     */
    select?: dim_clienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dim_cliente
     */
    omit?: dim_clienteOmit<ExtArgs> | null
    /**
     * The data used to update dim_clientes.
     */
    data: XOR<dim_clienteUpdateManyMutationInput, dim_clienteUncheckedUpdateManyInput>
    /**
     * Filter which dim_clientes to update
     */
    where?: dim_clienteWhereInput
    /**
     * Limit how many dim_clientes to update.
     */
    limit?: number
  }

  /**
   * dim_cliente upsert
   */
  export type dim_clienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_cliente
     */
    select?: dim_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_cliente
     */
    omit?: dim_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_clienteInclude<ExtArgs> | null
    /**
     * The filter to search for the dim_cliente to update in case it exists.
     */
    where: dim_clienteWhereUniqueInput
    /**
     * In case the dim_cliente found by the `where` argument doesn't exist, create a new dim_cliente with this data.
     */
    create: XOR<dim_clienteCreateInput, dim_clienteUncheckedCreateInput>
    /**
     * In case the dim_cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dim_clienteUpdateInput, dim_clienteUncheckedUpdateInput>
  }

  /**
   * dim_cliente delete
   */
  export type dim_clienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_cliente
     */
    select?: dim_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_cliente
     */
    omit?: dim_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_clienteInclude<ExtArgs> | null
    /**
     * Filter which dim_cliente to delete.
     */
    where: dim_clienteWhereUniqueInput
  }

  /**
   * dim_cliente deleteMany
   */
  export type dim_clienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dim_clientes to delete
     */
    where?: dim_clienteWhereInput
    /**
     * Limit how many dim_clientes to delete.
     */
    limit?: number
  }

  /**
   * dim_cliente.fct_pedido
   */
  export type dim_cliente$fct_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fct_pedido
     */
    select?: fct_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fct_pedido
     */
    omit?: fct_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fct_pedidoInclude<ExtArgs> | null
    where?: fct_pedidoWhereInput
    orderBy?: fct_pedidoOrderByWithRelationInput | fct_pedidoOrderByWithRelationInput[]
    cursor?: fct_pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Fct_pedidoScalarFieldEnum | Fct_pedidoScalarFieldEnum[]
  }

  /**
   * dim_cliente without action
   */
  export type dim_clienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_cliente
     */
    select?: dim_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_cliente
     */
    omit?: dim_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_clienteInclude<ExtArgs> | null
  }


  /**
   * Model dim_fornecedor
   */

  export type AggregateDim_fornecedor = {
    _count: Dim_fornecedorCountAggregateOutputType | null
    _avg: Dim_fornecedorAvgAggregateOutputType | null
    _sum: Dim_fornecedorSumAggregateOutputType | null
    _min: Dim_fornecedorMinAggregateOutputType | null
    _max: Dim_fornecedorMaxAggregateOutputType | null
  }

  export type Dim_fornecedorAvgAggregateOutputType = {
    fornecedor_id: number | null
  }

  export type Dim_fornecedorSumAggregateOutputType = {
    fornecedor_id: number | null
  }

  export type Dim_fornecedorMinAggregateOutputType = {
    fornecedor_id: number | null
    nome_fantasia: string | null
    razao_social: string | null
    cnpj: string | null
    telefone: string | null
    email: string | null
    endereco: string | null
    data_cadastro: Date | null
  }

  export type Dim_fornecedorMaxAggregateOutputType = {
    fornecedor_id: number | null
    nome_fantasia: string | null
    razao_social: string | null
    cnpj: string | null
    telefone: string | null
    email: string | null
    endereco: string | null
    data_cadastro: Date | null
  }

  export type Dim_fornecedorCountAggregateOutputType = {
    fornecedor_id: number
    nome_fantasia: number
    razao_social: number
    cnpj: number
    telefone: number
    email: number
    endereco: number
    data_cadastro: number
    _all: number
  }


  export type Dim_fornecedorAvgAggregateInputType = {
    fornecedor_id?: true
  }

  export type Dim_fornecedorSumAggregateInputType = {
    fornecedor_id?: true
  }

  export type Dim_fornecedorMinAggregateInputType = {
    fornecedor_id?: true
    nome_fantasia?: true
    razao_social?: true
    cnpj?: true
    telefone?: true
    email?: true
    endereco?: true
    data_cadastro?: true
  }

  export type Dim_fornecedorMaxAggregateInputType = {
    fornecedor_id?: true
    nome_fantasia?: true
    razao_social?: true
    cnpj?: true
    telefone?: true
    email?: true
    endereco?: true
    data_cadastro?: true
  }

  export type Dim_fornecedorCountAggregateInputType = {
    fornecedor_id?: true
    nome_fantasia?: true
    razao_social?: true
    cnpj?: true
    telefone?: true
    email?: true
    endereco?: true
    data_cadastro?: true
    _all?: true
  }

  export type Dim_fornecedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dim_fornecedor to aggregate.
     */
    where?: dim_fornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_fornecedors to fetch.
     */
    orderBy?: dim_fornecedorOrderByWithRelationInput | dim_fornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dim_fornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dim_fornecedors
    **/
    _count?: true | Dim_fornecedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Dim_fornecedorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Dim_fornecedorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Dim_fornecedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Dim_fornecedorMaxAggregateInputType
  }

  export type GetDim_fornecedorAggregateType<T extends Dim_fornecedorAggregateArgs> = {
        [P in keyof T & keyof AggregateDim_fornecedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDim_fornecedor[P]>
      : GetScalarType<T[P], AggregateDim_fornecedor[P]>
  }




  export type dim_fornecedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dim_fornecedorWhereInput
    orderBy?: dim_fornecedorOrderByWithAggregationInput | dim_fornecedorOrderByWithAggregationInput[]
    by: Dim_fornecedorScalarFieldEnum[] | Dim_fornecedorScalarFieldEnum
    having?: dim_fornecedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Dim_fornecedorCountAggregateInputType | true
    _avg?: Dim_fornecedorAvgAggregateInputType
    _sum?: Dim_fornecedorSumAggregateInputType
    _min?: Dim_fornecedorMinAggregateInputType
    _max?: Dim_fornecedorMaxAggregateInputType
  }

  export type Dim_fornecedorGroupByOutputType = {
    fornecedor_id: number
    nome_fantasia: string
    razao_social: string | null
    cnpj: string
    telefone: string | null
    email: string
    endereco: string | null
    data_cadastro: Date | null
    _count: Dim_fornecedorCountAggregateOutputType | null
    _avg: Dim_fornecedorAvgAggregateOutputType | null
    _sum: Dim_fornecedorSumAggregateOutputType | null
    _min: Dim_fornecedorMinAggregateOutputType | null
    _max: Dim_fornecedorMaxAggregateOutputType | null
  }

  type GetDim_fornecedorGroupByPayload<T extends dim_fornecedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Dim_fornecedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Dim_fornecedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Dim_fornecedorGroupByOutputType[P]>
            : GetScalarType<T[P], Dim_fornecedorGroupByOutputType[P]>
        }
      >
    >


  export type dim_fornecedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fornecedor_id?: boolean
    nome_fantasia?: boolean
    razao_social?: boolean
    cnpj?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    data_cadastro?: boolean
    dim_insumo?: boolean | dim_fornecedor$dim_insumoArgs<ExtArgs>
    dim_produto?: boolean | dim_fornecedor$dim_produtoArgs<ExtArgs>
    _count?: boolean | Dim_fornecedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dim_fornecedor"]>

  export type dim_fornecedorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fornecedor_id?: boolean
    nome_fantasia?: boolean
    razao_social?: boolean
    cnpj?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    data_cadastro?: boolean
  }, ExtArgs["result"]["dim_fornecedor"]>

  export type dim_fornecedorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fornecedor_id?: boolean
    nome_fantasia?: boolean
    razao_social?: boolean
    cnpj?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    data_cadastro?: boolean
  }, ExtArgs["result"]["dim_fornecedor"]>

  export type dim_fornecedorSelectScalar = {
    fornecedor_id?: boolean
    nome_fantasia?: boolean
    razao_social?: boolean
    cnpj?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    data_cadastro?: boolean
  }

  export type dim_fornecedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fornecedor_id" | "nome_fantasia" | "razao_social" | "cnpj" | "telefone" | "email" | "endereco" | "data_cadastro", ExtArgs["result"]["dim_fornecedor"]>
  export type dim_fornecedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dim_insumo?: boolean | dim_fornecedor$dim_insumoArgs<ExtArgs>
    dim_produto?: boolean | dim_fornecedor$dim_produtoArgs<ExtArgs>
    _count?: boolean | Dim_fornecedorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type dim_fornecedorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type dim_fornecedorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $dim_fornecedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dim_fornecedor"
    objects: {
      dim_insumo: Prisma.$dim_insumoPayload<ExtArgs>[]
      dim_produto: Prisma.$dim_produtoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      fornecedor_id: number
      nome_fantasia: string
      razao_social: string | null
      cnpj: string
      telefone: string | null
      email: string
      endereco: string | null
      data_cadastro: Date | null
    }, ExtArgs["result"]["dim_fornecedor"]>
    composites: {}
  }

  type dim_fornecedorGetPayload<S extends boolean | null | undefined | dim_fornecedorDefaultArgs> = $Result.GetResult<Prisma.$dim_fornecedorPayload, S>

  type dim_fornecedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dim_fornecedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Dim_fornecedorCountAggregateInputType | true
    }

  export interface dim_fornecedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dim_fornecedor'], meta: { name: 'dim_fornecedor' } }
    /**
     * Find zero or one Dim_fornecedor that matches the filter.
     * @param {dim_fornecedorFindUniqueArgs} args - Arguments to find a Dim_fornecedor
     * @example
     * // Get one Dim_fornecedor
     * const dim_fornecedor = await prisma.dim_fornecedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dim_fornecedorFindUniqueArgs>(args: SelectSubset<T, dim_fornecedorFindUniqueArgs<ExtArgs>>): Prisma__dim_fornecedorClient<$Result.GetResult<Prisma.$dim_fornecedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dim_fornecedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dim_fornecedorFindUniqueOrThrowArgs} args - Arguments to find a Dim_fornecedor
     * @example
     * // Get one Dim_fornecedor
     * const dim_fornecedor = await prisma.dim_fornecedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dim_fornecedorFindUniqueOrThrowArgs>(args: SelectSubset<T, dim_fornecedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dim_fornecedorClient<$Result.GetResult<Prisma.$dim_fornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dim_fornecedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_fornecedorFindFirstArgs} args - Arguments to find a Dim_fornecedor
     * @example
     * // Get one Dim_fornecedor
     * const dim_fornecedor = await prisma.dim_fornecedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dim_fornecedorFindFirstArgs>(args?: SelectSubset<T, dim_fornecedorFindFirstArgs<ExtArgs>>): Prisma__dim_fornecedorClient<$Result.GetResult<Prisma.$dim_fornecedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dim_fornecedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_fornecedorFindFirstOrThrowArgs} args - Arguments to find a Dim_fornecedor
     * @example
     * // Get one Dim_fornecedor
     * const dim_fornecedor = await prisma.dim_fornecedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dim_fornecedorFindFirstOrThrowArgs>(args?: SelectSubset<T, dim_fornecedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__dim_fornecedorClient<$Result.GetResult<Prisma.$dim_fornecedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dim_fornecedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_fornecedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dim_fornecedors
     * const dim_fornecedors = await prisma.dim_fornecedor.findMany()
     * 
     * // Get first 10 Dim_fornecedors
     * const dim_fornecedors = await prisma.dim_fornecedor.findMany({ take: 10 })
     * 
     * // Only select the `fornecedor_id`
     * const dim_fornecedorWithFornecedor_idOnly = await prisma.dim_fornecedor.findMany({ select: { fornecedor_id: true } })
     * 
     */
    findMany<T extends dim_fornecedorFindManyArgs>(args?: SelectSubset<T, dim_fornecedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_fornecedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dim_fornecedor.
     * @param {dim_fornecedorCreateArgs} args - Arguments to create a Dim_fornecedor.
     * @example
     * // Create one Dim_fornecedor
     * const Dim_fornecedor = await prisma.dim_fornecedor.create({
     *   data: {
     *     // ... data to create a Dim_fornecedor
     *   }
     * })
     * 
     */
    create<T extends dim_fornecedorCreateArgs>(args: SelectSubset<T, dim_fornecedorCreateArgs<ExtArgs>>): Prisma__dim_fornecedorClient<$Result.GetResult<Prisma.$dim_fornecedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dim_fornecedors.
     * @param {dim_fornecedorCreateManyArgs} args - Arguments to create many Dim_fornecedors.
     * @example
     * // Create many Dim_fornecedors
     * const dim_fornecedor = await prisma.dim_fornecedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dim_fornecedorCreateManyArgs>(args?: SelectSubset<T, dim_fornecedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dim_fornecedors and returns the data saved in the database.
     * @param {dim_fornecedorCreateManyAndReturnArgs} args - Arguments to create many Dim_fornecedors.
     * @example
     * // Create many Dim_fornecedors
     * const dim_fornecedor = await prisma.dim_fornecedor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dim_fornecedors and only return the `fornecedor_id`
     * const dim_fornecedorWithFornecedor_idOnly = await prisma.dim_fornecedor.createManyAndReturn({
     *   select: { fornecedor_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dim_fornecedorCreateManyAndReturnArgs>(args?: SelectSubset<T, dim_fornecedorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_fornecedorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dim_fornecedor.
     * @param {dim_fornecedorDeleteArgs} args - Arguments to delete one Dim_fornecedor.
     * @example
     * // Delete one Dim_fornecedor
     * const Dim_fornecedor = await prisma.dim_fornecedor.delete({
     *   where: {
     *     // ... filter to delete one Dim_fornecedor
     *   }
     * })
     * 
     */
    delete<T extends dim_fornecedorDeleteArgs>(args: SelectSubset<T, dim_fornecedorDeleteArgs<ExtArgs>>): Prisma__dim_fornecedorClient<$Result.GetResult<Prisma.$dim_fornecedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dim_fornecedor.
     * @param {dim_fornecedorUpdateArgs} args - Arguments to update one Dim_fornecedor.
     * @example
     * // Update one Dim_fornecedor
     * const dim_fornecedor = await prisma.dim_fornecedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dim_fornecedorUpdateArgs>(args: SelectSubset<T, dim_fornecedorUpdateArgs<ExtArgs>>): Prisma__dim_fornecedorClient<$Result.GetResult<Prisma.$dim_fornecedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dim_fornecedors.
     * @param {dim_fornecedorDeleteManyArgs} args - Arguments to filter Dim_fornecedors to delete.
     * @example
     * // Delete a few Dim_fornecedors
     * const { count } = await prisma.dim_fornecedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dim_fornecedorDeleteManyArgs>(args?: SelectSubset<T, dim_fornecedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dim_fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_fornecedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dim_fornecedors
     * const dim_fornecedor = await prisma.dim_fornecedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dim_fornecedorUpdateManyArgs>(args: SelectSubset<T, dim_fornecedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dim_fornecedors and returns the data updated in the database.
     * @param {dim_fornecedorUpdateManyAndReturnArgs} args - Arguments to update many Dim_fornecedors.
     * @example
     * // Update many Dim_fornecedors
     * const dim_fornecedor = await prisma.dim_fornecedor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dim_fornecedors and only return the `fornecedor_id`
     * const dim_fornecedorWithFornecedor_idOnly = await prisma.dim_fornecedor.updateManyAndReturn({
     *   select: { fornecedor_id: true },
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
    updateManyAndReturn<T extends dim_fornecedorUpdateManyAndReturnArgs>(args: SelectSubset<T, dim_fornecedorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_fornecedorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dim_fornecedor.
     * @param {dim_fornecedorUpsertArgs} args - Arguments to update or create a Dim_fornecedor.
     * @example
     * // Update or create a Dim_fornecedor
     * const dim_fornecedor = await prisma.dim_fornecedor.upsert({
     *   create: {
     *     // ... data to create a Dim_fornecedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dim_fornecedor we want to update
     *   }
     * })
     */
    upsert<T extends dim_fornecedorUpsertArgs>(args: SelectSubset<T, dim_fornecedorUpsertArgs<ExtArgs>>): Prisma__dim_fornecedorClient<$Result.GetResult<Prisma.$dim_fornecedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dim_fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_fornecedorCountArgs} args - Arguments to filter Dim_fornecedors to count.
     * @example
     * // Count the number of Dim_fornecedors
     * const count = await prisma.dim_fornecedor.count({
     *   where: {
     *     // ... the filter for the Dim_fornecedors we want to count
     *   }
     * })
    **/
    count<T extends dim_fornecedorCountArgs>(
      args?: Subset<T, dim_fornecedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Dim_fornecedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dim_fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dim_fornecedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Dim_fornecedorAggregateArgs>(args: Subset<T, Dim_fornecedorAggregateArgs>): Prisma.PrismaPromise<GetDim_fornecedorAggregateType<T>>

    /**
     * Group by Dim_fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_fornecedorGroupByArgs} args - Group by arguments.
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
      T extends dim_fornecedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dim_fornecedorGroupByArgs['orderBy'] }
        : { orderBy?: dim_fornecedorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, dim_fornecedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDim_fornecedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dim_fornecedor model
   */
  readonly fields: dim_fornecedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dim_fornecedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dim_fornecedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dim_insumo<T extends dim_fornecedor$dim_insumoArgs<ExtArgs> = {}>(args?: Subset<T, dim_fornecedor$dim_insumoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_insumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dim_produto<T extends dim_fornecedor$dim_produtoArgs<ExtArgs> = {}>(args?: Subset<T, dim_fornecedor$dim_produtoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the dim_fornecedor model
   */
  interface dim_fornecedorFieldRefs {
    readonly fornecedor_id: FieldRef<"dim_fornecedor", 'Int'>
    readonly nome_fantasia: FieldRef<"dim_fornecedor", 'String'>
    readonly razao_social: FieldRef<"dim_fornecedor", 'String'>
    readonly cnpj: FieldRef<"dim_fornecedor", 'String'>
    readonly telefone: FieldRef<"dim_fornecedor", 'String'>
    readonly email: FieldRef<"dim_fornecedor", 'String'>
    readonly endereco: FieldRef<"dim_fornecedor", 'String'>
    readonly data_cadastro: FieldRef<"dim_fornecedor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * dim_fornecedor findUnique
   */
  export type dim_fornecedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_fornecedor
     */
    select?: dim_fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_fornecedor
     */
    omit?: dim_fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_fornecedorInclude<ExtArgs> | null
    /**
     * Filter, which dim_fornecedor to fetch.
     */
    where: dim_fornecedorWhereUniqueInput
  }

  /**
   * dim_fornecedor findUniqueOrThrow
   */
  export type dim_fornecedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_fornecedor
     */
    select?: dim_fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_fornecedor
     */
    omit?: dim_fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_fornecedorInclude<ExtArgs> | null
    /**
     * Filter, which dim_fornecedor to fetch.
     */
    where: dim_fornecedorWhereUniqueInput
  }

  /**
   * dim_fornecedor findFirst
   */
  export type dim_fornecedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_fornecedor
     */
    select?: dim_fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_fornecedor
     */
    omit?: dim_fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_fornecedorInclude<ExtArgs> | null
    /**
     * Filter, which dim_fornecedor to fetch.
     */
    where?: dim_fornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_fornecedors to fetch.
     */
    orderBy?: dim_fornecedorOrderByWithRelationInput | dim_fornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dim_fornecedors.
     */
    cursor?: dim_fornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dim_fornecedors.
     */
    distinct?: Dim_fornecedorScalarFieldEnum | Dim_fornecedorScalarFieldEnum[]
  }

  /**
   * dim_fornecedor findFirstOrThrow
   */
  export type dim_fornecedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_fornecedor
     */
    select?: dim_fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_fornecedor
     */
    omit?: dim_fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_fornecedorInclude<ExtArgs> | null
    /**
     * Filter, which dim_fornecedor to fetch.
     */
    where?: dim_fornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_fornecedors to fetch.
     */
    orderBy?: dim_fornecedorOrderByWithRelationInput | dim_fornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dim_fornecedors.
     */
    cursor?: dim_fornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dim_fornecedors.
     */
    distinct?: Dim_fornecedorScalarFieldEnum | Dim_fornecedorScalarFieldEnum[]
  }

  /**
   * dim_fornecedor findMany
   */
  export type dim_fornecedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_fornecedor
     */
    select?: dim_fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_fornecedor
     */
    omit?: dim_fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_fornecedorInclude<ExtArgs> | null
    /**
     * Filter, which dim_fornecedors to fetch.
     */
    where?: dim_fornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_fornecedors to fetch.
     */
    orderBy?: dim_fornecedorOrderByWithRelationInput | dim_fornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dim_fornecedors.
     */
    cursor?: dim_fornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_fornecedors.
     */
    skip?: number
    distinct?: Dim_fornecedorScalarFieldEnum | Dim_fornecedorScalarFieldEnum[]
  }

  /**
   * dim_fornecedor create
   */
  export type dim_fornecedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_fornecedor
     */
    select?: dim_fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_fornecedor
     */
    omit?: dim_fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_fornecedorInclude<ExtArgs> | null
    /**
     * The data needed to create a dim_fornecedor.
     */
    data: XOR<dim_fornecedorCreateInput, dim_fornecedorUncheckedCreateInput>
  }

  /**
   * dim_fornecedor createMany
   */
  export type dim_fornecedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dim_fornecedors.
     */
    data: dim_fornecedorCreateManyInput | dim_fornecedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dim_fornecedor createManyAndReturn
   */
  export type dim_fornecedorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_fornecedor
     */
    select?: dim_fornecedorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dim_fornecedor
     */
    omit?: dim_fornecedorOmit<ExtArgs> | null
    /**
     * The data used to create many dim_fornecedors.
     */
    data: dim_fornecedorCreateManyInput | dim_fornecedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dim_fornecedor update
   */
  export type dim_fornecedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_fornecedor
     */
    select?: dim_fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_fornecedor
     */
    omit?: dim_fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_fornecedorInclude<ExtArgs> | null
    /**
     * The data needed to update a dim_fornecedor.
     */
    data: XOR<dim_fornecedorUpdateInput, dim_fornecedorUncheckedUpdateInput>
    /**
     * Choose, which dim_fornecedor to update.
     */
    where: dim_fornecedorWhereUniqueInput
  }

  /**
   * dim_fornecedor updateMany
   */
  export type dim_fornecedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dim_fornecedors.
     */
    data: XOR<dim_fornecedorUpdateManyMutationInput, dim_fornecedorUncheckedUpdateManyInput>
    /**
     * Filter which dim_fornecedors to update
     */
    where?: dim_fornecedorWhereInput
    /**
     * Limit how many dim_fornecedors to update.
     */
    limit?: number
  }

  /**
   * dim_fornecedor updateManyAndReturn
   */
  export type dim_fornecedorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_fornecedor
     */
    select?: dim_fornecedorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dim_fornecedor
     */
    omit?: dim_fornecedorOmit<ExtArgs> | null
    /**
     * The data used to update dim_fornecedors.
     */
    data: XOR<dim_fornecedorUpdateManyMutationInput, dim_fornecedorUncheckedUpdateManyInput>
    /**
     * Filter which dim_fornecedors to update
     */
    where?: dim_fornecedorWhereInput
    /**
     * Limit how many dim_fornecedors to update.
     */
    limit?: number
  }

  /**
   * dim_fornecedor upsert
   */
  export type dim_fornecedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_fornecedor
     */
    select?: dim_fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_fornecedor
     */
    omit?: dim_fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_fornecedorInclude<ExtArgs> | null
    /**
     * The filter to search for the dim_fornecedor to update in case it exists.
     */
    where: dim_fornecedorWhereUniqueInput
    /**
     * In case the dim_fornecedor found by the `where` argument doesn't exist, create a new dim_fornecedor with this data.
     */
    create: XOR<dim_fornecedorCreateInput, dim_fornecedorUncheckedCreateInput>
    /**
     * In case the dim_fornecedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dim_fornecedorUpdateInput, dim_fornecedorUncheckedUpdateInput>
  }

  /**
   * dim_fornecedor delete
   */
  export type dim_fornecedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_fornecedor
     */
    select?: dim_fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_fornecedor
     */
    omit?: dim_fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_fornecedorInclude<ExtArgs> | null
    /**
     * Filter which dim_fornecedor to delete.
     */
    where: dim_fornecedorWhereUniqueInput
  }

  /**
   * dim_fornecedor deleteMany
   */
  export type dim_fornecedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dim_fornecedors to delete
     */
    where?: dim_fornecedorWhereInput
    /**
     * Limit how many dim_fornecedors to delete.
     */
    limit?: number
  }

  /**
   * dim_fornecedor.dim_insumo
   */
  export type dim_fornecedor$dim_insumoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_insumo
     */
    select?: dim_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_insumo
     */
    omit?: dim_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_insumoInclude<ExtArgs> | null
    where?: dim_insumoWhereInput
    orderBy?: dim_insumoOrderByWithRelationInput | dim_insumoOrderByWithRelationInput[]
    cursor?: dim_insumoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Dim_insumoScalarFieldEnum | Dim_insumoScalarFieldEnum[]
  }

  /**
   * dim_fornecedor.dim_produto
   */
  export type dim_fornecedor$dim_produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_produto
     */
    select?: dim_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_produto
     */
    omit?: dim_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_produtoInclude<ExtArgs> | null
    where?: dim_produtoWhereInput
    orderBy?: dim_produtoOrderByWithRelationInput | dim_produtoOrderByWithRelationInput[]
    cursor?: dim_produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Dim_produtoScalarFieldEnum | Dim_produtoScalarFieldEnum[]
  }

  /**
   * dim_fornecedor without action
   */
  export type dim_fornecedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_fornecedor
     */
    select?: dim_fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_fornecedor
     */
    omit?: dim_fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_fornecedorInclude<ExtArgs> | null
  }


  /**
   * Model dim_insumo
   */

  export type AggregateDim_insumo = {
    _count: Dim_insumoCountAggregateOutputType | null
    _avg: Dim_insumoAvgAggregateOutputType | null
    _sum: Dim_insumoSumAggregateOutputType | null
    _min: Dim_insumoMinAggregateOutputType | null
    _max: Dim_insumoMaxAggregateOutputType | null
  }

  export type Dim_insumoAvgAggregateOutputType = {
    insumo_id: number | null
    preco_unitario: Decimal | null
    fornecedor_id: number | null
  }

  export type Dim_insumoSumAggregateOutputType = {
    insumo_id: number | null
    preco_unitario: Decimal | null
    fornecedor_id: number | null
  }

  export type Dim_insumoMinAggregateOutputType = {
    insumo_id: number | null
    nome: string | null
    descricao: string | null
    unidade_medida: string | null
    preco_unitario: Decimal | null
    fornecedor_id: number | null
  }

  export type Dim_insumoMaxAggregateOutputType = {
    insumo_id: number | null
    nome: string | null
    descricao: string | null
    unidade_medida: string | null
    preco_unitario: Decimal | null
    fornecedor_id: number | null
  }

  export type Dim_insumoCountAggregateOutputType = {
    insumo_id: number
    nome: number
    descricao: number
    unidade_medida: number
    preco_unitario: number
    fornecedor_id: number
    _all: number
  }


  export type Dim_insumoAvgAggregateInputType = {
    insumo_id?: true
    preco_unitario?: true
    fornecedor_id?: true
  }

  export type Dim_insumoSumAggregateInputType = {
    insumo_id?: true
    preco_unitario?: true
    fornecedor_id?: true
  }

  export type Dim_insumoMinAggregateInputType = {
    insumo_id?: true
    nome?: true
    descricao?: true
    unidade_medida?: true
    preco_unitario?: true
    fornecedor_id?: true
  }

  export type Dim_insumoMaxAggregateInputType = {
    insumo_id?: true
    nome?: true
    descricao?: true
    unidade_medida?: true
    preco_unitario?: true
    fornecedor_id?: true
  }

  export type Dim_insumoCountAggregateInputType = {
    insumo_id?: true
    nome?: true
    descricao?: true
    unidade_medida?: true
    preco_unitario?: true
    fornecedor_id?: true
    _all?: true
  }

  export type Dim_insumoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dim_insumo to aggregate.
     */
    where?: dim_insumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_insumos to fetch.
     */
    orderBy?: dim_insumoOrderByWithRelationInput | dim_insumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dim_insumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dim_insumos
    **/
    _count?: true | Dim_insumoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Dim_insumoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Dim_insumoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Dim_insumoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Dim_insumoMaxAggregateInputType
  }

  export type GetDim_insumoAggregateType<T extends Dim_insumoAggregateArgs> = {
        [P in keyof T & keyof AggregateDim_insumo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDim_insumo[P]>
      : GetScalarType<T[P], AggregateDim_insumo[P]>
  }




  export type dim_insumoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dim_insumoWhereInput
    orderBy?: dim_insumoOrderByWithAggregationInput | dim_insumoOrderByWithAggregationInput[]
    by: Dim_insumoScalarFieldEnum[] | Dim_insumoScalarFieldEnum
    having?: dim_insumoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Dim_insumoCountAggregateInputType | true
    _avg?: Dim_insumoAvgAggregateInputType
    _sum?: Dim_insumoSumAggregateInputType
    _min?: Dim_insumoMinAggregateInputType
    _max?: Dim_insumoMaxAggregateInputType
  }

  export type Dim_insumoGroupByOutputType = {
    insumo_id: number
    nome: string
    descricao: string | null
    unidade_medida: string | null
    preco_unitario: Decimal | null
    fornecedor_id: number | null
    _count: Dim_insumoCountAggregateOutputType | null
    _avg: Dim_insumoAvgAggregateOutputType | null
    _sum: Dim_insumoSumAggregateOutputType | null
    _min: Dim_insumoMinAggregateOutputType | null
    _max: Dim_insumoMaxAggregateOutputType | null
  }

  type GetDim_insumoGroupByPayload<T extends dim_insumoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Dim_insumoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Dim_insumoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Dim_insumoGroupByOutputType[P]>
            : GetScalarType<T[P], Dim_insumoGroupByOutputType[P]>
        }
      >
    >


  export type dim_insumoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    insumo_id?: boolean
    nome?: boolean
    descricao?: boolean
    unidade_medida?: boolean
    preco_unitario?: boolean
    fornecedor_id?: boolean
    fornecedor?: boolean | dim_insumo$fornecedorArgs<ExtArgs>
    map_composicao?: boolean | dim_insumo$map_composicaoArgs<ExtArgs>
    _count?: boolean | Dim_insumoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dim_insumo"]>

  export type dim_insumoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    insumo_id?: boolean
    nome?: boolean
    descricao?: boolean
    unidade_medida?: boolean
    preco_unitario?: boolean
    fornecedor_id?: boolean
    fornecedor?: boolean | dim_insumo$fornecedorArgs<ExtArgs>
  }, ExtArgs["result"]["dim_insumo"]>

  export type dim_insumoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    insumo_id?: boolean
    nome?: boolean
    descricao?: boolean
    unidade_medida?: boolean
    preco_unitario?: boolean
    fornecedor_id?: boolean
    fornecedor?: boolean | dim_insumo$fornecedorArgs<ExtArgs>
  }, ExtArgs["result"]["dim_insumo"]>

  export type dim_insumoSelectScalar = {
    insumo_id?: boolean
    nome?: boolean
    descricao?: boolean
    unidade_medida?: boolean
    preco_unitario?: boolean
    fornecedor_id?: boolean
  }

  export type dim_insumoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"insumo_id" | "nome" | "descricao" | "unidade_medida" | "preco_unitario" | "fornecedor_id", ExtArgs["result"]["dim_insumo"]>
  export type dim_insumoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | dim_insumo$fornecedorArgs<ExtArgs>
    map_composicao?: boolean | dim_insumo$map_composicaoArgs<ExtArgs>
    _count?: boolean | Dim_insumoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type dim_insumoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | dim_insumo$fornecedorArgs<ExtArgs>
  }
  export type dim_insumoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | dim_insumo$fornecedorArgs<ExtArgs>
  }

  export type $dim_insumoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dim_insumo"
    objects: {
      fornecedor: Prisma.$dim_fornecedorPayload<ExtArgs> | null
      map_composicao: Prisma.$map_produto_composicaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      insumo_id: number
      nome: string
      descricao: string | null
      unidade_medida: string | null
      preco_unitario: Prisma.Decimal | null
      fornecedor_id: number | null
    }, ExtArgs["result"]["dim_insumo"]>
    composites: {}
  }

  type dim_insumoGetPayload<S extends boolean | null | undefined | dim_insumoDefaultArgs> = $Result.GetResult<Prisma.$dim_insumoPayload, S>

  type dim_insumoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dim_insumoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Dim_insumoCountAggregateInputType | true
    }

  export interface dim_insumoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dim_insumo'], meta: { name: 'dim_insumo' } }
    /**
     * Find zero or one Dim_insumo that matches the filter.
     * @param {dim_insumoFindUniqueArgs} args - Arguments to find a Dim_insumo
     * @example
     * // Get one Dim_insumo
     * const dim_insumo = await prisma.dim_insumo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dim_insumoFindUniqueArgs>(args: SelectSubset<T, dim_insumoFindUniqueArgs<ExtArgs>>): Prisma__dim_insumoClient<$Result.GetResult<Prisma.$dim_insumoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dim_insumo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dim_insumoFindUniqueOrThrowArgs} args - Arguments to find a Dim_insumo
     * @example
     * // Get one Dim_insumo
     * const dim_insumo = await prisma.dim_insumo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dim_insumoFindUniqueOrThrowArgs>(args: SelectSubset<T, dim_insumoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dim_insumoClient<$Result.GetResult<Prisma.$dim_insumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dim_insumo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_insumoFindFirstArgs} args - Arguments to find a Dim_insumo
     * @example
     * // Get one Dim_insumo
     * const dim_insumo = await prisma.dim_insumo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dim_insumoFindFirstArgs>(args?: SelectSubset<T, dim_insumoFindFirstArgs<ExtArgs>>): Prisma__dim_insumoClient<$Result.GetResult<Prisma.$dim_insumoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dim_insumo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_insumoFindFirstOrThrowArgs} args - Arguments to find a Dim_insumo
     * @example
     * // Get one Dim_insumo
     * const dim_insumo = await prisma.dim_insumo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dim_insumoFindFirstOrThrowArgs>(args?: SelectSubset<T, dim_insumoFindFirstOrThrowArgs<ExtArgs>>): Prisma__dim_insumoClient<$Result.GetResult<Prisma.$dim_insumoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dim_insumos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_insumoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dim_insumos
     * const dim_insumos = await prisma.dim_insumo.findMany()
     * 
     * // Get first 10 Dim_insumos
     * const dim_insumos = await prisma.dim_insumo.findMany({ take: 10 })
     * 
     * // Only select the `insumo_id`
     * const dim_insumoWithInsumo_idOnly = await prisma.dim_insumo.findMany({ select: { insumo_id: true } })
     * 
     */
    findMany<T extends dim_insumoFindManyArgs>(args?: SelectSubset<T, dim_insumoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_insumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dim_insumo.
     * @param {dim_insumoCreateArgs} args - Arguments to create a Dim_insumo.
     * @example
     * // Create one Dim_insumo
     * const Dim_insumo = await prisma.dim_insumo.create({
     *   data: {
     *     // ... data to create a Dim_insumo
     *   }
     * })
     * 
     */
    create<T extends dim_insumoCreateArgs>(args: SelectSubset<T, dim_insumoCreateArgs<ExtArgs>>): Prisma__dim_insumoClient<$Result.GetResult<Prisma.$dim_insumoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dim_insumos.
     * @param {dim_insumoCreateManyArgs} args - Arguments to create many Dim_insumos.
     * @example
     * // Create many Dim_insumos
     * const dim_insumo = await prisma.dim_insumo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dim_insumoCreateManyArgs>(args?: SelectSubset<T, dim_insumoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dim_insumos and returns the data saved in the database.
     * @param {dim_insumoCreateManyAndReturnArgs} args - Arguments to create many Dim_insumos.
     * @example
     * // Create many Dim_insumos
     * const dim_insumo = await prisma.dim_insumo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dim_insumos and only return the `insumo_id`
     * const dim_insumoWithInsumo_idOnly = await prisma.dim_insumo.createManyAndReturn({
     *   select: { insumo_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dim_insumoCreateManyAndReturnArgs>(args?: SelectSubset<T, dim_insumoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_insumoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dim_insumo.
     * @param {dim_insumoDeleteArgs} args - Arguments to delete one Dim_insumo.
     * @example
     * // Delete one Dim_insumo
     * const Dim_insumo = await prisma.dim_insumo.delete({
     *   where: {
     *     // ... filter to delete one Dim_insumo
     *   }
     * })
     * 
     */
    delete<T extends dim_insumoDeleteArgs>(args: SelectSubset<T, dim_insumoDeleteArgs<ExtArgs>>): Prisma__dim_insumoClient<$Result.GetResult<Prisma.$dim_insumoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dim_insumo.
     * @param {dim_insumoUpdateArgs} args - Arguments to update one Dim_insumo.
     * @example
     * // Update one Dim_insumo
     * const dim_insumo = await prisma.dim_insumo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dim_insumoUpdateArgs>(args: SelectSubset<T, dim_insumoUpdateArgs<ExtArgs>>): Prisma__dim_insumoClient<$Result.GetResult<Prisma.$dim_insumoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dim_insumos.
     * @param {dim_insumoDeleteManyArgs} args - Arguments to filter Dim_insumos to delete.
     * @example
     * // Delete a few Dim_insumos
     * const { count } = await prisma.dim_insumo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dim_insumoDeleteManyArgs>(args?: SelectSubset<T, dim_insumoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dim_insumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_insumoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dim_insumos
     * const dim_insumo = await prisma.dim_insumo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dim_insumoUpdateManyArgs>(args: SelectSubset<T, dim_insumoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dim_insumos and returns the data updated in the database.
     * @param {dim_insumoUpdateManyAndReturnArgs} args - Arguments to update many Dim_insumos.
     * @example
     * // Update many Dim_insumos
     * const dim_insumo = await prisma.dim_insumo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dim_insumos and only return the `insumo_id`
     * const dim_insumoWithInsumo_idOnly = await prisma.dim_insumo.updateManyAndReturn({
     *   select: { insumo_id: true },
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
    updateManyAndReturn<T extends dim_insumoUpdateManyAndReturnArgs>(args: SelectSubset<T, dim_insumoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_insumoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dim_insumo.
     * @param {dim_insumoUpsertArgs} args - Arguments to update or create a Dim_insumo.
     * @example
     * // Update or create a Dim_insumo
     * const dim_insumo = await prisma.dim_insumo.upsert({
     *   create: {
     *     // ... data to create a Dim_insumo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dim_insumo we want to update
     *   }
     * })
     */
    upsert<T extends dim_insumoUpsertArgs>(args: SelectSubset<T, dim_insumoUpsertArgs<ExtArgs>>): Prisma__dim_insumoClient<$Result.GetResult<Prisma.$dim_insumoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dim_insumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_insumoCountArgs} args - Arguments to filter Dim_insumos to count.
     * @example
     * // Count the number of Dim_insumos
     * const count = await prisma.dim_insumo.count({
     *   where: {
     *     // ... the filter for the Dim_insumos we want to count
     *   }
     * })
    **/
    count<T extends dim_insumoCountArgs>(
      args?: Subset<T, dim_insumoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Dim_insumoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dim_insumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dim_insumoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Dim_insumoAggregateArgs>(args: Subset<T, Dim_insumoAggregateArgs>): Prisma.PrismaPromise<GetDim_insumoAggregateType<T>>

    /**
     * Group by Dim_insumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_insumoGroupByArgs} args - Group by arguments.
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
      T extends dim_insumoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dim_insumoGroupByArgs['orderBy'] }
        : { orderBy?: dim_insumoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, dim_insumoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDim_insumoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dim_insumo model
   */
  readonly fields: dim_insumoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dim_insumo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dim_insumoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fornecedor<T extends dim_insumo$fornecedorArgs<ExtArgs> = {}>(args?: Subset<T, dim_insumo$fornecedorArgs<ExtArgs>>): Prisma__dim_fornecedorClient<$Result.GetResult<Prisma.$dim_fornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    map_composicao<T extends dim_insumo$map_composicaoArgs<ExtArgs> = {}>(args?: Subset<T, dim_insumo$map_composicaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$map_produto_composicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the dim_insumo model
   */
  interface dim_insumoFieldRefs {
    readonly insumo_id: FieldRef<"dim_insumo", 'Int'>
    readonly nome: FieldRef<"dim_insumo", 'String'>
    readonly descricao: FieldRef<"dim_insumo", 'String'>
    readonly unidade_medida: FieldRef<"dim_insumo", 'String'>
    readonly preco_unitario: FieldRef<"dim_insumo", 'Decimal'>
    readonly fornecedor_id: FieldRef<"dim_insumo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * dim_insumo findUnique
   */
  export type dim_insumoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_insumo
     */
    select?: dim_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_insumo
     */
    omit?: dim_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_insumoInclude<ExtArgs> | null
    /**
     * Filter, which dim_insumo to fetch.
     */
    where: dim_insumoWhereUniqueInput
  }

  /**
   * dim_insumo findUniqueOrThrow
   */
  export type dim_insumoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_insumo
     */
    select?: dim_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_insumo
     */
    omit?: dim_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_insumoInclude<ExtArgs> | null
    /**
     * Filter, which dim_insumo to fetch.
     */
    where: dim_insumoWhereUniqueInput
  }

  /**
   * dim_insumo findFirst
   */
  export type dim_insumoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_insumo
     */
    select?: dim_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_insumo
     */
    omit?: dim_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_insumoInclude<ExtArgs> | null
    /**
     * Filter, which dim_insumo to fetch.
     */
    where?: dim_insumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_insumos to fetch.
     */
    orderBy?: dim_insumoOrderByWithRelationInput | dim_insumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dim_insumos.
     */
    cursor?: dim_insumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dim_insumos.
     */
    distinct?: Dim_insumoScalarFieldEnum | Dim_insumoScalarFieldEnum[]
  }

  /**
   * dim_insumo findFirstOrThrow
   */
  export type dim_insumoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_insumo
     */
    select?: dim_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_insumo
     */
    omit?: dim_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_insumoInclude<ExtArgs> | null
    /**
     * Filter, which dim_insumo to fetch.
     */
    where?: dim_insumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_insumos to fetch.
     */
    orderBy?: dim_insumoOrderByWithRelationInput | dim_insumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dim_insumos.
     */
    cursor?: dim_insumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dim_insumos.
     */
    distinct?: Dim_insumoScalarFieldEnum | Dim_insumoScalarFieldEnum[]
  }

  /**
   * dim_insumo findMany
   */
  export type dim_insumoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_insumo
     */
    select?: dim_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_insumo
     */
    omit?: dim_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_insumoInclude<ExtArgs> | null
    /**
     * Filter, which dim_insumos to fetch.
     */
    where?: dim_insumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_insumos to fetch.
     */
    orderBy?: dim_insumoOrderByWithRelationInput | dim_insumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dim_insumos.
     */
    cursor?: dim_insumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_insumos.
     */
    skip?: number
    distinct?: Dim_insumoScalarFieldEnum | Dim_insumoScalarFieldEnum[]
  }

  /**
   * dim_insumo create
   */
  export type dim_insumoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_insumo
     */
    select?: dim_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_insumo
     */
    omit?: dim_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_insumoInclude<ExtArgs> | null
    /**
     * The data needed to create a dim_insumo.
     */
    data: XOR<dim_insumoCreateInput, dim_insumoUncheckedCreateInput>
  }

  /**
   * dim_insumo createMany
   */
  export type dim_insumoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dim_insumos.
     */
    data: dim_insumoCreateManyInput | dim_insumoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dim_insumo createManyAndReturn
   */
  export type dim_insumoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_insumo
     */
    select?: dim_insumoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dim_insumo
     */
    omit?: dim_insumoOmit<ExtArgs> | null
    /**
     * The data used to create many dim_insumos.
     */
    data: dim_insumoCreateManyInput | dim_insumoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_insumoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * dim_insumo update
   */
  export type dim_insumoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_insumo
     */
    select?: dim_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_insumo
     */
    omit?: dim_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_insumoInclude<ExtArgs> | null
    /**
     * The data needed to update a dim_insumo.
     */
    data: XOR<dim_insumoUpdateInput, dim_insumoUncheckedUpdateInput>
    /**
     * Choose, which dim_insumo to update.
     */
    where: dim_insumoWhereUniqueInput
  }

  /**
   * dim_insumo updateMany
   */
  export type dim_insumoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dim_insumos.
     */
    data: XOR<dim_insumoUpdateManyMutationInput, dim_insumoUncheckedUpdateManyInput>
    /**
     * Filter which dim_insumos to update
     */
    where?: dim_insumoWhereInput
    /**
     * Limit how many dim_insumos to update.
     */
    limit?: number
  }

  /**
   * dim_insumo updateManyAndReturn
   */
  export type dim_insumoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_insumo
     */
    select?: dim_insumoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dim_insumo
     */
    omit?: dim_insumoOmit<ExtArgs> | null
    /**
     * The data used to update dim_insumos.
     */
    data: XOR<dim_insumoUpdateManyMutationInput, dim_insumoUncheckedUpdateManyInput>
    /**
     * Filter which dim_insumos to update
     */
    where?: dim_insumoWhereInput
    /**
     * Limit how many dim_insumos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_insumoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * dim_insumo upsert
   */
  export type dim_insumoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_insumo
     */
    select?: dim_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_insumo
     */
    omit?: dim_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_insumoInclude<ExtArgs> | null
    /**
     * The filter to search for the dim_insumo to update in case it exists.
     */
    where: dim_insumoWhereUniqueInput
    /**
     * In case the dim_insumo found by the `where` argument doesn't exist, create a new dim_insumo with this data.
     */
    create: XOR<dim_insumoCreateInput, dim_insumoUncheckedCreateInput>
    /**
     * In case the dim_insumo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dim_insumoUpdateInput, dim_insumoUncheckedUpdateInput>
  }

  /**
   * dim_insumo delete
   */
  export type dim_insumoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_insumo
     */
    select?: dim_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_insumo
     */
    omit?: dim_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_insumoInclude<ExtArgs> | null
    /**
     * Filter which dim_insumo to delete.
     */
    where: dim_insumoWhereUniqueInput
  }

  /**
   * dim_insumo deleteMany
   */
  export type dim_insumoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dim_insumos to delete
     */
    where?: dim_insumoWhereInput
    /**
     * Limit how many dim_insumos to delete.
     */
    limit?: number
  }

  /**
   * dim_insumo.fornecedor
   */
  export type dim_insumo$fornecedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_fornecedor
     */
    select?: dim_fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_fornecedor
     */
    omit?: dim_fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_fornecedorInclude<ExtArgs> | null
    where?: dim_fornecedorWhereInput
  }

  /**
   * dim_insumo.map_composicao
   */
  export type dim_insumo$map_composicaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_produto_composicao
     */
    select?: map_produto_composicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_produto_composicao
     */
    omit?: map_produto_composicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_produto_composicaoInclude<ExtArgs> | null
    where?: map_produto_composicaoWhereInput
    orderBy?: map_produto_composicaoOrderByWithRelationInput | map_produto_composicaoOrderByWithRelationInput[]
    cursor?: map_produto_composicaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Map_produto_composicaoScalarFieldEnum | Map_produto_composicaoScalarFieldEnum[]
  }

  /**
   * dim_insumo without action
   */
  export type dim_insumoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_insumo
     */
    select?: dim_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_insumo
     */
    omit?: dim_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_insumoInclude<ExtArgs> | null
  }


  /**
   * Model dim_produto
   */

  export type AggregateDim_produto = {
    _count: Dim_produtoCountAggregateOutputType | null
    _avg: Dim_produtoAvgAggregateOutputType | null
    _sum: Dim_produtoSumAggregateOutputType | null
    _min: Dim_produtoMinAggregateOutputType | null
    _max: Dim_produtoMaxAggregateOutputType | null
  }

  export type Dim_produtoAvgAggregateOutputType = {
    produto_id: number | null
    preco_unitario: Decimal | null
    estoque: number | null
    fornecedor_id: number | null
  }

  export type Dim_produtoSumAggregateOutputType = {
    produto_id: number | null
    preco_unitario: Decimal | null
    estoque: number | null
    fornecedor_id: number | null
  }

  export type Dim_produtoMinAggregateOutputType = {
    produto_id: number | null
    nome: string | null
    descricao: string | null
    preco_unitario: Decimal | null
    estoque: number | null
    unidade_medida: string | null
    fornecedor_id: number | null
  }

  export type Dim_produtoMaxAggregateOutputType = {
    produto_id: number | null
    nome: string | null
    descricao: string | null
    preco_unitario: Decimal | null
    estoque: number | null
    unidade_medida: string | null
    fornecedor_id: number | null
  }

  export type Dim_produtoCountAggregateOutputType = {
    produto_id: number
    nome: number
    descricao: number
    preco_unitario: number
    estoque: number
    unidade_medida: number
    fornecedor_id: number
    _all: number
  }


  export type Dim_produtoAvgAggregateInputType = {
    produto_id?: true
    preco_unitario?: true
    estoque?: true
    fornecedor_id?: true
  }

  export type Dim_produtoSumAggregateInputType = {
    produto_id?: true
    preco_unitario?: true
    estoque?: true
    fornecedor_id?: true
  }

  export type Dim_produtoMinAggregateInputType = {
    produto_id?: true
    nome?: true
    descricao?: true
    preco_unitario?: true
    estoque?: true
    unidade_medida?: true
    fornecedor_id?: true
  }

  export type Dim_produtoMaxAggregateInputType = {
    produto_id?: true
    nome?: true
    descricao?: true
    preco_unitario?: true
    estoque?: true
    unidade_medida?: true
    fornecedor_id?: true
  }

  export type Dim_produtoCountAggregateInputType = {
    produto_id?: true
    nome?: true
    descricao?: true
    preco_unitario?: true
    estoque?: true
    unidade_medida?: true
    fornecedor_id?: true
    _all?: true
  }

  export type Dim_produtoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dim_produto to aggregate.
     */
    where?: dim_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_produtos to fetch.
     */
    orderBy?: dim_produtoOrderByWithRelationInput | dim_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dim_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dim_produtos
    **/
    _count?: true | Dim_produtoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Dim_produtoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Dim_produtoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Dim_produtoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Dim_produtoMaxAggregateInputType
  }

  export type GetDim_produtoAggregateType<T extends Dim_produtoAggregateArgs> = {
        [P in keyof T & keyof AggregateDim_produto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDim_produto[P]>
      : GetScalarType<T[P], AggregateDim_produto[P]>
  }




  export type dim_produtoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dim_produtoWhereInput
    orderBy?: dim_produtoOrderByWithAggregationInput | dim_produtoOrderByWithAggregationInput[]
    by: Dim_produtoScalarFieldEnum[] | Dim_produtoScalarFieldEnum
    having?: dim_produtoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Dim_produtoCountAggregateInputType | true
    _avg?: Dim_produtoAvgAggregateInputType
    _sum?: Dim_produtoSumAggregateInputType
    _min?: Dim_produtoMinAggregateInputType
    _max?: Dim_produtoMaxAggregateInputType
  }

  export type Dim_produtoGroupByOutputType = {
    produto_id: number
    nome: string
    descricao: string | null
    preco_unitario: Decimal | null
    estoque: number | null
    unidade_medida: string | null
    fornecedor_id: number | null
    _count: Dim_produtoCountAggregateOutputType | null
    _avg: Dim_produtoAvgAggregateOutputType | null
    _sum: Dim_produtoSumAggregateOutputType | null
    _min: Dim_produtoMinAggregateOutputType | null
    _max: Dim_produtoMaxAggregateOutputType | null
  }

  type GetDim_produtoGroupByPayload<T extends dim_produtoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Dim_produtoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Dim_produtoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Dim_produtoGroupByOutputType[P]>
            : GetScalarType<T[P], Dim_produtoGroupByOutputType[P]>
        }
      >
    >


  export type dim_produtoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    produto_id?: boolean
    nome?: boolean
    descricao?: boolean
    preco_unitario?: boolean
    estoque?: boolean
    unidade_medida?: boolean
    fornecedor_id?: boolean
    fornecedor?: boolean | dim_produto$fornecedorArgs<ExtArgs>
    map_detalhe?: boolean | dim_produto$map_detalheArgs<ExtArgs>
    map_composicao?: boolean | dim_produto$map_composicaoArgs<ExtArgs>
    _count?: boolean | Dim_produtoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dim_produto"]>

  export type dim_produtoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    produto_id?: boolean
    nome?: boolean
    descricao?: boolean
    preco_unitario?: boolean
    estoque?: boolean
    unidade_medida?: boolean
    fornecedor_id?: boolean
    fornecedor?: boolean | dim_produto$fornecedorArgs<ExtArgs>
  }, ExtArgs["result"]["dim_produto"]>

  export type dim_produtoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    produto_id?: boolean
    nome?: boolean
    descricao?: boolean
    preco_unitario?: boolean
    estoque?: boolean
    unidade_medida?: boolean
    fornecedor_id?: boolean
    fornecedor?: boolean | dim_produto$fornecedorArgs<ExtArgs>
  }, ExtArgs["result"]["dim_produto"]>

  export type dim_produtoSelectScalar = {
    produto_id?: boolean
    nome?: boolean
    descricao?: boolean
    preco_unitario?: boolean
    estoque?: boolean
    unidade_medida?: boolean
    fornecedor_id?: boolean
  }

  export type dim_produtoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"produto_id" | "nome" | "descricao" | "preco_unitario" | "estoque" | "unidade_medida" | "fornecedor_id", ExtArgs["result"]["dim_produto"]>
  export type dim_produtoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | dim_produto$fornecedorArgs<ExtArgs>
    map_detalhe?: boolean | dim_produto$map_detalheArgs<ExtArgs>
    map_composicao?: boolean | dim_produto$map_composicaoArgs<ExtArgs>
    _count?: boolean | Dim_produtoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type dim_produtoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | dim_produto$fornecedorArgs<ExtArgs>
  }
  export type dim_produtoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | dim_produto$fornecedorArgs<ExtArgs>
  }

  export type $dim_produtoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dim_produto"
    objects: {
      fornecedor: Prisma.$dim_fornecedorPayload<ExtArgs> | null
      map_detalhe: Prisma.$map_pedido_detalhePayload<ExtArgs>[]
      map_composicao: Prisma.$map_produto_composicaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      produto_id: number
      nome: string
      descricao: string | null
      preco_unitario: Prisma.Decimal | null
      estoque: number | null
      unidade_medida: string | null
      fornecedor_id: number | null
    }, ExtArgs["result"]["dim_produto"]>
    composites: {}
  }

  type dim_produtoGetPayload<S extends boolean | null | undefined | dim_produtoDefaultArgs> = $Result.GetResult<Prisma.$dim_produtoPayload, S>

  type dim_produtoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dim_produtoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Dim_produtoCountAggregateInputType | true
    }

  export interface dim_produtoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dim_produto'], meta: { name: 'dim_produto' } }
    /**
     * Find zero or one Dim_produto that matches the filter.
     * @param {dim_produtoFindUniqueArgs} args - Arguments to find a Dim_produto
     * @example
     * // Get one Dim_produto
     * const dim_produto = await prisma.dim_produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dim_produtoFindUniqueArgs>(args: SelectSubset<T, dim_produtoFindUniqueArgs<ExtArgs>>): Prisma__dim_produtoClient<$Result.GetResult<Prisma.$dim_produtoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dim_produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dim_produtoFindUniqueOrThrowArgs} args - Arguments to find a Dim_produto
     * @example
     * // Get one Dim_produto
     * const dim_produto = await prisma.dim_produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dim_produtoFindUniqueOrThrowArgs>(args: SelectSubset<T, dim_produtoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dim_produtoClient<$Result.GetResult<Prisma.$dim_produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dim_produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_produtoFindFirstArgs} args - Arguments to find a Dim_produto
     * @example
     * // Get one Dim_produto
     * const dim_produto = await prisma.dim_produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dim_produtoFindFirstArgs>(args?: SelectSubset<T, dim_produtoFindFirstArgs<ExtArgs>>): Prisma__dim_produtoClient<$Result.GetResult<Prisma.$dim_produtoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dim_produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_produtoFindFirstOrThrowArgs} args - Arguments to find a Dim_produto
     * @example
     * // Get one Dim_produto
     * const dim_produto = await prisma.dim_produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dim_produtoFindFirstOrThrowArgs>(args?: SelectSubset<T, dim_produtoFindFirstOrThrowArgs<ExtArgs>>): Prisma__dim_produtoClient<$Result.GetResult<Prisma.$dim_produtoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dim_produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_produtoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dim_produtos
     * const dim_produtos = await prisma.dim_produto.findMany()
     * 
     * // Get first 10 Dim_produtos
     * const dim_produtos = await prisma.dim_produto.findMany({ take: 10 })
     * 
     * // Only select the `produto_id`
     * const dim_produtoWithProduto_idOnly = await prisma.dim_produto.findMany({ select: { produto_id: true } })
     * 
     */
    findMany<T extends dim_produtoFindManyArgs>(args?: SelectSubset<T, dim_produtoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dim_produto.
     * @param {dim_produtoCreateArgs} args - Arguments to create a Dim_produto.
     * @example
     * // Create one Dim_produto
     * const Dim_produto = await prisma.dim_produto.create({
     *   data: {
     *     // ... data to create a Dim_produto
     *   }
     * })
     * 
     */
    create<T extends dim_produtoCreateArgs>(args: SelectSubset<T, dim_produtoCreateArgs<ExtArgs>>): Prisma__dim_produtoClient<$Result.GetResult<Prisma.$dim_produtoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dim_produtos.
     * @param {dim_produtoCreateManyArgs} args - Arguments to create many Dim_produtos.
     * @example
     * // Create many Dim_produtos
     * const dim_produto = await prisma.dim_produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dim_produtoCreateManyArgs>(args?: SelectSubset<T, dim_produtoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dim_produtos and returns the data saved in the database.
     * @param {dim_produtoCreateManyAndReturnArgs} args - Arguments to create many Dim_produtos.
     * @example
     * // Create many Dim_produtos
     * const dim_produto = await prisma.dim_produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dim_produtos and only return the `produto_id`
     * const dim_produtoWithProduto_idOnly = await prisma.dim_produto.createManyAndReturn({
     *   select: { produto_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dim_produtoCreateManyAndReturnArgs>(args?: SelectSubset<T, dim_produtoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_produtoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dim_produto.
     * @param {dim_produtoDeleteArgs} args - Arguments to delete one Dim_produto.
     * @example
     * // Delete one Dim_produto
     * const Dim_produto = await prisma.dim_produto.delete({
     *   where: {
     *     // ... filter to delete one Dim_produto
     *   }
     * })
     * 
     */
    delete<T extends dim_produtoDeleteArgs>(args: SelectSubset<T, dim_produtoDeleteArgs<ExtArgs>>): Prisma__dim_produtoClient<$Result.GetResult<Prisma.$dim_produtoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dim_produto.
     * @param {dim_produtoUpdateArgs} args - Arguments to update one Dim_produto.
     * @example
     * // Update one Dim_produto
     * const dim_produto = await prisma.dim_produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dim_produtoUpdateArgs>(args: SelectSubset<T, dim_produtoUpdateArgs<ExtArgs>>): Prisma__dim_produtoClient<$Result.GetResult<Prisma.$dim_produtoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dim_produtos.
     * @param {dim_produtoDeleteManyArgs} args - Arguments to filter Dim_produtos to delete.
     * @example
     * // Delete a few Dim_produtos
     * const { count } = await prisma.dim_produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dim_produtoDeleteManyArgs>(args?: SelectSubset<T, dim_produtoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dim_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_produtoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dim_produtos
     * const dim_produto = await prisma.dim_produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dim_produtoUpdateManyArgs>(args: SelectSubset<T, dim_produtoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dim_produtos and returns the data updated in the database.
     * @param {dim_produtoUpdateManyAndReturnArgs} args - Arguments to update many Dim_produtos.
     * @example
     * // Update many Dim_produtos
     * const dim_produto = await prisma.dim_produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dim_produtos and only return the `produto_id`
     * const dim_produtoWithProduto_idOnly = await prisma.dim_produto.updateManyAndReturn({
     *   select: { produto_id: true },
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
    updateManyAndReturn<T extends dim_produtoUpdateManyAndReturnArgs>(args: SelectSubset<T, dim_produtoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_produtoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dim_produto.
     * @param {dim_produtoUpsertArgs} args - Arguments to update or create a Dim_produto.
     * @example
     * // Update or create a Dim_produto
     * const dim_produto = await prisma.dim_produto.upsert({
     *   create: {
     *     // ... data to create a Dim_produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dim_produto we want to update
     *   }
     * })
     */
    upsert<T extends dim_produtoUpsertArgs>(args: SelectSubset<T, dim_produtoUpsertArgs<ExtArgs>>): Prisma__dim_produtoClient<$Result.GetResult<Prisma.$dim_produtoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dim_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_produtoCountArgs} args - Arguments to filter Dim_produtos to count.
     * @example
     * // Count the number of Dim_produtos
     * const count = await prisma.dim_produto.count({
     *   where: {
     *     // ... the filter for the Dim_produtos we want to count
     *   }
     * })
    **/
    count<T extends dim_produtoCountArgs>(
      args?: Subset<T, dim_produtoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Dim_produtoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dim_produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dim_produtoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Dim_produtoAggregateArgs>(args: Subset<T, Dim_produtoAggregateArgs>): Prisma.PrismaPromise<GetDim_produtoAggregateType<T>>

    /**
     * Group by Dim_produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_produtoGroupByArgs} args - Group by arguments.
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
      T extends dim_produtoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dim_produtoGroupByArgs['orderBy'] }
        : { orderBy?: dim_produtoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, dim_produtoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDim_produtoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dim_produto model
   */
  readonly fields: dim_produtoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dim_produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dim_produtoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fornecedor<T extends dim_produto$fornecedorArgs<ExtArgs> = {}>(args?: Subset<T, dim_produto$fornecedorArgs<ExtArgs>>): Prisma__dim_fornecedorClient<$Result.GetResult<Prisma.$dim_fornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    map_detalhe<T extends dim_produto$map_detalheArgs<ExtArgs> = {}>(args?: Subset<T, dim_produto$map_detalheArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$map_pedido_detalhePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    map_composicao<T extends dim_produto$map_composicaoArgs<ExtArgs> = {}>(args?: Subset<T, dim_produto$map_composicaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$map_produto_composicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the dim_produto model
   */
  interface dim_produtoFieldRefs {
    readonly produto_id: FieldRef<"dim_produto", 'Int'>
    readonly nome: FieldRef<"dim_produto", 'String'>
    readonly descricao: FieldRef<"dim_produto", 'String'>
    readonly preco_unitario: FieldRef<"dim_produto", 'Decimal'>
    readonly estoque: FieldRef<"dim_produto", 'Int'>
    readonly unidade_medida: FieldRef<"dim_produto", 'String'>
    readonly fornecedor_id: FieldRef<"dim_produto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * dim_produto findUnique
   */
  export type dim_produtoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_produto
     */
    select?: dim_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_produto
     */
    omit?: dim_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_produtoInclude<ExtArgs> | null
    /**
     * Filter, which dim_produto to fetch.
     */
    where: dim_produtoWhereUniqueInput
  }

  /**
   * dim_produto findUniqueOrThrow
   */
  export type dim_produtoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_produto
     */
    select?: dim_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_produto
     */
    omit?: dim_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_produtoInclude<ExtArgs> | null
    /**
     * Filter, which dim_produto to fetch.
     */
    where: dim_produtoWhereUniqueInput
  }

  /**
   * dim_produto findFirst
   */
  export type dim_produtoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_produto
     */
    select?: dim_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_produto
     */
    omit?: dim_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_produtoInclude<ExtArgs> | null
    /**
     * Filter, which dim_produto to fetch.
     */
    where?: dim_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_produtos to fetch.
     */
    orderBy?: dim_produtoOrderByWithRelationInput | dim_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dim_produtos.
     */
    cursor?: dim_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dim_produtos.
     */
    distinct?: Dim_produtoScalarFieldEnum | Dim_produtoScalarFieldEnum[]
  }

  /**
   * dim_produto findFirstOrThrow
   */
  export type dim_produtoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_produto
     */
    select?: dim_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_produto
     */
    omit?: dim_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_produtoInclude<ExtArgs> | null
    /**
     * Filter, which dim_produto to fetch.
     */
    where?: dim_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_produtos to fetch.
     */
    orderBy?: dim_produtoOrderByWithRelationInput | dim_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dim_produtos.
     */
    cursor?: dim_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dim_produtos.
     */
    distinct?: Dim_produtoScalarFieldEnum | Dim_produtoScalarFieldEnum[]
  }

  /**
   * dim_produto findMany
   */
  export type dim_produtoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_produto
     */
    select?: dim_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_produto
     */
    omit?: dim_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_produtoInclude<ExtArgs> | null
    /**
     * Filter, which dim_produtos to fetch.
     */
    where?: dim_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_produtos to fetch.
     */
    orderBy?: dim_produtoOrderByWithRelationInput | dim_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dim_produtos.
     */
    cursor?: dim_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_produtos.
     */
    skip?: number
    distinct?: Dim_produtoScalarFieldEnum | Dim_produtoScalarFieldEnum[]
  }

  /**
   * dim_produto create
   */
  export type dim_produtoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_produto
     */
    select?: dim_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_produto
     */
    omit?: dim_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_produtoInclude<ExtArgs> | null
    /**
     * The data needed to create a dim_produto.
     */
    data: XOR<dim_produtoCreateInput, dim_produtoUncheckedCreateInput>
  }

  /**
   * dim_produto createMany
   */
  export type dim_produtoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dim_produtos.
     */
    data: dim_produtoCreateManyInput | dim_produtoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dim_produto createManyAndReturn
   */
  export type dim_produtoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_produto
     */
    select?: dim_produtoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dim_produto
     */
    omit?: dim_produtoOmit<ExtArgs> | null
    /**
     * The data used to create many dim_produtos.
     */
    data: dim_produtoCreateManyInput | dim_produtoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_produtoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * dim_produto update
   */
  export type dim_produtoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_produto
     */
    select?: dim_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_produto
     */
    omit?: dim_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_produtoInclude<ExtArgs> | null
    /**
     * The data needed to update a dim_produto.
     */
    data: XOR<dim_produtoUpdateInput, dim_produtoUncheckedUpdateInput>
    /**
     * Choose, which dim_produto to update.
     */
    where: dim_produtoWhereUniqueInput
  }

  /**
   * dim_produto updateMany
   */
  export type dim_produtoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dim_produtos.
     */
    data: XOR<dim_produtoUpdateManyMutationInput, dim_produtoUncheckedUpdateManyInput>
    /**
     * Filter which dim_produtos to update
     */
    where?: dim_produtoWhereInput
    /**
     * Limit how many dim_produtos to update.
     */
    limit?: number
  }

  /**
   * dim_produto updateManyAndReturn
   */
  export type dim_produtoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_produto
     */
    select?: dim_produtoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dim_produto
     */
    omit?: dim_produtoOmit<ExtArgs> | null
    /**
     * The data used to update dim_produtos.
     */
    data: XOR<dim_produtoUpdateManyMutationInput, dim_produtoUncheckedUpdateManyInput>
    /**
     * Filter which dim_produtos to update
     */
    where?: dim_produtoWhereInput
    /**
     * Limit how many dim_produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_produtoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * dim_produto upsert
   */
  export type dim_produtoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_produto
     */
    select?: dim_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_produto
     */
    omit?: dim_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_produtoInclude<ExtArgs> | null
    /**
     * The filter to search for the dim_produto to update in case it exists.
     */
    where: dim_produtoWhereUniqueInput
    /**
     * In case the dim_produto found by the `where` argument doesn't exist, create a new dim_produto with this data.
     */
    create: XOR<dim_produtoCreateInput, dim_produtoUncheckedCreateInput>
    /**
     * In case the dim_produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dim_produtoUpdateInput, dim_produtoUncheckedUpdateInput>
  }

  /**
   * dim_produto delete
   */
  export type dim_produtoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_produto
     */
    select?: dim_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_produto
     */
    omit?: dim_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_produtoInclude<ExtArgs> | null
    /**
     * Filter which dim_produto to delete.
     */
    where: dim_produtoWhereUniqueInput
  }

  /**
   * dim_produto deleteMany
   */
  export type dim_produtoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dim_produtos to delete
     */
    where?: dim_produtoWhereInput
    /**
     * Limit how many dim_produtos to delete.
     */
    limit?: number
  }

  /**
   * dim_produto.fornecedor
   */
  export type dim_produto$fornecedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_fornecedor
     */
    select?: dim_fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_fornecedor
     */
    omit?: dim_fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_fornecedorInclude<ExtArgs> | null
    where?: dim_fornecedorWhereInput
  }

  /**
   * dim_produto.map_detalhe
   */
  export type dim_produto$map_detalheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_pedido_detalhe
     */
    select?: map_pedido_detalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_pedido_detalhe
     */
    omit?: map_pedido_detalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_pedido_detalheInclude<ExtArgs> | null
    where?: map_pedido_detalheWhereInput
    orderBy?: map_pedido_detalheOrderByWithRelationInput | map_pedido_detalheOrderByWithRelationInput[]
    cursor?: map_pedido_detalheWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Map_pedido_detalheScalarFieldEnum | Map_pedido_detalheScalarFieldEnum[]
  }

  /**
   * dim_produto.map_composicao
   */
  export type dim_produto$map_composicaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_produto_composicao
     */
    select?: map_produto_composicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_produto_composicao
     */
    omit?: map_produto_composicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_produto_composicaoInclude<ExtArgs> | null
    where?: map_produto_composicaoWhereInput
    orderBy?: map_produto_composicaoOrderByWithRelationInput | map_produto_composicaoOrderByWithRelationInput[]
    cursor?: map_produto_composicaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Map_produto_composicaoScalarFieldEnum | Map_produto_composicaoScalarFieldEnum[]
  }

  /**
   * dim_produto without action
   */
  export type dim_produtoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_produto
     */
    select?: dim_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_produto
     */
    omit?: dim_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_produtoInclude<ExtArgs> | null
  }


  /**
   * Model fct_pedido
   */

  export type AggregateFct_pedido = {
    _count: Fct_pedidoCountAggregateOutputType | null
    _avg: Fct_pedidoAvgAggregateOutputType | null
    _sum: Fct_pedidoSumAggregateOutputType | null
    _min: Fct_pedidoMinAggregateOutputType | null
    _max: Fct_pedidoMaxAggregateOutputType | null
  }

  export type Fct_pedidoAvgAggregateOutputType = {
    pedido_id: number | null
    cliente_id: number | null
    valor_total: Decimal | null
  }

  export type Fct_pedidoSumAggregateOutputType = {
    pedido_id: number | null
    cliente_id: number | null
    valor_total: Decimal | null
  }

  export type Fct_pedidoMinAggregateOutputType = {
    pedido_id: number | null
    cliente_id: number | null
    data_pedido: Date | null
    data_entrega: Date | null
    status: string | null
    valor_total: Decimal | null
  }

  export type Fct_pedidoMaxAggregateOutputType = {
    pedido_id: number | null
    cliente_id: number | null
    data_pedido: Date | null
    data_entrega: Date | null
    status: string | null
    valor_total: Decimal | null
  }

  export type Fct_pedidoCountAggregateOutputType = {
    pedido_id: number
    cliente_id: number
    data_pedido: number
    data_entrega: number
    status: number
    valor_total: number
    _all: number
  }


  export type Fct_pedidoAvgAggregateInputType = {
    pedido_id?: true
    cliente_id?: true
    valor_total?: true
  }

  export type Fct_pedidoSumAggregateInputType = {
    pedido_id?: true
    cliente_id?: true
    valor_total?: true
  }

  export type Fct_pedidoMinAggregateInputType = {
    pedido_id?: true
    cliente_id?: true
    data_pedido?: true
    data_entrega?: true
    status?: true
    valor_total?: true
  }

  export type Fct_pedidoMaxAggregateInputType = {
    pedido_id?: true
    cliente_id?: true
    data_pedido?: true
    data_entrega?: true
    status?: true
    valor_total?: true
  }

  export type Fct_pedidoCountAggregateInputType = {
    pedido_id?: true
    cliente_id?: true
    data_pedido?: true
    data_entrega?: true
    status?: true
    valor_total?: true
    _all?: true
  }

  export type Fct_pedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fct_pedido to aggregate.
     */
    where?: fct_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fct_pedidos to fetch.
     */
    orderBy?: fct_pedidoOrderByWithRelationInput | fct_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fct_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fct_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fct_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fct_pedidos
    **/
    _count?: true | Fct_pedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Fct_pedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Fct_pedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Fct_pedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Fct_pedidoMaxAggregateInputType
  }

  export type GetFct_pedidoAggregateType<T extends Fct_pedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateFct_pedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFct_pedido[P]>
      : GetScalarType<T[P], AggregateFct_pedido[P]>
  }




  export type fct_pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fct_pedidoWhereInput
    orderBy?: fct_pedidoOrderByWithAggregationInput | fct_pedidoOrderByWithAggregationInput[]
    by: Fct_pedidoScalarFieldEnum[] | Fct_pedidoScalarFieldEnum
    having?: fct_pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Fct_pedidoCountAggregateInputType | true
    _avg?: Fct_pedidoAvgAggregateInputType
    _sum?: Fct_pedidoSumAggregateInputType
    _min?: Fct_pedidoMinAggregateInputType
    _max?: Fct_pedidoMaxAggregateInputType
  }

  export type Fct_pedidoGroupByOutputType = {
    pedido_id: number
    cliente_id: number | null
    data_pedido: Date | null
    data_entrega: Date | null
    status: string
    valor_total: Decimal | null
    _count: Fct_pedidoCountAggregateOutputType | null
    _avg: Fct_pedidoAvgAggregateOutputType | null
    _sum: Fct_pedidoSumAggregateOutputType | null
    _min: Fct_pedidoMinAggregateOutputType | null
    _max: Fct_pedidoMaxAggregateOutputType | null
  }

  type GetFct_pedidoGroupByPayload<T extends fct_pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Fct_pedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Fct_pedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Fct_pedidoGroupByOutputType[P]>
            : GetScalarType<T[P], Fct_pedidoGroupByOutputType[P]>
        }
      >
    >


  export type fct_pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pedido_id?: boolean
    cliente_id?: boolean
    data_pedido?: boolean
    data_entrega?: boolean
    status?: boolean
    valor_total?: boolean
    cliente?: boolean | fct_pedido$clienteArgs<ExtArgs>
    map_detalhe?: boolean | fct_pedido$map_detalheArgs<ExtArgs>
    _count?: boolean | Fct_pedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fct_pedido"]>

  export type fct_pedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pedido_id?: boolean
    cliente_id?: boolean
    data_pedido?: boolean
    data_entrega?: boolean
    status?: boolean
    valor_total?: boolean
    cliente?: boolean | fct_pedido$clienteArgs<ExtArgs>
  }, ExtArgs["result"]["fct_pedido"]>

  export type fct_pedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pedido_id?: boolean
    cliente_id?: boolean
    data_pedido?: boolean
    data_entrega?: boolean
    status?: boolean
    valor_total?: boolean
    cliente?: boolean | fct_pedido$clienteArgs<ExtArgs>
  }, ExtArgs["result"]["fct_pedido"]>

  export type fct_pedidoSelectScalar = {
    pedido_id?: boolean
    cliente_id?: boolean
    data_pedido?: boolean
    data_entrega?: boolean
    status?: boolean
    valor_total?: boolean
  }

  export type fct_pedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pedido_id" | "cliente_id" | "data_pedido" | "data_entrega" | "status" | "valor_total", ExtArgs["result"]["fct_pedido"]>
  export type fct_pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | fct_pedido$clienteArgs<ExtArgs>
    map_detalhe?: boolean | fct_pedido$map_detalheArgs<ExtArgs>
    _count?: boolean | Fct_pedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type fct_pedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | fct_pedido$clienteArgs<ExtArgs>
  }
  export type fct_pedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | fct_pedido$clienteArgs<ExtArgs>
  }

  export type $fct_pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fct_pedido"
    objects: {
      cliente: Prisma.$dim_clientePayload<ExtArgs> | null
      map_detalhe: Prisma.$map_pedido_detalhePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pedido_id: number
      cliente_id: number | null
      data_pedido: Date | null
      data_entrega: Date | null
      status: string
      valor_total: Prisma.Decimal | null
    }, ExtArgs["result"]["fct_pedido"]>
    composites: {}
  }

  type fct_pedidoGetPayload<S extends boolean | null | undefined | fct_pedidoDefaultArgs> = $Result.GetResult<Prisma.$fct_pedidoPayload, S>

  type fct_pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fct_pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Fct_pedidoCountAggregateInputType | true
    }

  export interface fct_pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fct_pedido'], meta: { name: 'fct_pedido' } }
    /**
     * Find zero or one Fct_pedido that matches the filter.
     * @param {fct_pedidoFindUniqueArgs} args - Arguments to find a Fct_pedido
     * @example
     * // Get one Fct_pedido
     * const fct_pedido = await prisma.fct_pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fct_pedidoFindUniqueArgs>(args: SelectSubset<T, fct_pedidoFindUniqueArgs<ExtArgs>>): Prisma__fct_pedidoClient<$Result.GetResult<Prisma.$fct_pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fct_pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fct_pedidoFindUniqueOrThrowArgs} args - Arguments to find a Fct_pedido
     * @example
     * // Get one Fct_pedido
     * const fct_pedido = await prisma.fct_pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fct_pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, fct_pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fct_pedidoClient<$Result.GetResult<Prisma.$fct_pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fct_pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fct_pedidoFindFirstArgs} args - Arguments to find a Fct_pedido
     * @example
     * // Get one Fct_pedido
     * const fct_pedido = await prisma.fct_pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fct_pedidoFindFirstArgs>(args?: SelectSubset<T, fct_pedidoFindFirstArgs<ExtArgs>>): Prisma__fct_pedidoClient<$Result.GetResult<Prisma.$fct_pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fct_pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fct_pedidoFindFirstOrThrowArgs} args - Arguments to find a Fct_pedido
     * @example
     * // Get one Fct_pedido
     * const fct_pedido = await prisma.fct_pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fct_pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, fct_pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__fct_pedidoClient<$Result.GetResult<Prisma.$fct_pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fct_pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fct_pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fct_pedidos
     * const fct_pedidos = await prisma.fct_pedido.findMany()
     * 
     * // Get first 10 Fct_pedidos
     * const fct_pedidos = await prisma.fct_pedido.findMany({ take: 10 })
     * 
     * // Only select the `pedido_id`
     * const fct_pedidoWithPedido_idOnly = await prisma.fct_pedido.findMany({ select: { pedido_id: true } })
     * 
     */
    findMany<T extends fct_pedidoFindManyArgs>(args?: SelectSubset<T, fct_pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fct_pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fct_pedido.
     * @param {fct_pedidoCreateArgs} args - Arguments to create a Fct_pedido.
     * @example
     * // Create one Fct_pedido
     * const Fct_pedido = await prisma.fct_pedido.create({
     *   data: {
     *     // ... data to create a Fct_pedido
     *   }
     * })
     * 
     */
    create<T extends fct_pedidoCreateArgs>(args: SelectSubset<T, fct_pedidoCreateArgs<ExtArgs>>): Prisma__fct_pedidoClient<$Result.GetResult<Prisma.$fct_pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fct_pedidos.
     * @param {fct_pedidoCreateManyArgs} args - Arguments to create many Fct_pedidos.
     * @example
     * // Create many Fct_pedidos
     * const fct_pedido = await prisma.fct_pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fct_pedidoCreateManyArgs>(args?: SelectSubset<T, fct_pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fct_pedidos and returns the data saved in the database.
     * @param {fct_pedidoCreateManyAndReturnArgs} args - Arguments to create many Fct_pedidos.
     * @example
     * // Create many Fct_pedidos
     * const fct_pedido = await prisma.fct_pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fct_pedidos and only return the `pedido_id`
     * const fct_pedidoWithPedido_idOnly = await prisma.fct_pedido.createManyAndReturn({
     *   select: { pedido_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fct_pedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, fct_pedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fct_pedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fct_pedido.
     * @param {fct_pedidoDeleteArgs} args - Arguments to delete one Fct_pedido.
     * @example
     * // Delete one Fct_pedido
     * const Fct_pedido = await prisma.fct_pedido.delete({
     *   where: {
     *     // ... filter to delete one Fct_pedido
     *   }
     * })
     * 
     */
    delete<T extends fct_pedidoDeleteArgs>(args: SelectSubset<T, fct_pedidoDeleteArgs<ExtArgs>>): Prisma__fct_pedidoClient<$Result.GetResult<Prisma.$fct_pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fct_pedido.
     * @param {fct_pedidoUpdateArgs} args - Arguments to update one Fct_pedido.
     * @example
     * // Update one Fct_pedido
     * const fct_pedido = await prisma.fct_pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fct_pedidoUpdateArgs>(args: SelectSubset<T, fct_pedidoUpdateArgs<ExtArgs>>): Prisma__fct_pedidoClient<$Result.GetResult<Prisma.$fct_pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fct_pedidos.
     * @param {fct_pedidoDeleteManyArgs} args - Arguments to filter Fct_pedidos to delete.
     * @example
     * // Delete a few Fct_pedidos
     * const { count } = await prisma.fct_pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fct_pedidoDeleteManyArgs>(args?: SelectSubset<T, fct_pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fct_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fct_pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fct_pedidos
     * const fct_pedido = await prisma.fct_pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fct_pedidoUpdateManyArgs>(args: SelectSubset<T, fct_pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fct_pedidos and returns the data updated in the database.
     * @param {fct_pedidoUpdateManyAndReturnArgs} args - Arguments to update many Fct_pedidos.
     * @example
     * // Update many Fct_pedidos
     * const fct_pedido = await prisma.fct_pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fct_pedidos and only return the `pedido_id`
     * const fct_pedidoWithPedido_idOnly = await prisma.fct_pedido.updateManyAndReturn({
     *   select: { pedido_id: true },
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
    updateManyAndReturn<T extends fct_pedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, fct_pedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fct_pedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fct_pedido.
     * @param {fct_pedidoUpsertArgs} args - Arguments to update or create a Fct_pedido.
     * @example
     * // Update or create a Fct_pedido
     * const fct_pedido = await prisma.fct_pedido.upsert({
     *   create: {
     *     // ... data to create a Fct_pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fct_pedido we want to update
     *   }
     * })
     */
    upsert<T extends fct_pedidoUpsertArgs>(args: SelectSubset<T, fct_pedidoUpsertArgs<ExtArgs>>): Prisma__fct_pedidoClient<$Result.GetResult<Prisma.$fct_pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fct_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fct_pedidoCountArgs} args - Arguments to filter Fct_pedidos to count.
     * @example
     * // Count the number of Fct_pedidos
     * const count = await prisma.fct_pedido.count({
     *   where: {
     *     // ... the filter for the Fct_pedidos we want to count
     *   }
     * })
    **/
    count<T extends fct_pedidoCountArgs>(
      args?: Subset<T, fct_pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Fct_pedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fct_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fct_pedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Fct_pedidoAggregateArgs>(args: Subset<T, Fct_pedidoAggregateArgs>): Prisma.PrismaPromise<GetFct_pedidoAggregateType<T>>

    /**
     * Group by Fct_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fct_pedidoGroupByArgs} args - Group by arguments.
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
      T extends fct_pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fct_pedidoGroupByArgs['orderBy'] }
        : { orderBy?: fct_pedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, fct_pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFct_pedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fct_pedido model
   */
  readonly fields: fct_pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fct_pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fct_pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends fct_pedido$clienteArgs<ExtArgs> = {}>(args?: Subset<T, fct_pedido$clienteArgs<ExtArgs>>): Prisma__dim_clienteClient<$Result.GetResult<Prisma.$dim_clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    map_detalhe<T extends fct_pedido$map_detalheArgs<ExtArgs> = {}>(args?: Subset<T, fct_pedido$map_detalheArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$map_pedido_detalhePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the fct_pedido model
   */
  interface fct_pedidoFieldRefs {
    readonly pedido_id: FieldRef<"fct_pedido", 'Int'>
    readonly cliente_id: FieldRef<"fct_pedido", 'Int'>
    readonly data_pedido: FieldRef<"fct_pedido", 'DateTime'>
    readonly data_entrega: FieldRef<"fct_pedido", 'DateTime'>
    readonly status: FieldRef<"fct_pedido", 'String'>
    readonly valor_total: FieldRef<"fct_pedido", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * fct_pedido findUnique
   */
  export type fct_pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fct_pedido
     */
    select?: fct_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fct_pedido
     */
    omit?: fct_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fct_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which fct_pedido to fetch.
     */
    where: fct_pedidoWhereUniqueInput
  }

  /**
   * fct_pedido findUniqueOrThrow
   */
  export type fct_pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fct_pedido
     */
    select?: fct_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fct_pedido
     */
    omit?: fct_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fct_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which fct_pedido to fetch.
     */
    where: fct_pedidoWhereUniqueInput
  }

  /**
   * fct_pedido findFirst
   */
  export type fct_pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fct_pedido
     */
    select?: fct_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fct_pedido
     */
    omit?: fct_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fct_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which fct_pedido to fetch.
     */
    where?: fct_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fct_pedidos to fetch.
     */
    orderBy?: fct_pedidoOrderByWithRelationInput | fct_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fct_pedidos.
     */
    cursor?: fct_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fct_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fct_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fct_pedidos.
     */
    distinct?: Fct_pedidoScalarFieldEnum | Fct_pedidoScalarFieldEnum[]
  }

  /**
   * fct_pedido findFirstOrThrow
   */
  export type fct_pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fct_pedido
     */
    select?: fct_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fct_pedido
     */
    omit?: fct_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fct_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which fct_pedido to fetch.
     */
    where?: fct_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fct_pedidos to fetch.
     */
    orderBy?: fct_pedidoOrderByWithRelationInput | fct_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fct_pedidos.
     */
    cursor?: fct_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fct_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fct_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fct_pedidos.
     */
    distinct?: Fct_pedidoScalarFieldEnum | Fct_pedidoScalarFieldEnum[]
  }

  /**
   * fct_pedido findMany
   */
  export type fct_pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fct_pedido
     */
    select?: fct_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fct_pedido
     */
    omit?: fct_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fct_pedidoInclude<ExtArgs> | null
    /**
     * Filter, which fct_pedidos to fetch.
     */
    where?: fct_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fct_pedidos to fetch.
     */
    orderBy?: fct_pedidoOrderByWithRelationInput | fct_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fct_pedidos.
     */
    cursor?: fct_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fct_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fct_pedidos.
     */
    skip?: number
    distinct?: Fct_pedidoScalarFieldEnum | Fct_pedidoScalarFieldEnum[]
  }

  /**
   * fct_pedido create
   */
  export type fct_pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fct_pedido
     */
    select?: fct_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fct_pedido
     */
    omit?: fct_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fct_pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a fct_pedido.
     */
    data: XOR<fct_pedidoCreateInput, fct_pedidoUncheckedCreateInput>
  }

  /**
   * fct_pedido createMany
   */
  export type fct_pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fct_pedidos.
     */
    data: fct_pedidoCreateManyInput | fct_pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fct_pedido createManyAndReturn
   */
  export type fct_pedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fct_pedido
     */
    select?: fct_pedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fct_pedido
     */
    omit?: fct_pedidoOmit<ExtArgs> | null
    /**
     * The data used to create many fct_pedidos.
     */
    data: fct_pedidoCreateManyInput | fct_pedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fct_pedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * fct_pedido update
   */
  export type fct_pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fct_pedido
     */
    select?: fct_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fct_pedido
     */
    omit?: fct_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fct_pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a fct_pedido.
     */
    data: XOR<fct_pedidoUpdateInput, fct_pedidoUncheckedUpdateInput>
    /**
     * Choose, which fct_pedido to update.
     */
    where: fct_pedidoWhereUniqueInput
  }

  /**
   * fct_pedido updateMany
   */
  export type fct_pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fct_pedidos.
     */
    data: XOR<fct_pedidoUpdateManyMutationInput, fct_pedidoUncheckedUpdateManyInput>
    /**
     * Filter which fct_pedidos to update
     */
    where?: fct_pedidoWhereInput
    /**
     * Limit how many fct_pedidos to update.
     */
    limit?: number
  }

  /**
   * fct_pedido updateManyAndReturn
   */
  export type fct_pedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fct_pedido
     */
    select?: fct_pedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fct_pedido
     */
    omit?: fct_pedidoOmit<ExtArgs> | null
    /**
     * The data used to update fct_pedidos.
     */
    data: XOR<fct_pedidoUpdateManyMutationInput, fct_pedidoUncheckedUpdateManyInput>
    /**
     * Filter which fct_pedidos to update
     */
    where?: fct_pedidoWhereInput
    /**
     * Limit how many fct_pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fct_pedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * fct_pedido upsert
   */
  export type fct_pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fct_pedido
     */
    select?: fct_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fct_pedido
     */
    omit?: fct_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fct_pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the fct_pedido to update in case it exists.
     */
    where: fct_pedidoWhereUniqueInput
    /**
     * In case the fct_pedido found by the `where` argument doesn't exist, create a new fct_pedido with this data.
     */
    create: XOR<fct_pedidoCreateInput, fct_pedidoUncheckedCreateInput>
    /**
     * In case the fct_pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fct_pedidoUpdateInput, fct_pedidoUncheckedUpdateInput>
  }

  /**
   * fct_pedido delete
   */
  export type fct_pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fct_pedido
     */
    select?: fct_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fct_pedido
     */
    omit?: fct_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fct_pedidoInclude<ExtArgs> | null
    /**
     * Filter which fct_pedido to delete.
     */
    where: fct_pedidoWhereUniqueInput
  }

  /**
   * fct_pedido deleteMany
   */
  export type fct_pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fct_pedidos to delete
     */
    where?: fct_pedidoWhereInput
    /**
     * Limit how many fct_pedidos to delete.
     */
    limit?: number
  }

  /**
   * fct_pedido.cliente
   */
  export type fct_pedido$clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_cliente
     */
    select?: dim_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_cliente
     */
    omit?: dim_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_clienteInclude<ExtArgs> | null
    where?: dim_clienteWhereInput
  }

  /**
   * fct_pedido.map_detalhe
   */
  export type fct_pedido$map_detalheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_pedido_detalhe
     */
    select?: map_pedido_detalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_pedido_detalhe
     */
    omit?: map_pedido_detalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_pedido_detalheInclude<ExtArgs> | null
    where?: map_pedido_detalheWhereInput
    orderBy?: map_pedido_detalheOrderByWithRelationInput | map_pedido_detalheOrderByWithRelationInput[]
    cursor?: map_pedido_detalheWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Map_pedido_detalheScalarFieldEnum | Map_pedido_detalheScalarFieldEnum[]
  }

  /**
   * fct_pedido without action
   */
  export type fct_pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fct_pedido
     */
    select?: fct_pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fct_pedido
     */
    omit?: fct_pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fct_pedidoInclude<ExtArgs> | null
  }


  /**
   * Model map_produto_composicao
   */

  export type AggregateMap_produto_composicao = {
    _count: Map_produto_composicaoCountAggregateOutputType | null
    _avg: Map_produto_composicaoAvgAggregateOutputType | null
    _sum: Map_produto_composicaoSumAggregateOutputType | null
    _min: Map_produto_composicaoMinAggregateOutputType | null
    _max: Map_produto_composicaoMaxAggregateOutputType | null
  }

  export type Map_produto_composicaoAvgAggregateOutputType = {
    map_id: number | null
    produto_id: number | null
    insumo_id: number | null
    quantidade: Decimal | null
    preco_unitario: Decimal | null
  }

  export type Map_produto_composicaoSumAggregateOutputType = {
    map_id: number | null
    produto_id: number | null
    insumo_id: number | null
    quantidade: Decimal | null
    preco_unitario: Decimal | null
  }

  export type Map_produto_composicaoMinAggregateOutputType = {
    map_id: number | null
    produto_id: number | null
    insumo_id: number | null
    quantidade: Decimal | null
    preco_unitario: Decimal | null
  }

  export type Map_produto_composicaoMaxAggregateOutputType = {
    map_id: number | null
    produto_id: number | null
    insumo_id: number | null
    quantidade: Decimal | null
    preco_unitario: Decimal | null
  }

  export type Map_produto_composicaoCountAggregateOutputType = {
    map_id: number
    produto_id: number
    insumo_id: number
    quantidade: number
    preco_unitario: number
    _all: number
  }


  export type Map_produto_composicaoAvgAggregateInputType = {
    map_id?: true
    produto_id?: true
    insumo_id?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type Map_produto_composicaoSumAggregateInputType = {
    map_id?: true
    produto_id?: true
    insumo_id?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type Map_produto_composicaoMinAggregateInputType = {
    map_id?: true
    produto_id?: true
    insumo_id?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type Map_produto_composicaoMaxAggregateInputType = {
    map_id?: true
    produto_id?: true
    insumo_id?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type Map_produto_composicaoCountAggregateInputType = {
    map_id?: true
    produto_id?: true
    insumo_id?: true
    quantidade?: true
    preco_unitario?: true
    _all?: true
  }

  export type Map_produto_composicaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which map_produto_composicao to aggregate.
     */
    where?: map_produto_composicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of map_produto_composicaos to fetch.
     */
    orderBy?: map_produto_composicaoOrderByWithRelationInput | map_produto_composicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: map_produto_composicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` map_produto_composicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` map_produto_composicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned map_produto_composicaos
    **/
    _count?: true | Map_produto_composicaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Map_produto_composicaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Map_produto_composicaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Map_produto_composicaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Map_produto_composicaoMaxAggregateInputType
  }

  export type GetMap_produto_composicaoAggregateType<T extends Map_produto_composicaoAggregateArgs> = {
        [P in keyof T & keyof AggregateMap_produto_composicao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMap_produto_composicao[P]>
      : GetScalarType<T[P], AggregateMap_produto_composicao[P]>
  }




  export type map_produto_composicaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: map_produto_composicaoWhereInput
    orderBy?: map_produto_composicaoOrderByWithAggregationInput | map_produto_composicaoOrderByWithAggregationInput[]
    by: Map_produto_composicaoScalarFieldEnum[] | Map_produto_composicaoScalarFieldEnum
    having?: map_produto_composicaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Map_produto_composicaoCountAggregateInputType | true
    _avg?: Map_produto_composicaoAvgAggregateInputType
    _sum?: Map_produto_composicaoSumAggregateInputType
    _min?: Map_produto_composicaoMinAggregateInputType
    _max?: Map_produto_composicaoMaxAggregateInputType
  }

  export type Map_produto_composicaoGroupByOutputType = {
    map_id: number
    produto_id: number | null
    insumo_id: number | null
    quantidade: Decimal
    preco_unitario: Decimal
    _count: Map_produto_composicaoCountAggregateOutputType | null
    _avg: Map_produto_composicaoAvgAggregateOutputType | null
    _sum: Map_produto_composicaoSumAggregateOutputType | null
    _min: Map_produto_composicaoMinAggregateOutputType | null
    _max: Map_produto_composicaoMaxAggregateOutputType | null
  }

  type GetMap_produto_composicaoGroupByPayload<T extends map_produto_composicaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Map_produto_composicaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Map_produto_composicaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Map_produto_composicaoGroupByOutputType[P]>
            : GetScalarType<T[P], Map_produto_composicaoGroupByOutputType[P]>
        }
      >
    >


  export type map_produto_composicaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    map_id?: boolean
    produto_id?: boolean
    insumo_id?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    insumo?: boolean | map_produto_composicao$insumoArgs<ExtArgs>
    produto?: boolean | map_produto_composicao$produtoArgs<ExtArgs>
  }, ExtArgs["result"]["map_produto_composicao"]>

  export type map_produto_composicaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    map_id?: boolean
    produto_id?: boolean
    insumo_id?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    insumo?: boolean | map_produto_composicao$insumoArgs<ExtArgs>
    produto?: boolean | map_produto_composicao$produtoArgs<ExtArgs>
  }, ExtArgs["result"]["map_produto_composicao"]>

  export type map_produto_composicaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    map_id?: boolean
    produto_id?: boolean
    insumo_id?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    insumo?: boolean | map_produto_composicao$insumoArgs<ExtArgs>
    produto?: boolean | map_produto_composicao$produtoArgs<ExtArgs>
  }, ExtArgs["result"]["map_produto_composicao"]>

  export type map_produto_composicaoSelectScalar = {
    map_id?: boolean
    produto_id?: boolean
    insumo_id?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
  }

  export type map_produto_composicaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"map_id" | "produto_id" | "insumo_id" | "quantidade" | "preco_unitario", ExtArgs["result"]["map_produto_composicao"]>
  export type map_produto_composicaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insumo?: boolean | map_produto_composicao$insumoArgs<ExtArgs>
    produto?: boolean | map_produto_composicao$produtoArgs<ExtArgs>
  }
  export type map_produto_composicaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insumo?: boolean | map_produto_composicao$insumoArgs<ExtArgs>
    produto?: boolean | map_produto_composicao$produtoArgs<ExtArgs>
  }
  export type map_produto_composicaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insumo?: boolean | map_produto_composicao$insumoArgs<ExtArgs>
    produto?: boolean | map_produto_composicao$produtoArgs<ExtArgs>
  }

  export type $map_produto_composicaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "map_produto_composicao"
    objects: {
      insumo: Prisma.$dim_insumoPayload<ExtArgs> | null
      produto: Prisma.$dim_produtoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      map_id: number
      produto_id: number | null
      insumo_id: number | null
      quantidade: Prisma.Decimal
      preco_unitario: Prisma.Decimal
    }, ExtArgs["result"]["map_produto_composicao"]>
    composites: {}
  }

  type map_produto_composicaoGetPayload<S extends boolean | null | undefined | map_produto_composicaoDefaultArgs> = $Result.GetResult<Prisma.$map_produto_composicaoPayload, S>

  type map_produto_composicaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<map_produto_composicaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Map_produto_composicaoCountAggregateInputType | true
    }

  export interface map_produto_composicaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['map_produto_composicao'], meta: { name: 'map_produto_composicao' } }
    /**
     * Find zero or one Map_produto_composicao that matches the filter.
     * @param {map_produto_composicaoFindUniqueArgs} args - Arguments to find a Map_produto_composicao
     * @example
     * // Get one Map_produto_composicao
     * const map_produto_composicao = await prisma.map_produto_composicao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends map_produto_composicaoFindUniqueArgs>(args: SelectSubset<T, map_produto_composicaoFindUniqueArgs<ExtArgs>>): Prisma__map_produto_composicaoClient<$Result.GetResult<Prisma.$map_produto_composicaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Map_produto_composicao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {map_produto_composicaoFindUniqueOrThrowArgs} args - Arguments to find a Map_produto_composicao
     * @example
     * // Get one Map_produto_composicao
     * const map_produto_composicao = await prisma.map_produto_composicao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends map_produto_composicaoFindUniqueOrThrowArgs>(args: SelectSubset<T, map_produto_composicaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__map_produto_composicaoClient<$Result.GetResult<Prisma.$map_produto_composicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Map_produto_composicao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {map_produto_composicaoFindFirstArgs} args - Arguments to find a Map_produto_composicao
     * @example
     * // Get one Map_produto_composicao
     * const map_produto_composicao = await prisma.map_produto_composicao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends map_produto_composicaoFindFirstArgs>(args?: SelectSubset<T, map_produto_composicaoFindFirstArgs<ExtArgs>>): Prisma__map_produto_composicaoClient<$Result.GetResult<Prisma.$map_produto_composicaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Map_produto_composicao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {map_produto_composicaoFindFirstOrThrowArgs} args - Arguments to find a Map_produto_composicao
     * @example
     * // Get one Map_produto_composicao
     * const map_produto_composicao = await prisma.map_produto_composicao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends map_produto_composicaoFindFirstOrThrowArgs>(args?: SelectSubset<T, map_produto_composicaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__map_produto_composicaoClient<$Result.GetResult<Prisma.$map_produto_composicaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Map_produto_composicaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {map_produto_composicaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Map_produto_composicaos
     * const map_produto_composicaos = await prisma.map_produto_composicao.findMany()
     * 
     * // Get first 10 Map_produto_composicaos
     * const map_produto_composicaos = await prisma.map_produto_composicao.findMany({ take: 10 })
     * 
     * // Only select the `map_id`
     * const map_produto_composicaoWithMap_idOnly = await prisma.map_produto_composicao.findMany({ select: { map_id: true } })
     * 
     */
    findMany<T extends map_produto_composicaoFindManyArgs>(args?: SelectSubset<T, map_produto_composicaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$map_produto_composicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Map_produto_composicao.
     * @param {map_produto_composicaoCreateArgs} args - Arguments to create a Map_produto_composicao.
     * @example
     * // Create one Map_produto_composicao
     * const Map_produto_composicao = await prisma.map_produto_composicao.create({
     *   data: {
     *     // ... data to create a Map_produto_composicao
     *   }
     * })
     * 
     */
    create<T extends map_produto_composicaoCreateArgs>(args: SelectSubset<T, map_produto_composicaoCreateArgs<ExtArgs>>): Prisma__map_produto_composicaoClient<$Result.GetResult<Prisma.$map_produto_composicaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Map_produto_composicaos.
     * @param {map_produto_composicaoCreateManyArgs} args - Arguments to create many Map_produto_composicaos.
     * @example
     * // Create many Map_produto_composicaos
     * const map_produto_composicao = await prisma.map_produto_composicao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends map_produto_composicaoCreateManyArgs>(args?: SelectSubset<T, map_produto_composicaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Map_produto_composicaos and returns the data saved in the database.
     * @param {map_produto_composicaoCreateManyAndReturnArgs} args - Arguments to create many Map_produto_composicaos.
     * @example
     * // Create many Map_produto_composicaos
     * const map_produto_composicao = await prisma.map_produto_composicao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Map_produto_composicaos and only return the `map_id`
     * const map_produto_composicaoWithMap_idOnly = await prisma.map_produto_composicao.createManyAndReturn({
     *   select: { map_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends map_produto_composicaoCreateManyAndReturnArgs>(args?: SelectSubset<T, map_produto_composicaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$map_produto_composicaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Map_produto_composicao.
     * @param {map_produto_composicaoDeleteArgs} args - Arguments to delete one Map_produto_composicao.
     * @example
     * // Delete one Map_produto_composicao
     * const Map_produto_composicao = await prisma.map_produto_composicao.delete({
     *   where: {
     *     // ... filter to delete one Map_produto_composicao
     *   }
     * })
     * 
     */
    delete<T extends map_produto_composicaoDeleteArgs>(args: SelectSubset<T, map_produto_composicaoDeleteArgs<ExtArgs>>): Prisma__map_produto_composicaoClient<$Result.GetResult<Prisma.$map_produto_composicaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Map_produto_composicao.
     * @param {map_produto_composicaoUpdateArgs} args - Arguments to update one Map_produto_composicao.
     * @example
     * // Update one Map_produto_composicao
     * const map_produto_composicao = await prisma.map_produto_composicao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends map_produto_composicaoUpdateArgs>(args: SelectSubset<T, map_produto_composicaoUpdateArgs<ExtArgs>>): Prisma__map_produto_composicaoClient<$Result.GetResult<Prisma.$map_produto_composicaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Map_produto_composicaos.
     * @param {map_produto_composicaoDeleteManyArgs} args - Arguments to filter Map_produto_composicaos to delete.
     * @example
     * // Delete a few Map_produto_composicaos
     * const { count } = await prisma.map_produto_composicao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends map_produto_composicaoDeleteManyArgs>(args?: SelectSubset<T, map_produto_composicaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Map_produto_composicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {map_produto_composicaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Map_produto_composicaos
     * const map_produto_composicao = await prisma.map_produto_composicao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends map_produto_composicaoUpdateManyArgs>(args: SelectSubset<T, map_produto_composicaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Map_produto_composicaos and returns the data updated in the database.
     * @param {map_produto_composicaoUpdateManyAndReturnArgs} args - Arguments to update many Map_produto_composicaos.
     * @example
     * // Update many Map_produto_composicaos
     * const map_produto_composicao = await prisma.map_produto_composicao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Map_produto_composicaos and only return the `map_id`
     * const map_produto_composicaoWithMap_idOnly = await prisma.map_produto_composicao.updateManyAndReturn({
     *   select: { map_id: true },
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
    updateManyAndReturn<T extends map_produto_composicaoUpdateManyAndReturnArgs>(args: SelectSubset<T, map_produto_composicaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$map_produto_composicaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Map_produto_composicao.
     * @param {map_produto_composicaoUpsertArgs} args - Arguments to update or create a Map_produto_composicao.
     * @example
     * // Update or create a Map_produto_composicao
     * const map_produto_composicao = await prisma.map_produto_composicao.upsert({
     *   create: {
     *     // ... data to create a Map_produto_composicao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Map_produto_composicao we want to update
     *   }
     * })
     */
    upsert<T extends map_produto_composicaoUpsertArgs>(args: SelectSubset<T, map_produto_composicaoUpsertArgs<ExtArgs>>): Prisma__map_produto_composicaoClient<$Result.GetResult<Prisma.$map_produto_composicaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Map_produto_composicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {map_produto_composicaoCountArgs} args - Arguments to filter Map_produto_composicaos to count.
     * @example
     * // Count the number of Map_produto_composicaos
     * const count = await prisma.map_produto_composicao.count({
     *   where: {
     *     // ... the filter for the Map_produto_composicaos we want to count
     *   }
     * })
    **/
    count<T extends map_produto_composicaoCountArgs>(
      args?: Subset<T, map_produto_composicaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Map_produto_composicaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Map_produto_composicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Map_produto_composicaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Map_produto_composicaoAggregateArgs>(args: Subset<T, Map_produto_composicaoAggregateArgs>): Prisma.PrismaPromise<GetMap_produto_composicaoAggregateType<T>>

    /**
     * Group by Map_produto_composicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {map_produto_composicaoGroupByArgs} args - Group by arguments.
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
      T extends map_produto_composicaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: map_produto_composicaoGroupByArgs['orderBy'] }
        : { orderBy?: map_produto_composicaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, map_produto_composicaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMap_produto_composicaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the map_produto_composicao model
   */
  readonly fields: map_produto_composicaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for map_produto_composicao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__map_produto_composicaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insumo<T extends map_produto_composicao$insumoArgs<ExtArgs> = {}>(args?: Subset<T, map_produto_composicao$insumoArgs<ExtArgs>>): Prisma__dim_insumoClient<$Result.GetResult<Prisma.$dim_insumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    produto<T extends map_produto_composicao$produtoArgs<ExtArgs> = {}>(args?: Subset<T, map_produto_composicao$produtoArgs<ExtArgs>>): Prisma__dim_produtoClient<$Result.GetResult<Prisma.$dim_produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the map_produto_composicao model
   */
  interface map_produto_composicaoFieldRefs {
    readonly map_id: FieldRef<"map_produto_composicao", 'Int'>
    readonly produto_id: FieldRef<"map_produto_composicao", 'Int'>
    readonly insumo_id: FieldRef<"map_produto_composicao", 'Int'>
    readonly quantidade: FieldRef<"map_produto_composicao", 'Decimal'>
    readonly preco_unitario: FieldRef<"map_produto_composicao", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * map_produto_composicao findUnique
   */
  export type map_produto_composicaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_produto_composicao
     */
    select?: map_produto_composicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_produto_composicao
     */
    omit?: map_produto_composicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_produto_composicaoInclude<ExtArgs> | null
    /**
     * Filter, which map_produto_composicao to fetch.
     */
    where: map_produto_composicaoWhereUniqueInput
  }

  /**
   * map_produto_composicao findUniqueOrThrow
   */
  export type map_produto_composicaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_produto_composicao
     */
    select?: map_produto_composicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_produto_composicao
     */
    omit?: map_produto_composicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_produto_composicaoInclude<ExtArgs> | null
    /**
     * Filter, which map_produto_composicao to fetch.
     */
    where: map_produto_composicaoWhereUniqueInput
  }

  /**
   * map_produto_composicao findFirst
   */
  export type map_produto_composicaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_produto_composicao
     */
    select?: map_produto_composicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_produto_composicao
     */
    omit?: map_produto_composicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_produto_composicaoInclude<ExtArgs> | null
    /**
     * Filter, which map_produto_composicao to fetch.
     */
    where?: map_produto_composicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of map_produto_composicaos to fetch.
     */
    orderBy?: map_produto_composicaoOrderByWithRelationInput | map_produto_composicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for map_produto_composicaos.
     */
    cursor?: map_produto_composicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` map_produto_composicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` map_produto_composicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of map_produto_composicaos.
     */
    distinct?: Map_produto_composicaoScalarFieldEnum | Map_produto_composicaoScalarFieldEnum[]
  }

  /**
   * map_produto_composicao findFirstOrThrow
   */
  export type map_produto_composicaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_produto_composicao
     */
    select?: map_produto_composicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_produto_composicao
     */
    omit?: map_produto_composicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_produto_composicaoInclude<ExtArgs> | null
    /**
     * Filter, which map_produto_composicao to fetch.
     */
    where?: map_produto_composicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of map_produto_composicaos to fetch.
     */
    orderBy?: map_produto_composicaoOrderByWithRelationInput | map_produto_composicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for map_produto_composicaos.
     */
    cursor?: map_produto_composicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` map_produto_composicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` map_produto_composicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of map_produto_composicaos.
     */
    distinct?: Map_produto_composicaoScalarFieldEnum | Map_produto_composicaoScalarFieldEnum[]
  }

  /**
   * map_produto_composicao findMany
   */
  export type map_produto_composicaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_produto_composicao
     */
    select?: map_produto_composicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_produto_composicao
     */
    omit?: map_produto_composicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_produto_composicaoInclude<ExtArgs> | null
    /**
     * Filter, which map_produto_composicaos to fetch.
     */
    where?: map_produto_composicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of map_produto_composicaos to fetch.
     */
    orderBy?: map_produto_composicaoOrderByWithRelationInput | map_produto_composicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing map_produto_composicaos.
     */
    cursor?: map_produto_composicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` map_produto_composicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` map_produto_composicaos.
     */
    skip?: number
    distinct?: Map_produto_composicaoScalarFieldEnum | Map_produto_composicaoScalarFieldEnum[]
  }

  /**
   * map_produto_composicao create
   */
  export type map_produto_composicaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_produto_composicao
     */
    select?: map_produto_composicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_produto_composicao
     */
    omit?: map_produto_composicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_produto_composicaoInclude<ExtArgs> | null
    /**
     * The data needed to create a map_produto_composicao.
     */
    data: XOR<map_produto_composicaoCreateInput, map_produto_composicaoUncheckedCreateInput>
  }

  /**
   * map_produto_composicao createMany
   */
  export type map_produto_composicaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many map_produto_composicaos.
     */
    data: map_produto_composicaoCreateManyInput | map_produto_composicaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * map_produto_composicao createManyAndReturn
   */
  export type map_produto_composicaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_produto_composicao
     */
    select?: map_produto_composicaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the map_produto_composicao
     */
    omit?: map_produto_composicaoOmit<ExtArgs> | null
    /**
     * The data used to create many map_produto_composicaos.
     */
    data: map_produto_composicaoCreateManyInput | map_produto_composicaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_produto_composicaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * map_produto_composicao update
   */
  export type map_produto_composicaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_produto_composicao
     */
    select?: map_produto_composicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_produto_composicao
     */
    omit?: map_produto_composicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_produto_composicaoInclude<ExtArgs> | null
    /**
     * The data needed to update a map_produto_composicao.
     */
    data: XOR<map_produto_composicaoUpdateInput, map_produto_composicaoUncheckedUpdateInput>
    /**
     * Choose, which map_produto_composicao to update.
     */
    where: map_produto_composicaoWhereUniqueInput
  }

  /**
   * map_produto_composicao updateMany
   */
  export type map_produto_composicaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update map_produto_composicaos.
     */
    data: XOR<map_produto_composicaoUpdateManyMutationInput, map_produto_composicaoUncheckedUpdateManyInput>
    /**
     * Filter which map_produto_composicaos to update
     */
    where?: map_produto_composicaoWhereInput
    /**
     * Limit how many map_produto_composicaos to update.
     */
    limit?: number
  }

  /**
   * map_produto_composicao updateManyAndReturn
   */
  export type map_produto_composicaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_produto_composicao
     */
    select?: map_produto_composicaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the map_produto_composicao
     */
    omit?: map_produto_composicaoOmit<ExtArgs> | null
    /**
     * The data used to update map_produto_composicaos.
     */
    data: XOR<map_produto_composicaoUpdateManyMutationInput, map_produto_composicaoUncheckedUpdateManyInput>
    /**
     * Filter which map_produto_composicaos to update
     */
    where?: map_produto_composicaoWhereInput
    /**
     * Limit how many map_produto_composicaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_produto_composicaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * map_produto_composicao upsert
   */
  export type map_produto_composicaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_produto_composicao
     */
    select?: map_produto_composicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_produto_composicao
     */
    omit?: map_produto_composicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_produto_composicaoInclude<ExtArgs> | null
    /**
     * The filter to search for the map_produto_composicao to update in case it exists.
     */
    where: map_produto_composicaoWhereUniqueInput
    /**
     * In case the map_produto_composicao found by the `where` argument doesn't exist, create a new map_produto_composicao with this data.
     */
    create: XOR<map_produto_composicaoCreateInput, map_produto_composicaoUncheckedCreateInput>
    /**
     * In case the map_produto_composicao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<map_produto_composicaoUpdateInput, map_produto_composicaoUncheckedUpdateInput>
  }

  /**
   * map_produto_composicao delete
   */
  export type map_produto_composicaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_produto_composicao
     */
    select?: map_produto_composicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_produto_composicao
     */
    omit?: map_produto_composicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_produto_composicaoInclude<ExtArgs> | null
    /**
     * Filter which map_produto_composicao to delete.
     */
    where: map_produto_composicaoWhereUniqueInput
  }

  /**
   * map_produto_composicao deleteMany
   */
  export type map_produto_composicaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which map_produto_composicaos to delete
     */
    where?: map_produto_composicaoWhereInput
    /**
     * Limit how many map_produto_composicaos to delete.
     */
    limit?: number
  }

  /**
   * map_produto_composicao.insumo
   */
  export type map_produto_composicao$insumoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_insumo
     */
    select?: dim_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_insumo
     */
    omit?: dim_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_insumoInclude<ExtArgs> | null
    where?: dim_insumoWhereInput
  }

  /**
   * map_produto_composicao.produto
   */
  export type map_produto_composicao$produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_produto
     */
    select?: dim_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_produto
     */
    omit?: dim_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_produtoInclude<ExtArgs> | null
    where?: dim_produtoWhereInput
  }

  /**
   * map_produto_composicao without action
   */
  export type map_produto_composicaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_produto_composicao
     */
    select?: map_produto_composicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_produto_composicao
     */
    omit?: map_produto_composicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_produto_composicaoInclude<ExtArgs> | null
  }


  /**
   * Model map_pedido_detalhe
   */

  export type AggregateMap_pedido_detalhe = {
    _count: Map_pedido_detalheCountAggregateOutputType | null
    _avg: Map_pedido_detalheAvgAggregateOutputType | null
    _sum: Map_pedido_detalheSumAggregateOutputType | null
    _min: Map_pedido_detalheMinAggregateOutputType | null
    _max: Map_pedido_detalheMaxAggregateOutputType | null
  }

  export type Map_pedido_detalheAvgAggregateOutputType = {
    map_id: number | null
    pedido_id: number | null
    produto_id: number | null
    quantidade: number | null
    preco_unitario: Decimal | null
  }

  export type Map_pedido_detalheSumAggregateOutputType = {
    map_id: number | null
    pedido_id: number | null
    produto_id: number | null
    quantidade: number | null
    preco_unitario: Decimal | null
  }

  export type Map_pedido_detalheMinAggregateOutputType = {
    map_id: number | null
    pedido_id: number | null
    produto_id: number | null
    quantidade: number | null
    preco_unitario: Decimal | null
  }

  export type Map_pedido_detalheMaxAggregateOutputType = {
    map_id: number | null
    pedido_id: number | null
    produto_id: number | null
    quantidade: number | null
    preco_unitario: Decimal | null
  }

  export type Map_pedido_detalheCountAggregateOutputType = {
    map_id: number
    pedido_id: number
    produto_id: number
    quantidade: number
    preco_unitario: number
    _all: number
  }


  export type Map_pedido_detalheAvgAggregateInputType = {
    map_id?: true
    pedido_id?: true
    produto_id?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type Map_pedido_detalheSumAggregateInputType = {
    map_id?: true
    pedido_id?: true
    produto_id?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type Map_pedido_detalheMinAggregateInputType = {
    map_id?: true
    pedido_id?: true
    produto_id?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type Map_pedido_detalheMaxAggregateInputType = {
    map_id?: true
    pedido_id?: true
    produto_id?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type Map_pedido_detalheCountAggregateInputType = {
    map_id?: true
    pedido_id?: true
    produto_id?: true
    quantidade?: true
    preco_unitario?: true
    _all?: true
  }

  export type Map_pedido_detalheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which map_pedido_detalhe to aggregate.
     */
    where?: map_pedido_detalheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of map_pedido_detalhes to fetch.
     */
    orderBy?: map_pedido_detalheOrderByWithRelationInput | map_pedido_detalheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: map_pedido_detalheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` map_pedido_detalhes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` map_pedido_detalhes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned map_pedido_detalhes
    **/
    _count?: true | Map_pedido_detalheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Map_pedido_detalheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Map_pedido_detalheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Map_pedido_detalheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Map_pedido_detalheMaxAggregateInputType
  }

  export type GetMap_pedido_detalheAggregateType<T extends Map_pedido_detalheAggregateArgs> = {
        [P in keyof T & keyof AggregateMap_pedido_detalhe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMap_pedido_detalhe[P]>
      : GetScalarType<T[P], AggregateMap_pedido_detalhe[P]>
  }




  export type map_pedido_detalheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: map_pedido_detalheWhereInput
    orderBy?: map_pedido_detalheOrderByWithAggregationInput | map_pedido_detalheOrderByWithAggregationInput[]
    by: Map_pedido_detalheScalarFieldEnum[] | Map_pedido_detalheScalarFieldEnum
    having?: map_pedido_detalheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Map_pedido_detalheCountAggregateInputType | true
    _avg?: Map_pedido_detalheAvgAggregateInputType
    _sum?: Map_pedido_detalheSumAggregateInputType
    _min?: Map_pedido_detalheMinAggregateInputType
    _max?: Map_pedido_detalheMaxAggregateInputType
  }

  export type Map_pedido_detalheGroupByOutputType = {
    map_id: number
    pedido_id: number
    produto_id: number
    quantidade: number
    preco_unitario: Decimal
    _count: Map_pedido_detalheCountAggregateOutputType | null
    _avg: Map_pedido_detalheAvgAggregateOutputType | null
    _sum: Map_pedido_detalheSumAggregateOutputType | null
    _min: Map_pedido_detalheMinAggregateOutputType | null
    _max: Map_pedido_detalheMaxAggregateOutputType | null
  }

  type GetMap_pedido_detalheGroupByPayload<T extends map_pedido_detalheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Map_pedido_detalheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Map_pedido_detalheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Map_pedido_detalheGroupByOutputType[P]>
            : GetScalarType<T[P], Map_pedido_detalheGroupByOutputType[P]>
        }
      >
    >


  export type map_pedido_detalheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    map_id?: boolean
    pedido_id?: boolean
    produto_id?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    pedido?: boolean | fct_pedidoDefaultArgs<ExtArgs>
    produto?: boolean | dim_produtoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["map_pedido_detalhe"]>

  export type map_pedido_detalheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    map_id?: boolean
    pedido_id?: boolean
    produto_id?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    pedido?: boolean | fct_pedidoDefaultArgs<ExtArgs>
    produto?: boolean | dim_produtoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["map_pedido_detalhe"]>

  export type map_pedido_detalheSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    map_id?: boolean
    pedido_id?: boolean
    produto_id?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    pedido?: boolean | fct_pedidoDefaultArgs<ExtArgs>
    produto?: boolean | dim_produtoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["map_pedido_detalhe"]>

  export type map_pedido_detalheSelectScalar = {
    map_id?: boolean
    pedido_id?: boolean
    produto_id?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
  }

  export type map_pedido_detalheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"map_id" | "pedido_id" | "produto_id" | "quantidade" | "preco_unitario", ExtArgs["result"]["map_pedido_detalhe"]>
  export type map_pedido_detalheInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | fct_pedidoDefaultArgs<ExtArgs>
    produto?: boolean | dim_produtoDefaultArgs<ExtArgs>
  }
  export type map_pedido_detalheIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | fct_pedidoDefaultArgs<ExtArgs>
    produto?: boolean | dim_produtoDefaultArgs<ExtArgs>
  }
  export type map_pedido_detalheIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | fct_pedidoDefaultArgs<ExtArgs>
    produto?: boolean | dim_produtoDefaultArgs<ExtArgs>
  }

  export type $map_pedido_detalhePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "map_pedido_detalhe"
    objects: {
      pedido: Prisma.$fct_pedidoPayload<ExtArgs>
      produto: Prisma.$dim_produtoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      map_id: number
      pedido_id: number
      produto_id: number
      quantidade: number
      preco_unitario: Prisma.Decimal
    }, ExtArgs["result"]["map_pedido_detalhe"]>
    composites: {}
  }

  type map_pedido_detalheGetPayload<S extends boolean | null | undefined | map_pedido_detalheDefaultArgs> = $Result.GetResult<Prisma.$map_pedido_detalhePayload, S>

  type map_pedido_detalheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<map_pedido_detalheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Map_pedido_detalheCountAggregateInputType | true
    }

  export interface map_pedido_detalheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['map_pedido_detalhe'], meta: { name: 'map_pedido_detalhe' } }
    /**
     * Find zero or one Map_pedido_detalhe that matches the filter.
     * @param {map_pedido_detalheFindUniqueArgs} args - Arguments to find a Map_pedido_detalhe
     * @example
     * // Get one Map_pedido_detalhe
     * const map_pedido_detalhe = await prisma.map_pedido_detalhe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends map_pedido_detalheFindUniqueArgs>(args: SelectSubset<T, map_pedido_detalheFindUniqueArgs<ExtArgs>>): Prisma__map_pedido_detalheClient<$Result.GetResult<Prisma.$map_pedido_detalhePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Map_pedido_detalhe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {map_pedido_detalheFindUniqueOrThrowArgs} args - Arguments to find a Map_pedido_detalhe
     * @example
     * // Get one Map_pedido_detalhe
     * const map_pedido_detalhe = await prisma.map_pedido_detalhe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends map_pedido_detalheFindUniqueOrThrowArgs>(args: SelectSubset<T, map_pedido_detalheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__map_pedido_detalheClient<$Result.GetResult<Prisma.$map_pedido_detalhePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Map_pedido_detalhe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {map_pedido_detalheFindFirstArgs} args - Arguments to find a Map_pedido_detalhe
     * @example
     * // Get one Map_pedido_detalhe
     * const map_pedido_detalhe = await prisma.map_pedido_detalhe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends map_pedido_detalheFindFirstArgs>(args?: SelectSubset<T, map_pedido_detalheFindFirstArgs<ExtArgs>>): Prisma__map_pedido_detalheClient<$Result.GetResult<Prisma.$map_pedido_detalhePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Map_pedido_detalhe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {map_pedido_detalheFindFirstOrThrowArgs} args - Arguments to find a Map_pedido_detalhe
     * @example
     * // Get one Map_pedido_detalhe
     * const map_pedido_detalhe = await prisma.map_pedido_detalhe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends map_pedido_detalheFindFirstOrThrowArgs>(args?: SelectSubset<T, map_pedido_detalheFindFirstOrThrowArgs<ExtArgs>>): Prisma__map_pedido_detalheClient<$Result.GetResult<Prisma.$map_pedido_detalhePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Map_pedido_detalhes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {map_pedido_detalheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Map_pedido_detalhes
     * const map_pedido_detalhes = await prisma.map_pedido_detalhe.findMany()
     * 
     * // Get first 10 Map_pedido_detalhes
     * const map_pedido_detalhes = await prisma.map_pedido_detalhe.findMany({ take: 10 })
     * 
     * // Only select the `map_id`
     * const map_pedido_detalheWithMap_idOnly = await prisma.map_pedido_detalhe.findMany({ select: { map_id: true } })
     * 
     */
    findMany<T extends map_pedido_detalheFindManyArgs>(args?: SelectSubset<T, map_pedido_detalheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$map_pedido_detalhePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Map_pedido_detalhe.
     * @param {map_pedido_detalheCreateArgs} args - Arguments to create a Map_pedido_detalhe.
     * @example
     * // Create one Map_pedido_detalhe
     * const Map_pedido_detalhe = await prisma.map_pedido_detalhe.create({
     *   data: {
     *     // ... data to create a Map_pedido_detalhe
     *   }
     * })
     * 
     */
    create<T extends map_pedido_detalheCreateArgs>(args: SelectSubset<T, map_pedido_detalheCreateArgs<ExtArgs>>): Prisma__map_pedido_detalheClient<$Result.GetResult<Prisma.$map_pedido_detalhePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Map_pedido_detalhes.
     * @param {map_pedido_detalheCreateManyArgs} args - Arguments to create many Map_pedido_detalhes.
     * @example
     * // Create many Map_pedido_detalhes
     * const map_pedido_detalhe = await prisma.map_pedido_detalhe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends map_pedido_detalheCreateManyArgs>(args?: SelectSubset<T, map_pedido_detalheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Map_pedido_detalhes and returns the data saved in the database.
     * @param {map_pedido_detalheCreateManyAndReturnArgs} args - Arguments to create many Map_pedido_detalhes.
     * @example
     * // Create many Map_pedido_detalhes
     * const map_pedido_detalhe = await prisma.map_pedido_detalhe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Map_pedido_detalhes and only return the `map_id`
     * const map_pedido_detalheWithMap_idOnly = await prisma.map_pedido_detalhe.createManyAndReturn({
     *   select: { map_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends map_pedido_detalheCreateManyAndReturnArgs>(args?: SelectSubset<T, map_pedido_detalheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$map_pedido_detalhePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Map_pedido_detalhe.
     * @param {map_pedido_detalheDeleteArgs} args - Arguments to delete one Map_pedido_detalhe.
     * @example
     * // Delete one Map_pedido_detalhe
     * const Map_pedido_detalhe = await prisma.map_pedido_detalhe.delete({
     *   where: {
     *     // ... filter to delete one Map_pedido_detalhe
     *   }
     * })
     * 
     */
    delete<T extends map_pedido_detalheDeleteArgs>(args: SelectSubset<T, map_pedido_detalheDeleteArgs<ExtArgs>>): Prisma__map_pedido_detalheClient<$Result.GetResult<Prisma.$map_pedido_detalhePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Map_pedido_detalhe.
     * @param {map_pedido_detalheUpdateArgs} args - Arguments to update one Map_pedido_detalhe.
     * @example
     * // Update one Map_pedido_detalhe
     * const map_pedido_detalhe = await prisma.map_pedido_detalhe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends map_pedido_detalheUpdateArgs>(args: SelectSubset<T, map_pedido_detalheUpdateArgs<ExtArgs>>): Prisma__map_pedido_detalheClient<$Result.GetResult<Prisma.$map_pedido_detalhePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Map_pedido_detalhes.
     * @param {map_pedido_detalheDeleteManyArgs} args - Arguments to filter Map_pedido_detalhes to delete.
     * @example
     * // Delete a few Map_pedido_detalhes
     * const { count } = await prisma.map_pedido_detalhe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends map_pedido_detalheDeleteManyArgs>(args?: SelectSubset<T, map_pedido_detalheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Map_pedido_detalhes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {map_pedido_detalheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Map_pedido_detalhes
     * const map_pedido_detalhe = await prisma.map_pedido_detalhe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends map_pedido_detalheUpdateManyArgs>(args: SelectSubset<T, map_pedido_detalheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Map_pedido_detalhes and returns the data updated in the database.
     * @param {map_pedido_detalheUpdateManyAndReturnArgs} args - Arguments to update many Map_pedido_detalhes.
     * @example
     * // Update many Map_pedido_detalhes
     * const map_pedido_detalhe = await prisma.map_pedido_detalhe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Map_pedido_detalhes and only return the `map_id`
     * const map_pedido_detalheWithMap_idOnly = await prisma.map_pedido_detalhe.updateManyAndReturn({
     *   select: { map_id: true },
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
    updateManyAndReturn<T extends map_pedido_detalheUpdateManyAndReturnArgs>(args: SelectSubset<T, map_pedido_detalheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$map_pedido_detalhePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Map_pedido_detalhe.
     * @param {map_pedido_detalheUpsertArgs} args - Arguments to update or create a Map_pedido_detalhe.
     * @example
     * // Update or create a Map_pedido_detalhe
     * const map_pedido_detalhe = await prisma.map_pedido_detalhe.upsert({
     *   create: {
     *     // ... data to create a Map_pedido_detalhe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Map_pedido_detalhe we want to update
     *   }
     * })
     */
    upsert<T extends map_pedido_detalheUpsertArgs>(args: SelectSubset<T, map_pedido_detalheUpsertArgs<ExtArgs>>): Prisma__map_pedido_detalheClient<$Result.GetResult<Prisma.$map_pedido_detalhePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Map_pedido_detalhes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {map_pedido_detalheCountArgs} args - Arguments to filter Map_pedido_detalhes to count.
     * @example
     * // Count the number of Map_pedido_detalhes
     * const count = await prisma.map_pedido_detalhe.count({
     *   where: {
     *     // ... the filter for the Map_pedido_detalhes we want to count
     *   }
     * })
    **/
    count<T extends map_pedido_detalheCountArgs>(
      args?: Subset<T, map_pedido_detalheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Map_pedido_detalheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Map_pedido_detalhe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Map_pedido_detalheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Map_pedido_detalheAggregateArgs>(args: Subset<T, Map_pedido_detalheAggregateArgs>): Prisma.PrismaPromise<GetMap_pedido_detalheAggregateType<T>>

    /**
     * Group by Map_pedido_detalhe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {map_pedido_detalheGroupByArgs} args - Group by arguments.
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
      T extends map_pedido_detalheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: map_pedido_detalheGroupByArgs['orderBy'] }
        : { orderBy?: map_pedido_detalheGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, map_pedido_detalheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMap_pedido_detalheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the map_pedido_detalhe model
   */
  readonly fields: map_pedido_detalheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for map_pedido_detalhe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__map_pedido_detalheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends fct_pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, fct_pedidoDefaultArgs<ExtArgs>>): Prisma__fct_pedidoClient<$Result.GetResult<Prisma.$fct_pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends dim_produtoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, dim_produtoDefaultArgs<ExtArgs>>): Prisma__dim_produtoClient<$Result.GetResult<Prisma.$dim_produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the map_pedido_detalhe model
   */
  interface map_pedido_detalheFieldRefs {
    readonly map_id: FieldRef<"map_pedido_detalhe", 'Int'>
    readonly pedido_id: FieldRef<"map_pedido_detalhe", 'Int'>
    readonly produto_id: FieldRef<"map_pedido_detalhe", 'Int'>
    readonly quantidade: FieldRef<"map_pedido_detalhe", 'Int'>
    readonly preco_unitario: FieldRef<"map_pedido_detalhe", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * map_pedido_detalhe findUnique
   */
  export type map_pedido_detalheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_pedido_detalhe
     */
    select?: map_pedido_detalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_pedido_detalhe
     */
    omit?: map_pedido_detalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_pedido_detalheInclude<ExtArgs> | null
    /**
     * Filter, which map_pedido_detalhe to fetch.
     */
    where: map_pedido_detalheWhereUniqueInput
  }

  /**
   * map_pedido_detalhe findUniqueOrThrow
   */
  export type map_pedido_detalheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_pedido_detalhe
     */
    select?: map_pedido_detalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_pedido_detalhe
     */
    omit?: map_pedido_detalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_pedido_detalheInclude<ExtArgs> | null
    /**
     * Filter, which map_pedido_detalhe to fetch.
     */
    where: map_pedido_detalheWhereUniqueInput
  }

  /**
   * map_pedido_detalhe findFirst
   */
  export type map_pedido_detalheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_pedido_detalhe
     */
    select?: map_pedido_detalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_pedido_detalhe
     */
    omit?: map_pedido_detalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_pedido_detalheInclude<ExtArgs> | null
    /**
     * Filter, which map_pedido_detalhe to fetch.
     */
    where?: map_pedido_detalheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of map_pedido_detalhes to fetch.
     */
    orderBy?: map_pedido_detalheOrderByWithRelationInput | map_pedido_detalheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for map_pedido_detalhes.
     */
    cursor?: map_pedido_detalheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` map_pedido_detalhes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` map_pedido_detalhes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of map_pedido_detalhes.
     */
    distinct?: Map_pedido_detalheScalarFieldEnum | Map_pedido_detalheScalarFieldEnum[]
  }

  /**
   * map_pedido_detalhe findFirstOrThrow
   */
  export type map_pedido_detalheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_pedido_detalhe
     */
    select?: map_pedido_detalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_pedido_detalhe
     */
    omit?: map_pedido_detalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_pedido_detalheInclude<ExtArgs> | null
    /**
     * Filter, which map_pedido_detalhe to fetch.
     */
    where?: map_pedido_detalheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of map_pedido_detalhes to fetch.
     */
    orderBy?: map_pedido_detalheOrderByWithRelationInput | map_pedido_detalheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for map_pedido_detalhes.
     */
    cursor?: map_pedido_detalheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` map_pedido_detalhes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` map_pedido_detalhes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of map_pedido_detalhes.
     */
    distinct?: Map_pedido_detalheScalarFieldEnum | Map_pedido_detalheScalarFieldEnum[]
  }

  /**
   * map_pedido_detalhe findMany
   */
  export type map_pedido_detalheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_pedido_detalhe
     */
    select?: map_pedido_detalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_pedido_detalhe
     */
    omit?: map_pedido_detalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_pedido_detalheInclude<ExtArgs> | null
    /**
     * Filter, which map_pedido_detalhes to fetch.
     */
    where?: map_pedido_detalheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of map_pedido_detalhes to fetch.
     */
    orderBy?: map_pedido_detalheOrderByWithRelationInput | map_pedido_detalheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing map_pedido_detalhes.
     */
    cursor?: map_pedido_detalheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` map_pedido_detalhes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` map_pedido_detalhes.
     */
    skip?: number
    distinct?: Map_pedido_detalheScalarFieldEnum | Map_pedido_detalheScalarFieldEnum[]
  }

  /**
   * map_pedido_detalhe create
   */
  export type map_pedido_detalheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_pedido_detalhe
     */
    select?: map_pedido_detalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_pedido_detalhe
     */
    omit?: map_pedido_detalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_pedido_detalheInclude<ExtArgs> | null
    /**
     * The data needed to create a map_pedido_detalhe.
     */
    data: XOR<map_pedido_detalheCreateInput, map_pedido_detalheUncheckedCreateInput>
  }

  /**
   * map_pedido_detalhe createMany
   */
  export type map_pedido_detalheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many map_pedido_detalhes.
     */
    data: map_pedido_detalheCreateManyInput | map_pedido_detalheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * map_pedido_detalhe createManyAndReturn
   */
  export type map_pedido_detalheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_pedido_detalhe
     */
    select?: map_pedido_detalheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the map_pedido_detalhe
     */
    omit?: map_pedido_detalheOmit<ExtArgs> | null
    /**
     * The data used to create many map_pedido_detalhes.
     */
    data: map_pedido_detalheCreateManyInput | map_pedido_detalheCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_pedido_detalheIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * map_pedido_detalhe update
   */
  export type map_pedido_detalheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_pedido_detalhe
     */
    select?: map_pedido_detalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_pedido_detalhe
     */
    omit?: map_pedido_detalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_pedido_detalheInclude<ExtArgs> | null
    /**
     * The data needed to update a map_pedido_detalhe.
     */
    data: XOR<map_pedido_detalheUpdateInput, map_pedido_detalheUncheckedUpdateInput>
    /**
     * Choose, which map_pedido_detalhe to update.
     */
    where: map_pedido_detalheWhereUniqueInput
  }

  /**
   * map_pedido_detalhe updateMany
   */
  export type map_pedido_detalheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update map_pedido_detalhes.
     */
    data: XOR<map_pedido_detalheUpdateManyMutationInput, map_pedido_detalheUncheckedUpdateManyInput>
    /**
     * Filter which map_pedido_detalhes to update
     */
    where?: map_pedido_detalheWhereInput
    /**
     * Limit how many map_pedido_detalhes to update.
     */
    limit?: number
  }

  /**
   * map_pedido_detalhe updateManyAndReturn
   */
  export type map_pedido_detalheUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_pedido_detalhe
     */
    select?: map_pedido_detalheSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the map_pedido_detalhe
     */
    omit?: map_pedido_detalheOmit<ExtArgs> | null
    /**
     * The data used to update map_pedido_detalhes.
     */
    data: XOR<map_pedido_detalheUpdateManyMutationInput, map_pedido_detalheUncheckedUpdateManyInput>
    /**
     * Filter which map_pedido_detalhes to update
     */
    where?: map_pedido_detalheWhereInput
    /**
     * Limit how many map_pedido_detalhes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_pedido_detalheIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * map_pedido_detalhe upsert
   */
  export type map_pedido_detalheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_pedido_detalhe
     */
    select?: map_pedido_detalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_pedido_detalhe
     */
    omit?: map_pedido_detalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_pedido_detalheInclude<ExtArgs> | null
    /**
     * The filter to search for the map_pedido_detalhe to update in case it exists.
     */
    where: map_pedido_detalheWhereUniqueInput
    /**
     * In case the map_pedido_detalhe found by the `where` argument doesn't exist, create a new map_pedido_detalhe with this data.
     */
    create: XOR<map_pedido_detalheCreateInput, map_pedido_detalheUncheckedCreateInput>
    /**
     * In case the map_pedido_detalhe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<map_pedido_detalheUpdateInput, map_pedido_detalheUncheckedUpdateInput>
  }

  /**
   * map_pedido_detalhe delete
   */
  export type map_pedido_detalheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_pedido_detalhe
     */
    select?: map_pedido_detalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_pedido_detalhe
     */
    omit?: map_pedido_detalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_pedido_detalheInclude<ExtArgs> | null
    /**
     * Filter which map_pedido_detalhe to delete.
     */
    where: map_pedido_detalheWhereUniqueInput
  }

  /**
   * map_pedido_detalhe deleteMany
   */
  export type map_pedido_detalheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which map_pedido_detalhes to delete
     */
    where?: map_pedido_detalheWhereInput
    /**
     * Limit how many map_pedido_detalhes to delete.
     */
    limit?: number
  }

  /**
   * map_pedido_detalhe without action
   */
  export type map_pedido_detalheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the map_pedido_detalhe
     */
    select?: map_pedido_detalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the map_pedido_detalhe
     */
    omit?: map_pedido_detalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: map_pedido_detalheInclude<ExtArgs> | null
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


  export const Dim_clienteScalarFieldEnum: {
    cliente_id: 'cliente_id',
    nome: 'nome',
    cpf_cnpj: 'cpf_cnpj',
    telefone: 'telefone',
    email: 'email',
    endereco: 'endereco',
    data_cadastro: 'data_cadastro'
  };

  export type Dim_clienteScalarFieldEnum = (typeof Dim_clienteScalarFieldEnum)[keyof typeof Dim_clienteScalarFieldEnum]


  export const Dim_fornecedorScalarFieldEnum: {
    fornecedor_id: 'fornecedor_id',
    nome_fantasia: 'nome_fantasia',
    razao_social: 'razao_social',
    cnpj: 'cnpj',
    telefone: 'telefone',
    email: 'email',
    endereco: 'endereco',
    data_cadastro: 'data_cadastro'
  };

  export type Dim_fornecedorScalarFieldEnum = (typeof Dim_fornecedorScalarFieldEnum)[keyof typeof Dim_fornecedorScalarFieldEnum]


  export const Dim_insumoScalarFieldEnum: {
    insumo_id: 'insumo_id',
    nome: 'nome',
    descricao: 'descricao',
    unidade_medida: 'unidade_medida',
    preco_unitario: 'preco_unitario',
    fornecedor_id: 'fornecedor_id'
  };

  export type Dim_insumoScalarFieldEnum = (typeof Dim_insumoScalarFieldEnum)[keyof typeof Dim_insumoScalarFieldEnum]


  export const Dim_produtoScalarFieldEnum: {
    produto_id: 'produto_id',
    nome: 'nome',
    descricao: 'descricao',
    preco_unitario: 'preco_unitario',
    estoque: 'estoque',
    unidade_medida: 'unidade_medida',
    fornecedor_id: 'fornecedor_id'
  };

  export type Dim_produtoScalarFieldEnum = (typeof Dim_produtoScalarFieldEnum)[keyof typeof Dim_produtoScalarFieldEnum]


  export const Fct_pedidoScalarFieldEnum: {
    pedido_id: 'pedido_id',
    cliente_id: 'cliente_id',
    data_pedido: 'data_pedido',
    data_entrega: 'data_entrega',
    status: 'status',
    valor_total: 'valor_total'
  };

  export type Fct_pedidoScalarFieldEnum = (typeof Fct_pedidoScalarFieldEnum)[keyof typeof Fct_pedidoScalarFieldEnum]


  export const Map_produto_composicaoScalarFieldEnum: {
    map_id: 'map_id',
    produto_id: 'produto_id',
    insumo_id: 'insumo_id',
    quantidade: 'quantidade',
    preco_unitario: 'preco_unitario'
  };

  export type Map_produto_composicaoScalarFieldEnum = (typeof Map_produto_composicaoScalarFieldEnum)[keyof typeof Map_produto_composicaoScalarFieldEnum]


  export const Map_pedido_detalheScalarFieldEnum: {
    map_id: 'map_id',
    pedido_id: 'pedido_id',
    produto_id: 'produto_id',
    quantidade: 'quantidade',
    preco_unitario: 'preco_unitario'
  };

  export type Map_pedido_detalheScalarFieldEnum = (typeof Map_pedido_detalheScalarFieldEnum)[keyof typeof Map_pedido_detalheScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type dim_clienteWhereInput = {
    AND?: dim_clienteWhereInput | dim_clienteWhereInput[]
    OR?: dim_clienteWhereInput[]
    NOT?: dim_clienteWhereInput | dim_clienteWhereInput[]
    cliente_id?: IntFilter<"dim_cliente"> | number
    nome?: StringFilter<"dim_cliente"> | string
    cpf_cnpj?: StringFilter<"dim_cliente"> | string
    telefone?: StringNullableFilter<"dim_cliente"> | string | null
    email?: StringFilter<"dim_cliente"> | string
    endereco?: StringNullableFilter<"dim_cliente"> | string | null
    data_cadastro?: DateTimeNullableFilter<"dim_cliente"> | Date | string | null
    fct_pedido?: Fct_pedidoListRelationFilter
  }

  export type dim_clienteOrderByWithRelationInput = {
    cliente_id?: SortOrder
    nome?: SortOrder
    cpf_cnpj?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrder
    endereco?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    fct_pedido?: fct_pedidoOrderByRelationAggregateInput
  }

  export type dim_clienteWhereUniqueInput = Prisma.AtLeast<{
    cliente_id?: number
    cpf_cnpj?: string
    email?: string
    AND?: dim_clienteWhereInput | dim_clienteWhereInput[]
    OR?: dim_clienteWhereInput[]
    NOT?: dim_clienteWhereInput | dim_clienteWhereInput[]
    nome?: StringFilter<"dim_cliente"> | string
    telefone?: StringNullableFilter<"dim_cliente"> | string | null
    endereco?: StringNullableFilter<"dim_cliente"> | string | null
    data_cadastro?: DateTimeNullableFilter<"dim_cliente"> | Date | string | null
    fct_pedido?: Fct_pedidoListRelationFilter
  }, "cliente_id" | "cpf_cnpj" | "email">

  export type dim_clienteOrderByWithAggregationInput = {
    cliente_id?: SortOrder
    nome?: SortOrder
    cpf_cnpj?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrder
    endereco?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    _count?: dim_clienteCountOrderByAggregateInput
    _avg?: dim_clienteAvgOrderByAggregateInput
    _max?: dim_clienteMaxOrderByAggregateInput
    _min?: dim_clienteMinOrderByAggregateInput
    _sum?: dim_clienteSumOrderByAggregateInput
  }

  export type dim_clienteScalarWhereWithAggregatesInput = {
    AND?: dim_clienteScalarWhereWithAggregatesInput | dim_clienteScalarWhereWithAggregatesInput[]
    OR?: dim_clienteScalarWhereWithAggregatesInput[]
    NOT?: dim_clienteScalarWhereWithAggregatesInput | dim_clienteScalarWhereWithAggregatesInput[]
    cliente_id?: IntWithAggregatesFilter<"dim_cliente"> | number
    nome?: StringWithAggregatesFilter<"dim_cliente"> | string
    cpf_cnpj?: StringWithAggregatesFilter<"dim_cliente"> | string
    telefone?: StringNullableWithAggregatesFilter<"dim_cliente"> | string | null
    email?: StringWithAggregatesFilter<"dim_cliente"> | string
    endereco?: StringNullableWithAggregatesFilter<"dim_cliente"> | string | null
    data_cadastro?: DateTimeNullableWithAggregatesFilter<"dim_cliente"> | Date | string | null
  }

  export type dim_fornecedorWhereInput = {
    AND?: dim_fornecedorWhereInput | dim_fornecedorWhereInput[]
    OR?: dim_fornecedorWhereInput[]
    NOT?: dim_fornecedorWhereInput | dim_fornecedorWhereInput[]
    fornecedor_id?: IntFilter<"dim_fornecedor"> | number
    nome_fantasia?: StringFilter<"dim_fornecedor"> | string
    razao_social?: StringNullableFilter<"dim_fornecedor"> | string | null
    cnpj?: StringFilter<"dim_fornecedor"> | string
    telefone?: StringNullableFilter<"dim_fornecedor"> | string | null
    email?: StringFilter<"dim_fornecedor"> | string
    endereco?: StringNullableFilter<"dim_fornecedor"> | string | null
    data_cadastro?: DateTimeNullableFilter<"dim_fornecedor"> | Date | string | null
    dim_insumo?: Dim_insumoListRelationFilter
    dim_produto?: Dim_produtoListRelationFilter
  }

  export type dim_fornecedorOrderByWithRelationInput = {
    fornecedor_id?: SortOrder
    nome_fantasia?: SortOrder
    razao_social?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrder
    endereco?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    dim_insumo?: dim_insumoOrderByRelationAggregateInput
    dim_produto?: dim_produtoOrderByRelationAggregateInput
  }

  export type dim_fornecedorWhereUniqueInput = Prisma.AtLeast<{
    fornecedor_id?: number
    cnpj?: string
    email?: string
    AND?: dim_fornecedorWhereInput | dim_fornecedorWhereInput[]
    OR?: dim_fornecedorWhereInput[]
    NOT?: dim_fornecedorWhereInput | dim_fornecedorWhereInput[]
    nome_fantasia?: StringFilter<"dim_fornecedor"> | string
    razao_social?: StringNullableFilter<"dim_fornecedor"> | string | null
    telefone?: StringNullableFilter<"dim_fornecedor"> | string | null
    endereco?: StringNullableFilter<"dim_fornecedor"> | string | null
    data_cadastro?: DateTimeNullableFilter<"dim_fornecedor"> | Date | string | null
    dim_insumo?: Dim_insumoListRelationFilter
    dim_produto?: Dim_produtoListRelationFilter
  }, "fornecedor_id" | "cnpj" | "email">

  export type dim_fornecedorOrderByWithAggregationInput = {
    fornecedor_id?: SortOrder
    nome_fantasia?: SortOrder
    razao_social?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrder
    endereco?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    _count?: dim_fornecedorCountOrderByAggregateInput
    _avg?: dim_fornecedorAvgOrderByAggregateInput
    _max?: dim_fornecedorMaxOrderByAggregateInput
    _min?: dim_fornecedorMinOrderByAggregateInput
    _sum?: dim_fornecedorSumOrderByAggregateInput
  }

  export type dim_fornecedorScalarWhereWithAggregatesInput = {
    AND?: dim_fornecedorScalarWhereWithAggregatesInput | dim_fornecedorScalarWhereWithAggregatesInput[]
    OR?: dim_fornecedorScalarWhereWithAggregatesInput[]
    NOT?: dim_fornecedorScalarWhereWithAggregatesInput | dim_fornecedorScalarWhereWithAggregatesInput[]
    fornecedor_id?: IntWithAggregatesFilter<"dim_fornecedor"> | number
    nome_fantasia?: StringWithAggregatesFilter<"dim_fornecedor"> | string
    razao_social?: StringNullableWithAggregatesFilter<"dim_fornecedor"> | string | null
    cnpj?: StringWithAggregatesFilter<"dim_fornecedor"> | string
    telefone?: StringNullableWithAggregatesFilter<"dim_fornecedor"> | string | null
    email?: StringWithAggregatesFilter<"dim_fornecedor"> | string
    endereco?: StringNullableWithAggregatesFilter<"dim_fornecedor"> | string | null
    data_cadastro?: DateTimeNullableWithAggregatesFilter<"dim_fornecedor"> | Date | string | null
  }

  export type dim_insumoWhereInput = {
    AND?: dim_insumoWhereInput | dim_insumoWhereInput[]
    OR?: dim_insumoWhereInput[]
    NOT?: dim_insumoWhereInput | dim_insumoWhereInput[]
    insumo_id?: IntFilter<"dim_insumo"> | number
    nome?: StringFilter<"dim_insumo"> | string
    descricao?: StringNullableFilter<"dim_insumo"> | string | null
    unidade_medida?: StringNullableFilter<"dim_insumo"> | string | null
    preco_unitario?: DecimalNullableFilter<"dim_insumo"> | Decimal | DecimalJsLike | number | string | null
    fornecedor_id?: IntNullableFilter<"dim_insumo"> | number | null
    fornecedor?: XOR<Dim_fornecedorNullableScalarRelationFilter, dim_fornecedorWhereInput> | null
    map_composicao?: Map_produto_composicaoListRelationFilter
  }

  export type dim_insumoOrderByWithRelationInput = {
    insumo_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    unidade_medida?: SortOrderInput | SortOrder
    preco_unitario?: SortOrderInput | SortOrder
    fornecedor_id?: SortOrderInput | SortOrder
    fornecedor?: dim_fornecedorOrderByWithRelationInput
    map_composicao?: map_produto_composicaoOrderByRelationAggregateInput
  }

  export type dim_insumoWhereUniqueInput = Prisma.AtLeast<{
    insumo_id?: number
    AND?: dim_insumoWhereInput | dim_insumoWhereInput[]
    OR?: dim_insumoWhereInput[]
    NOT?: dim_insumoWhereInput | dim_insumoWhereInput[]
    nome?: StringFilter<"dim_insumo"> | string
    descricao?: StringNullableFilter<"dim_insumo"> | string | null
    unidade_medida?: StringNullableFilter<"dim_insumo"> | string | null
    preco_unitario?: DecimalNullableFilter<"dim_insumo"> | Decimal | DecimalJsLike | number | string | null
    fornecedor_id?: IntNullableFilter<"dim_insumo"> | number | null
    fornecedor?: XOR<Dim_fornecedorNullableScalarRelationFilter, dim_fornecedorWhereInput> | null
    map_composicao?: Map_produto_composicaoListRelationFilter
  }, "insumo_id">

  export type dim_insumoOrderByWithAggregationInput = {
    insumo_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    unidade_medida?: SortOrderInput | SortOrder
    preco_unitario?: SortOrderInput | SortOrder
    fornecedor_id?: SortOrderInput | SortOrder
    _count?: dim_insumoCountOrderByAggregateInput
    _avg?: dim_insumoAvgOrderByAggregateInput
    _max?: dim_insumoMaxOrderByAggregateInput
    _min?: dim_insumoMinOrderByAggregateInput
    _sum?: dim_insumoSumOrderByAggregateInput
  }

  export type dim_insumoScalarWhereWithAggregatesInput = {
    AND?: dim_insumoScalarWhereWithAggregatesInput | dim_insumoScalarWhereWithAggregatesInput[]
    OR?: dim_insumoScalarWhereWithAggregatesInput[]
    NOT?: dim_insumoScalarWhereWithAggregatesInput | dim_insumoScalarWhereWithAggregatesInput[]
    insumo_id?: IntWithAggregatesFilter<"dim_insumo"> | number
    nome?: StringWithAggregatesFilter<"dim_insumo"> | string
    descricao?: StringNullableWithAggregatesFilter<"dim_insumo"> | string | null
    unidade_medida?: StringNullableWithAggregatesFilter<"dim_insumo"> | string | null
    preco_unitario?: DecimalNullableWithAggregatesFilter<"dim_insumo"> | Decimal | DecimalJsLike | number | string | null
    fornecedor_id?: IntNullableWithAggregatesFilter<"dim_insumo"> | number | null
  }

  export type dim_produtoWhereInput = {
    AND?: dim_produtoWhereInput | dim_produtoWhereInput[]
    OR?: dim_produtoWhereInput[]
    NOT?: dim_produtoWhereInput | dim_produtoWhereInput[]
    produto_id?: IntFilter<"dim_produto"> | number
    nome?: StringFilter<"dim_produto"> | string
    descricao?: StringNullableFilter<"dim_produto"> | string | null
    preco_unitario?: DecimalNullableFilter<"dim_produto"> | Decimal | DecimalJsLike | number | string | null
    estoque?: IntNullableFilter<"dim_produto"> | number | null
    unidade_medida?: StringNullableFilter<"dim_produto"> | string | null
    fornecedor_id?: IntNullableFilter<"dim_produto"> | number | null
    fornecedor?: XOR<Dim_fornecedorNullableScalarRelationFilter, dim_fornecedorWhereInput> | null
    map_detalhe?: Map_pedido_detalheListRelationFilter
    map_composicao?: Map_produto_composicaoListRelationFilter
  }

  export type dim_produtoOrderByWithRelationInput = {
    produto_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    preco_unitario?: SortOrderInput | SortOrder
    estoque?: SortOrderInput | SortOrder
    unidade_medida?: SortOrderInput | SortOrder
    fornecedor_id?: SortOrderInput | SortOrder
    fornecedor?: dim_fornecedorOrderByWithRelationInput
    map_detalhe?: map_pedido_detalheOrderByRelationAggregateInput
    map_composicao?: map_produto_composicaoOrderByRelationAggregateInput
  }

  export type dim_produtoWhereUniqueInput = Prisma.AtLeast<{
    produto_id?: number
    AND?: dim_produtoWhereInput | dim_produtoWhereInput[]
    OR?: dim_produtoWhereInput[]
    NOT?: dim_produtoWhereInput | dim_produtoWhereInput[]
    nome?: StringFilter<"dim_produto"> | string
    descricao?: StringNullableFilter<"dim_produto"> | string | null
    preco_unitario?: DecimalNullableFilter<"dim_produto"> | Decimal | DecimalJsLike | number | string | null
    estoque?: IntNullableFilter<"dim_produto"> | number | null
    unidade_medida?: StringNullableFilter<"dim_produto"> | string | null
    fornecedor_id?: IntNullableFilter<"dim_produto"> | number | null
    fornecedor?: XOR<Dim_fornecedorNullableScalarRelationFilter, dim_fornecedorWhereInput> | null
    map_detalhe?: Map_pedido_detalheListRelationFilter
    map_composicao?: Map_produto_composicaoListRelationFilter
  }, "produto_id">

  export type dim_produtoOrderByWithAggregationInput = {
    produto_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    preco_unitario?: SortOrderInput | SortOrder
    estoque?: SortOrderInput | SortOrder
    unidade_medida?: SortOrderInput | SortOrder
    fornecedor_id?: SortOrderInput | SortOrder
    _count?: dim_produtoCountOrderByAggregateInput
    _avg?: dim_produtoAvgOrderByAggregateInput
    _max?: dim_produtoMaxOrderByAggregateInput
    _min?: dim_produtoMinOrderByAggregateInput
    _sum?: dim_produtoSumOrderByAggregateInput
  }

  export type dim_produtoScalarWhereWithAggregatesInput = {
    AND?: dim_produtoScalarWhereWithAggregatesInput | dim_produtoScalarWhereWithAggregatesInput[]
    OR?: dim_produtoScalarWhereWithAggregatesInput[]
    NOT?: dim_produtoScalarWhereWithAggregatesInput | dim_produtoScalarWhereWithAggregatesInput[]
    produto_id?: IntWithAggregatesFilter<"dim_produto"> | number
    nome?: StringWithAggregatesFilter<"dim_produto"> | string
    descricao?: StringNullableWithAggregatesFilter<"dim_produto"> | string | null
    preco_unitario?: DecimalNullableWithAggregatesFilter<"dim_produto"> | Decimal | DecimalJsLike | number | string | null
    estoque?: IntNullableWithAggregatesFilter<"dim_produto"> | number | null
    unidade_medida?: StringNullableWithAggregatesFilter<"dim_produto"> | string | null
    fornecedor_id?: IntNullableWithAggregatesFilter<"dim_produto"> | number | null
  }

  export type fct_pedidoWhereInput = {
    AND?: fct_pedidoWhereInput | fct_pedidoWhereInput[]
    OR?: fct_pedidoWhereInput[]
    NOT?: fct_pedidoWhereInput | fct_pedidoWhereInput[]
    pedido_id?: IntFilter<"fct_pedido"> | number
    cliente_id?: IntNullableFilter<"fct_pedido"> | number | null
    data_pedido?: DateTimeNullableFilter<"fct_pedido"> | Date | string | null
    data_entrega?: DateTimeNullableFilter<"fct_pedido"> | Date | string | null
    status?: StringFilter<"fct_pedido"> | string
    valor_total?: DecimalNullableFilter<"fct_pedido"> | Decimal | DecimalJsLike | number | string | null
    cliente?: XOR<Dim_clienteNullableScalarRelationFilter, dim_clienteWhereInput> | null
    map_detalhe?: Map_pedido_detalheListRelationFilter
  }

  export type fct_pedidoOrderByWithRelationInput = {
    pedido_id?: SortOrder
    cliente_id?: SortOrderInput | SortOrder
    data_pedido?: SortOrderInput | SortOrder
    data_entrega?: SortOrderInput | SortOrder
    status?: SortOrder
    valor_total?: SortOrderInput | SortOrder
    cliente?: dim_clienteOrderByWithRelationInput
    map_detalhe?: map_pedido_detalheOrderByRelationAggregateInput
  }

  export type fct_pedidoWhereUniqueInput = Prisma.AtLeast<{
    pedido_id?: number
    AND?: fct_pedidoWhereInput | fct_pedidoWhereInput[]
    OR?: fct_pedidoWhereInput[]
    NOT?: fct_pedidoWhereInput | fct_pedidoWhereInput[]
    cliente_id?: IntNullableFilter<"fct_pedido"> | number | null
    data_pedido?: DateTimeNullableFilter<"fct_pedido"> | Date | string | null
    data_entrega?: DateTimeNullableFilter<"fct_pedido"> | Date | string | null
    status?: StringFilter<"fct_pedido"> | string
    valor_total?: DecimalNullableFilter<"fct_pedido"> | Decimal | DecimalJsLike | number | string | null
    cliente?: XOR<Dim_clienteNullableScalarRelationFilter, dim_clienteWhereInput> | null
    map_detalhe?: Map_pedido_detalheListRelationFilter
  }, "pedido_id">

  export type fct_pedidoOrderByWithAggregationInput = {
    pedido_id?: SortOrder
    cliente_id?: SortOrderInput | SortOrder
    data_pedido?: SortOrderInput | SortOrder
    data_entrega?: SortOrderInput | SortOrder
    status?: SortOrder
    valor_total?: SortOrderInput | SortOrder
    _count?: fct_pedidoCountOrderByAggregateInput
    _avg?: fct_pedidoAvgOrderByAggregateInput
    _max?: fct_pedidoMaxOrderByAggregateInput
    _min?: fct_pedidoMinOrderByAggregateInput
    _sum?: fct_pedidoSumOrderByAggregateInput
  }

  export type fct_pedidoScalarWhereWithAggregatesInput = {
    AND?: fct_pedidoScalarWhereWithAggregatesInput | fct_pedidoScalarWhereWithAggregatesInput[]
    OR?: fct_pedidoScalarWhereWithAggregatesInput[]
    NOT?: fct_pedidoScalarWhereWithAggregatesInput | fct_pedidoScalarWhereWithAggregatesInput[]
    pedido_id?: IntWithAggregatesFilter<"fct_pedido"> | number
    cliente_id?: IntNullableWithAggregatesFilter<"fct_pedido"> | number | null
    data_pedido?: DateTimeNullableWithAggregatesFilter<"fct_pedido"> | Date | string | null
    data_entrega?: DateTimeNullableWithAggregatesFilter<"fct_pedido"> | Date | string | null
    status?: StringWithAggregatesFilter<"fct_pedido"> | string
    valor_total?: DecimalNullableWithAggregatesFilter<"fct_pedido"> | Decimal | DecimalJsLike | number | string | null
  }

  export type map_produto_composicaoWhereInput = {
    AND?: map_produto_composicaoWhereInput | map_produto_composicaoWhereInput[]
    OR?: map_produto_composicaoWhereInput[]
    NOT?: map_produto_composicaoWhereInput | map_produto_composicaoWhereInput[]
    map_id?: IntFilter<"map_produto_composicao"> | number
    produto_id?: IntNullableFilter<"map_produto_composicao"> | number | null
    insumo_id?: IntNullableFilter<"map_produto_composicao"> | number | null
    quantidade?: DecimalFilter<"map_produto_composicao"> | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFilter<"map_produto_composicao"> | Decimal | DecimalJsLike | number | string
    insumo?: XOR<Dim_insumoNullableScalarRelationFilter, dim_insumoWhereInput> | null
    produto?: XOR<Dim_produtoNullableScalarRelationFilter, dim_produtoWhereInput> | null
  }

  export type map_produto_composicaoOrderByWithRelationInput = {
    map_id?: SortOrder
    produto_id?: SortOrderInput | SortOrder
    insumo_id?: SortOrderInput | SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    insumo?: dim_insumoOrderByWithRelationInput
    produto?: dim_produtoOrderByWithRelationInput
  }

  export type map_produto_composicaoWhereUniqueInput = Prisma.AtLeast<{
    map_id?: number
    produto_id_insumo_id?: map_produto_composicaoProduto_idInsumo_idCompoundUniqueInput
    AND?: map_produto_composicaoWhereInput | map_produto_composicaoWhereInput[]
    OR?: map_produto_composicaoWhereInput[]
    NOT?: map_produto_composicaoWhereInput | map_produto_composicaoWhereInput[]
    produto_id?: IntNullableFilter<"map_produto_composicao"> | number | null
    insumo_id?: IntNullableFilter<"map_produto_composicao"> | number | null
    quantidade?: DecimalFilter<"map_produto_composicao"> | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFilter<"map_produto_composicao"> | Decimal | DecimalJsLike | number | string
    insumo?: XOR<Dim_insumoNullableScalarRelationFilter, dim_insumoWhereInput> | null
    produto?: XOR<Dim_produtoNullableScalarRelationFilter, dim_produtoWhereInput> | null
  }, "map_id" | "produto_id_insumo_id">

  export type map_produto_composicaoOrderByWithAggregationInput = {
    map_id?: SortOrder
    produto_id?: SortOrderInput | SortOrder
    insumo_id?: SortOrderInput | SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    _count?: map_produto_composicaoCountOrderByAggregateInput
    _avg?: map_produto_composicaoAvgOrderByAggregateInput
    _max?: map_produto_composicaoMaxOrderByAggregateInput
    _min?: map_produto_composicaoMinOrderByAggregateInput
    _sum?: map_produto_composicaoSumOrderByAggregateInput
  }

  export type map_produto_composicaoScalarWhereWithAggregatesInput = {
    AND?: map_produto_composicaoScalarWhereWithAggregatesInput | map_produto_composicaoScalarWhereWithAggregatesInput[]
    OR?: map_produto_composicaoScalarWhereWithAggregatesInput[]
    NOT?: map_produto_composicaoScalarWhereWithAggregatesInput | map_produto_composicaoScalarWhereWithAggregatesInput[]
    map_id?: IntWithAggregatesFilter<"map_produto_composicao"> | number
    produto_id?: IntNullableWithAggregatesFilter<"map_produto_composicao"> | number | null
    insumo_id?: IntNullableWithAggregatesFilter<"map_produto_composicao"> | number | null
    quantidade?: DecimalWithAggregatesFilter<"map_produto_composicao"> | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalWithAggregatesFilter<"map_produto_composicao"> | Decimal | DecimalJsLike | number | string
  }

  export type map_pedido_detalheWhereInput = {
    AND?: map_pedido_detalheWhereInput | map_pedido_detalheWhereInput[]
    OR?: map_pedido_detalheWhereInput[]
    NOT?: map_pedido_detalheWhereInput | map_pedido_detalheWhereInput[]
    map_id?: IntFilter<"map_pedido_detalhe"> | number
    pedido_id?: IntFilter<"map_pedido_detalhe"> | number
    produto_id?: IntFilter<"map_pedido_detalhe"> | number
    quantidade?: IntFilter<"map_pedido_detalhe"> | number
    preco_unitario?: DecimalFilter<"map_pedido_detalhe"> | Decimal | DecimalJsLike | number | string
    pedido?: XOR<Fct_pedidoScalarRelationFilter, fct_pedidoWhereInput>
    produto?: XOR<Dim_produtoScalarRelationFilter, dim_produtoWhereInput>
  }

  export type map_pedido_detalheOrderByWithRelationInput = {
    map_id?: SortOrder
    pedido_id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    pedido?: fct_pedidoOrderByWithRelationInput
    produto?: dim_produtoOrderByWithRelationInput
  }

  export type map_pedido_detalheWhereUniqueInput = Prisma.AtLeast<{
    map_id?: number
    pedido_id_produto_id?: map_pedido_detalhePedido_idProduto_idCompoundUniqueInput
    AND?: map_pedido_detalheWhereInput | map_pedido_detalheWhereInput[]
    OR?: map_pedido_detalheWhereInput[]
    NOT?: map_pedido_detalheWhereInput | map_pedido_detalheWhereInput[]
    pedido_id?: IntFilter<"map_pedido_detalhe"> | number
    produto_id?: IntFilter<"map_pedido_detalhe"> | number
    quantidade?: IntFilter<"map_pedido_detalhe"> | number
    preco_unitario?: DecimalFilter<"map_pedido_detalhe"> | Decimal | DecimalJsLike | number | string
    pedido?: XOR<Fct_pedidoScalarRelationFilter, fct_pedidoWhereInput>
    produto?: XOR<Dim_produtoScalarRelationFilter, dim_produtoWhereInput>
  }, "map_id" | "pedido_id_produto_id">

  export type map_pedido_detalheOrderByWithAggregationInput = {
    map_id?: SortOrder
    pedido_id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    _count?: map_pedido_detalheCountOrderByAggregateInput
    _avg?: map_pedido_detalheAvgOrderByAggregateInput
    _max?: map_pedido_detalheMaxOrderByAggregateInput
    _min?: map_pedido_detalheMinOrderByAggregateInput
    _sum?: map_pedido_detalheSumOrderByAggregateInput
  }

  export type map_pedido_detalheScalarWhereWithAggregatesInput = {
    AND?: map_pedido_detalheScalarWhereWithAggregatesInput | map_pedido_detalheScalarWhereWithAggregatesInput[]
    OR?: map_pedido_detalheScalarWhereWithAggregatesInput[]
    NOT?: map_pedido_detalheScalarWhereWithAggregatesInput | map_pedido_detalheScalarWhereWithAggregatesInput[]
    map_id?: IntWithAggregatesFilter<"map_pedido_detalhe"> | number
    pedido_id?: IntWithAggregatesFilter<"map_pedido_detalhe"> | number
    produto_id?: IntWithAggregatesFilter<"map_pedido_detalhe"> | number
    quantidade?: IntWithAggregatesFilter<"map_pedido_detalhe"> | number
    preco_unitario?: DecimalWithAggregatesFilter<"map_pedido_detalhe"> | Decimal | DecimalJsLike | number | string
  }

  export type dim_clienteCreateInput = {
    nome: string
    cpf_cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
    fct_pedido?: fct_pedidoCreateNestedManyWithoutClienteInput
  }

  export type dim_clienteUncheckedCreateInput = {
    cliente_id?: number
    nome: string
    cpf_cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
    fct_pedido?: fct_pedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type dim_clienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fct_pedido?: fct_pedidoUpdateManyWithoutClienteNestedInput
  }

  export type dim_clienteUncheckedUpdateInput = {
    cliente_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fct_pedido?: fct_pedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type dim_clienteCreateManyInput = {
    cliente_id?: number
    nome: string
    cpf_cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
  }

  export type dim_clienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dim_clienteUncheckedUpdateManyInput = {
    cliente_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dim_fornecedorCreateInput = {
    nome_fantasia: string
    razao_social?: string | null
    cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
    dim_insumo?: dim_insumoCreateNestedManyWithoutFornecedorInput
    dim_produto?: dim_produtoCreateNestedManyWithoutFornecedorInput
  }

  export type dim_fornecedorUncheckedCreateInput = {
    fornecedor_id?: number
    nome_fantasia: string
    razao_social?: string | null
    cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
    dim_insumo?: dim_insumoUncheckedCreateNestedManyWithoutFornecedorInput
    dim_produto?: dim_produtoUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type dim_fornecedorUpdateInput = {
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    razao_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dim_insumo?: dim_insumoUpdateManyWithoutFornecedorNestedInput
    dim_produto?: dim_produtoUpdateManyWithoutFornecedorNestedInput
  }

  export type dim_fornecedorUncheckedUpdateInput = {
    fornecedor_id?: IntFieldUpdateOperationsInput | number
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    razao_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dim_insumo?: dim_insumoUncheckedUpdateManyWithoutFornecedorNestedInput
    dim_produto?: dim_produtoUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type dim_fornecedorCreateManyInput = {
    fornecedor_id?: number
    nome_fantasia: string
    razao_social?: string | null
    cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
  }

  export type dim_fornecedorUpdateManyMutationInput = {
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    razao_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dim_fornecedorUncheckedUpdateManyInput = {
    fornecedor_id?: IntFieldUpdateOperationsInput | number
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    razao_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dim_insumoCreateInput = {
    nome: string
    descricao?: string | null
    unidade_medida?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    fornecedor?: dim_fornecedorCreateNestedOneWithoutDim_insumoInput
    map_composicao?: map_produto_composicaoCreateNestedManyWithoutInsumoInput
  }

  export type dim_insumoUncheckedCreateInput = {
    insumo_id?: number
    nome: string
    descricao?: string | null
    unidade_medida?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    fornecedor_id?: number | null
    map_composicao?: map_produto_composicaoUncheckedCreateNestedManyWithoutInsumoInput
  }

  export type dim_insumoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fornecedor?: dim_fornecedorUpdateOneWithoutDim_insumoNestedInput
    map_composicao?: map_produto_composicaoUpdateManyWithoutInsumoNestedInput
  }

  export type dim_insumoUncheckedUpdateInput = {
    insumo_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fornecedor_id?: NullableIntFieldUpdateOperationsInput | number | null
    map_composicao?: map_produto_composicaoUncheckedUpdateManyWithoutInsumoNestedInput
  }

  export type dim_insumoCreateManyInput = {
    insumo_id?: number
    nome: string
    descricao?: string | null
    unidade_medida?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    fornecedor_id?: number | null
  }

  export type dim_insumoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type dim_insumoUncheckedUpdateManyInput = {
    insumo_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fornecedor_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type dim_produtoCreateInput = {
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
    fornecedor?: dim_fornecedorCreateNestedOneWithoutDim_produtoInput
    map_detalhe?: map_pedido_detalheCreateNestedManyWithoutProdutoInput
    map_composicao?: map_produto_composicaoCreateNestedManyWithoutProdutoInput
  }

  export type dim_produtoUncheckedCreateInput = {
    produto_id?: number
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
    fornecedor_id?: number | null
    map_detalhe?: map_pedido_detalheUncheckedCreateNestedManyWithoutProdutoInput
    map_composicao?: map_produto_composicaoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type dim_produtoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    fornecedor?: dim_fornecedorUpdateOneWithoutDim_produtoNestedInput
    map_detalhe?: map_pedido_detalheUpdateManyWithoutProdutoNestedInput
    map_composicao?: map_produto_composicaoUpdateManyWithoutProdutoNestedInput
  }

  export type dim_produtoUncheckedUpdateInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    fornecedor_id?: NullableIntFieldUpdateOperationsInput | number | null
    map_detalhe?: map_pedido_detalheUncheckedUpdateManyWithoutProdutoNestedInput
    map_composicao?: map_produto_composicaoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type dim_produtoCreateManyInput = {
    produto_id?: number
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
    fornecedor_id?: number | null
  }

  export type dim_produtoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dim_produtoUncheckedUpdateManyInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    fornecedor_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type fct_pedidoCreateInput = {
    data_pedido?: Date | string | null
    data_entrega?: Date | string | null
    status: string
    valor_total?: Decimal | DecimalJsLike | number | string | null
    cliente?: dim_clienteCreateNestedOneWithoutFct_pedidoInput
    map_detalhe?: map_pedido_detalheCreateNestedManyWithoutPedidoInput
  }

  export type fct_pedidoUncheckedCreateInput = {
    pedido_id?: number
    cliente_id?: number | null
    data_pedido?: Date | string | null
    data_entrega?: Date | string | null
    status: string
    valor_total?: Decimal | DecimalJsLike | number | string | null
    map_detalhe?: map_pedido_detalheUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type fct_pedidoUpdateInput = {
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cliente?: dim_clienteUpdateOneWithoutFct_pedidoNestedInput
    map_detalhe?: map_pedido_detalheUpdateManyWithoutPedidoNestedInput
  }

  export type fct_pedidoUncheckedUpdateInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    cliente_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    map_detalhe?: map_pedido_detalheUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type fct_pedidoCreateManyInput = {
    pedido_id?: number
    cliente_id?: number | null
    data_pedido?: Date | string | null
    data_entrega?: Date | string | null
    status: string
    valor_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type fct_pedidoUpdateManyMutationInput = {
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type fct_pedidoUncheckedUpdateManyInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    cliente_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type map_produto_composicaoCreateInput = {
    quantidade: Decimal | DecimalJsLike | number | string
    preco_unitario: Decimal | DecimalJsLike | number | string
    insumo?: dim_insumoCreateNestedOneWithoutMap_composicaoInput
    produto?: dim_produtoCreateNestedOneWithoutMap_composicaoInput
  }

  export type map_produto_composicaoUncheckedCreateInput = {
    map_id?: number
    produto_id?: number | null
    insumo_id?: number | null
    quantidade: Decimal | DecimalJsLike | number | string
    preco_unitario: Decimal | DecimalJsLike | number | string
  }

  export type map_produto_composicaoUpdateInput = {
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    insumo?: dim_insumoUpdateOneWithoutMap_composicaoNestedInput
    produto?: dim_produtoUpdateOneWithoutMap_composicaoNestedInput
  }

  export type map_produto_composicaoUncheckedUpdateInput = {
    map_id?: IntFieldUpdateOperationsInput | number
    produto_id?: NullableIntFieldUpdateOperationsInput | number | null
    insumo_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type map_produto_composicaoCreateManyInput = {
    map_id?: number
    produto_id?: number | null
    insumo_id?: number | null
    quantidade: Decimal | DecimalJsLike | number | string
    preco_unitario: Decimal | DecimalJsLike | number | string
  }

  export type map_produto_composicaoUpdateManyMutationInput = {
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type map_produto_composicaoUncheckedUpdateManyInput = {
    map_id?: IntFieldUpdateOperationsInput | number
    produto_id?: NullableIntFieldUpdateOperationsInput | number | null
    insumo_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type map_pedido_detalheCreateInput = {
    quantidade: number
    preco_unitario: Decimal | DecimalJsLike | number | string
    pedido: fct_pedidoCreateNestedOneWithoutMap_detalheInput
    produto: dim_produtoCreateNestedOneWithoutMap_detalheInput
  }

  export type map_pedido_detalheUncheckedCreateInput = {
    map_id?: number
    pedido_id: number
    produto_id: number
    quantidade: number
    preco_unitario: Decimal | DecimalJsLike | number | string
  }

  export type map_pedido_detalheUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: fct_pedidoUpdateOneRequiredWithoutMap_detalheNestedInput
    produto?: dim_produtoUpdateOneRequiredWithoutMap_detalheNestedInput
  }

  export type map_pedido_detalheUncheckedUpdateInput = {
    map_id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type map_pedido_detalheCreateManyInput = {
    map_id?: number
    pedido_id: number
    produto_id: number
    quantidade: number
    preco_unitario: Decimal | DecimalJsLike | number | string
  }

  export type map_pedido_detalheUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type map_pedido_detalheUncheckedUpdateManyInput = {
    map_id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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

  export type Fct_pedidoListRelationFilter = {
    every?: fct_pedidoWhereInput
    some?: fct_pedidoWhereInput
    none?: fct_pedidoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type fct_pedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dim_clienteCountOrderByAggregateInput = {
    cliente_id?: SortOrder
    nome?: SortOrder
    cpf_cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    data_cadastro?: SortOrder
  }

  export type dim_clienteAvgOrderByAggregateInput = {
    cliente_id?: SortOrder
  }

  export type dim_clienteMaxOrderByAggregateInput = {
    cliente_id?: SortOrder
    nome?: SortOrder
    cpf_cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    data_cadastro?: SortOrder
  }

  export type dim_clienteMinOrderByAggregateInput = {
    cliente_id?: SortOrder
    nome?: SortOrder
    cpf_cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    data_cadastro?: SortOrder
  }

  export type dim_clienteSumOrderByAggregateInput = {
    cliente_id?: SortOrder
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

  export type Dim_insumoListRelationFilter = {
    every?: dim_insumoWhereInput
    some?: dim_insumoWhereInput
    none?: dim_insumoWhereInput
  }

  export type Dim_produtoListRelationFilter = {
    every?: dim_produtoWhereInput
    some?: dim_produtoWhereInput
    none?: dim_produtoWhereInput
  }

  export type dim_insumoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dim_produtoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dim_fornecedorCountOrderByAggregateInput = {
    fornecedor_id?: SortOrder
    nome_fantasia?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    data_cadastro?: SortOrder
  }

  export type dim_fornecedorAvgOrderByAggregateInput = {
    fornecedor_id?: SortOrder
  }

  export type dim_fornecedorMaxOrderByAggregateInput = {
    fornecedor_id?: SortOrder
    nome_fantasia?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    data_cadastro?: SortOrder
  }

  export type dim_fornecedorMinOrderByAggregateInput = {
    fornecedor_id?: SortOrder
    nome_fantasia?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    data_cadastro?: SortOrder
  }

  export type dim_fornecedorSumOrderByAggregateInput = {
    fornecedor_id?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type Dim_fornecedorNullableScalarRelationFilter = {
    is?: dim_fornecedorWhereInput | null
    isNot?: dim_fornecedorWhereInput | null
  }

  export type Map_produto_composicaoListRelationFilter = {
    every?: map_produto_composicaoWhereInput
    some?: map_produto_composicaoWhereInput
    none?: map_produto_composicaoWhereInput
  }

  export type map_produto_composicaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dim_insumoCountOrderByAggregateInput = {
    insumo_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    unidade_medida?: SortOrder
    preco_unitario?: SortOrder
    fornecedor_id?: SortOrder
  }

  export type dim_insumoAvgOrderByAggregateInput = {
    insumo_id?: SortOrder
    preco_unitario?: SortOrder
    fornecedor_id?: SortOrder
  }

  export type dim_insumoMaxOrderByAggregateInput = {
    insumo_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    unidade_medida?: SortOrder
    preco_unitario?: SortOrder
    fornecedor_id?: SortOrder
  }

  export type dim_insumoMinOrderByAggregateInput = {
    insumo_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    unidade_medida?: SortOrder
    preco_unitario?: SortOrder
    fornecedor_id?: SortOrder
  }

  export type dim_insumoSumOrderByAggregateInput = {
    insumo_id?: SortOrder
    preco_unitario?: SortOrder
    fornecedor_id?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type Map_pedido_detalheListRelationFilter = {
    every?: map_pedido_detalheWhereInput
    some?: map_pedido_detalheWhereInput
    none?: map_pedido_detalheWhereInput
  }

  export type map_pedido_detalheOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dim_produtoCountOrderByAggregateInput = {
    produto_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco_unitario?: SortOrder
    estoque?: SortOrder
    unidade_medida?: SortOrder
    fornecedor_id?: SortOrder
  }

  export type dim_produtoAvgOrderByAggregateInput = {
    produto_id?: SortOrder
    preco_unitario?: SortOrder
    estoque?: SortOrder
    fornecedor_id?: SortOrder
  }

  export type dim_produtoMaxOrderByAggregateInput = {
    produto_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco_unitario?: SortOrder
    estoque?: SortOrder
    unidade_medida?: SortOrder
    fornecedor_id?: SortOrder
  }

  export type dim_produtoMinOrderByAggregateInput = {
    produto_id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco_unitario?: SortOrder
    estoque?: SortOrder
    unidade_medida?: SortOrder
    fornecedor_id?: SortOrder
  }

  export type dim_produtoSumOrderByAggregateInput = {
    produto_id?: SortOrder
    preco_unitario?: SortOrder
    estoque?: SortOrder
    fornecedor_id?: SortOrder
  }

  export type Dim_clienteNullableScalarRelationFilter = {
    is?: dim_clienteWhereInput | null
    isNot?: dim_clienteWhereInput | null
  }

  export type fct_pedidoCountOrderByAggregateInput = {
    pedido_id?: SortOrder
    cliente_id?: SortOrder
    data_pedido?: SortOrder
    data_entrega?: SortOrder
    status?: SortOrder
    valor_total?: SortOrder
  }

  export type fct_pedidoAvgOrderByAggregateInput = {
    pedido_id?: SortOrder
    cliente_id?: SortOrder
    valor_total?: SortOrder
  }

  export type fct_pedidoMaxOrderByAggregateInput = {
    pedido_id?: SortOrder
    cliente_id?: SortOrder
    data_pedido?: SortOrder
    data_entrega?: SortOrder
    status?: SortOrder
    valor_total?: SortOrder
  }

  export type fct_pedidoMinOrderByAggregateInput = {
    pedido_id?: SortOrder
    cliente_id?: SortOrder
    data_pedido?: SortOrder
    data_entrega?: SortOrder
    status?: SortOrder
    valor_total?: SortOrder
  }

  export type fct_pedidoSumOrderByAggregateInput = {
    pedido_id?: SortOrder
    cliente_id?: SortOrder
    valor_total?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Dim_insumoNullableScalarRelationFilter = {
    is?: dim_insumoWhereInput | null
    isNot?: dim_insumoWhereInput | null
  }

  export type Dim_produtoNullableScalarRelationFilter = {
    is?: dim_produtoWhereInput | null
    isNot?: dim_produtoWhereInput | null
  }

  export type map_produto_composicaoProduto_idInsumo_idCompoundUniqueInput = {
    produto_id: number
    insumo_id: number
  }

  export type map_produto_composicaoCountOrderByAggregateInput = {
    map_id?: SortOrder
    produto_id?: SortOrder
    insumo_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type map_produto_composicaoAvgOrderByAggregateInput = {
    map_id?: SortOrder
    produto_id?: SortOrder
    insumo_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type map_produto_composicaoMaxOrderByAggregateInput = {
    map_id?: SortOrder
    produto_id?: SortOrder
    insumo_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type map_produto_composicaoMinOrderByAggregateInput = {
    map_id?: SortOrder
    produto_id?: SortOrder
    insumo_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type map_produto_composicaoSumOrderByAggregateInput = {
    map_id?: SortOrder
    produto_id?: SortOrder
    insumo_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Fct_pedidoScalarRelationFilter = {
    is?: fct_pedidoWhereInput
    isNot?: fct_pedidoWhereInput
  }

  export type Dim_produtoScalarRelationFilter = {
    is?: dim_produtoWhereInput
    isNot?: dim_produtoWhereInput
  }

  export type map_pedido_detalhePedido_idProduto_idCompoundUniqueInput = {
    pedido_id: number
    produto_id: number
  }

  export type map_pedido_detalheCountOrderByAggregateInput = {
    map_id?: SortOrder
    pedido_id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type map_pedido_detalheAvgOrderByAggregateInput = {
    map_id?: SortOrder
    pedido_id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type map_pedido_detalheMaxOrderByAggregateInput = {
    map_id?: SortOrder
    pedido_id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type map_pedido_detalheMinOrderByAggregateInput = {
    map_id?: SortOrder
    pedido_id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type map_pedido_detalheSumOrderByAggregateInput = {
    map_id?: SortOrder
    pedido_id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type fct_pedidoCreateNestedManyWithoutClienteInput = {
    create?: XOR<fct_pedidoCreateWithoutClienteInput, fct_pedidoUncheckedCreateWithoutClienteInput> | fct_pedidoCreateWithoutClienteInput[] | fct_pedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: fct_pedidoCreateOrConnectWithoutClienteInput | fct_pedidoCreateOrConnectWithoutClienteInput[]
    createMany?: fct_pedidoCreateManyClienteInputEnvelope
    connect?: fct_pedidoWhereUniqueInput | fct_pedidoWhereUniqueInput[]
  }

  export type fct_pedidoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<fct_pedidoCreateWithoutClienteInput, fct_pedidoUncheckedCreateWithoutClienteInput> | fct_pedidoCreateWithoutClienteInput[] | fct_pedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: fct_pedidoCreateOrConnectWithoutClienteInput | fct_pedidoCreateOrConnectWithoutClienteInput[]
    createMany?: fct_pedidoCreateManyClienteInputEnvelope
    connect?: fct_pedidoWhereUniqueInput | fct_pedidoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type fct_pedidoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<fct_pedidoCreateWithoutClienteInput, fct_pedidoUncheckedCreateWithoutClienteInput> | fct_pedidoCreateWithoutClienteInput[] | fct_pedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: fct_pedidoCreateOrConnectWithoutClienteInput | fct_pedidoCreateOrConnectWithoutClienteInput[]
    upsert?: fct_pedidoUpsertWithWhereUniqueWithoutClienteInput | fct_pedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: fct_pedidoCreateManyClienteInputEnvelope
    set?: fct_pedidoWhereUniqueInput | fct_pedidoWhereUniqueInput[]
    disconnect?: fct_pedidoWhereUniqueInput | fct_pedidoWhereUniqueInput[]
    delete?: fct_pedidoWhereUniqueInput | fct_pedidoWhereUniqueInput[]
    connect?: fct_pedidoWhereUniqueInput | fct_pedidoWhereUniqueInput[]
    update?: fct_pedidoUpdateWithWhereUniqueWithoutClienteInput | fct_pedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: fct_pedidoUpdateManyWithWhereWithoutClienteInput | fct_pedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: fct_pedidoScalarWhereInput | fct_pedidoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type fct_pedidoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<fct_pedidoCreateWithoutClienteInput, fct_pedidoUncheckedCreateWithoutClienteInput> | fct_pedidoCreateWithoutClienteInput[] | fct_pedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: fct_pedidoCreateOrConnectWithoutClienteInput | fct_pedidoCreateOrConnectWithoutClienteInput[]
    upsert?: fct_pedidoUpsertWithWhereUniqueWithoutClienteInput | fct_pedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: fct_pedidoCreateManyClienteInputEnvelope
    set?: fct_pedidoWhereUniqueInput | fct_pedidoWhereUniqueInput[]
    disconnect?: fct_pedidoWhereUniqueInput | fct_pedidoWhereUniqueInput[]
    delete?: fct_pedidoWhereUniqueInput | fct_pedidoWhereUniqueInput[]
    connect?: fct_pedidoWhereUniqueInput | fct_pedidoWhereUniqueInput[]
    update?: fct_pedidoUpdateWithWhereUniqueWithoutClienteInput | fct_pedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: fct_pedidoUpdateManyWithWhereWithoutClienteInput | fct_pedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: fct_pedidoScalarWhereInput | fct_pedidoScalarWhereInput[]
  }

  export type dim_insumoCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<dim_insumoCreateWithoutFornecedorInput, dim_insumoUncheckedCreateWithoutFornecedorInput> | dim_insumoCreateWithoutFornecedorInput[] | dim_insumoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: dim_insumoCreateOrConnectWithoutFornecedorInput | dim_insumoCreateOrConnectWithoutFornecedorInput[]
    createMany?: dim_insumoCreateManyFornecedorInputEnvelope
    connect?: dim_insumoWhereUniqueInput | dim_insumoWhereUniqueInput[]
  }

  export type dim_produtoCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<dim_produtoCreateWithoutFornecedorInput, dim_produtoUncheckedCreateWithoutFornecedorInput> | dim_produtoCreateWithoutFornecedorInput[] | dim_produtoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: dim_produtoCreateOrConnectWithoutFornecedorInput | dim_produtoCreateOrConnectWithoutFornecedorInput[]
    createMany?: dim_produtoCreateManyFornecedorInputEnvelope
    connect?: dim_produtoWhereUniqueInput | dim_produtoWhereUniqueInput[]
  }

  export type dim_insumoUncheckedCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<dim_insumoCreateWithoutFornecedorInput, dim_insumoUncheckedCreateWithoutFornecedorInput> | dim_insumoCreateWithoutFornecedorInput[] | dim_insumoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: dim_insumoCreateOrConnectWithoutFornecedorInput | dim_insumoCreateOrConnectWithoutFornecedorInput[]
    createMany?: dim_insumoCreateManyFornecedorInputEnvelope
    connect?: dim_insumoWhereUniqueInput | dim_insumoWhereUniqueInput[]
  }

  export type dim_produtoUncheckedCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<dim_produtoCreateWithoutFornecedorInput, dim_produtoUncheckedCreateWithoutFornecedorInput> | dim_produtoCreateWithoutFornecedorInput[] | dim_produtoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: dim_produtoCreateOrConnectWithoutFornecedorInput | dim_produtoCreateOrConnectWithoutFornecedorInput[]
    createMany?: dim_produtoCreateManyFornecedorInputEnvelope
    connect?: dim_produtoWhereUniqueInput | dim_produtoWhereUniqueInput[]
  }

  export type dim_insumoUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<dim_insumoCreateWithoutFornecedorInput, dim_insumoUncheckedCreateWithoutFornecedorInput> | dim_insumoCreateWithoutFornecedorInput[] | dim_insumoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: dim_insumoCreateOrConnectWithoutFornecedorInput | dim_insumoCreateOrConnectWithoutFornecedorInput[]
    upsert?: dim_insumoUpsertWithWhereUniqueWithoutFornecedorInput | dim_insumoUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: dim_insumoCreateManyFornecedorInputEnvelope
    set?: dim_insumoWhereUniqueInput | dim_insumoWhereUniqueInput[]
    disconnect?: dim_insumoWhereUniqueInput | dim_insumoWhereUniqueInput[]
    delete?: dim_insumoWhereUniqueInput | dim_insumoWhereUniqueInput[]
    connect?: dim_insumoWhereUniqueInput | dim_insumoWhereUniqueInput[]
    update?: dim_insumoUpdateWithWhereUniqueWithoutFornecedorInput | dim_insumoUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: dim_insumoUpdateManyWithWhereWithoutFornecedorInput | dim_insumoUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: dim_insumoScalarWhereInput | dim_insumoScalarWhereInput[]
  }

  export type dim_produtoUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<dim_produtoCreateWithoutFornecedorInput, dim_produtoUncheckedCreateWithoutFornecedorInput> | dim_produtoCreateWithoutFornecedorInput[] | dim_produtoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: dim_produtoCreateOrConnectWithoutFornecedorInput | dim_produtoCreateOrConnectWithoutFornecedorInput[]
    upsert?: dim_produtoUpsertWithWhereUniqueWithoutFornecedorInput | dim_produtoUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: dim_produtoCreateManyFornecedorInputEnvelope
    set?: dim_produtoWhereUniqueInput | dim_produtoWhereUniqueInput[]
    disconnect?: dim_produtoWhereUniqueInput | dim_produtoWhereUniqueInput[]
    delete?: dim_produtoWhereUniqueInput | dim_produtoWhereUniqueInput[]
    connect?: dim_produtoWhereUniqueInput | dim_produtoWhereUniqueInput[]
    update?: dim_produtoUpdateWithWhereUniqueWithoutFornecedorInput | dim_produtoUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: dim_produtoUpdateManyWithWhereWithoutFornecedorInput | dim_produtoUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: dim_produtoScalarWhereInput | dim_produtoScalarWhereInput[]
  }

  export type dim_insumoUncheckedUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<dim_insumoCreateWithoutFornecedorInput, dim_insumoUncheckedCreateWithoutFornecedorInput> | dim_insumoCreateWithoutFornecedorInput[] | dim_insumoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: dim_insumoCreateOrConnectWithoutFornecedorInput | dim_insumoCreateOrConnectWithoutFornecedorInput[]
    upsert?: dim_insumoUpsertWithWhereUniqueWithoutFornecedorInput | dim_insumoUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: dim_insumoCreateManyFornecedorInputEnvelope
    set?: dim_insumoWhereUniqueInput | dim_insumoWhereUniqueInput[]
    disconnect?: dim_insumoWhereUniqueInput | dim_insumoWhereUniqueInput[]
    delete?: dim_insumoWhereUniqueInput | dim_insumoWhereUniqueInput[]
    connect?: dim_insumoWhereUniqueInput | dim_insumoWhereUniqueInput[]
    update?: dim_insumoUpdateWithWhereUniqueWithoutFornecedorInput | dim_insumoUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: dim_insumoUpdateManyWithWhereWithoutFornecedorInput | dim_insumoUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: dim_insumoScalarWhereInput | dim_insumoScalarWhereInput[]
  }

  export type dim_produtoUncheckedUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<dim_produtoCreateWithoutFornecedorInput, dim_produtoUncheckedCreateWithoutFornecedorInput> | dim_produtoCreateWithoutFornecedorInput[] | dim_produtoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: dim_produtoCreateOrConnectWithoutFornecedorInput | dim_produtoCreateOrConnectWithoutFornecedorInput[]
    upsert?: dim_produtoUpsertWithWhereUniqueWithoutFornecedorInput | dim_produtoUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: dim_produtoCreateManyFornecedorInputEnvelope
    set?: dim_produtoWhereUniqueInput | dim_produtoWhereUniqueInput[]
    disconnect?: dim_produtoWhereUniqueInput | dim_produtoWhereUniqueInput[]
    delete?: dim_produtoWhereUniqueInput | dim_produtoWhereUniqueInput[]
    connect?: dim_produtoWhereUniqueInput | dim_produtoWhereUniqueInput[]
    update?: dim_produtoUpdateWithWhereUniqueWithoutFornecedorInput | dim_produtoUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: dim_produtoUpdateManyWithWhereWithoutFornecedorInput | dim_produtoUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: dim_produtoScalarWhereInput | dim_produtoScalarWhereInput[]
  }

  export type dim_fornecedorCreateNestedOneWithoutDim_insumoInput = {
    create?: XOR<dim_fornecedorCreateWithoutDim_insumoInput, dim_fornecedorUncheckedCreateWithoutDim_insumoInput>
    connectOrCreate?: dim_fornecedorCreateOrConnectWithoutDim_insumoInput
    connect?: dim_fornecedorWhereUniqueInput
  }

  export type map_produto_composicaoCreateNestedManyWithoutInsumoInput = {
    create?: XOR<map_produto_composicaoCreateWithoutInsumoInput, map_produto_composicaoUncheckedCreateWithoutInsumoInput> | map_produto_composicaoCreateWithoutInsumoInput[] | map_produto_composicaoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: map_produto_composicaoCreateOrConnectWithoutInsumoInput | map_produto_composicaoCreateOrConnectWithoutInsumoInput[]
    createMany?: map_produto_composicaoCreateManyInsumoInputEnvelope
    connect?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
  }

  export type map_produto_composicaoUncheckedCreateNestedManyWithoutInsumoInput = {
    create?: XOR<map_produto_composicaoCreateWithoutInsumoInput, map_produto_composicaoUncheckedCreateWithoutInsumoInput> | map_produto_composicaoCreateWithoutInsumoInput[] | map_produto_composicaoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: map_produto_composicaoCreateOrConnectWithoutInsumoInput | map_produto_composicaoCreateOrConnectWithoutInsumoInput[]
    createMany?: map_produto_composicaoCreateManyInsumoInputEnvelope
    connect?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type dim_fornecedorUpdateOneWithoutDim_insumoNestedInput = {
    create?: XOR<dim_fornecedorCreateWithoutDim_insumoInput, dim_fornecedorUncheckedCreateWithoutDim_insumoInput>
    connectOrCreate?: dim_fornecedorCreateOrConnectWithoutDim_insumoInput
    upsert?: dim_fornecedorUpsertWithoutDim_insumoInput
    disconnect?: dim_fornecedorWhereInput | boolean
    delete?: dim_fornecedorWhereInput | boolean
    connect?: dim_fornecedorWhereUniqueInput
    update?: XOR<XOR<dim_fornecedorUpdateToOneWithWhereWithoutDim_insumoInput, dim_fornecedorUpdateWithoutDim_insumoInput>, dim_fornecedorUncheckedUpdateWithoutDim_insumoInput>
  }

  export type map_produto_composicaoUpdateManyWithoutInsumoNestedInput = {
    create?: XOR<map_produto_composicaoCreateWithoutInsumoInput, map_produto_composicaoUncheckedCreateWithoutInsumoInput> | map_produto_composicaoCreateWithoutInsumoInput[] | map_produto_composicaoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: map_produto_composicaoCreateOrConnectWithoutInsumoInput | map_produto_composicaoCreateOrConnectWithoutInsumoInput[]
    upsert?: map_produto_composicaoUpsertWithWhereUniqueWithoutInsumoInput | map_produto_composicaoUpsertWithWhereUniqueWithoutInsumoInput[]
    createMany?: map_produto_composicaoCreateManyInsumoInputEnvelope
    set?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
    disconnect?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
    delete?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
    connect?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
    update?: map_produto_composicaoUpdateWithWhereUniqueWithoutInsumoInput | map_produto_composicaoUpdateWithWhereUniqueWithoutInsumoInput[]
    updateMany?: map_produto_composicaoUpdateManyWithWhereWithoutInsumoInput | map_produto_composicaoUpdateManyWithWhereWithoutInsumoInput[]
    deleteMany?: map_produto_composicaoScalarWhereInput | map_produto_composicaoScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type map_produto_composicaoUncheckedUpdateManyWithoutInsumoNestedInput = {
    create?: XOR<map_produto_composicaoCreateWithoutInsumoInput, map_produto_composicaoUncheckedCreateWithoutInsumoInput> | map_produto_composicaoCreateWithoutInsumoInput[] | map_produto_composicaoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: map_produto_composicaoCreateOrConnectWithoutInsumoInput | map_produto_composicaoCreateOrConnectWithoutInsumoInput[]
    upsert?: map_produto_composicaoUpsertWithWhereUniqueWithoutInsumoInput | map_produto_composicaoUpsertWithWhereUniqueWithoutInsumoInput[]
    createMany?: map_produto_composicaoCreateManyInsumoInputEnvelope
    set?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
    disconnect?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
    delete?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
    connect?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
    update?: map_produto_composicaoUpdateWithWhereUniqueWithoutInsumoInput | map_produto_composicaoUpdateWithWhereUniqueWithoutInsumoInput[]
    updateMany?: map_produto_composicaoUpdateManyWithWhereWithoutInsumoInput | map_produto_composicaoUpdateManyWithWhereWithoutInsumoInput[]
    deleteMany?: map_produto_composicaoScalarWhereInput | map_produto_composicaoScalarWhereInput[]
  }

  export type dim_fornecedorCreateNestedOneWithoutDim_produtoInput = {
    create?: XOR<dim_fornecedorCreateWithoutDim_produtoInput, dim_fornecedorUncheckedCreateWithoutDim_produtoInput>
    connectOrCreate?: dim_fornecedorCreateOrConnectWithoutDim_produtoInput
    connect?: dim_fornecedorWhereUniqueInput
  }

  export type map_pedido_detalheCreateNestedManyWithoutProdutoInput = {
    create?: XOR<map_pedido_detalheCreateWithoutProdutoInput, map_pedido_detalheUncheckedCreateWithoutProdutoInput> | map_pedido_detalheCreateWithoutProdutoInput[] | map_pedido_detalheUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: map_pedido_detalheCreateOrConnectWithoutProdutoInput | map_pedido_detalheCreateOrConnectWithoutProdutoInput[]
    createMany?: map_pedido_detalheCreateManyProdutoInputEnvelope
    connect?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
  }

  export type map_produto_composicaoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<map_produto_composicaoCreateWithoutProdutoInput, map_produto_composicaoUncheckedCreateWithoutProdutoInput> | map_produto_composicaoCreateWithoutProdutoInput[] | map_produto_composicaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: map_produto_composicaoCreateOrConnectWithoutProdutoInput | map_produto_composicaoCreateOrConnectWithoutProdutoInput[]
    createMany?: map_produto_composicaoCreateManyProdutoInputEnvelope
    connect?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
  }

  export type map_pedido_detalheUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<map_pedido_detalheCreateWithoutProdutoInput, map_pedido_detalheUncheckedCreateWithoutProdutoInput> | map_pedido_detalheCreateWithoutProdutoInput[] | map_pedido_detalheUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: map_pedido_detalheCreateOrConnectWithoutProdutoInput | map_pedido_detalheCreateOrConnectWithoutProdutoInput[]
    createMany?: map_pedido_detalheCreateManyProdutoInputEnvelope
    connect?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
  }

  export type map_produto_composicaoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<map_produto_composicaoCreateWithoutProdutoInput, map_produto_composicaoUncheckedCreateWithoutProdutoInput> | map_produto_composicaoCreateWithoutProdutoInput[] | map_produto_composicaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: map_produto_composicaoCreateOrConnectWithoutProdutoInput | map_produto_composicaoCreateOrConnectWithoutProdutoInput[]
    createMany?: map_produto_composicaoCreateManyProdutoInputEnvelope
    connect?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
  }

  export type dim_fornecedorUpdateOneWithoutDim_produtoNestedInput = {
    create?: XOR<dim_fornecedorCreateWithoutDim_produtoInput, dim_fornecedorUncheckedCreateWithoutDim_produtoInput>
    connectOrCreate?: dim_fornecedorCreateOrConnectWithoutDim_produtoInput
    upsert?: dim_fornecedorUpsertWithoutDim_produtoInput
    disconnect?: dim_fornecedorWhereInput | boolean
    delete?: dim_fornecedorWhereInput | boolean
    connect?: dim_fornecedorWhereUniqueInput
    update?: XOR<XOR<dim_fornecedorUpdateToOneWithWhereWithoutDim_produtoInput, dim_fornecedorUpdateWithoutDim_produtoInput>, dim_fornecedorUncheckedUpdateWithoutDim_produtoInput>
  }

  export type map_pedido_detalheUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<map_pedido_detalheCreateWithoutProdutoInput, map_pedido_detalheUncheckedCreateWithoutProdutoInput> | map_pedido_detalheCreateWithoutProdutoInput[] | map_pedido_detalheUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: map_pedido_detalheCreateOrConnectWithoutProdutoInput | map_pedido_detalheCreateOrConnectWithoutProdutoInput[]
    upsert?: map_pedido_detalheUpsertWithWhereUniqueWithoutProdutoInput | map_pedido_detalheUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: map_pedido_detalheCreateManyProdutoInputEnvelope
    set?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
    disconnect?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
    delete?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
    connect?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
    update?: map_pedido_detalheUpdateWithWhereUniqueWithoutProdutoInput | map_pedido_detalheUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: map_pedido_detalheUpdateManyWithWhereWithoutProdutoInput | map_pedido_detalheUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: map_pedido_detalheScalarWhereInput | map_pedido_detalheScalarWhereInput[]
  }

  export type map_produto_composicaoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<map_produto_composicaoCreateWithoutProdutoInput, map_produto_composicaoUncheckedCreateWithoutProdutoInput> | map_produto_composicaoCreateWithoutProdutoInput[] | map_produto_composicaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: map_produto_composicaoCreateOrConnectWithoutProdutoInput | map_produto_composicaoCreateOrConnectWithoutProdutoInput[]
    upsert?: map_produto_composicaoUpsertWithWhereUniqueWithoutProdutoInput | map_produto_composicaoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: map_produto_composicaoCreateManyProdutoInputEnvelope
    set?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
    disconnect?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
    delete?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
    connect?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
    update?: map_produto_composicaoUpdateWithWhereUniqueWithoutProdutoInput | map_produto_composicaoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: map_produto_composicaoUpdateManyWithWhereWithoutProdutoInput | map_produto_composicaoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: map_produto_composicaoScalarWhereInput | map_produto_composicaoScalarWhereInput[]
  }

  export type map_pedido_detalheUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<map_pedido_detalheCreateWithoutProdutoInput, map_pedido_detalheUncheckedCreateWithoutProdutoInput> | map_pedido_detalheCreateWithoutProdutoInput[] | map_pedido_detalheUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: map_pedido_detalheCreateOrConnectWithoutProdutoInput | map_pedido_detalheCreateOrConnectWithoutProdutoInput[]
    upsert?: map_pedido_detalheUpsertWithWhereUniqueWithoutProdutoInput | map_pedido_detalheUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: map_pedido_detalheCreateManyProdutoInputEnvelope
    set?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
    disconnect?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
    delete?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
    connect?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
    update?: map_pedido_detalheUpdateWithWhereUniqueWithoutProdutoInput | map_pedido_detalheUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: map_pedido_detalheUpdateManyWithWhereWithoutProdutoInput | map_pedido_detalheUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: map_pedido_detalheScalarWhereInput | map_pedido_detalheScalarWhereInput[]
  }

  export type map_produto_composicaoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<map_produto_composicaoCreateWithoutProdutoInput, map_produto_composicaoUncheckedCreateWithoutProdutoInput> | map_produto_composicaoCreateWithoutProdutoInput[] | map_produto_composicaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: map_produto_composicaoCreateOrConnectWithoutProdutoInput | map_produto_composicaoCreateOrConnectWithoutProdutoInput[]
    upsert?: map_produto_composicaoUpsertWithWhereUniqueWithoutProdutoInput | map_produto_composicaoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: map_produto_composicaoCreateManyProdutoInputEnvelope
    set?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
    disconnect?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
    delete?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
    connect?: map_produto_composicaoWhereUniqueInput | map_produto_composicaoWhereUniqueInput[]
    update?: map_produto_composicaoUpdateWithWhereUniqueWithoutProdutoInput | map_produto_composicaoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: map_produto_composicaoUpdateManyWithWhereWithoutProdutoInput | map_produto_composicaoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: map_produto_composicaoScalarWhereInput | map_produto_composicaoScalarWhereInput[]
  }

  export type dim_clienteCreateNestedOneWithoutFct_pedidoInput = {
    create?: XOR<dim_clienteCreateWithoutFct_pedidoInput, dim_clienteUncheckedCreateWithoutFct_pedidoInput>
    connectOrCreate?: dim_clienteCreateOrConnectWithoutFct_pedidoInput
    connect?: dim_clienteWhereUniqueInput
  }

  export type map_pedido_detalheCreateNestedManyWithoutPedidoInput = {
    create?: XOR<map_pedido_detalheCreateWithoutPedidoInput, map_pedido_detalheUncheckedCreateWithoutPedidoInput> | map_pedido_detalheCreateWithoutPedidoInput[] | map_pedido_detalheUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: map_pedido_detalheCreateOrConnectWithoutPedidoInput | map_pedido_detalheCreateOrConnectWithoutPedidoInput[]
    createMany?: map_pedido_detalheCreateManyPedidoInputEnvelope
    connect?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
  }

  export type map_pedido_detalheUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<map_pedido_detalheCreateWithoutPedidoInput, map_pedido_detalheUncheckedCreateWithoutPedidoInput> | map_pedido_detalheCreateWithoutPedidoInput[] | map_pedido_detalheUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: map_pedido_detalheCreateOrConnectWithoutPedidoInput | map_pedido_detalheCreateOrConnectWithoutPedidoInput[]
    createMany?: map_pedido_detalheCreateManyPedidoInputEnvelope
    connect?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
  }

  export type dim_clienteUpdateOneWithoutFct_pedidoNestedInput = {
    create?: XOR<dim_clienteCreateWithoutFct_pedidoInput, dim_clienteUncheckedCreateWithoutFct_pedidoInput>
    connectOrCreate?: dim_clienteCreateOrConnectWithoutFct_pedidoInput
    upsert?: dim_clienteUpsertWithoutFct_pedidoInput
    disconnect?: dim_clienteWhereInput | boolean
    delete?: dim_clienteWhereInput | boolean
    connect?: dim_clienteWhereUniqueInput
    update?: XOR<XOR<dim_clienteUpdateToOneWithWhereWithoutFct_pedidoInput, dim_clienteUpdateWithoutFct_pedidoInput>, dim_clienteUncheckedUpdateWithoutFct_pedidoInput>
  }

  export type map_pedido_detalheUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<map_pedido_detalheCreateWithoutPedidoInput, map_pedido_detalheUncheckedCreateWithoutPedidoInput> | map_pedido_detalheCreateWithoutPedidoInput[] | map_pedido_detalheUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: map_pedido_detalheCreateOrConnectWithoutPedidoInput | map_pedido_detalheCreateOrConnectWithoutPedidoInput[]
    upsert?: map_pedido_detalheUpsertWithWhereUniqueWithoutPedidoInput | map_pedido_detalheUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: map_pedido_detalheCreateManyPedidoInputEnvelope
    set?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
    disconnect?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
    delete?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
    connect?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
    update?: map_pedido_detalheUpdateWithWhereUniqueWithoutPedidoInput | map_pedido_detalheUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: map_pedido_detalheUpdateManyWithWhereWithoutPedidoInput | map_pedido_detalheUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: map_pedido_detalheScalarWhereInput | map_pedido_detalheScalarWhereInput[]
  }

  export type map_pedido_detalheUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<map_pedido_detalheCreateWithoutPedidoInput, map_pedido_detalheUncheckedCreateWithoutPedidoInput> | map_pedido_detalheCreateWithoutPedidoInput[] | map_pedido_detalheUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: map_pedido_detalheCreateOrConnectWithoutPedidoInput | map_pedido_detalheCreateOrConnectWithoutPedidoInput[]
    upsert?: map_pedido_detalheUpsertWithWhereUniqueWithoutPedidoInput | map_pedido_detalheUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: map_pedido_detalheCreateManyPedidoInputEnvelope
    set?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
    disconnect?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
    delete?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
    connect?: map_pedido_detalheWhereUniqueInput | map_pedido_detalheWhereUniqueInput[]
    update?: map_pedido_detalheUpdateWithWhereUniqueWithoutPedidoInput | map_pedido_detalheUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: map_pedido_detalheUpdateManyWithWhereWithoutPedidoInput | map_pedido_detalheUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: map_pedido_detalheScalarWhereInput | map_pedido_detalheScalarWhereInput[]
  }

  export type dim_insumoCreateNestedOneWithoutMap_composicaoInput = {
    create?: XOR<dim_insumoCreateWithoutMap_composicaoInput, dim_insumoUncheckedCreateWithoutMap_composicaoInput>
    connectOrCreate?: dim_insumoCreateOrConnectWithoutMap_composicaoInput
    connect?: dim_insumoWhereUniqueInput
  }

  export type dim_produtoCreateNestedOneWithoutMap_composicaoInput = {
    create?: XOR<dim_produtoCreateWithoutMap_composicaoInput, dim_produtoUncheckedCreateWithoutMap_composicaoInput>
    connectOrCreate?: dim_produtoCreateOrConnectWithoutMap_composicaoInput
    connect?: dim_produtoWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type dim_insumoUpdateOneWithoutMap_composicaoNestedInput = {
    create?: XOR<dim_insumoCreateWithoutMap_composicaoInput, dim_insumoUncheckedCreateWithoutMap_composicaoInput>
    connectOrCreate?: dim_insumoCreateOrConnectWithoutMap_composicaoInput
    upsert?: dim_insumoUpsertWithoutMap_composicaoInput
    disconnect?: dim_insumoWhereInput | boolean
    delete?: dim_insumoWhereInput | boolean
    connect?: dim_insumoWhereUniqueInput
    update?: XOR<XOR<dim_insumoUpdateToOneWithWhereWithoutMap_composicaoInput, dim_insumoUpdateWithoutMap_composicaoInput>, dim_insumoUncheckedUpdateWithoutMap_composicaoInput>
  }

  export type dim_produtoUpdateOneWithoutMap_composicaoNestedInput = {
    create?: XOR<dim_produtoCreateWithoutMap_composicaoInput, dim_produtoUncheckedCreateWithoutMap_composicaoInput>
    connectOrCreate?: dim_produtoCreateOrConnectWithoutMap_composicaoInput
    upsert?: dim_produtoUpsertWithoutMap_composicaoInput
    disconnect?: dim_produtoWhereInput | boolean
    delete?: dim_produtoWhereInput | boolean
    connect?: dim_produtoWhereUniqueInput
    update?: XOR<XOR<dim_produtoUpdateToOneWithWhereWithoutMap_composicaoInput, dim_produtoUpdateWithoutMap_composicaoInput>, dim_produtoUncheckedUpdateWithoutMap_composicaoInput>
  }

  export type fct_pedidoCreateNestedOneWithoutMap_detalheInput = {
    create?: XOR<fct_pedidoCreateWithoutMap_detalheInput, fct_pedidoUncheckedCreateWithoutMap_detalheInput>
    connectOrCreate?: fct_pedidoCreateOrConnectWithoutMap_detalheInput
    connect?: fct_pedidoWhereUniqueInput
  }

  export type dim_produtoCreateNestedOneWithoutMap_detalheInput = {
    create?: XOR<dim_produtoCreateWithoutMap_detalheInput, dim_produtoUncheckedCreateWithoutMap_detalheInput>
    connectOrCreate?: dim_produtoCreateOrConnectWithoutMap_detalheInput
    connect?: dim_produtoWhereUniqueInput
  }

  export type fct_pedidoUpdateOneRequiredWithoutMap_detalheNestedInput = {
    create?: XOR<fct_pedidoCreateWithoutMap_detalheInput, fct_pedidoUncheckedCreateWithoutMap_detalheInput>
    connectOrCreate?: fct_pedidoCreateOrConnectWithoutMap_detalheInput
    upsert?: fct_pedidoUpsertWithoutMap_detalheInput
    connect?: fct_pedidoWhereUniqueInput
    update?: XOR<XOR<fct_pedidoUpdateToOneWithWhereWithoutMap_detalheInput, fct_pedidoUpdateWithoutMap_detalheInput>, fct_pedidoUncheckedUpdateWithoutMap_detalheInput>
  }

  export type dim_produtoUpdateOneRequiredWithoutMap_detalheNestedInput = {
    create?: XOR<dim_produtoCreateWithoutMap_detalheInput, dim_produtoUncheckedCreateWithoutMap_detalheInput>
    connectOrCreate?: dim_produtoCreateOrConnectWithoutMap_detalheInput
    upsert?: dim_produtoUpsertWithoutMap_detalheInput
    connect?: dim_produtoWhereUniqueInput
    update?: XOR<XOR<dim_produtoUpdateToOneWithWhereWithoutMap_detalheInput, dim_produtoUpdateWithoutMap_detalheInput>, dim_produtoUncheckedUpdateWithoutMap_detalheInput>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type fct_pedidoCreateWithoutClienteInput = {
    data_pedido?: Date | string | null
    data_entrega?: Date | string | null
    status: string
    valor_total?: Decimal | DecimalJsLike | number | string | null
    map_detalhe?: map_pedido_detalheCreateNestedManyWithoutPedidoInput
  }

  export type fct_pedidoUncheckedCreateWithoutClienteInput = {
    pedido_id?: number
    data_pedido?: Date | string | null
    data_entrega?: Date | string | null
    status: string
    valor_total?: Decimal | DecimalJsLike | number | string | null
    map_detalhe?: map_pedido_detalheUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type fct_pedidoCreateOrConnectWithoutClienteInput = {
    where: fct_pedidoWhereUniqueInput
    create: XOR<fct_pedidoCreateWithoutClienteInput, fct_pedidoUncheckedCreateWithoutClienteInput>
  }

  export type fct_pedidoCreateManyClienteInputEnvelope = {
    data: fct_pedidoCreateManyClienteInput | fct_pedidoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type fct_pedidoUpsertWithWhereUniqueWithoutClienteInput = {
    where: fct_pedidoWhereUniqueInput
    update: XOR<fct_pedidoUpdateWithoutClienteInput, fct_pedidoUncheckedUpdateWithoutClienteInput>
    create: XOR<fct_pedidoCreateWithoutClienteInput, fct_pedidoUncheckedCreateWithoutClienteInput>
  }

  export type fct_pedidoUpdateWithWhereUniqueWithoutClienteInput = {
    where: fct_pedidoWhereUniqueInput
    data: XOR<fct_pedidoUpdateWithoutClienteInput, fct_pedidoUncheckedUpdateWithoutClienteInput>
  }

  export type fct_pedidoUpdateManyWithWhereWithoutClienteInput = {
    where: fct_pedidoScalarWhereInput
    data: XOR<fct_pedidoUpdateManyMutationInput, fct_pedidoUncheckedUpdateManyWithoutClienteInput>
  }

  export type fct_pedidoScalarWhereInput = {
    AND?: fct_pedidoScalarWhereInput | fct_pedidoScalarWhereInput[]
    OR?: fct_pedidoScalarWhereInput[]
    NOT?: fct_pedidoScalarWhereInput | fct_pedidoScalarWhereInput[]
    pedido_id?: IntFilter<"fct_pedido"> | number
    cliente_id?: IntNullableFilter<"fct_pedido"> | number | null
    data_pedido?: DateTimeNullableFilter<"fct_pedido"> | Date | string | null
    data_entrega?: DateTimeNullableFilter<"fct_pedido"> | Date | string | null
    status?: StringFilter<"fct_pedido"> | string
    valor_total?: DecimalNullableFilter<"fct_pedido"> | Decimal | DecimalJsLike | number | string | null
  }

  export type dim_insumoCreateWithoutFornecedorInput = {
    nome: string
    descricao?: string | null
    unidade_medida?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    map_composicao?: map_produto_composicaoCreateNestedManyWithoutInsumoInput
  }

  export type dim_insumoUncheckedCreateWithoutFornecedorInput = {
    insumo_id?: number
    nome: string
    descricao?: string | null
    unidade_medida?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    map_composicao?: map_produto_composicaoUncheckedCreateNestedManyWithoutInsumoInput
  }

  export type dim_insumoCreateOrConnectWithoutFornecedorInput = {
    where: dim_insumoWhereUniqueInput
    create: XOR<dim_insumoCreateWithoutFornecedorInput, dim_insumoUncheckedCreateWithoutFornecedorInput>
  }

  export type dim_insumoCreateManyFornecedorInputEnvelope = {
    data: dim_insumoCreateManyFornecedorInput | dim_insumoCreateManyFornecedorInput[]
    skipDuplicates?: boolean
  }

  export type dim_produtoCreateWithoutFornecedorInput = {
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
    map_detalhe?: map_pedido_detalheCreateNestedManyWithoutProdutoInput
    map_composicao?: map_produto_composicaoCreateNestedManyWithoutProdutoInput
  }

  export type dim_produtoUncheckedCreateWithoutFornecedorInput = {
    produto_id?: number
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
    map_detalhe?: map_pedido_detalheUncheckedCreateNestedManyWithoutProdutoInput
    map_composicao?: map_produto_composicaoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type dim_produtoCreateOrConnectWithoutFornecedorInput = {
    where: dim_produtoWhereUniqueInput
    create: XOR<dim_produtoCreateWithoutFornecedorInput, dim_produtoUncheckedCreateWithoutFornecedorInput>
  }

  export type dim_produtoCreateManyFornecedorInputEnvelope = {
    data: dim_produtoCreateManyFornecedorInput | dim_produtoCreateManyFornecedorInput[]
    skipDuplicates?: boolean
  }

  export type dim_insumoUpsertWithWhereUniqueWithoutFornecedorInput = {
    where: dim_insumoWhereUniqueInput
    update: XOR<dim_insumoUpdateWithoutFornecedorInput, dim_insumoUncheckedUpdateWithoutFornecedorInput>
    create: XOR<dim_insumoCreateWithoutFornecedorInput, dim_insumoUncheckedCreateWithoutFornecedorInput>
  }

  export type dim_insumoUpdateWithWhereUniqueWithoutFornecedorInput = {
    where: dim_insumoWhereUniqueInput
    data: XOR<dim_insumoUpdateWithoutFornecedorInput, dim_insumoUncheckedUpdateWithoutFornecedorInput>
  }

  export type dim_insumoUpdateManyWithWhereWithoutFornecedorInput = {
    where: dim_insumoScalarWhereInput
    data: XOR<dim_insumoUpdateManyMutationInput, dim_insumoUncheckedUpdateManyWithoutFornecedorInput>
  }

  export type dim_insumoScalarWhereInput = {
    AND?: dim_insumoScalarWhereInput | dim_insumoScalarWhereInput[]
    OR?: dim_insumoScalarWhereInput[]
    NOT?: dim_insumoScalarWhereInput | dim_insumoScalarWhereInput[]
    insumo_id?: IntFilter<"dim_insumo"> | number
    nome?: StringFilter<"dim_insumo"> | string
    descricao?: StringNullableFilter<"dim_insumo"> | string | null
    unidade_medida?: StringNullableFilter<"dim_insumo"> | string | null
    preco_unitario?: DecimalNullableFilter<"dim_insumo"> | Decimal | DecimalJsLike | number | string | null
    fornecedor_id?: IntNullableFilter<"dim_insumo"> | number | null
  }

  export type dim_produtoUpsertWithWhereUniqueWithoutFornecedorInput = {
    where: dim_produtoWhereUniqueInput
    update: XOR<dim_produtoUpdateWithoutFornecedorInput, dim_produtoUncheckedUpdateWithoutFornecedorInput>
    create: XOR<dim_produtoCreateWithoutFornecedorInput, dim_produtoUncheckedCreateWithoutFornecedorInput>
  }

  export type dim_produtoUpdateWithWhereUniqueWithoutFornecedorInput = {
    where: dim_produtoWhereUniqueInput
    data: XOR<dim_produtoUpdateWithoutFornecedorInput, dim_produtoUncheckedUpdateWithoutFornecedorInput>
  }

  export type dim_produtoUpdateManyWithWhereWithoutFornecedorInput = {
    where: dim_produtoScalarWhereInput
    data: XOR<dim_produtoUpdateManyMutationInput, dim_produtoUncheckedUpdateManyWithoutFornecedorInput>
  }

  export type dim_produtoScalarWhereInput = {
    AND?: dim_produtoScalarWhereInput | dim_produtoScalarWhereInput[]
    OR?: dim_produtoScalarWhereInput[]
    NOT?: dim_produtoScalarWhereInput | dim_produtoScalarWhereInput[]
    produto_id?: IntFilter<"dim_produto"> | number
    nome?: StringFilter<"dim_produto"> | string
    descricao?: StringNullableFilter<"dim_produto"> | string | null
    preco_unitario?: DecimalNullableFilter<"dim_produto"> | Decimal | DecimalJsLike | number | string | null
    estoque?: IntNullableFilter<"dim_produto"> | number | null
    unidade_medida?: StringNullableFilter<"dim_produto"> | string | null
    fornecedor_id?: IntNullableFilter<"dim_produto"> | number | null
  }

  export type dim_fornecedorCreateWithoutDim_insumoInput = {
    nome_fantasia: string
    razao_social?: string | null
    cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
    dim_produto?: dim_produtoCreateNestedManyWithoutFornecedorInput
  }

  export type dim_fornecedorUncheckedCreateWithoutDim_insumoInput = {
    fornecedor_id?: number
    nome_fantasia: string
    razao_social?: string | null
    cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
    dim_produto?: dim_produtoUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type dim_fornecedorCreateOrConnectWithoutDim_insumoInput = {
    where: dim_fornecedorWhereUniqueInput
    create: XOR<dim_fornecedorCreateWithoutDim_insumoInput, dim_fornecedorUncheckedCreateWithoutDim_insumoInput>
  }

  export type map_produto_composicaoCreateWithoutInsumoInput = {
    quantidade: Decimal | DecimalJsLike | number | string
    preco_unitario: Decimal | DecimalJsLike | number | string
    produto?: dim_produtoCreateNestedOneWithoutMap_composicaoInput
  }

  export type map_produto_composicaoUncheckedCreateWithoutInsumoInput = {
    map_id?: number
    produto_id?: number | null
    quantidade: Decimal | DecimalJsLike | number | string
    preco_unitario: Decimal | DecimalJsLike | number | string
  }

  export type map_produto_composicaoCreateOrConnectWithoutInsumoInput = {
    where: map_produto_composicaoWhereUniqueInput
    create: XOR<map_produto_composicaoCreateWithoutInsumoInput, map_produto_composicaoUncheckedCreateWithoutInsumoInput>
  }

  export type map_produto_composicaoCreateManyInsumoInputEnvelope = {
    data: map_produto_composicaoCreateManyInsumoInput | map_produto_composicaoCreateManyInsumoInput[]
    skipDuplicates?: boolean
  }

  export type dim_fornecedorUpsertWithoutDim_insumoInput = {
    update: XOR<dim_fornecedorUpdateWithoutDim_insumoInput, dim_fornecedorUncheckedUpdateWithoutDim_insumoInput>
    create: XOR<dim_fornecedorCreateWithoutDim_insumoInput, dim_fornecedorUncheckedCreateWithoutDim_insumoInput>
    where?: dim_fornecedorWhereInput
  }

  export type dim_fornecedorUpdateToOneWithWhereWithoutDim_insumoInput = {
    where?: dim_fornecedorWhereInput
    data: XOR<dim_fornecedorUpdateWithoutDim_insumoInput, dim_fornecedorUncheckedUpdateWithoutDim_insumoInput>
  }

  export type dim_fornecedorUpdateWithoutDim_insumoInput = {
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    razao_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dim_produto?: dim_produtoUpdateManyWithoutFornecedorNestedInput
  }

  export type dim_fornecedorUncheckedUpdateWithoutDim_insumoInput = {
    fornecedor_id?: IntFieldUpdateOperationsInput | number
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    razao_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dim_produto?: dim_produtoUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type map_produto_composicaoUpsertWithWhereUniqueWithoutInsumoInput = {
    where: map_produto_composicaoWhereUniqueInput
    update: XOR<map_produto_composicaoUpdateWithoutInsumoInput, map_produto_composicaoUncheckedUpdateWithoutInsumoInput>
    create: XOR<map_produto_composicaoCreateWithoutInsumoInput, map_produto_composicaoUncheckedCreateWithoutInsumoInput>
  }

  export type map_produto_composicaoUpdateWithWhereUniqueWithoutInsumoInput = {
    where: map_produto_composicaoWhereUniqueInput
    data: XOR<map_produto_composicaoUpdateWithoutInsumoInput, map_produto_composicaoUncheckedUpdateWithoutInsumoInput>
  }

  export type map_produto_composicaoUpdateManyWithWhereWithoutInsumoInput = {
    where: map_produto_composicaoScalarWhereInput
    data: XOR<map_produto_composicaoUpdateManyMutationInput, map_produto_composicaoUncheckedUpdateManyWithoutInsumoInput>
  }

  export type map_produto_composicaoScalarWhereInput = {
    AND?: map_produto_composicaoScalarWhereInput | map_produto_composicaoScalarWhereInput[]
    OR?: map_produto_composicaoScalarWhereInput[]
    NOT?: map_produto_composicaoScalarWhereInput | map_produto_composicaoScalarWhereInput[]
    map_id?: IntFilter<"map_produto_composicao"> | number
    produto_id?: IntNullableFilter<"map_produto_composicao"> | number | null
    insumo_id?: IntNullableFilter<"map_produto_composicao"> | number | null
    quantidade?: DecimalFilter<"map_produto_composicao"> | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFilter<"map_produto_composicao"> | Decimal | DecimalJsLike | number | string
  }

  export type dim_fornecedorCreateWithoutDim_produtoInput = {
    nome_fantasia: string
    razao_social?: string | null
    cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
    dim_insumo?: dim_insumoCreateNestedManyWithoutFornecedorInput
  }

  export type dim_fornecedorUncheckedCreateWithoutDim_produtoInput = {
    fornecedor_id?: number
    nome_fantasia: string
    razao_social?: string | null
    cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
    dim_insumo?: dim_insumoUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type dim_fornecedorCreateOrConnectWithoutDim_produtoInput = {
    where: dim_fornecedorWhereUniqueInput
    create: XOR<dim_fornecedorCreateWithoutDim_produtoInput, dim_fornecedorUncheckedCreateWithoutDim_produtoInput>
  }

  export type map_pedido_detalheCreateWithoutProdutoInput = {
    quantidade: number
    preco_unitario: Decimal | DecimalJsLike | number | string
    pedido: fct_pedidoCreateNestedOneWithoutMap_detalheInput
  }

  export type map_pedido_detalheUncheckedCreateWithoutProdutoInput = {
    map_id?: number
    pedido_id: number
    quantidade: number
    preco_unitario: Decimal | DecimalJsLike | number | string
  }

  export type map_pedido_detalheCreateOrConnectWithoutProdutoInput = {
    where: map_pedido_detalheWhereUniqueInput
    create: XOR<map_pedido_detalheCreateWithoutProdutoInput, map_pedido_detalheUncheckedCreateWithoutProdutoInput>
  }

  export type map_pedido_detalheCreateManyProdutoInputEnvelope = {
    data: map_pedido_detalheCreateManyProdutoInput | map_pedido_detalheCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type map_produto_composicaoCreateWithoutProdutoInput = {
    quantidade: Decimal | DecimalJsLike | number | string
    preco_unitario: Decimal | DecimalJsLike | number | string
    insumo?: dim_insumoCreateNestedOneWithoutMap_composicaoInput
  }

  export type map_produto_composicaoUncheckedCreateWithoutProdutoInput = {
    map_id?: number
    insumo_id?: number | null
    quantidade: Decimal | DecimalJsLike | number | string
    preco_unitario: Decimal | DecimalJsLike | number | string
  }

  export type map_produto_composicaoCreateOrConnectWithoutProdutoInput = {
    where: map_produto_composicaoWhereUniqueInput
    create: XOR<map_produto_composicaoCreateWithoutProdutoInput, map_produto_composicaoUncheckedCreateWithoutProdutoInput>
  }

  export type map_produto_composicaoCreateManyProdutoInputEnvelope = {
    data: map_produto_composicaoCreateManyProdutoInput | map_produto_composicaoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type dim_fornecedorUpsertWithoutDim_produtoInput = {
    update: XOR<dim_fornecedorUpdateWithoutDim_produtoInput, dim_fornecedorUncheckedUpdateWithoutDim_produtoInput>
    create: XOR<dim_fornecedorCreateWithoutDim_produtoInput, dim_fornecedorUncheckedCreateWithoutDim_produtoInput>
    where?: dim_fornecedorWhereInput
  }

  export type dim_fornecedorUpdateToOneWithWhereWithoutDim_produtoInput = {
    where?: dim_fornecedorWhereInput
    data: XOR<dim_fornecedorUpdateWithoutDim_produtoInput, dim_fornecedorUncheckedUpdateWithoutDim_produtoInput>
  }

  export type dim_fornecedorUpdateWithoutDim_produtoInput = {
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    razao_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dim_insumo?: dim_insumoUpdateManyWithoutFornecedorNestedInput
  }

  export type dim_fornecedorUncheckedUpdateWithoutDim_produtoInput = {
    fornecedor_id?: IntFieldUpdateOperationsInput | number
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    razao_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dim_insumo?: dim_insumoUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type map_pedido_detalheUpsertWithWhereUniqueWithoutProdutoInput = {
    where: map_pedido_detalheWhereUniqueInput
    update: XOR<map_pedido_detalheUpdateWithoutProdutoInput, map_pedido_detalheUncheckedUpdateWithoutProdutoInput>
    create: XOR<map_pedido_detalheCreateWithoutProdutoInput, map_pedido_detalheUncheckedCreateWithoutProdutoInput>
  }

  export type map_pedido_detalheUpdateWithWhereUniqueWithoutProdutoInput = {
    where: map_pedido_detalheWhereUniqueInput
    data: XOR<map_pedido_detalheUpdateWithoutProdutoInput, map_pedido_detalheUncheckedUpdateWithoutProdutoInput>
  }

  export type map_pedido_detalheUpdateManyWithWhereWithoutProdutoInput = {
    where: map_pedido_detalheScalarWhereInput
    data: XOR<map_pedido_detalheUpdateManyMutationInput, map_pedido_detalheUncheckedUpdateManyWithoutProdutoInput>
  }

  export type map_pedido_detalheScalarWhereInput = {
    AND?: map_pedido_detalheScalarWhereInput | map_pedido_detalheScalarWhereInput[]
    OR?: map_pedido_detalheScalarWhereInput[]
    NOT?: map_pedido_detalheScalarWhereInput | map_pedido_detalheScalarWhereInput[]
    map_id?: IntFilter<"map_pedido_detalhe"> | number
    pedido_id?: IntFilter<"map_pedido_detalhe"> | number
    produto_id?: IntFilter<"map_pedido_detalhe"> | number
    quantidade?: IntFilter<"map_pedido_detalhe"> | number
    preco_unitario?: DecimalFilter<"map_pedido_detalhe"> | Decimal | DecimalJsLike | number | string
  }

  export type map_produto_composicaoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: map_produto_composicaoWhereUniqueInput
    update: XOR<map_produto_composicaoUpdateWithoutProdutoInput, map_produto_composicaoUncheckedUpdateWithoutProdutoInput>
    create: XOR<map_produto_composicaoCreateWithoutProdutoInput, map_produto_composicaoUncheckedCreateWithoutProdutoInput>
  }

  export type map_produto_composicaoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: map_produto_composicaoWhereUniqueInput
    data: XOR<map_produto_composicaoUpdateWithoutProdutoInput, map_produto_composicaoUncheckedUpdateWithoutProdutoInput>
  }

  export type map_produto_composicaoUpdateManyWithWhereWithoutProdutoInput = {
    where: map_produto_composicaoScalarWhereInput
    data: XOR<map_produto_composicaoUpdateManyMutationInput, map_produto_composicaoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type dim_clienteCreateWithoutFct_pedidoInput = {
    nome: string
    cpf_cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
  }

  export type dim_clienteUncheckedCreateWithoutFct_pedidoInput = {
    cliente_id?: number
    nome: string
    cpf_cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
  }

  export type dim_clienteCreateOrConnectWithoutFct_pedidoInput = {
    where: dim_clienteWhereUniqueInput
    create: XOR<dim_clienteCreateWithoutFct_pedidoInput, dim_clienteUncheckedCreateWithoutFct_pedidoInput>
  }

  export type map_pedido_detalheCreateWithoutPedidoInput = {
    quantidade: number
    preco_unitario: Decimal | DecimalJsLike | number | string
    produto: dim_produtoCreateNestedOneWithoutMap_detalheInput
  }

  export type map_pedido_detalheUncheckedCreateWithoutPedidoInput = {
    map_id?: number
    produto_id: number
    quantidade: number
    preco_unitario: Decimal | DecimalJsLike | number | string
  }

  export type map_pedido_detalheCreateOrConnectWithoutPedidoInput = {
    where: map_pedido_detalheWhereUniqueInput
    create: XOR<map_pedido_detalheCreateWithoutPedidoInput, map_pedido_detalheUncheckedCreateWithoutPedidoInput>
  }

  export type map_pedido_detalheCreateManyPedidoInputEnvelope = {
    data: map_pedido_detalheCreateManyPedidoInput | map_pedido_detalheCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type dim_clienteUpsertWithoutFct_pedidoInput = {
    update: XOR<dim_clienteUpdateWithoutFct_pedidoInput, dim_clienteUncheckedUpdateWithoutFct_pedidoInput>
    create: XOR<dim_clienteCreateWithoutFct_pedidoInput, dim_clienteUncheckedCreateWithoutFct_pedidoInput>
    where?: dim_clienteWhereInput
  }

  export type dim_clienteUpdateToOneWithWhereWithoutFct_pedidoInput = {
    where?: dim_clienteWhereInput
    data: XOR<dim_clienteUpdateWithoutFct_pedidoInput, dim_clienteUncheckedUpdateWithoutFct_pedidoInput>
  }

  export type dim_clienteUpdateWithoutFct_pedidoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dim_clienteUncheckedUpdateWithoutFct_pedidoInput = {
    cliente_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type map_pedido_detalheUpsertWithWhereUniqueWithoutPedidoInput = {
    where: map_pedido_detalheWhereUniqueInput
    update: XOR<map_pedido_detalheUpdateWithoutPedidoInput, map_pedido_detalheUncheckedUpdateWithoutPedidoInput>
    create: XOR<map_pedido_detalheCreateWithoutPedidoInput, map_pedido_detalheUncheckedCreateWithoutPedidoInput>
  }

  export type map_pedido_detalheUpdateWithWhereUniqueWithoutPedidoInput = {
    where: map_pedido_detalheWhereUniqueInput
    data: XOR<map_pedido_detalheUpdateWithoutPedidoInput, map_pedido_detalheUncheckedUpdateWithoutPedidoInput>
  }

  export type map_pedido_detalheUpdateManyWithWhereWithoutPedidoInput = {
    where: map_pedido_detalheScalarWhereInput
    data: XOR<map_pedido_detalheUpdateManyMutationInput, map_pedido_detalheUncheckedUpdateManyWithoutPedidoInput>
  }

  export type dim_insumoCreateWithoutMap_composicaoInput = {
    nome: string
    descricao?: string | null
    unidade_medida?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    fornecedor?: dim_fornecedorCreateNestedOneWithoutDim_insumoInput
  }

  export type dim_insumoUncheckedCreateWithoutMap_composicaoInput = {
    insumo_id?: number
    nome: string
    descricao?: string | null
    unidade_medida?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    fornecedor_id?: number | null
  }

  export type dim_insumoCreateOrConnectWithoutMap_composicaoInput = {
    where: dim_insumoWhereUniqueInput
    create: XOR<dim_insumoCreateWithoutMap_composicaoInput, dim_insumoUncheckedCreateWithoutMap_composicaoInput>
  }

  export type dim_produtoCreateWithoutMap_composicaoInput = {
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
    fornecedor?: dim_fornecedorCreateNestedOneWithoutDim_produtoInput
    map_detalhe?: map_pedido_detalheCreateNestedManyWithoutProdutoInput
  }

  export type dim_produtoUncheckedCreateWithoutMap_composicaoInput = {
    produto_id?: number
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
    fornecedor_id?: number | null
    map_detalhe?: map_pedido_detalheUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type dim_produtoCreateOrConnectWithoutMap_composicaoInput = {
    where: dim_produtoWhereUniqueInput
    create: XOR<dim_produtoCreateWithoutMap_composicaoInput, dim_produtoUncheckedCreateWithoutMap_composicaoInput>
  }

  export type dim_insumoUpsertWithoutMap_composicaoInput = {
    update: XOR<dim_insumoUpdateWithoutMap_composicaoInput, dim_insumoUncheckedUpdateWithoutMap_composicaoInput>
    create: XOR<dim_insumoCreateWithoutMap_composicaoInput, dim_insumoUncheckedCreateWithoutMap_composicaoInput>
    where?: dim_insumoWhereInput
  }

  export type dim_insumoUpdateToOneWithWhereWithoutMap_composicaoInput = {
    where?: dim_insumoWhereInput
    data: XOR<dim_insumoUpdateWithoutMap_composicaoInput, dim_insumoUncheckedUpdateWithoutMap_composicaoInput>
  }

  export type dim_insumoUpdateWithoutMap_composicaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fornecedor?: dim_fornecedorUpdateOneWithoutDim_insumoNestedInput
  }

  export type dim_insumoUncheckedUpdateWithoutMap_composicaoInput = {
    insumo_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fornecedor_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type dim_produtoUpsertWithoutMap_composicaoInput = {
    update: XOR<dim_produtoUpdateWithoutMap_composicaoInput, dim_produtoUncheckedUpdateWithoutMap_composicaoInput>
    create: XOR<dim_produtoCreateWithoutMap_composicaoInput, dim_produtoUncheckedCreateWithoutMap_composicaoInput>
    where?: dim_produtoWhereInput
  }

  export type dim_produtoUpdateToOneWithWhereWithoutMap_composicaoInput = {
    where?: dim_produtoWhereInput
    data: XOR<dim_produtoUpdateWithoutMap_composicaoInput, dim_produtoUncheckedUpdateWithoutMap_composicaoInput>
  }

  export type dim_produtoUpdateWithoutMap_composicaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    fornecedor?: dim_fornecedorUpdateOneWithoutDim_produtoNestedInput
    map_detalhe?: map_pedido_detalheUpdateManyWithoutProdutoNestedInput
  }

  export type dim_produtoUncheckedUpdateWithoutMap_composicaoInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    fornecedor_id?: NullableIntFieldUpdateOperationsInput | number | null
    map_detalhe?: map_pedido_detalheUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type fct_pedidoCreateWithoutMap_detalheInput = {
    data_pedido?: Date | string | null
    data_entrega?: Date | string | null
    status: string
    valor_total?: Decimal | DecimalJsLike | number | string | null
    cliente?: dim_clienteCreateNestedOneWithoutFct_pedidoInput
  }

  export type fct_pedidoUncheckedCreateWithoutMap_detalheInput = {
    pedido_id?: number
    cliente_id?: number | null
    data_pedido?: Date | string | null
    data_entrega?: Date | string | null
    status: string
    valor_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type fct_pedidoCreateOrConnectWithoutMap_detalheInput = {
    where: fct_pedidoWhereUniqueInput
    create: XOR<fct_pedidoCreateWithoutMap_detalheInput, fct_pedidoUncheckedCreateWithoutMap_detalheInput>
  }

  export type dim_produtoCreateWithoutMap_detalheInput = {
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
    fornecedor?: dim_fornecedorCreateNestedOneWithoutDim_produtoInput
    map_composicao?: map_produto_composicaoCreateNestedManyWithoutProdutoInput
  }

  export type dim_produtoUncheckedCreateWithoutMap_detalheInput = {
    produto_id?: number
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
    fornecedor_id?: number | null
    map_composicao?: map_produto_composicaoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type dim_produtoCreateOrConnectWithoutMap_detalheInput = {
    where: dim_produtoWhereUniqueInput
    create: XOR<dim_produtoCreateWithoutMap_detalheInput, dim_produtoUncheckedCreateWithoutMap_detalheInput>
  }

  export type fct_pedidoUpsertWithoutMap_detalheInput = {
    update: XOR<fct_pedidoUpdateWithoutMap_detalheInput, fct_pedidoUncheckedUpdateWithoutMap_detalheInput>
    create: XOR<fct_pedidoCreateWithoutMap_detalheInput, fct_pedidoUncheckedCreateWithoutMap_detalheInput>
    where?: fct_pedidoWhereInput
  }

  export type fct_pedidoUpdateToOneWithWhereWithoutMap_detalheInput = {
    where?: fct_pedidoWhereInput
    data: XOR<fct_pedidoUpdateWithoutMap_detalheInput, fct_pedidoUncheckedUpdateWithoutMap_detalheInput>
  }

  export type fct_pedidoUpdateWithoutMap_detalheInput = {
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cliente?: dim_clienteUpdateOneWithoutFct_pedidoNestedInput
  }

  export type fct_pedidoUncheckedUpdateWithoutMap_detalheInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    cliente_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type dim_produtoUpsertWithoutMap_detalheInput = {
    update: XOR<dim_produtoUpdateWithoutMap_detalheInput, dim_produtoUncheckedUpdateWithoutMap_detalheInput>
    create: XOR<dim_produtoCreateWithoutMap_detalheInput, dim_produtoUncheckedCreateWithoutMap_detalheInput>
    where?: dim_produtoWhereInput
  }

  export type dim_produtoUpdateToOneWithWhereWithoutMap_detalheInput = {
    where?: dim_produtoWhereInput
    data: XOR<dim_produtoUpdateWithoutMap_detalheInput, dim_produtoUncheckedUpdateWithoutMap_detalheInput>
  }

  export type dim_produtoUpdateWithoutMap_detalheInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    fornecedor?: dim_fornecedorUpdateOneWithoutDim_produtoNestedInput
    map_composicao?: map_produto_composicaoUpdateManyWithoutProdutoNestedInput
  }

  export type dim_produtoUncheckedUpdateWithoutMap_detalheInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    fornecedor_id?: NullableIntFieldUpdateOperationsInput | number | null
    map_composicao?: map_produto_composicaoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type fct_pedidoCreateManyClienteInput = {
    pedido_id?: number
    data_pedido?: Date | string | null
    data_entrega?: Date | string | null
    status: string
    valor_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type fct_pedidoUpdateWithoutClienteInput = {
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    map_detalhe?: map_pedido_detalheUpdateManyWithoutPedidoNestedInput
  }

  export type fct_pedidoUncheckedUpdateWithoutClienteInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    map_detalhe?: map_pedido_detalheUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type fct_pedidoUncheckedUpdateManyWithoutClienteInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type dim_insumoCreateManyFornecedorInput = {
    insumo_id?: number
    nome: string
    descricao?: string | null
    unidade_medida?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type dim_produtoCreateManyFornecedorInput = {
    produto_id?: number
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
  }

  export type dim_insumoUpdateWithoutFornecedorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    map_composicao?: map_produto_composicaoUpdateManyWithoutInsumoNestedInput
  }

  export type dim_insumoUncheckedUpdateWithoutFornecedorInput = {
    insumo_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    map_composicao?: map_produto_composicaoUncheckedUpdateManyWithoutInsumoNestedInput
  }

  export type dim_insumoUncheckedUpdateManyWithoutFornecedorInput = {
    insumo_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type dim_produtoUpdateWithoutFornecedorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    map_detalhe?: map_pedido_detalheUpdateManyWithoutProdutoNestedInput
    map_composicao?: map_produto_composicaoUpdateManyWithoutProdutoNestedInput
  }

  export type dim_produtoUncheckedUpdateWithoutFornecedorInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    map_detalhe?: map_pedido_detalheUncheckedUpdateManyWithoutProdutoNestedInput
    map_composicao?: map_produto_composicaoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type dim_produtoUncheckedUpdateManyWithoutFornecedorInput = {
    produto_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type map_produto_composicaoCreateManyInsumoInput = {
    map_id?: number
    produto_id?: number | null
    quantidade: Decimal | DecimalJsLike | number | string
    preco_unitario: Decimal | DecimalJsLike | number | string
  }

  export type map_produto_composicaoUpdateWithoutInsumoInput = {
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    produto?: dim_produtoUpdateOneWithoutMap_composicaoNestedInput
  }

  export type map_produto_composicaoUncheckedUpdateWithoutInsumoInput = {
    map_id?: IntFieldUpdateOperationsInput | number
    produto_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type map_produto_composicaoUncheckedUpdateManyWithoutInsumoInput = {
    map_id?: IntFieldUpdateOperationsInput | number
    produto_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type map_pedido_detalheCreateManyProdutoInput = {
    map_id?: number
    pedido_id: number
    quantidade: number
    preco_unitario: Decimal | DecimalJsLike | number | string
  }

  export type map_produto_composicaoCreateManyProdutoInput = {
    map_id?: number
    insumo_id?: number | null
    quantidade: Decimal | DecimalJsLike | number | string
    preco_unitario: Decimal | DecimalJsLike | number | string
  }

  export type map_pedido_detalheUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: fct_pedidoUpdateOneRequiredWithoutMap_detalheNestedInput
  }

  export type map_pedido_detalheUncheckedUpdateWithoutProdutoInput = {
    map_id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type map_pedido_detalheUncheckedUpdateManyWithoutProdutoInput = {
    map_id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type map_produto_composicaoUpdateWithoutProdutoInput = {
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    insumo?: dim_insumoUpdateOneWithoutMap_composicaoNestedInput
  }

  export type map_produto_composicaoUncheckedUpdateWithoutProdutoInput = {
    map_id?: IntFieldUpdateOperationsInput | number
    insumo_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type map_produto_composicaoUncheckedUpdateManyWithoutProdutoInput = {
    map_id?: IntFieldUpdateOperationsInput | number
    insumo_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type map_pedido_detalheCreateManyPedidoInput = {
    map_id?: number
    produto_id: number
    quantidade: number
    preco_unitario: Decimal | DecimalJsLike | number | string
  }

  export type map_pedido_detalheUpdateWithoutPedidoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    produto?: dim_produtoUpdateOneRequiredWithoutMap_detalheNestedInput
  }

  export type map_pedido_detalheUncheckedUpdateWithoutPedidoInput = {
    map_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type map_pedido_detalheUncheckedUpdateManyWithoutPedidoInput = {
    map_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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
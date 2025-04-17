
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
 * Model cliente
 * 
 */
export type cliente = $Result.DefaultSelection<Prisma.$clientePayload>
/**
 * Model fornecedor
 * 
 */
export type fornecedor = $Result.DefaultSelection<Prisma.$fornecedorPayload>
/**
 * Model insumo
 * 
 */
export type insumo = $Result.DefaultSelection<Prisma.$insumoPayload>
/**
 * Model pedido
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type pedido = $Result.DefaultSelection<Prisma.$pedidoPayload>
/**
 * Model pedido_produto
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type pedido_produto = $Result.DefaultSelection<Prisma.$pedido_produtoPayload>
/**
 * Model produto
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type produto = $Result.DefaultSelection<Prisma.$produtoPayload>
/**
 * Model produto_insumo
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type produto_insumo = $Result.DefaultSelection<Prisma.$produto_insumoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
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
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
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
   * `prisma.cliente`: Exposes CRUD operations for the **cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.clienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fornecedor`: Exposes CRUD operations for the **fornecedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fornecedors
    * const fornecedors = await prisma.fornecedor.findMany()
    * ```
    */
  get fornecedor(): Prisma.fornecedorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.insumo`: Exposes CRUD operations for the **insumo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Insumos
    * const insumos = await prisma.insumo.findMany()
    * ```
    */
  get insumo(): Prisma.insumoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.pedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido_produto`: Exposes CRUD operations for the **pedido_produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedido_produtos
    * const pedido_produtos = await prisma.pedido_produto.findMany()
    * ```
    */
  get pedido_produto(): Prisma.pedido_produtoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.produtoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto_insumo`: Exposes CRUD operations for the **produto_insumo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produto_insumos
    * const produto_insumos = await prisma.produto_insumo.findMany()
    * ```
    */
  get produto_insumo(): Prisma.produto_insumoDelegate<ExtArgs, ClientOptions>;
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
    cliente: 'cliente',
    fornecedor: 'fornecedor',
    insumo: 'insumo',
    pedido: 'pedido',
    pedido_produto: 'pedido_produto',
    produto: 'produto',
    produto_insumo: 'produto_insumo'
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
      modelProps: "cliente" | "fornecedor" | "insumo" | "pedido" | "pedido_produto" | "produto" | "produto_insumo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cliente: {
        payload: Prisma.$clientePayload<ExtArgs>
        fields: Prisma.clienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findFirst: {
            args: Prisma.clienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findMany: {
            args: Prisma.clienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          create: {
            args: Prisma.clienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          createMany: {
            args: Prisma.clienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          delete: {
            args: Prisma.clienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          update: {
            args: Prisma.clienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          deleteMany: {
            args: Prisma.clienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          upsert: {
            args: Prisma.clienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.clienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.clienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      fornecedor: {
        payload: Prisma.$fornecedorPayload<ExtArgs>
        fields: Prisma.fornecedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fornecedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fornecedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload>
          }
          findFirst: {
            args: Prisma.fornecedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fornecedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload>
          }
          findMany: {
            args: Prisma.fornecedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload>[]
          }
          create: {
            args: Prisma.fornecedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload>
          }
          createMany: {
            args: Prisma.fornecedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fornecedorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload>[]
          }
          delete: {
            args: Prisma.fornecedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload>
          }
          update: {
            args: Prisma.fornecedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload>
          }
          deleteMany: {
            args: Prisma.fornecedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fornecedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fornecedorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload>[]
          }
          upsert: {
            args: Prisma.fornecedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fornecedorPayload>
          }
          aggregate: {
            args: Prisma.FornecedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFornecedor>
          }
          groupBy: {
            args: Prisma.fornecedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<FornecedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.fornecedorCountArgs<ExtArgs>
            result: $Utils.Optional<FornecedorCountAggregateOutputType> | number
          }
        }
      }
      insumo: {
        payload: Prisma.$insumoPayload<ExtArgs>
        fields: Prisma.insumoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.insumoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insumoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.insumoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insumoPayload>
          }
          findFirst: {
            args: Prisma.insumoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insumoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.insumoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insumoPayload>
          }
          findMany: {
            args: Prisma.insumoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insumoPayload>[]
          }
          create: {
            args: Prisma.insumoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insumoPayload>
          }
          createMany: {
            args: Prisma.insumoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.insumoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insumoPayload>[]
          }
          delete: {
            args: Prisma.insumoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insumoPayload>
          }
          update: {
            args: Prisma.insumoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insumoPayload>
          }
          deleteMany: {
            args: Prisma.insumoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.insumoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.insumoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insumoPayload>[]
          }
          upsert: {
            args: Prisma.insumoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insumoPayload>
          }
          aggregate: {
            args: Prisma.InsumoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsumo>
          }
          groupBy: {
            args: Prisma.insumoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsumoGroupByOutputType>[]
          }
          count: {
            args: Prisma.insumoCountArgs<ExtArgs>
            result: $Utils.Optional<InsumoCountAggregateOutputType> | number
          }
        }
      }
      pedido: {
        payload: Prisma.$pedidoPayload<ExtArgs>
        fields: Prisma.pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findFirst: {
            args: Prisma.pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findMany: {
            args: Prisma.pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          create: {
            args: Prisma.pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          createMany: {
            args: Prisma.pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          delete: {
            args: Prisma.pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          update: {
            args: Prisma.pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          deleteMany: {
            args: Prisma.pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          upsert: {
            args: Prisma.pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      pedido_produto: {
        payload: Prisma.$pedido_produtoPayload<ExtArgs>
        fields: Prisma.pedido_produtoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedido_produtoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedido_produtoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload>
          }
          findFirst: {
            args: Prisma.pedido_produtoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedido_produtoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload>
          }
          findMany: {
            args: Prisma.pedido_produtoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload>[]
          }
          create: {
            args: Prisma.pedido_produtoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload>
          }
          createMany: {
            args: Prisma.pedido_produtoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pedido_produtoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload>[]
          }
          delete: {
            args: Prisma.pedido_produtoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload>
          }
          update: {
            args: Prisma.pedido_produtoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload>
          }
          deleteMany: {
            args: Prisma.pedido_produtoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pedido_produtoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pedido_produtoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload>[]
          }
          upsert: {
            args: Prisma.pedido_produtoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload>
          }
          aggregate: {
            args: Prisma.Pedido_produtoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido_produto>
          }
          groupBy: {
            args: Prisma.pedido_produtoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pedido_produtoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedido_produtoCountArgs<ExtArgs>
            result: $Utils.Optional<Pedido_produtoCountAggregateOutputType> | number
          }
        }
      }
      produto: {
        payload: Prisma.$produtoPayload<ExtArgs>
        fields: Prisma.produtoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produtoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produtoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          findFirst: {
            args: Prisma.produtoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produtoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          findMany: {
            args: Prisma.produtoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>[]
          }
          create: {
            args: Prisma.produtoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          createMany: {
            args: Prisma.produtoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.produtoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>[]
          }
          delete: {
            args: Prisma.produtoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          update: {
            args: Prisma.produtoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          deleteMany: {
            args: Prisma.produtoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produtoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.produtoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>[]
          }
          upsert: {
            args: Prisma.produtoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.produtoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.produtoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      produto_insumo: {
        payload: Prisma.$produto_insumoPayload<ExtArgs>
        fields: Prisma.produto_insumoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produto_insumoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_insumoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produto_insumoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_insumoPayload>
          }
          findFirst: {
            args: Prisma.produto_insumoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_insumoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produto_insumoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_insumoPayload>
          }
          findMany: {
            args: Prisma.produto_insumoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_insumoPayload>[]
          }
          create: {
            args: Prisma.produto_insumoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_insumoPayload>
          }
          createMany: {
            args: Prisma.produto_insumoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.produto_insumoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_insumoPayload>[]
          }
          delete: {
            args: Prisma.produto_insumoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_insumoPayload>
          }
          update: {
            args: Prisma.produto_insumoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_insumoPayload>
          }
          deleteMany: {
            args: Prisma.produto_insumoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produto_insumoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.produto_insumoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_insumoPayload>[]
          }
          upsert: {
            args: Prisma.produto_insumoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_insumoPayload>
          }
          aggregate: {
            args: Prisma.Produto_insumoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto_insumo>
          }
          groupBy: {
            args: Prisma.produto_insumoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Produto_insumoGroupByOutputType>[]
          }
          count: {
            args: Prisma.produto_insumoCountArgs<ExtArgs>
            result: $Utils.Optional<Produto_insumoCountAggregateOutputType> | number
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
    cliente?: clienteOmit
    fornecedor?: fornecedorOmit
    insumo?: insumoOmit
    pedido?: pedidoOmit
    pedido_produto?: pedido_produtoOmit
    produto?: produtoOmit
    produto_insumo?: produto_insumoOmit
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
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    pedido: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | ClienteCountOutputTypeCountPedidoArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
  }


  /**
   * Count Type FornecedorCountOutputType
   */

  export type FornecedorCountOutputType = {
    insumo: number
    produto: number
  }

  export type FornecedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insumo?: boolean | FornecedorCountOutputTypeCountInsumoArgs
    produto?: boolean | FornecedorCountOutputTypeCountProdutoArgs
  }

  // Custom InputTypes
  /**
   * FornecedorCountOutputType without action
   */
  export type FornecedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorCountOutputType
     */
    select?: FornecedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FornecedorCountOutputType without action
   */
  export type FornecedorCountOutputTypeCountInsumoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: insumoWhereInput
  }

  /**
   * FornecedorCountOutputType without action
   */
  export type FornecedorCountOutputTypeCountProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtoWhereInput
  }


  /**
   * Count Type InsumoCountOutputType
   */

  export type InsumoCountOutputType = {
    produto_insumo: number
  }

  export type InsumoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto_insumo?: boolean | InsumoCountOutputTypeCountProduto_insumoArgs
  }

  // Custom InputTypes
  /**
   * InsumoCountOutputType without action
   */
  export type InsumoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsumoCountOutputType
     */
    select?: InsumoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InsumoCountOutputType without action
   */
  export type InsumoCountOutputTypeCountProduto_insumoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produto_insumoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    pedido_produto: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido_produto?: boolean | PedidoCountOutputTypeCountPedido_produtoArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountPedido_produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedido_produtoWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    pedido_produto: number
    produto_insumo: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido_produto?: boolean | ProdutoCountOutputTypeCountPedido_produtoArgs
    produto_insumo?: boolean | ProdutoCountOutputTypeCountProduto_insumoArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountPedido_produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedido_produtoWhereInput
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountProduto_insumoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produto_insumoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf_cnpj: string | null
    telefone: string | null
    email: string | null
    endereco: string | null
    data_cadastro: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf_cnpj: string | null
    telefone: string | null
    email: string | null
    endereco: string | null
    data_cadastro: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    cpf_cnpj: number
    telefone: number
    email: number
    endereco: number
    data_cadastro: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    cpf_cnpj?: true
    telefone?: true
    email?: true
    endereco?: true
    data_cadastro?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf_cnpj?: true
    telefone?: true
    email?: true
    endereco?: true
    data_cadastro?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    cpf_cnpj?: true
    telefone?: true
    email?: true
    endereco?: true
    data_cadastro?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cliente to aggregate.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type clienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clienteWhereInput
    orderBy?: clienteOrderByWithAggregationInput | clienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: clienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nome: string
    cpf_cnpj: string
    telefone: string | null
    email: string
    endereco: string | null
    data_cadastro: Date | null
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends clienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type clienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf_cnpj?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    data_cadastro?: boolean
    pedido?: boolean | cliente$pedidoArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf_cnpj?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    data_cadastro?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf_cnpj?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    data_cadastro?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf_cnpj?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    data_cadastro?: boolean
  }

  export type clienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cpf_cnpj" | "telefone" | "email" | "endereco" | "data_cadastro", ExtArgs["result"]["cliente"]>
  export type clienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | cliente$pedidoArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type clienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $clientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cliente"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cpf_cnpj: string
      telefone: string | null
      email: string
      endereco: string | null
      data_cadastro: Date | null
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type clienteGetPayload<S extends boolean | null | undefined | clienteDefaultArgs> = $Result.GetResult<Prisma.$clientePayload, S>

  type clienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface clienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cliente'], meta: { name: 'cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {clienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clienteFindUniqueArgs>(args: SelectSubset<T, clienteFindUniqueArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clienteFindUniqueOrThrowArgs>(args: SelectSubset<T, clienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clienteFindFirstArgs>(args?: SelectSubset<T, clienteFindFirstArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clienteFindFirstOrThrowArgs>(args?: SelectSubset<T, clienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clienteFindManyArgs>(args?: SelectSubset<T, clienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {clienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends clienteCreateArgs>(args: SelectSubset<T, clienteCreateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {clienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clienteCreateManyArgs>(args?: SelectSubset<T, clienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {clienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clienteCreateManyAndReturnArgs>(args?: SelectSubset<T, clienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {clienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends clienteDeleteArgs>(args: SelectSubset<T, clienteDeleteArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {clienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clienteUpdateArgs>(args: SelectSubset<T, clienteUpdateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {clienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clienteDeleteManyArgs>(args?: SelectSubset<T, clienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clienteUpdateManyArgs>(args: SelectSubset<T, clienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {clienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
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
    updateManyAndReturn<T extends clienteUpdateManyAndReturnArgs>(args: SelectSubset<T, clienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {clienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends clienteUpsertArgs>(args: SelectSubset<T, clienteUpsertArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clienteCountArgs>(
      args?: Subset<T, clienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteGroupByArgs} args - Group by arguments.
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
      T extends clienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clienteGroupByArgs['orderBy'] }
        : { orderBy?: clienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cliente model
   */
  readonly fields: clienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends cliente$pedidoArgs<ExtArgs> = {}>(args?: Subset<T, cliente$pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cliente model
   */
  interface clienteFieldRefs {
    readonly id: FieldRef<"cliente", 'Int'>
    readonly nome: FieldRef<"cliente", 'String'>
    readonly cpf_cnpj: FieldRef<"cliente", 'String'>
    readonly telefone: FieldRef<"cliente", 'String'>
    readonly email: FieldRef<"cliente", 'String'>
    readonly endereco: FieldRef<"cliente", 'String'>
    readonly data_cadastro: FieldRef<"cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cliente findUnique
   */
  export type clienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findUniqueOrThrow
   */
  export type clienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findFirst
   */
  export type clienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findFirstOrThrow
   */
  export type clienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findMany
   */
  export type clienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente create
   */
  export type clienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The data needed to create a cliente.
     */
    data: XOR<clienteCreateInput, clienteUncheckedCreateInput>
  }

  /**
   * cliente createMany
   */
  export type clienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cliente createManyAndReturn
   */
  export type clienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cliente update
   */
  export type clienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The data needed to update a cliente.
     */
    data: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
    /**
     * Choose, which cliente to update.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente updateMany
   */
  export type clienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * cliente updateManyAndReturn
   */
  export type clienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * cliente upsert
   */
  export type clienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The filter to search for the cliente to update in case it exists.
     */
    where: clienteWhereUniqueInput
    /**
     * In case the cliente found by the `where` argument doesn't exist, create a new cliente with this data.
     */
    create: XOR<clienteCreateInput, clienteUncheckedCreateInput>
    /**
     * In case the cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
  }

  /**
   * cliente delete
   */
  export type clienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter which cliente to delete.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente deleteMany
   */
  export type clienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to delete.
     */
    limit?: number
  }

  /**
   * cliente.pedido
   */
  export type cliente$pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    cursor?: pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * cliente without action
   */
  export type clienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
  }


  /**
   * Model fornecedor
   */

  export type AggregateFornecedor = {
    _count: FornecedorCountAggregateOutputType | null
    _avg: FornecedorAvgAggregateOutputType | null
    _sum: FornecedorSumAggregateOutputType | null
    _min: FornecedorMinAggregateOutputType | null
    _max: FornecedorMaxAggregateOutputType | null
  }

  export type FornecedorAvgAggregateOutputType = {
    id: number | null
  }

  export type FornecedorSumAggregateOutputType = {
    id: number | null
  }

  export type FornecedorMinAggregateOutputType = {
    id: number | null
    nome_fantasia: string | null
    razao_social: string | null
    cnpj: string | null
    telefone: string | null
    email: string | null
    endereco: string | null
    data_cadastro: Date | null
  }

  export type FornecedorMaxAggregateOutputType = {
    id: number | null
    nome_fantasia: string | null
    razao_social: string | null
    cnpj: string | null
    telefone: string | null
    email: string | null
    endereco: string | null
    data_cadastro: Date | null
  }

  export type FornecedorCountAggregateOutputType = {
    id: number
    nome_fantasia: number
    razao_social: number
    cnpj: number
    telefone: number
    email: number
    endereco: number
    data_cadastro: number
    _all: number
  }


  export type FornecedorAvgAggregateInputType = {
    id?: true
  }

  export type FornecedorSumAggregateInputType = {
    id?: true
  }

  export type FornecedorMinAggregateInputType = {
    id?: true
    nome_fantasia?: true
    razao_social?: true
    cnpj?: true
    telefone?: true
    email?: true
    endereco?: true
    data_cadastro?: true
  }

  export type FornecedorMaxAggregateInputType = {
    id?: true
    nome_fantasia?: true
    razao_social?: true
    cnpj?: true
    telefone?: true
    email?: true
    endereco?: true
    data_cadastro?: true
  }

  export type FornecedorCountAggregateInputType = {
    id?: true
    nome_fantasia?: true
    razao_social?: true
    cnpj?: true
    telefone?: true
    email?: true
    endereco?: true
    data_cadastro?: true
    _all?: true
  }

  export type FornecedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fornecedor to aggregate.
     */
    where?: fornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fornecedors to fetch.
     */
    orderBy?: fornecedorOrderByWithRelationInput | fornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fornecedors
    **/
    _count?: true | FornecedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FornecedorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FornecedorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FornecedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FornecedorMaxAggregateInputType
  }

  export type GetFornecedorAggregateType<T extends FornecedorAggregateArgs> = {
        [P in keyof T & keyof AggregateFornecedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFornecedor[P]>
      : GetScalarType<T[P], AggregateFornecedor[P]>
  }




  export type fornecedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fornecedorWhereInput
    orderBy?: fornecedorOrderByWithAggregationInput | fornecedorOrderByWithAggregationInput[]
    by: FornecedorScalarFieldEnum[] | FornecedorScalarFieldEnum
    having?: fornecedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FornecedorCountAggregateInputType | true
    _avg?: FornecedorAvgAggregateInputType
    _sum?: FornecedorSumAggregateInputType
    _min?: FornecedorMinAggregateInputType
    _max?: FornecedorMaxAggregateInputType
  }

  export type FornecedorGroupByOutputType = {
    id: number
    nome_fantasia: string
    razao_social: string | null
    cnpj: string
    telefone: string | null
    email: string
    endereco: string | null
    data_cadastro: Date | null
    _count: FornecedorCountAggregateOutputType | null
    _avg: FornecedorAvgAggregateOutputType | null
    _sum: FornecedorSumAggregateOutputType | null
    _min: FornecedorMinAggregateOutputType | null
    _max: FornecedorMaxAggregateOutputType | null
  }

  type GetFornecedorGroupByPayload<T extends fornecedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FornecedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FornecedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FornecedorGroupByOutputType[P]>
            : GetScalarType<T[P], FornecedorGroupByOutputType[P]>
        }
      >
    >


  export type fornecedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_fantasia?: boolean
    razao_social?: boolean
    cnpj?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    data_cadastro?: boolean
    insumo?: boolean | fornecedor$insumoArgs<ExtArgs>
    produto?: boolean | fornecedor$produtoArgs<ExtArgs>
    _count?: boolean | FornecedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fornecedor"]>

  export type fornecedorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_fantasia?: boolean
    razao_social?: boolean
    cnpj?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    data_cadastro?: boolean
  }, ExtArgs["result"]["fornecedor"]>

  export type fornecedorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_fantasia?: boolean
    razao_social?: boolean
    cnpj?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    data_cadastro?: boolean
  }, ExtArgs["result"]["fornecedor"]>

  export type fornecedorSelectScalar = {
    id?: boolean
    nome_fantasia?: boolean
    razao_social?: boolean
    cnpj?: boolean
    telefone?: boolean
    email?: boolean
    endereco?: boolean
    data_cadastro?: boolean
  }

  export type fornecedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_fantasia" | "razao_social" | "cnpj" | "telefone" | "email" | "endereco" | "data_cadastro", ExtArgs["result"]["fornecedor"]>
  export type fornecedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insumo?: boolean | fornecedor$insumoArgs<ExtArgs>
    produto?: boolean | fornecedor$produtoArgs<ExtArgs>
    _count?: boolean | FornecedorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type fornecedorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type fornecedorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $fornecedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fornecedor"
    objects: {
      insumo: Prisma.$insumoPayload<ExtArgs>[]
      produto: Prisma.$produtoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_fantasia: string
      razao_social: string | null
      cnpj: string
      telefone: string | null
      email: string
      endereco: string | null
      data_cadastro: Date | null
    }, ExtArgs["result"]["fornecedor"]>
    composites: {}
  }

  type fornecedorGetPayload<S extends boolean | null | undefined | fornecedorDefaultArgs> = $Result.GetResult<Prisma.$fornecedorPayload, S>

  type fornecedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fornecedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FornecedorCountAggregateInputType | true
    }

  export interface fornecedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fornecedor'], meta: { name: 'fornecedor' } }
    /**
     * Find zero or one Fornecedor that matches the filter.
     * @param {fornecedorFindUniqueArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fornecedorFindUniqueArgs>(args: SelectSubset<T, fornecedorFindUniqueArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fornecedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fornecedorFindUniqueOrThrowArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fornecedorFindUniqueOrThrowArgs>(args: SelectSubset<T, fornecedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fornecedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fornecedorFindFirstArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fornecedorFindFirstArgs>(args?: SelectSubset<T, fornecedorFindFirstArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fornecedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fornecedorFindFirstOrThrowArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fornecedorFindFirstOrThrowArgs>(args?: SelectSubset<T, fornecedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fornecedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fornecedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fornecedors
     * const fornecedors = await prisma.fornecedor.findMany()
     * 
     * // Get first 10 Fornecedors
     * const fornecedors = await prisma.fornecedor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fornecedorWithIdOnly = await prisma.fornecedor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends fornecedorFindManyArgs>(args?: SelectSubset<T, fornecedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fornecedor.
     * @param {fornecedorCreateArgs} args - Arguments to create a Fornecedor.
     * @example
     * // Create one Fornecedor
     * const Fornecedor = await prisma.fornecedor.create({
     *   data: {
     *     // ... data to create a Fornecedor
     *   }
     * })
     * 
     */
    create<T extends fornecedorCreateArgs>(args: SelectSubset<T, fornecedorCreateArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fornecedors.
     * @param {fornecedorCreateManyArgs} args - Arguments to create many Fornecedors.
     * @example
     * // Create many Fornecedors
     * const fornecedor = await prisma.fornecedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fornecedorCreateManyArgs>(args?: SelectSubset<T, fornecedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fornecedors and returns the data saved in the database.
     * @param {fornecedorCreateManyAndReturnArgs} args - Arguments to create many Fornecedors.
     * @example
     * // Create many Fornecedors
     * const fornecedor = await prisma.fornecedor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fornecedors and only return the `id`
     * const fornecedorWithIdOnly = await prisma.fornecedor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fornecedorCreateManyAndReturnArgs>(args?: SelectSubset<T, fornecedorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fornecedor.
     * @param {fornecedorDeleteArgs} args - Arguments to delete one Fornecedor.
     * @example
     * // Delete one Fornecedor
     * const Fornecedor = await prisma.fornecedor.delete({
     *   where: {
     *     // ... filter to delete one Fornecedor
     *   }
     * })
     * 
     */
    delete<T extends fornecedorDeleteArgs>(args: SelectSubset<T, fornecedorDeleteArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fornecedor.
     * @param {fornecedorUpdateArgs} args - Arguments to update one Fornecedor.
     * @example
     * // Update one Fornecedor
     * const fornecedor = await prisma.fornecedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fornecedorUpdateArgs>(args: SelectSubset<T, fornecedorUpdateArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fornecedors.
     * @param {fornecedorDeleteManyArgs} args - Arguments to filter Fornecedors to delete.
     * @example
     * // Delete a few Fornecedors
     * const { count } = await prisma.fornecedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fornecedorDeleteManyArgs>(args?: SelectSubset<T, fornecedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fornecedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fornecedors
     * const fornecedor = await prisma.fornecedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fornecedorUpdateManyArgs>(args: SelectSubset<T, fornecedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fornecedors and returns the data updated in the database.
     * @param {fornecedorUpdateManyAndReturnArgs} args - Arguments to update many Fornecedors.
     * @example
     * // Update many Fornecedors
     * const fornecedor = await prisma.fornecedor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fornecedors and only return the `id`
     * const fornecedorWithIdOnly = await prisma.fornecedor.updateManyAndReturn({
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
    updateManyAndReturn<T extends fornecedorUpdateManyAndReturnArgs>(args: SelectSubset<T, fornecedorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fornecedor.
     * @param {fornecedorUpsertArgs} args - Arguments to update or create a Fornecedor.
     * @example
     * // Update or create a Fornecedor
     * const fornecedor = await prisma.fornecedor.upsert({
     *   create: {
     *     // ... data to create a Fornecedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fornecedor we want to update
     *   }
     * })
     */
    upsert<T extends fornecedorUpsertArgs>(args: SelectSubset<T, fornecedorUpsertArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fornecedorCountArgs} args - Arguments to filter Fornecedors to count.
     * @example
     * // Count the number of Fornecedors
     * const count = await prisma.fornecedor.count({
     *   where: {
     *     // ... the filter for the Fornecedors we want to count
     *   }
     * })
    **/
    count<T extends fornecedorCountArgs>(
      args?: Subset<T, fornecedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FornecedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FornecedorAggregateArgs>(args: Subset<T, FornecedorAggregateArgs>): Prisma.PrismaPromise<GetFornecedorAggregateType<T>>

    /**
     * Group by Fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fornecedorGroupByArgs} args - Group by arguments.
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
      T extends fornecedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fornecedorGroupByArgs['orderBy'] }
        : { orderBy?: fornecedorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, fornecedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFornecedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fornecedor model
   */
  readonly fields: fornecedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fornecedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fornecedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insumo<T extends fornecedor$insumoArgs<ExtArgs> = {}>(args?: Subset<T, fornecedor$insumoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$insumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    produto<T extends fornecedor$produtoArgs<ExtArgs> = {}>(args?: Subset<T, fornecedor$produtoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the fornecedor model
   */
  interface fornecedorFieldRefs {
    readonly id: FieldRef<"fornecedor", 'Int'>
    readonly nome_fantasia: FieldRef<"fornecedor", 'String'>
    readonly razao_social: FieldRef<"fornecedor", 'String'>
    readonly cnpj: FieldRef<"fornecedor", 'String'>
    readonly telefone: FieldRef<"fornecedor", 'String'>
    readonly email: FieldRef<"fornecedor", 'String'>
    readonly endereco: FieldRef<"fornecedor", 'String'>
    readonly data_cadastro: FieldRef<"fornecedor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * fornecedor findUnique
   */
  export type fornecedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    /**
     * Filter, which fornecedor to fetch.
     */
    where: fornecedorWhereUniqueInput
  }

  /**
   * fornecedor findUniqueOrThrow
   */
  export type fornecedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    /**
     * Filter, which fornecedor to fetch.
     */
    where: fornecedorWhereUniqueInput
  }

  /**
   * fornecedor findFirst
   */
  export type fornecedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    /**
     * Filter, which fornecedor to fetch.
     */
    where?: fornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fornecedors to fetch.
     */
    orderBy?: fornecedorOrderByWithRelationInput | fornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fornecedors.
     */
    cursor?: fornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fornecedors.
     */
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * fornecedor findFirstOrThrow
   */
  export type fornecedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    /**
     * Filter, which fornecedor to fetch.
     */
    where?: fornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fornecedors to fetch.
     */
    orderBy?: fornecedorOrderByWithRelationInput | fornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fornecedors.
     */
    cursor?: fornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fornecedors.
     */
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * fornecedor findMany
   */
  export type fornecedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    /**
     * Filter, which fornecedors to fetch.
     */
    where?: fornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fornecedors to fetch.
     */
    orderBy?: fornecedorOrderByWithRelationInput | fornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fornecedors.
     */
    cursor?: fornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fornecedors.
     */
    skip?: number
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * fornecedor create
   */
  export type fornecedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    /**
     * The data needed to create a fornecedor.
     */
    data: XOR<fornecedorCreateInput, fornecedorUncheckedCreateInput>
  }

  /**
   * fornecedor createMany
   */
  export type fornecedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fornecedors.
     */
    data: fornecedorCreateManyInput | fornecedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fornecedor createManyAndReturn
   */
  export type fornecedorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * The data used to create many fornecedors.
     */
    data: fornecedorCreateManyInput | fornecedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fornecedor update
   */
  export type fornecedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    /**
     * The data needed to update a fornecedor.
     */
    data: XOR<fornecedorUpdateInput, fornecedorUncheckedUpdateInput>
    /**
     * Choose, which fornecedor to update.
     */
    where: fornecedorWhereUniqueInput
  }

  /**
   * fornecedor updateMany
   */
  export type fornecedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fornecedors.
     */
    data: XOR<fornecedorUpdateManyMutationInput, fornecedorUncheckedUpdateManyInput>
    /**
     * Filter which fornecedors to update
     */
    where?: fornecedorWhereInput
    /**
     * Limit how many fornecedors to update.
     */
    limit?: number
  }

  /**
   * fornecedor updateManyAndReturn
   */
  export type fornecedorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * The data used to update fornecedors.
     */
    data: XOR<fornecedorUpdateManyMutationInput, fornecedorUncheckedUpdateManyInput>
    /**
     * Filter which fornecedors to update
     */
    where?: fornecedorWhereInput
    /**
     * Limit how many fornecedors to update.
     */
    limit?: number
  }

  /**
   * fornecedor upsert
   */
  export type fornecedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    /**
     * The filter to search for the fornecedor to update in case it exists.
     */
    where: fornecedorWhereUniqueInput
    /**
     * In case the fornecedor found by the `where` argument doesn't exist, create a new fornecedor with this data.
     */
    create: XOR<fornecedorCreateInput, fornecedorUncheckedCreateInput>
    /**
     * In case the fornecedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fornecedorUpdateInput, fornecedorUncheckedUpdateInput>
  }

  /**
   * fornecedor delete
   */
  export type fornecedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    /**
     * Filter which fornecedor to delete.
     */
    where: fornecedorWhereUniqueInput
  }

  /**
   * fornecedor deleteMany
   */
  export type fornecedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fornecedors to delete
     */
    where?: fornecedorWhereInput
    /**
     * Limit how many fornecedors to delete.
     */
    limit?: number
  }

  /**
   * fornecedor.insumo
   */
  export type fornecedor$insumoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insumo
     */
    select?: insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insumo
     */
    omit?: insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insumoInclude<ExtArgs> | null
    where?: insumoWhereInput
    orderBy?: insumoOrderByWithRelationInput | insumoOrderByWithRelationInput[]
    cursor?: insumoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InsumoScalarFieldEnum | InsumoScalarFieldEnum[]
  }

  /**
   * fornecedor.produto
   */
  export type fornecedor$produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    where?: produtoWhereInput
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    cursor?: produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * fornecedor without action
   */
  export type fornecedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
  }


  /**
   * Model insumo
   */

  export type AggregateInsumo = {
    _count: InsumoCountAggregateOutputType | null
    _avg: InsumoAvgAggregateOutputType | null
    _sum: InsumoSumAggregateOutputType | null
    _min: InsumoMinAggregateOutputType | null
    _max: InsumoMaxAggregateOutputType | null
  }

  export type InsumoAvgAggregateOutputType = {
    id: number | null
    preco_unitario: Decimal | null
    id_fornecedor: number | null
  }

  export type InsumoSumAggregateOutputType = {
    id: number | null
    preco_unitario: Decimal | null
    id_fornecedor: number | null
  }

  export type InsumoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    unidade_medida: string | null
    preco_unitario: Decimal | null
    id_fornecedor: number | null
  }

  export type InsumoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    unidade_medida: string | null
    preco_unitario: Decimal | null
    id_fornecedor: number | null
  }

  export type InsumoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    unidade_medida: number
    preco_unitario: number
    id_fornecedor: number
    _all: number
  }


  export type InsumoAvgAggregateInputType = {
    id?: true
    preco_unitario?: true
    id_fornecedor?: true
  }

  export type InsumoSumAggregateInputType = {
    id?: true
    preco_unitario?: true
    id_fornecedor?: true
  }

  export type InsumoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    unidade_medida?: true
    preco_unitario?: true
    id_fornecedor?: true
  }

  export type InsumoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    unidade_medida?: true
    preco_unitario?: true
    id_fornecedor?: true
  }

  export type InsumoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    unidade_medida?: true
    preco_unitario?: true
    id_fornecedor?: true
    _all?: true
  }

  export type InsumoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which insumo to aggregate.
     */
    where?: insumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of insumos to fetch.
     */
    orderBy?: insumoOrderByWithRelationInput | insumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: insumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned insumos
    **/
    _count?: true | InsumoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InsumoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InsumoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InsumoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InsumoMaxAggregateInputType
  }

  export type GetInsumoAggregateType<T extends InsumoAggregateArgs> = {
        [P in keyof T & keyof AggregateInsumo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsumo[P]>
      : GetScalarType<T[P], AggregateInsumo[P]>
  }




  export type insumoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: insumoWhereInput
    orderBy?: insumoOrderByWithAggregationInput | insumoOrderByWithAggregationInput[]
    by: InsumoScalarFieldEnum[] | InsumoScalarFieldEnum
    having?: insumoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InsumoCountAggregateInputType | true
    _avg?: InsumoAvgAggregateInputType
    _sum?: InsumoSumAggregateInputType
    _min?: InsumoMinAggregateInputType
    _max?: InsumoMaxAggregateInputType
  }

  export type InsumoGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    unidade_medida: string | null
    preco_unitario: Decimal | null
    id_fornecedor: number | null
    _count: InsumoCountAggregateOutputType | null
    _avg: InsumoAvgAggregateOutputType | null
    _sum: InsumoSumAggregateOutputType | null
    _min: InsumoMinAggregateOutputType | null
    _max: InsumoMaxAggregateOutputType | null
  }

  type GetInsumoGroupByPayload<T extends insumoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InsumoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InsumoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsumoGroupByOutputType[P]>
            : GetScalarType<T[P], InsumoGroupByOutputType[P]>
        }
      >
    >


  export type insumoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    unidade_medida?: boolean
    preco_unitario?: boolean
    id_fornecedor?: boolean
    fornecedor?: boolean | insumo$fornecedorArgs<ExtArgs>
    produto_insumo?: boolean | insumo$produto_insumoArgs<ExtArgs>
    _count?: boolean | InsumoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insumo"]>

  export type insumoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    unidade_medida?: boolean
    preco_unitario?: boolean
    id_fornecedor?: boolean
    fornecedor?: boolean | insumo$fornecedorArgs<ExtArgs>
  }, ExtArgs["result"]["insumo"]>

  export type insumoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    unidade_medida?: boolean
    preco_unitario?: boolean
    id_fornecedor?: boolean
    fornecedor?: boolean | insumo$fornecedorArgs<ExtArgs>
  }, ExtArgs["result"]["insumo"]>

  export type insumoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    unidade_medida?: boolean
    preco_unitario?: boolean
    id_fornecedor?: boolean
  }

  export type insumoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "unidade_medida" | "preco_unitario" | "id_fornecedor", ExtArgs["result"]["insumo"]>
  export type insumoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | insumo$fornecedorArgs<ExtArgs>
    produto_insumo?: boolean | insumo$produto_insumoArgs<ExtArgs>
    _count?: boolean | InsumoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type insumoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | insumo$fornecedorArgs<ExtArgs>
  }
  export type insumoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | insumo$fornecedorArgs<ExtArgs>
  }

  export type $insumoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "insumo"
    objects: {
      fornecedor: Prisma.$fornecedorPayload<ExtArgs> | null
      produto_insumo: Prisma.$produto_insumoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      unidade_medida: string | null
      preco_unitario: Prisma.Decimal | null
      id_fornecedor: number | null
    }, ExtArgs["result"]["insumo"]>
    composites: {}
  }

  type insumoGetPayload<S extends boolean | null | undefined | insumoDefaultArgs> = $Result.GetResult<Prisma.$insumoPayload, S>

  type insumoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<insumoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InsumoCountAggregateInputType | true
    }

  export interface insumoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['insumo'], meta: { name: 'insumo' } }
    /**
     * Find zero or one Insumo that matches the filter.
     * @param {insumoFindUniqueArgs} args - Arguments to find a Insumo
     * @example
     * // Get one Insumo
     * const insumo = await prisma.insumo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends insumoFindUniqueArgs>(args: SelectSubset<T, insumoFindUniqueArgs<ExtArgs>>): Prisma__insumoClient<$Result.GetResult<Prisma.$insumoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Insumo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {insumoFindUniqueOrThrowArgs} args - Arguments to find a Insumo
     * @example
     * // Get one Insumo
     * const insumo = await prisma.insumo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends insumoFindUniqueOrThrowArgs>(args: SelectSubset<T, insumoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__insumoClient<$Result.GetResult<Prisma.$insumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insumo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insumoFindFirstArgs} args - Arguments to find a Insumo
     * @example
     * // Get one Insumo
     * const insumo = await prisma.insumo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends insumoFindFirstArgs>(args?: SelectSubset<T, insumoFindFirstArgs<ExtArgs>>): Prisma__insumoClient<$Result.GetResult<Prisma.$insumoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insumo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insumoFindFirstOrThrowArgs} args - Arguments to find a Insumo
     * @example
     * // Get one Insumo
     * const insumo = await prisma.insumo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends insumoFindFirstOrThrowArgs>(args?: SelectSubset<T, insumoFindFirstOrThrowArgs<ExtArgs>>): Prisma__insumoClient<$Result.GetResult<Prisma.$insumoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Insumos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insumoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insumos
     * const insumos = await prisma.insumo.findMany()
     * 
     * // Get first 10 Insumos
     * const insumos = await prisma.insumo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const insumoWithIdOnly = await prisma.insumo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends insumoFindManyArgs>(args?: SelectSubset<T, insumoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$insumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Insumo.
     * @param {insumoCreateArgs} args - Arguments to create a Insumo.
     * @example
     * // Create one Insumo
     * const Insumo = await prisma.insumo.create({
     *   data: {
     *     // ... data to create a Insumo
     *   }
     * })
     * 
     */
    create<T extends insumoCreateArgs>(args: SelectSubset<T, insumoCreateArgs<ExtArgs>>): Prisma__insumoClient<$Result.GetResult<Prisma.$insumoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Insumos.
     * @param {insumoCreateManyArgs} args - Arguments to create many Insumos.
     * @example
     * // Create many Insumos
     * const insumo = await prisma.insumo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends insumoCreateManyArgs>(args?: SelectSubset<T, insumoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Insumos and returns the data saved in the database.
     * @param {insumoCreateManyAndReturnArgs} args - Arguments to create many Insumos.
     * @example
     * // Create many Insumos
     * const insumo = await prisma.insumo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Insumos and only return the `id`
     * const insumoWithIdOnly = await prisma.insumo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends insumoCreateManyAndReturnArgs>(args?: SelectSubset<T, insumoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$insumoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Insumo.
     * @param {insumoDeleteArgs} args - Arguments to delete one Insumo.
     * @example
     * // Delete one Insumo
     * const Insumo = await prisma.insumo.delete({
     *   where: {
     *     // ... filter to delete one Insumo
     *   }
     * })
     * 
     */
    delete<T extends insumoDeleteArgs>(args: SelectSubset<T, insumoDeleteArgs<ExtArgs>>): Prisma__insumoClient<$Result.GetResult<Prisma.$insumoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Insumo.
     * @param {insumoUpdateArgs} args - Arguments to update one Insumo.
     * @example
     * // Update one Insumo
     * const insumo = await prisma.insumo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends insumoUpdateArgs>(args: SelectSubset<T, insumoUpdateArgs<ExtArgs>>): Prisma__insumoClient<$Result.GetResult<Prisma.$insumoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Insumos.
     * @param {insumoDeleteManyArgs} args - Arguments to filter Insumos to delete.
     * @example
     * // Delete a few Insumos
     * const { count } = await prisma.insumo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends insumoDeleteManyArgs>(args?: SelectSubset<T, insumoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insumoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insumos
     * const insumo = await prisma.insumo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends insumoUpdateManyArgs>(args: SelectSubset<T, insumoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insumos and returns the data updated in the database.
     * @param {insumoUpdateManyAndReturnArgs} args - Arguments to update many Insumos.
     * @example
     * // Update many Insumos
     * const insumo = await prisma.insumo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Insumos and only return the `id`
     * const insumoWithIdOnly = await prisma.insumo.updateManyAndReturn({
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
    updateManyAndReturn<T extends insumoUpdateManyAndReturnArgs>(args: SelectSubset<T, insumoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$insumoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Insumo.
     * @param {insumoUpsertArgs} args - Arguments to update or create a Insumo.
     * @example
     * // Update or create a Insumo
     * const insumo = await prisma.insumo.upsert({
     *   create: {
     *     // ... data to create a Insumo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insumo we want to update
     *   }
     * })
     */
    upsert<T extends insumoUpsertArgs>(args: SelectSubset<T, insumoUpsertArgs<ExtArgs>>): Prisma__insumoClient<$Result.GetResult<Prisma.$insumoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Insumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insumoCountArgs} args - Arguments to filter Insumos to count.
     * @example
     * // Count the number of Insumos
     * const count = await prisma.insumo.count({
     *   where: {
     *     // ... the filter for the Insumos we want to count
     *   }
     * })
    **/
    count<T extends insumoCountArgs>(
      args?: Subset<T, insumoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsumoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Insumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InsumoAggregateArgs>(args: Subset<T, InsumoAggregateArgs>): Prisma.PrismaPromise<GetInsumoAggregateType<T>>

    /**
     * Group by Insumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insumoGroupByArgs} args - Group by arguments.
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
      T extends insumoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: insumoGroupByArgs['orderBy'] }
        : { orderBy?: insumoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, insumoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsumoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the insumo model
   */
  readonly fields: insumoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for insumo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__insumoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fornecedor<T extends insumo$fornecedorArgs<ExtArgs> = {}>(args?: Subset<T, insumo$fornecedorArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    produto_insumo<T extends insumo$produto_insumoArgs<ExtArgs> = {}>(args?: Subset<T, insumo$produto_insumoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produto_insumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the insumo model
   */
  interface insumoFieldRefs {
    readonly id: FieldRef<"insumo", 'Int'>
    readonly nome: FieldRef<"insumo", 'String'>
    readonly descricao: FieldRef<"insumo", 'String'>
    readonly unidade_medida: FieldRef<"insumo", 'String'>
    readonly preco_unitario: FieldRef<"insumo", 'Decimal'>
    readonly id_fornecedor: FieldRef<"insumo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * insumo findUnique
   */
  export type insumoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insumo
     */
    select?: insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insumo
     */
    omit?: insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insumoInclude<ExtArgs> | null
    /**
     * Filter, which insumo to fetch.
     */
    where: insumoWhereUniqueInput
  }

  /**
   * insumo findUniqueOrThrow
   */
  export type insumoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insumo
     */
    select?: insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insumo
     */
    omit?: insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insumoInclude<ExtArgs> | null
    /**
     * Filter, which insumo to fetch.
     */
    where: insumoWhereUniqueInput
  }

  /**
   * insumo findFirst
   */
  export type insumoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insumo
     */
    select?: insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insumo
     */
    omit?: insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insumoInclude<ExtArgs> | null
    /**
     * Filter, which insumo to fetch.
     */
    where?: insumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of insumos to fetch.
     */
    orderBy?: insumoOrderByWithRelationInput | insumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for insumos.
     */
    cursor?: insumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of insumos.
     */
    distinct?: InsumoScalarFieldEnum | InsumoScalarFieldEnum[]
  }

  /**
   * insumo findFirstOrThrow
   */
  export type insumoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insumo
     */
    select?: insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insumo
     */
    omit?: insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insumoInclude<ExtArgs> | null
    /**
     * Filter, which insumo to fetch.
     */
    where?: insumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of insumos to fetch.
     */
    orderBy?: insumoOrderByWithRelationInput | insumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for insumos.
     */
    cursor?: insumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of insumos.
     */
    distinct?: InsumoScalarFieldEnum | InsumoScalarFieldEnum[]
  }

  /**
   * insumo findMany
   */
  export type insumoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insumo
     */
    select?: insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insumo
     */
    omit?: insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insumoInclude<ExtArgs> | null
    /**
     * Filter, which insumos to fetch.
     */
    where?: insumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of insumos to fetch.
     */
    orderBy?: insumoOrderByWithRelationInput | insumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing insumos.
     */
    cursor?: insumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` insumos.
     */
    skip?: number
    distinct?: InsumoScalarFieldEnum | InsumoScalarFieldEnum[]
  }

  /**
   * insumo create
   */
  export type insumoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insumo
     */
    select?: insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insumo
     */
    omit?: insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insumoInclude<ExtArgs> | null
    /**
     * The data needed to create a insumo.
     */
    data: XOR<insumoCreateInput, insumoUncheckedCreateInput>
  }

  /**
   * insumo createMany
   */
  export type insumoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many insumos.
     */
    data: insumoCreateManyInput | insumoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * insumo createManyAndReturn
   */
  export type insumoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insumo
     */
    select?: insumoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the insumo
     */
    omit?: insumoOmit<ExtArgs> | null
    /**
     * The data used to create many insumos.
     */
    data: insumoCreateManyInput | insumoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insumoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * insumo update
   */
  export type insumoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insumo
     */
    select?: insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insumo
     */
    omit?: insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insumoInclude<ExtArgs> | null
    /**
     * The data needed to update a insumo.
     */
    data: XOR<insumoUpdateInput, insumoUncheckedUpdateInput>
    /**
     * Choose, which insumo to update.
     */
    where: insumoWhereUniqueInput
  }

  /**
   * insumo updateMany
   */
  export type insumoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update insumos.
     */
    data: XOR<insumoUpdateManyMutationInput, insumoUncheckedUpdateManyInput>
    /**
     * Filter which insumos to update
     */
    where?: insumoWhereInput
    /**
     * Limit how many insumos to update.
     */
    limit?: number
  }

  /**
   * insumo updateManyAndReturn
   */
  export type insumoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insumo
     */
    select?: insumoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the insumo
     */
    omit?: insumoOmit<ExtArgs> | null
    /**
     * The data used to update insumos.
     */
    data: XOR<insumoUpdateManyMutationInput, insumoUncheckedUpdateManyInput>
    /**
     * Filter which insumos to update
     */
    where?: insumoWhereInput
    /**
     * Limit how many insumos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insumoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * insumo upsert
   */
  export type insumoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insumo
     */
    select?: insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insumo
     */
    omit?: insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insumoInclude<ExtArgs> | null
    /**
     * The filter to search for the insumo to update in case it exists.
     */
    where: insumoWhereUniqueInput
    /**
     * In case the insumo found by the `where` argument doesn't exist, create a new insumo with this data.
     */
    create: XOR<insumoCreateInput, insumoUncheckedCreateInput>
    /**
     * In case the insumo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<insumoUpdateInput, insumoUncheckedUpdateInput>
  }

  /**
   * insumo delete
   */
  export type insumoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insumo
     */
    select?: insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insumo
     */
    omit?: insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insumoInclude<ExtArgs> | null
    /**
     * Filter which insumo to delete.
     */
    where: insumoWhereUniqueInput
  }

  /**
   * insumo deleteMany
   */
  export type insumoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which insumos to delete
     */
    where?: insumoWhereInput
    /**
     * Limit how many insumos to delete.
     */
    limit?: number
  }

  /**
   * insumo.fornecedor
   */
  export type insumo$fornecedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    where?: fornecedorWhereInput
  }

  /**
   * insumo.produto_insumo
   */
  export type insumo$produto_insumoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_insumo
     */
    select?: produto_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_insumo
     */
    omit?: produto_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_insumoInclude<ExtArgs> | null
    where?: produto_insumoWhereInput
    orderBy?: produto_insumoOrderByWithRelationInput | produto_insumoOrderByWithRelationInput[]
    cursor?: produto_insumoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Produto_insumoScalarFieldEnum | Produto_insumoScalarFieldEnum[]
  }

  /**
   * insumo without action
   */
  export type insumoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insumo
     */
    select?: insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insumo
     */
    omit?: insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insumoInclude<ExtArgs> | null
  }


  /**
   * Model pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    valor_total: Decimal | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    valor_total: Decimal | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    data_pedido: Date | null
    data_entrega: Date | null
    status: string | null
    valor_total: Decimal | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    data_pedido: Date | null
    data_entrega: Date | null
    status: string | null
    valor_total: Decimal | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    id_cliente: number
    data_pedido: number
    data_entrega: number
    status: number
    valor_total: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    id_cliente?: true
    valor_total?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    id_cliente?: true
    valor_total?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    id_cliente?: true
    data_pedido?: true
    data_entrega?: true
    status?: true
    valor_total?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    id_cliente?: true
    data_pedido?: true
    data_entrega?: true
    status?: true
    valor_total?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    id_cliente?: true
    data_pedido?: true
    data_entrega?: true
    status?: true
    valor_total?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido to aggregate.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithAggregationInput | pedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    id_cliente: number | null
    data_pedido: Date | null
    data_entrega: Date | null
    status: string | null
    valor_total: Decimal | null
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_cliente?: boolean
    data_pedido?: boolean
    data_entrega?: boolean
    status?: boolean
    valor_total?: boolean
    cliente?: boolean | pedido$clienteArgs<ExtArgs>
    pedido_produto?: boolean | pedido$pedido_produtoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_cliente?: boolean
    data_pedido?: boolean
    data_entrega?: boolean
    status?: boolean
    valor_total?: boolean
    cliente?: boolean | pedido$clienteArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_cliente?: boolean
    data_pedido?: boolean
    data_entrega?: boolean
    status?: boolean
    valor_total?: boolean
    cliente?: boolean | pedido$clienteArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectScalar = {
    id?: boolean
    id_cliente?: boolean
    data_pedido?: boolean
    data_entrega?: boolean
    status?: boolean
    valor_total?: boolean
  }

  export type pedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_cliente" | "data_pedido" | "data_entrega" | "status" | "valor_total", ExtArgs["result"]["pedido"]>
  export type pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | pedido$clienteArgs<ExtArgs>
    pedido_produto?: boolean | pedido$pedido_produtoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | pedido$clienteArgs<ExtArgs>
  }
  export type pedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | pedido$clienteArgs<ExtArgs>
  }

  export type $pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedido"
    objects: {
      cliente: Prisma.$clientePayload<ExtArgs> | null
      pedido_produto: Prisma.$pedido_produtoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_cliente: number | null
      data_pedido: Date | null
      data_entrega: Date | null
      status: string | null
      valor_total: Prisma.Decimal | null
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type pedidoGetPayload<S extends boolean | null | undefined | pedidoDefaultArgs> = $Result.GetResult<Prisma.$pedidoPayload, S>

  type pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedido'], meta: { name: 'pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {pedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedidoFindUniqueArgs>(args: SelectSubset<T, pedidoFindUniqueArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedidoFindFirstArgs>(args?: SelectSubset<T, pedidoFindFirstArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pedidoFindManyArgs>(args?: SelectSubset<T, pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {pedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends pedidoCreateArgs>(args: SelectSubset<T, pedidoCreateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {pedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pedidoCreateManyArgs>(args?: SelectSubset<T, pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {pedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, pedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {pedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends pedidoDeleteArgs>(args: SelectSubset<T, pedidoDeleteArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {pedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pedidoUpdateArgs>(args: SelectSubset<T, pedidoUpdateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {pedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pedidoDeleteManyArgs>(args?: SelectSubset<T, pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pedidoUpdateManyArgs>(args: SelectSubset<T, pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {pedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
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
    updateManyAndReturn<T extends pedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, pedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {pedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends pedidoUpsertArgs>(args: SelectSubset<T, pedidoUpsertArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends pedidoCountArgs>(
      args?: Subset<T, pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoGroupByArgs} args - Group by arguments.
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
      T extends pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedidoGroupByArgs['orderBy'] }
        : { orderBy?: pedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedido model
   */
  readonly fields: pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends pedido$clienteArgs<ExtArgs> = {}>(args?: Subset<T, pedido$clienteArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pedido_produto<T extends pedido$pedido_produtoArgs<ExtArgs> = {}>(args?: Subset<T, pedido$pedido_produtoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the pedido model
   */
  interface pedidoFieldRefs {
    readonly id: FieldRef<"pedido", 'Int'>
    readonly id_cliente: FieldRef<"pedido", 'Int'>
    readonly data_pedido: FieldRef<"pedido", 'DateTime'>
    readonly data_entrega: FieldRef<"pedido", 'DateTime'>
    readonly status: FieldRef<"pedido", 'String'>
    readonly valor_total: FieldRef<"pedido", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * pedido findUnique
   */
  export type pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findUniqueOrThrow
   */
  export type pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findFirst
   */
  export type pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findFirstOrThrow
   */
  export type pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findMany
   */
  export type pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido create
   */
  export type pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a pedido.
     */
    data?: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
  }

  /**
   * pedido createMany
   */
  export type pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido createManyAndReturn
   */
  export type pedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido update
   */
  export type pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a pedido.
     */
    data: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
    /**
     * Choose, which pedido to update.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido updateMany
   */
  export type pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
  }

  /**
   * pedido updateManyAndReturn
   */
  export type pedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido upsert
   */
  export type pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the pedido to update in case it exists.
     */
    where: pedidoWhereUniqueInput
    /**
     * In case the pedido found by the `where` argument doesn't exist, create a new pedido with this data.
     */
    create: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
    /**
     * In case the pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
  }

  /**
   * pedido delete
   */
  export type pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter which pedido to delete.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido deleteMany
   */
  export type pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedidos to delete
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to delete.
     */
    limit?: number
  }

  /**
   * pedido.cliente
   */
  export type pedido$clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    where?: clienteWhereInput
  }

  /**
   * pedido.pedido_produto
   */
  export type pedido$pedido_produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    where?: pedido_produtoWhereInput
    orderBy?: pedido_produtoOrderByWithRelationInput | pedido_produtoOrderByWithRelationInput[]
    cursor?: pedido_produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pedido_produtoScalarFieldEnum | Pedido_produtoScalarFieldEnum[]
  }

  /**
   * pedido without action
   */
  export type pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
  }


  /**
   * Model pedido_produto
   */

  export type AggregatePedido_produto = {
    _count: Pedido_produtoCountAggregateOutputType | null
    _avg: Pedido_produtoAvgAggregateOutputType | null
    _sum: Pedido_produtoSumAggregateOutputType | null
    _min: Pedido_produtoMinAggregateOutputType | null
    _max: Pedido_produtoMaxAggregateOutputType | null
  }

  export type Pedido_produtoAvgAggregateOutputType = {
    id: number | null
    id_pedido: number | null
    id_produto: number | null
    quantidade: number | null
    preco_unitario: Decimal | null
  }

  export type Pedido_produtoSumAggregateOutputType = {
    id: number | null
    id_pedido: number | null
    id_produto: number | null
    quantidade: number | null
    preco_unitario: Decimal | null
  }

  export type Pedido_produtoMinAggregateOutputType = {
    id: number | null
    id_pedido: number | null
    id_produto: number | null
    quantidade: number | null
    preco_unitario: Decimal | null
  }

  export type Pedido_produtoMaxAggregateOutputType = {
    id: number | null
    id_pedido: number | null
    id_produto: number | null
    quantidade: number | null
    preco_unitario: Decimal | null
  }

  export type Pedido_produtoCountAggregateOutputType = {
    id: number
    id_pedido: number
    id_produto: number
    quantidade: number
    preco_unitario: number
    _all: number
  }


  export type Pedido_produtoAvgAggregateInputType = {
    id?: true
    id_pedido?: true
    id_produto?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type Pedido_produtoSumAggregateInputType = {
    id?: true
    id_pedido?: true
    id_produto?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type Pedido_produtoMinAggregateInputType = {
    id?: true
    id_pedido?: true
    id_produto?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type Pedido_produtoMaxAggregateInputType = {
    id?: true
    id_pedido?: true
    id_produto?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type Pedido_produtoCountAggregateInputType = {
    id?: true
    id_pedido?: true
    id_produto?: true
    quantidade?: true
    preco_unitario?: true
    _all?: true
  }

  export type Pedido_produtoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido_produto to aggregate.
     */
    where?: pedido_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_produtos to fetch.
     */
    orderBy?: pedido_produtoOrderByWithRelationInput | pedido_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedido_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedido_produtos
    **/
    _count?: true | Pedido_produtoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pedido_produtoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pedido_produtoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pedido_produtoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pedido_produtoMaxAggregateInputType
  }

  export type GetPedido_produtoAggregateType<T extends Pedido_produtoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido_produto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido_produto[P]>
      : GetScalarType<T[P], AggregatePedido_produto[P]>
  }




  export type pedido_produtoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedido_produtoWhereInput
    orderBy?: pedido_produtoOrderByWithAggregationInput | pedido_produtoOrderByWithAggregationInput[]
    by: Pedido_produtoScalarFieldEnum[] | Pedido_produtoScalarFieldEnum
    having?: pedido_produtoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pedido_produtoCountAggregateInputType | true
    _avg?: Pedido_produtoAvgAggregateInputType
    _sum?: Pedido_produtoSumAggregateInputType
    _min?: Pedido_produtoMinAggregateInputType
    _max?: Pedido_produtoMaxAggregateInputType
  }

  export type Pedido_produtoGroupByOutputType = {
    id: number
    id_pedido: number
    id_produto: number
    quantidade: number | null
    preco_unitario: Decimal | null
    _count: Pedido_produtoCountAggregateOutputType | null
    _avg: Pedido_produtoAvgAggregateOutputType | null
    _sum: Pedido_produtoSumAggregateOutputType | null
    _min: Pedido_produtoMinAggregateOutputType | null
    _max: Pedido_produtoMaxAggregateOutputType | null
  }

  type GetPedido_produtoGroupByPayload<T extends pedido_produtoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pedido_produtoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pedido_produtoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pedido_produtoGroupByOutputType[P]>
            : GetScalarType<T[P], Pedido_produtoGroupByOutputType[P]>
        }
      >
    >


  export type pedido_produtoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_pedido?: boolean
    id_produto?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido_produto"]>

  export type pedido_produtoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_pedido?: boolean
    id_produto?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido_produto"]>

  export type pedido_produtoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_pedido?: boolean
    id_produto?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido_produto"]>

  export type pedido_produtoSelectScalar = {
    id?: boolean
    id_pedido?: boolean
    id_produto?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
  }

  export type pedido_produtoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_pedido" | "id_produto" | "quantidade" | "preco_unitario", ExtArgs["result"]["pedido_produto"]>
  export type pedido_produtoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }
  export type pedido_produtoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }
  export type pedido_produtoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    produto?: boolean | produtoDefaultArgs<ExtArgs>
  }

  export type $pedido_produtoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedido_produto"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
      produto: Prisma.$produtoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_pedido: number
      id_produto: number
      quantidade: number | null
      preco_unitario: Prisma.Decimal | null
    }, ExtArgs["result"]["pedido_produto"]>
    composites: {}
  }

  type pedido_produtoGetPayload<S extends boolean | null | undefined | pedido_produtoDefaultArgs> = $Result.GetResult<Prisma.$pedido_produtoPayload, S>

  type pedido_produtoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pedido_produtoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pedido_produtoCountAggregateInputType | true
    }

  export interface pedido_produtoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedido_produto'], meta: { name: 'pedido_produto' } }
    /**
     * Find zero or one Pedido_produto that matches the filter.
     * @param {pedido_produtoFindUniqueArgs} args - Arguments to find a Pedido_produto
     * @example
     * // Get one Pedido_produto
     * const pedido_produto = await prisma.pedido_produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedido_produtoFindUniqueArgs>(args: SelectSubset<T, pedido_produtoFindUniqueArgs<ExtArgs>>): Prisma__pedido_produtoClient<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido_produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedido_produtoFindUniqueOrThrowArgs} args - Arguments to find a Pedido_produto
     * @example
     * // Get one Pedido_produto
     * const pedido_produto = await prisma.pedido_produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedido_produtoFindUniqueOrThrowArgs>(args: SelectSubset<T, pedido_produtoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pedido_produtoClient<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido_produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_produtoFindFirstArgs} args - Arguments to find a Pedido_produto
     * @example
     * // Get one Pedido_produto
     * const pedido_produto = await prisma.pedido_produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedido_produtoFindFirstArgs>(args?: SelectSubset<T, pedido_produtoFindFirstArgs<ExtArgs>>): Prisma__pedido_produtoClient<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido_produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_produtoFindFirstOrThrowArgs} args - Arguments to find a Pedido_produto
     * @example
     * // Get one Pedido_produto
     * const pedido_produto = await prisma.pedido_produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedido_produtoFindFirstOrThrowArgs>(args?: SelectSubset<T, pedido_produtoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pedido_produtoClient<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedido_produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_produtoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedido_produtos
     * const pedido_produtos = await prisma.pedido_produto.findMany()
     * 
     * // Get first 10 Pedido_produtos
     * const pedido_produtos = await prisma.pedido_produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedido_produtoWithIdOnly = await prisma.pedido_produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pedido_produtoFindManyArgs>(args?: SelectSubset<T, pedido_produtoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido_produto.
     * @param {pedido_produtoCreateArgs} args - Arguments to create a Pedido_produto.
     * @example
     * // Create one Pedido_produto
     * const Pedido_produto = await prisma.pedido_produto.create({
     *   data: {
     *     // ... data to create a Pedido_produto
     *   }
     * })
     * 
     */
    create<T extends pedido_produtoCreateArgs>(args: SelectSubset<T, pedido_produtoCreateArgs<ExtArgs>>): Prisma__pedido_produtoClient<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedido_produtos.
     * @param {pedido_produtoCreateManyArgs} args - Arguments to create many Pedido_produtos.
     * @example
     * // Create many Pedido_produtos
     * const pedido_produto = await prisma.pedido_produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pedido_produtoCreateManyArgs>(args?: SelectSubset<T, pedido_produtoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedido_produtos and returns the data saved in the database.
     * @param {pedido_produtoCreateManyAndReturnArgs} args - Arguments to create many Pedido_produtos.
     * @example
     * // Create many Pedido_produtos
     * const pedido_produto = await prisma.pedido_produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedido_produtos and only return the `id`
     * const pedido_produtoWithIdOnly = await prisma.pedido_produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pedido_produtoCreateManyAndReturnArgs>(args?: SelectSubset<T, pedido_produtoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido_produto.
     * @param {pedido_produtoDeleteArgs} args - Arguments to delete one Pedido_produto.
     * @example
     * // Delete one Pedido_produto
     * const Pedido_produto = await prisma.pedido_produto.delete({
     *   where: {
     *     // ... filter to delete one Pedido_produto
     *   }
     * })
     * 
     */
    delete<T extends pedido_produtoDeleteArgs>(args: SelectSubset<T, pedido_produtoDeleteArgs<ExtArgs>>): Prisma__pedido_produtoClient<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido_produto.
     * @param {pedido_produtoUpdateArgs} args - Arguments to update one Pedido_produto.
     * @example
     * // Update one Pedido_produto
     * const pedido_produto = await prisma.pedido_produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pedido_produtoUpdateArgs>(args: SelectSubset<T, pedido_produtoUpdateArgs<ExtArgs>>): Prisma__pedido_produtoClient<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedido_produtos.
     * @param {pedido_produtoDeleteManyArgs} args - Arguments to filter Pedido_produtos to delete.
     * @example
     * // Delete a few Pedido_produtos
     * const { count } = await prisma.pedido_produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pedido_produtoDeleteManyArgs>(args?: SelectSubset<T, pedido_produtoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedido_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_produtoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedido_produtos
     * const pedido_produto = await prisma.pedido_produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pedido_produtoUpdateManyArgs>(args: SelectSubset<T, pedido_produtoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedido_produtos and returns the data updated in the database.
     * @param {pedido_produtoUpdateManyAndReturnArgs} args - Arguments to update many Pedido_produtos.
     * @example
     * // Update many Pedido_produtos
     * const pedido_produto = await prisma.pedido_produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedido_produtos and only return the `id`
     * const pedido_produtoWithIdOnly = await prisma.pedido_produto.updateManyAndReturn({
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
    updateManyAndReturn<T extends pedido_produtoUpdateManyAndReturnArgs>(args: SelectSubset<T, pedido_produtoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido_produto.
     * @param {pedido_produtoUpsertArgs} args - Arguments to update or create a Pedido_produto.
     * @example
     * // Update or create a Pedido_produto
     * const pedido_produto = await prisma.pedido_produto.upsert({
     *   create: {
     *     // ... data to create a Pedido_produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido_produto we want to update
     *   }
     * })
     */
    upsert<T extends pedido_produtoUpsertArgs>(args: SelectSubset<T, pedido_produtoUpsertArgs<ExtArgs>>): Prisma__pedido_produtoClient<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedido_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_produtoCountArgs} args - Arguments to filter Pedido_produtos to count.
     * @example
     * // Count the number of Pedido_produtos
     * const count = await prisma.pedido_produto.count({
     *   where: {
     *     // ... the filter for the Pedido_produtos we want to count
     *   }
     * })
    **/
    count<T extends pedido_produtoCountArgs>(
      args?: Subset<T, pedido_produtoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pedido_produtoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido_produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pedido_produtoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Pedido_produtoAggregateArgs>(args: Subset<T, Pedido_produtoAggregateArgs>): Prisma.PrismaPromise<GetPedido_produtoAggregateType<T>>

    /**
     * Group by Pedido_produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_produtoGroupByArgs} args - Group by arguments.
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
      T extends pedido_produtoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedido_produtoGroupByArgs['orderBy'] }
        : { orderBy?: pedido_produtoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pedido_produtoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedido_produtoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedido_produto model
   */
  readonly fields: pedido_produtoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedido_produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedido_produtoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends produtoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produtoDefaultArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pedido_produto model
   */
  interface pedido_produtoFieldRefs {
    readonly id: FieldRef<"pedido_produto", 'Int'>
    readonly id_pedido: FieldRef<"pedido_produto", 'Int'>
    readonly id_produto: FieldRef<"pedido_produto", 'Int'>
    readonly quantidade: FieldRef<"pedido_produto", 'Int'>
    readonly preco_unitario: FieldRef<"pedido_produto", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * pedido_produto findUnique
   */
  export type pedido_produtoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_produto to fetch.
     */
    where: pedido_produtoWhereUniqueInput
  }

  /**
   * pedido_produto findUniqueOrThrow
   */
  export type pedido_produtoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_produto to fetch.
     */
    where: pedido_produtoWhereUniqueInput
  }

  /**
   * pedido_produto findFirst
   */
  export type pedido_produtoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_produto to fetch.
     */
    where?: pedido_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_produtos to fetch.
     */
    orderBy?: pedido_produtoOrderByWithRelationInput | pedido_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedido_produtos.
     */
    cursor?: pedido_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedido_produtos.
     */
    distinct?: Pedido_produtoScalarFieldEnum | Pedido_produtoScalarFieldEnum[]
  }

  /**
   * pedido_produto findFirstOrThrow
   */
  export type pedido_produtoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_produto to fetch.
     */
    where?: pedido_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_produtos to fetch.
     */
    orderBy?: pedido_produtoOrderByWithRelationInput | pedido_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedido_produtos.
     */
    cursor?: pedido_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedido_produtos.
     */
    distinct?: Pedido_produtoScalarFieldEnum | Pedido_produtoScalarFieldEnum[]
  }

  /**
   * pedido_produto findMany
   */
  export type pedido_produtoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_produtos to fetch.
     */
    where?: pedido_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_produtos to fetch.
     */
    orderBy?: pedido_produtoOrderByWithRelationInput | pedido_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedido_produtos.
     */
    cursor?: pedido_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_produtos.
     */
    skip?: number
    distinct?: Pedido_produtoScalarFieldEnum | Pedido_produtoScalarFieldEnum[]
  }

  /**
   * pedido_produto create
   */
  export type pedido_produtoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    /**
     * The data needed to create a pedido_produto.
     */
    data: XOR<pedido_produtoCreateInput, pedido_produtoUncheckedCreateInput>
  }

  /**
   * pedido_produto createMany
   */
  export type pedido_produtoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedido_produtos.
     */
    data: pedido_produtoCreateManyInput | pedido_produtoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido_produto createManyAndReturn
   */
  export type pedido_produtoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * The data used to create many pedido_produtos.
     */
    data: pedido_produtoCreateManyInput | pedido_produtoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido_produto update
   */
  export type pedido_produtoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    /**
     * The data needed to update a pedido_produto.
     */
    data: XOR<pedido_produtoUpdateInput, pedido_produtoUncheckedUpdateInput>
    /**
     * Choose, which pedido_produto to update.
     */
    where: pedido_produtoWhereUniqueInput
  }

  /**
   * pedido_produto updateMany
   */
  export type pedido_produtoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedido_produtos.
     */
    data: XOR<pedido_produtoUpdateManyMutationInput, pedido_produtoUncheckedUpdateManyInput>
    /**
     * Filter which pedido_produtos to update
     */
    where?: pedido_produtoWhereInput
    /**
     * Limit how many pedido_produtos to update.
     */
    limit?: number
  }

  /**
   * pedido_produto updateManyAndReturn
   */
  export type pedido_produtoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * The data used to update pedido_produtos.
     */
    data: XOR<pedido_produtoUpdateManyMutationInput, pedido_produtoUncheckedUpdateManyInput>
    /**
     * Filter which pedido_produtos to update
     */
    where?: pedido_produtoWhereInput
    /**
     * Limit how many pedido_produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido_produto upsert
   */
  export type pedido_produtoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    /**
     * The filter to search for the pedido_produto to update in case it exists.
     */
    where: pedido_produtoWhereUniqueInput
    /**
     * In case the pedido_produto found by the `where` argument doesn't exist, create a new pedido_produto with this data.
     */
    create: XOR<pedido_produtoCreateInput, pedido_produtoUncheckedCreateInput>
    /**
     * In case the pedido_produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedido_produtoUpdateInput, pedido_produtoUncheckedUpdateInput>
  }

  /**
   * pedido_produto delete
   */
  export type pedido_produtoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    /**
     * Filter which pedido_produto to delete.
     */
    where: pedido_produtoWhereUniqueInput
  }

  /**
   * pedido_produto deleteMany
   */
  export type pedido_produtoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido_produtos to delete
     */
    where?: pedido_produtoWhereInput
    /**
     * Limit how many pedido_produtos to delete.
     */
    limit?: number
  }

  /**
   * pedido_produto without action
   */
  export type pedido_produtoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
  }


  /**
   * Model produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    preco_unitario: Decimal | null
    estoque: number | null
    id_fornecedor: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    preco_unitario: Decimal | null
    estoque: number | null
    id_fornecedor: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    preco_unitario: Decimal | null
    estoque: number | null
    unidade_medida: string | null
    id_fornecedor: number | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    preco_unitario: Decimal | null
    estoque: number | null
    unidade_medida: string | null
    id_fornecedor: number | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    preco_unitario: number
    estoque: number
    unidade_medida: number
    id_fornecedor: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    preco_unitario?: true
    estoque?: true
    id_fornecedor?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    preco_unitario?: true
    estoque?: true
    id_fornecedor?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco_unitario?: true
    estoque?: true
    unidade_medida?: true
    id_fornecedor?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco_unitario?: true
    estoque?: true
    unidade_medida?: true
    id_fornecedor?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco_unitario?: true
    estoque?: true
    unidade_medida?: true
    id_fornecedor?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produto to aggregate.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type produtoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtoWhereInput
    orderBy?: produtoOrderByWithAggregationInput | produtoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: produtoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    preco_unitario: Decimal | null
    estoque: number | null
    unidade_medida: string | null
    id_fornecedor: number | null
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends produtoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type produtoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco_unitario?: boolean
    estoque?: boolean
    unidade_medida?: boolean
    id_fornecedor?: boolean
    pedido_produto?: boolean | produto$pedido_produtoArgs<ExtArgs>
    fornecedor?: boolean | produto$fornecedorArgs<ExtArgs>
    produto_insumo?: boolean | produto$produto_insumoArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type produtoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco_unitario?: boolean
    estoque?: boolean
    unidade_medida?: boolean
    id_fornecedor?: boolean
    fornecedor?: boolean | produto$fornecedorArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type produtoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco_unitario?: boolean
    estoque?: boolean
    unidade_medida?: boolean
    id_fornecedor?: boolean
    fornecedor?: boolean | produto$fornecedorArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type produtoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco_unitario?: boolean
    estoque?: boolean
    unidade_medida?: boolean
    id_fornecedor?: boolean
  }

  export type produtoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "preco_unitario" | "estoque" | "unidade_medida" | "id_fornecedor", ExtArgs["result"]["produto"]>
  export type produtoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido_produto?: boolean | produto$pedido_produtoArgs<ExtArgs>
    fornecedor?: boolean | produto$fornecedorArgs<ExtArgs>
    produto_insumo?: boolean | produto$produto_insumoArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type produtoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | produto$fornecedorArgs<ExtArgs>
  }
  export type produtoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | produto$fornecedorArgs<ExtArgs>
  }

  export type $produtoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produto"
    objects: {
      pedido_produto: Prisma.$pedido_produtoPayload<ExtArgs>[]
      fornecedor: Prisma.$fornecedorPayload<ExtArgs> | null
      produto_insumo: Prisma.$produto_insumoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      preco_unitario: Prisma.Decimal | null
      estoque: number | null
      unidade_medida: string | null
      id_fornecedor: number | null
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type produtoGetPayload<S extends boolean | null | undefined | produtoDefaultArgs> = $Result.GetResult<Prisma.$produtoPayload, S>

  type produtoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produtoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface produtoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produto'], meta: { name: 'produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {produtoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produtoFindUniqueArgs>(args: SelectSubset<T, produtoFindUniqueArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produtoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produtoFindUniqueOrThrowArgs>(args: SelectSubset<T, produtoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produtoFindFirstArgs>(args?: SelectSubset<T, produtoFindFirstArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produtoFindFirstOrThrowArgs>(args?: SelectSubset<T, produtoFindFirstOrThrowArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends produtoFindManyArgs>(args?: SelectSubset<T, produtoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {produtoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends produtoCreateArgs>(args: SelectSubset<T, produtoCreateArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {produtoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produtoCreateManyArgs>(args?: SelectSubset<T, produtoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {produtoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends produtoCreateManyAndReturnArgs>(args?: SelectSubset<T, produtoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto.
     * @param {produtoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends produtoDeleteArgs>(args: SelectSubset<T, produtoDeleteArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {produtoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produtoUpdateArgs>(args: SelectSubset<T, produtoUpdateArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {produtoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produtoDeleteManyArgs>(args?: SelectSubset<T, produtoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produtoUpdateManyArgs>(args: SelectSubset<T, produtoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {produtoUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.updateManyAndReturn({
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
    updateManyAndReturn<T extends produtoUpdateManyAndReturnArgs>(args: SelectSubset<T, produtoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto.
     * @param {produtoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends produtoUpsertArgs>(args: SelectSubset<T, produtoUpsertArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends produtoCountArgs>(
      args?: Subset<T, produtoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtoGroupByArgs} args - Group by arguments.
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
      T extends produtoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produtoGroupByArgs['orderBy'] }
        : { orderBy?: produtoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, produtoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produto model
   */
  readonly fields: produtoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produtoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido_produto<T extends produto$pedido_produtoArgs<ExtArgs> = {}>(args?: Subset<T, produto$pedido_produtoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fornecedor<T extends produto$fornecedorArgs<ExtArgs> = {}>(args?: Subset<T, produto$fornecedorArgs<ExtArgs>>): Prisma__fornecedorClient<$Result.GetResult<Prisma.$fornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    produto_insumo<T extends produto$produto_insumoArgs<ExtArgs> = {}>(args?: Subset<T, produto$produto_insumoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produto_insumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the produto model
   */
  interface produtoFieldRefs {
    readonly id: FieldRef<"produto", 'Int'>
    readonly nome: FieldRef<"produto", 'String'>
    readonly descricao: FieldRef<"produto", 'String'>
    readonly preco_unitario: FieldRef<"produto", 'Decimal'>
    readonly estoque: FieldRef<"produto", 'Int'>
    readonly unidade_medida: FieldRef<"produto", 'String'>
    readonly id_fornecedor: FieldRef<"produto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * produto findUnique
   */
  export type produtoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto findUniqueOrThrow
   */
  export type produtoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto findFirst
   */
  export type produtoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * produto findFirstOrThrow
   */
  export type produtoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produto to fetch.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * produto findMany
   */
  export type produtoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where?: produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtoOrderByWithRelationInput | produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produtos.
     */
    cursor?: produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * produto create
   */
  export type produtoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * The data needed to create a produto.
     */
    data: XOR<produtoCreateInput, produtoUncheckedCreateInput>
  }

  /**
   * produto createMany
   */
  export type produtoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produtos.
     */
    data: produtoCreateManyInput | produtoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produto createManyAndReturn
   */
  export type produtoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * The data used to create many produtos.
     */
    data: produtoCreateManyInput | produtoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * produto update
   */
  export type produtoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * The data needed to update a produto.
     */
    data: XOR<produtoUpdateInput, produtoUncheckedUpdateInput>
    /**
     * Choose, which produto to update.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto updateMany
   */
  export type produtoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produtos.
     */
    data: XOR<produtoUpdateManyMutationInput, produtoUncheckedUpdateManyInput>
    /**
     * Filter which produtos to update
     */
    where?: produtoWhereInput
    /**
     * Limit how many produtos to update.
     */
    limit?: number
  }

  /**
   * produto updateManyAndReturn
   */
  export type produtoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * The data used to update produtos.
     */
    data: XOR<produtoUpdateManyMutationInput, produtoUncheckedUpdateManyInput>
    /**
     * Filter which produtos to update
     */
    where?: produtoWhereInput
    /**
     * Limit how many produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * produto upsert
   */
  export type produtoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * The filter to search for the produto to update in case it exists.
     */
    where: produtoWhereUniqueInput
    /**
     * In case the produto found by the `where` argument doesn't exist, create a new produto with this data.
     */
    create: XOR<produtoCreateInput, produtoUncheckedCreateInput>
    /**
     * In case the produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produtoUpdateInput, produtoUncheckedUpdateInput>
  }

  /**
   * produto delete
   */
  export type produtoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    /**
     * Filter which produto to delete.
     */
    where: produtoWhereUniqueInput
  }

  /**
   * produto deleteMany
   */
  export type produtoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produtos to delete
     */
    where?: produtoWhereInput
    /**
     * Limit how many produtos to delete.
     */
    limit?: number
  }

  /**
   * produto.pedido_produto
   */
  export type produto$pedido_produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    where?: pedido_produtoWhereInput
    orderBy?: pedido_produtoOrderByWithRelationInput | pedido_produtoOrderByWithRelationInput[]
    cursor?: pedido_produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pedido_produtoScalarFieldEnum | Pedido_produtoScalarFieldEnum[]
  }

  /**
   * produto.fornecedor
   */
  export type produto$fornecedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fornecedor
     */
    select?: fornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fornecedor
     */
    omit?: fornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fornecedorInclude<ExtArgs> | null
    where?: fornecedorWhereInput
  }

  /**
   * produto.produto_insumo
   */
  export type produto$produto_insumoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_insumo
     */
    select?: produto_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_insumo
     */
    omit?: produto_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_insumoInclude<ExtArgs> | null
    where?: produto_insumoWhereInput
    orderBy?: produto_insumoOrderByWithRelationInput | produto_insumoOrderByWithRelationInput[]
    cursor?: produto_insumoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Produto_insumoScalarFieldEnum | Produto_insumoScalarFieldEnum[]
  }

  /**
   * produto without action
   */
  export type produtoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
  }


  /**
   * Model produto_insumo
   */

  export type AggregateProduto_insumo = {
    _count: Produto_insumoCountAggregateOutputType | null
    _avg: Produto_insumoAvgAggregateOutputType | null
    _sum: Produto_insumoSumAggregateOutputType | null
    _min: Produto_insumoMinAggregateOutputType | null
    _max: Produto_insumoMaxAggregateOutputType | null
  }

  export type Produto_insumoAvgAggregateOutputType = {
    id: number | null
    id_produto: number | null
    id_insumo: number | null
    quantidade: Decimal | null
    preco_unitario: Decimal | null
  }

  export type Produto_insumoSumAggregateOutputType = {
    id: number | null
    id_produto: number | null
    id_insumo: number | null
    quantidade: Decimal | null
    preco_unitario: Decimal | null
  }

  export type Produto_insumoMinAggregateOutputType = {
    id: number | null
    id_produto: number | null
    id_insumo: number | null
    quantidade: Decimal | null
    preco_unitario: Decimal | null
  }

  export type Produto_insumoMaxAggregateOutputType = {
    id: number | null
    id_produto: number | null
    id_insumo: number | null
    quantidade: Decimal | null
    preco_unitario: Decimal | null
  }

  export type Produto_insumoCountAggregateOutputType = {
    id: number
    id_produto: number
    id_insumo: number
    quantidade: number
    preco_unitario: number
    _all: number
  }


  export type Produto_insumoAvgAggregateInputType = {
    id?: true
    id_produto?: true
    id_insumo?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type Produto_insumoSumAggregateInputType = {
    id?: true
    id_produto?: true
    id_insumo?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type Produto_insumoMinAggregateInputType = {
    id?: true
    id_produto?: true
    id_insumo?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type Produto_insumoMaxAggregateInputType = {
    id?: true
    id_produto?: true
    id_insumo?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type Produto_insumoCountAggregateInputType = {
    id?: true
    id_produto?: true
    id_insumo?: true
    quantidade?: true
    preco_unitario?: true
    _all?: true
  }

  export type Produto_insumoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produto_insumo to aggregate.
     */
    where?: produto_insumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produto_insumos to fetch.
     */
    orderBy?: produto_insumoOrderByWithRelationInput | produto_insumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produto_insumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produto_insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produto_insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produto_insumos
    **/
    _count?: true | Produto_insumoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Produto_insumoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Produto_insumoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Produto_insumoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Produto_insumoMaxAggregateInputType
  }

  export type GetProduto_insumoAggregateType<T extends Produto_insumoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto_insumo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto_insumo[P]>
      : GetScalarType<T[P], AggregateProduto_insumo[P]>
  }




  export type produto_insumoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produto_insumoWhereInput
    orderBy?: produto_insumoOrderByWithAggregationInput | produto_insumoOrderByWithAggregationInput[]
    by: Produto_insumoScalarFieldEnum[] | Produto_insumoScalarFieldEnum
    having?: produto_insumoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Produto_insumoCountAggregateInputType | true
    _avg?: Produto_insumoAvgAggregateInputType
    _sum?: Produto_insumoSumAggregateInputType
    _min?: Produto_insumoMinAggregateInputType
    _max?: Produto_insumoMaxAggregateInputType
  }

  export type Produto_insumoGroupByOutputType = {
    id: number
    id_produto: number | null
    id_insumo: number | null
    quantidade: Decimal | null
    preco_unitario: Decimal | null
    _count: Produto_insumoCountAggregateOutputType | null
    _avg: Produto_insumoAvgAggregateOutputType | null
    _sum: Produto_insumoSumAggregateOutputType | null
    _min: Produto_insumoMinAggregateOutputType | null
    _max: Produto_insumoMaxAggregateOutputType | null
  }

  type GetProduto_insumoGroupByPayload<T extends produto_insumoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Produto_insumoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Produto_insumoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Produto_insumoGroupByOutputType[P]>
            : GetScalarType<T[P], Produto_insumoGroupByOutputType[P]>
        }
      >
    >


  export type produto_insumoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_produto?: boolean
    id_insumo?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    insumo?: boolean | produto_insumo$insumoArgs<ExtArgs>
    produto?: boolean | produto_insumo$produtoArgs<ExtArgs>
  }, ExtArgs["result"]["produto_insumo"]>

  export type produto_insumoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_produto?: boolean
    id_insumo?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    insumo?: boolean | produto_insumo$insumoArgs<ExtArgs>
    produto?: boolean | produto_insumo$produtoArgs<ExtArgs>
  }, ExtArgs["result"]["produto_insumo"]>

  export type produto_insumoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_produto?: boolean
    id_insumo?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    insumo?: boolean | produto_insumo$insumoArgs<ExtArgs>
    produto?: boolean | produto_insumo$produtoArgs<ExtArgs>
  }, ExtArgs["result"]["produto_insumo"]>

  export type produto_insumoSelectScalar = {
    id?: boolean
    id_produto?: boolean
    id_insumo?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
  }

  export type produto_insumoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_produto" | "id_insumo" | "quantidade" | "preco_unitario", ExtArgs["result"]["produto_insumo"]>
  export type produto_insumoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insumo?: boolean | produto_insumo$insumoArgs<ExtArgs>
    produto?: boolean | produto_insumo$produtoArgs<ExtArgs>
  }
  export type produto_insumoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insumo?: boolean | produto_insumo$insumoArgs<ExtArgs>
    produto?: boolean | produto_insumo$produtoArgs<ExtArgs>
  }
  export type produto_insumoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insumo?: boolean | produto_insumo$insumoArgs<ExtArgs>
    produto?: boolean | produto_insumo$produtoArgs<ExtArgs>
  }

  export type $produto_insumoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produto_insumo"
    objects: {
      insumo: Prisma.$insumoPayload<ExtArgs> | null
      produto: Prisma.$produtoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_produto: number | null
      id_insumo: number | null
      quantidade: Prisma.Decimal | null
      preco_unitario: Prisma.Decimal | null
    }, ExtArgs["result"]["produto_insumo"]>
    composites: {}
  }

  type produto_insumoGetPayload<S extends boolean | null | undefined | produto_insumoDefaultArgs> = $Result.GetResult<Prisma.$produto_insumoPayload, S>

  type produto_insumoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produto_insumoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Produto_insumoCountAggregateInputType | true
    }

  export interface produto_insumoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produto_insumo'], meta: { name: 'produto_insumo' } }
    /**
     * Find zero or one Produto_insumo that matches the filter.
     * @param {produto_insumoFindUniqueArgs} args - Arguments to find a Produto_insumo
     * @example
     * // Get one Produto_insumo
     * const produto_insumo = await prisma.produto_insumo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produto_insumoFindUniqueArgs>(args: SelectSubset<T, produto_insumoFindUniqueArgs<ExtArgs>>): Prisma__produto_insumoClient<$Result.GetResult<Prisma.$produto_insumoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto_insumo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produto_insumoFindUniqueOrThrowArgs} args - Arguments to find a Produto_insumo
     * @example
     * // Get one Produto_insumo
     * const produto_insumo = await prisma.produto_insumo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produto_insumoFindUniqueOrThrowArgs>(args: SelectSubset<T, produto_insumoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produto_insumoClient<$Result.GetResult<Prisma.$produto_insumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto_insumo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produto_insumoFindFirstArgs} args - Arguments to find a Produto_insumo
     * @example
     * // Get one Produto_insumo
     * const produto_insumo = await prisma.produto_insumo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produto_insumoFindFirstArgs>(args?: SelectSubset<T, produto_insumoFindFirstArgs<ExtArgs>>): Prisma__produto_insumoClient<$Result.GetResult<Prisma.$produto_insumoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto_insumo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produto_insumoFindFirstOrThrowArgs} args - Arguments to find a Produto_insumo
     * @example
     * // Get one Produto_insumo
     * const produto_insumo = await prisma.produto_insumo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produto_insumoFindFirstOrThrowArgs>(args?: SelectSubset<T, produto_insumoFindFirstOrThrowArgs<ExtArgs>>): Prisma__produto_insumoClient<$Result.GetResult<Prisma.$produto_insumoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produto_insumos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produto_insumoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produto_insumos
     * const produto_insumos = await prisma.produto_insumo.findMany()
     * 
     * // Get first 10 Produto_insumos
     * const produto_insumos = await prisma.produto_insumo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produto_insumoWithIdOnly = await prisma.produto_insumo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends produto_insumoFindManyArgs>(args?: SelectSubset<T, produto_insumoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produto_insumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto_insumo.
     * @param {produto_insumoCreateArgs} args - Arguments to create a Produto_insumo.
     * @example
     * // Create one Produto_insumo
     * const Produto_insumo = await prisma.produto_insumo.create({
     *   data: {
     *     // ... data to create a Produto_insumo
     *   }
     * })
     * 
     */
    create<T extends produto_insumoCreateArgs>(args: SelectSubset<T, produto_insumoCreateArgs<ExtArgs>>): Prisma__produto_insumoClient<$Result.GetResult<Prisma.$produto_insumoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produto_insumos.
     * @param {produto_insumoCreateManyArgs} args - Arguments to create many Produto_insumos.
     * @example
     * // Create many Produto_insumos
     * const produto_insumo = await prisma.produto_insumo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produto_insumoCreateManyArgs>(args?: SelectSubset<T, produto_insumoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produto_insumos and returns the data saved in the database.
     * @param {produto_insumoCreateManyAndReturnArgs} args - Arguments to create many Produto_insumos.
     * @example
     * // Create many Produto_insumos
     * const produto_insumo = await prisma.produto_insumo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produto_insumos and only return the `id`
     * const produto_insumoWithIdOnly = await prisma.produto_insumo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends produto_insumoCreateManyAndReturnArgs>(args?: SelectSubset<T, produto_insumoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produto_insumoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto_insumo.
     * @param {produto_insumoDeleteArgs} args - Arguments to delete one Produto_insumo.
     * @example
     * // Delete one Produto_insumo
     * const Produto_insumo = await prisma.produto_insumo.delete({
     *   where: {
     *     // ... filter to delete one Produto_insumo
     *   }
     * })
     * 
     */
    delete<T extends produto_insumoDeleteArgs>(args: SelectSubset<T, produto_insumoDeleteArgs<ExtArgs>>): Prisma__produto_insumoClient<$Result.GetResult<Prisma.$produto_insumoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto_insumo.
     * @param {produto_insumoUpdateArgs} args - Arguments to update one Produto_insumo.
     * @example
     * // Update one Produto_insumo
     * const produto_insumo = await prisma.produto_insumo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produto_insumoUpdateArgs>(args: SelectSubset<T, produto_insumoUpdateArgs<ExtArgs>>): Prisma__produto_insumoClient<$Result.GetResult<Prisma.$produto_insumoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produto_insumos.
     * @param {produto_insumoDeleteManyArgs} args - Arguments to filter Produto_insumos to delete.
     * @example
     * // Delete a few Produto_insumos
     * const { count } = await prisma.produto_insumo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produto_insumoDeleteManyArgs>(args?: SelectSubset<T, produto_insumoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produto_insumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produto_insumoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produto_insumos
     * const produto_insumo = await prisma.produto_insumo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produto_insumoUpdateManyArgs>(args: SelectSubset<T, produto_insumoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produto_insumos and returns the data updated in the database.
     * @param {produto_insumoUpdateManyAndReturnArgs} args - Arguments to update many Produto_insumos.
     * @example
     * // Update many Produto_insumos
     * const produto_insumo = await prisma.produto_insumo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produto_insumos and only return the `id`
     * const produto_insumoWithIdOnly = await prisma.produto_insumo.updateManyAndReturn({
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
    updateManyAndReturn<T extends produto_insumoUpdateManyAndReturnArgs>(args: SelectSubset<T, produto_insumoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produto_insumoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto_insumo.
     * @param {produto_insumoUpsertArgs} args - Arguments to update or create a Produto_insumo.
     * @example
     * // Update or create a Produto_insumo
     * const produto_insumo = await prisma.produto_insumo.upsert({
     *   create: {
     *     // ... data to create a Produto_insumo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto_insumo we want to update
     *   }
     * })
     */
    upsert<T extends produto_insumoUpsertArgs>(args: SelectSubset<T, produto_insumoUpsertArgs<ExtArgs>>): Prisma__produto_insumoClient<$Result.GetResult<Prisma.$produto_insumoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produto_insumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produto_insumoCountArgs} args - Arguments to filter Produto_insumos to count.
     * @example
     * // Count the number of Produto_insumos
     * const count = await prisma.produto_insumo.count({
     *   where: {
     *     // ... the filter for the Produto_insumos we want to count
     *   }
     * })
    **/
    count<T extends produto_insumoCountArgs>(
      args?: Subset<T, produto_insumoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Produto_insumoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto_insumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produto_insumoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Produto_insumoAggregateArgs>(args: Subset<T, Produto_insumoAggregateArgs>): Prisma.PrismaPromise<GetProduto_insumoAggregateType<T>>

    /**
     * Group by Produto_insumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produto_insumoGroupByArgs} args - Group by arguments.
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
      T extends produto_insumoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produto_insumoGroupByArgs['orderBy'] }
        : { orderBy?: produto_insumoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, produto_insumoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduto_insumoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produto_insumo model
   */
  readonly fields: produto_insumoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produto_insumo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produto_insumoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insumo<T extends produto_insumo$insumoArgs<ExtArgs> = {}>(args?: Subset<T, produto_insumo$insumoArgs<ExtArgs>>): Prisma__insumoClient<$Result.GetResult<Prisma.$insumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    produto<T extends produto_insumo$produtoArgs<ExtArgs> = {}>(args?: Subset<T, produto_insumo$produtoArgs<ExtArgs>>): Prisma__produtoClient<$Result.GetResult<Prisma.$produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the produto_insumo model
   */
  interface produto_insumoFieldRefs {
    readonly id: FieldRef<"produto_insumo", 'Int'>
    readonly id_produto: FieldRef<"produto_insumo", 'Int'>
    readonly id_insumo: FieldRef<"produto_insumo", 'Int'>
    readonly quantidade: FieldRef<"produto_insumo", 'Decimal'>
    readonly preco_unitario: FieldRef<"produto_insumo", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * produto_insumo findUnique
   */
  export type produto_insumoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_insumo
     */
    select?: produto_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_insumo
     */
    omit?: produto_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_insumoInclude<ExtArgs> | null
    /**
     * Filter, which produto_insumo to fetch.
     */
    where: produto_insumoWhereUniqueInput
  }

  /**
   * produto_insumo findUniqueOrThrow
   */
  export type produto_insumoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_insumo
     */
    select?: produto_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_insumo
     */
    omit?: produto_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_insumoInclude<ExtArgs> | null
    /**
     * Filter, which produto_insumo to fetch.
     */
    where: produto_insumoWhereUniqueInput
  }

  /**
   * produto_insumo findFirst
   */
  export type produto_insumoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_insumo
     */
    select?: produto_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_insumo
     */
    omit?: produto_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_insumoInclude<ExtArgs> | null
    /**
     * Filter, which produto_insumo to fetch.
     */
    where?: produto_insumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produto_insumos to fetch.
     */
    orderBy?: produto_insumoOrderByWithRelationInput | produto_insumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produto_insumos.
     */
    cursor?: produto_insumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produto_insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produto_insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produto_insumos.
     */
    distinct?: Produto_insumoScalarFieldEnum | Produto_insumoScalarFieldEnum[]
  }

  /**
   * produto_insumo findFirstOrThrow
   */
  export type produto_insumoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_insumo
     */
    select?: produto_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_insumo
     */
    omit?: produto_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_insumoInclude<ExtArgs> | null
    /**
     * Filter, which produto_insumo to fetch.
     */
    where?: produto_insumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produto_insumos to fetch.
     */
    orderBy?: produto_insumoOrderByWithRelationInput | produto_insumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produto_insumos.
     */
    cursor?: produto_insumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produto_insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produto_insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produto_insumos.
     */
    distinct?: Produto_insumoScalarFieldEnum | Produto_insumoScalarFieldEnum[]
  }

  /**
   * produto_insumo findMany
   */
  export type produto_insumoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_insumo
     */
    select?: produto_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_insumo
     */
    omit?: produto_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_insumoInclude<ExtArgs> | null
    /**
     * Filter, which produto_insumos to fetch.
     */
    where?: produto_insumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produto_insumos to fetch.
     */
    orderBy?: produto_insumoOrderByWithRelationInput | produto_insumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produto_insumos.
     */
    cursor?: produto_insumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produto_insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produto_insumos.
     */
    skip?: number
    distinct?: Produto_insumoScalarFieldEnum | Produto_insumoScalarFieldEnum[]
  }

  /**
   * produto_insumo create
   */
  export type produto_insumoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_insumo
     */
    select?: produto_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_insumo
     */
    omit?: produto_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_insumoInclude<ExtArgs> | null
    /**
     * The data needed to create a produto_insumo.
     */
    data?: XOR<produto_insumoCreateInput, produto_insumoUncheckedCreateInput>
  }

  /**
   * produto_insumo createMany
   */
  export type produto_insumoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produto_insumos.
     */
    data: produto_insumoCreateManyInput | produto_insumoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produto_insumo createManyAndReturn
   */
  export type produto_insumoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_insumo
     */
    select?: produto_insumoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produto_insumo
     */
    omit?: produto_insumoOmit<ExtArgs> | null
    /**
     * The data used to create many produto_insumos.
     */
    data: produto_insumoCreateManyInput | produto_insumoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_insumoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * produto_insumo update
   */
  export type produto_insumoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_insumo
     */
    select?: produto_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_insumo
     */
    omit?: produto_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_insumoInclude<ExtArgs> | null
    /**
     * The data needed to update a produto_insumo.
     */
    data: XOR<produto_insumoUpdateInput, produto_insumoUncheckedUpdateInput>
    /**
     * Choose, which produto_insumo to update.
     */
    where: produto_insumoWhereUniqueInput
  }

  /**
   * produto_insumo updateMany
   */
  export type produto_insumoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produto_insumos.
     */
    data: XOR<produto_insumoUpdateManyMutationInput, produto_insumoUncheckedUpdateManyInput>
    /**
     * Filter which produto_insumos to update
     */
    where?: produto_insumoWhereInput
    /**
     * Limit how many produto_insumos to update.
     */
    limit?: number
  }

  /**
   * produto_insumo updateManyAndReturn
   */
  export type produto_insumoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_insumo
     */
    select?: produto_insumoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produto_insumo
     */
    omit?: produto_insumoOmit<ExtArgs> | null
    /**
     * The data used to update produto_insumos.
     */
    data: XOR<produto_insumoUpdateManyMutationInput, produto_insumoUncheckedUpdateManyInput>
    /**
     * Filter which produto_insumos to update
     */
    where?: produto_insumoWhereInput
    /**
     * Limit how many produto_insumos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_insumoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * produto_insumo upsert
   */
  export type produto_insumoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_insumo
     */
    select?: produto_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_insumo
     */
    omit?: produto_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_insumoInclude<ExtArgs> | null
    /**
     * The filter to search for the produto_insumo to update in case it exists.
     */
    where: produto_insumoWhereUniqueInput
    /**
     * In case the produto_insumo found by the `where` argument doesn't exist, create a new produto_insumo with this data.
     */
    create: XOR<produto_insumoCreateInput, produto_insumoUncheckedCreateInput>
    /**
     * In case the produto_insumo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produto_insumoUpdateInput, produto_insumoUncheckedUpdateInput>
  }

  /**
   * produto_insumo delete
   */
  export type produto_insumoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_insumo
     */
    select?: produto_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_insumo
     */
    omit?: produto_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_insumoInclude<ExtArgs> | null
    /**
     * Filter which produto_insumo to delete.
     */
    where: produto_insumoWhereUniqueInput
  }

  /**
   * produto_insumo deleteMany
   */
  export type produto_insumoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produto_insumos to delete
     */
    where?: produto_insumoWhereInput
    /**
     * Limit how many produto_insumos to delete.
     */
    limit?: number
  }

  /**
   * produto_insumo.insumo
   */
  export type produto_insumo$insumoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insumo
     */
    select?: insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insumo
     */
    omit?: insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insumoInclude<ExtArgs> | null
    where?: insumoWhereInput
  }

  /**
   * produto_insumo.produto
   */
  export type produto_insumo$produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto
     */
    select?: produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto
     */
    omit?: produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtoInclude<ExtArgs> | null
    where?: produtoWhereInput
  }

  /**
   * produto_insumo without action
   */
  export type produto_insumoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_insumo
     */
    select?: produto_insumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_insumo
     */
    omit?: produto_insumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produto_insumoInclude<ExtArgs> | null
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


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cpf_cnpj: 'cpf_cnpj',
    telefone: 'telefone',
    email: 'email',
    endereco: 'endereco',
    data_cadastro: 'data_cadastro'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const FornecedorScalarFieldEnum: {
    id: 'id',
    nome_fantasia: 'nome_fantasia',
    razao_social: 'razao_social',
    cnpj: 'cnpj',
    telefone: 'telefone',
    email: 'email',
    endereco: 'endereco',
    data_cadastro: 'data_cadastro'
  };

  export type FornecedorScalarFieldEnum = (typeof FornecedorScalarFieldEnum)[keyof typeof FornecedorScalarFieldEnum]


  export const InsumoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    unidade_medida: 'unidade_medida',
    preco_unitario: 'preco_unitario',
    id_fornecedor: 'id_fornecedor'
  };

  export type InsumoScalarFieldEnum = (typeof InsumoScalarFieldEnum)[keyof typeof InsumoScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    id_cliente: 'id_cliente',
    data_pedido: 'data_pedido',
    data_entrega: 'data_entrega',
    status: 'status',
    valor_total: 'valor_total'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const Pedido_produtoScalarFieldEnum: {
    id: 'id',
    id_pedido: 'id_pedido',
    id_produto: 'id_produto',
    quantidade: 'quantidade',
    preco_unitario: 'preco_unitario'
  };

  export type Pedido_produtoScalarFieldEnum = (typeof Pedido_produtoScalarFieldEnum)[keyof typeof Pedido_produtoScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    preco_unitario: 'preco_unitario',
    estoque: 'estoque',
    unidade_medida: 'unidade_medida',
    id_fornecedor: 'id_fornecedor'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const Produto_insumoScalarFieldEnum: {
    id: 'id',
    id_produto: 'id_produto',
    id_insumo: 'id_insumo',
    quantidade: 'quantidade',
    preco_unitario: 'preco_unitario'
  };

  export type Produto_insumoScalarFieldEnum = (typeof Produto_insumoScalarFieldEnum)[keyof typeof Produto_insumoScalarFieldEnum]


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


  export type clienteWhereInput = {
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    id?: IntFilter<"cliente"> | number
    nome?: StringFilter<"cliente"> | string
    cpf_cnpj?: StringFilter<"cliente"> | string
    telefone?: StringNullableFilter<"cliente"> | string | null
    email?: StringFilter<"cliente"> | string
    endereco?: StringNullableFilter<"cliente"> | string | null
    data_cadastro?: DateTimeNullableFilter<"cliente"> | Date | string | null
    pedido?: PedidoListRelationFilter
  }

  export type clienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf_cnpj?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrder
    endereco?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    pedido?: pedidoOrderByRelationAggregateInput
  }

  export type clienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf_cnpj?: string
    email?: string
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    nome?: StringFilter<"cliente"> | string
    telefone?: StringNullableFilter<"cliente"> | string | null
    endereco?: StringNullableFilter<"cliente"> | string | null
    data_cadastro?: DateTimeNullableFilter<"cliente"> | Date | string | null
    pedido?: PedidoListRelationFilter
  }, "id" | "cpf_cnpj" | "email">

  export type clienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf_cnpj?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrder
    endereco?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    _count?: clienteCountOrderByAggregateInput
    _avg?: clienteAvgOrderByAggregateInput
    _max?: clienteMaxOrderByAggregateInput
    _min?: clienteMinOrderByAggregateInput
    _sum?: clienteSumOrderByAggregateInput
  }

  export type clienteScalarWhereWithAggregatesInput = {
    AND?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    OR?: clienteScalarWhereWithAggregatesInput[]
    NOT?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cliente"> | number
    nome?: StringWithAggregatesFilter<"cliente"> | string
    cpf_cnpj?: StringWithAggregatesFilter<"cliente"> | string
    telefone?: StringNullableWithAggregatesFilter<"cliente"> | string | null
    email?: StringWithAggregatesFilter<"cliente"> | string
    endereco?: StringNullableWithAggregatesFilter<"cliente"> | string | null
    data_cadastro?: DateTimeNullableWithAggregatesFilter<"cliente"> | Date | string | null
  }

  export type fornecedorWhereInput = {
    AND?: fornecedorWhereInput | fornecedorWhereInput[]
    OR?: fornecedorWhereInput[]
    NOT?: fornecedorWhereInput | fornecedorWhereInput[]
    id?: IntFilter<"fornecedor"> | number
    nome_fantasia?: StringFilter<"fornecedor"> | string
    razao_social?: StringNullableFilter<"fornecedor"> | string | null
    cnpj?: StringFilter<"fornecedor"> | string
    telefone?: StringNullableFilter<"fornecedor"> | string | null
    email?: StringFilter<"fornecedor"> | string
    endereco?: StringNullableFilter<"fornecedor"> | string | null
    data_cadastro?: DateTimeNullableFilter<"fornecedor"> | Date | string | null
    insumo?: InsumoListRelationFilter
    produto?: ProdutoListRelationFilter
  }

  export type fornecedorOrderByWithRelationInput = {
    id?: SortOrder
    nome_fantasia?: SortOrder
    razao_social?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrder
    endereco?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    insumo?: insumoOrderByRelationAggregateInput
    produto?: produtoOrderByRelationAggregateInput
  }

  export type fornecedorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cnpj?: string
    email?: string
    AND?: fornecedorWhereInput | fornecedorWhereInput[]
    OR?: fornecedorWhereInput[]
    NOT?: fornecedorWhereInput | fornecedorWhereInput[]
    nome_fantasia?: StringFilter<"fornecedor"> | string
    razao_social?: StringNullableFilter<"fornecedor"> | string | null
    telefone?: StringNullableFilter<"fornecedor"> | string | null
    endereco?: StringNullableFilter<"fornecedor"> | string | null
    data_cadastro?: DateTimeNullableFilter<"fornecedor"> | Date | string | null
    insumo?: InsumoListRelationFilter
    produto?: ProdutoListRelationFilter
  }, "id" | "cnpj" | "email">

  export type fornecedorOrderByWithAggregationInput = {
    id?: SortOrder
    nome_fantasia?: SortOrder
    razao_social?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrder
    endereco?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    _count?: fornecedorCountOrderByAggregateInput
    _avg?: fornecedorAvgOrderByAggregateInput
    _max?: fornecedorMaxOrderByAggregateInput
    _min?: fornecedorMinOrderByAggregateInput
    _sum?: fornecedorSumOrderByAggregateInput
  }

  export type fornecedorScalarWhereWithAggregatesInput = {
    AND?: fornecedorScalarWhereWithAggregatesInput | fornecedorScalarWhereWithAggregatesInput[]
    OR?: fornecedorScalarWhereWithAggregatesInput[]
    NOT?: fornecedorScalarWhereWithAggregatesInput | fornecedorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"fornecedor"> | number
    nome_fantasia?: StringWithAggregatesFilter<"fornecedor"> | string
    razao_social?: StringNullableWithAggregatesFilter<"fornecedor"> | string | null
    cnpj?: StringWithAggregatesFilter<"fornecedor"> | string
    telefone?: StringNullableWithAggregatesFilter<"fornecedor"> | string | null
    email?: StringWithAggregatesFilter<"fornecedor"> | string
    endereco?: StringNullableWithAggregatesFilter<"fornecedor"> | string | null
    data_cadastro?: DateTimeNullableWithAggregatesFilter<"fornecedor"> | Date | string | null
  }

  export type insumoWhereInput = {
    AND?: insumoWhereInput | insumoWhereInput[]
    OR?: insumoWhereInput[]
    NOT?: insumoWhereInput | insumoWhereInput[]
    id?: IntFilter<"insumo"> | number
    nome?: StringFilter<"insumo"> | string
    descricao?: StringNullableFilter<"insumo"> | string | null
    unidade_medida?: StringNullableFilter<"insumo"> | string | null
    preco_unitario?: DecimalNullableFilter<"insumo"> | Decimal | DecimalJsLike | number | string | null
    id_fornecedor?: IntNullableFilter<"insumo"> | number | null
    fornecedor?: XOR<FornecedorNullableScalarRelationFilter, fornecedorWhereInput> | null
    produto_insumo?: Produto_insumoListRelationFilter
  }

  export type insumoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    unidade_medida?: SortOrderInput | SortOrder
    preco_unitario?: SortOrderInput | SortOrder
    id_fornecedor?: SortOrderInput | SortOrder
    fornecedor?: fornecedorOrderByWithRelationInput
    produto_insumo?: produto_insumoOrderByRelationAggregateInput
  }

  export type insumoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: insumoWhereInput | insumoWhereInput[]
    OR?: insumoWhereInput[]
    NOT?: insumoWhereInput | insumoWhereInput[]
    nome?: StringFilter<"insumo"> | string
    descricao?: StringNullableFilter<"insumo"> | string | null
    unidade_medida?: StringNullableFilter<"insumo"> | string | null
    preco_unitario?: DecimalNullableFilter<"insumo"> | Decimal | DecimalJsLike | number | string | null
    id_fornecedor?: IntNullableFilter<"insumo"> | number | null
    fornecedor?: XOR<FornecedorNullableScalarRelationFilter, fornecedorWhereInput> | null
    produto_insumo?: Produto_insumoListRelationFilter
  }, "id">

  export type insumoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    unidade_medida?: SortOrderInput | SortOrder
    preco_unitario?: SortOrderInput | SortOrder
    id_fornecedor?: SortOrderInput | SortOrder
    _count?: insumoCountOrderByAggregateInput
    _avg?: insumoAvgOrderByAggregateInput
    _max?: insumoMaxOrderByAggregateInput
    _min?: insumoMinOrderByAggregateInput
    _sum?: insumoSumOrderByAggregateInput
  }

  export type insumoScalarWhereWithAggregatesInput = {
    AND?: insumoScalarWhereWithAggregatesInput | insumoScalarWhereWithAggregatesInput[]
    OR?: insumoScalarWhereWithAggregatesInput[]
    NOT?: insumoScalarWhereWithAggregatesInput | insumoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"insumo"> | number
    nome?: StringWithAggregatesFilter<"insumo"> | string
    descricao?: StringNullableWithAggregatesFilter<"insumo"> | string | null
    unidade_medida?: StringNullableWithAggregatesFilter<"insumo"> | string | null
    preco_unitario?: DecimalNullableWithAggregatesFilter<"insumo"> | Decimal | DecimalJsLike | number | string | null
    id_fornecedor?: IntNullableWithAggregatesFilter<"insumo"> | number | null
  }

  export type pedidoWhereInput = {
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    id?: IntFilter<"pedido"> | number
    id_cliente?: IntNullableFilter<"pedido"> | number | null
    data_pedido?: DateTimeNullableFilter<"pedido"> | Date | string | null
    data_entrega?: DateTimeNullableFilter<"pedido"> | Date | string | null
    status?: StringNullableFilter<"pedido"> | string | null
    valor_total?: DecimalNullableFilter<"pedido"> | Decimal | DecimalJsLike | number | string | null
    cliente?: XOR<ClienteNullableScalarRelationFilter, clienteWhereInput> | null
    pedido_produto?: Pedido_produtoListRelationFilter
  }

  export type pedidoOrderByWithRelationInput = {
    id?: SortOrder
    id_cliente?: SortOrderInput | SortOrder
    data_pedido?: SortOrderInput | SortOrder
    data_entrega?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    valor_total?: SortOrderInput | SortOrder
    cliente?: clienteOrderByWithRelationInput
    pedido_produto?: pedido_produtoOrderByRelationAggregateInput
  }

  export type pedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    id_cliente?: IntNullableFilter<"pedido"> | number | null
    data_pedido?: DateTimeNullableFilter<"pedido"> | Date | string | null
    data_entrega?: DateTimeNullableFilter<"pedido"> | Date | string | null
    status?: StringNullableFilter<"pedido"> | string | null
    valor_total?: DecimalNullableFilter<"pedido"> | Decimal | DecimalJsLike | number | string | null
    cliente?: XOR<ClienteNullableScalarRelationFilter, clienteWhereInput> | null
    pedido_produto?: Pedido_produtoListRelationFilter
  }, "id">

  export type pedidoOrderByWithAggregationInput = {
    id?: SortOrder
    id_cliente?: SortOrderInput | SortOrder
    data_pedido?: SortOrderInput | SortOrder
    data_entrega?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    valor_total?: SortOrderInput | SortOrder
    _count?: pedidoCountOrderByAggregateInput
    _avg?: pedidoAvgOrderByAggregateInput
    _max?: pedidoMaxOrderByAggregateInput
    _min?: pedidoMinOrderByAggregateInput
    _sum?: pedidoSumOrderByAggregateInput
  }

  export type pedidoScalarWhereWithAggregatesInput = {
    AND?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    OR?: pedidoScalarWhereWithAggregatesInput[]
    NOT?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pedido"> | number
    id_cliente?: IntNullableWithAggregatesFilter<"pedido"> | number | null
    data_pedido?: DateTimeNullableWithAggregatesFilter<"pedido"> | Date | string | null
    data_entrega?: DateTimeNullableWithAggregatesFilter<"pedido"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"pedido"> | string | null
    valor_total?: DecimalNullableWithAggregatesFilter<"pedido"> | Decimal | DecimalJsLike | number | string | null
  }

  export type pedido_produtoWhereInput = {
    AND?: pedido_produtoWhereInput | pedido_produtoWhereInput[]
    OR?: pedido_produtoWhereInput[]
    NOT?: pedido_produtoWhereInput | pedido_produtoWhereInput[]
    id?: IntFilter<"pedido_produto"> | number
    id_pedido?: IntFilter<"pedido_produto"> | number
    id_produto?: IntFilter<"pedido_produto"> | number
    quantidade?: IntNullableFilter<"pedido_produto"> | number | null
    preco_unitario?: DecimalNullableFilter<"pedido_produto"> | Decimal | DecimalJsLike | number | string | null
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, produtoWhereInput>
  }

  export type pedido_produtoOrderByWithRelationInput = {
    id?: SortOrder
    id_pedido?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrderInput | SortOrder
    preco_unitario?: SortOrderInput | SortOrder
    pedido?: pedidoOrderByWithRelationInput
    produto?: produtoOrderByWithRelationInput
  }

  export type pedido_produtoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_pedido_id_produto?: pedido_produtoId_pedidoId_produtoCompoundUniqueInput
    AND?: pedido_produtoWhereInput | pedido_produtoWhereInput[]
    OR?: pedido_produtoWhereInput[]
    NOT?: pedido_produtoWhereInput | pedido_produtoWhereInput[]
    id_pedido?: IntFilter<"pedido_produto"> | number
    id_produto?: IntFilter<"pedido_produto"> | number
    quantidade?: IntNullableFilter<"pedido_produto"> | number | null
    preco_unitario?: DecimalNullableFilter<"pedido_produto"> | Decimal | DecimalJsLike | number | string | null
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, produtoWhereInput>
  }, "id" | "id_pedido_id_produto">

  export type pedido_produtoOrderByWithAggregationInput = {
    id?: SortOrder
    id_pedido?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrderInput | SortOrder
    preco_unitario?: SortOrderInput | SortOrder
    _count?: pedido_produtoCountOrderByAggregateInput
    _avg?: pedido_produtoAvgOrderByAggregateInput
    _max?: pedido_produtoMaxOrderByAggregateInput
    _min?: pedido_produtoMinOrderByAggregateInput
    _sum?: pedido_produtoSumOrderByAggregateInput
  }

  export type pedido_produtoScalarWhereWithAggregatesInput = {
    AND?: pedido_produtoScalarWhereWithAggregatesInput | pedido_produtoScalarWhereWithAggregatesInput[]
    OR?: pedido_produtoScalarWhereWithAggregatesInput[]
    NOT?: pedido_produtoScalarWhereWithAggregatesInput | pedido_produtoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pedido_produto"> | number
    id_pedido?: IntWithAggregatesFilter<"pedido_produto"> | number
    id_produto?: IntWithAggregatesFilter<"pedido_produto"> | number
    quantidade?: IntNullableWithAggregatesFilter<"pedido_produto"> | number | null
    preco_unitario?: DecimalNullableWithAggregatesFilter<"pedido_produto"> | Decimal | DecimalJsLike | number | string | null
  }

  export type produtoWhereInput = {
    AND?: produtoWhereInput | produtoWhereInput[]
    OR?: produtoWhereInput[]
    NOT?: produtoWhereInput | produtoWhereInput[]
    id?: IntFilter<"produto"> | number
    nome?: StringFilter<"produto"> | string
    descricao?: StringNullableFilter<"produto"> | string | null
    preco_unitario?: DecimalNullableFilter<"produto"> | Decimal | DecimalJsLike | number | string | null
    estoque?: IntNullableFilter<"produto"> | number | null
    unidade_medida?: StringNullableFilter<"produto"> | string | null
    id_fornecedor?: IntNullableFilter<"produto"> | number | null
    pedido_produto?: Pedido_produtoListRelationFilter
    fornecedor?: XOR<FornecedorNullableScalarRelationFilter, fornecedorWhereInput> | null
    produto_insumo?: Produto_insumoListRelationFilter
  }

  export type produtoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    preco_unitario?: SortOrderInput | SortOrder
    estoque?: SortOrderInput | SortOrder
    unidade_medida?: SortOrderInput | SortOrder
    id_fornecedor?: SortOrderInput | SortOrder
    pedido_produto?: pedido_produtoOrderByRelationAggregateInput
    fornecedor?: fornecedorOrderByWithRelationInput
    produto_insumo?: produto_insumoOrderByRelationAggregateInput
  }

  export type produtoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: produtoWhereInput | produtoWhereInput[]
    OR?: produtoWhereInput[]
    NOT?: produtoWhereInput | produtoWhereInput[]
    nome?: StringFilter<"produto"> | string
    descricao?: StringNullableFilter<"produto"> | string | null
    preco_unitario?: DecimalNullableFilter<"produto"> | Decimal | DecimalJsLike | number | string | null
    estoque?: IntNullableFilter<"produto"> | number | null
    unidade_medida?: StringNullableFilter<"produto"> | string | null
    id_fornecedor?: IntNullableFilter<"produto"> | number | null
    pedido_produto?: Pedido_produtoListRelationFilter
    fornecedor?: XOR<FornecedorNullableScalarRelationFilter, fornecedorWhereInput> | null
    produto_insumo?: Produto_insumoListRelationFilter
  }, "id">

  export type produtoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    preco_unitario?: SortOrderInput | SortOrder
    estoque?: SortOrderInput | SortOrder
    unidade_medida?: SortOrderInput | SortOrder
    id_fornecedor?: SortOrderInput | SortOrder
    _count?: produtoCountOrderByAggregateInput
    _avg?: produtoAvgOrderByAggregateInput
    _max?: produtoMaxOrderByAggregateInput
    _min?: produtoMinOrderByAggregateInput
    _sum?: produtoSumOrderByAggregateInput
  }

  export type produtoScalarWhereWithAggregatesInput = {
    AND?: produtoScalarWhereWithAggregatesInput | produtoScalarWhereWithAggregatesInput[]
    OR?: produtoScalarWhereWithAggregatesInput[]
    NOT?: produtoScalarWhereWithAggregatesInput | produtoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"produto"> | number
    nome?: StringWithAggregatesFilter<"produto"> | string
    descricao?: StringNullableWithAggregatesFilter<"produto"> | string | null
    preco_unitario?: DecimalNullableWithAggregatesFilter<"produto"> | Decimal | DecimalJsLike | number | string | null
    estoque?: IntNullableWithAggregatesFilter<"produto"> | number | null
    unidade_medida?: StringNullableWithAggregatesFilter<"produto"> | string | null
    id_fornecedor?: IntNullableWithAggregatesFilter<"produto"> | number | null
  }

  export type produto_insumoWhereInput = {
    AND?: produto_insumoWhereInput | produto_insumoWhereInput[]
    OR?: produto_insumoWhereInput[]
    NOT?: produto_insumoWhereInput | produto_insumoWhereInput[]
    id?: IntFilter<"produto_insumo"> | number
    id_produto?: IntNullableFilter<"produto_insumo"> | number | null
    id_insumo?: IntNullableFilter<"produto_insumo"> | number | null
    quantidade?: DecimalNullableFilter<"produto_insumo"> | Decimal | DecimalJsLike | number | string | null
    preco_unitario?: DecimalNullableFilter<"produto_insumo"> | Decimal | DecimalJsLike | number | string | null
    insumo?: XOR<InsumoNullableScalarRelationFilter, insumoWhereInput> | null
    produto?: XOR<ProdutoNullableScalarRelationFilter, produtoWhereInput> | null
  }

  export type produto_insumoOrderByWithRelationInput = {
    id?: SortOrder
    id_produto?: SortOrderInput | SortOrder
    id_insumo?: SortOrderInput | SortOrder
    quantidade?: SortOrderInput | SortOrder
    preco_unitario?: SortOrderInput | SortOrder
    insumo?: insumoOrderByWithRelationInput
    produto?: produtoOrderByWithRelationInput
  }

  export type produto_insumoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_produto_id_insumo?: produto_insumoId_produtoId_insumoCompoundUniqueInput
    AND?: produto_insumoWhereInput | produto_insumoWhereInput[]
    OR?: produto_insumoWhereInput[]
    NOT?: produto_insumoWhereInput | produto_insumoWhereInput[]
    id_produto?: IntNullableFilter<"produto_insumo"> | number | null
    id_insumo?: IntNullableFilter<"produto_insumo"> | number | null
    quantidade?: DecimalNullableFilter<"produto_insumo"> | Decimal | DecimalJsLike | number | string | null
    preco_unitario?: DecimalNullableFilter<"produto_insumo"> | Decimal | DecimalJsLike | number | string | null
    insumo?: XOR<InsumoNullableScalarRelationFilter, insumoWhereInput> | null
    produto?: XOR<ProdutoNullableScalarRelationFilter, produtoWhereInput> | null
  }, "id" | "id_produto_id_insumo">

  export type produto_insumoOrderByWithAggregationInput = {
    id?: SortOrder
    id_produto?: SortOrderInput | SortOrder
    id_insumo?: SortOrderInput | SortOrder
    quantidade?: SortOrderInput | SortOrder
    preco_unitario?: SortOrderInput | SortOrder
    _count?: produto_insumoCountOrderByAggregateInput
    _avg?: produto_insumoAvgOrderByAggregateInput
    _max?: produto_insumoMaxOrderByAggregateInput
    _min?: produto_insumoMinOrderByAggregateInput
    _sum?: produto_insumoSumOrderByAggregateInput
  }

  export type produto_insumoScalarWhereWithAggregatesInput = {
    AND?: produto_insumoScalarWhereWithAggregatesInput | produto_insumoScalarWhereWithAggregatesInput[]
    OR?: produto_insumoScalarWhereWithAggregatesInput[]
    NOT?: produto_insumoScalarWhereWithAggregatesInput | produto_insumoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"produto_insumo"> | number
    id_produto?: IntNullableWithAggregatesFilter<"produto_insumo"> | number | null
    id_insumo?: IntNullableWithAggregatesFilter<"produto_insumo"> | number | null
    quantidade?: DecimalNullableWithAggregatesFilter<"produto_insumo"> | Decimal | DecimalJsLike | number | string | null
    preco_unitario?: DecimalNullableWithAggregatesFilter<"produto_insumo"> | Decimal | DecimalJsLike | number | string | null
  }

  export type clienteCreateInput = {
    nome: string
    cpf_cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
    pedido?: pedidoCreateNestedManyWithoutClienteInput
  }

  export type clienteUncheckedCreateInput = {
    id?: number
    nome: string
    cpf_cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
    pedido?: pedidoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type clienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedido?: pedidoUpdateManyWithoutClienteNestedInput
  }

  export type clienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedido?: pedidoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type clienteCreateManyInput = {
    id?: number
    nome: string
    cpf_cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
  }

  export type clienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fornecedorCreateInput = {
    nome_fantasia: string
    razao_social?: string | null
    cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
    insumo?: insumoCreateNestedManyWithoutFornecedorInput
    produto?: produtoCreateNestedManyWithoutFornecedorInput
  }

  export type fornecedorUncheckedCreateInput = {
    id?: number
    nome_fantasia: string
    razao_social?: string | null
    cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
    insumo?: insumoUncheckedCreateNestedManyWithoutFornecedorInput
    produto?: produtoUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type fornecedorUpdateInput = {
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    razao_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insumo?: insumoUpdateManyWithoutFornecedorNestedInput
    produto?: produtoUpdateManyWithoutFornecedorNestedInput
  }

  export type fornecedorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    razao_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insumo?: insumoUncheckedUpdateManyWithoutFornecedorNestedInput
    produto?: produtoUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type fornecedorCreateManyInput = {
    id?: number
    nome_fantasia: string
    razao_social?: string | null
    cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
  }

  export type fornecedorUpdateManyMutationInput = {
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    razao_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fornecedorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    razao_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type insumoCreateInput = {
    nome: string
    descricao?: string | null
    unidade_medida?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    fornecedor?: fornecedorCreateNestedOneWithoutInsumoInput
    produto_insumo?: produto_insumoCreateNestedManyWithoutInsumoInput
  }

  export type insumoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    unidade_medida?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    id_fornecedor?: number | null
    produto_insumo?: produto_insumoUncheckedCreateNestedManyWithoutInsumoInput
  }

  export type insumoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fornecedor?: fornecedorUpdateOneWithoutInsumoNestedInput
    produto_insumo?: produto_insumoUpdateManyWithoutInsumoNestedInput
  }

  export type insumoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    id_fornecedor?: NullableIntFieldUpdateOperationsInput | number | null
    produto_insumo?: produto_insumoUncheckedUpdateManyWithoutInsumoNestedInput
  }

  export type insumoCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    unidade_medida?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    id_fornecedor?: number | null
  }

  export type insumoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type insumoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    id_fornecedor?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pedidoCreateInput = {
    data_pedido?: Date | string | null
    data_entrega?: Date | string | null
    status?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
    cliente?: clienteCreateNestedOneWithoutPedidoInput
    pedido_produto?: pedido_produtoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateInput = {
    id?: number
    id_cliente?: number | null
    data_pedido?: Date | string | null
    data_entrega?: Date | string | null
    status?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
    pedido_produto?: pedido_produtoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUpdateInput = {
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cliente?: clienteUpdateOneWithoutPedidoNestedInput
    pedido_produto?: pedido_produtoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: NullableIntFieldUpdateOperationsInput | number | null
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pedido_produto?: pedido_produtoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoCreateManyInput = {
    id?: number
    id_cliente?: number | null
    data_pedido?: Date | string | null
    data_entrega?: Date | string | null
    status?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type pedidoUpdateManyMutationInput = {
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type pedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: NullableIntFieldUpdateOperationsInput | number | null
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type pedido_produtoCreateInput = {
    quantidade?: number | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    pedido: pedidoCreateNestedOneWithoutPedido_produtoInput
    produto: produtoCreateNestedOneWithoutPedido_produtoInput
  }

  export type pedido_produtoUncheckedCreateInput = {
    id?: number
    id_pedido: number
    id_produto: number
    quantidade?: number | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type pedido_produtoUpdateInput = {
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pedido?: pedidoUpdateOneRequiredWithoutPedido_produtoNestedInput
    produto?: produtoUpdateOneRequiredWithoutPedido_produtoNestedInput
  }

  export type pedido_produtoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_produto?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type pedido_produtoCreateManyInput = {
    id?: number
    id_pedido: number
    id_produto: number
    quantidade?: number | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type pedido_produtoUpdateManyMutationInput = {
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type pedido_produtoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_produto?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type produtoCreateInput = {
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
    pedido_produto?: pedido_produtoCreateNestedManyWithoutProdutoInput
    fornecedor?: fornecedorCreateNestedOneWithoutProdutoInput
    produto_insumo?: produto_insumoCreateNestedManyWithoutProdutoInput
  }

  export type produtoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
    id_fornecedor?: number | null
    pedido_produto?: pedido_produtoUncheckedCreateNestedManyWithoutProdutoInput
    produto_insumo?: produto_insumoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    pedido_produto?: pedido_produtoUpdateManyWithoutProdutoNestedInput
    fornecedor?: fornecedorUpdateOneWithoutProdutoNestedInput
    produto_insumo?: produto_insumoUpdateManyWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    id_fornecedor?: NullableIntFieldUpdateOperationsInput | number | null
    pedido_produto?: pedido_produtoUncheckedUpdateManyWithoutProdutoNestedInput
    produto_insumo?: produto_insumoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type produtoCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
    id_fornecedor?: number | null
  }

  export type produtoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produtoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    id_fornecedor?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type produto_insumoCreateInput = {
    quantidade?: Decimal | DecimalJsLike | number | string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    insumo?: insumoCreateNestedOneWithoutProduto_insumoInput
    produto?: produtoCreateNestedOneWithoutProduto_insumoInput
  }

  export type produto_insumoUncheckedCreateInput = {
    id?: number
    id_produto?: number | null
    id_insumo?: number | null
    quantidade?: Decimal | DecimalJsLike | number | string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type produto_insumoUpdateInput = {
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    insumo?: insumoUpdateOneWithoutProduto_insumoNestedInput
    produto?: produtoUpdateOneWithoutProduto_insumoNestedInput
  }

  export type produto_insumoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_produto?: NullableIntFieldUpdateOperationsInput | number | null
    id_insumo?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type produto_insumoCreateManyInput = {
    id?: number
    id_produto?: number | null
    id_insumo?: number | null
    quantidade?: Decimal | DecimalJsLike | number | string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type produto_insumoUpdateManyMutationInput = {
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type produto_insumoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_produto?: NullableIntFieldUpdateOperationsInput | number | null
    id_insumo?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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

  export type PedidoListRelationFilter = {
    every?: pedidoWhereInput
    some?: pedidoWhereInput
    none?: pedidoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type pedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf_cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    data_cadastro?: SortOrder
  }

  export type clienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type clienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf_cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    data_cadastro?: SortOrder
  }

  export type clienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf_cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    data_cadastro?: SortOrder
  }

  export type clienteSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type InsumoListRelationFilter = {
    every?: insumoWhereInput
    some?: insumoWhereInput
    none?: insumoWhereInput
  }

  export type ProdutoListRelationFilter = {
    every?: produtoWhereInput
    some?: produtoWhereInput
    none?: produtoWhereInput
  }

  export type insumoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type produtoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type fornecedorCountOrderByAggregateInput = {
    id?: SortOrder
    nome_fantasia?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    data_cadastro?: SortOrder
  }

  export type fornecedorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type fornecedorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_fantasia?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    data_cadastro?: SortOrder
  }

  export type fornecedorMinOrderByAggregateInput = {
    id?: SortOrder
    nome_fantasia?: SortOrder
    razao_social?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereco?: SortOrder
    data_cadastro?: SortOrder
  }

  export type fornecedorSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FornecedorNullableScalarRelationFilter = {
    is?: fornecedorWhereInput | null
    isNot?: fornecedorWhereInput | null
  }

  export type Produto_insumoListRelationFilter = {
    every?: produto_insumoWhereInput
    some?: produto_insumoWhereInput
    none?: produto_insumoWhereInput
  }

  export type produto_insumoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type insumoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    unidade_medida?: SortOrder
    preco_unitario?: SortOrder
    id_fornecedor?: SortOrder
  }

  export type insumoAvgOrderByAggregateInput = {
    id?: SortOrder
    preco_unitario?: SortOrder
    id_fornecedor?: SortOrder
  }

  export type insumoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    unidade_medida?: SortOrder
    preco_unitario?: SortOrder
    id_fornecedor?: SortOrder
  }

  export type insumoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    unidade_medida?: SortOrder
    preco_unitario?: SortOrder
    id_fornecedor?: SortOrder
  }

  export type insumoSumOrderByAggregateInput = {
    id?: SortOrder
    preco_unitario?: SortOrder
    id_fornecedor?: SortOrder
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

  export type ClienteNullableScalarRelationFilter = {
    is?: clienteWhereInput | null
    isNot?: clienteWhereInput | null
  }

  export type Pedido_produtoListRelationFilter = {
    every?: pedido_produtoWhereInput
    some?: pedido_produtoWhereInput
    none?: pedido_produtoWhereInput
  }

  export type pedido_produtoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pedidoCountOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    data_pedido?: SortOrder
    data_entrega?: SortOrder
    status?: SortOrder
    valor_total?: SortOrder
  }

  export type pedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    valor_total?: SortOrder
  }

  export type pedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    data_pedido?: SortOrder
    data_entrega?: SortOrder
    status?: SortOrder
    valor_total?: SortOrder
  }

  export type pedidoMinOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    data_pedido?: SortOrder
    data_entrega?: SortOrder
    status?: SortOrder
    valor_total?: SortOrder
  }

  export type pedidoSumOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    valor_total?: SortOrder
  }

  export type PedidoScalarRelationFilter = {
    is?: pedidoWhereInput
    isNot?: pedidoWhereInput
  }

  export type ProdutoScalarRelationFilter = {
    is?: produtoWhereInput
    isNot?: produtoWhereInput
  }

  export type pedido_produtoId_pedidoId_produtoCompoundUniqueInput = {
    id_pedido: number
    id_produto: number
  }

  export type pedido_produtoCountOrderByAggregateInput = {
    id?: SortOrder
    id_pedido?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type pedido_produtoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_pedido?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type pedido_produtoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_pedido?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type pedido_produtoMinOrderByAggregateInput = {
    id?: SortOrder
    id_pedido?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type pedido_produtoSumOrderByAggregateInput = {
    id?: SortOrder
    id_pedido?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type produtoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco_unitario?: SortOrder
    estoque?: SortOrder
    unidade_medida?: SortOrder
    id_fornecedor?: SortOrder
  }

  export type produtoAvgOrderByAggregateInput = {
    id?: SortOrder
    preco_unitario?: SortOrder
    estoque?: SortOrder
    id_fornecedor?: SortOrder
  }

  export type produtoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco_unitario?: SortOrder
    estoque?: SortOrder
    unidade_medida?: SortOrder
    id_fornecedor?: SortOrder
  }

  export type produtoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco_unitario?: SortOrder
    estoque?: SortOrder
    unidade_medida?: SortOrder
    id_fornecedor?: SortOrder
  }

  export type produtoSumOrderByAggregateInput = {
    id?: SortOrder
    preco_unitario?: SortOrder
    estoque?: SortOrder
    id_fornecedor?: SortOrder
  }

  export type InsumoNullableScalarRelationFilter = {
    is?: insumoWhereInput | null
    isNot?: insumoWhereInput | null
  }

  export type ProdutoNullableScalarRelationFilter = {
    is?: produtoWhereInput | null
    isNot?: produtoWhereInput | null
  }

  export type produto_insumoId_produtoId_insumoCompoundUniqueInput = {
    id_produto: number
    id_insumo: number
  }

  export type produto_insumoCountOrderByAggregateInput = {
    id?: SortOrder
    id_produto?: SortOrder
    id_insumo?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type produto_insumoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_produto?: SortOrder
    id_insumo?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type produto_insumoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_produto?: SortOrder
    id_insumo?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type produto_insumoMinOrderByAggregateInput = {
    id?: SortOrder
    id_produto?: SortOrder
    id_insumo?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type produto_insumoSumOrderByAggregateInput = {
    id?: SortOrder
    id_produto?: SortOrder
    id_insumo?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type pedidoCreateNestedManyWithoutClienteInput = {
    create?: XOR<pedidoCreateWithoutClienteInput, pedidoUncheckedCreateWithoutClienteInput> | pedidoCreateWithoutClienteInput[] | pedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutClienteInput | pedidoCreateOrConnectWithoutClienteInput[]
    createMany?: pedidoCreateManyClienteInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type pedidoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<pedidoCreateWithoutClienteInput, pedidoUncheckedCreateWithoutClienteInput> | pedidoCreateWithoutClienteInput[] | pedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutClienteInput | pedidoCreateOrConnectWithoutClienteInput[]
    createMany?: pedidoCreateManyClienteInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
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

  export type pedidoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<pedidoCreateWithoutClienteInput, pedidoUncheckedCreateWithoutClienteInput> | pedidoCreateWithoutClienteInput[] | pedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutClienteInput | pedidoCreateOrConnectWithoutClienteInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutClienteInput | pedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: pedidoCreateManyClienteInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutClienteInput | pedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutClienteInput | pedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type pedidoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<pedidoCreateWithoutClienteInput, pedidoUncheckedCreateWithoutClienteInput> | pedidoCreateWithoutClienteInput[] | pedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutClienteInput | pedidoCreateOrConnectWithoutClienteInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutClienteInput | pedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: pedidoCreateManyClienteInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutClienteInput | pedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutClienteInput | pedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type insumoCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<insumoCreateWithoutFornecedorInput, insumoUncheckedCreateWithoutFornecedorInput> | insumoCreateWithoutFornecedorInput[] | insumoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: insumoCreateOrConnectWithoutFornecedorInput | insumoCreateOrConnectWithoutFornecedorInput[]
    createMany?: insumoCreateManyFornecedorInputEnvelope
    connect?: insumoWhereUniqueInput | insumoWhereUniqueInput[]
  }

  export type produtoCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<produtoCreateWithoutFornecedorInput, produtoUncheckedCreateWithoutFornecedorInput> | produtoCreateWithoutFornecedorInput[] | produtoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutFornecedorInput | produtoCreateOrConnectWithoutFornecedorInput[]
    createMany?: produtoCreateManyFornecedorInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type insumoUncheckedCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<insumoCreateWithoutFornecedorInput, insumoUncheckedCreateWithoutFornecedorInput> | insumoCreateWithoutFornecedorInput[] | insumoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: insumoCreateOrConnectWithoutFornecedorInput | insumoCreateOrConnectWithoutFornecedorInput[]
    createMany?: insumoCreateManyFornecedorInputEnvelope
    connect?: insumoWhereUniqueInput | insumoWhereUniqueInput[]
  }

  export type produtoUncheckedCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<produtoCreateWithoutFornecedorInput, produtoUncheckedCreateWithoutFornecedorInput> | produtoCreateWithoutFornecedorInput[] | produtoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutFornecedorInput | produtoCreateOrConnectWithoutFornecedorInput[]
    createMany?: produtoCreateManyFornecedorInputEnvelope
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
  }

  export type insumoUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<insumoCreateWithoutFornecedorInput, insumoUncheckedCreateWithoutFornecedorInput> | insumoCreateWithoutFornecedorInput[] | insumoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: insumoCreateOrConnectWithoutFornecedorInput | insumoCreateOrConnectWithoutFornecedorInput[]
    upsert?: insumoUpsertWithWhereUniqueWithoutFornecedorInput | insumoUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: insumoCreateManyFornecedorInputEnvelope
    set?: insumoWhereUniqueInput | insumoWhereUniqueInput[]
    disconnect?: insumoWhereUniqueInput | insumoWhereUniqueInput[]
    delete?: insumoWhereUniqueInput | insumoWhereUniqueInput[]
    connect?: insumoWhereUniqueInput | insumoWhereUniqueInput[]
    update?: insumoUpdateWithWhereUniqueWithoutFornecedorInput | insumoUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: insumoUpdateManyWithWhereWithoutFornecedorInput | insumoUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: insumoScalarWhereInput | insumoScalarWhereInput[]
  }

  export type produtoUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<produtoCreateWithoutFornecedorInput, produtoUncheckedCreateWithoutFornecedorInput> | produtoCreateWithoutFornecedorInput[] | produtoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutFornecedorInput | produtoCreateOrConnectWithoutFornecedorInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutFornecedorInput | produtoUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: produtoCreateManyFornecedorInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutFornecedorInput | produtoUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutFornecedorInput | produtoUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type insumoUncheckedUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<insumoCreateWithoutFornecedorInput, insumoUncheckedCreateWithoutFornecedorInput> | insumoCreateWithoutFornecedorInput[] | insumoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: insumoCreateOrConnectWithoutFornecedorInput | insumoCreateOrConnectWithoutFornecedorInput[]
    upsert?: insumoUpsertWithWhereUniqueWithoutFornecedorInput | insumoUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: insumoCreateManyFornecedorInputEnvelope
    set?: insumoWhereUniqueInput | insumoWhereUniqueInput[]
    disconnect?: insumoWhereUniqueInput | insumoWhereUniqueInput[]
    delete?: insumoWhereUniqueInput | insumoWhereUniqueInput[]
    connect?: insumoWhereUniqueInput | insumoWhereUniqueInput[]
    update?: insumoUpdateWithWhereUniqueWithoutFornecedorInput | insumoUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: insumoUpdateManyWithWhereWithoutFornecedorInput | insumoUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: insumoScalarWhereInput | insumoScalarWhereInput[]
  }

  export type produtoUncheckedUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<produtoCreateWithoutFornecedorInput, produtoUncheckedCreateWithoutFornecedorInput> | produtoCreateWithoutFornecedorInput[] | produtoUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: produtoCreateOrConnectWithoutFornecedorInput | produtoCreateOrConnectWithoutFornecedorInput[]
    upsert?: produtoUpsertWithWhereUniqueWithoutFornecedorInput | produtoUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: produtoCreateManyFornecedorInputEnvelope
    set?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    disconnect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    delete?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    connect?: produtoWhereUniqueInput | produtoWhereUniqueInput[]
    update?: produtoUpdateWithWhereUniqueWithoutFornecedorInput | produtoUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: produtoUpdateManyWithWhereWithoutFornecedorInput | produtoUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: produtoScalarWhereInput | produtoScalarWhereInput[]
  }

  export type fornecedorCreateNestedOneWithoutInsumoInput = {
    create?: XOR<fornecedorCreateWithoutInsumoInput, fornecedorUncheckedCreateWithoutInsumoInput>
    connectOrCreate?: fornecedorCreateOrConnectWithoutInsumoInput
    connect?: fornecedorWhereUniqueInput
  }

  export type produto_insumoCreateNestedManyWithoutInsumoInput = {
    create?: XOR<produto_insumoCreateWithoutInsumoInput, produto_insumoUncheckedCreateWithoutInsumoInput> | produto_insumoCreateWithoutInsumoInput[] | produto_insumoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: produto_insumoCreateOrConnectWithoutInsumoInput | produto_insumoCreateOrConnectWithoutInsumoInput[]
    createMany?: produto_insumoCreateManyInsumoInputEnvelope
    connect?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
  }

  export type produto_insumoUncheckedCreateNestedManyWithoutInsumoInput = {
    create?: XOR<produto_insumoCreateWithoutInsumoInput, produto_insumoUncheckedCreateWithoutInsumoInput> | produto_insumoCreateWithoutInsumoInput[] | produto_insumoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: produto_insumoCreateOrConnectWithoutInsumoInput | produto_insumoCreateOrConnectWithoutInsumoInput[]
    createMany?: produto_insumoCreateManyInsumoInputEnvelope
    connect?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type fornecedorUpdateOneWithoutInsumoNestedInput = {
    create?: XOR<fornecedorCreateWithoutInsumoInput, fornecedorUncheckedCreateWithoutInsumoInput>
    connectOrCreate?: fornecedorCreateOrConnectWithoutInsumoInput
    upsert?: fornecedorUpsertWithoutInsumoInput
    disconnect?: fornecedorWhereInput | boolean
    delete?: fornecedorWhereInput | boolean
    connect?: fornecedorWhereUniqueInput
    update?: XOR<XOR<fornecedorUpdateToOneWithWhereWithoutInsumoInput, fornecedorUpdateWithoutInsumoInput>, fornecedorUncheckedUpdateWithoutInsumoInput>
  }

  export type produto_insumoUpdateManyWithoutInsumoNestedInput = {
    create?: XOR<produto_insumoCreateWithoutInsumoInput, produto_insumoUncheckedCreateWithoutInsumoInput> | produto_insumoCreateWithoutInsumoInput[] | produto_insumoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: produto_insumoCreateOrConnectWithoutInsumoInput | produto_insumoCreateOrConnectWithoutInsumoInput[]
    upsert?: produto_insumoUpsertWithWhereUniqueWithoutInsumoInput | produto_insumoUpsertWithWhereUniqueWithoutInsumoInput[]
    createMany?: produto_insumoCreateManyInsumoInputEnvelope
    set?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
    disconnect?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
    delete?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
    connect?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
    update?: produto_insumoUpdateWithWhereUniqueWithoutInsumoInput | produto_insumoUpdateWithWhereUniqueWithoutInsumoInput[]
    updateMany?: produto_insumoUpdateManyWithWhereWithoutInsumoInput | produto_insumoUpdateManyWithWhereWithoutInsumoInput[]
    deleteMany?: produto_insumoScalarWhereInput | produto_insumoScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type produto_insumoUncheckedUpdateManyWithoutInsumoNestedInput = {
    create?: XOR<produto_insumoCreateWithoutInsumoInput, produto_insumoUncheckedCreateWithoutInsumoInput> | produto_insumoCreateWithoutInsumoInput[] | produto_insumoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: produto_insumoCreateOrConnectWithoutInsumoInput | produto_insumoCreateOrConnectWithoutInsumoInput[]
    upsert?: produto_insumoUpsertWithWhereUniqueWithoutInsumoInput | produto_insumoUpsertWithWhereUniqueWithoutInsumoInput[]
    createMany?: produto_insumoCreateManyInsumoInputEnvelope
    set?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
    disconnect?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
    delete?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
    connect?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
    update?: produto_insumoUpdateWithWhereUniqueWithoutInsumoInput | produto_insumoUpdateWithWhereUniqueWithoutInsumoInput[]
    updateMany?: produto_insumoUpdateManyWithWhereWithoutInsumoInput | produto_insumoUpdateManyWithWhereWithoutInsumoInput[]
    deleteMany?: produto_insumoScalarWhereInput | produto_insumoScalarWhereInput[]
  }

  export type clienteCreateNestedOneWithoutPedidoInput = {
    create?: XOR<clienteCreateWithoutPedidoInput, clienteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: clienteCreateOrConnectWithoutPedidoInput
    connect?: clienteWhereUniqueInput
  }

  export type pedido_produtoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<pedido_produtoCreateWithoutPedidoInput, pedido_produtoUncheckedCreateWithoutPedidoInput> | pedido_produtoCreateWithoutPedidoInput[] | pedido_produtoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_produtoCreateOrConnectWithoutPedidoInput | pedido_produtoCreateOrConnectWithoutPedidoInput[]
    createMany?: pedido_produtoCreateManyPedidoInputEnvelope
    connect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
  }

  export type pedido_produtoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<pedido_produtoCreateWithoutPedidoInput, pedido_produtoUncheckedCreateWithoutPedidoInput> | pedido_produtoCreateWithoutPedidoInput[] | pedido_produtoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_produtoCreateOrConnectWithoutPedidoInput | pedido_produtoCreateOrConnectWithoutPedidoInput[]
    createMany?: pedido_produtoCreateManyPedidoInputEnvelope
    connect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
  }

  export type clienteUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<clienteCreateWithoutPedidoInput, clienteUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: clienteCreateOrConnectWithoutPedidoInput
    upsert?: clienteUpsertWithoutPedidoInput
    disconnect?: clienteWhereInput | boolean
    delete?: clienteWhereInput | boolean
    connect?: clienteWhereUniqueInput
    update?: XOR<XOR<clienteUpdateToOneWithWhereWithoutPedidoInput, clienteUpdateWithoutPedidoInput>, clienteUncheckedUpdateWithoutPedidoInput>
  }

  export type pedido_produtoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<pedido_produtoCreateWithoutPedidoInput, pedido_produtoUncheckedCreateWithoutPedidoInput> | pedido_produtoCreateWithoutPedidoInput[] | pedido_produtoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_produtoCreateOrConnectWithoutPedidoInput | pedido_produtoCreateOrConnectWithoutPedidoInput[]
    upsert?: pedido_produtoUpsertWithWhereUniqueWithoutPedidoInput | pedido_produtoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: pedido_produtoCreateManyPedidoInputEnvelope
    set?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    disconnect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    delete?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    connect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    update?: pedido_produtoUpdateWithWhereUniqueWithoutPedidoInput | pedido_produtoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: pedido_produtoUpdateManyWithWhereWithoutPedidoInput | pedido_produtoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: pedido_produtoScalarWhereInput | pedido_produtoScalarWhereInput[]
  }

  export type pedido_produtoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<pedido_produtoCreateWithoutPedidoInput, pedido_produtoUncheckedCreateWithoutPedidoInput> | pedido_produtoCreateWithoutPedidoInput[] | pedido_produtoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_produtoCreateOrConnectWithoutPedidoInput | pedido_produtoCreateOrConnectWithoutPedidoInput[]
    upsert?: pedido_produtoUpsertWithWhereUniqueWithoutPedidoInput | pedido_produtoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: pedido_produtoCreateManyPedidoInputEnvelope
    set?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    disconnect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    delete?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    connect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    update?: pedido_produtoUpdateWithWhereUniqueWithoutPedidoInput | pedido_produtoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: pedido_produtoUpdateManyWithWhereWithoutPedidoInput | pedido_produtoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: pedido_produtoScalarWhereInput | pedido_produtoScalarWhereInput[]
  }

  export type pedidoCreateNestedOneWithoutPedido_produtoInput = {
    create?: XOR<pedidoCreateWithoutPedido_produtoInput, pedidoUncheckedCreateWithoutPedido_produtoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutPedido_produtoInput
    connect?: pedidoWhereUniqueInput
  }

  export type produtoCreateNestedOneWithoutPedido_produtoInput = {
    create?: XOR<produtoCreateWithoutPedido_produtoInput, produtoUncheckedCreateWithoutPedido_produtoInput>
    connectOrCreate?: produtoCreateOrConnectWithoutPedido_produtoInput
    connect?: produtoWhereUniqueInput
  }

  export type pedidoUpdateOneRequiredWithoutPedido_produtoNestedInput = {
    create?: XOR<pedidoCreateWithoutPedido_produtoInput, pedidoUncheckedCreateWithoutPedido_produtoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutPedido_produtoInput
    upsert?: pedidoUpsertWithoutPedido_produtoInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutPedido_produtoInput, pedidoUpdateWithoutPedido_produtoInput>, pedidoUncheckedUpdateWithoutPedido_produtoInput>
  }

  export type produtoUpdateOneRequiredWithoutPedido_produtoNestedInput = {
    create?: XOR<produtoCreateWithoutPedido_produtoInput, produtoUncheckedCreateWithoutPedido_produtoInput>
    connectOrCreate?: produtoCreateOrConnectWithoutPedido_produtoInput
    upsert?: produtoUpsertWithoutPedido_produtoInput
    connect?: produtoWhereUniqueInput
    update?: XOR<XOR<produtoUpdateToOneWithWhereWithoutPedido_produtoInput, produtoUpdateWithoutPedido_produtoInput>, produtoUncheckedUpdateWithoutPedido_produtoInput>
  }

  export type pedido_produtoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<pedido_produtoCreateWithoutProdutoInput, pedido_produtoUncheckedCreateWithoutProdutoInput> | pedido_produtoCreateWithoutProdutoInput[] | pedido_produtoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: pedido_produtoCreateOrConnectWithoutProdutoInput | pedido_produtoCreateOrConnectWithoutProdutoInput[]
    createMany?: pedido_produtoCreateManyProdutoInputEnvelope
    connect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
  }

  export type fornecedorCreateNestedOneWithoutProdutoInput = {
    create?: XOR<fornecedorCreateWithoutProdutoInput, fornecedorUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: fornecedorCreateOrConnectWithoutProdutoInput
    connect?: fornecedorWhereUniqueInput
  }

  export type produto_insumoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<produto_insumoCreateWithoutProdutoInput, produto_insumoUncheckedCreateWithoutProdutoInput> | produto_insumoCreateWithoutProdutoInput[] | produto_insumoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: produto_insumoCreateOrConnectWithoutProdutoInput | produto_insumoCreateOrConnectWithoutProdutoInput[]
    createMany?: produto_insumoCreateManyProdutoInputEnvelope
    connect?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
  }

  export type pedido_produtoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<pedido_produtoCreateWithoutProdutoInput, pedido_produtoUncheckedCreateWithoutProdutoInput> | pedido_produtoCreateWithoutProdutoInput[] | pedido_produtoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: pedido_produtoCreateOrConnectWithoutProdutoInput | pedido_produtoCreateOrConnectWithoutProdutoInput[]
    createMany?: pedido_produtoCreateManyProdutoInputEnvelope
    connect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
  }

  export type produto_insumoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<produto_insumoCreateWithoutProdutoInput, produto_insumoUncheckedCreateWithoutProdutoInput> | produto_insumoCreateWithoutProdutoInput[] | produto_insumoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: produto_insumoCreateOrConnectWithoutProdutoInput | produto_insumoCreateOrConnectWithoutProdutoInput[]
    createMany?: produto_insumoCreateManyProdutoInputEnvelope
    connect?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
  }

  export type pedido_produtoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<pedido_produtoCreateWithoutProdutoInput, pedido_produtoUncheckedCreateWithoutProdutoInput> | pedido_produtoCreateWithoutProdutoInput[] | pedido_produtoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: pedido_produtoCreateOrConnectWithoutProdutoInput | pedido_produtoCreateOrConnectWithoutProdutoInput[]
    upsert?: pedido_produtoUpsertWithWhereUniqueWithoutProdutoInput | pedido_produtoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: pedido_produtoCreateManyProdutoInputEnvelope
    set?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    disconnect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    delete?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    connect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    update?: pedido_produtoUpdateWithWhereUniqueWithoutProdutoInput | pedido_produtoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: pedido_produtoUpdateManyWithWhereWithoutProdutoInput | pedido_produtoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: pedido_produtoScalarWhereInput | pedido_produtoScalarWhereInput[]
  }

  export type fornecedorUpdateOneWithoutProdutoNestedInput = {
    create?: XOR<fornecedorCreateWithoutProdutoInput, fornecedorUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: fornecedorCreateOrConnectWithoutProdutoInput
    upsert?: fornecedorUpsertWithoutProdutoInput
    disconnect?: fornecedorWhereInput | boolean
    delete?: fornecedorWhereInput | boolean
    connect?: fornecedorWhereUniqueInput
    update?: XOR<XOR<fornecedorUpdateToOneWithWhereWithoutProdutoInput, fornecedorUpdateWithoutProdutoInput>, fornecedorUncheckedUpdateWithoutProdutoInput>
  }

  export type produto_insumoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<produto_insumoCreateWithoutProdutoInput, produto_insumoUncheckedCreateWithoutProdutoInput> | produto_insumoCreateWithoutProdutoInput[] | produto_insumoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: produto_insumoCreateOrConnectWithoutProdutoInput | produto_insumoCreateOrConnectWithoutProdutoInput[]
    upsert?: produto_insumoUpsertWithWhereUniqueWithoutProdutoInput | produto_insumoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: produto_insumoCreateManyProdutoInputEnvelope
    set?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
    disconnect?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
    delete?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
    connect?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
    update?: produto_insumoUpdateWithWhereUniqueWithoutProdutoInput | produto_insumoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: produto_insumoUpdateManyWithWhereWithoutProdutoInput | produto_insumoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: produto_insumoScalarWhereInput | produto_insumoScalarWhereInput[]
  }

  export type pedido_produtoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<pedido_produtoCreateWithoutProdutoInput, pedido_produtoUncheckedCreateWithoutProdutoInput> | pedido_produtoCreateWithoutProdutoInput[] | pedido_produtoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: pedido_produtoCreateOrConnectWithoutProdutoInput | pedido_produtoCreateOrConnectWithoutProdutoInput[]
    upsert?: pedido_produtoUpsertWithWhereUniqueWithoutProdutoInput | pedido_produtoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: pedido_produtoCreateManyProdutoInputEnvelope
    set?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    disconnect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    delete?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    connect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    update?: pedido_produtoUpdateWithWhereUniqueWithoutProdutoInput | pedido_produtoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: pedido_produtoUpdateManyWithWhereWithoutProdutoInput | pedido_produtoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: pedido_produtoScalarWhereInput | pedido_produtoScalarWhereInput[]
  }

  export type produto_insumoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<produto_insumoCreateWithoutProdutoInput, produto_insumoUncheckedCreateWithoutProdutoInput> | produto_insumoCreateWithoutProdutoInput[] | produto_insumoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: produto_insumoCreateOrConnectWithoutProdutoInput | produto_insumoCreateOrConnectWithoutProdutoInput[]
    upsert?: produto_insumoUpsertWithWhereUniqueWithoutProdutoInput | produto_insumoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: produto_insumoCreateManyProdutoInputEnvelope
    set?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
    disconnect?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
    delete?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
    connect?: produto_insumoWhereUniqueInput | produto_insumoWhereUniqueInput[]
    update?: produto_insumoUpdateWithWhereUniqueWithoutProdutoInput | produto_insumoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: produto_insumoUpdateManyWithWhereWithoutProdutoInput | produto_insumoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: produto_insumoScalarWhereInput | produto_insumoScalarWhereInput[]
  }

  export type insumoCreateNestedOneWithoutProduto_insumoInput = {
    create?: XOR<insumoCreateWithoutProduto_insumoInput, insumoUncheckedCreateWithoutProduto_insumoInput>
    connectOrCreate?: insumoCreateOrConnectWithoutProduto_insumoInput
    connect?: insumoWhereUniqueInput
  }

  export type produtoCreateNestedOneWithoutProduto_insumoInput = {
    create?: XOR<produtoCreateWithoutProduto_insumoInput, produtoUncheckedCreateWithoutProduto_insumoInput>
    connectOrCreate?: produtoCreateOrConnectWithoutProduto_insumoInput
    connect?: produtoWhereUniqueInput
  }

  export type insumoUpdateOneWithoutProduto_insumoNestedInput = {
    create?: XOR<insumoCreateWithoutProduto_insumoInput, insumoUncheckedCreateWithoutProduto_insumoInput>
    connectOrCreate?: insumoCreateOrConnectWithoutProduto_insumoInput
    upsert?: insumoUpsertWithoutProduto_insumoInput
    disconnect?: insumoWhereInput | boolean
    delete?: insumoWhereInput | boolean
    connect?: insumoWhereUniqueInput
    update?: XOR<XOR<insumoUpdateToOneWithWhereWithoutProduto_insumoInput, insumoUpdateWithoutProduto_insumoInput>, insumoUncheckedUpdateWithoutProduto_insumoInput>
  }

  export type produtoUpdateOneWithoutProduto_insumoNestedInput = {
    create?: XOR<produtoCreateWithoutProduto_insumoInput, produtoUncheckedCreateWithoutProduto_insumoInput>
    connectOrCreate?: produtoCreateOrConnectWithoutProduto_insumoInput
    upsert?: produtoUpsertWithoutProduto_insumoInput
    disconnect?: produtoWhereInput | boolean
    delete?: produtoWhereInput | boolean
    connect?: produtoWhereUniqueInput
    update?: XOR<XOR<produtoUpdateToOneWithWhereWithoutProduto_insumoInput, produtoUpdateWithoutProduto_insumoInput>, produtoUncheckedUpdateWithoutProduto_insumoInput>
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

  export type pedidoCreateWithoutClienteInput = {
    data_pedido?: Date | string | null
    data_entrega?: Date | string | null
    status?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
    pedido_produto?: pedido_produtoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutClienteInput = {
    id?: number
    data_pedido?: Date | string | null
    data_entrega?: Date | string | null
    status?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
    pedido_produto?: pedido_produtoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutClienteInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutClienteInput, pedidoUncheckedCreateWithoutClienteInput>
  }

  export type pedidoCreateManyClienteInputEnvelope = {
    data: pedidoCreateManyClienteInput | pedidoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type pedidoUpsertWithWhereUniqueWithoutClienteInput = {
    where: pedidoWhereUniqueInput
    update: XOR<pedidoUpdateWithoutClienteInput, pedidoUncheckedUpdateWithoutClienteInput>
    create: XOR<pedidoCreateWithoutClienteInput, pedidoUncheckedCreateWithoutClienteInput>
  }

  export type pedidoUpdateWithWhereUniqueWithoutClienteInput = {
    where: pedidoWhereUniqueInput
    data: XOR<pedidoUpdateWithoutClienteInput, pedidoUncheckedUpdateWithoutClienteInput>
  }

  export type pedidoUpdateManyWithWhereWithoutClienteInput = {
    where: pedidoScalarWhereInput
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyWithoutClienteInput>
  }

  export type pedidoScalarWhereInput = {
    AND?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
    OR?: pedidoScalarWhereInput[]
    NOT?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
    id?: IntFilter<"pedido"> | number
    id_cliente?: IntNullableFilter<"pedido"> | number | null
    data_pedido?: DateTimeNullableFilter<"pedido"> | Date | string | null
    data_entrega?: DateTimeNullableFilter<"pedido"> | Date | string | null
    status?: StringNullableFilter<"pedido"> | string | null
    valor_total?: DecimalNullableFilter<"pedido"> | Decimal | DecimalJsLike | number | string | null
  }

  export type insumoCreateWithoutFornecedorInput = {
    nome: string
    descricao?: string | null
    unidade_medida?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    produto_insumo?: produto_insumoCreateNestedManyWithoutInsumoInput
  }

  export type insumoUncheckedCreateWithoutFornecedorInput = {
    id?: number
    nome: string
    descricao?: string | null
    unidade_medida?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    produto_insumo?: produto_insumoUncheckedCreateNestedManyWithoutInsumoInput
  }

  export type insumoCreateOrConnectWithoutFornecedorInput = {
    where: insumoWhereUniqueInput
    create: XOR<insumoCreateWithoutFornecedorInput, insumoUncheckedCreateWithoutFornecedorInput>
  }

  export type insumoCreateManyFornecedorInputEnvelope = {
    data: insumoCreateManyFornecedorInput | insumoCreateManyFornecedorInput[]
    skipDuplicates?: boolean
  }

  export type produtoCreateWithoutFornecedorInput = {
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
    pedido_produto?: pedido_produtoCreateNestedManyWithoutProdutoInput
    produto_insumo?: produto_insumoCreateNestedManyWithoutProdutoInput
  }

  export type produtoUncheckedCreateWithoutFornecedorInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
    pedido_produto?: pedido_produtoUncheckedCreateNestedManyWithoutProdutoInput
    produto_insumo?: produto_insumoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoCreateOrConnectWithoutFornecedorInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutFornecedorInput, produtoUncheckedCreateWithoutFornecedorInput>
  }

  export type produtoCreateManyFornecedorInputEnvelope = {
    data: produtoCreateManyFornecedorInput | produtoCreateManyFornecedorInput[]
    skipDuplicates?: boolean
  }

  export type insumoUpsertWithWhereUniqueWithoutFornecedorInput = {
    where: insumoWhereUniqueInput
    update: XOR<insumoUpdateWithoutFornecedorInput, insumoUncheckedUpdateWithoutFornecedorInput>
    create: XOR<insumoCreateWithoutFornecedorInput, insumoUncheckedCreateWithoutFornecedorInput>
  }

  export type insumoUpdateWithWhereUniqueWithoutFornecedorInput = {
    where: insumoWhereUniqueInput
    data: XOR<insumoUpdateWithoutFornecedorInput, insumoUncheckedUpdateWithoutFornecedorInput>
  }

  export type insumoUpdateManyWithWhereWithoutFornecedorInput = {
    where: insumoScalarWhereInput
    data: XOR<insumoUpdateManyMutationInput, insumoUncheckedUpdateManyWithoutFornecedorInput>
  }

  export type insumoScalarWhereInput = {
    AND?: insumoScalarWhereInput | insumoScalarWhereInput[]
    OR?: insumoScalarWhereInput[]
    NOT?: insumoScalarWhereInput | insumoScalarWhereInput[]
    id?: IntFilter<"insumo"> | number
    nome?: StringFilter<"insumo"> | string
    descricao?: StringNullableFilter<"insumo"> | string | null
    unidade_medida?: StringNullableFilter<"insumo"> | string | null
    preco_unitario?: DecimalNullableFilter<"insumo"> | Decimal | DecimalJsLike | number | string | null
    id_fornecedor?: IntNullableFilter<"insumo"> | number | null
  }

  export type produtoUpsertWithWhereUniqueWithoutFornecedorInput = {
    where: produtoWhereUniqueInput
    update: XOR<produtoUpdateWithoutFornecedorInput, produtoUncheckedUpdateWithoutFornecedorInput>
    create: XOR<produtoCreateWithoutFornecedorInput, produtoUncheckedCreateWithoutFornecedorInput>
  }

  export type produtoUpdateWithWhereUniqueWithoutFornecedorInput = {
    where: produtoWhereUniqueInput
    data: XOR<produtoUpdateWithoutFornecedorInput, produtoUncheckedUpdateWithoutFornecedorInput>
  }

  export type produtoUpdateManyWithWhereWithoutFornecedorInput = {
    where: produtoScalarWhereInput
    data: XOR<produtoUpdateManyMutationInput, produtoUncheckedUpdateManyWithoutFornecedorInput>
  }

  export type produtoScalarWhereInput = {
    AND?: produtoScalarWhereInput | produtoScalarWhereInput[]
    OR?: produtoScalarWhereInput[]
    NOT?: produtoScalarWhereInput | produtoScalarWhereInput[]
    id?: IntFilter<"produto"> | number
    nome?: StringFilter<"produto"> | string
    descricao?: StringNullableFilter<"produto"> | string | null
    preco_unitario?: DecimalNullableFilter<"produto"> | Decimal | DecimalJsLike | number | string | null
    estoque?: IntNullableFilter<"produto"> | number | null
    unidade_medida?: StringNullableFilter<"produto"> | string | null
    id_fornecedor?: IntNullableFilter<"produto"> | number | null
  }

  export type fornecedorCreateWithoutInsumoInput = {
    nome_fantasia: string
    razao_social?: string | null
    cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
    produto?: produtoCreateNestedManyWithoutFornecedorInput
  }

  export type fornecedorUncheckedCreateWithoutInsumoInput = {
    id?: number
    nome_fantasia: string
    razao_social?: string | null
    cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
    produto?: produtoUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type fornecedorCreateOrConnectWithoutInsumoInput = {
    where: fornecedorWhereUniqueInput
    create: XOR<fornecedorCreateWithoutInsumoInput, fornecedorUncheckedCreateWithoutInsumoInput>
  }

  export type produto_insumoCreateWithoutInsumoInput = {
    quantidade?: Decimal | DecimalJsLike | number | string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    produto?: produtoCreateNestedOneWithoutProduto_insumoInput
  }

  export type produto_insumoUncheckedCreateWithoutInsumoInput = {
    id?: number
    id_produto?: number | null
    quantidade?: Decimal | DecimalJsLike | number | string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type produto_insumoCreateOrConnectWithoutInsumoInput = {
    where: produto_insumoWhereUniqueInput
    create: XOR<produto_insumoCreateWithoutInsumoInput, produto_insumoUncheckedCreateWithoutInsumoInput>
  }

  export type produto_insumoCreateManyInsumoInputEnvelope = {
    data: produto_insumoCreateManyInsumoInput | produto_insumoCreateManyInsumoInput[]
    skipDuplicates?: boolean
  }

  export type fornecedorUpsertWithoutInsumoInput = {
    update: XOR<fornecedorUpdateWithoutInsumoInput, fornecedorUncheckedUpdateWithoutInsumoInput>
    create: XOR<fornecedorCreateWithoutInsumoInput, fornecedorUncheckedCreateWithoutInsumoInput>
    where?: fornecedorWhereInput
  }

  export type fornecedorUpdateToOneWithWhereWithoutInsumoInput = {
    where?: fornecedorWhereInput
    data: XOR<fornecedorUpdateWithoutInsumoInput, fornecedorUncheckedUpdateWithoutInsumoInput>
  }

  export type fornecedorUpdateWithoutInsumoInput = {
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    razao_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produto?: produtoUpdateManyWithoutFornecedorNestedInput
  }

  export type fornecedorUncheckedUpdateWithoutInsumoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    razao_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produto?: produtoUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type produto_insumoUpsertWithWhereUniqueWithoutInsumoInput = {
    where: produto_insumoWhereUniqueInput
    update: XOR<produto_insumoUpdateWithoutInsumoInput, produto_insumoUncheckedUpdateWithoutInsumoInput>
    create: XOR<produto_insumoCreateWithoutInsumoInput, produto_insumoUncheckedCreateWithoutInsumoInput>
  }

  export type produto_insumoUpdateWithWhereUniqueWithoutInsumoInput = {
    where: produto_insumoWhereUniqueInput
    data: XOR<produto_insumoUpdateWithoutInsumoInput, produto_insumoUncheckedUpdateWithoutInsumoInput>
  }

  export type produto_insumoUpdateManyWithWhereWithoutInsumoInput = {
    where: produto_insumoScalarWhereInput
    data: XOR<produto_insumoUpdateManyMutationInput, produto_insumoUncheckedUpdateManyWithoutInsumoInput>
  }

  export type produto_insumoScalarWhereInput = {
    AND?: produto_insumoScalarWhereInput | produto_insumoScalarWhereInput[]
    OR?: produto_insumoScalarWhereInput[]
    NOT?: produto_insumoScalarWhereInput | produto_insumoScalarWhereInput[]
    id?: IntFilter<"produto_insumo"> | number
    id_produto?: IntNullableFilter<"produto_insumo"> | number | null
    id_insumo?: IntNullableFilter<"produto_insumo"> | number | null
    quantidade?: DecimalNullableFilter<"produto_insumo"> | Decimal | DecimalJsLike | number | string | null
    preco_unitario?: DecimalNullableFilter<"produto_insumo"> | Decimal | DecimalJsLike | number | string | null
  }

  export type clienteCreateWithoutPedidoInput = {
    nome: string
    cpf_cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
  }

  export type clienteUncheckedCreateWithoutPedidoInput = {
    id?: number
    nome: string
    cpf_cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
  }

  export type clienteCreateOrConnectWithoutPedidoInput = {
    where: clienteWhereUniqueInput
    create: XOR<clienteCreateWithoutPedidoInput, clienteUncheckedCreateWithoutPedidoInput>
  }

  export type pedido_produtoCreateWithoutPedidoInput = {
    quantidade?: number | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    produto: produtoCreateNestedOneWithoutPedido_produtoInput
  }

  export type pedido_produtoUncheckedCreateWithoutPedidoInput = {
    id?: number
    id_produto: number
    quantidade?: number | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type pedido_produtoCreateOrConnectWithoutPedidoInput = {
    where: pedido_produtoWhereUniqueInput
    create: XOR<pedido_produtoCreateWithoutPedidoInput, pedido_produtoUncheckedCreateWithoutPedidoInput>
  }

  export type pedido_produtoCreateManyPedidoInputEnvelope = {
    data: pedido_produtoCreateManyPedidoInput | pedido_produtoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type clienteUpsertWithoutPedidoInput = {
    update: XOR<clienteUpdateWithoutPedidoInput, clienteUncheckedUpdateWithoutPedidoInput>
    create: XOR<clienteCreateWithoutPedidoInput, clienteUncheckedCreateWithoutPedidoInput>
    where?: clienteWhereInput
  }

  export type clienteUpdateToOneWithWhereWithoutPedidoInput = {
    where?: clienteWhereInput
    data: XOR<clienteUpdateWithoutPedidoInput, clienteUncheckedUpdateWithoutPedidoInput>
  }

  export type clienteUpdateWithoutPedidoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clienteUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pedido_produtoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: pedido_produtoWhereUniqueInput
    update: XOR<pedido_produtoUpdateWithoutPedidoInput, pedido_produtoUncheckedUpdateWithoutPedidoInput>
    create: XOR<pedido_produtoCreateWithoutPedidoInput, pedido_produtoUncheckedCreateWithoutPedidoInput>
  }

  export type pedido_produtoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: pedido_produtoWhereUniqueInput
    data: XOR<pedido_produtoUpdateWithoutPedidoInput, pedido_produtoUncheckedUpdateWithoutPedidoInput>
  }

  export type pedido_produtoUpdateManyWithWhereWithoutPedidoInput = {
    where: pedido_produtoScalarWhereInput
    data: XOR<pedido_produtoUpdateManyMutationInput, pedido_produtoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type pedido_produtoScalarWhereInput = {
    AND?: pedido_produtoScalarWhereInput | pedido_produtoScalarWhereInput[]
    OR?: pedido_produtoScalarWhereInput[]
    NOT?: pedido_produtoScalarWhereInput | pedido_produtoScalarWhereInput[]
    id?: IntFilter<"pedido_produto"> | number
    id_pedido?: IntFilter<"pedido_produto"> | number
    id_produto?: IntFilter<"pedido_produto"> | number
    quantidade?: IntNullableFilter<"pedido_produto"> | number | null
    preco_unitario?: DecimalNullableFilter<"pedido_produto"> | Decimal | DecimalJsLike | number | string | null
  }

  export type pedidoCreateWithoutPedido_produtoInput = {
    data_pedido?: Date | string | null
    data_entrega?: Date | string | null
    status?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
    cliente?: clienteCreateNestedOneWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutPedido_produtoInput = {
    id?: number
    id_cliente?: number | null
    data_pedido?: Date | string | null
    data_entrega?: Date | string | null
    status?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type pedidoCreateOrConnectWithoutPedido_produtoInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutPedido_produtoInput, pedidoUncheckedCreateWithoutPedido_produtoInput>
  }

  export type produtoCreateWithoutPedido_produtoInput = {
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
    fornecedor?: fornecedorCreateNestedOneWithoutProdutoInput
    produto_insumo?: produto_insumoCreateNestedManyWithoutProdutoInput
  }

  export type produtoUncheckedCreateWithoutPedido_produtoInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
    id_fornecedor?: number | null
    produto_insumo?: produto_insumoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoCreateOrConnectWithoutPedido_produtoInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutPedido_produtoInput, produtoUncheckedCreateWithoutPedido_produtoInput>
  }

  export type pedidoUpsertWithoutPedido_produtoInput = {
    update: XOR<pedidoUpdateWithoutPedido_produtoInput, pedidoUncheckedUpdateWithoutPedido_produtoInput>
    create: XOR<pedidoCreateWithoutPedido_produtoInput, pedidoUncheckedCreateWithoutPedido_produtoInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutPedido_produtoInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutPedido_produtoInput, pedidoUncheckedUpdateWithoutPedido_produtoInput>
  }

  export type pedidoUpdateWithoutPedido_produtoInput = {
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cliente?: clienteUpdateOneWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutPedido_produtoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: NullableIntFieldUpdateOperationsInput | number | null
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type produtoUpsertWithoutPedido_produtoInput = {
    update: XOR<produtoUpdateWithoutPedido_produtoInput, produtoUncheckedUpdateWithoutPedido_produtoInput>
    create: XOR<produtoCreateWithoutPedido_produtoInput, produtoUncheckedCreateWithoutPedido_produtoInput>
    where?: produtoWhereInput
  }

  export type produtoUpdateToOneWithWhereWithoutPedido_produtoInput = {
    where?: produtoWhereInput
    data: XOR<produtoUpdateWithoutPedido_produtoInput, produtoUncheckedUpdateWithoutPedido_produtoInput>
  }

  export type produtoUpdateWithoutPedido_produtoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    fornecedor?: fornecedorUpdateOneWithoutProdutoNestedInput
    produto_insumo?: produto_insumoUpdateManyWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateWithoutPedido_produtoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    id_fornecedor?: NullableIntFieldUpdateOperationsInput | number | null
    produto_insumo?: produto_insumoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type pedido_produtoCreateWithoutProdutoInput = {
    quantidade?: number | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    pedido: pedidoCreateNestedOneWithoutPedido_produtoInput
  }

  export type pedido_produtoUncheckedCreateWithoutProdutoInput = {
    id?: number
    id_pedido: number
    quantidade?: number | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type pedido_produtoCreateOrConnectWithoutProdutoInput = {
    where: pedido_produtoWhereUniqueInput
    create: XOR<pedido_produtoCreateWithoutProdutoInput, pedido_produtoUncheckedCreateWithoutProdutoInput>
  }

  export type pedido_produtoCreateManyProdutoInputEnvelope = {
    data: pedido_produtoCreateManyProdutoInput | pedido_produtoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type fornecedorCreateWithoutProdutoInput = {
    nome_fantasia: string
    razao_social?: string | null
    cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
    insumo?: insumoCreateNestedManyWithoutFornecedorInput
  }

  export type fornecedorUncheckedCreateWithoutProdutoInput = {
    id?: number
    nome_fantasia: string
    razao_social?: string | null
    cnpj: string
    telefone?: string | null
    email: string
    endereco?: string | null
    data_cadastro?: Date | string | null
    insumo?: insumoUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type fornecedorCreateOrConnectWithoutProdutoInput = {
    where: fornecedorWhereUniqueInput
    create: XOR<fornecedorCreateWithoutProdutoInput, fornecedorUncheckedCreateWithoutProdutoInput>
  }

  export type produto_insumoCreateWithoutProdutoInput = {
    quantidade?: Decimal | DecimalJsLike | number | string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    insumo?: insumoCreateNestedOneWithoutProduto_insumoInput
  }

  export type produto_insumoUncheckedCreateWithoutProdutoInput = {
    id?: number
    id_insumo?: number | null
    quantidade?: Decimal | DecimalJsLike | number | string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type produto_insumoCreateOrConnectWithoutProdutoInput = {
    where: produto_insumoWhereUniqueInput
    create: XOR<produto_insumoCreateWithoutProdutoInput, produto_insumoUncheckedCreateWithoutProdutoInput>
  }

  export type produto_insumoCreateManyProdutoInputEnvelope = {
    data: produto_insumoCreateManyProdutoInput | produto_insumoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type pedido_produtoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: pedido_produtoWhereUniqueInput
    update: XOR<pedido_produtoUpdateWithoutProdutoInput, pedido_produtoUncheckedUpdateWithoutProdutoInput>
    create: XOR<pedido_produtoCreateWithoutProdutoInput, pedido_produtoUncheckedCreateWithoutProdutoInput>
  }

  export type pedido_produtoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: pedido_produtoWhereUniqueInput
    data: XOR<pedido_produtoUpdateWithoutProdutoInput, pedido_produtoUncheckedUpdateWithoutProdutoInput>
  }

  export type pedido_produtoUpdateManyWithWhereWithoutProdutoInput = {
    where: pedido_produtoScalarWhereInput
    data: XOR<pedido_produtoUpdateManyMutationInput, pedido_produtoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type fornecedorUpsertWithoutProdutoInput = {
    update: XOR<fornecedorUpdateWithoutProdutoInput, fornecedorUncheckedUpdateWithoutProdutoInput>
    create: XOR<fornecedorCreateWithoutProdutoInput, fornecedorUncheckedCreateWithoutProdutoInput>
    where?: fornecedorWhereInput
  }

  export type fornecedorUpdateToOneWithWhereWithoutProdutoInput = {
    where?: fornecedorWhereInput
    data: XOR<fornecedorUpdateWithoutProdutoInput, fornecedorUncheckedUpdateWithoutProdutoInput>
  }

  export type fornecedorUpdateWithoutProdutoInput = {
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    razao_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insumo?: insumoUpdateManyWithoutFornecedorNestedInput
  }

  export type fornecedorUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    razao_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insumo?: insumoUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type produto_insumoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: produto_insumoWhereUniqueInput
    update: XOR<produto_insumoUpdateWithoutProdutoInput, produto_insumoUncheckedUpdateWithoutProdutoInput>
    create: XOR<produto_insumoCreateWithoutProdutoInput, produto_insumoUncheckedCreateWithoutProdutoInput>
  }

  export type produto_insumoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: produto_insumoWhereUniqueInput
    data: XOR<produto_insumoUpdateWithoutProdutoInput, produto_insumoUncheckedUpdateWithoutProdutoInput>
  }

  export type produto_insumoUpdateManyWithWhereWithoutProdutoInput = {
    where: produto_insumoScalarWhereInput
    data: XOR<produto_insumoUpdateManyMutationInput, produto_insumoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type insumoCreateWithoutProduto_insumoInput = {
    nome: string
    descricao?: string | null
    unidade_medida?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    fornecedor?: fornecedorCreateNestedOneWithoutInsumoInput
  }

  export type insumoUncheckedCreateWithoutProduto_insumoInput = {
    id?: number
    nome: string
    descricao?: string | null
    unidade_medida?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    id_fornecedor?: number | null
  }

  export type insumoCreateOrConnectWithoutProduto_insumoInput = {
    where: insumoWhereUniqueInput
    create: XOR<insumoCreateWithoutProduto_insumoInput, insumoUncheckedCreateWithoutProduto_insumoInput>
  }

  export type produtoCreateWithoutProduto_insumoInput = {
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
    pedido_produto?: pedido_produtoCreateNestedManyWithoutProdutoInput
    fornecedor?: fornecedorCreateNestedOneWithoutProdutoInput
  }

  export type produtoUncheckedCreateWithoutProduto_insumoInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
    id_fornecedor?: number | null
    pedido_produto?: pedido_produtoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtoCreateOrConnectWithoutProduto_insumoInput = {
    where: produtoWhereUniqueInput
    create: XOR<produtoCreateWithoutProduto_insumoInput, produtoUncheckedCreateWithoutProduto_insumoInput>
  }

  export type insumoUpsertWithoutProduto_insumoInput = {
    update: XOR<insumoUpdateWithoutProduto_insumoInput, insumoUncheckedUpdateWithoutProduto_insumoInput>
    create: XOR<insumoCreateWithoutProduto_insumoInput, insumoUncheckedCreateWithoutProduto_insumoInput>
    where?: insumoWhereInput
  }

  export type insumoUpdateToOneWithWhereWithoutProduto_insumoInput = {
    where?: insumoWhereInput
    data: XOR<insumoUpdateWithoutProduto_insumoInput, insumoUncheckedUpdateWithoutProduto_insumoInput>
  }

  export type insumoUpdateWithoutProduto_insumoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fornecedor?: fornecedorUpdateOneWithoutInsumoNestedInput
  }

  export type insumoUncheckedUpdateWithoutProduto_insumoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    id_fornecedor?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type produtoUpsertWithoutProduto_insumoInput = {
    update: XOR<produtoUpdateWithoutProduto_insumoInput, produtoUncheckedUpdateWithoutProduto_insumoInput>
    create: XOR<produtoCreateWithoutProduto_insumoInput, produtoUncheckedCreateWithoutProduto_insumoInput>
    where?: produtoWhereInput
  }

  export type produtoUpdateToOneWithWhereWithoutProduto_insumoInput = {
    where?: produtoWhereInput
    data: XOR<produtoUpdateWithoutProduto_insumoInput, produtoUncheckedUpdateWithoutProduto_insumoInput>
  }

  export type produtoUpdateWithoutProduto_insumoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    pedido_produto?: pedido_produtoUpdateManyWithoutProdutoNestedInput
    fornecedor?: fornecedorUpdateOneWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateWithoutProduto_insumoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    id_fornecedor?: NullableIntFieldUpdateOperationsInput | number | null
    pedido_produto?: pedido_produtoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type pedidoCreateManyClienteInput = {
    id?: number
    data_pedido?: Date | string | null
    data_entrega?: Date | string | null
    status?: string | null
    valor_total?: Decimal | DecimalJsLike | number | string | null
  }

  export type pedidoUpdateWithoutClienteInput = {
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pedido_produto?: pedido_produtoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pedido_produto?: pedido_produtoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_pedido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    valor_total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type insumoCreateManyFornecedorInput = {
    id?: number
    nome: string
    descricao?: string | null
    unidade_medida?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type produtoCreateManyFornecedorInput = {
    id?: number
    nome: string
    descricao?: string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    estoque?: number | null
    unidade_medida?: string | null
  }

  export type insumoUpdateWithoutFornecedorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    produto_insumo?: produto_insumoUpdateManyWithoutInsumoNestedInput
  }

  export type insumoUncheckedUpdateWithoutFornecedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    produto_insumo?: produto_insumoUncheckedUpdateManyWithoutInsumoNestedInput
  }

  export type insumoUncheckedUpdateManyWithoutFornecedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type produtoUpdateWithoutFornecedorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    pedido_produto?: pedido_produtoUpdateManyWithoutProdutoNestedInput
    produto_insumo?: produto_insumoUpdateManyWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateWithoutFornecedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    pedido_produto?: pedido_produtoUncheckedUpdateManyWithoutProdutoNestedInput
    produto_insumo?: produto_insumoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type produtoUncheckedUpdateManyWithoutFornecedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estoque?: NullableIntFieldUpdateOperationsInput | number | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produto_insumoCreateManyInsumoInput = {
    id?: number
    id_produto?: number | null
    quantidade?: Decimal | DecimalJsLike | number | string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type produto_insumoUpdateWithoutInsumoInput = {
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    produto?: produtoUpdateOneWithoutProduto_insumoNestedInput
  }

  export type produto_insumoUncheckedUpdateWithoutInsumoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_produto?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type produto_insumoUncheckedUpdateManyWithoutInsumoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_produto?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type pedido_produtoCreateManyPedidoInput = {
    id?: number
    id_produto: number
    quantidade?: number | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type pedido_produtoUpdateWithoutPedidoInput = {
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    produto?: produtoUpdateOneRequiredWithoutPedido_produtoNestedInput
  }

  export type pedido_produtoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_produto?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type pedido_produtoUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_produto?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type pedido_produtoCreateManyProdutoInput = {
    id?: number
    id_pedido: number
    quantidade?: number | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type produto_insumoCreateManyProdutoInput = {
    id?: number
    id_insumo?: number | null
    quantidade?: Decimal | DecimalJsLike | number | string | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type pedido_produtoUpdateWithoutProdutoInput = {
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pedido?: pedidoUpdateOneRequiredWithoutPedido_produtoNestedInput
  }

  export type pedido_produtoUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type pedido_produtoUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type produto_insumoUpdateWithoutProdutoInput = {
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    insumo?: insumoUpdateOneWithoutProduto_insumoNestedInput
  }

  export type produto_insumoUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_insumo?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type produto_insumoUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_insumo?: NullableIntFieldUpdateOperationsInput | number | null
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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
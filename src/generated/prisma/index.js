
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Dim_clienteScalarFieldEnum = {
  cliente_id: 'cliente_id',
  nome: 'nome',
  cpf_cnpj: 'cpf_cnpj',
  telefone: 'telefone',
  email: 'email',
  endereco: 'endereco',
  data_cadastro: 'data_cadastro'
};

exports.Prisma.Dim_fornecedorScalarFieldEnum = {
  fornecedor_id: 'fornecedor_id',
  nome_fantasia: 'nome_fantasia',
  razao_social: 'razao_social',
  cnpj: 'cnpj',
  telefone: 'telefone',
  email: 'email',
  endereco: 'endereco',
  data_cadastro: 'data_cadastro'
};

exports.Prisma.Dim_insumoScalarFieldEnum = {
  insumo_id: 'insumo_id',
  nome: 'nome',
  descricao: 'descricao',
  unidade_medida: 'unidade_medida',
  preco_unitario: 'preco_unitario',
  fornecedor_id: 'fornecedor_id'
};

exports.Prisma.Dim_produtoScalarFieldEnum = {
  produto_id: 'produto_id',
  nome: 'nome',
  descricao: 'descricao',
  preco_unitario: 'preco_unitario',
  estoque: 'estoque',
  unidade_medida: 'unidade_medida',
  fornecedor_id: 'fornecedor_id'
};

exports.Prisma.Fct_pedidoScalarFieldEnum = {
  pedido_id: 'pedido_id',
  cliente_id: 'cliente_id',
  data_pedido: 'data_pedido',
  data_entrega: 'data_entrega',
  status: 'status',
  valor_total: 'valor_total'
};

exports.Prisma.Map_produto_composicaoScalarFieldEnum = {
  map_id: 'map_id',
  produto_id: 'produto_id',
  insumo_id: 'insumo_id',
  quantidade: 'quantidade',
  preco_unitario: 'preco_unitario'
};

exports.Prisma.Map_pedido_detalheScalarFieldEnum = {
  map_id: 'map_id',
  pedido_id: 'pedido_id',
  produto_id: 'produto_id',
  quantidade: 'quantidade',
  preco_unitario: 'preco_unitario'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Unidade_medida = exports.$Enums.Unidade_medida = {
  Unidade: 'Unidade',
  Duzia: 'Duzia',
  Pacote: 'Pacote',
  Kilo: 'Kilo',
  Litro: 'Litro',
  Centimetro: 'Centimetro'
};

exports.Status = exports.$Enums.Status = {
  Corte: 'Corte',
  Costura: 'Costura',
  Revisão: 'Revisão',
  Etiqueta: 'Etiqueta',
  Embalagem: 'Embalagem'
};

exports.Prisma.ModelName = {
  dim_cliente: 'dim_cliente',
  dim_fornecedor: 'dim_fornecedor',
  dim_insumo: 'dim_insumo',
  dim_produto: 'dim_produto',
  fct_pedido: 'fct_pedido',
  map_produto_composicao: 'map_produto_composicao',
  map_pedido_detalhe: 'map_pedido_detalhe'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Projetos\\Fatec\\PI\\interface\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Projetos\\Fatec\\PI\\interface\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nenum Unidade_medida {\n  Unidade\n  Duzia\n  Pacote\n  Kilo\n  Litro\n  Centimetro\n}\n\nenum Status {\n  Corte\n  Costura\n  Revisão\n  Etiqueta\n  Embalagem\n}\n\nmodel dim_cliente {\n  cliente_id    Int          @id @default(autoincrement())\n  nome          String       @db.VarChar(100)\n  cpf_cnpj      String       @unique @db.VarChar(20)\n  telefone      String?      @db.VarChar(20)\n  email         String       @unique @db.VarChar(100)\n  endereco      String?      @db.VarChar(200)\n  data_cadastro DateTime?    @default(dbgenerated(\"CURRENT_DATE\")) @db.Date\n  fct_pedido    fct_pedido[]\n}\n\nmodel dim_fornecedor {\n  fornecedor_id Int           @id @default(autoincrement())\n  nome_fantasia String        @db.VarChar(100)\n  razao_social  String?       @db.VarChar(150)\n  cnpj          String        @unique @db.VarChar(20)\n  telefone      String?       @db.VarChar(20)\n  email         String        @unique @db.VarChar(100)\n  endereco      String?       @db.VarChar(200)\n  data_cadastro DateTime?     @default(dbgenerated(\"CURRENT_DATE\")) @db.Date\n  dim_insumo    dim_insumo[]\n  dim_produto   dim_produto[]\n}\n\nmodel dim_insumo {\n  insumo_id      Int                      @id @default(autoincrement())\n  nome           String                   @db.VarChar(100)\n  descricao      String?                  @db.VarChar(200)\n  unidade_medida Unidade_medida\n  preco_unitario Decimal?                 @db.Decimal(10, 2)\n  fornecedor_id  Int?\n  fornecedor     dim_fornecedor?          @relation(fields: [fornecedor_id], references: [fornecedor_id], onDelete: NoAction, onUpdate: NoAction, map: \"fk_fornecedor\")\n  map_composicao map_produto_composicao[]\n}\n\nmodel dim_produto {\n  produto_id     Int                      @id @default(autoincrement())\n  nome           String                   @db.VarChar(100)\n  descricao      String?                  @db.VarChar(200)\n  preco_unitario Decimal?                 @db.Decimal(10, 2)\n  estoque        Int?                     @default(0)\n  unidade_medida Unidade_medida\n  fornecedor_id  Int?\n  fornecedor     dim_fornecedor?          @relation(fields: [fornecedor_id], references: [fornecedor_id], onDelete: NoAction, onUpdate: NoAction, map: \"fk_fornecedor\")\n  map_detalhe    map_pedido_detalhe[]\n  map_composicao map_produto_composicao[]\n}\n\nmodel fct_pedido {\n  pedido_id    Int                  @id @default(autoincrement())\n  cliente_id   Int?\n  data_pedido  DateTime?            @default(dbgenerated(\"CURRENT_DATE\")) @db.Date\n  data_entrega DateTime?            @db.Date\n  status       Status\n  valor_total  Decimal?             @db.Decimal(12, 2)\n  cliente      dim_cliente?         @relation(fields: [cliente_id], references: [cliente_id], onDelete: NoAction, onUpdate: NoAction, map: \"fk_cliente\")\n  map_detalhe  map_pedido_detalhe[]\n}\n\nmodel map_produto_composicao {\n  map_id         Int          @id @default(autoincrement())\n  produto_id     Int?\n  insumo_id      Int?\n  quantidade     Decimal      @db.Decimal(10, 2)\n  preco_unitario Decimal      @db.Decimal(10, 2)\n  insumo         dim_insumo?  @relation(fields: [insumo_id], references: [insumo_id], onDelete: NoAction, onUpdate: NoAction, map: \"fk_insumo\")\n  produto        dim_produto? @relation(fields: [produto_id], references: [produto_id], onDelete: NoAction, onUpdate: NoAction, map: \"fk_produto\")\n\n  @@unique([produto_id, insumo_id], map: \"unico_produto_insumo\")\n}\n\nmodel map_pedido_detalhe {\n  map_id         Int         @id @default(autoincrement())\n  pedido_id      Int\n  produto_id     Int\n  quantidade     Int         @db.Integer\n  preco_unitario Decimal     @db.Decimal(10, 2)\n  pedido         fct_pedido  @relation(fields: [pedido_id], references: [pedido_id], onDelete: NoAction, onUpdate: NoAction, map: \"fk_pedido\")\n  produto        dim_produto @relation(fields: [produto_id], references: [produto_id], onDelete: NoAction, onUpdate: NoAction, map: \"fk_produto\")\n\n  @@unique([pedido_id, produto_id], map: \"unico_pedido_produto\")\n}\n",
  "inlineSchemaHash": "33b582f85800be8a37c905098c32a433309f391c48e5f7cb0e6af0d781111d26",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/prisma",
    "generated/prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"dim_cliente\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"cliente_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpf_cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endereco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_cadastro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"CURRENT_DATE\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fct_pedido\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"fct_pedido\",\"nativeType\":null,\"relationName\":\"dim_clienteTofct_pedido\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"dim_fornecedor\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"fornecedor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_fantasia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razao_social\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"150\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endereco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_cadastro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"CURRENT_DATE\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dim_insumo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dim_insumo\",\"nativeType\":null,\"relationName\":\"dim_fornecedorTodim_insumo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dim_produto\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dim_produto\",\"nativeType\":null,\"relationName\":\"dim_fornecedorTodim_produto\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"dim_insumo\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"insumo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unidade_medida\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Unidade_medida\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preco_unitario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fornecedor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fornecedor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dim_fornecedor\",\"nativeType\":null,\"relationName\":\"dim_fornecedorTodim_insumo\",\"relationFromFields\":[\"fornecedor_id\"],\"relationToFields\":[\"fornecedor_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"map_composicao\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"map_produto_composicao\",\"nativeType\":null,\"relationName\":\"dim_insumoTomap_produto_composicao\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"dim_produto\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"produto_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preco_unitario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estoque\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unidade_medida\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Unidade_medida\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fornecedor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fornecedor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dim_fornecedor\",\"nativeType\":null,\"relationName\":\"dim_fornecedorTodim_produto\",\"relationFromFields\":[\"fornecedor_id\"],\"relationToFields\":[\"fornecedor_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"map_detalhe\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"map_pedido_detalhe\",\"nativeType\":null,\"relationName\":\"dim_produtoTomap_pedido_detalhe\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"map_composicao\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"map_produto_composicao\",\"nativeType\":null,\"relationName\":\"dim_produtoTomap_produto_composicao\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"fct_pedido\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"pedido_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cliente_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_pedido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"CURRENT_DATE\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_entrega\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Status\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valor_total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"12\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cliente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dim_cliente\",\"nativeType\":null,\"relationName\":\"dim_clienteTofct_pedido\",\"relationFromFields\":[\"cliente_id\"],\"relationToFields\":[\"cliente_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"map_detalhe\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"map_pedido_detalhe\",\"nativeType\":null,\"relationName\":\"fct_pedidoTomap_pedido_detalhe\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"map_produto_composicao\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"map_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"produto_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insumo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantidade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preco_unitario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insumo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dim_insumo\",\"nativeType\":null,\"relationName\":\"dim_insumoTomap_produto_composicao\",\"relationFromFields\":[\"insumo_id\"],\"relationToFields\":[\"insumo_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"produto\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dim_produto\",\"nativeType\":null,\"relationName\":\"dim_produtoTomap_produto_composicao\",\"relationFromFields\":[\"produto_id\"],\"relationToFields\":[\"produto_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"produto_id\",\"insumo_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"produto_id\",\"insumo_id\"]}],\"isGenerated\":false},\"map_pedido_detalhe\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"map_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pedido_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"produto_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantidade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"Integer\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preco_unitario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pedido\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"fct_pedido\",\"nativeType\":null,\"relationName\":\"fct_pedidoTomap_pedido_detalhe\",\"relationFromFields\":[\"pedido_id\"],\"relationToFields\":[\"pedido_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"produto\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dim_produto\",\"nativeType\":null,\"relationName\":\"dim_produtoTomap_pedido_detalhe\",\"relationFromFields\":[\"produto_id\"],\"relationToFields\":[\"produto_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"pedido_id\",\"produto_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"pedido_id\",\"produto_id\"]}],\"isGenerated\":false}},\"enums\":{\"Unidade_medida\":{\"values\":[{\"name\":\"Unidade\",\"dbName\":null},{\"name\":\"Duzia\",\"dbName\":null},{\"name\":\"Pacote\",\"dbName\":null},{\"name\":\"Kilo\",\"dbName\":null},{\"name\":\"Litro\",\"dbName\":null},{\"name\":\"Centimetro\",\"dbName\":null}],\"dbName\":null},\"Status\":{\"values\":[{\"name\":\"Corte\",\"dbName\":null},{\"name\":\"Costura\",\"dbName\":null},{\"name\":\"Revisão\",\"dbName\":null},{\"name\":\"Etiqueta\",\"dbName\":null},{\"name\":\"Embalagem\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/prisma/schema.prisma")

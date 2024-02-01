import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  name: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "library" */
export type Library = {
  __typename?: 'library';
  id: Scalars['Int']['output'];
  name: Scalars['name']['output'];
};

/** aggregated selection of "library" */
export type Library_Aggregate = {
  __typename?: 'library_aggregate';
  aggregate?: Maybe<Library_Aggregate_Fields>;
  nodes: Array<Library>;
};

/** aggregate fields of "library" */
export type Library_Aggregate_Fields = {
  __typename?: 'library_aggregate_fields';
  avg?: Maybe<Library_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Library_Max_Fields>;
  min?: Maybe<Library_Min_Fields>;
  stddev?: Maybe<Library_Stddev_Fields>;
  stddev_pop?: Maybe<Library_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Library_Stddev_Samp_Fields>;
  sum?: Maybe<Library_Sum_Fields>;
  var_pop?: Maybe<Library_Var_Pop_Fields>;
  var_samp?: Maybe<Library_Var_Samp_Fields>;
  variance?: Maybe<Library_Variance_Fields>;
};


/** aggregate fields of "library" */
export type Library_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Library_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Library_Avg_Fields = {
  __typename?: 'library_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "library". All fields are combined with a logical 'AND'. */
export type Library_Bool_Exp = {
  _and?: InputMaybe<Array<Library_Bool_Exp>>;
  _not?: InputMaybe<Library_Bool_Exp>;
  _or?: InputMaybe<Array<Library_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<Name_Comparison_Exp>;
};

/** unique or primary key constraints on table "library" */
export enum Library_Constraint {
  /** unique or primary key constraint on columns "name" */
  LibraryNameKey = 'library_name_key',
  /** unique or primary key constraint on columns "id" */
  LibraryPkey = 'library_pkey'
}

/** input type for incrementing numeric columns in table "library" */
export type Library_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "library" */
export type Library_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['name']['input']>;
};

/** aggregate max on columns */
export type Library_Max_Fields = {
  __typename?: 'library_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Library_Min_Fields = {
  __typename?: 'library_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "library" */
export type Library_Mutation_Response = {
  __typename?: 'library_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Library>;
};

/** on_conflict condition type for table "library" */
export type Library_On_Conflict = {
  constraint: Library_Constraint;
  update_columns?: Array<Library_Update_Column>;
  where?: InputMaybe<Library_Bool_Exp>;
};

/** Ordering options when selecting data from "library". */
export type Library_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: library */
export type Library_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "library" */
export enum Library_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "library" */
export type Library_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['name']['input']>;
};

/** aggregate stddev on columns */
export type Library_Stddev_Fields = {
  __typename?: 'library_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Library_Stddev_Pop_Fields = {
  __typename?: 'library_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Library_Stddev_Samp_Fields = {
  __typename?: 'library_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "library" */
export type Library_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Library_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Library_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['name']['input']>;
};

/** aggregate sum on columns */
export type Library_Sum_Fields = {
  __typename?: 'library_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "library" */
export enum Library_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Library_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Library_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Library_Set_Input>;
  /** filter the rows which have to be updated */
  where: Library_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Library_Var_Pop_Fields = {
  __typename?: 'library_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Library_Var_Samp_Fields = {
  __typename?: 'library_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Library_Variance_Fields = {
  __typename?: 'library_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "library" */
  delete_library?: Maybe<Library_Mutation_Response>;
  /** delete single row from the table: "library" */
  delete_library_by_pk?: Maybe<Library>;
  /** delete data from the table: "occupancy" */
  delete_occupancy?: Maybe<Occupancy_Mutation_Response>;
  /** delete single row from the table: "occupancy" */
  delete_occupancy_by_pk?: Maybe<Occupancy>;
  /** insert data into the table: "library" */
  insert_library?: Maybe<Library_Mutation_Response>;
  /** insert a single row into the table: "library" */
  insert_library_one?: Maybe<Library>;
  /** insert data into the table: "occupancy" */
  insert_occupancy?: Maybe<Occupancy_Mutation_Response>;
  /** insert a single row into the table: "occupancy" */
  insert_occupancy_one?: Maybe<Occupancy>;
  /** update data of the table: "library" */
  update_library?: Maybe<Library_Mutation_Response>;
  /** update single row of the table: "library" */
  update_library_by_pk?: Maybe<Library>;
  /** update multiples rows of table: "library" */
  update_library_many?: Maybe<Array<Maybe<Library_Mutation_Response>>>;
  /** update data of the table: "occupancy" */
  update_occupancy?: Maybe<Occupancy_Mutation_Response>;
  /** update single row of the table: "occupancy" */
  update_occupancy_by_pk?: Maybe<Occupancy>;
  /** update multiples rows of table: "occupancy" */
  update_occupancy_many?: Maybe<Array<Maybe<Occupancy_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_LibraryArgs = {
  where: Library_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Library_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OccupancyArgs = {
  where: Occupancy_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Occupancy_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_LibraryArgs = {
  objects: Array<Library_Insert_Input>;
  on_conflict?: InputMaybe<Library_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Library_OneArgs = {
  object: Library_Insert_Input;
  on_conflict?: InputMaybe<Library_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OccupancyArgs = {
  objects: Array<Occupancy_Insert_Input>;
  on_conflict?: InputMaybe<Occupancy_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Occupancy_OneArgs = {
  object: Occupancy_Insert_Input;
  on_conflict?: InputMaybe<Occupancy_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_LibraryArgs = {
  _inc?: InputMaybe<Library_Inc_Input>;
  _set?: InputMaybe<Library_Set_Input>;
  where: Library_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Library_By_PkArgs = {
  _inc?: InputMaybe<Library_Inc_Input>;
  _set?: InputMaybe<Library_Set_Input>;
  pk_columns: Library_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Library_ManyArgs = {
  updates: Array<Library_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OccupancyArgs = {
  _inc?: InputMaybe<Occupancy_Inc_Input>;
  _set?: InputMaybe<Occupancy_Set_Input>;
  where: Occupancy_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Occupancy_By_PkArgs = {
  _inc?: InputMaybe<Occupancy_Inc_Input>;
  _set?: InputMaybe<Occupancy_Set_Input>;
  pk_columns: Occupancy_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Occupancy_ManyArgs = {
  updates: Array<Occupancy_Updates>;
};

/** Boolean expression to compare columns of type "name". All fields are combined with logical 'AND'. */
export type Name_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['name']['input']>;
  _gt?: InputMaybe<Scalars['name']['input']>;
  _gte?: InputMaybe<Scalars['name']['input']>;
  _in?: InputMaybe<Array<Scalars['name']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['name']['input']>;
  _lte?: InputMaybe<Scalars['name']['input']>;
  _neq?: InputMaybe<Scalars['name']['input']>;
  _nin?: InputMaybe<Array<Scalars['name']['input']>>;
};

/** columns and relationships of "occupancy" */
export type Occupancy = {
  __typename?: 'occupancy';
  current: Scalars['Int']['output'];
  date: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  libary_id: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

/** aggregated selection of "occupancy" */
export type Occupancy_Aggregate = {
  __typename?: 'occupancy_aggregate';
  aggregate?: Maybe<Occupancy_Aggregate_Fields>;
  nodes: Array<Occupancy>;
};

/** aggregate fields of "occupancy" */
export type Occupancy_Aggregate_Fields = {
  __typename?: 'occupancy_aggregate_fields';
  avg?: Maybe<Occupancy_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Occupancy_Max_Fields>;
  min?: Maybe<Occupancy_Min_Fields>;
  stddev?: Maybe<Occupancy_Stddev_Fields>;
  stddev_pop?: Maybe<Occupancy_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Occupancy_Stddev_Samp_Fields>;
  sum?: Maybe<Occupancy_Sum_Fields>;
  var_pop?: Maybe<Occupancy_Var_Pop_Fields>;
  var_samp?: Maybe<Occupancy_Var_Samp_Fields>;
  variance?: Maybe<Occupancy_Variance_Fields>;
};


/** aggregate fields of "occupancy" */
export type Occupancy_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Occupancy_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Occupancy_Avg_Fields = {
  __typename?: 'occupancy_avg_fields';
  current?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  libary_id?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "occupancy". All fields are combined with a logical 'AND'. */
export type Occupancy_Bool_Exp = {
  _and?: InputMaybe<Array<Occupancy_Bool_Exp>>;
  _not?: InputMaybe<Occupancy_Bool_Exp>;
  _or?: InputMaybe<Array<Occupancy_Bool_Exp>>;
  current?: InputMaybe<Int_Comparison_Exp>;
  date?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  libary_id?: InputMaybe<Int_Comparison_Exp>;
  total?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "occupancy" */
export enum Occupancy_Constraint {
  /** unique or primary key constraint on columns "id" */
  OccupancyPkey = 'occupancy_pkey'
}

/** input type for incrementing numeric columns in table "occupancy" */
export type Occupancy_Inc_Input = {
  current?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  libary_id?: InputMaybe<Scalars['Int']['input']>;
  total?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "occupancy" */
export type Occupancy_Insert_Input = {
  current?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  libary_id?: InputMaybe<Scalars['Int']['input']>;
  total?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Occupancy_Max_Fields = {
  __typename?: 'occupancy_max_fields';
  current?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  libary_id?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Occupancy_Min_Fields = {
  __typename?: 'occupancy_min_fields';
  current?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  libary_id?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "occupancy" */
export type Occupancy_Mutation_Response = {
  __typename?: 'occupancy_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Occupancy>;
};

/** on_conflict condition type for table "occupancy" */
export type Occupancy_On_Conflict = {
  constraint: Occupancy_Constraint;
  update_columns?: Array<Occupancy_Update_Column>;
  where?: InputMaybe<Occupancy_Bool_Exp>;
};

/** Ordering options when selecting data from "occupancy". */
export type Occupancy_Order_By = {
  current?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  libary_id?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
};

/** primary key columns input for table: occupancy */
export type Occupancy_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "occupancy" */
export enum Occupancy_Select_Column {
  /** column name */
  Current = 'current',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  LibaryId = 'libary_id',
  /** column name */
  Total = 'total'
}

/** input type for updating data in table "occupancy" */
export type Occupancy_Set_Input = {
  current?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  libary_id?: InputMaybe<Scalars['Int']['input']>;
  total?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Occupancy_Stddev_Fields = {
  __typename?: 'occupancy_stddev_fields';
  current?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  libary_id?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Occupancy_Stddev_Pop_Fields = {
  __typename?: 'occupancy_stddev_pop_fields';
  current?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  libary_id?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Occupancy_Stddev_Samp_Fields = {
  __typename?: 'occupancy_stddev_samp_fields';
  current?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  libary_id?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "occupancy" */
export type Occupancy_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Occupancy_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Occupancy_Stream_Cursor_Value_Input = {
  current?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  libary_id?: InputMaybe<Scalars['Int']['input']>;
  total?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Occupancy_Sum_Fields = {
  __typename?: 'occupancy_sum_fields';
  current?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  libary_id?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "occupancy" */
export enum Occupancy_Update_Column {
  /** column name */
  Current = 'current',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  LibaryId = 'libary_id',
  /** column name */
  Total = 'total'
}

export type Occupancy_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Occupancy_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Occupancy_Set_Input>;
  /** filter the rows which have to be updated */
  where: Occupancy_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Occupancy_Var_Pop_Fields = {
  __typename?: 'occupancy_var_pop_fields';
  current?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  libary_id?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Occupancy_Var_Samp_Fields = {
  __typename?: 'occupancy_var_samp_fields';
  current?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  libary_id?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Occupancy_Variance_Fields = {
  __typename?: 'occupancy_variance_fields';
  current?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  libary_id?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "library" */
  library: Array<Library>;
  /** fetch aggregated fields from the table: "library" */
  library_aggregate: Library_Aggregate;
  /** fetch data from the table: "library" using primary key columns */
  library_by_pk?: Maybe<Library>;
  /** fetch data from the table: "occupancy" */
  occupancy: Array<Occupancy>;
  /** fetch aggregated fields from the table: "occupancy" */
  occupancy_aggregate: Occupancy_Aggregate;
  /** fetch data from the table: "occupancy" using primary key columns */
  occupancy_by_pk?: Maybe<Occupancy>;
};


export type Query_RootLibraryArgs = {
  distinct_on?: InputMaybe<Array<Library_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Library_Order_By>>;
  where?: InputMaybe<Library_Bool_Exp>;
};


export type Query_RootLibrary_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Library_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Library_Order_By>>;
  where?: InputMaybe<Library_Bool_Exp>;
};


export type Query_RootLibrary_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOccupancyArgs = {
  distinct_on?: InputMaybe<Array<Occupancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Occupancy_Order_By>>;
  where?: InputMaybe<Occupancy_Bool_Exp>;
};


export type Query_RootOccupancy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Occupancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Occupancy_Order_By>>;
  where?: InputMaybe<Occupancy_Bool_Exp>;
};


export type Query_RootOccupancy_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "library" */
  library: Array<Library>;
  /** fetch aggregated fields from the table: "library" */
  library_aggregate: Library_Aggregate;
  /** fetch data from the table: "library" using primary key columns */
  library_by_pk?: Maybe<Library>;
  /** fetch data from the table in a streaming manner: "library" */
  library_stream: Array<Library>;
  /** fetch data from the table: "occupancy" */
  occupancy: Array<Occupancy>;
  /** fetch aggregated fields from the table: "occupancy" */
  occupancy_aggregate: Occupancy_Aggregate;
  /** fetch data from the table: "occupancy" using primary key columns */
  occupancy_by_pk?: Maybe<Occupancy>;
  /** fetch data from the table in a streaming manner: "occupancy" */
  occupancy_stream: Array<Occupancy>;
};


export type Subscription_RootLibraryArgs = {
  distinct_on?: InputMaybe<Array<Library_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Library_Order_By>>;
  where?: InputMaybe<Library_Bool_Exp>;
};


export type Subscription_RootLibrary_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Library_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Library_Order_By>>;
  where?: InputMaybe<Library_Bool_Exp>;
};


export type Subscription_RootLibrary_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootLibrary_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Library_Stream_Cursor_Input>>;
  where?: InputMaybe<Library_Bool_Exp>;
};


export type Subscription_RootOccupancyArgs = {
  distinct_on?: InputMaybe<Array<Occupancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Occupancy_Order_By>>;
  where?: InputMaybe<Occupancy_Bool_Exp>;
};


export type Subscription_RootOccupancy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Occupancy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Occupancy_Order_By>>;
  where?: InputMaybe<Occupancy_Bool_Exp>;
};


export type Subscription_RootOccupancy_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOccupancy_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Occupancy_Stream_Cursor_Input>>;
  where?: InputMaybe<Occupancy_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

export type AddOccupancyMutationVariables = Exact<{
  objects: Array<Occupancy_Insert_Input> | Occupancy_Insert_Input;
}>;


export type AddOccupancyMutation = { __typename?: 'mutation_root', insert_occupancy?: { __typename?: 'occupancy_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'occupancy', id: number }> } | null };


export const AddOccupancyDocument = gql`
    mutation addOccupancy($objects: [occupancy_insert_input!]!) {
  insert_occupancy(objects: $objects) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type AddOccupancyMutationFn = Apollo.MutationFunction<AddOccupancyMutation, AddOccupancyMutationVariables>;

/**
 * __useAddOccupancyMutation__
 *
 * To run a mutation, you first call `useAddOccupancyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOccupancyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOccupancyMutation, { data, loading, error }] = useAddOccupancyMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useAddOccupancyMutation(baseOptions?: Apollo.MutationHookOptions<AddOccupancyMutation, AddOccupancyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddOccupancyMutation, AddOccupancyMutationVariables>(AddOccupancyDocument, options);
      }
export type AddOccupancyMutationHookResult = ReturnType<typeof useAddOccupancyMutation>;
export type AddOccupancyMutationResult = Apollo.MutationResult<AddOccupancyMutation>;
export type AddOccupancyMutationOptions = Apollo.BaseMutationOptions<AddOccupancyMutation, AddOccupancyMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";
declare const tables: readonly [
  {
    readonly name: "Review";
    readonly columns: readonly [
      {
        readonly name: "Nom";
        readonly type: "string";
      },
      {
        readonly name: "Entreprise";
        readonly type: "string";
      },
      {
        readonly name: "Avis";
        readonly type: "text";
      }
    ];
  }
];
export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;
export type Review = InferredTypes["Review"];
export type ReviewRecord = Review & XataRecord;
export type DatabaseSchema = {
  Review: ReviewRecord;
};
declare const DatabaseClient: any;
export declare class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions);
}
export declare const getXataClient: () => XataClient;
export {};

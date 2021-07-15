import mongoose from "mongoose";
import { IRelationship } from "./relationship.interface";

const relationshipSchema = new mongoose.Schema({
  parent_id: { type: String, required: true },
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export default mongoose.model<IRelationship & mongoose.Document>('Relationship', relationshipSchema);
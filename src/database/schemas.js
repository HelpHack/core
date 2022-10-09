import { Schema } from 'mongoose'

const ObjectId = Schema.ObjectId;

export const Addresses = new Schema({
  user: ObjectId,
  city: String,
  country: String,
  address: String,
  postcode: String,
  lat: Number
})


import {defineSchema , defineTable} from 'convex/server';
import {v} from 'convex/values';
import { text } from 'stream/consumers';

export default defineSchema({
  tasks: defineTable({
    text: v.string(),
    completed: v.boolean(),
  }),
  products: defineTable({
    name: v.string(),
    price: v.number(),
  })
});
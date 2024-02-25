import { createClient } from "next-sanity";
import {
  apiVersion,
  dataset,
  projectId,
  token,
  useCdn,
} from "../../sanity/env";

export const client = createClient({
  apiVersion: apiVersion,
  dataset: dataset,
  projectId: projectId,
  token: token,
  useCdn: useCdn,
});

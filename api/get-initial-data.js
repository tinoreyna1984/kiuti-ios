import { bucket } from "./cosmic-api";
import useSWR from "swr";

async function getBucket() {
  const data = await bucket.objects
    .find({
      type: "modelos", // Object Type slug
    })
    .props("title,slug,metadata"); // response properties

  const modelos = await data.objects;
  return modelos;
}

export function getInitialData() {
  const apiBucket = "https://api.cosmicjs.com/v2/buckets/kiuti-cms-production/objects";
  const pretty = "pretty=true";
  const query = "query=%7B%22type%22%3A%22modelos%22%7D";
  const readKey = "read_key=00AtyYqL4bhq2M1lTZ02lR7dcX5iKQeWXoxUdiZBCh2CnakN8d";
  const limit = "limit=20";
  const queryProps = "props=slug,title,content";

  const apiQuery = `${apiBucket}?${pretty}&${query}&${readKey}&${limit}&${queryProps}`;

  const { data, error } = useSWR(apiQuery, getBucket);
  return { data, error };
}

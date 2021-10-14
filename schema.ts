import { list } from "@keystone-next/keystone";

import "dotenv/config";

import {
  text,
  relationship,
  password,
  timestamp,
  select,
  image,
  file,
} from "@keystone-next/keystone/fields";

import { document } from "@keystone-next/fields-document";
const today = new Date().toISOString();

export const lists = {
  User: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: "unique",
        isFilterable: true,
      }),
      password: password({ validation: { isRequired: true } }),
    },
    ui: {
      listView: {
        initialColumns: ["name"],
      },
    },
  }),

  NewsUpdate: list({
    fields: {
      title: text(),
      photo: relationship({
        ref: "NewsImage.post",
        ui: {
          displayMode: "cards",
          cardFields: ["image", "altText"],
          inlineCreate: { fields: ["image", "altText"] },
        },
      }),
      status: select({
        options: [
          { label: "Published", value: "published" },
          { label: "Draft", value: "draft" },
        ],
        defaultValue: "draft",
        ui: {
          displayMode: "segmented-control",
        },
      }),
      content: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
        dividers: true,
      }),
      publishDate: timestamp({ defaultValue: today }),
    },
  }),
  NewsImage: list({
    fields: {
      image: image(),
      altText: text(),
      post: relationship({ ref: "NewsUpdate.photo" }),
    },
    ui: {
      listView: {
        initialColumns: ["image", "altText"],
      },
    },
  }),
  MediaResource: list({
    fields: {
      name: text(),
      file: file(),
    },
    ui: {
      listView: {
        initialColumns: ["name", "id"],
      },
    },
  }),
};

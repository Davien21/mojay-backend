import { list } from "@keystone-next/keystone";

import { text, password, relationship } from "@keystone-next/keystone/fields";

import { document } from "@keystone-next/fields-document";

export const User = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: "unique",
      isFilterable: true,
    }),
    password: password({ validation: { isRequired: true } }),
    posts: relationship({ ref: "Post.author", many: true }),
  },
  ui: {
    listView: {
      initialColumns: ["name", "posts"],
    },
  },
});

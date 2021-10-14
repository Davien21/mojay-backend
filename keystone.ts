import { config } from "@keystone-next/keystone";

import { lists } from "./schema";

import { withAuth, session } from "./auth";

export default withAuth(
  config({
    files: {
      upload: "local",
      local: {
        storagePath: "public/files",
        baseUrl: "/files",
      },
    },
    images: {
      upload: "local",
      local: {
        storagePath: "public/images",
        baseUrl: "/images",
      },
    },
    db: {
      provider: "postgresql",
      url: process.env.DATABASE_URL,
      async onConnect(keystone) {
        console.log("Connected to the database");
      },
    },

    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
  })
);

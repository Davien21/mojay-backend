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
      provider: "sqlite",
      url: "file:./keystone.db",
    },

    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
  })
);

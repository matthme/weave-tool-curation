import { defineDevCollectiveToolList } from "@theweave/moss-types";

export default defineDevCollectiveToolList({
  developerCollective: {
    id: "matthme",
    name: "matthme",
    description: "Apps for the Weave",
    icon: "https://avatars.githubusercontent.com/u/36768177?v=4",
    contact: {
      website: "https://github.com/matthme",
    },
  },
  tools: [
    {
      id: "matthme.presence",
      versionBranch: "0.11.x",
      title: "Presence",
      subtitle: "Video Calls",
      description: "Peer-to-peer video calls with screen sharing.",
      icon: "https://github.com/matthme/presence/blob/main/ui/icon.png?raw=true",
      tags: ["video calls", "screen sharing"],
      versions: [
        {
          version: "0.11.0",
          url: "https://github.com/matthme/presence/releases/download/0.11.0/presence.webhapp",
          hashes: {
            happSha256:
              "a0fea98d69eedb93f50770ed344452aecf4d6efc1371606251fe73bae30b80e3",
            webhappSha256:
              "0f7e632b7fb92e45c48355753273024b2473db718eff6111938bb7783edd26b7",
            uiSha256:
              "8bbcb208fd838e7acf55c40b6ca10d980d21fe128714a6c076d8ef88ec5c5ba3",
          },
          changelog: "Updated to hdk 0.5.0",
          releasedAt: 1745359398206,
        },
      ],
    },
  ],
});

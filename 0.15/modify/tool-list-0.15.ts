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
      versionBranch: "0.12.x",
      title: "Presence",
      subtitle: "Video Calls",
      description: "Peer-to-peer video calls with screen sharing.",
      icon: "https://github.com/matthme/presence/blob/main/ui/icon.png?raw=true",
      tags: ["video calls", "screen sharing"],
      versions: [
        {
          version: "0.12.0-dev.0",
          url: "https://github.com/matthme/presence/releases/download/0.12.0-dev.0/presence.webhapp",
          hashes: {
            happSha256:
              "8a05d76e3d3584c25bc5d8c48ab8e9ead7d1ae7d7e2c46995d5fee02cb755875",
            webhappSha256:
              "72bd8be239d884d812ed1a342078211f08df7315f3a05916913033fc9b76ed35",
            uiSha256:
              "bb6440fc780bcb375c61773bdc6afecaa6169cb609f7f91cdd02ff519c6be226",
          },
          changelog: "Updated to hdk 0.6.x",
          releasedAt: 1762271291203,
        },
      ],
    },
    {
      id: "matthme.presence",
      versionBranch: "0.13.x",
      title: "Presence",
      subtitle: "Video Calls",
      description: "Peer-to-peer video calls with screen sharing.",
      icon: "https://github.com/matthme/presence/blob/main/ui/icon.png?raw=true",
      tags: ["video calls", "screen sharing"],
      versions: [
        {
          version: "0.13.0",
          url: "https://github.com/matthme/presence/releases/download/0.13.0/presence.webhapp",
          hashes: {
            happSha256:
              "805dffb6a7d037ad24f7ee11bc2e3c343b1d353a76b196cac9cebc65a938f93c",
            webhappSha256:
              "d87366533178400500142191351dc8cae1528f16add5b7b26934abddfc1e7bff",
            uiSha256:
              "93f505278a289e549574dfdba4e55d16f86361f880ebd7c6073d6083878897c5",
          },
          changelog: "Updated to Moss 0.15.0",
          releasedAt: 1766195859731,
        },
      ],
    },
  ],
});

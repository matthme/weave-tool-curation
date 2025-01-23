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
      versionBranch: "0.10.x",
      title: "Presence",
      subtitle: "Video Calls",
      description: "Peer-to-peer video calls with screen sharing.",
      icon: "https://github.com/matthme/presence/blob/main/ui/icon.png?raw=true",
      tags: ["video calls", "screen sharing"],
      versions: [
        {
          version: "0.10.0",
          url: "https://github.com/matthme/presence/releases/download/0.10.0/presence.webhapp",
          hashes: {
            happSha256:
              "2ba46f2f220450a89d76ad5dba18f42ba6cba26784da7405fbe32ce29a9c10c9",
            webhappSha256:
              "738b9f4cfa9d38db6fd7ceee7d80dcf696a609dba91836a34fa4270531f8e009",
            uiSha256:
              "58b6418c17dcba75c1b3d917d90b04aea6c6bdc4fa8d1a6f624fa49e894f2494",
          },
          changelog: "Updated to hdk 0.4.0",
          releasedAt: 1737625866822,
        },
      ],
    },
  ],
});

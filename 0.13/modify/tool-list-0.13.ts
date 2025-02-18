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
        {
          version: "0.10.1",
          url: "https://github.com/matthme/presence/releases/download/0.10.1/presence.webhapp",
          hashes: {
            happSha256:
              "2ba46f2f220450a89d76ad5dba18f42ba6cba26784da7405fbe32ce29a9c10c9",
            webhappSha256:
              "7cf4dca92b1bd2654237700af4f1e33a18cbd82c85e7f33d449da4ada35d5404",
            uiSha256:
              "8c543d37596f018ed1694e9b69074a6a0ae506c30f101694fb93244313321edc",
          },
          changelog:
            "Adds logic to reconcile mismatches between remote peer's audio/video tracks of us and what we actually have running locally",
          releasedAt: 1739188020681,
        },
        {
          version: "0.10.2",
          url: "https://github.com/matthme/presence/releases/download/0.10.2/presence.webhapp",
          hashes: {
            happSha256:
              "2ba46f2f220450a89d76ad5dba18f42ba6cba26784da7405fbe32ce29a9c10c9",
            webhappSha256:
              "67c5a9eda83dfb3a35448f455c2aaba95d3d718033f743a184a69d9a0b9afd02",
            uiSha256:
              "26c9a750dc4411d03f1771ed0c8f0a9735b9b9a3ed40144f812a983083955973",
          },
          changelog:
            "- Adds logging\n- Adds graph to display logs in real-time\n- Adds option to export logs\n- Adds option to change audio and video source\n- Make buttons more intuitive\n- Fix bug where connection status can get stuck at SdpExchange",
          releasedAt: 1739188020681,
        },
      ],
    },
  ],
});

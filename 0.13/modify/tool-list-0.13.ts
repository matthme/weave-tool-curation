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
              "9ce385b71bd9e26944eb34e532e459ff32813a39637c14fce11ef2f45a37890c",
            webhappSha256:
              "165a7d19fce921333d342f96311e4264ca4d187f14a3a5e483a909a3297146d0",
            uiSha256:
              "329d17b4435bf177158330db13a0cffb90e83e841e3a57514499da6bd9d6b4f8",
          },
          changelog: "Updated to hdk 0.4.0",
          releasedAt: 1737625866822,
        },
      ],
    },
  ],
});

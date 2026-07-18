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
      id: "matthme.wordcondenser",
      versionBranch: "0.3.x",
      title: "Word Condenser",
      subtitle: "Creating new language together",
      description:
        "The Word Condenser is an app designed to collectively condense latent [term that yet needs to be condensed] dissolved in the grammatical space of human collectives.\n\nJust as glasses condense water droplets dissolved in warm humid air when entering a cozy pub in winter, the Word Condenser condenses words and sayings that are latently dissolved across the humid space of human experience and imagination.",
      icon: "https://codeberg.org/matthme/rhymez/raw/branch/main/ui/icon.png?raw=true",
      tags: ["chat", "messages", "message", "threads", "channels"],
      versions: [
        {
          version: "0.3.0",
          url: "https://github.com/matthme/wordcondenser/releases/download/0.3.0/word-condenser.webhapp",
          hashes: {
            happSha256:
              "42aaf108f36944cf9764682d98b87ceb3706fe8b4d339cdebcda21cff126e94b",
            webhappSha256:
              "8126ef749b020f00bc8b6a73822f27296ac2f39aa69df1c82db7af248d85029c",
            uiSha256:
              "a1e117f2830a0aa7f0d948835d34e1d51ecef916cac7df853502a0c51ea9cf0d",
          },
          changelog: "For Moss 0.15 (Holochain 0.6)",
          releasedAt: 1784402581212,
        },
      ],
    },
    {
      id: "matthme.rhymez",
      versionBranch: "0.2.x",
      title: "Rhymez",
      subtitle: "Threaded Chat and DMs",
      description:
        "Chat app that supports channels, direct messages to friends and threads at the side in panels. It's time for fun and test, rhyming is allowed. And above all what is best - it's peer-to-peer (not in the cloud). Still it is experimental though - not expecting should you therefore dare, being able to re-import your data (this is alpha, note, not beta) once a newer version is out there.",
      icon: "https://codeberg.org/matthme/rhymez/raw/branch/main/ui/icon.png?raw=true",
      tags: ["chat", "messages", "message", "threads", "channels"],
      versions: [
        {
          version: "0.2.0",
          url: "https://codeberg.org/matthme/rhymez/releases/download/0.2.0/rhymez.webhapp",
          hashes: {
            happSha256:
              "e0e61c82bba6e66048c8571cff7f3e01f521facd77414bd4cd0b0072b26f5ab0",
            webhappSha256:
              "609040b24805f4385ed58ad832b57bab8fb830788f9abb1ac1d1cdd474d6b091",
            uiSha256:
              "5d4af0e8df2ea8ae2e4d9e2bd0a0c86afc861cd9a1ec7c4bf7ef61663064b988",
          },
          changelog: "- updated for Moss 0.15 (Holochain 0.6)",
          releasedAt: 1784401436681,
        },
      ],
    },
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

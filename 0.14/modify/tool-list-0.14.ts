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
              "283bc3dc47d9edb41f6a74bc657c17bcf039c7b72bfc291d2d5ebd6a9efe613c",
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
    {
      id: "matthme.rhymez",
      versionBranch: "0.1.x",
      title: "Rhymez",
      subtitle: "Threaded Chat and DMs",
      description:
        "Chat app that supports channels, direct messages to friends and threads at the side in panels. It's time for fun and test, rhyming is allowed. And above all what is best - it's peer-to-peer (not in the cloud). Still it is experimental though - not expecting should you therefore dare, being able to re-import your data (this is alpha, note, not beta) once a newer version is out there.",
      icon: "https://codeberg.org/matthme/rhymez/raw/branch/main/ui/icon.png?raw=true",
      tags: ["chat", "messages", "message", "threads", "channels"],
      versions: [
        {
          version: "0.1.2",
          url: "https://codeberg.org/matthme/rhymez/releases/download/0.1.2/rhymez.webhapp",
          hashes: {
            happSha256:
              "bbf796ebe322eca972cb32175881c2e5f6d8972e465863653f6e2d87502d0ff8",
            webhappSha256:
              "b3dd118c58d5b2721db6ed04cdfaa571705ba779e7cbe23fae72c53cf7b2eec2",
            uiSha256:
              "989252a49cc47e250485f6afbe030dee9b2fb3c86944d7a61df087630a3272ce",
          },
          changelog:
            "- add option to attach weave assets to messages\n- add typing indicators\n- add option to pin weave assets to channels\n- improve blockquote appearance\n- add tooltips for links\n- display weave URLs as links\n- don't open a thread if text has been selected",
          releasedAt: 1752422505899,
        },
        {
          version: "0.1.1",
          url: "https://codeberg.org/matthme/rhymez/releases/download/0.1.1/rhymez.webhapp",
          hashes: {
            happSha256:
              "bbf796ebe322eca972cb32175881c2e5f6d8972e465863653f6e2d87502d0ff8",
            webhappSha256:
              "22052ef76caa7ba06bfa21fde43b6b60a281e22c4e66f7a50896fb1a06c1e463",
            uiSha256:
              "36b038fcd5c633f866ce5da8a95a4ac1b43899218a8f81b89732564b2f35aa80",
          },
          changelog:
            "- adds support for sending images\n- increase font-size for better readability\n- fix CSS issue in case of very long, overflowing non-whitespace words\n- fix notification content",
          releasedAt: 1752333733357,
        },
        {
          version: "0.1.0",
          url: "https://codeberg.org/matthme/rhymez/releases/download/0.1.0/rhymez.webhapp",
          hashes: {
            happSha256:
              "bbf796ebe322eca972cb32175881c2e5f6d8972e465863653f6e2d87502d0ff8",
            webhappSha256:
              "499885742be5b85f339c3f042bc618e067978e48ea2181f0cbf73520cf184ca0",
            uiSha256:
              "7ef4d498e3ad88309d789043a987410f35e458dd5644e527c93289faeae109c3",
          },
          changelog: "The first experimental release of Rhymez",
          releasedAt: 1752256287974,
        },
      ],
    },
  ],
});
